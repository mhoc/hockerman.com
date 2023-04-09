import { Analytics } from "@vercel/analytics/react";
import App from "next/app";
import Head from "next/head";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Mike Hockerman</title>
        </Head>
        <Component {...pageProps} />
        <Analytics />
      </>
    );
  }
}

export default MyApp;
