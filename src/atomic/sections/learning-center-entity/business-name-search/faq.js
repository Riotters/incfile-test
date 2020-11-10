import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Accordion from "../../../organisms/accordion/accordion";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";

const Faq = styled.section`
  position: relative;
  padding-top: 0px;
`;

const FaqSection = ({ className, content }) => (
    <Faq className={className}>
        <Oval className="oval" height="720" width="720" top="0" left="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter headline={content.header} headlineWidth="640" bottomMargin="0" />
        <ContentCenter>
            <Accordion content={content.faq} curve curveLeftBottom curveColor={color.blue1}/>
        </ContentCenter>
  </Faq>
  );
  
  export default FaqSection;