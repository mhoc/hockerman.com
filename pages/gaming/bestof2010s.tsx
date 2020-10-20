import React from 'react';

import BasePage from "../../components/BasePage";
import TextDeemph from "../../components/text/TextDeemph";
import TextHeader from "../../components/text/TextHeader";
import TextStd from "../../components/text/TextStd";
import TextSubheader from "../../components/text/TextSubheader";

interface ItemProps {
  awards: string[];
  description,
  dev: string;
  platforms: string;
  title: string;
  year: string;
}

const Item = ({
  awards,
  description,
  dev,
  platforms,
  title,
  year,
}: ItemProps) => {
  return (
    <>
      <div className="item">
        <div className="item-header">
          <span className="item-text">
            <TextSubheader>{title}</TextSubheader>
          </span>
          <span className="item-text">
            <TextStd>({year})</TextStd>
          </span>
          <span className="item-text">
            <TextStd>{dev}</TextStd>
          </span>
        </div>
        <div className="item-header">
          <span className="item-text">
            <TextDeemph>{platforms}</TextDeemph>
          </span>
        </div>
        {awards.map(award => (
          <div className="item-header">
            <span className="item-text">
              <TextDeemph key={award}>{award}</TextDeemph>
            </span>
          </div>
        ))}
        <div className="item-body">
          <TextStd>{description}</TextStd>
        </div>
      </div>
      <style jsx>{`
        .item {
          display: flex;
          flex-direction: column;
          margin-bottom: 80px;
          max-width: 1200px;
        }
        .item-header {
          align-items: center;
          display: flex;
          flex-direction: row;
        }
        .item-text {
          margin-right: 20px;
        }
        .item-body {
          margin-top: 12px;
          max-width: 1000px;
        }
      `}</style>
    </>
  );
}

