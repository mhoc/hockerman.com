"use client";

export default function Page() {
  const search = new URLSearchParams();
  search.set("response_type", "code");
  search.set("client_id", "2beb0c8d12ab48c793bc45fdf29c661d");
  search.set(
    "scope",
    [
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
      "user-read-private",
    ].join(" ")
  );
  search.set(
    "redirect_uri",
    "http://localhost:3000/internal/spotify-auth/callback"
  );
  search.set("state", "asdfasdfasdf");
  return (
    <div>
      <span>
        For Mike to authenticate with Spotify. Not useful for anyone else :)
      </span>
      <a href={`https://accounts.spotify.com/authorize?${search.toString()}`}>
        Authenticate :0
      </a>
    </div>
  );
}
