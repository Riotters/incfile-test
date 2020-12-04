import React from "react";
import styled from "styled-components";
import GridTableRow from "../molecules/blocks/grid-table-row";

const AnnualReportBoxOnly = ({ data }) => {
    const headers = [`State Fee`, `State Filing Time`, `Expedited Filing Time`];
    const rows = [[`$${data.prices?.statefee}`, `${data.prices?.slow}`, `${data.prices?.fast}`]];

    return (
        <Wrapper className="grid-table" style={{ marginBottom: `32px` }}>
            <GridTableRow textCenter columns="3" content={headers} header headerSize={5} />
            {rows && (rows.map(row => (
                <GridTableRow textCenter content={row} columns="3" list />
            )))}
        </Wrapper>
    );
}

export default AnnualReportBoxOnly;

const Wrapper = styled.div`
    // Just override something for cells of grid table
    [class*="grid-table-row__ListItem"]{
        padding-left: 0;

        &:before{
            display: none;
        }
    }

    [class*="grid-table-row__Cell"]:first-of-type p {
        border-radius: 20px;
        background-color: #f2f8f3;
        padding: 8px 25px;
    }
    
    @media (max-width: 575px) {
        width: 100%;
        overflow-x: auto;
    }
`
