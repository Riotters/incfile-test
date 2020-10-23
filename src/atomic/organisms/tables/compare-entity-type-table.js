import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import GridTableRow from "../../molecules/blocks/grid-table-row";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-bottom: 56px;
  padding-top: 64px;

  .table-header,
  .table-row {
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (min-width: 769px) {
      grid-template-columns: 1fr 120px 120px 120px 120px;
    }

    @media (min-width: 992px) {
      grid-template-columns: 1fr 160px 160px 160px 160px;
    }

    & > div {
      min-width: 122px;

      p {
        color: ${color.black};
      }

      &:not(:first-child) {
        justify-content: center;

        p {
          font-weight: 400;
          background-color: ${color.green3};
          border-radius: 50px;
          padding: 8px 26px;
        }
      }
    }
  }

  .table-header {
    h4 {
      font-size: 16px;
    }

    & > div {
      &:nth-child(1) {
        display: none;

        @media (min-width: 769px) {
          display: flex;
        }
      }
    }
  }

  .table-row {
    grid-template-areas:
      "header header header header"
      "llc c-corp s-corp non-profit";

    @media (min-width: 769px) {
      grid-template-areas: "header llc c-corp s-corp non-profit";
    }

    & > div {
      &:nth-child(1) {
        grid-area: header;
        border-right-width: 0;
        border-bottom: 2px solid ${color.grey4};

        @media (min-width: 769px) {
          border-right-width: 2px;
          border-bottom-width: 0;
        }
      }

      &:nth-child(2) {
        grid-area: llc;
      }

      &:nth-child(3) {
        grid-area: c-corp;
      }

      &:nth-child(4) {
        grid-area: s-corp;
      }

      &:nth-child(5) {
        grid-area: non-profit;
      }
    }
  }
`;

const TaxReturnTable = ({ className, content }) => (
  <Wrapper className={className}>
    <GridTableRow className="table-header" content={content.headers} header />
    {content.rows.map((row) => (
      <GridTableRow className="table-row" content={row} />
    ))}
  </Wrapper>
);

export default TaxReturnTable;
