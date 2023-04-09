import { useRouter } from "next/router";

import BasePage from "../components/BasePage";
import { Text } from "../components/common/Text";

const key = `-----BEGIN PGP PUBLIC KEY BLOCK-----
mDMEZAAZkBYJKwYBBAHaRw8BAQdAFgNYCJH6GTSmQpG08IxizmnCcl7L+LPxRWe+
XGAgCOy0I01pa2UgSG9ja2VybWFuIDxtaWtlQGhvY2tlcm1hbi5jb20+iJMEExYK
ADsWIQTBpsI6/u2b2kVVGkV+FjeQREAVZQUCZAAZkAIbAwULCQgHAgIiAgYVCgkI
CwIEFgIDAQIeBwIXgAAKCRB+FjeQREAVZXlsAP9jvZ9niQuNfV2PqQurfQZTXoOV
F+Cu8nJzjghc7Fs4YQD9HTJuxL9fQu1WdUrr9xmWvmnA0KF8rqY9rEr/rE8sLwW4
OARkABmQEgorBgEEAZdVAQUBAQdA+FSNJLveGK+4chykQvEexXaLUMNG4XOm5DKJ
xL6ApzsDAQgHiHgEGBYKACAWIQTBpsI6/u2b2kVVGkV+FjeQREAVZQUCZAAZkAIb
DAAKCRB+FjeQREAVZbQZAQDf+Q7tHFeoRXUZJ26vhwQwHF8y06cbRg79gU/U+vMp
mQEAhUt3Vg/5qU69WdfJqfhnJMjo09vzknmFkmn7t+KkdgM=
=3HcH
-----END PGP PUBLIC KEY BLOCK-----`;

const GPGPage = () => {
  const router = useRouter();

  const onClickTab = (tab: string) => {
    if (tab === "download") {
      router.push("/mike@hockerman.com.1.gpg");
    }
  };
  const onClickKey = () => {
    navigator.clipboard.writeText(key);
  };
  return (
    <>
      <BasePage
        header="gpg --armor --export mike@hockerman.com"
        nav={[{ label: "home", href: "/" }, { label: "gpg" }]}
        onClickTab={onClickTab}
        selectedTab="key"
        tabs={["key", "download"]}
      >
        <div
          onClick={onClickKey}
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "8px",
          }}
        >
          {key.split("\n").map((line) => (
            <Text color="muted">{line}</Text>
          ))}
        </div>
      </BasePage>
      <style jsx>{``}</style>
    </>
  );
};

export default GPGPage;
