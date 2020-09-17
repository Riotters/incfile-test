import React from "react";
import styled from "styled-components";
import { color } from "../atoms/styles/colors";
import Image from "../atoms/image/image_nobase64";
import Container from "../container";
import TXMap from "../../images/tx-map.inline.svg";

import VisibilitySensor from "../VisibilitySensor";

const switch1 = (ovalColor) => {
  switch (ovalColor) {
    case "blue": {
      return color.blue1;
    }
    case "orange": {
      return color.orange1;
    }
    case "purple": {
      return color.purple1;
    }
    case "yellow": {
      return color.yellow1;
    }
    case "green": {
      return color.green1;
    }
    case "sun": {
      return "#ffb059";
    }
    default:
      return "";
  }
};

const switch2 = (ovalColor) => {
  switch (ovalColor) {
    case "blue": {
      return color.babyblue2;
    }
    case "orange": {
      return color.orange2;
    }
    case "purple": {
      return color.purple2;
    }
    case "green": {
      return color.green2;
    }
    case "yellow": {
      return color.yellow2;
    }
    case "sun": {
      return "#ffe3c5";
    }
    default:
      return "";
  }
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const IconMap = styled.div`
    width: 550px;
    position: absolute;
    top: 100px;
    right: 75px;
    z-index: -1;
    transform: scale(.9);

    &::after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    & > svg {
        position: absolute;
        right: 0;
        bottom: 0;
    }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 230px;

    @media (min-width: 992px) {
        width: 60%;
        align-items: flex-start;
    }

    h1 {
        width: 100%;
        text-align: center;
        padding-bottom: 40px;

        @media (min-width: 992px) {
        text-align: left;
        padding-bottom: 20px;
        }

        @media (min-width: 1200px) {
            max-width: ${(props) => (props.headlineWidth ? props.headlineWidth : "480")}px;
        }
    }

    p {
        margin-bottom: 33px;
        text-align: center;

        @media (min-width: 1200px) {
        text-align: left;
        max-width: ${(props) => (props.headlineWidth ? props.headlineWidth : "480")}px;
        }
    }
`;

const ImageContainer = styled.div`
    display: none;
    width: 70%;
    max-width: 950px;
    position: absolute;
    top: 5%;
    right: -20%;
    -ms-transform: translate(-12%,0);
    transform: translate(0,0);

    @media (min-width: 992px) {
        display: flex;
    }

    @media screen and (min-width: 1550px) {
        width: ${(props) => (props.imageWidthLG ? props.imageWidthLG : "65")}%;
        top: 15px;
        right: ${(props) => (props.imageOffsetRightLG ? props.imageOffsetRightLG : "-15")}%;
    }
    .gatsby-image-wrapper {
        width: 100%;  
        img {
            object-fit: contain !important;
        }
    }
`;

const arrayMap = {
    TX: <TXMap />,
};

const Top = ({ children, imageName, imageAlt, headlineWidth, imageWidthLG, imageOffsetRightLG, stateName }) => (
    <Wrapper>
        <IconMap>
            {arrayMap[stateName]}
        </IconMap>
    
    <Container>
      <Content>
        <VisibilitySensor partialVisibility once>
          {({ isVisible }) => (
            <TextContainer className={isVisible ? "slideRight enter" : "slideRight"} headlineWidth={headlineWidth}>
              {children}
            </TextContainer>
          )}
        </VisibilitySensor>

        <ImageContainer imageWidthLG={imageWidthLG} imageOffsetRightLG={imageOffsetRightLG}>
          <Image filename={imageName} alt={imageAlt} />
        </ImageContainer>
      </Content>
    </Container>
  </Wrapper>
);

export default Top;

Top.defaultProps = {
  OvalSVGFile: Map,
};
