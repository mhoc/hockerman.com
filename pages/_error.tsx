import { useRouter } from "next/router";

import BasePage from "../components/BasePage";
import { TextStd } from "../components/text";
import { useEffect, useState } from "react";

const Error = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    setUrl(router.asPath);
  }, []);

  return (
    <BasePage
      header={`cat .${url}`}
      nav={[{ label: "home", href: "/" }, { label: "mike" }]}
    >
      <TextStd>{`cat: .${url}: No such file or directory`}</TextStd>
    </BasePage>
  );
};

export default Error;
