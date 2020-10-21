import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import GridTableRow from "../../molecules/blocks/grid-table-row";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 970px;
  position: relative;

  .table-row {
    @media (min-width: 769px) {
      grid-template-columns: 1fr 144px 144px;
    }

    @media (min-width: 992px) {
      grid-template-columns: 1fr 200px 200px;
    }

    & > div {
      min-width: 122px;

      p {
        color: ${color.black};
      }

      &:nth-child(2),
      &:nth-child(3) {
        justify-content: center;
      }
    }
  }
`;

const LLCTable = ({ className, content }) => (
  <Wrapper className={className}>
    <GridTableRow className="head" content={content.headers} header headerSize="5" columns="1fr 1fr 1fr" />
    {content.rows.map((row) => (
      <GridTableRow className="table-row" content={row} columns="1fr 1fr 1f" />
    ))}
  </Wrapper>
);

export default LLCTable;
