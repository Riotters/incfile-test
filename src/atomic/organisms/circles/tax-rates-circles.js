import React from "react";
import styled from "styled-components";
import CircleIconText from "../../molecules/circles/circle-icon-text";
import { color } from "../../atoms/styles/colors";
import CountySVG from "../../../images/icons/los-angeles-county.inline.svg";
import StateSVG from "../../../images/icons/ca-state.inline.svg";
import CitySVG from "../../../images/icons/los-angeles.inline.svg";
import DistrictsSVG from "../../../images/icons/districts.inline.svg";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1044px;
    margin-top: 72px;
    margin-bottom: 88px;
    
    @media (min-width: 576px) {
        flex-direction: row;
        justify-content: space-between;
    }

    & > div {
        margin: 0 auto 48px;

        @media (min-width: 576px) {
            margin: 0;
        }

        &:last-child {
            padding: 0 32px;
            margin: 0 auto;

            @media (min-width: 576px) {
                margin: 0;
            }
        }
    }
`

const circleIcons = [StateSVG, CountySVG, CitySVG, DistrictsSVG];
const circleColors = [color.green2, color.orange2, color.blue2, color.red2];

const OtherNamesCircles = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        {content.map((circle, i) => (
            <CircleIconText content={circle} Icon={circleIcons[i]} color={circleColors[i]} />
        ))}
    </Wrapper>
  )
}

export default OtherNamesCircles;