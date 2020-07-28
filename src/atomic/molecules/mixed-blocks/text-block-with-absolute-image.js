import React from "react";
import styled from "styled-components";
import Circle from "../../atoms/icons/circle";
import PropsTypes from "prop-types";

const TextBlockWithImage = ({ children, SvgImage, textBackgroundColor, imageBackgroundColor, imageShadowColor, imageShadowOpacity, width, borderRadius}) => (
    <TextBlock textBackgroundColor={textBackgroundColor} borderRadius={borderRadius} width={width}>
        {console.log(imageShadowColor)}
        {console.log(hexToRgb(imageShadowColor))}
        <AbsoluteCircle imageShadowOpacity={imageShadowOpacity} imageShadowColor={imageShadowColor}>
            <Circle circleColor={imageBackgroundColor} padding={20} height={80} width={80}>
                <SvgImage />
            </Circle>
        </AbsoluteCircle>
        { children }
    </TextBlock>
);

const TextBlock = styled.div`
    background-color: ${props => props.textBackgroundColor};
    width: 100%;
    position: relative;
    margin-bottom: 70px;
    padding: 70px 40px 40px 40px;
    box-shadow: 0 24px 32px rgba(236, 236, 236, 0.5);
    border-radius: ${props => props.borderRadius}px;
    
    @media (min-width: ${props => props.width}px){
        width: ${props => props.width}px;
    }
`;

const AbsoluteCircle = styled.div`
    position: absolute;
    top: -40px;
    left: 40px;
    border-radius: 50%;
    box-shadow: 0 24px 32px rgba(${props => hexToRgb(props.imageShadowColor).r}, ${props => hexToRgb(props.imageShadowColor).g}, ${props => hexToRgb(props.imageShadowColor).b}, ${props => props.imageShadowOpacity});
`;

export default TextBlockWithImage;

TextBlockWithImage.propTypes = {
    width: PropsTypes.number,
    borderRadius: PropsTypes.number,
    SvgImage: PropsTypes.any.isRequired
}

TextBlockWithImage.defaultProps = {
    width: 470,
    borderRadius: 20,
    textBackgroundColor: `white`,
    imageShadowColor: `#e0f4fd`,
    imageShadowOpacity: 0.5
}

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
