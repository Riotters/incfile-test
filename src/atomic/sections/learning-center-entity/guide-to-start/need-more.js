import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-right-transparent-blue3.inline.svg";

const NeedMore = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 80px;

  p:not([class*="i-believe-i-can-be-a-h"]) {
    color: ${color.grey2};
  }

  ul {
    margin-bottom: 0;
  }
`;

const NeedMoreSection = ({ className, content, onClick, paragraphHeading = false }) => (
    <NeedMore className={className}>
        <Oval width="420" height="420" top="0" left="0">
            <OvalSVG />
        </Oval>
        <Oval width="570" height="570" top="35" right="0">
            <Oval2SVG />
        </Oval>
        <HeadingCenter
            headline={content.header}
            headlineWidth="770"
            paragraphHeading={paragraphHeading}
            text={content.text}
            textWidth="770"
            linkText={content.link.text}
            linkUrl={content.link.url}
            linkOnClick = {onClick ?? ''}
        />
    </NeedMore>
);

export default NeedMoreSection;
