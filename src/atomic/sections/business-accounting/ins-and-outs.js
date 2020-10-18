import styled from "styled-components";
import { Heading } from "../../atoms/typography/heading";
import React from "react";
import { Paragraph } from "../../atoms/typography/paragraph";
import ContentCenter from "../../partials/content-center";
import ImageContent from "../../partials/left-image-right-content";
import Accordion from "../../organisms/accordion/accordion";
import Colorbox from "../../molecules/blocks/left-icon-block-colored";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/top-right-babyblue1.inline.svg";
import HeadingCenter from "../../partials/heading-center";

const Wrapper = styled.div`
  position: relative;
  padding: 120px 0 133px;
`;

const Anchor = styled.div`
  position: relative;
`;

const InsAndOuts = ({ content }) => (
  <Wrapper>
    <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} textWidth="770" bottomMargin="40" />
    <ImageContent image={content.image} contentCenter={false}>
      <Anchor>
        <Curve top="-20" right="-20" rotate={5}>
          <CurveSVG />
        </Curve>
        <Colorbox color={content.box.color} content={content.box.content} dotsColor={content.box.dotsColor} style={{ marginBottom: "65px" }} />
      </Anchor>

      <Colorbox color={content.box1.color} content={content.box1.content} dotsColor={content.box1.dotsColor} style={{ marginBottom: "48px" }} />

      <Accordion tab content={content.faq} />
    </ImageContent>
  </Wrapper>
);

export default InsAndOuts;
