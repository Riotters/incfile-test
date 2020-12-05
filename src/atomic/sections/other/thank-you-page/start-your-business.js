import React from "react";
import styled from "styled-components";
import {color, gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import ContentCenter from "../../../partials/content-center";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Button from "../../../molecules/buttons/button";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";
import Curve from "../../../atoms/icons/curve";
import LeftContentRightImage from "../../../partials/left-content-right-image";
import Buttonsbox from "../../../../atomic/atoms/boxes/top-buttons-box";
import TopLeftOval1SVG from "../../../../images/ovals/thank-you-page-start-your-business-top-left.inline.svg";
import TopRightOval2SVG from "../../../../images/ovals/thank-you-page-start-your-business-top-right.inline.svg";
import Oval from "../../../atoms/icons/oval";

const Wrapper = styled.div`
    padding: 18px 0 0;
    background: ${color.orange3};
    position: relative;
    
    .oval {
        overflow: hidden;
    }
    
    @media screen and (max-width: 556px) {
        padding: 50px 0 0;
    }
    
    .section-content {
        position: relative;
    }
    
    .oval {
        overflow: hidden;
        
        svg {
            position: absolute;
            bottom: 0;
        }
    }
`;

const LightBoxModal = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const LightBoxContent = styled.div`
 transition: height 0.5s, max-width .5s;

  background-color: #fff;
  width: 100%;
  max-width: 960px;
  position: relative;
  margin: 0 30px;
  max-height: 100vh;
  overflow-y: auto;
  @media screen and (min-width: 769px) {
    height: 95vh;
    padding-top: 0;
    overflow-y: visible;
  }
  
  &.form-submitted {
    height: 40vh;
    max-width: 500px;
  }
`;

const StartYourBusinessSection = ({ className, content }) => (
    <Wrapper>
        <Oval className="oval" height="420" width="420" top="0" left="0">
            <TopLeftOval1SVG />
        </Oval>
        <Oval className="oval" width="409" height="549" bottom="0" right="0">
            <TopRightOval2SVG />
        </Oval>
        <LeftContentRightImage image={content.image} className="section-content" contentWidth={520}>
            <Curve top="25" left="-115" color={color.orange2}>
                <CurveSVG />
            </Curve>
            <Heading size={2} bottomMargin={24}>{content.header}</Heading>
            <Paragraph big bottomMargin={32}>{content.text}</Paragraph>
            <Buttonsbox>
                <Button theme="primary56" arrow content={content.button}/>
            </Buttonsbox>
        </LeftContentRightImage>
    </Wrapper>
);

export default StartYourBusinessSection;
