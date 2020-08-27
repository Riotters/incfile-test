import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import Button from "../../../molecules/buttons/button";
import ContentCenter from "../../../partials/content-center";
import Cards from "../../../organisms/cards/table-of-content-cards";

const TableOfContent = styled.section`
  position: relative;
  padding-bottom: 120px;

  ul {
    margin-bottom: 0;
  }
`;

const TableOfContentSection = ({ className, content }) => (
  <TableOfContent className={className}>
    <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} textWidth="770" />
    <ContentCenter>
      <Cards content={content.cards} />
    </ContentCenter>
  </TableOfContent>
);

export default TableOfContentSection;
