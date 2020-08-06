import React from "react";
import styled from "styled-components";
import CircleIconText from "../../molecules/circles/circle-icon-text";
import { color } from "../../atoms/styles/colors";
import BulbSVG from "../../../images/icons/bulb.inline.svg";
import BrushSVG from "../../../images/icons/brush.inline.svg";
import PenSVG from "../../../images/icons/pen.inline.svg";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 784px;
    margin-top: 72px;
    margin-bottom: 88px;

    & > div {
        &:last-child {
            padding: 0 32px;
        }
    }
`

const circleIcons = [BulbSVG, BrushSVG, PenSVG];
const circleColors = [color.orange2, color.blue2, color.babyblue2];

const BenefitsCards = ({ className, content }) => {
  return (
    <Wrapper className={className} content={content}>
        {content.map((circle, i) => (
            <CircleIconText content={circle} Icon={circleIcons[i]} color={circleColors[i]} />
        ))}
    </Wrapper>
  )
}

export default BenefitsCards;