import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const App = ({ Component }: any) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mike Hockerman</title>
      </Head>
      <Component />
      <Analytics />
    </>
  );
};

export default App;
