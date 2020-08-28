import React from "react";
import styled from "styled-components";
import Container from "../container";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 30px;
  grid-row-gap: ${(props) => (props.rowGap ? props.rowGap : "30")}px;
  width: 100%;

  @media (min-width: 576px) {
    grid-template-columns: repeat(${(props) => (props.columnsSM ? props.columnsSM : "2")}, 1fr);
  }

  @media (min-width: 769px) {
    max-width: ${(props) => (props.contentWidth ? `${props.contentWidth}px` : "")};
    grid-template-columns: repeat(${(props) => (props.columnsMD ? props.columnsMD : "")}, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(${(props) => (props.columnsLG ? props.columnsLG : "")}, 1fr);
  }
`;

const CategoriesGrid = ({ className, children, contentWidth, headlineWidth, textWidth, rowGap, columns, columnsSM, columnsMD, columnsLG }) => {
  return (
    <Container>
      <Wrapper className={className}>
        <Content contentWidth={contentWidth} headlineWidth={headlineWidth} textWidth={textWidth} rowGap={rowGap} columns={columns} columnsSM={columnsSM} columnsMD={columnsMD} columnsLG={columnsLG}>
          {children}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default CategoriesGrid;
