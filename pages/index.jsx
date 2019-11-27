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
          <div className="title">$ cat ./mike_hockerman.json<span className="blink">|</span></div>
          <br />
          <div className="content">
            {"{"}
            
            <br />
            &nbsp; "email": "
            <a className="link" href="mailto:mike@hockerman.com">
              mike@hockerman.com
            </a>
            ",
            
            <br />
            &nbsp; "github": "
            <a className="link" href="https://github.com/mhoc">
              @mhoc
            </a>
            ",

            <br />
            &nbsp; "twitter": "
            <a className="link" href="https://twitter.com/mikehockerman">
              @mikehockerman
            </a>
            ",

            <br />
            &nbsp; "linkedin": "
            <a className="link" href="https://linkedin.com/in/mikehock">
              mikehock
            </a>
            ",

            <br />
            &nbsp; "resume": "
            <a className="link" href="https://dh0lmlyf7r97y.cloudfront.net/static/resume-mike-hockerman.pdf">
              link
            </a>
            "

            <br />
            {"}"}

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
        .content {
          color: #d1c4e9;
          line-height: 1.4;
          margin: 0px 0px 2px;
        }
        .link {
          color: #80cbc4;
        }
        .blink {
          animation: blinkanim 1s steps(2, start) infinite;
          -webkit-animation: blinkanim 1s steps(2, start) infinite;
        }
        @keyframes blinkanim {
          to {
            visibility: hidden;
          }
        }
        @-webkit-keyframes blinkanim {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </Fragment>
  );
}

export default IndexPage;