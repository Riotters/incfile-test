import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";

const Perks = styled.div`
  padding-top: 75px;
  padding-bottom: 64px;
  position: relative;
`;

const PerksSection = ({ className, content }) => (
  <Perks className={className}>
    <Oval className="oval" height="570" width="570" top="0" right="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="770" bottomMargin="80" />
    <ContentCenter contentWidth="770">
      <NumericList content={content.list} bottomMargin="0" />
    </ContentCenter>
  </Perks>
);

export default PerksSection;
