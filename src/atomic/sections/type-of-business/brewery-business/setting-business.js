import React from "react";
import { Link } from "gatsby";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import { gradient } from "../../../atoms/styles/colors";

const SettingBusiness = () => (
  <WrapperContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <TextCenterLayout headline="Setting up Your Business and Brewery Operations" headlineWidth={770} textWidth={770} text="Once you've legally created your brewery business, you’ll need to get some other things in place." />

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" color={color.red3}>
          <h4>Location of Your Brewery</h4>
          <p>
            Your location will be essential. The space needs to be large enough for your brewing operation and prepared to handle the unique requirements of making alcoholic beverages. If you also have a bar or brewpub, you should factor in local footfall, traffic access and parking. You will also
            need space to store drinks, manage the business, host musicians and more.
          </p>
        </TopImageBox>

        <TopImageBox image="display-ads" color={color.purple3}>
          <h4>Brewery Equipment</h4>
          <p>
            Marketing will be a huge part of your brewery business. Naturally, you will need an awesome website, but you'll also need to get branding, newsletters, digital ads, social media accounts and other channels in place. You should also focus on local marketing and branding, especially if you
            are selling into retail stores.
          </p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
          <h4>Employees</h4>
          <p>You won’t be able to do everything by yourself - it’s rare to find someone who can be everything a brewery needs (administrator, marketer, brewmaster, server and more). This means you will need to hire employees and have the right attitude, approach and support for your workers.</p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" color={color.yellow3}>
          <h4>Finances and Taxes</h4>
          <p>
            You will need a separate{" "}
            <a href="https://utility.bankofamerica.com/alliance/?formid=IF1" target="_blank" rel="noopener noreferrer">
              business bank account
            </a>{" "}
            for your brewery business. You might also want to consider a business credit card. Additionally, you will also need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile <Link to="/business-accounting/">we can even help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" color={color.green3}>
          <h4>Equipment for Your Dog Walking or Pet Sitting business</h4>
          <p>Breweries are extremely reliant on specialized equipment. From brew kettles and mash tuns to barrels and endless amounts of cleaning fluid, this is where the majority of your capital expenditure will be in the early days.</p>
        </TopImageBox>

        <TopImageBox image="software" color={color.blue3}>
          <h4>Software and Process</h4>
          <p>Brewery entrepreneurs make extensive use of software; see our great list of the top apps at the end of this guide.</p>
        </TopImageBox>
      </ImageBoxes>
    </Container>
  </WrapperContainer>
);

const WrapperContainer = styled.div`
  background: rgb(255, 255, 255);
  background-image: ${gradient.blue3};
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
  bottom: 410px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

export default SettingBusiness;
