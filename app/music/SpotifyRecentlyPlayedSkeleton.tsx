import Link from "../_components/Link/Link";
import Text from "../_components/Text/Text";
import TextLoader from "../_components/TextLoader/TextLoader";

export default function SpotifyRecentlyPlayedSkeletion() {
  return (
    <>
      <div>
        <Text color="muted">
          [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
        </Text>
        &nbsp;
        <TextLoader />
        &nbsp;
        <Link hideUnderline>{">"}</Link>
      </div>
      <div>
        <Text color="muted">
          [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
        </Text>
        &nbsp;
        <TextLoader />
        &nbsp;
        <Link hideUnderline>{">"}</Link>
      </div>
      <div>
        <Text color="muted">
          [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
        </Text>
        &nbsp;
        <TextLoader />
        &nbsp;
        <Link hideUnderline>{">"}</Link>
      </div>
      <div>
        <Text color="muted">
          [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
        </Text>
        &nbsp;
        <TextLoader />
        &nbsp;
        <Link hideUnderline>{">"}</Link>
      </div>
    </>
  );
}
