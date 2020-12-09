import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import Curve from "../../../../images/green-curve.inline.svg";
import GreenOval from "../../../../images/ovals/top-left-transparent-green1.inline.svg";
import ContentCenter from "../../../partials/content-center";
import { Link } from "gatsby";
import {Heading} from "../../../atoms/typography/heading";

const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <ContentCenter contentWidth={770}>
      <TextCenterLayout headline="Set up Your Beauty Salon Business" headlineWidth={770} textWidth={770} text="Once you've legally created your beauty salon business, you’ll need to get some other things in place." />
    </ContentCenter>

    <Container>
      <ImageBoxes>
        <TopImageBox image="display-ads" color={color.purple3}>
          <Heading size={3} template={4}>Marketing</Heading>
          <p>Local marketing and strong branding will be essential to your success. You will likely need a website and a strong social media presence too.</p>
        </TopImageBox>

        <TopImageBox image="software" color={color.blue3}>
          <Heading size={3} template={4}>Software</Heading>
          <p>There are many types of beauty salon management software solutions that can help you manage your business much more efficiently and effectively.</p>
        </TopImageBox>

        <TopImageBox image="measuring-business-success" color={color.babyblue3}>
          <Heading size={3} template={4}>Business maintenance</Heading>
          <p>
            Most states require businesses to file an <Link to="/manage-your-company/annual-report/">Annual Report</Link> once a year. You will also be expected to pay estimated taxes on what you plan to earn in the current business year. Your federal, state, regional and city{" "}
            <Link to="/business-license-research-package/">business licenses and permits</Link> may need to be renewed on a regular basis, typically once a year.
          </p>
        </TopImageBox>

        <TopImageBox image="permits-licences" color={color.babyblue3}>
          <Heading size={3} template={4}>Permits and licenses</Heading>
          <p>What kind of bank account will you get? Do you need a business credit card? How will you pay your business taxes? These are important questions to consider so your beauty salon business stays in the green. Here at Incfile, we can even help you file your taxes.</p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
          <Heading size={3} template={4}>Employees</Heading>
          <p>You will need to hire skilled, approachable employees. This is probably the area of the business you should spend the most time on — your people are the face of your beauty salon, and customer advocacy will be driven by how well they treat your clientele.</p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" color={color.yellow3}>
          <Heading size={3} template={4}>Finances and taxes</Heading>
          <p>
            What kind of bank account will you get? Do you need a <a href="http://t.tihop.com/cgi/r?;n=203;c=1666272;s=7273;x=7936;f=201908011042310;u=j;z=TIMESTAMP;src=663024">business credit card</a>? How will you pay your business taxes? These are important questions to consider so your
            beauty salon business stays in the green. Here at Incfile, we can even <Link to="/business-accounting/">help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" color={color.green3}>
          <Heading size={3} template={4}>Equipment</Heading>
          <p>You will need equipment, furniture, fixtures, consumables and inventory to sell. Think about any hardware and transportation you might need. Make sure you understand exactly what you need to spend so you can write it off against business expenses.</p>
          <GreenCurve>
            <Curve />
          </GreenCurve>
        </TopImageBox>

        <TopImageBox image="location" color={color.red3}>
          <Heading size={3} template={4}>Location of your business</Heading>
          <p>A great location is essential. You will want to be in an area with lots of foot traffic and accessibility, preferably around other businesses who are targeting the same type of clientele as you.</p>
        </TopImageBox>
      </ImageBoxes>
    </Container>
  </GreenContainer>
);

const GreenContainer = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(242, 248, 243, 1) 100%);
  padding-bottom: 100px;
  padding-top: 100px;
  position: relative;
  overflow: hidden;
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
  display: none;

  @media (min-width: 720px) {
    display: block;
  }
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

export default SettingBusiness;
