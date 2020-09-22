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
  margin-bottom: 56px;

  .table-header,
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