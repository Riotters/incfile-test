import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors"
import GridTableRow from "../../molecules/blocks/grid-table-row";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/bottom-left-top-right.inline.svg";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 970px;
    padding-top: 72px;
    position: relative;
`

const TaxReturnTable = ({ className, content }) => {

  return (
    <Wrapper className={className}>
        <Curve top="45" left="-29" color={color.orange1}>
            <CurveSVG />
        </Curve>
        <GridTableRow content={content.headers} header />
        {content.rows.map(row => (
            <GridTableRow content={row} list />
        ))}
    </Wrapper>
  )
}

export default TaxReturnTable;
