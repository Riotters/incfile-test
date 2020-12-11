import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import Image from "../../../atoms/image/image";
import OvalSVG from "../../../../images/oval-yellow-3.inline.svg";
import CurveSVG from "../../../../images/yellow-curve.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Button from "../../../molecules/buttons/button";

const Rocket = ({ content }) => (
  <Wrapper>
    <Oval>
      <OvalSVG />
    </Oval>
    <Curve>
      <CurveSVG />
    </Curve>
    <Moon>
      <Image filename="moon" alt="moon" />
    </Moon>
    <Container>
      <RocketWrapper>
        <Image filename="rocket-2x" alt="rocket lunch" />
      </RocketWrapper>
      <Content>
        <Heading size={2}>{content.header}{" "}<br />{content.header2}</Heading>
        <Paragraph bottomMargin="0">{content.text}</Paragraph>
        <Paragraph>{content.text2}</Paragraph>
        <Button content={content.button} theme="primary48" margin="0 auto 0 0" arrow />
      </Content>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  min-height: 775px;
  margin-bottom: -120px;
  
  @media (min-width: 576px) {
    margin-bottom: 50px;
  }
  
  display: flex;
  align-items: center;
`;

const RocketWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 755px;
  top: 20%;
  left: 90%;
  position: absolute;
  
  transform: translate(-100%, -50%);
  z-index: 0;

  @media (min-width: 769px) {
    display: flex;
    top: 50%;
    left: 40%;
  }
  
  &::after {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      object-fit: contain !important;
    }
  }
`;

const Oval = styled.div`
  height: 100%;
  width: 100%;
  max-height: 460px;
  max-width: 370px;
  position: absolute;
  right: 0;
  bottom: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 20%);
  }
  
  @media (max-width: 768px) {
    bottom: unset;
    top: 20%;
  }
`;

const Curve = styled.div`
  height: 97px;
  width: 81px;
  position: absolute;
  right: 0;
  bottom: 150px;
`;

const Moon = styled.div`
  display: block;
  height: 130px;
  width: 81px;
  position: absolute;
  top: 0;
  left: 30px;

  @media (min-width: 769px) {
    display: block;
    top: 190px;
    right: 190px;
    left: unset;
  }
  
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  margin-top: 300px;

  @media (min-width: 769px) {
    width: 100%;
    max-width: 670px;
    margin-top: 0;
  }

  h2 {
    text-align: left;
  }
`;

export default Rocket;
