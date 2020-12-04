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
            grid-template-columns: 1fr 144px;
        }

        @media (min-width: 992px) {
            grid-template-columns: 1fr 216px;
        }

        & > div {
            min-width: 122px;

            p {
                color: ${color.black};
            }

            &:nth-child(2) {
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
`;

const TaxReturnTable = ({ className, content }) => (
    <Wrapper className={className}>
        {content.rows.map((row, i) => (
        <GridTableRow key={i} className="table-row" content={row} columns="1fr 1fr" />
        ))}
    </Wrapper>
);

export default TaxReturnTable;
