import React from 'react';

import BasePage from "../../components/BasePage";
import { TextDeemph } from '../../components/text';

const Image = ({ caption, url }) => {
  return (
    <>
      <div id="container">
        <a href={url}>
          <img id="thumbnail" src={url} />
        </a>
        <TextDeemph>{caption}</TextDeemph>
      </div>
      <style jsx>{`
        #container {
          display: flex;
          flex-direction: column;
          margin-bottom: 32px;
        }
        #thumbnail {
            border-radius: 8px;
            height: auto;
            max-width: 800px;
            width: 100%;
          }
      `}</style>
    </>
  )
}

const EldenRing = () => {
  return (
    <>
      <BasePage
        header="elden ring"
        nav={[
          { label: "home", href: "/" }, 
          { label: "gaming", href: "/gaming" },
        ]}
      >
        <div className="image-list">
          <Image caption="limgrave; western beach; viewing stormvale" url="/eldenring/limgrave-1.jpg" />
          <Image caption="caelid; farum greatbridge" url="/eldenring/caelid-3.jpg" />
          <Image caption="caelid; redmane castle" url="/eldenring/caelid-2.jpg" />
          <Image caption="caelid; redmane castle; during the festival of radahn" url="/eldenring/caelid-1.jpg" />
          <Image caption="liurnia; near the revenger's shack; viewing northeast" url="/eldenring/liurnia-1.jpg" />
          <Image caption="liurnia; glintstone dragon smarag" url="/eldenring/liurnia-2.jpg" />
          <Image caption="liurnia; academy of raya lucaria" url="/eldenring/raya-1.jpg" />
          <Image caption="liurnia; caria manor" url="/eldenring/liurnia-5.jpg" />
          <Image caption="liurnia; converted fringe tower" url="/eldenring/liurnia-4.jpg" />
          <Image caption="liurnia; ruin-strewn precipice; viewing southwest" url="/eldenring/liurnia-3.jpg" />
          <Image caption="ainsel river well; dragonkin soldier of nokstella" url="/eldenring/ainsel-1.jpg" />
          <Image caption="ainsel river well; an overlook" url="/eldenring/ainsel-2.jpg" />
          <Image caption="altus plateau; erdtree overlook; facing leyndell" url="/eldenring/altus-1.jpg" />
          <Image caption="altus plateau; leyndell from the east" url="/eldenring/leyndell-1.jpg" />
          <Image caption="altus plateau; leyndell; a botanist's shop" url="/eldenring/leyndell-2.jpg" />
          <Image caption="mt gelmir; an overlook" url="/eldenring/gelmir-1.jpg" />
          <Image caption="crumbling farum azula" url="/eldenring/azula-1.jpg" />
        </div>
      </BasePage>
      <style jsx>{`
        .image-list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
}

export default EldenRing;
