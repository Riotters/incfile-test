import React from "react";
import styled from "styled-components";
import Container from "../container";
import Curve from "../atoms/icons/curve";
import CurveSVG from "../../images/curves/bottom-left-top-right.inline.svg";
import { color } from "../atoms/styles/colors";

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
  grid-row-gap: ${(props) => (props.rowGap ? props.rowGap : "8")}px;
  width: 100%;
  position: relative;

  @media (min-width: 576px) {
    grid-template-columns: repeat(
      ${(props) => (props.columnsSM ? props.columnsSM : "2")},
      1fr
    );
  }

  @media (min-width: 769px) {
    max-width: ${(props) =>
      props.contentWidth ? `${props.contentWidth}px` : ""};
    grid-template-columns: repeat(
      ${(props) => (props.columnsMD ? props.columnsMD : "")},
      1fr
    );
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(
      ${(props) => (props.columnsLG ? props.columnsLG : "")},
      1fr
    );
    grid-row-gap: ${(props) => (props.rowGapLG ? props.rowGapLG : "30")}px;
  }
`;

const CategoriesGrid = ({
  className,
  children,
  contentWidth,
  headlineWidth,
  textWidth,
  rowGap,
  rowGapLG,
  columns,
  columnsSM,
  columnsMD,
  columnsLG,
  curve,
}) => {
  return (
    <Container>
      <Wrapper className={className}>
        <Content
          contentWidth={contentWidth}
          headlineWidth={headlineWidth}
          textWidth={textWidth}
          rowGap={rowGap}
          rowGapLG={rowGapLG}
          columns={columns}
          columnsSM={columnsSM}
          columnsMD={columnsMD}
          columnsLG={columnsLG}
        >
          {curve && (
            <Curve
              className="curve-shape"
              top="-25"
              left="-29"
              color={color.orange1}
            >
              <CurveSVG />
            </Curve>
          )}
          {children}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default CategoriesGrid;
