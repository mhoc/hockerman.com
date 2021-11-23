import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { nanoid } from "nanoid";

import { SpotifyPlay } from "./SpotifyPlay";

export class SpotifyPlays {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ROOT_KEY);
  }

  public async insert(play: SpotifyPlay): Promise<SpotifyPlay> {
    const existingPlays = (await this.supabase.from("spotify_plays")
      .select()
      .eq("played_at", play.played_at)
      .eq("played_by", play.played_by)
      .eq("spotify_track_id", play.spotify_track_id));
    if (existingPlays.error) {
      throw new Error(existingPlays.error.message);
    }
    if (existingPlays.data.length > 1) {
      throw new Error("more than one play found with query. this is really weird.");
    } else if (existingPlays.data.length === 0) {
      play.id = nanoid();
      await this.supabase.from("spotify_plays").insert(play);
    }
    return play;
    // otherwise, there was one queried, which means this play is already registered. continue onward
  }

}
