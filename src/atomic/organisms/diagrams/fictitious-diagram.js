import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import LightBlueBox from "../../molecules/mixed-blocks/diagram-lightblue-box";
import PathSVG from "../../../images/icons/fictitious-diagram.inline.svg";
import PathMobileSVG from "../../../images/icons/fictitious-diagram-mobile.inline.svg";
import TargetSVG from "../../../images/icons/target.inline.svg";
import Arrow1SVG from "../../../images/icons/arrow1.inline.svg";
import Arrow2SVG from "../../../images/icons/arrow2.inline.svg";
import Arrow3SVG from "../../../images/icons/arrow3.inline.svg";
import Arrow4SVG from "../../../images/icons/arrow4.inline.svg";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 1104px;
    position: relative;
    padding-bottom: 64px;
`;

const MobileDiagram = styled.div`
    display: flex;
    width: 33px;
    min-width: 33px;

    @media (min-width: 576px) {
        width: 42px;
    }

    @media (min-width: 769px) {
        display: none;
    }

    svg {
        width: 100%;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    @media (min-width: 769px) {
        width: 100%;
    }
`;

const Top = styled.div`
    display: flex; 
    width: 100%;
    margin-bottom: 24px;

    @media (min-width: 769px) {
        justify-content: center;
        margin-bottom: 0;
    }

    .box {
        background-color: ${color.blue1};
        color: ${color.white};
        border-radius: 20px;
        padding: 24px 20px 24px 32px;

        @media (min-width: 576px) {
            padding: 32px; 
        }
    }
`;

const Mid = styled.div`
    display: none;
    width: 75.5%;

    @media (min-width: 769px) {
        display: block;
    }
`;

const Bot = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 16px;
    width: 100%;
    
    @media (min-width: 769px) {
        grid-gap: 8px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    
    .sub {
        .box {
            border-radius: 20px;
        }

        @media (min-width: 769px) {
            &:nth-child(1) {
                .box {
                    border-radius: 20px 5px 5px 20px;
                }
            }

            &:nth-child(2), &:nth-child(3) {
                .box {
                    border-radius: 5px;
                }
            }

            &:nth-child(4) {
                .box {
                    border-radius: 5px 20px 20px 5px;
                }
            }
        }

        .box {
            padding: 16px 20px 16px 32px;
    
            @media (min-width: 576px) {
                padding: 28px; 
            }
        }
    }
`;

const subIcons=[Arrow1SVG, Arrow2SVG, Arrow3SVG, Arrow4SVG];

const Diagram = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <MobileDiagram>
            <PathMobileSVG />
        </MobileDiagram>
        <Content>
            <Top>
                <LightBlueBox content={content.main} Icon={TargetSVG}/>
            </Top>
            <Mid>
                <PathSVG />
            </Mid>
            <Bot>
                {content.subs.map((sub, i) => (
                    <LightBlueBox className="sub" content={sub} Icon={subIcons[i]}/>
                ))}
            </Bot>
        </Content>
    </Wrapper>
  )
}

export default Diagram;