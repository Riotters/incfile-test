import React from "react";
import styled from "styled-components";
import GridTableRow from "../../molecules/blocks/grid-table-row";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 970px;
    padding-top: 72px;
`

const TaxReturnTable = ({ className, content }) => {

  return (
    <Wrapper className={className}>
        <GridTableRow content={content.headers} header />
        {content.rows.map(row => (
            <GridTableRow content={row} list />
        ))}
    </Wrapper>
  )
}

export default TaxReturnTable;
