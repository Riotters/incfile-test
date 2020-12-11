import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Card from "../../molecules/mixed-blocks/disadventages"
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/top-left-bottom-right-big.inline.svg";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 30px;
    width: 100%;
    max-width: 970px;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 104px;

    @media (min-width: 769px) {
      grid-template-columns: 1fr 1fr;
    }
`

const DisadventageCard = ({ className, content, curve, paragraphHeading = false }) => {
  return (
    <Wrapper className={className}>
        {curve && (
          <Curve top="-10" right="80">
              <CurveSVG />
          </Curve>
        )}
        {content.map((card) => (
            <Card content={card} paragraphHeading={paragraphHeading} />
        ))}
    </Wrapper>
  )
}

export default DisadventageCard;