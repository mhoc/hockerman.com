import React from 'react';

import BasePage from "../components/BasePage";
import JSONBio from "../components/bio/JSONBio";
import TextHeader from "../components/text/TextHeader";
import TextLink from "../components/text/TextLink";
import TypingCursor from "../components/text/TypingCursor";
import TextSubheader from '../components/text/TextSubheader';
import TextStd from "../components/text/TextStd";
import TextDeemph from '../components/text/TextDeemph';

const ResumePage = () => {
  return (
    <>
      <BasePage>
        <div className="tileLayout">
          <div className="tile">
            <div><TextHeader underline>Experience</TextHeader></div>
            <br />

            <TextLink href="https://structural.com/">Structural</TextLink>&nbsp;<TextStd>Indianapolis</TextStd>
            <br />
            <TextStd>Software Engineer</TextStd>&nbsp;<TextDeemph>(2017-Now)</TextDeemph>
            <br /><br />

            <TextLink href="https://highalpha.com/">High Alpha</TextLink>&nbsp;<TextStd>Indianapolis</TextStd>
            <br />
            <TextStd>Software Engineer</TextStd>&nbsp;<TextDeemph>(2016-2017)</TextDeemph>
            <br/><br />
            
            <TextLink href="https://yelp.com/">Yelp</TextLink>&nbsp;<TextStd>San Francisco</TextStd>
            <br />
            <TextStd>Software Engineering Intern</TextStd>&nbsp;<TextDeemph>(2015)</TextDeemph>
            <br /><br />
            
            <TextLink href="https://www.genesys.com/">Genesys</TextLink>&nbsp;<TextStd>Indianapolis</TextStd>
            <br />
            <TextStd>Software Engineering Intern</TextStd>&nbsp;<TextDeemph>(2014)</TextDeemph>
            <br /><br /><br />

            <div><TextHeader underline>Education</TextHeader></div>
            <br />
            <TextLink href="https://purdue.edu/">Purdue University</TextLink>&nbsp;
            <TextStd>West Lafayette</TextStd>&nbsp;
            <br />
            <TextStd>B.S. Computer Science</TextStd>&nbsp;
            <TextDeemph>(2015)</TextDeemph>
            <br />
            <TextStd>Minor Organizational Leadership & Supervision</TextStd>
            <br /><br /><br />
          
            <div><TextHeader underline>Certifications</TextHeader></div>
            <br />
            
            <TextLink href="http://aws.amazon.com/verification">Amazon Web Services</TextLink>
            <br />
            <TextStd>Cloud Practitioner</TextStd>&nbsp;
            <TextDeemph>L2P7SXZKBEBQQBSQ</TextDeemph>&nbsp;
            <TextDeemph>(Exp 2021-10)</TextDeemph>&nbsp;
            <br /><br /><br />
          </div>
          <div className="tile">
            <div><TextHeader underline>Community</TextHeader></div>
            <br />

            <TextLink href="https://womeninvestorsnetwork.org/">Women Investors Network</TextLink>&nbsp;<TextStd>Indianapolis</TextStd>
            <br />
            <TextStd>Consultant</TextStd>&nbsp;<TextDeemph>(2019-Now)</TextDeemph>
            <br /><br />

            <TextLink href="https://techpoint.org/indy-tech-fellowship/">TechPoint Tech Fellowship</TextLink>&nbsp;<TextStd>Indianapolis</TextStd>
            <br />
            <TextStd>Curriculum Chair</TextStd>&nbsp;<TextDeemph>(2016-2018)</TextDeemph>
            <br />
            <TextStd>Fellow</TextStd>&nbsp;<TextDeemph>(2016-2018)</TextDeemph>
            <br /><br /><br />

            <div><TextHeader underline>Buzzwords</TextHeader></div>
            <br />
            <TextStd>
              React, React Native, Redux, Javascript, Typescript, <br />
              NodeJS, Go, Python, REST APIs, GraphQL, MongoDB, SQL, <br />
              AWS, EC2, S3, IAM, DynamoDB, Docker, Kubernetes
            </TextStd>
            <br /><br />
          </div>
        </div>
      </BasePage>
      <style jsx>{`
        .tileLayout {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .tile {
          flex-grow: 1;
          min-width: 400px;
          width: 50%;
        }
      `}</style>
    </>
  );
}

export default ResumePage;
