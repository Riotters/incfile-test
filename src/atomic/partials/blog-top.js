import React from "react"
import styled from "styled-components"
import Image from "../../components/image_nobase64"
import Container from "../../atomic/container"
import { color } from "../../atomic/atoms/styles/colors"
import OvalSVG from "../../images/oval.inline.svg"
import Button from "../../components/button"
import VisibilitySensor from "../../components/VisibilitySensor"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 80px;
  height: 480px;
  position: relative;
  background-color: ${color.blue3};

  @media (min-width: 768px) {
    padding-top: 80px;
  }
`;

const Oval = styled.div`
  height: 90%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
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
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;

    path {
      transform: matrix(1, 0, 0, -1, -115, 777);
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    align-items: flex-start;
  }

  h1 {
    width: 100%;
    max-width: 520px;
    font-size: 40px;
    line-height: 48px;
    padding-bottom: 24px;

    @mnedia(min-width: 768px) {
      text-aling: left;
      padding-bottom: 20px;
    }
  }

  p {
    max-width: 470px;
  }
`

const ImageContainer = styled.div`
  display: none;
  justify-content: flex-end;
  height: 400px;
  width: 50%;
  padding-left: 60px;

  @media (min-width: 768px) {
    display: flex;
  }

  .gatsby-image-wrapper {
    width: 100%;
    max-width: 489px;

    img {
      object-fit: contain !important;
    }
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
  }

  a {
    @media (max-width: 576px) {
      margin-bottom: 15px;
      margin-left: 0;
    }
  }
`

const Top = ({headline, text, imageName, imageAlt}) => (
  <Wrapper>
    <VisibilitySensor partialVisibility once>
      {({ isVisible }) => (
        <Oval className={isVisible ? "scaleUp enter" : "scaleUp"}>
          <OvalSVG />
        </Oval>
      )}
    </VisibilitySensor>
    <Container>
      <Content>
        <VisibilitySensor partialVisibility once>
          {({ isVisible }) => (
            <TextContainer
              className={isVisible ? "slideRight enter" : "slideRight"}
            >
              <h1>
                {headline}
              </h1>
              <p>
                {text}
              </p>
            </TextContainer>
          )}
        </VisibilitySensor>
        <ImageContainer>
          <Image filename={imageName} alt={imageAlt} />
        </ImageContainer>
      </Content>
    </Container>
  </Wrapper>
)

export default Top