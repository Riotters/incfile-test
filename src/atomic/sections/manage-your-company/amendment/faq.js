import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Accordion from "../../../organisms/accordion/accordion";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";

const Faq = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  background-color: #fff;

  .headline {
      margin-bottom: 80px;
  }
  
`;

const FaqSection = ({ className, content }) => (
    <Faq className={className}>
        <Oval className="oval" height="420" width="420" bottom="0" left="0" y="-50">
            <OvalSVG />
        </Oval>
        <HeadingCenter headline={content.header} headlineWidth="640" />
        <ContentCenter>
            <Accordion content={content.faq} />
        </ContentCenter>
  </Faq>
  );
  
  export default FaqSection;