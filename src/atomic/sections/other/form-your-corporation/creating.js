import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-babyblue.inline.svg";

const Creating = styled.div`
  padding-top: 75px;
  padding-bottom: 64px;
  position: relative;
`;

const CreatingSection = ({ className, content }) => (
  <Creating className={className}>
    <Oval className="oval" height="570" width="570" top="0" left="0" y="-25">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="500" bottomMargin="80" />
    <ContentCenter contentWidth="770">
      <NumericList content={content.list} bottomMargin="0" />
    </ContentCenter>
  </Creating>
);

export default CreatingSection;
