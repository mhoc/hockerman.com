import { get as getEdgeConfig } from "@vercel/edge-config";

const MIKES_USER_ID_NOT_SECRET_NO_HACKERINO = "2pkxvc9fMW5IH-MsSdj-h";

export default async function getSpotifyAccessToken(): Promise<string> {
  // Get refresh token from vercel edge config
  const r: any = (
    await getEdgeConfig(MIKES_USER_ID_NOT_SECRET_NO_HACKERINO)
  )?.valueOf();
  if (!r) {
    throw new Error("no edge-config entry for specified user");
  }
  const { refresh_token } = r;
  if (!refresh_token) {
    throw new Error(
      `no refresh_token entry for ${MIKES_USER_ID_NOT_SECRET_NO_HACKERINO}`
    );
  }

  // Exchange with spotify for an access token
  const authBody = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token,
  });
  const authHeader = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID!}:${process.env.SPOTIFY_CLIENT_SECRET!}`
  ).toString("base64");
  const tokenResp = await fetch("https://accounts.spotify.com/api/token", {
    body: authBody,
    headers: {
      Authorization: `Basic ${authHeader}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
    next: { revalidate: 3500 },
  });
  const { access_token } = await tokenResp.json();
  return access_token;
}
