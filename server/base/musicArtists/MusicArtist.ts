import { io } from "@mhoc/synthesize";

export const MusicArtistSpec = io.type({
  id: io.union([ io.undefined, io.null, io.string ]),
  name: io.union([ io.undefined, io.null, io.string ]),
  spotifyHref: io.union([ io.undefined, io.null, io.string ]),
  spotifyId: io.union([ io.undefined, io.null, io.string ]),
});

export type MusicArtist = io.TypeOf<typeof MusicArtistSpec>;
