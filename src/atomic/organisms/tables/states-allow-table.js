import React from "react";
import styled from "styled-components";
import GridTableRow from "../../molecules/blocks/grid-table-row";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 72px;

    h5 {
        font-family: Avenir, sans-serif;
    }

    .head, .row {
        & > div {
            &:not(:first-child) {
                justify-content: center;

                h5, p {
                    text-align: center;
                }
            }
        }
    }
`

const TaxReturnTable = ({ className, content }) => {
const columnsNo = content.headers.length;

  return (
    <Wrapper className={className}>
        <GridTableRow className="head" content={content.headers} header headerSize="5" columns={columnsNo} />
        {content.rows.map(row => (
            <GridTableRow className="row" content={row} columns={columnsNo} />
        ))}
    </Wrapper>
  )
}

export default TaxReturnTable;
