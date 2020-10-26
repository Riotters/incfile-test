import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import Image from "../../../atoms/image/image";
import OvalSVG from "../../../../images/oval-yellow-3.inline.svg";
import CurveSVG from "../../../../images/yellow-curve.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Button from "../../../molecules/buttons/button";

const Rocket = () => (
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
        <Heading size={4} style={{ fontFamily: "MarkPro, sans-serif", fontSize: "40px" }}>
          Launch your business with Incfile
        </Heading>
        <Paragraph big mixed>
          No Contracts. No Surprise. <br />
          Only $0 + State Fee to Launch Your Business.
        </Paragraph>
        <Button theme="primary48" arrow width="max-content" content={{ url: "/form-order-now.php", text: "Start your Blockchain Business with us, today!" }} />
      </Content>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  padding-top: 160px;
  position: relative;
  min-height: 626px;
  margin-bottom: 50px;

  @media (min-width: 769px) {
    padding-top: 125px;
  }
`;

const RocketWrapper = styled.div`
  position absolute;
    left: -15%;
    top: calc(50% - 313px);
    width: 720px;
    height: 626px;
    display: none;
    
    @media (min-width: 1130px) {
        display: block;
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
  display: none;

  @media (min-width: 720px) {
    display: block;
  }
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

  @media (max-width: 1200px) {
    display: none;
  }
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
  margin: 0 auto;
  width: 100%;
  max-width: 600px;

  @media (min-width: 1130px) {
    margin: 0 0 0px auto;
  }
`;

export default Rocket;
