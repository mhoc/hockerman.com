import { URLSearchParams } from "url";
import React from "react";

import { SpotifyApplication } from "../../../server/spotify";

export async function getStaticProps() {
  const spotifyApp = new SpotifyApplication();
  const searchParams = new URLSearchParams({
    client_id: spotifyApp.clientId(),
    scope: spotifyApp.scopes(),
    state: spotifyApp.stateToken(),
    redirect_uri: spotifyApp.redirectUrl(),
    response_type: "code",
  });
  return { props: { queryString: searchParams.toString() } };
}

interface Props {
  queryString?: string;
}

export default ({ queryString }: Props) => {
  if (!queryString) {
    return (
      <h1>Spotify Is Not Configured</h1>
    );
  }
  const toSpotify = `https://accounts.spotify.com/authorize?${queryString}`;
  return (
    <div>
      <h1>Auth with Spotify</h1>
      <p>
        This really isn't that useful for anyone except Mike. But you're welcome to give me access
        to your Spotify account if you really want to.
      </p>
      <a href={toSpotify} target="_blank">
        <pre>{toSpotify}</pre>
      </a>
    </div>
  );
};
