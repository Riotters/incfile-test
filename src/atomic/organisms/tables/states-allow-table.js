import React from "react";
import styled from "styled-components";
import GridTableRow from "../../molecules/blocks/grid-table-row";
import { color } from "../../atoms/styles/colors";

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

    .row {
        & > div {
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
