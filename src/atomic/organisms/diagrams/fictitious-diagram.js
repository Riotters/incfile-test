import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import LightBlueBox from "../../molecules/mixed-blocks/diagram-lightblue-box";
import PathSVG from "../../../images/icons/fictitious-diagram.inline.svg";
import TargetSVG from "../../../images/icons/target.inline.svg";
import Arrow1SVG from "../../../images/icons/arrow1.inline.svg";
import Arrow2SVG from "../../../images/icons/arrow2.inline.svg";
import Arrow3SVG from "../../../images/icons/arrow3.inline.svg";
import Arrow4SVG from "../../../images/icons/arrow4.inline.svg";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1104px;
    position: relative;
    padding-bottom: 64px;
`;

const Top = styled.div`
    display: flex; 
    width: 100%;
    margin-bottom: 16px;

    @media (min-width: 769px) {
        justify-content: center;
        margin-bottom: 0;
    }

    .box {
        background-color: ${color.blue1};
        color: ${color.white};
        border-radius: 20px;
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
    grid-gap: 8px;
    width: 100%;

    @media (min-width: 769px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .sub {
        @media (min-width: 769px) {
            &:nth-child(1) {
                .box {
                    border-radius: 20px 5px 5px 20px;
                }
            }
            &:nth-child(4) {
                .box {
                    border-radius: 5px 20px 20px 5px;
                }
            }
        }
    }
`;

const subIcons=[Arrow1SVG, Arrow2SVG, Arrow3SVG, Arrow4SVG];

const Diagram = ({ className, content }) => {
  return (
    <Wrapper className={className}>
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
    </Wrapper>
  )
}

export default Diagram;