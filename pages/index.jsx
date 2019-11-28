import React, { Fragment } from 'react';

import BasePage from "../components/BasePage";
import Header from  "../components/Header";

const IndexPage = () => {
  return (
    <Fragment>
      <BasePage>
        <Header text="cat ./mike_hockerman.json" />
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
      </BasePage>
      <style jsx global>{`
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
      `}</style>
    </Fragment>
  );
}

export default IndexPage;