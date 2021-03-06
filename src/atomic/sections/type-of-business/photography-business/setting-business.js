import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import { Link } from "gatsby";
import {Heading} from "../../../atoms/typography/heading";

const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <TextCenterLayout headline="Setup & Maintain Your Photography Business" headlineWidth={770} textWidth={770} text="Once you've legally created your photography business, you’ll need to get some other things in place." />

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" color={color.red3}>
          <Heading size={3} template={4}>Business location</Heading>
          <p>
            For a photographer who is always out and about, you can likely run your business from home. If you’re going to be doing photography from a particular location, you will likely need a shop front and a photographic studio. The costs involved in setting up a studio can be high, so make sure
            you get one in a good location that is likely to attract both passing traffic and clients seeking you out.
          </p>
        </TopImageBox>

        <TopImageBox image="side-yellow" color={color.yellow3}>
          <Heading size={3} template={4}>Business maintenance</Heading>
          <p>
            Most states require businesses to file an <Link to="/manage-your-company/annual-report/">Annual Report</Link> report once a year. You will also be expected to pay estimated taxes on what you plan to earn in the current business year. Your federal, state, regional and city{" "}
            <Link to="/business-license-research-package/">business licenses and permits</Link> may need to be renewed on a regular basis, typically once a year.
          </p>
        </TopImageBox>

        <TopImageBox image="display-ads" color={color.purple3}>
          <Heading size={3} template={4}>Finances and taxes</Heading>
          <p>
            You will need to create a business bank account and set up bookkeeping systems so you can properly capture your cashflows and pay the appropriate amount of tax. Here at Incfile we can even <Link to="/business-accounting/">help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="software" color={color.blue3}>
          <Heading size={3} template={4}>Software</Heading>
          <p>It is likely worth investing in Photoshop or similar image editing software. Likewise, in addition to standard business software, you should have an easy way to share photos with clients online so they can indicate the ones they want and request any changes.</p>
        </TopImageBox>

        <TopImageBox image="display-ads" color={color.purple3}>
          <Heading size={3} template={4}>Marketing</Heading>
          <p>You will need to develop a photography brand, develop a website, get a logo and have business cards printed. Hire a branding and marketing expert who can take care of your various marketing needs.</p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
          <Heading size={3} template={4}>Employees</Heading>
          <p>It’s unlikely that you will hire employees to begin with, but in the longer term you can think about getting an administrative or studio assistant.</p>
        </TopImageBox>

        <TopImageBox image="side-4" color={color.green3}>
          <Heading size={3} template={4}>Equipment</Heading>
          <p>In addition to your camera and other photographic equipment, you will also need a computer, smartphone, transportation and possibly other devices. Any equipment or office furniture and supplies you need to buy can be written off against your business expenses.</p>
        </TopImageBox>

        <TopImageBox image="permits-licences" color={color.blue3}>
          <Heading size={3} template={4}>Permits and licenses</Heading>
          <p>
            Running a photography business comes with certain rules, regulations and legalities you need to be aware of. Incfile can conduct a <Link to="/business-license-research-package/">Business License Research</Link> package for you, or you can take the time to do the research yourself.
          </p>
        </TopImageBox>
      </ImageBoxes>
    </Container>
  </GreenContainer>
);

const GreenContainer = styled.div`
  background: rgb(255, 255, 255);
  background-image: ${gradient.orange3};
  padding-bottom: 100px;
  padding-top: 100px;
  position: relative;
`;

const ImageBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 112px;
  width: 100%;
  max-width: 970px;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 970px) {
    margin: 0 auto;
  }
`;

const GreenCurve = styled.div`
  position: absolute;
  right: -115px;
  bottom: -122px;
  width: 115px;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: calc(50% - 360px);
  width: 100%;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

export default SettingBusiness;
