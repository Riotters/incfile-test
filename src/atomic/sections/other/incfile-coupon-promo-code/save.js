import React from "react";
import styled from "styled-components";
import { gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Table from "../../../organisms/tables/coupon-promo-code-table";

const Save = styled.div`
  padding-top: 104px;
  padding-bottom: 0;
  position: relative;

  &::before {
    content: "";
    height: 1645px;
    width: 100%;
    background-image: ${gradient.blue3};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const SaveSection = ({ className, content }) => (
  <Save className={className}>
    <HeadingCenter headline={content.header} headlineWidth="770" bottomMargin="40" />
    <ContentCenter contentWidth="770">
      <Paragraph big>{content.text}</Paragraph>
      <Paragraph big bottomMargin="56">
        {content.text2}
      </Paragraph>
      <Table content={content.table} />
      <Paragraph big>{content.text3}</Paragraph>
      <Paragraph big bottomMargin="0">
        {content.text4}
      </Paragraph>
    </ContentCenter>
  </Save>
);

export default SaveSection;
