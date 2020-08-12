import React from "react";
import styled from "styled-components";
import { color } from "../atoms/styles/colors";
import VisibilitySensor from "../VisibilitySensor";
import Container from "../container";
import Image from "../atoms/image/image";
import OvalSVG from "../../images/oval.inline.svg";

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
    case "sun": {
      return "#ffb059";
    }
    case "blackpink": {
      return "#ffb8b8";
    }
    case "darkblue": {
      return "#7891fc";
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
    case "yellow": {
      return color.yellow2;
    }
    case "sun": {
      return "#ffe3c5";
    }
    case "blackpink": {
      return "#ffdddd";
    }
    case "darkblue": {
      return "#ced7ff";
    }
    default:
      return "";
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 80px;
  
  @media (min-width: 992px) {
    flex-direction: row;
    height: 100vh;
    max-height: 777px;
    padding-top: 0;
  }
`;

const Oval = styled.div`
  width: 90%;
  max-height: 777px;
  max-width: 350px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;

  @media (min-width: 992px) {
    width: 50%;
    max-width: 850px;
  }

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  & > svg {
    position: absolute;
    right: 0;
    bottom: 0;

    defs {
      radialGradient {
        stop {
          &:nth-child(1) {
            stop-color: ${({ ovalColor }) => switch1(ovalColor)};
          }
          &:nth-child(2) {
            stop-color: ${({ ovalColor }) => switch2(ovalColor)};
          }
        }
      }
    }

    path {
      transform: matrix(1, 0, 0, -1, -115, 777);
    }
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
  padding-top: 32px;

  @media (min-width: 992px) {
    width: 50%;
    align-items: flex-start;
    padding-top: 150px;
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
  display: flex;
  max-width: 950px;
  width: 100%;
  top: 50%;
  right: 55%;
  
  @media (min-width: 992px) {
    position: absolute;
    width: 55%;
    transform: translate(100%, -50%);
  }

  .gatsby-image-wrapper {
    width: 100%;

    img {
      object-fit: contain !important;
    }
  }
`;

const Top = ({ children, imageName, imageAlt, headlineWidth, ovalColor }) => (
  <Wrapper>
    <VisibilitySensor partialVisibility once>
      {({ isVisible }) => (
        <Oval className={isVisible ? "scaleUp enter" : "scaleUp"} ovalColor={ovalColor}>
          <OvalSVG />
        </Oval>
      )}
    </VisibilitySensor>
    <ImageContainer>
      <Image filename={imageName} alt={imageAlt} />
    </ImageContainer>
    <Container>
      <Content>
        <VisibilitySensor partialVisibility once>
          {({ isVisible }) => (
            <TextContainer className={isVisible ? "slideRight enter" : "slideRight"} headlineWidth={headlineWidth}>
              {children}
            </TextContainer>
          )}
        </VisibilitySensor>
      </Content>
    </Container>
  </Wrapper>
);

export default Top;

Top.defaultProps = {
  OvalSVGFile: OvalSVG,
};
