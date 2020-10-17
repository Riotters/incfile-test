import React, { useState, useRef } from "react";
import styled from "styled-components";
import parser from "html-react-parser";
import { color } from "../../../../components/styles/colors";
import { states } from "../../../../components/states";
import Dropdown from "../../../molecules/form/dropdown";
import ContentCenter from "../../../partials/content-center";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import Button from "../../../molecules/buttons/button";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import InputField from "../../../molecules/form/input-field";
import { Paragraph } from "../../../atoms/typography/paragraph";

const Calculator = styled.div`
  background-color: ${color.blue3};
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

const dropdownOptions = states.state.map((state) => state.name);

const CalculatorSection = ({ content, onSelectState, state }) => {
  const cards = content.cards;
  const inputRevenue = useRef(0);
  const [selectedState, setSelectedState] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [finalCalculator, setFinalCalculator] = useState(0);

  const handleOnChangeState = (option) => {
    setSelectedState(option.value);
    onSelectState(option.value);
  }

  const calculatorTaxAmount = (e, stateTaxRate) => {
    e.preventDefault();
    if (!stateTaxRate) {
      return;
    }

    let revenvue = inputRevenue.current.value;
    let taxAmount = (revenvue * stateTaxRate) / 100;

    setShowResult(true);
    setFinalCalculator('$' + formatMoney(taxAmount));
  };

  const formatMoney = (n, c, d, t) => {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
      j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  };

  return (
    <Calculator>
      <Oval height="570" width="570" top="0" left="0">
        <OvalSVG />
      </Oval>
      <ContentCenter>
        <TextCenterLayout headline={content.header} headlineWidth="700" text={content.text} />
        <ImageBoxes>
          <TopImageBox className="box box--left" image="your-state" color={color.blue3}>
            <Heading size="4">{cards[0]}</Heading>
            <Dropdown className="dropdown" placeholder="select" onChange={handleOnChangeState} options={dropdownOptions} />
          </TopImageBox>
          <TopImageBox className="box box--right" image="forming-a-corporation" color={color.orange3}>
            <Heading size="4">{cards[1]}</Heading>
            <InputField className="dropdown" placeholder="Enter total revenue from sales" type="number" inputRef={inputRevenue} />
          </TopImageBox>
        </ImageBoxes>
        <Button content={content.button} theme="primary56" margin="0 0 32px 0"arrow onClick={(e) => calculatorTaxAmount(e, state.tax_rate)} />
        
        {Object.entries(state).length !== 0 && (
          <Paragraph big mixed={true}>
            {parser(`The state sales tax rate in <b>${state.long_name}</b> is <b>${state.tax_rate}</b>%`)}
          </Paragraph>
        )}

        {showResult && (
          <Paragraph big mixed={true}>
            {parser(`${inputRevenue.current.value} X ${state.tax_rate}% Tax = ${finalCalculator} Total`)}
          </Paragraph>
        )}

      </ContentCenter>
    </Calculator>
  );
};

export default CalculatorSection;
