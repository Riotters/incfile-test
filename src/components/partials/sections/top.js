import React from "react";
import styled from "styled-components";
import { color } from "../../../atomic/atoms/styles/colors";
import Image from "../../image_nobase64";
import Container from "../../container";
import OvalSVG from "../../../images/oval.inline.svg";
import VisibilitySensor from "../../VisibilitySensor";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100vh;
  max-height: 777px;
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

  @media (min-width: 768px) {
    width: 50%;
    max-width: 850px;
  }

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  svg {
    position: absolute;
    right: 0;
    bottom: 0;

    defs {
      radialGradient {
        stop {
          &:nth-child(1) {
            stop-color: ${props => props.ovalColor === "blue" ? color.blue1 : ""}
          }
          &:nth-child(2) {
            stop-color: ${props => props.ovalColor === "blue" ? color.babyblue2 : ""}
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
  padding-top: 50px;

  @media (min-width: 768px) {
    width: 50%;
    align-items: flex-start;
  }

  h1 {
    width: 100%;
    max-width: ${props => (props.headlineWidth ? props.headlineWidth : "480")}px;
    text-align: center;
    padding-bottom: 40px;

    @media (min-width: 768px) {
      text-align: left;
      padding-bottom: 20px;
    }
  }

  p {
    max-width: ${props => (props.headlineWidth ? props.headlineWidth : "480")}px;
    margin-bottom: 33px;
  }
`;

const ImageContainer = styled.div`
  display: none;
  //width: 50%;
  //padding-left: 60px;
  width: 55%;
  max-width: 950px;
  position: absolute;
  top: 50%;
  right: 55%;
  transform: translate(100%, -50%);

  @media (min-width: 768px) {
    display: flex;
  }

  .gatsby-image-wrapper {
    width: 100%;
    //max-height: 500px;

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
