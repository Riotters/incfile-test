import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Accordion from "../../../organisms/accordion/accordion";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";

const Faq = styled.section`
  position: relative;
  padding-top: 112px;
  padding-bottom: 64px;

  .headline {
    margin-bottom: 80px;
  }
`;

const FaqSection = ({ className, content }) => (
  <Faq className={className}>
    <Oval className="oval" height="720" width="720" top="0" left="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="640" />
    <ContentCenter>
      <Accordion content={content.faq} />
    </ContentCenter>
  </Faq>
);

export default FaqSection;
