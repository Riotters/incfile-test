import React from "react"
import styled from "styled-components"
import { color } from "../../atoms/styles/colors"
import { shadow } from "../../atoms/styles/shadows"
import CheckSVG from "../../../images/circle-status-check.inline.svg"
import ExSVG from "../../../images/circle-status-x.inline.svg"

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 670px;
    padding: 24px;

    p {
        display: flex;
        align-items: center;
        min-height: 32px;
        font-size: 16px;
        line-height: 24px;
        color: ${color.grey1};
        padding: 0;
    }

    span {
        border-radius: 50%;
        margin-right: 24px;
        box-shadow: ${props => (props.isRed ? shadow.red1 : shadow.green1)};
    }
`

const Box = styled.span`
    height: 32px;
    width: 32px;
`;

const CircleCheckmarkText = ({ className, content, isRed }) => (
    <Wrapper className={className} isRed={isRed}>
        <Box>
            {isRed && (
                <ExSVG />
            )}
            {!isRed && (
                <CheckSVG />
            )}
        </Box>
        <p>{content}</p>
    </Wrapper>
)

export default CircleCheckmarkText