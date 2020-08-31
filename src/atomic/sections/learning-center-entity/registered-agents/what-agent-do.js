import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors"
import ContentLeft from "../../../partials/content-left";
import ContentCenter from "../../../partials/content-center";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";

const WhatAgentDo = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 112px;
  
  h2 {
    text-align: left;
  }
`;

const WhatAgentDoSection = ({ className, content }) => (
    <WhatAgentDo className={className}>
        <ContentLeft contentWidth="770">
            <Heading size="2" maxWidth="500">{content.header}</Heading>
            <Paragraph big bottomMargin="112">{content.text}</Paragraph>
        </ContentLeft>
        <ContentCenter contentWidth="770">
            <NumericList content={content.list} bottomMargin="0" />
        </ContentCenter>
    </WhatAgentDo>
  );
  
  export default WhatAgentDoSection;