import { io, iotstypes } from "@mhoc/synthesize";

export const SpotifyUserSpec = io.type({
  id: io.union([ io.undefined, io.null, io.string ]),
  accessToken: io.union([ io.undefined, io.null, io.string ]),
  accessTokenExpiresAt: io.union([ io.undefined, io.null, iotstypes.date ]),
  country: io.union([ io.undefined, io.null, io.string ]),
  displayName: io.union([ io.undefined, io.null, io.string ]),
  email: io.union([ io.undefined, io.null, io.string ]),
  href: io.union([ io.undefined, io.null, io.string ]),
  refreshToken: io.union([ io.undefined, io.null, io.string ]),
  spotifyId: io.union([ io.undefined, io.null, io.string ]),
  syncPlayHistory: io.union([ io.undefined, io.null, io.boolean ]),
});

export type SpotifyUser = io.TypeOf<typeof SpotifyUserSpec>;
