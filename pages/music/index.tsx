import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { intervalToDuration } from "date-fns";
import React, { useEffect, useState } from "react";

import BasePage from "../../components/BasePage";
import { TextDeemph, TextLink, TextSubheader } from "../../components/text";

const MusicPage = () => {
  const [ listeningToState, setListeningToState ] = useState<"loading" | "nothing" | "playing">("loading");

  const [ listeningToTrack, setListeningToTrack ] = useState<string>("loading...");
  const [ listeningToTrackHref, setListeningToTrackHref ] = useState<string | undefined>();

  const [ listeningToArtist, setListeningToArtist ] = useState<string | undefined>();
  const [ listeningToArtistHref, setListeningToArtistHref ] = useState<string | undefined>();

  const [ listeningToAlbum, setListeningToAlbum ] = useState<string | undefined>();
  const [ listeningToAlbumHref, setListeningToAlbumHref ] = useState<string | undefined>();

  const [ progressCurrent, setProgressCurrent ] = useState<number | undefined>();
  const [ progressTotal, setProgressTotal ] = useState<number | undefined>();

  useEffect(() => {
    fetch("/api/spotify/now_playing")
      .then(r => r.json())
      .then(({ currentlyPlaying }) => {
        if (!currentlyPlaying) {
          return setListeningToState("nothing");
        }
        setListeningToState("playing");
        setListeningToTrack(currentlyPlaying.item.name);
        setListeningToTrackHref(`https://open.spotify.com/track/${currentlyPlaying.item.id}`);
        setListeningToArtist(currentlyPlaying.item.artists[0].name);
        setListeningToArtistHref(`https://open.spotify.com/artist/${currentlyPlaying.item.artists[0].id}`);
        setListeningToAlbum(currentlyPlaying.item.album.name);
        setListeningToAlbumHref(`https://open.spotify.com/album/${currentlyPlaying.item.album.id}`);
        setProgressCurrent(currentlyPlaying.progress_ms);
        setProgressTotal(currentlyPlaying.item.duration_ms);
      });
  }, []);

  const currentProgressDuration = intervalToDuration({ start: 0, end: !!progressCurrent ? progressCurrent : 0 });
  const currentProgressFormatted = `${currentProgressDuration.minutes}:${String(currentProgressDuration.seconds).padStart(2, "0")}`;
  const totalDuration = intervalToDuration({ start: 0, end: !!progressTotal ? progressTotal : 0 });
  const totalDurationFormatted = `${totalDuration.minutes}:${String(totalDuration.seconds).padStart(2, "0")}`;

  return (
    <>
      <BasePage header="ffplay ./mp3s/" nav={[{label:"home", href:"/"},{label:"music"}]}>
        <div className="now-playing-header">
          <TextSubheader>
            <FontAwesomeIcon className="spotify-icon" icon={faSpotify} style={{ height: "18px", width: "18px" }} />&nbsp;
            {listeningToState === "loading" && <TextDeemph>Loading...</TextDeemph>}
            {listeningToState === "nothing" && <TextDeemph>Now Playing: Nothing :)</TextDeemph>}
            {listeningToState === "playing" && (
              <>
                <TextLink href={listeningToTrackHref} target="_blank" rel="noopener">{listeningToTrack}</TextLink>
                &nbsp;<TextDeemph>by</TextDeemph>&nbsp;
                <TextLink href={listeningToArtistHref} target="_blank" rel="noopener">{listeningToArtist}</TextLink>
                {listeningToAlbum !== listeningToTrack && (
                  <>
                    &nbsp;<TextDeemph>on</TextDeemph>&nbsp;
                    <TextLink href={listeningToAlbumHref} target="_blank" rel="noopener">{listeningToAlbum}</TextLink>
                  </>
                )}
                &nbsp;
                <TextDeemph>({currentProgressFormatted}/{totalDurationFormatted})</TextDeemph>
              </>
            )}
          </TextSubheader>
        </div>
      </BasePage>
      <style jsx>{`
        .now-playing-header {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}

export default MusicPage;
