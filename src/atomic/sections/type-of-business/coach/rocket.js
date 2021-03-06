import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import Image from "../../../atoms/image/image";
import OvalSVG from "../../../../images/oval-yellow-3.inline.svg";
import CurveSVG from "../../../../images/yellow-curve.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Button from "../../../molecules/buttons/button";

const Conclusion = () => (
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
        <Image filename="lunching-rocket-6969" alt="launch your business with incfile" />
      </RocketWrapper>
      <Content>
        <Heading size={4} style={{ fontFamily: "MarkPro-Bold, sans-serif", fontSize: "40px" }}>
          Conclusion
        </Heading>
        <Paragraph big>Helping other people make positive changes in their life or business is an amazing service. If you can find a great niche, understand your competitors and put together a solid business plan, you will have every chance for success.</Paragraph>
        <Button theme="primary56" arrow>
          Start your Coach Business with us, today
        </Button>
      </Content>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  padding-top: 75px;
  position: relative;
  min-height: 626px;
  margin-bottom: 50px;

  @media (min-width: 769px) {
    padding-top: 125px;
  }
`;

const RocketWrapper = styled.div`
  display: none;
  width: 50%;
  max-width: 755px;
  position: absolute;
  top: 50%;
  left: -150px;
  transform: translateY(-50%);
  z-index: -1;

  @media (min-width: 769px) {
    display: flex;
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
`;

const Curve = styled.div`
  height: 97px;
  width: 81px;
  position: absolute;
  right: 0;
  bottom: 150px;
`;

const Moon = styled.div`
  display: none;
  height: 130px;
  width: 81px;
  position: absolute;
  top: 190px;
  right: 190px;

  @media (min-width: 769px) {
    display: block;
  }
`;

const Content = styled.div`
  width: 100%;

  @media (min-width: 600px) {
    width: 600px;
    margin-left: 40%;
  }
`;

export default Conclusion;
