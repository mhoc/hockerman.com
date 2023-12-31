export interface Env {
	KV_HOCKERMAN_COM_SPOTIFY_REFRESH_TOKENS: KVNamespace;
	SPOTIFY_CLIENT_ID: string;
	SPOTIFY_CLIENT_SECRET: string;
}

// This worker checks for this in the `Authorization: Basic` header. Obviously this is open source.
// Its not meant to be secret, and nothing this API exposes isn't already available on
// hockerman.com; its just a small mitigation for bots and such.
const KINDA_SECRET = 'OxcnwUZBWMrwf_hQKMpJmmcXkNcf9ID3';

const CORS_HEADERS = {
	'Access-Control-Allow-Headers': '*',
	'Access-Control-Allow-Methods': 'GET',
	'Access-Control-Allow-Origin': '*',
};

async function getSpotifyAccessToken(env: Env): Promise<string> {
	const refresh_token = await env.KV_HOCKERMAN_COM_SPOTIFY_REFRESH_TOKENS.get('2pkxvc9fMW5IH-MsSdj-h');
	if (!refresh_token) {
		throw new Error("no refresh token for '2pkxvc9fMW5IH-MsSdj-h'");
	}
	const authBody = new URLSearchParams({
		grant_type: 'refresh_token',
		refresh_token,
	});
	const authHeader = btoa(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`);
	const tokenResp = await fetch('https://accounts.spotify.com/api/token', {
		body: authBody,
		cf: {
			cacheEverything: true,
			cacheTtl: 3500,
		},
		headers: {
			Authorization: `Basic ${authHeader}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		method: 'POST',
	});
	const { access_token } = (await tokenResp.json()) as any;
	return access_token;
}

async function current(env: Env) {
	const accessToken = await getSpotifyAccessToken(env);
	const currentlyPlayingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
		cf: {
			cacheEverything: true,
			cacheTtl: 5,
		},
		headers: { Authorization: `Bearer ${accessToken}` },
	});
	if (currentlyPlayingResponse.status === 204) {
		return new Response('', {
			headers: {
				'Content-Type': 'application/json',
				...CORS_HEADERS,
			},
			status: 204,
		});
	}
	return new Response(JSON.stringify(await currentlyPlayingResponse.json()), {
		headers: {
			'Content-Type': 'application/json',
			...CORS_HEADERS,
		},
		status: 200,
	});
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		if (request.method === 'OPTIONS') {
			return new Response('OK', {
				headers: CORS_HEADERS,
			});
		}
		const authHeader = request.headers.get('Authorization')?.split(' ');
		if (authHeader?.length !== 2 || authHeader[0] !== 'Basic' || authHeader[1] !== KINDA_SECRET) {
			return new Response('Unauthorized', { status: 401 });
		}
		const url = new URL(request.url);
		switch (url.pathname) {
			case '/current':
				return current(env);
				break;
		}
		return new Response('Not Found', { status: 404 });
	},
};
