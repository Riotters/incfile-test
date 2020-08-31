import React from "react";
import styled from "styled-components";
import CircleIconText from "../../molecules/circles/circle-icon-text";
import { color } from "../../atoms/styles/colors";
import BulbSVG from "../../../images/icons/bulb.inline.svg";
import BrushSVG from "../../../images/icons/brush.inline.svg";
import PenSVG from "../../../images/icons/pen.inline.svg";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 784px;
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

const circleIcons = [BulbSVG, BrushSVG, PenSVG];
const circleColors = [color.orange2, color.blue2, color.babyblue2];

const OtherTermsCircles = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        {content.map((circle, i) => (
            <CircleIconText content={circle} Icon={circleIcons[i]} color={circleColors[i]} />
        ))}
    </Wrapper>
  )
}

export default OtherTermsCircles;