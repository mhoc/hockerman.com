import axios from "axios";
import { addSeconds } from "date-fns";

import SpotifyClient from "./SpotifyClient";

export default class SpotifyApplication {
  public async clientFromAuthCode(
    authorizationCode: string
  ): Promise<SpotifyClient> {
    const authBody = new URLSearchParams({
      code: authorizationCode,
      grant_type: "authorization_code",
      redirect_uri: this.redirectUrl(),
    }).toString();
    const authHeader = Buffer.from(
      `${this.clientId()}:${this.clientSecret()}`
    ).toString("base64");
    const tokenResp = await axios.post(
      "https://accounts.spotify.com/api/token",
      authBody,
      {
        headers: {
          Authorization: `Basic ${authHeader}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const { access_token, expires_in, refresh_token, scope } = tokenResp.data;
    return new SpotifyClient(
      access_token,
      addSeconds(new Date(), expires_in),
      refresh_token,
      scope
    );
  }

  public async clientFromRefreshToken(
    refreshToken: string
  ): Promise<SpotifyClient> {
    const authBody = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });
    const authHeader = Buffer.from(
      `${this.clientId()}:${this.clientSecret()}`
    ).toString("base64");
    const tokenResp = await axios.post(
      "https://accounts.spotify.com/api/token",
      authBody,
      {
        headers: {
          Authorization: `Basic ${authHeader}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const { access_token, expires_in, refresh_token, scope } = tokenResp.data;
    return new SpotifyClient(
      access_token,
      addSeconds(new Date(), expires_in),
      refresh_token,
      scope
    );
  }

  public clientId(): string {
    return process.env.SPOTIFY_CLIENT_ID!;
  }

  public clientSecret(): string {
    return process.env.SPOTIFY_CLIENT_SECRET!;
  }

  public redirectUrl(): string {
    return `${process.env.ROOT_URL}/api/spotify/callback`;
  }

  public scopes(): string {
    return [
      "user-read-private",
      "user-read-email",
      "user-read-currently-playing",
      "user-read-recently-played",
    ].join(" ");
  }

  public stateToken(): string {
    return "statelol";
  }
}
