import React, { Fragment } from 'react';

const IndexPage = () => {
  return (
    <Fragment>
      <div className="background">
        <div className="container">
          <div className="title">$ cat ./mike_hockerman.json<span className="blink">|</span></div>
          <br />
          <main className="content">
            {"{"}
            
            <br />
            &nbsp; "email": "
            <a className="link" href="mailto:mike@hockerman.com">
              mike@hockerman.com
            </a>
            ",
            
            <br />
            &nbsp; "github": "
            <a className="link" href="https://github.com/mhoc" rel="noopener">
              @mhoc
            </a>
            ",

            <br />
            &nbsp; "twitter": "
            <a className="link" href="https://twitter.com/mikehockerman" rel="noopener">
              @mikehockerman
            </a>
            ",

            <br />
            &nbsp; "linkedin": "
            <a className="link" href="https://linkedin.com/in/mikehock" rel="noopener">
              mikehock
            </a>
            ",

            <br />
            &nbsp; "resume": "
            <a className="link" href="/resume-mike-hockerman.pdf">
              link
            </a>
            "

            <br />
            {"}"}

          </main>
        </div>
      </div>
      <style jsx global>{`
        html {
          font-family: 'IBM Plex Mono', monospace;
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
        @media only screen and (max-width: 600px) {
          .container {
            padding: 15vh 5vw;
          }
        }
        .title {
          color: #d1c4e9;
          font-size: 1.5rem;
        }
        @media only screen and (max-width: 600px) {
          .title {
            font-size: 1.2rem;
          }
        }
        .content {
          color: #d1c4e9;
          line-height: 1.4;
          margin: 0px 0px 2px;
        }
        @media only screen and (max-width: 600px) {
          .content {
            font-size: 0.9rem;
          }
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