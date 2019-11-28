import React, { Fragment } from 'react';

import BasePage from "../components/BasePage";
import BodyJSON from "../components/BodyJSON";
import Header from "../components/Header";

const IndexPage = () => {
  const dataset = [
    { key: "email", value: "mike@hockerman.com", href: "mailto:mike@hockerman.com" },
    { key: "github", value: "mhoc", href: "https://github.com/mhoc", isExternal: true },
    { key: "twitter", value: "@mikehockerman", href: "https://twitter.com/MikeHockerman", isExternal: true },
    { key: "linkedin", value: "mikehock", href: "https://linkedin.com/in/mikehock", isExternal: true },
    { key: "resume", value: "link", href: "/resume-mike-hockerman.pdf" },
  ]
  return (
    <Fragment>
      <BasePage>
        <Header text="cat ./mike_hockerman.json" />
        <br />
        <main>
          <BodyJSON dataset={dataset} />
        </main>
      </BasePage>
    </Fragment>
  );
}

export default IndexPage;