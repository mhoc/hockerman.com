import axios from "axios";
import { isAfter } from "date-fns";

interface RecentlyPlayedOutput {
  recentPlays: {
    context: {};
    played_at: string;
    track: {
      artists: {
        href: string;
        id: string;
        name: string;
      }[];
      album: {
        name: string;
        id: string;
      };
      id: string;
      href: string;
      name: string;
      duration_ms: number;
    };
  }[];
}

interface UserOutput {
  country: string;
  displayName: string;
  email: string;
  href: string;
  id: string;
}

interface CurrentlyPlayingOutput {
  currentlyPlaying: any;
}

export default class SpotifyClient {
  constructor(
    public readonly accessToken: string,
    public readonly expiresAt: Date,
    public readonly refreshToken: string,
    public readonly scope: string
  ) {}

  public async currentlyPlaying(): Promise<CurrentlyPlayingOutput> {
    await this.refresh();
    const recentlyPlayedResp = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: { Authorization: `Bearer ${this.accessToken}` },
      }
    );
    return { currentlyPlaying: recentlyPlayedResp.data };
  }

  public async recentlyPlayed(): Promise<RecentlyPlayedOutput> {
    await this.refresh();
    const recentlyPlayedResp = await axios.get(
      "https://api.spotify.com/v1/me/player/recently-played",
      {
        headers: { Authorization: `Bearer ${this.accessToken}` },
      }
    );
    const { items } = recentlyPlayedResp.data;
    return { recentPlays: items };
  }

  public async refresh(): Promise<void> {
    if (isAfter(this.expiresAt, new Date())) {
      return;
    }
    return; // not implemented yet
  }

  public async user(): Promise<UserOutput> {
    await this.refresh();
    const userResp = await axios.get("https://api.spotify.com/v1/me", {
      headers: { Authorization: `Bearer ${this.accessToken}` },
    });
    const { country, display_name, email, href, id } = userResp.data;
    return {
      country,
      displayName: display_name,
      email,
      href,
      id,
    };
  }
}
