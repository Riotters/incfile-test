import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Circle from "../../atoms/icons/circle";
import Bluebox from "../../atoms/boxes/blue-box";

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    max-width: 470px;
    margin: 0 auto;
    
    @media (min-width: 769px) {
        max-width: 270px;
        margin: 0;
    }

    .box {
        display: flex;
        align-items: center;
        padding: 32px 32px 32px 32px;

        span {
            font-family: Avenir, sans-serif;
            font-weight: 900;
            font-size: 20px;
            line-height: 28px;
            margin-left: 24px;
        }
    }
`

const LightBlueBox = ({ className, content, Icon }) => (
    <Wrapper className={className}>
        <Bluebox className="box">
            {console.log(Icon)}
            <Icon />
            <span>{content}</span>
        </Bluebox>
    </Wrapper>
)

export default LightBlueBox
