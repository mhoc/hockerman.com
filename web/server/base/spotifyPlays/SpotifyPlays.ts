import { addMinutes, subMinutes } from "date-fns";
import { entries } from "lodash";
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
      .gte("played_at", subMinutes(new Date(play.played_at), 5).toISOString())
      .lte("played_at", addMinutes(new Date(play.played_at), 5).toISOString())
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

  public async statTop3ArtistsSince(userId: string, since: Date): Promise<string[]> {
    const plays = (await this.supabase.from<SpotifyPlay>("spotify_plays").select()
      .eq("played_by", userId)
      .gte("played_at", since.toISOString())).data;
    const byArtist: {[name: string]: number} = plays.reduce((p, c) => {
      if (p[c.artist_1_name]) {
        p[c.artist_1_name] += 1;
      } else {
        p[c.artist_1_name] = 1;
      }
      if (c.artist_2_name && p[c.artist_2_name]) {
        p[c.artist_2_name] += 1;
      } else if (c.artist_2_name) {
        p[c.artist_2_name] = 1;
      }
      if (c.artist_3_name && p[c.artist_3_name]) {
        p[c.artist_3_name] += 1;
      } else if (c.artist_3_name) {
        p[c.artist_3_name] = 1;
      }
      return p;
    }, {});
    const sorted = entries(byArtist).sort((a, b) => b[1] - a[1]);
    return [
      sorted.length > 0 ? sorted[0][0] : undefined,
      sorted.length > 1 ? sorted[1][0] : undefined,
      sorted.length > 2 ? sorted[2][0] : undefined,
    ];
  }

  public async statTotalPlaysSince(userId: string, since: Date): Promise<number> {
    return (await this.supabase
      .from("spotify_plays")
      .select("id", { count: "exact" })
      .eq("played_by", userId)
      .gte("played_at", since.toISOString())
    ).count;
  }

}
