import React from "react"
import styled from "styled-components"
import { color } from "../../atoms/styles/colors"
import { shadow } from "../../atoms/styles/shadows"
import PropsTypes from "prop-types";
import IconCircle from "../../../components/icons/circle";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 24px;
    background-color: ${color.white};
    box-shadow: ${shadow.white1};
    position: relative;
    border-radius: 5px;
    margin-bottom: 8px;
    
    @media (min-width: 770px) {
        width: 770px;
    }
`

const Box = styled.span`
    height: 32px;
    width: 32px;
    margin-right: 24px;
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    &::before {
        content: '';
        display: block;
        padding-top: 100%;
    }
`;

const CountingTextBoxed = ({ className, children, number, circleColor, iconColor}) => (
    <Wrapper className={className}>
        <Box>
            <IconWrapper>
                <IconCircle circleColor={circleColor} iconColor={iconColor}>
                    {number}
                </IconCircle>
            </IconWrapper>
        </Box>
        {children}
    </Wrapper>
);

export default CountingTextBoxed;

CountingTextBoxed.defaultProps = {
    circleColor: color.blue1,
    iconColor: color.white
}
