import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import { motion } from "framer-motion";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import CurveSVG from "../../../images/orange-curve.inline.svg";
import VisibilitySensor from "../../../components/VisibilitySensor";
import Whitebox from "../../atoms/boxes/white-box";
import IconCircle from "../../../components/icons/circle";
import ArrowSVG from "../../../images/arrow.inline.svg";

const Wrapper = styled(Whitebox)`
  width: 100%; 
  position: relative;
  
  button {
    width: 100%;
    text-align: left;
    background: transparent;
    border: 0;
    padding: 24px 16px 16px 64px;
    cursor: pointer;
  }

  .arrow {
    position: absolute;
    top: 16px;
    left: 16px;

    svg {
        transition: transform .3s ease;
    }
  }

  .question {
    font-family: Avenir, sans-serif;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    font-weight: ${props => props.isOpen ? "900" : "400"};
  }
`;

const Content = styled.div`
    display: ${props => props.isOpen ? "block" : "none"};
    width: 100%;
    bottom: 5px;
    left: 0;
    background-color: ${color.white};
    box-shadow: ${shadow.white1};
    padding: 16px 16px 16px 64px;
    z-index: 1;
    
    @media (min-width: 992px) {
        position: absolute;
        transform: translateY(100%);
    }

    .answer {
      color: ${color.grey1};
      font-size: 16px;
      line-height: 24px;
    }
`;


const Accordion = ({ content }) => {
    const [text, showText] = useState(false);

    function handleClick() {
        showText(!text)
    }

  return (
    <Wrapper isOpen={text}>
        <button onClick={handleClick}>
            <IconCircle className="arrow" transform={text ? `rotate(-90deg)` : `rotate(90deg)`} circleColor={color.orange3} iconColor={color.orange1}>
                <ArrowSVG/>
            </IconCircle>
            <span className="question">{content.question}</span>
        </button>
        <Content isOpen={text}>
            <p className="answer">{content.answer}</p>
        </Content>
    </Wrapper>
  );
};
export default Accordion;
