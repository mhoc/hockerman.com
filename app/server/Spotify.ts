import { get as edgeConfigGet } from "@vercel/edge-config";
import { MemoryCache } from "./MemoryCache";

export abstract class Spotify {
  private static _accessToken = new MemoryCache<string>(3500);
  private static _spotifyMikeHockermanUserId = "2pkxvc9fMW5IH-MsSdj-h";
  private static _spotifyBridgeKindaSecret = "D8ci5xysFy9-WX8U";

  static async accessToken() {
    const cachedAccessToken = Spotify._accessToken.get();
    if (cachedAccessToken) {
      return cachedAccessToken;
    }
    const refreshTokenRecord = await edgeConfigGet<{ refresh_token: string }>(Spotify._spotifyMikeHockermanUserId);
    if (!refreshTokenRecord) {
      throw new Error(`no edge config refresh token record found for userId=${Spotify._spotifyMikeHockermanUserId}`);
    }
    const authBody = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshTokenRecord.refresh_token,
    });
    const authHeader = btoa(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`);
    const tokenResp = await fetch("https://accounts.spotify.com/api/token", {
      body: authBody,
      headers: {
        Authorization: `Basic ${authHeader}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });
    const responseAccessToken = (await tokenResp.json()).access_token;
    Spotify._accessToken.set(responseAccessToken);
    return responseAccessToken;
  }

  static async artist(artistId: string) {
    const response = await fetch(`https://spotify-bridge.hockerman.com/artists?id=${artistId}`, {
      headers: { "X-SECRET": Spotify._spotifyBridgeKindaSecret },
    });
    return await response.json();
  }

  static async currentlyPlaying() {
    const currentlyPlayingResponse = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: { Authorization: `Bearer ${await Spotify.accessToken()}` },
    });
    return currentlyPlayingResponse;
  }

  static async recentlyPlayed() {
    const response = await fetch(`https://spotify-bridge.hockerman.com/recently_played`, {
      headers: { "X-SECRET": Spotify._spotifyBridgeKindaSecret },
    });
    return await response.json();
  }

  static async trendingSongs() {
    const response = await fetch(`https://spotify-bridge.hockerman.com/trending_songs`, {
      headers: { "X-SECRET": Spotify._spotifyBridgeKindaSecret },
    });
    return response;
  }

  static async topArtists(twindow: string) {
    const response = await fetch(`https://spotify-bridge.hockerman.com/top_artists?window=${twindow}`, {
      headers: { "X-SECRET": Spotify._spotifyBridgeKindaSecret },
    });
    return response;
  }
}
