import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Accordion from "../../../organisms/accordion/accordion";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green2.inline.svg";

const Faq = styled.section`
  position: relative;
  padding-bottom: 64px;
  
  @media (min-width: 992px) {
    padding-top: 75px;
  }

  .headline {
      margin-bottom: 32px;
      
      @media (min-width: 992px) {
          margin-bottom: 80px;
      }
  }
  
`;

const FaqSection = ({ className, content }) => (
    <Faq className={className}>
        <Oval className="oval" height="720" width="720" top="0" left="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter className="headline" headline={content.header} headlineWidth="640" />
        <ContentCenter>
            <Accordion content={content.faq} />
        </ContentCenter>
  </Faq>
  );
  
  export default FaqSection;