const BestOf2010sPage = () => {
  return (
    <>
      <BasePage
        header="./best_of_2010s"
        nav={[
          { label: "home", href: "/" }, 
          { label: "gaming", href: "/gaming" }, 
          { label: "bestof2010s" }, 
        ]}
      >
        <div style={{ marginBottom: "40px" }}>
          <TextHeader underline>
            Best of the Decade
          </TextHeader>
        </div>
        <Item
          awards={[
            "Best Narrative, The Game Awards, 2017",
            "Best Gameplay, Games for Change Awards, 2018",
            "Best Game, British Academy Games Awards, 2018",
            "Excellence in Narrative, SXSW Gaming Awards, 2018"
          ]}
          description="What Remains of Edith Finch isn't just the best game of the decade; I feel wholly confident in saying that its the best game ever made. It expands the player's concept of what video games are capable of, when gameplay and narrative are so tightly intertwined they become indistinguishable. Beautiful. Haunting. Giving this game a ten-out-of-ten is almost an insult without also lowering the scores of every other game to earn it before. It accomplishes this while only being about three hours long."
          dev="Giant Sparrow"
          platforms="Windows, PS4, Switch, Xbox One"
          title="What Remains of Edith Finch" 
          year="2017" />
        <div style={{ marginBottom: "40px" }}>
          <TextHeader underline>
            What Remains
          </TextHeader>
          <TextStd>ten titles, alphabetically</TextStd>
        </div>
        <Item
          awards={[
            "Games for Impact, The Game Awards, 2018",
            "Best Independent Game, The Game Awards, 2018",
            "Outstanding Achievement for an Independent Game, DICE Awards, 2019",
            "Best Audio, Game Developers Choice Awards, 2019",
            "Video Game Score of the Year, ASCAP Composers' Choice Awards, 2019"
          ]}
          description="The best platformer ever created; perfect controls and performance; difficult, yet accessible; and a musical score which ranks among the best ever written for a video game."
          dev="Matt Makes Games"
          platforms="Windows, MacOS, Linux, PS4, Switch, Xbox One"
          title="Celeste"
          year="2018" />
        <Item
          awards={[]}
          description="While not even my favorite Souls game (an award which goes to Bloodborne), Dark Souls has established itself as being both uniquely influential on dozens of games after it, while still offering the best structured world design of any role-playing game ever made."
          dev="From Software"
          platforms="Windows, PS3, Xbox 360, PS4, Switch, Xbox One"
          title="Dark Souls"
          year="2011" />
        <Item
          awards={[
            "Best Game Direction, Score/Music, Performance (Mads Mikkelsen), The Game Awards, 2019",
            "Oustanding Achievement in Audio Design, Outstanding Technical Achievement, DICE Awards, 2019",
            "Excellence in Musical Score, Excellence in Technical Achievement, SXSW Gaming Awards, 2020",
            "Technical Achievement, British Academy Game Awards, 2020",
          ]}
          description="No one has ever made a game like Death Stranding, with the budget of Death Stranding, before. Performances that excel beyond Hollywood movies. Technology unmatched at its release. An absolutely wild, deep story counter-balanced by the inane gameplay, all of which leaves you still thinking about it for years to come."
          dev="Kojima Productions"
          platforms="Windows, PS4"
          title="Death Stranding"
          year="2019" />
        <Item
          awards={[
            "Independent Game of the Year, & Australian Developed Game of the Year, Australian Game Awards, 2018",
          ]}
          description="An unbelievable achievement for a first-time studio of three people, with rich lore and deep gameplay that has earned this game a cult following."
          dev="Team Cherry"
          platforms="Windows, MacOS, Linux, PS4, Switch, Xbox One"
          title="Hollow Knight"
          year="2017" />
        <Item
          awards={[
            "Best Original Music, Audio Achivement, Artistic Achievement, & Game Design, BAFTA Awards, 2013",
            "Game of the Year, Best Audio, Best Game Design, & Best Visual Arts, Game Developers Choice Awards, 2013",
            "Best Score for Visual Media (nominee), Grammies, 2013",
          ]}
          description="Much like Dark Souls, Journey is here for its influence over future games, perfecting the concept of online anonymous interaction, combined with what I believe is the best musical score ever written for a video game."
          dev="Thatgamecompany"
          platforms="Windows, PS3, PS4, iOS"
          title="Journey"
          year="2012" />
        <Item
          awards={[]}
          description="KR0 is weird. It conveys a story drenched in appalachian americana through symbolism and allegory; one of the plight of the average American under capitalism. Its beautiful, strange, engrossing, and among the most important games ever made."
          dev="Cardboard Computer"
          platforms="Windows, MacOS, Linux, PS4, Switch, Xbox One"
          title="Kentucky Route Zero" 
          year="2013-2020" />
        <Item
          awards={[
            "Best Storytelling, Golden Joystick Awards, 2013",
            "Game of the Year, Adventure Game of the Year, Outstanding Achievement in Sound Design, Story, Character Performance, Animation, Art Direction, Visual Engineering, & Game Direction, DICE Awards, 2014",
            "Game of the Year, Excellence in Narrative, SFX, & Musical Score, SXSW Gaming Awards, 2014",
            "Best Game, Best Action/Adventure, & Audio Achievement, British Academy Video Game Awards, 2014",
            "Game of the Year, Best Design, & Best Narrative, Game Developers Choice Awards, 2014",
          ]}
          description="What it lacks in interesting gameplay, TLOU makes up with narrative and its impact on narrative design in video games as a whole. Similarly to Dark Souls; I actually think TLOU2 is the better game. But TLOU1 deserves the spot on this list more."
          dev="Naughty Dog"
          platforms="PS3, PS4"
          title="The Last of Us"
          year="2013" />
        <Item
          awards={[
            "Ultimate Game of the Year, Golden Joystick Awards, 2017",
            "Game of the Year, The Game Awards, 2017",
            "Game of the Year, DICE Awards, 2018",
            "Video Game of the Year, SXSW Gaming Awards, 2018",
            "Game of the Year, Game Developers Choice Awards, 2018",
          ]}
          description="BotW is not the best Zelda game. It's still a better game than any before it. BotW represents a hallmark achievement in game systems design, and the integration of those systems into the most open world ever created."
          dev="Nintendo"
          platforms="Switch"
          title="The Legend of Zelda: Breath of the Wild"
          year="2017" />
        <Item
          awards={[
            "Best Indie Game, Golden Joystick Awards, 2019",
            "Best Game, Game Design, & Original Property, British Academy Game Awards, 2020",
          ]}
          description="A masters thesis developed into a beautiful experience over the course of seven years; Outer Wilds is mysterious, beautiful, haunting, puzzling, and put simply, fantastic. Its one misstep was being released near Outer Worlds."
          dev="Mobius Digital"
          platforms="Windows, PS4, Xbox One"
          title="Outer Wilds"
          year="2019" />
        <Item
          awards={[
            "Game of the Year, Best Gaming Moment, Best Storytelling, & Best Visual Design, Golden Joystick Awards, 2015",
            "Game of the Year, & Best RPG, The Game Awards, 2015",
            "Outstanding Achievement in Story, Oustanding Technical Achievement, & Outstanding Achievement in Game Design, DICE Awards, 2016",
            "Game of the Year, & Best Technology, DICE Awards, 2016",
            "Excellence in Technical Achievement, Visual Achievement, & Narrative, SXSW Gaming Awards, 2016",
          ]}
          description="The Witcher 3 keeps you as its prisoner for hundreds of hours. This shouldn't be possible in a single-player game. Every experience, all thousands of them, placed in this game is intentional. A typical role-playing game gives you a quest to kill ten bears. The Witcher 3 asks you to kill ten bears, then gives the bears a story, then hurls you into a war between the bears and humanity, and twenty hours later you've forgotten why you started this quest."
          dev="CD Projekt Red"
          platforms="Windows, PS4, PS5, Switch, Xbox One, Series X"
          title="The Witcher 3: Wild Hunt"
          year="2015" />
      </BasePage>
    </>
  );
}

export default BestOf2010sPage;
