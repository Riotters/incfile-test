import React from "react";
import styled from "styled-components";
import Circle from "../../atoms/icons/circle";
import PropsTypes from "prop-types";

const TextBlockWithImage = (
    {
        children,
        SvgImage,
        textBackgroundColor,
        imageBackgroundColor,
        width,
        widthUnit,
        borderRadius,
        boxShadow,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        style,
    }
) => (
    <TextBlock
        textBackgroundColor={textBackgroundColor}
        borderRadius={borderRadius}
        width={width}
        boxShadow={boxShadow}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        style={style}
        widthUnit={widthUnit}
    >
        <AbsoluteCircle>
            <Circle circleColor={imageBackgroundColor} padding={0} height={80} width={80} paddingLeft={paddingLeft}>
                <SvgImage/>
            </Circle>
        </AbsoluteCircle>
        {children}
    </TextBlock>
);

const TextBlock = styled.div`
    background-color: ${props => props.textBackgroundColor};
    width: 100%;
    position: relative;
    padding: ${props => (props.paddingTop + "px " + props.paddingRight + "px " + props.paddingBottom + "px " + props.paddingLeft + "px")};
    ${props => (props.boxShadow &&
        "box-shadow: 0 24px 32px rgba(236, 236, 236, 0.5);"
    )}
    border-radius: ${props => props.borderRadius}px;
    
    @media (min-width: ${props => props.width + props.widthUnit}){
        width: ${props => props.width + props.widthUnit};
    }
`;

const AbsoluteCircle = styled.div`
    position: absolute;
    top: -40px;
    left: ${props => props.paddingLeft};
    border-radius: 50%;
`;

export default TextBlockWithImage;

TextBlockWithImage.propTypes = {
    width: PropsTypes.number,
    borderRadius: PropsTypes.number,
    SvgImage: PropsTypes.any.isRequired,
    boxShadow: PropsTypes.bool,
    paddingTop: PropsTypes.number,
    paddingBottom: PropsTypes.number,
    paddingLeft: PropsTypes.number,
    paddingRight: PropsTypes.number,
    widthUnit: PropsTypes.string
}

TextBlockWithImage.defaultProps = {
    width: 470,
    widthUnit: "px",
    borderRadius: 20,
    textBackgroundColor: `white`,
    imageShadowColor: `#e0f4fd`,
    imageShadowOpacity: 0.5,
    boxShadow: true,
    paddingTop: 70,
    paddingBottom: 40,
    paddingLeft: 40,
    paddingRight: 40,
}

// function hexToRgb(hex) {
//     // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
//     let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//     hex = hex.replace(shorthandRegex, function (m, r, g, b) {
//         return r + r + g + g + b + b;
//     });

//     let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//     return result ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16)
//     } : null;
// }
