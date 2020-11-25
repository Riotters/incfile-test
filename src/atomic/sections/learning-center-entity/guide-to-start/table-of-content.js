import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import Button from "../../../molecules/buttons/button";
import ContentCenter from "../../../partials/content-center";
import Cards from "../../../organisms/cards/table-of-content-cards";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-green2.inline.svg";

const TableOfContent = styled.section`
  position: relative;
  padding-top: 52px;
  
  @media (min-width: 576px) {
    padding-top: 104px;
  }
  
  padding-bottom: 24px;
  background-color: ${color.green3};

  ul {
    margin-bottom: 0;
  }
`;

const TableOfContentSection = ({ className, content }) => (
  <TableOfContent className={className}>
    <Oval width="720" height="720" top="0" right="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} textWidth="770" />
    <ContentCenter>
      <Cards content={content.cards} />
    </ContentCenter>
  </TableOfContent>
);

export default TableOfContentSection;
