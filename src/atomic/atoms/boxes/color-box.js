import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.div`
    background-color: ${props => (props.color ? props.color : "")};
    border-radius: 5px 50px 50px 5px;
    padding: ${props => (props.Icon ? "40px 40px 40px 112px" : "40px")};

    h4 {
        padding-bottom: ${props => (props.Icon ? "16px" : "24px")};
    }

    p {
        font-size: 16px;
        line-height: 24px;
        color: ${color.grey1};
        padding-bottom: 0;
    }

    ul {
        list-style: none;

        li {
            font-family: Avenir, sans-serif;
            font-size: 16px;
            line-height: 24px;
            color: #63666E;
            padding-left: 26px;
            position: relative;

            &::before {
                content: '';
                height: 4px;
                width: 4px;
                background-color: ${props => (props.dotsColor ? props.dotsColor : "")};
                border-radius: 50%;
                position: absolute;
                top: 9px;
                left: 6px;
            }

            &:not(:last-child) {
                margin-bottom: 12px;
            }
        }
    }

    svg {
        position: absolute;
        left: 44px;
    }
`

const Colorbox = ({ className, color, Icon, dotsColor, content }) => {
  return (
    <Wrapper className={className} color={color} Icon={Icon} dotsColor={dotsColor}>
        {Icon && (
                <Icon />
            )}   
        {content.header && (
            <h4>{content.header}</h4>
        )}
        {content.text && (
            <p>{content.text}</p>
        )}
        {content.list && (
            <ul>
                {content.list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        )}
    </Wrapper>
  )
}

export default Colorbox
