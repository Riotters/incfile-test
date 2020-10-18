import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { color } from "../../../../components/styles/colors";
import Colorbox from "../../../../components/color-box";
import SunIcon from "../../../../images/icons/sun.inline.svg";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-pink2.inline.svg";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-bottom: 64px;

  .colorbox {
    margin-bottom: 48px;
  }
`;

const WrapperContainer = styled.div`
  background: rgb(255, 255, 255);
  padding-bottom: 100px;
  margin-top: 120px;
  position: relative;
  @media (min-width: 992px) {
    margin-top: 21px;
  }
`;

const Oval = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const Bootstrapping = () => (
  <WrapperContainer>
    <Oval>
      <OvalSvg />
    </Oval>
    <BusinessOwnerResponsibilities>
      <ImageContent image="summer-books" paddingTop="60">
        <Paragraph big>
          For people who know they’re not going to be as busy in the summer, like students or teachers, summer businesses are a great opportunity for a low-risk introduction to the world of entrepreneurship. Starting a summer business will teach you about the basics of administration, business
          finance, marketing, profit margins and more. They are a great way to stay busy, gain new skills, make some extra income and who knows - maybe expand into something bigger.
        </Paragraph>

        <Colorbox curveColor={color.babyblue1} color={color.babyblue3} theme="icon" curve Icon={SunIcon}>
          <Paragraph style={{ fontWeight: "bold" }}>We want to help you get your summer business off the ground.</Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>Since 2004, we’ve helped over 500,000 people become entrepreneurs, starting exciting businesses and bringing their ideas to life. We’ll give you the support, guidance and advice you need to create a business and make it into a success.</Paragraph>
        </Colorbox>

        <Paragraph big style={{ paddingTop: "120px" }} mixed={true}>
          Here is our simple guide to launching a successful summer business. From exploring the types of business you can start to the legalities of setting up your business and the realities of your day-to-day operations, this guide is here to help.
        </Paragraph>
        <Paragraph big mixed={true}>
          Read on for some insight into creating your own summer business and becoming an entrepreneur.
        </Paragraph>
      </ImageContent>
    </BusinessOwnerResponsibilities>
  </WrapperContainer>
);

export default Bootstrapping;
