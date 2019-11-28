import React, { Fragment } from 'react';

const IndexPage = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="title">$ cat ./mike_hockerman.json<span className="blink">|</span></div>
        <br />
        <main className="content">
          <span className="deemph">{"{"}</span>
          
          <br />
          &nbsp; <span className="deemph">"</span>email<span className="deemph">": "</span>
          <a className="link" href="mailto:mike@hockerman.com">
            mike@hockerman.com
          </a>
          <span className="deemph">",</span>
          
          <br />
          &nbsp; <span className="deemph">"</span>github<span className="deemph">": "</span>
          <a className="link" href="https://github.com/mhoc" rel="noopener">
            @mhoc
          </a>
          <span className="deemph">",</span>

          <br />
          &nbsp; <span className="deemph">"</span>twitter<span className="deemph">": "</span>
          <a className="link" href="https://twitter.com/mikehockerman" rel="noopener">
            @mikehockerman
          </a>
          <span className="deemph">",</span>

          <br />
          &nbsp; <span className="deemph">"</span>linkedin<span className="deemph">": "</span>
          <a className="link" href="https://linkedin.com/in/mikehock" rel="noopener">
            mikehock
          </a>
          <span className="deemph">",</span>

          <br />
          &nbsp; <span className="deemph">"</span>resume<span className="deemph">": "</span>
          <a className="link" href="/resume-mike-hockerman.pdf">
            link
          </a>
          <span className="deemph">"</span>

          <br />
          <span className="deemph">{"}"}</span>

        </main>
      </div>
      <style jsx global>{`
        html {
          font-family: 'IBM Plex Mono', monospace;
        }
        body {
          background-color: #000000;
          margin: 0;
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
        .deemph {
          color: #616161;
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