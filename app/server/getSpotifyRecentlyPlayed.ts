export async function getSpotifyRecentlyPlayed() {
  const response = await fetch(`https://spotify-bridge.hockerman.com/recently_played`, {
    headers: { "X-SECRET": "D8ci5xysFy9-WX8U" },
  });
  return await response.json();
}
