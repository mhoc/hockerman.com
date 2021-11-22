import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { nanoid } from "nanoid";

import { MusicArtist } from "./MusicArtist";

export class MusicArtists {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ROOT_KEY);
  }

  public async insert(artist: MusicArtist): Promise<{ created: boolean }> {
    const existingUserQueryResp = await this.supabase
      .from("music_artists")
      .select()
      .eq(artist.id ? "id" : "spotify_id", artist.id ? artist.id : artist.spotifyId);
    if (existingUserQueryResp.error) {
      throw new Error(`${existingUserQueryResp.error.message}`);
    }
    if (existingUserQueryResp.data.length === 0) {
      const insertResp = await this.supabase.from("music_artists").insert({
        id: nanoid(),
        name: artist.name,
        spotify_href: artist.spotifyHref,
        spotify_id: artist.spotifyId,
      });
      if (insertResp.error) {
        throw new Error(`${insertResp.error.message}`);
      }
      return { created: true };
    }
    return { created: false };
  }

}