import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-right-transparent-green2.inline.svg";
import { Link } from "gatsby";

const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <Oval2>
      <GreenOval />
    </Oval2>

    <TextCenterLayout headline="Setting Up Your Daycare Business and Business Operations" headlineWidth={770} textWidth={770} text="Once you've legally created your daycare business, you’ll need to get some other things in place." />

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" color={color.red3}>
          <h4>Location of Your Daycare: In Home or Out?</h4>
          <p>
            The location of your business will be critical. You want somewhere with a good amount of potential customers, but also with the right pricing so you don’t spend all your money on rent. You will need to make sure that the location is childproof to reduce the risk of injuries or incidents.
            Some people open daycares in their own homes, which allows you to save on rent.
          </p>
        </TopImageBox>

        <TopImageBox image="display-ads" color={color.purple3}>
          <h4>Marketing Your Daycare Business</h4>
          <p>
            Marketing will be a huge part of your daycare business. Naturally, you will need an awesome website, but you'll also need to get branding, newsletters, digital ads, social media accounts and other channels in place. Make sure that you clearly explain the unique approach you take with
            childcare to build reassurance and trust with parents.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" color={color.green3}>
          <h4>Equipment for Your Daycare</h4>
          <p>In addition to the computer equipment you will need to manage your business, you will also need toys, games, art supplies and more to keep the children occupied and entertained. This could include both inside and outside activities, so plan for both.</p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" color={color.yellow3}>
          <h4>Finances and Taxes</h4>
          <p>
            You will need a separate business bank account for your construction business. You might also want to consider a business credit card. Additionally, you will also need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile{" "}
            <Link to="/business-accounting/">we can even help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
          <h4>Employees</h4>
          <p>Many daycare business owners don’t employ anyone else to begin with. Once your business gets off the ground you can look into hiring other qualified childcare professionals.</p>
        </TopImageBox>

        <TopImageBox image="software" color={color.blue3}>
          <h4>Software and Process</h4>
          <p>The right software and processes will make running your daycare business much easier. See our list of the best apps and software at the end of this guide.</p>
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

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 468px;
  width: 100%;
  transform: rotate(-180deg);
  display: none;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  bottom: 323px;
  width: 100%;
  transform: rotate(-180deg);
  opacity: 0.5;
  display: none;

  @media (min-width: 570px) {
    width: 570px;
  }

  svg {
    transform: scaleX(-1);
  }
`;

export default SettingBusiness;
