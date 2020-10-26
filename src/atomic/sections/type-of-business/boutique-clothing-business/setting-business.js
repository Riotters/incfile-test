import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-right-transparent-green2.inline.svg";

const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <TextCenterLayout headline="Setting up Your Life or Business Coaching Operations" headlineWidth={770} textWidth={770} text="Once you've legally created your coaching business, you’ll need to get some other things in place." />

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" color={color.red3}>
          <h4>Location of Your Boutique</h4>
          <p>
            If you’re selling online, you can work from home or a shared working space, although you may need storage for garments. This is great as it reduces your office costs considerably. Don't forget that if you work from home, you can write off part of your utility and housing costs against
            your taxes.
          </p>
          <br />
          <p>If you’re selling in a traditional store, you’ll need to find the right location and pay for furniture, fixtures, utilities and everything else that goes into creating a desirable retail location.</p>
        </TopImageBox>

        <TopImageBox image="display-ads" color={color.purple3}>
          <h4>Marketing Your Boutique</h4>
          <p>
            Branding and marketing will be a huge part of your boutique clothing business. Naturally, you will need an awesome website, but you'll also need to get newsletters, digital ads, social media accounts and other channels in place. You’ll want to focus on visual marketing, so Instagram and
            Pinterest can both be excellent channels.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" color={color.green3}>
          <h4>Equipment for Your Boutique Clothing business</h4>
          <p>For an online business, you’ll likely just need a computer, laptop, tablet or smartphone. For a brick and mortar business you’ll need shop fixtures, a cash register, furniture and much more.</p>
        </TopImageBox>

        <TopImageBox image="software" color={color.blue3}>
          <h4>Software and Processes</h4>
          <p>The right software and processes will make running your boutique clothing business much easier. See our list of the best apps and software at the end of this guide.</p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
          <h4>Employees</h4>
          <p>
            If you’re managing very small, local moves, you can probably run the business yourself. If you’re doing anything larger, like whole-house moves, you will likely need to hire at least one other person. For bigger moves, or if you want to do more moves at once, you’ll need to hire even
            more employees.
          </p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" color={color.yellow3}>
          <h4>Finances and Taxes</h4>
          <p>
            You will need a separate{" "}
            <Link to="https://utility.bankofamerica.com/alliance/?formid=IF1" target="_blank" rel="noopener noreferrer">
              business bank account
            </Link>{" "}
            for your boutique business. You might also want to consider a business credit card. Additionally, you will also need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile{" "}
            <Link to="https://www.incfile.com/business-accounting/">we can even help you file your taxes</Link>.
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

  @media (min-width: 1024px) {
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

  @media (min-width: 720px) {
    width: 720px;
  }
`;

export default SettingBusiness;
