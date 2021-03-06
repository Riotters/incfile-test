import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentCenter from "../../../partials/content-center";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-left-right-orange2-big.inline.svg";
import Customers from "./customers";
import { gradient } from "../../../atoms/styles/colors";
import Oval from "../../../atoms/icons/oval";
import TopRightOvalSVG from "../../../../images/ovals/home-page-v3-setup-business-top-right.inline.svg";
import TopLeftOvalSVG from "../../../../images/ovals/home-page-v3-customers-top-left.inline.svg";
import LightBoxVideo from "../../../../components/LightBox";

const Wrapper = styled.div`
  position: relative;
  background: ${gradient.orange3};

  .section-content {
    padding-top: 100px;
  }

  .oval {
    overflow: hidden;
  }
`;

const Video = styled.div`
  width: 100%;
  max-width: 770px;
  background-color: ${color.orange3};
  position: relative;
`;

const SetupYourBusiness = ({ className, content }) => (
  <Wrapper>
    <Oval className="oval" height="570" width="570" top="21" right="0">
      <TopRightOvalSVG />
    </Oval>
    <Oval className="oval" height="720" width="720" top="53" left="0">
      <TopLeftOvalSVG />
    </Oval>
    <ContentCenter contentWidth={1140} className="section-content">
      <Heading size={2} maxWidth={770}>
        {content.header}
      </Heading>
      <Paragraph big bottomMargin={52}>
        {content.text}
      </Paragraph>
      <Video>
        <Curve top="-115" left="-115" color={color.purple2}>
          <CurveSVG />
        </Curve>
        <LightBoxVideo thumbnailVideo="comparison-chart-video-3611" videoID="R_oIgzYh7NU" alt="how to start an LLC" />
      </Video>
    </ContentCenter>

    <Customers content={content} />
  </Wrapper>
);

export default SetupYourBusiness;
