import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import Button from "../../../molecules/buttons/button";
import ContentCenter from "../../../partials/content-center";
import Tabs from "../../../organisms/tabs/business-resources-tabs";
import Cards from "../../../organisms/cards/table-of-content-cards";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-green2.inline.svg";

const Resources = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 104px;

  ul {
    margin-bottom: 0;
  }
`;

const ResourcesSection = ({ className, content, openModal }) => (
  <Resources className={className}>
    <Oval width="720" height="720" top="0" right="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="770" bottomMargin="80" />
    <ContentCenter>
        <Tabs content={content.tabs} openModal={openModal} />
    </ContentCenter>
  </Resources>
);

export default ResourcesSection;
