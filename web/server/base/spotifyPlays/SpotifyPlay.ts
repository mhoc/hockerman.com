import { io, iotstypes } from "@mhoc/synthesize";

export const SpotifyPlay = io.type({
  id: io.union([ io.null, io.undefined, io.string ]),
  album_name: io.union([ io.null, io.undefined, io.string ]),
  artist_1_name: io.union([ io.null, io.undefined, io.string ]),
  artist_2_name: io.union([ io.null, io.undefined, io.string ]),
  artist_3_name: io.union([ io.null, io.undefined, io.string ]),
  played_at: io.union([ io.null, io.undefined, io.string ]),
  played_by: io.union([ io.null, io.undefined, io.string ]),
  spotify_track_id: io.union([ io.null, io.undefined, io.string ]),
  track_duration_ms: io.union([ io.null, io.undefined, io.number ]),
  track_name: io.union([ io.null, io.undefined, io.string ]),
});

export type SpotifyPlay = io.TypeOf<typeof SpotifyPlay>;
