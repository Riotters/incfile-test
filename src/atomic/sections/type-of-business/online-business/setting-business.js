import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/bottom-left-transparent-green2.inline.svg";

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
          <h4>Location of your business</h4>
          <p>Almost all internet entrepreneurs can work from home or a shared working space. This is great as it reduces your office costs considerably. Don't forget that if you work from home, you can write off part of your utility and housing costs against your taxes.</p>
        </TopImageBox>

        <TopImageBox image="display-ads" color={color.purple3}>
          <h4>Marketing</h4>
          <p>Marketing will be a huge part of your online business. Naturally, you will need an awesome website, but you'll also need to get branding, newsletters, digital ads, social media accounts and other channels in place.</p>
        </TopImageBox>

        <TopImageBox image="side-4" color={color.green3}>
          <h4>Equipment</h4>
          <p>It’s likely that the only equipment you will need to run your online business is a computer, laptop, tablet or smartphone.</p>
        </TopImageBox>

        <TopImageBox image="software" color={color.blue3}>
          <h4>Software and Process</h4>
          <p>Online entrepreneurs make extensive use of software; see our great list of the top apps at the end of this article.</p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
          <h4>Employees</h4>
          <p>To begin with, you probably won’t need to hire anyone else for your online business, especially if you’re a good administrator.</p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" color={color.yellow3}>
          <h4>Finances and Taxes</h4>
          <p>
            You will need a separate{" "}
            <Link to="https://utility.bankofamerica.com/alliance/?formid=IF1" target="_blank" rel="noopener noreferrer">
              business bank account
            </Link>{" "}
            for your online business. You might also want to consider a business credit card. Additionally, you will also need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile{" "}
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
  bottom: 164px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  top: 348;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 570px) {
    width: 570px;
  }
`;

export default SettingBusiness;
