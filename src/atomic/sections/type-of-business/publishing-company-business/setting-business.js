import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-right-transparent-pink2.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import { Link } from "gatsby";

const SettingBusiness = () => (
  <WrapperContainer>
    <Oval>
      <OvalSvg />
    </Oval>
    <Oval2>
      <OvalSvg2 />
    </Oval2>

    <TextCenterLayout headline="Setting up Your Publishing Company and Business Operations" headlineWidth={770} textWidth={770} text="Once you've legally created your publishing business, you’ll need to get some other things in place." />

    <Container>
      <ImageBoxes>
        <TopImageBox image="state-filling-fees" color={color.yellow3}>
          <h4>Finances and Taxes</h4>
          <p>
            You will need a separate business bank account for your publishing business. You might also want to consider a business credit card. Additionally, you will also need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile{" "}
            <Link to="/business-accounting/">we can even help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="location" color={color.red3}>
          <h4>Location</h4>
          <p>
            If you’re a digital publisher, it’s very likely that you can work from home or a shared working space, at least initially. This is great as it reduces your office costs considerably. If you’re a more specialized publisher or you publish in a traditional way, you may need extra space for
            support staff and equipment.
          </p>
        </TopImageBox>

        <TopImageBox image="display-ads" color={color.purple3}>
          <h4>Marketing Your Publishing House</h4>
          <p>
            Marketing will be a huge part of your publishing business. Naturally, you will need an awesome website, but you'll also need to get branding, newsletters, digital ads, social media accounts and other channels in place. As a publisher, organic SEO will be a large part of your content and
            marketing strategy.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" color={color.green3}>
          <h4>Equipment for Your Publishing Business</h4>
          <p>
            As a digital publisher, it’s likely that the only equipment you will need to run your publishing business is a computer, laptop, tablet or smartphone and specialized software. If you’re producing audio or video content, you will also need a microphone, relevant recording devices and
            software to edit and add to your content.
          </p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
          <h4>Employees</h4>
          <p>If you’re a digital publisher, you probably won’t need to hire anyone else for your publishing business until you have grown, especially if you’re a good administrator.</p>
        </TopImageBox>

        <TopImageBox image="software" color={color.blue3}>
          <h4>Software and Processes</h4>
          <p>The right software and processes will make running your publishing business much easier. See our list of the best apps and software at the end of this guide.</p>
        </TopImageBox>
      </ImageBoxes>
    </Container>
  </WrapperContainer>
);

const WrapperContainer = styled.div`
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
  top: 485px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  bottom: 303px;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

export default SettingBusiness;
