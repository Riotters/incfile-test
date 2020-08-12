import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Accordion from "../../../organisms/accordion/accordion";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange.inline.svg";

const Basics = styled.section`
  position: relative;
  padding-top: 100px;
  padding-bottom: 120px;

  .headline {
      margin-bottom: 80px;
  }
  
`;

const BasicsSection = ({ className, content }) => (
    <Basics className={className}>
        <Oval height="720" width="720" top="0" left="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter headline={content.header} headlineWidth="640" />
        <ContentCenter>
            <Accordion content={content.faq} curve curveRight />
        </ContentCenter>
  </Basics>
  );
  
  export default BasicsSection;