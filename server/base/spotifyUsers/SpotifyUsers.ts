import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { nanoid } from "nanoid";

import { SpotifyUser } from "./SpotifyUser";

export class SpotifyUsers {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ROOT_KEY);
  }

  public async insert(user: SpotifyUser): Promise<{ created: boolean }> {
    const existingUserQueryResp = await this.supabase
      .from("spotify_users")
      .select()
      .eq(user.id ? "id" : "spotify_id", user.id ? user.id : user.spotifyId);
    if (existingUserQueryResp.error) {
      throw new Error(`${existingUserQueryResp.error.message}`);
    }
    if (existingUserQueryResp.data.length === 0) {
      const insertResp = await this.supabase.from("spotify_users").insert({
        id: nanoid(),
        access_token: user.accessToken,
        access_token_expires_at: user.accessTokenExpiresAt,
        country: user.country,
        display_name: user.displayName,
        email: user.email,
        href: user.href,
        refresh_token: user.refreshToken,
        spotify_id: user.spotifyId,
        sync_play_history: user.syncPlayHistory,
      });
      if (insertResp.error) {
        throw new Error(`${insertResp.error.message}`);
      }
      return { created: true };
    }
    return { created: false };
  }

}