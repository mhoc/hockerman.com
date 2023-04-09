import { useRouter } from "next/router";
import * as gpg from "openpgp";
import { useState } from "react";

import BasePage from "../components/BasePage";
import { Text } from "../components/common/Text";
import colors from "../components/styles/colors";
import * as fonts from "../components/styles/fonts";
import { TextArea } from "../components/common/TextArea";

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
  const [tab, setTab] = useState("key");
  const [unencryptedMessage, setUnencryptedMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");

  const onClickTab = (tab: string) => {
    if (tab === "download") {
      router.push("/mike@hockerman.com.1.gpg");
    } else {
      setTab(tab);
    }
  };
  const onClickKey = () => {
    navigator.clipboard.writeText(key);
  };
  const onClickEncryptedMessage = () => {
    navigator.clipboard.writeText(encryptedMessage);
  };
  const encryptMessage = async (message: string) => {
    const gpgKey = await gpg.readKey({ armoredKey: key });
    const encrypted = await gpg.encrypt({
      message: await gpg.createMessage({ text: message }),
      encryptionKeys: gpgKey,
    });
    setEncryptedMessage(`${encrypted}`);
  };

  return (
    <>
      <BasePage
        header="gpg --armor --export mike@hockerman.com"
        nav={[{ label: "home", href: "/" }, { label: "gpg" }]}
        onClickTab={onClickTab}
        selectedTab={tab}
        tabs={["key", "download", "encrypt"]}
      >
        {tab === "key" && (
          <div
            onClick={onClickKey}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "8px",
            }}
          >
            {key
              .split("\n")
              .map((line) =>
                line === "" ? (
                  <Text color="muted">&nbsp;</Text>
                ) : (
                  <Text color="muted">{line}</Text>
                )
              )}
          </div>
        )}
        {tab === "encrypt" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "8px",
            }}
          >
            <TextArea
              onChange={(t) => {
                setUnencryptedMessage(t);
                encryptMessage(t);
              }}
              value={unencryptedMessage}
            />
            <div
              onClick={onClickEncryptedMessage}
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "16px",
              }}
            >
              {encryptedMessage
                .split("\n")
                .map((line) =>
                  line === "" ? (
                    <Text color="muted">&nbsp;</Text>
                  ) : (
                    <Text color="muted">{line}</Text>
                  )
                )}
            </div>
          </div>
        )}
      </BasePage>
      <style jsx>{`
        .text-field {
          background-color: ${colors.deemphasizeMajor};
          border: 1px solid ${colors.deemphasize};
          color: ${colors.primary};
          font-family: ${fonts.jetBrainsMono.style.fontFamily};
          font-size: 0.8rem;
          max-width: 400px;
          min-width: 400px;
          padding: 8px;
        }
        .text-field:focus {
          outline: none !important;
        }
      `}</style>
    </>
  );
};

export default GPGPage;
