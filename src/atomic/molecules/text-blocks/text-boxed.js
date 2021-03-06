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
    padding: 24px 24px 24px 80px;
    background-color: ${color.white};
    box-shadow: ${shadow.white1};
    position: relative;
    border-radius: 5px;

    p {
        font-size: 16px; 
        line-height: 24px;
        color: ${color.black};
    }
`

const Box = styled.span`
    height: 32px;
    width: 32px;
    position: absolute;
    top: 24px;
    left: 24px;
`;

const TextBoxed = ({ className, children, isRed }) => (
    <Wrapper className={className} isRed={isRed}>
        <Box>
            {isRed && (
                <ExSVG />
            )}
            {!isRed && (
                <CheckSVG />
            )}
        </Box>
        <div style={{paddingTop: "5px"}}>
            {children}
        </div>
    </Wrapper>
)

export default TextBoxed
