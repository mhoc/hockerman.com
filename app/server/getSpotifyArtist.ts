export async function getSpotifyArtist(artistId: string) {
  const response = await fetch(`https://spotify-bridge.hockerman.com/artists?id=${artistId}`, {
    headers: { "X-SECRET": "D8ci5xysFy9-WX8U" },
  });
  return await response.json();
}
