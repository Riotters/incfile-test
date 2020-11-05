import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { color } from "../../../../components/styles/colors";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-babyblue2.inline.svg";
import OvalSvgBottom from "../../../../images/ovals/top-left-transparent-babyblue1.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { Link } from "gatsby";

const Taxes = () => (
  <BabyBlueContainer>
    <Oval>
      <OvalSvg />
    </Oval>
    <OvalBottom>
      <OvalSvgBottom />
    </OvalBottom>

    <Container>
      <TextWrapper>
        <Heading style={3} style={{ fontSize: "40px" }}>
          Rules, Regulations and Taxes for Your Influencer Marketing Business
        </Heading>

        <Paragraph big mixed={true}>
          Even though you’re running a virtual business, you can’t escape real-world licenses, permits and regulations. You will need to explore local, state and federal licenses and permits, and{" "}
          <Link to="/business-license-research-package/">we can also help out with researching your business licensing needs.</Link>
        </Paragraph>
      </TextWrapper>
    </Container>

    <TextCenterLayout headlineWidth={770} headline="Taxes for a Moving Business" />

    <Container>
      <TextWrapper>
        <Paragraph big mixed={true}>
          <Curve color={color.babyblue1} style={{ position: "absolute", left: "-29px", top: "-25px", transform: "rotate(-90deg)" }} />
          Taxes are a fact of life if you’re in business, and there are various ways you will need to file and pay them. This can include self-employment tax, state income tax and federal income tax. You will also probably be liable for sales and use tax.
        </Paragraph>
        <Paragraph big mixed={true}>
          As a rule of thumb, we recommend holding back around a third of your earnings to pay your taxes. We can also <Link to="/business-accounting/">prepare and file your tax returns for you.</Link>
        </Paragraph>
      </TextWrapper>
    </Container>
  </BabyBlueContainer>
);

const BabyBlueContainer = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(240, 248, 255, 1) 100%);
  padding-bottom: 100px;
  padding-top: 100px;
  position: relative;
`;

const TextWrapper = styled.div`
  width: 100%;
  max-width: 750px;
  position: relative;
  margin: 48px auto 100px;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 240px;
  width: 420px;
  transform: rotate(180deg);
  display: none;

  @media (min-width: 720px) {
    display: block;
  }
`;

const OvalBottom = styled.div`
  position: absolute;
  right: 0;
  top: 0px;
  width: 720px;
  transform: scaleX(-1);
  display: none;

  @media (min-width: 720px) {
    display: block;
  }
`;

const CurveWrapper = styled.div`
  position: absolute;
  right: -115px;
  top: 24px;

  @media (max-width: 970px) {
    display: none;
  }
`;

export default Taxes;
