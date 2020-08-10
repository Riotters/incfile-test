import React from "react"
import styled from "styled-components"
import Image from "../../components/image_nobase64"
import Container from "../../atomic/container"
import { color } from "../../atomic/atoms/styles/colors"
import OvalSVG from "../../images/icons/oval-blue-mini.inline.svg"
import Oval2SVG from "../../images/icons/oval-blue-small.inline.svg"
import Oval3SVG from "../../images/icons/oval-blue-medium.inline.svg"
import VisibilitySensor from "../../components/VisibilitySensor"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 80px;
  height: 480px;
  position: relative;
  background-color: ${color.blue3};
  overflow: hidden;

  @media (min-width: 769px) {
    padding-top: 80px;
  }
`;

const Oval = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  z-index: 1;
`

const Oval2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Oval3 = styled.div`
  position: absolute;
  bottom: -7px;
  right: 45%;
  max-height: 381px;
  max-width: 570px;
  overflow: hidden;
  transform: translateX(100%);

  svg {
    height: 100%;
    width: 100%;
  }
`;

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

  @media (min-width: 769px) {
    width: 50%;
    align-items: flex-start;
  }

  h1 {
    width: 100%;
    max-width: 520px;
    font-size: 40px;
    line-height: 48px;
    padding-bottom: 24px;

    @mnedia(min-width: 769px) {
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

  @media (min-width: 769px) {
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
    <Oval2>
      <Oval2SVG />
    </Oval2>
    <Oval3>
      <Oval3SVG />
    </Oval3>
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