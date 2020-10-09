import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Accordion from "../../../organisms/accordion/accordion-with-counting";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-pink2.inline.svg";

const Next = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 104px;
`;

const NextSection = ({ className, content }) => (
    <Next className={className}>
        <Oval className="oval" height="720" width="720" top="0" right="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter headline={content.header} headlineWidth="640" />
        <ContentCenter>
            <Accordion content={content.faq} curve curveLeftBottom curveColor={color.blue1}/>
        </ContentCenter>
  </Next>
  );
  
  export default NextSection;