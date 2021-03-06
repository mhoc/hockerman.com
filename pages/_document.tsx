import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="Description" content="Mike Hockerman's personal website." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
          @font-face {
            font-family: 'IBM Plex Mono';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: local('IBM Plex Mono'), local('IBMPlexMono'), url(/public/fonts/ibm-plex-mono-latin.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        `}</style>
      </Html>
    )
  }
}

export default MyDocument;
