import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Card from "../../molecules/mixed-blocks/top-image-box";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/bottom-left-top-right-big.inline.svg";
import Whitebox from "../../atoms/boxes/white-box";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import AmountSlider from "../../../components/amount-slider/amount-slider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 970px;
  padding: 64px 0;
  margin: 0 auto;
  position: relative;

  @media (min-width: 769px) {
    padding: 80px 0;
  }
`;

const SlidersCard = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 30px;

    @media (min-width: 769px) {
        grid-template-columns: repeat(2, 1fr);
    }

    & > div {
        padding: 64px 56px;
    }

    h4 {
        text-align: center;
    }
`;

const TableCard = styled.div`
    display: grid;
    grid-template-columns: 100%;

    @media (min-width: 769px) {
        grid-template-columns: 1fr 234px;
    }
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 30px 40px;
        
        &:last-child {
            @media (min-width: 769px) {
                align-items: center;
                border-left: 1px solid ${color.grey4};
            }

            p {
                text-align: center;

                @media (min-width: 769px) {
                    text-align: left;
                }
            }
        }
    
        & > span {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px 26px;
            background-color: ${color.green3};
            border-radius: 24px;
            margin-bottom: 4px;
        }

        p {
            span {
                color: ${color.orange1};
            }
        }
    }
`;

// const TaxesCard = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 234px;
// `;

// const SavingsCard = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 234px;
// `;

const Cards = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <Whitebox bottomMargin="8px">
            <SlidersCard>
                <div>
                    <Heading size="4" bottomMargin="32">What’s your estimated yearly net income for the business?</Heading>
                    <AmountSlider initValue={72000} maxValue={100000} step={500} description="Estimated yearly income" onChange={() => {}}/>
                </div>
                <div>
                    <Heading size="4" bottomMargin="32">What is the salary you would pay yourself as S Corporation?</Heading>
                    <AmountSlider initValue={29500} maxValue={72000} step={500} description="Estimated yearly income" onChange={() => {}}/>
                </div>
            </SlidersCard>
        </Whitebox>
        <Whitebox bottomMargin="8px">
            <TableCard>
                <div>
                    <Heading size="4" bottomMargin="8">As a sole proprietor</Heading>
                    <Paragraph mixed bottomMargin="0">Self Employment Taxes paid <span>$75,000</span> as a Sole Proprietor</Paragraph>
                </div>
                <div>
                    <span>$11,475</span>
                    <Paragraph bottomMargin="0">Taxes paid</Paragraph>
                </div>
            </TableCard>
        </Whitebox>
        <Whitebox bottomMargin="8px">
            <TableCard>
                <div>
                    <Heading size="4" bottomMargin="8">As a Corporation</Heading>
                    <Paragraph mixed bottomMargin="0">with a salary of <span>$29,500</span> and a dividend of <span>$45,500</span></Paragraph>
                </div>
                <div>
                    <span>$4,514</span>
                    <Paragraph bottomMargin="0">Taxes paid</Paragraph>
                </div>
            </TableCard>
        </Whitebox>
        <Whitebox bottomMargin="8px">
            <TableCard>
                <div>
                    <Heading size="3" bottomMargin="0">Total Savings</Heading>
                </div>
                <div>
                    <span>$6,962</span>
                </div>
            </TableCard>
        </Whitebox>
    </Wrapper>
  );
};

export default Cards;
