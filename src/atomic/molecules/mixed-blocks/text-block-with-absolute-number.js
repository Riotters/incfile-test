import React from "react";
import styled from "styled-components";
import Circle from "../../atoms/icons/circle";
import PropsTypes from "prop-types";
import { shadow } from "../../atoms/styles/shadows";

const TextBlockWithNumberCounting = ({ children, numberCounting, textBackgroundColor, imageBackgroundColor, imageShadowColor, width, widthUnit, borderRadius, boxShadow, paddingTop, paddingBottom, paddingLeft, paddingRight, blockId, style }) => (
  <TextBlock id={blockId} textBackgroundColor={textBackgroundColor} borderRadius={borderRadius} width={width} boxShadow={boxShadow} paddingTop={paddingTop} paddingBottom={paddingBottom} paddingLeft={paddingLeft} paddingRight={paddingRight} style={style} widthUnit={widthUnit}>
    <AbsoluteCircle imageShadowColor={imageShadowColor}>
      <Circle circleColor={imageBackgroundColor} padding={0} height={80} width={80} paddingLeft={paddingLeft}>
        <NumberSpan>{numberCounting}</NumberSpan>
      </Circle>
    </AbsoluteCircle>
    {children}
  </TextBlock>
);

const NumberSpan = styled.span`
    font-family: MarkPro;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #5089fd;
`

const TextBlock = styled.div`
    background-color: ${(props) => props.textBackgroundColor};
    width: 100%;
    position: relative;
    
    padding-right: ${(props) => (props.boxShadow ? props.paddingRight : 0)}px;
    padding-left: ${(props) => (props.boxShadow ? props.paddingLeft : 0)}px;
   
    padding-top: ${(props) => props.paddingTop}px;
    padding-bottom: ${(props) => props.paddingBottom}px;

    @media (min-width: 576px) {
            padding-right: ${(props) => props.paddingRight}px;
            padding-left: ${(props) => props.paddingLeft}px;
            padding-top: ${(props) => props.paddingTop}px;
            padding-bottom: ${(props) => props.paddingBottom}px;
    }
    
    ${(props) => props.boxShadow && "box-shadow: 0 24px 32px rgba(236, 236, 236, 0.5);"}
    border-radius: ${(props) => props.borderRadius}px;
    
    @media (min-width: ${(props) => props.width + props.widthUnit}){
        width: ${(props) => props.width + props.widthUnit};
    }
`;

const AbsoluteCircle = styled.div`
  position: absolute;
  top: -40px;
  left: ${(props) => props.paddingLeft};
  border-radius: 50%;
  box-shadow: ${(props) => props.imageShadowColor};
`;

export default TextBlockWithNumberCounting;

TextBlockWithNumberCounting.propTypes = {
    width: PropsTypes.number,
    borderRadius: PropsTypes.number,
    boxShadow: PropsTypes.bool,
    paddingTop: PropsTypes.number,
    paddingBottom: PropsTypes.number,
    paddingLeft: PropsTypes.number,
    paddingRight: PropsTypes.number,
    widthUnit: PropsTypes.string,
};

TextBlockWithNumberCounting.defaultProps = {
    width: 470,
    widthUnit: "px",
    borderRadius: 20,
    textBackgroundColor: `white`,
    imageShadowColor: shadow.white2,
    imageShadowOpacity: 0.5,
    boxShadow: true,
    paddingTop: 70,
    paddingBottom: 40,
    paddingLeft: 40,
    paddingRight: 40,
};