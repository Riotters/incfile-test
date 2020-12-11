import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ImageContent from "../../../partials/left-image-right-content";
import ContentCenter from "../../../partials/content-center";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import IconSVG from "../../../../images/icons/closing-your-business.inline.svg";
import Table from "../../../organisms/tables/compare-entity-type-table";

const Differences = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 112px;
`;

const DifferencesSection = ({ className, content }) => (
  <Differences className={className}>
    <HeadingCenter className="heading" headline={content.header} headlineWidth="770" text={content.text} />
    <ImageContent image="business-license-requirements" contentCenter>
      <IconTextColorBox color={color.babyblue3} Icon={IconSVG} content={content.box} rounded curve headingSize={3} paragraphHeader />
    </ImageContent>
    <ContentCenter>
      <Table content={content.table} />
    </ContentCenter>
  </Differences>
);

export default DifferencesSection;
