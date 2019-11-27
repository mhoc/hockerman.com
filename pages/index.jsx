import Head from 'next/head';
import React, { Fragment } from 'react';

const IndexPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Mike Hockerman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="background">
        <div className="container">
          <div className="title">$ mike hockerman</div>
          <br />
          <br />
          <div className="item">
            email &nbsp;
            <a className="link" href="mailto:mike@hockerman.com">
              mike@hockerman.com
            </a>
          </div>
          <div className="item">
            github &nbsp;
            <a className="link" href="https://github.com/mhoc">
              @mhoc
            </a>
          </div>
          <div className="item">
            twitter &nbsp;
            <a className="link" href="https://twitter.com/mikehockerman">
              @mikehockerman
            </a>
          </div>
          <div className="item">
            linkedin &nbsp;
            <a className="link" href="https://www.linkedin.com/in/mikehock/">
              mikehock
            </a>
          </div>
          <div className="item">
            resume &nbsp;
            <a className="link" href="https://dh0lmlyf7r97y.cloudfront.net/static/resume-mike-hockerman.pdf">
              download
            </a>
          </div>
        </div>
      </div>
      <style jsx global>{`
        html {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 100%;
        }
        body {
          margin: 0;
        }
        .background {
          background-color: #000000;
          height: 100vh;
          width: 100vw;
        }
        .container {
          background-color: transparent;
          padding: 15vh 10vw;
        }
        .title {
          color: #d1c4e9;
          font-size: 1.5rem;
        }
        .item {
          color: #d1c4e9;
          margin: 0px 0px 2px;
        }
        .link {
          color: #80cbc4;
        }
      `}</style>
    </Fragment>
  );
}

export default IndexPage;