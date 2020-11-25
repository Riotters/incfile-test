import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-babyblue1.inline.svg";

const WhatAgentDo = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 104px;
  background-color: ${color.babyblue3};
`;

const WhatAgentDoSection = ({ className, content, openHSForm }) => (
  <WhatAgentDo className={className}>
    <Oval className="oval" height="688" width="688" top="0" left="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} text={content.text} useButton linkText={content.link.text} linkUrl={content.link.url} linkOnClick={openHSForm} bottomMargin="48" />
    <ContentCenter contentWidth="770">
      <NumericList content={content.list} bottomMargin="0" />
    </ContentCenter>
  </WhatAgentDo>
);

export default WhatAgentDoSection;
