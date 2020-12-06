import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/bottom-right-transparent-green3.inline.svg";
import { Link } from "gatsby";
import {Heading} from "../../../atoms/typography/heading";

const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <Oval2>
      <GreenOval />
    </Oval2>

    <TextCenterLayout headline="Set up & Maintain Your Franchise Business" headlineWidth={770} textWidth={770} text="Once you've legally created your franchise business, you’ll need to get some other things in place." />

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" color={color.red3}>
          <Heading size={3} template={4}>Business Location</Heading>
          <p>Your franchisor may have strict rules about exactly where you can set up and the location they want to see you take over. You may be restricted from opening up too close to any other franchisees.</p>
        </TopImageBox>

        <TopImageBox image="permits-licences" color={color.blue3}>
          <Heading size={3} template={4}>Premits and licenses</Heading>
          <p>
            In addition to the strict rules and agreements you will have with the franchisor, there are also federal, state, local and industry-specific permits, licenses and regulations you will need to follow. Incfile can conduct a{" "}
            <Link to="/business-license-research-package/">Business License Research</Link> package for you or you can take the time to do the research yourself.
          </p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" color={color.yellow3}>
          <Heading size={3} template={4}>Finances and Taxes</Heading>
          <p>
            You will need a separate{" "}
            <a href="https://utility.bankofamerica.com/alliance/?formid=IF1" target="_blank" rel="noopener noreferrer">
              business bank account
            </a>{" "}
            for your franchise business. You might also want to consider a{" "}
            <a href="http://t.tihop.com/cgi/r?;n=203;c=1666272;s=7273;x=7936;f=201908011042310;u=j;z=TIMESTAMP;src=663024" target="_blank" rel="noopener noreferrer">
              business credit card
            </a>
            . Additionally, you will also need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile we can even <Link to="/business-accounting/">help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" color={color.green3}>
          <Heading size={3} template={4}>Equipment</Heading>
          <p>
            The type of equipment you need depends on the franchise business you run. Your franchisor will be able to provide guidance and recommendations on what to buy and may even have special arrangements with major vendors who can supply you with the equipment you need. Make sure you understand
            exactly what you’re spending money on so you can write it off against business expenses.
          </p>
        </TopImageBox>

        <TopImageBox image="display-ads" color={color.purple3}>
          <Heading size={3} template={4}>Marketing</Heading>
          <p>Much of your marketing will be handled by the franchisor, so it’s important to understand exactly what they will be doing and what you need to do. See if you are featured on their overall website, or if you need to create a website or other marketing collateral of your own.</p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
          <Heading size={3} template={4}>Employees</Heading>
          <p>It’s very likely you will need to hire several employees. Again, this is an area where the franchisor can help as they probably have specialized recruitment, hiring, training and employee management plans.</p>
        </TopImageBox>

        <TopImageBox image="software" color={color.blue3}>
          <Heading size={3} template={4}>Software and Process</Heading>
          <p>The franchisor may have specific software (e.g. point of sale software) that they need you to use. Make sure you understand software requirements and details.</p>
        </TopImageBox>

        <TopImageBox image="measuring-business-success" color={color.babyblue3}>
          <Heading size={3} template={4}>Business maintenance</Heading>
          <p>
            Most states require businesses to file an <Link to="/manage-your-company/annual-report/">Annual Report</Link> report once a year. You will also be expected to pay estimated taxes on what you plan to earn in the current business year. Your federal, state, regional and city{" "}
            <Link to="/business-license-research-package/">business licenses and permits</Link> may need to be renewed on a regular basis, typically once a year.
          </p>
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
  right: 0;
  top: 220px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  left: 0;
  bottom: 431px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

export default SettingBusiness;
