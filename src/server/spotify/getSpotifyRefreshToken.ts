/**
 * getSpotifyRefreshToken returns the static refresh token associated with this spotify app. This is
 * currently stored as an environment variable.
 */
export async function getSpotifyRefreshToken(): Promise<string> {
  const refreshToken = import.meta.env.SPOTIFY_REFRESH_TOKEN;
  if (refreshToken && typeof refreshToken === "string") {
    return refreshToken;
  } else {
    throw new Error("SPOTIFY_REFRESH_TOKEN not defined");
  }
}
