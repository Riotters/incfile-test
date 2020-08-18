import React from "react"
import styled from "styled-components"
import Curve from "../images/purple-curve.inline.svg"
import { color } from "./styles/colors"

const Wrapper = styled.div`
    padding: 16px 16px 0 0;
    position: relative;

    > div {
        background-color: ${props => (props.color ? props.color : "")};
        border-radius: 5px 50px 50px 5px;
        padding: 40px;

        @media (min-width: 576px) {
            padding: ${props => (props.theme==="icon" ? "40px 40px 40px 112px" : "40px")};
        }
        
        h4 {
            padding-bottom: ${props => (props.theme==="icon" ? "16px" : "24px")};
        }
    
        p {
            color: ${color.grey1};
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
        
        ul.display-list {
            list-style: none;

            li {
                font-family: Avenir, sans-serif;
                font-size: 16px;
                line-height: 24px;
                color: #63666E;
                padding-left: 26px;
                position: relative;

                &::before {
                    content: '\\2022';
                    color: ${color.blue1};
                    border-radius: 50%;
                    position: absolute;
                    top: 0px;
                    left: 6px;
                }

                &:not(:last-child) {
                    margin-bottom: 12px;
                }
            }
        }
    }

    & > svg {
        position: absolute;
        top: 0;
        right: 0;

        path {
            fill: ${props => props.curveColor ? props.curveColor : ""}
        }
    }

    & > div {
        svg {
            position: absolute;
            left: 44px;
            display: none;
        
            @media (min-width: 576px){
                display: block;
            }
        }
    }
`

const Colorbox = ({ className, theme, Icon, color, dotsColor, children, curve, curveColor }) => {

  return (
    <Wrapper className={className} theme={theme} color={color} dotsColor={dotsColor} curveColor={curveColor}>
        {curve && (
            <Curve />
        )}
        <div>
            {Icon && theme === "icon" ? (
                <Icon />
            ) : null}   
            {children}
        </div>
    </Wrapper>
  )
}

export default Colorbox
