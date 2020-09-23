import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-right-transparent-green2.inline.svg";
import Button from "../../../molecules/buttons/button";
import Table from "../../../organisms/tables/coupon-promo-code-table";

const Catch = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 120px;

  &::before {
    content: "";
    height: 1486px;
    width: 100%;
    background-image: ${gradient.green3};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const CatchSection = ({ className, content }) => (
  <Catch className={className}>
    <Oval className="oval" height="570" width="570" top="0" left="0">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="420" width="420" top="10" right="0">
      <Oval2SVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="700" bottomMargin="80" />
    <ContentCenter contentWidth="970">
      <Paragraph maxWidth="770" bottomMargin="64">
        {content.text}
      </Paragraph>
      <Table content={content.table} />
      <Paragraph maxWidth="770" topMargin="64">
        {content.text2}
      </Paragraph>
      <Paragraph maxWidth="770" topMargin="64">
        {content.text3}
      </Paragraph>
      <Button content={content.button} theme="primary56" arrow />
    </ContentCenter>
  </Catch>
);

export default CatchSection;
