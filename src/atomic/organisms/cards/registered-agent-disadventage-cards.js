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
    margin: 0 auto;
    padding-top: 104px;

    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .card {
        & > div {
            padding: 56px 25px 48px;
            margin: 0 auto;
        }

        h4, p {
            text-align: center;
        }
    }
`

const DisadventageCard = ({ className, content, curve }) => {
  return (
    <Wrapper className={className}>
        {curve && (
          <Curve top="-10" right="80">
              <CurveSVG />
          </Curve>
        )}
        {content.map((card) => (
            <Card className="card" content={card} circlePosition="center"/>
        ))}
    </Wrapper>
  )
}

export default DisadventageCard;