import React, { useState, useRef } from "react";
import styled from "styled-components";
import parser from "html-react-parser";
import { color } from "../../../../components/styles/colors";
import { states } from "../../../../components/states";
import Dropdown from "../../../molecules/form/dropdown";
import ContentCenter from "../../../partials/content-center";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import Button from "../../../molecules/buttons/button";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import InputField from "../../../molecules/form/input-field";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";
import PlusSVG from "../../../../images/icons/plus.inline.svg";
import Whitebox from "../../../atoms/boxes/white-box";
import Circle from "../../../atoms/icons/circle";
import { shadow } from "../../../atoms/styles/shadows";
import AssetsSVG from "../../../../images/icons/assets-flag.inline.svg"
import RevenueSVG from "../../../../images/icons/revenue.inline.svg"
import { Link } from "gatsby";

const Calculator = styled.div`
  background-color: ${color.blue3};
  padding-bottom: 50px;
  padding-top: 100px;
  position: relative;
  
  @media (min-width: 576px) {
    padding-bottom: 100px;
  }
  
  .calculator-main {
    padding: 88px 40px 48px;
    max-width: 630px;
    text-align: center;
    
    margin-bottom: 48px;
  }
`;

const ImageBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 80px;
  padding-bottom: 48px;
  width: 100%;

  @media (min-width: 769px) {
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
          border-radius: 35px 5px 5px 5px;
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
          border-radius: 5px 35px 5px 5px;
        }
      }
    }
  }

  .dropdown {
    max-width: 304px;
    margin: 0 auto;
  }
`;

const Boxes = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 10px;
  width: 100%;
  position: relative;
  margin-bottom: 32px;
  
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CircleWhite = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  background-color: ${color.white};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  z-index: 1;
  pointer-events: none;

  @media (min-width: 576px) {
    display: flex;
  }

  &::before {
    content: "";
    height: 48px;
    width: 48px;
    background-color: ${color.orange1};
    border-radius: 50%;
    position: absolute;
    z-index: -1;
  }
`;

const BlueBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 153px;
  border-radius: 24px;
  background-color: ${color.green3};
  padding: 64px 13px 24px;
  position: relative;
  
  @media (min-width: 576px) {
    border-radius: 24px 0 0 24px;
  }
  
  .dropdown-state {
    max-width: 60%;
  }
`;

const YellowBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 153px;
  border-radius: 24px;
  background-color: ${color.blue3};
  padding: 64px 13px 24px;
  position: relative;
  
  @media (min-width: 576px) {
    border-radius: 0 24px 24px 0;
  }
  
  .revenue {
    max-width: 60%;
    width: 60%;
  }
`;

const AbsoluteCircle = styled.div`
  position: absolute;
  top: -40px;
  left: ${(props) => props.paddingLeft};
  border-radius: 50%;
  box-shadow: ${(props) => (props.imageShadowColor ? props.imageShadowColor : "")};
`;

const dropdownOptions = states.state.map((state) => state.name);

const CalculatorSection = ({ content, onSelectState, state, id }) => {
  const cards = content.cards;
  const inputRevenue = useRef(0);
  const [selectedState, setSelectedState] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [finalCalculator, setFinalCalculator] = useState(0);
  const [error, setError] = useState(false);

  const handleOnChangeState = (option) => {
    setSelectedState(option.value);
    onSelectState(option.value);
  };

  const calculatorTaxAmount = (e, stateTaxRate) => {
    e.preventDefault();
    if(showResult && finalCalculator !== "") {
      setShowResult(false);
      setFinalCalculator(0);
      setSelectedState("");
      return;
    }

    if (!stateTaxRate) {
      setShowResult(true);
      setError("Choose state first");
      return;
    }

    if(error) setError(false);
    let revenue = inputRevenue.current.value;

    if(error && (revenue == null || revenue === 0)) {
      setError("Fill out your revenue");
      return;
    }
    else {
      setError(false);
    }

    let taxAmount = (revenue * stateTaxRate) / 100;

    setShowResult(true);
    setFinalCalculator("$" + formatMoney(taxAmount));
  };

  const formatMoney = (n, c, d, t) => {
    var c = isNaN((c = Math.abs(c))) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
      j = (j = i.length) > 3 ? j % 3 : 0;

    return (
      s +
      (j ? i.substr(0, j) + t : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
      (c
        ? d +
          Math.abs(n - i)
            .toFixed(c)
            .slice(2)
        : "")
    );
  };

  return (
    <Calculator id={id}>
      <Oval height="570" width="570" top="0" left="0">
        <OvalSVG />
      </Oval>
      <ContentCenter>
        <TextCenterLayout headline={content.header} headlineWidth="700" text={content.text} />
        {showResult && !error && (
            <>
              <Whitebox className="calculator-main">
                <Boxes>
                  <BlueBox className="box box--left">
                    <AbsoluteCircle imageShadowColor={shadow.green2}>
                      <Circle circleColor={color.green3} padding={0} height={80} width={80}>
                        <AssetsSVG />
                      </Circle>
                    </AbsoluteCircle>
                    <Heading size={4} bottomMargin={0}>{state.tax_rate}%</Heading>
                    <Paragraph mixed>{state.long_name} state tax</Paragraph>
                  </BlueBox>
                  <CircleWhite>
                    <PlusSVG />
                  </CircleWhite>
                  <YellowBox className="box box--right">
                    <AbsoluteCircle imageShadowColor={shadow.babyblue2}>
                      <Circle circleColor={color.blue3} padding={0} height={80} width={80}>
                        <RevenueSVG />
                      </Circle>
                    </AbsoluteCircle>
                    <Heading size={4} bottomMargin={0}>${typeof inputRevenue.current !== "undefined" && (
                        formatMoney(inputRevenue.current.value)
                    )}</Heading>
                    <Paragraph>Your revenue</Paragraph>
                  </YellowBox>
                </Boxes>
                <Heading size={5} bottomMargin={24}>Your total tax amount</Heading>
                <Heading size={2} bottomMargin={24}>{finalCalculator}</Heading>
                <Paragraph>Additional municipality taxes may apply</Paragraph>
              </Whitebox>

              <Paragraph mixed>Visit <Link to={state?.state_site ?? "/"}>{state.long_name} Secretary of State</Link> for more information.</Paragraph>
            </>
        )}
        {(!showResult || error) && (
            <ImageBoxes>
              <TopImageBox className="box box--left" image="your-state" color={color.blue3}>
                <Heading size={4}>{cards[0]}</Heading>
                <Dropdown className="dropdown" placeholder="select" onChange={handleOnChangeState} options={dropdownOptions} />
              </TopImageBox>
              <TopImageBox className="box box--right" image="forming-a-corporation" color={color.orange3}>
                <Heading size={4}>{cards[1]}</Heading>
                <InputField className="dropdown" placeholder="Enter total revenue from sales" type="number" inputRef={inputRevenue} />
              </TopImageBox>
            </ImageBoxes>
        )}
        <Button content={content.button} theme="primary56" margin="0 0 32px 0" arrow onClick={(e) => calculatorTaxAmount(e, state.tax_rate)} />
        {showResult && error && (
            <Paragraph big mixed={true} bottomMargin={0}>
              {parser(error)}
            </Paragraph>
        )}
      </ContentCenter>
    </Calculator>
  );
};

export default CalculatorSection;
