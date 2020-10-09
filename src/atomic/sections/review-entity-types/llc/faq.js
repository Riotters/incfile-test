import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Accordion from "../../../organisms/accordion/accordion";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-green2.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-left-transparent-green3.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import Button from "../../../molecules/buttons/button";
import { Paragraph } from "../../../atoms/typography/paragraph";

const Faq = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  background-image: ${gradient.green3};

  .headline {
    margin-bottom: 80px;
  }
`;

const FaqSection = ({ className, content }) => (
  <Faq className={className}>
    <Oval className="oval" height="420" width="420" top="0" right="0">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="720" width="720" top="35" left="0">
      <Oval2SVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="770" />
    <ContentCenter>
      <Accordion content={content.faq} curve curveLeft />
      <Button content={content.button} theme="primary56" arrow margin="72px auto 40px" />
      <Paragraph big maxWidth="770" style={{ textAlign: "center" }}>
        {content.text}
      </Paragraph>
    </ContentCenter>
  </Faq>
);

export default FaqSection;
