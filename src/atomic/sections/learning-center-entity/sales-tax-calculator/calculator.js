import React from "react";
import styled from "styled-components";
import { color } from "../../../../components/styles/colors";
import { states } from "../../../../components/states";
import Dropdown from "../../../molecules/form/dropdown";
import ContentCenter from "../../../partials/content-center";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import Button from "../../../molecules/buttons/button";
import Curve from "../../../../images/green-curve.inline.svg";
import GreenOval from "../../../../images/oval-green-2.inline.svg";
import { Heading } from "../../../atoms/typography/heading";

const Calculator = styled.div`
  padding-bottom: 100px;
  padding-top: 100px;
  position: relative;
`;

const ImageBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 80px;
  padding-bottom: 48px;
  width: 100%;

  @media(min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 970px) {
    width: 970px;
    margin: 0 auto;
  }

  .box {
      padding: 16px 16px 56px;

    h4 {
        text-align: center;
        padding: 24px 0 0;
    }

    &--left {
        border-radius: 5px;

        @media (min-width: 769px) {
            border-radius: 50px 5px 5px 50px;
        }
        
    
        .top {
            border-radius: 5px;

            @media (min-width: 769px) {
                border-radius: 50px 5px 5px 5px;
            }
        }
    }

    &--right {
        border-radius: 5px;

        @media (min-width: 769px) {
            border-radius: 5px 50px 50px 5px;
        }
    
        .top {
            border-radius: 5px;

            @media (min-width: 769px) {
                border-radius: 5px 50px 5px 5px;
            }
        }
    }
  }

  .dropdown {
      max-width: 304px;
      margin: 0 auto;
`;

const GreenCurve = styled.div`
  position: absolute;
  right: -115px;
  bottom: -122px;
  width: 115px;
`;

const Oval = styled.div`
  position: absolute;
  right: 0;
  top: 220px;
`;

const dropdownOptions = states.state.map((state) => state.name);
const dropdownOptionsTwo = ["option 1", "option 2", "option 3"];

const CalculatorSection = ({ content }) => {
  const cards = content.cards;

  return (
    <Calculator>
      <Oval>
        <GreenOval />
      </Oval>
      <ContentCenter>
        <TextCenterLayout headline={content.header} headlineWidth="700" text={content.text} />
        <ImageBoxes>
          <TopImageBox className="box box--left" image="your-state" color={color.blue3}>
            <Heading size="4">{cards[0]}</Heading>
            <Dropdown className="dropdown" placeholder="select" options={dropdownOptions} />
          </TopImageBox>
          <TopImageBox className="box box--right" image="forming-a-corporation" color={color.orange3}>
            <Heading size="4">{cards[1]}</Heading>
            <Dropdown className="dropdown" placeholder="select" options={dropdownOptionsTwo} />
          </TopImageBox>
        </ImageBoxes>
        <Button content={content.button} theme="primary56" arrow />
      </ContentCenter>
    </Calculator>
  );
};

export default CalculatorSection;