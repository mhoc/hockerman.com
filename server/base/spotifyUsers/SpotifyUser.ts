import { io, iotstypes } from "@mhoc/synthesize";

export const SpotifyUserSpec = io.type({
  id: io.union([ io.undefined, io.null, io.string ]),
  access_token: io.union([ io.undefined, io.null, io.string ]),
  access_token_expires_at: io.union([ io.undefined, io.null, iotstypes.date ]),
  country: io.union([ io.undefined, io.null, io.string ]),
  display_name: io.union([ io.undefined, io.null, io.string ]),
  email: io.union([ io.undefined, io.null, io.string ]),
  href: io.union([ io.undefined, io.null, io.string ]),
  refresh_token: io.union([ io.undefined, io.null, io.string ]),
  spotify_id: io.union([ io.undefined, io.null, io.string ]),
  sync_play_history: io.union([ io.undefined, io.null, io.boolean ]),
});

export type SpotifyUser = io.TypeOf<typeof SpotifyUserSpec>;
