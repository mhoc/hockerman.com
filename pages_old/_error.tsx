import { useRouter } from "next/router";

import BasePage from "../app/_components/BasePage/BasePage";
import { useEffect, useState } from "react";
import { Text } from "../components/common/Text";

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
      <Text>{`cat: .${url}: No such file or directory`}</Text>
    </BasePage>
  );
};

export default Error;
