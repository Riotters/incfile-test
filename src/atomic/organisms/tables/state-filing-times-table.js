import React from "react";
import styled from "styled-components";
import GridTableRow from "../../molecules/blocks/grid-table-row";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    font-family: Avenir, sans-serif;
  }

  .head,
  .row {
    & > div {
      &:not(:first-child) {
        justify-content: center;

        h5,
        p {
          text-align: center;
        }
      }
    }
  }

  .row {
    & > div {
      &:nth-child(3) {
        p {
          background-color: ${color.green3};
          border-radius: 20px;
          padding: 8px 16px;
        }
      }

      &:last-child {
        p {
          background-color: ${color.green3};
          border-radius: 20px;
          padding: 8px 16px;
        }
      }
    }
  }

  p {
    font-size: 16px;
    line-height: 24px;
    color: ${color.black};
  }
  
  @media (max-width: 575px) {
    max-width: 100%;
  }
`;

const TaxReturnTable = ({ className, headerSize = 2, headerSizeTemplate = 5, content }) => {
  return (
    <Wrapper className={className}>
      <GridTableRow className="head" content={content.headers} header headerSize={headerSize} headerSizeTemplate={headerSizeTemplate} columns="1fr 1fr 1fr 1fr" />
      {content.rows.map((row, i) => (
        <GridTableRow key={i} className="row" content={row} columns="1fr 1fr 1fr 1fr"  />
      ))}
    </Wrapper>
  );
};

export default TaxReturnTable;
