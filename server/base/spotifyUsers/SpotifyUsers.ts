import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { nanoid } from "nanoid";

import { SpotifyUser } from "./SpotifyUser";

export class SpotifyUsers {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ROOT_KEY);
  }

  public async getById(id: string): Promise<SpotifyUser> {
    return (await this.supabase.from("spotify_users").select().eq("id", id)).data[0];
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
        access_token: user.access_token,
        access_token_expires_at: user.access_token_expires_at,
        country: user.country,
        display_name: user.display_name,
        email: user.email,
        href: user.href,
        refresh_token: user.refresh_token,
        spotify_id: user.spotify_id,
        sync_play_history: user.sync_play_history,
      });
      if (insertResp.error) {
        throw new Error(`${insertResp.error.message}`);
      }
      return { created: true };
    }
    return { created: false };
  }

}