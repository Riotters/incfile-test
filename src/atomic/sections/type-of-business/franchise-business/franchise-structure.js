import React from "react";
import styled from "styled-components";
import TextCenterLayout from "../../../partials/heading-center";
import Container from "../../../container";
import Image from "../../../atoms/image/image";
import { Link } from "gatsby";
import Arrow from "../../../../images/arrow-circle.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import OvalSvg from "../../../../images/ovals/top-left-transparent-orange.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-pink.inline.svg";

const FranchiseStructure = () => (
  <Wrapper>
    <Oval>
      <OvalSvg />
    </Oval>

    <Oval2>
      <OvalSvg2 />
    </Oval2>

    <Oval3>
      <OvalSvg2 />
    </Oval3>
    <TextCenterLayout headline="Franchise Business Structure & Examples" text="Here are some of the biggest franchise businesses in the U.S. listed by category:" textWidth={770} headlineWidth={770} />

    <Container>
      <BoxWrapper>
        <Franchise to="">
          <TopContent width={51} height={45} className="topContent">
            <div>
              <Image filename="mcdonalds-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>McDonald's</Title>
              <Description>Fast Food Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={52} height={53} className="topContent">
            <div>
              <Image filename="kfc-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>KFC</Title>
              <Description>Chicken Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={53} height={54} className="topContent">
            <div>
              <Image filename="burgerking-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Burger King</Title>
              <Description>Fast Food Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={115} height={38} className="topContent">
            <div>
              <Image filename="subway-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Subway®</Title>
              <Description>Sandwich & Bagel Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={80} height={60} className="topContent">
            <div>
              <Image filename="7-eleven-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>7 Eleven</Title>
              <Description>Convenience Store Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={86} height={32} className="topContent">
            <div>
              <Image filename="hertz-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Hertz</Title>
              <Description>Car Rental & Dealer Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={61} height={64} className="topContent">
            <div>
              <Image filename="pizza-hut-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Pizza Hut</Title>
              <Description>Pizza Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={120} height={28} className="topContent">
            <div>
              <Image filename="marriott-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Marriott International</Title>
              <Description>Hotel Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={125} height={18} className="topContent">
            <div>
              <Image filename="wyndham-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Wyndham Hotels and Resorts</Title>
              <Description>Hotel Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={75} height={57} className="topContent">
            <div>
              <Image filename="hilton-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Hilton Hotels & Resorts</Title>
              <Description>Hotel Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={100} height={18} className="topContent">
            <div>
              <Image filename="remax-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>RE/MAX</Title>
              <Description>Real Estate Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={63} height={63} className="topContent">
            <div>
              <Image filename="dominos-pizza-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Domino's Pizza</Title>
              <Description>Pizza Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={87} height={32} className="topContent">
            <div>
              <Image filename="dunkin-donuts-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Dunkin' Donuts</Title>
              <Description>Bakery & Donut Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={63} height={39} className="topContent">
            <div>
              <Image filename="ace-hardware-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Ace Hardware Corporation</Title>
              <Description>Home Improvement Retail Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={97} height={32} className="topContent">
            <div>
              <Image filename="chemdry-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Chem-Dry Carpet Cleaning</Title>
              <Description>Carpet Cleaning Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={44} height={55} className="topContent">
            <div>
              <Image filename="taco-bell-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Taco Bell</Title>
              <Description>Fast Food Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={92} height={40} className="topContent">
            <div>
              <Image filename="papa-johns-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Papa John's</Title>
              <Description>Pizza Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={112} height={26} className="topContent">
            <div>
              <Image filename="anytime-fitness-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Anytime Fitness Inc.</Title>
              <Description>Gym Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={101} height={23} className="topContent">
            <div>
              <Image filename="jan-pro-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>JAN-PRO Cleaning Systems</Title>
              <Description>Commercial Cleaning Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={75} height={49} className="topContent">
            <div>
              <Image filename="dq-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Dairy Queen</Title>
              <Description>Fast Food Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={106} height={26} className="topContent">
            <div>
              <Image filename="choice-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Choice Hotels</Title>
              <Description>Hotel Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={88} height={57} className="topContent">
            <div>
              <Image filename="liberty-tax-service-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Liberty Tax Service</Title>
              <Description>Tax Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={101} height={29} className="topContent">
            <div>
              <Image filename="baskin-robbins-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Baskin-Robbins</Title>
              <Description>Ice Cream Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={75} height={58} className="topContent">
            <div>
              <Image filename="little-caesars-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>Little Caesars</Title>
              <Description>Pizza Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>

        <Franchise to="">
          <TopContent width={113} height={26} className="topContent">
            <div>
              <Image filename="novus-logo" />
            </div>
          </TopContent>
          <BottomContent>
            <Content>
              <Title>NOVUS Glass</Title>
              <Description>Auto Glass Franchises</Description>
            </Content>
            <Icon>
              <Arrow />
            </Icon>
          </BottomContent>
        </Franchise>
      </BoxWrapper>
    </Container>
  </Wrapper>
);

const Oval = styled.div`
  position: absolute;
  top: 147px;
  right: 0;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  top: 1023px;
  left: 0;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval3 = styled.div`
  position: absolute;
  bottom: 670px;
  right: 0;
  transform: rotate(180deg);
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Wrapper = styled.section`
  background-image: ${gradient.orange3};
  padding-top: 104px;
  position: relative;
`;

const BoxWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 72px;
    margin-top: 76px;
    margin-bottom: 76px;; 
    
    @media (min-width: 390px){
        grid-template-columns: 370px;
    }
    
    @media (min-width: 768px){
        grid-template-columns: 370px 370px;
    }
    
    @media (min-width: 1200px){
        grid-template-columns: 370px 370px 370px;
    }
`;

const Franchise = styled(Link)`
  display: block;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
  background-color: #ffffff;
  margin-bottom: 0px;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 40px 80px 0 rgba(171, 171, 171, 0.5);

    .topContent {
      opacity: 1;
      filter: grayscale(0%);
    }
  }
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  filter: grayscale(100%);
  opacity: 0.3;
  transition: all 0.5s ease-in-out;

  > div {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
  }
`;

const BottomContent = styled.div`
  margin: 0 24px;
  border-top: 1px solid rgba(171, 171, 171, 0.5);
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div``;

const Title = styled.div`
  font-weight: bold;
  font-family: "Avenir", sans-serif;
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  color: #1d1d1d;
`;

const Description = styled.div`
  font-family: "Avenir", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`;

const Icon = styled.div`
  transform: rotate(90deg);
`;

export default FranchiseStructure;
