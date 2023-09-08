import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Suspense } from "react";

import BasePage from "./_components/BasePage/BasePage";
import JSONEntityKeyValue from "./_components/JSONEntityKeyValue/JSONEntityKeyValue";
import Text from "./_components/Text/Text";
import TextLoader from "./_components/TextLoader/TextLoader";

import SpotifyNowPlayingLink from "./SpotifyNowPlayingLink";

export default function Page() {
  const spotifyIcon = (
    <FontAwesomeIcon
      icon={faSpotify}
      style={{ height: "15px", width: "15px" }}
    />
  );

  return (
    <BasePage
      header="cat ./mike_hockerman.json"
      nav={[{ label: "home" }, { label: "mike" }]}
    >
      <div>
        <Text color="muted">{"{"}</Text>
        <JSONEntityKeyValue
          href="mailto:mike@hockerman.com"
          label="email"
          renderTrailingComma
        >
          mike@hockerman.com
        </JSONEntityKeyValue>
        <JSONEntityKeyValue
          href="https://github.com/mhoc"
          hrefIsExternal
          label="github"
          renderTrailingComma
        >
          mhoc
        </JSONEntityKeyValue>
        <JSONEntityKeyValue
          href="/resume-mike-hockerman.pdf"
          label="resume"
          renderTrailingComma
        >
          .pdf
        </JSONEntityKeyValue>
        <JSONEntityKeyValue href="/gpg" label="gpg" renderTrailingComma>
          c1a6c2..
        </JSONEntityKeyValue>

        <br />

        <Suspense
          fallback={
            <JSONEntityKeyValue label={spotifyIcon}>
              <TextLoader />
            </JSONEntityKeyValue>
          }
        >
          <JSONEntityKeyValue label={spotifyIcon}>
            <SpotifyNowPlayingLink />
          </JSONEntityKeyValue>
        </Suspense>

        <br />
        <Text color="muted">{"}"}</Text>
      </div>
    </BasePage>
  );
}
