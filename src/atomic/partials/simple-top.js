import React from "react";
import styled from "styled-components";
import ContentCenter from "../partials/content-center";
import { color } from "../../atomic/atoms/styles/colors";
import OvalSVG from "../../images/icons/oval-blue-mini.inline.svg";
import VisibilitySensor from "../../components/VisibilitySensor";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 80px;
  height: 440px;
  position: relative;
  overflow: hidden;
`;

const Gradient = styled.div`
  width: 100%;
  max-width: 653px;
  height: 252px;
  opacity: 0.4;
  background-image: radial-gradient(circle, #cffffa, #ffffff);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Oval = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  z-index: 1;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h1,
  p {
    text-align: center;
    max-width: 700px;
  }

  h1 {
    padding-bottom: 24px;

    @media (min-width: 769px) {
      padding-bottom: 20px;
    }
  }
`;

const Top = ({ headline, text }) => (
  <Wrapper>
    <VisibilitySensor partialVisibility once>
      {({ isVisible }) => (
        <Oval className={isVisible ? "scaleUp enter" : "scaleUp"}>
          <OvalSVG />
        </Oval>
      )}
    </VisibilitySensor>
    <Gradient />
    <ContentCenter>
      <VisibilitySensor partialVisibility once>
        {({ isVisible }) => (
          <TextContainer className={isVisible ? "slideRight enter" : "slideRight"}>
            <h1>{headline}</h1>
            <p>{text}</p>
          </TextContainer>
        )}
      </VisibilitySensor>
    </ContentCenter>
  </Wrapper>
);

export default Top;
