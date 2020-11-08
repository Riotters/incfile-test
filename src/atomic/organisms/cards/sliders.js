import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Whitebox from "../../atoms/boxes/white-box";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import AmountSlider from "../../../components/amount-slider/amount-slider";
import { formatMoney } from "../../../helpers/utils";


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

const Cards = ({ className, content }) => {
    const [amountIncome, setAmountIncome] = React.useState(0);
    const [maxValueSlideRight, setMaxValueSlideRight] = React.useState(0);
    const [incomeTaxPaid, setIncomeTaxPaid] = React.useState(0);

    const [dividend, setDividend] = React.useState(0);
    const [salaryRepeated, setSalaryRepeated] = React.useState(0);
    const [scorpTaxes, setScorpTaxes] = React.useState(0);

    const [totalSaving, setTotalSaving] = React.useState(0);

    const handleCalculator = (field, value) => {
        if (field === 'slideIncome') {
            setAmountIncome(value);
            setDividend(value);
            setMaxValueSlideRight(value);

            if (value == 0 || value < salaryRepeated) {
                setSalaryRepeated(0);
                setScorpTaxes(0);
            }

            let medicareTax = value * .029;
            let ssTax = (value < 94200) ? (value * .124) : 11680.80;
            let totalIncomeTaxes = medicareTax + ssTax;
            setIncomeTaxPaid(totalIncomeTaxes);

            // Total Savings
            setTotalSaving(totalIncomeTaxes - scorpTaxes);
        } else if (field === 'slideSalary') {
            setSalaryRepeated(value);
            setDividend(amountIncome - value);

            // Calculator the s corporation taxes
            let scorpMedicareTax = value * .029;
            let scorpSsTax = value < 94200 ? (value * .124) : 11680.80;
            let totalScorpTaxes = scorpSsTax + scorpMedicareTax;
            setScorpTaxes(totalScorpTaxes);
            
            // Total Savings
            setTotalSaving(incomeTaxPaid - totalScorpTaxes);
        }
    }

    return (
        <Wrapper className={className}>
            <Whitebox bottomMargin="8px">
                <SlidersCard>
                    <div>
                        <Heading size="4" bottomMargin="32">What’s your estimated yearly net income for the business?</Heading>
                        <AmountSlider initValue={0} maxValue={100000} step={500} description="Estimated yearly income" field="slideIncome" onChange={handleCalculator} />
                    </div>
                    <div>
                        <Heading size="4" bottomMargin="32">What is the salary you would pay yourself as S Corporation?</Heading>
                        <AmountSlider initValue={salaryRepeated} maxValue={maxValueSlideRight} step={500} description="The salary would pay yourself" field="slideSalary" onChange={handleCalculator} />
                    </div>
                </SlidersCard>
            </Whitebox>
            <Whitebox bottomMargin="8px">
                <TableCard>
                    <div>
                        <Heading size="4" bottomMargin="8">As a sole proprietor</Heading>
                        <Paragraph mixed bottomMargin="0">Self Employment Taxes paid <span>{formatMoney(amountIncome)}</span> as a Sole Proprietor</Paragraph>
                    </div>
                    <div>
                        <span>{formatMoney(incomeTaxPaid)}</span>
                        <Paragraph bottomMargin="0">Taxes paid</Paragraph>
                    </div>
                </TableCard>
            </Whitebox>
            <Whitebox bottomMargin="8px">
                <TableCard>
                    <div>
                        <Heading size="4" bottomMargin="8">As a Corporation</Heading>
                        <Paragraph mixed bottomMargin="0">with a salary of <span>{formatMoney(salaryRepeated)}</span> and a dividend of <span>{formatMoney(dividend)}</span></Paragraph>
                    </div>
                    <div>
                        <span>{formatMoney(scorpTaxes)}</span>
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
                        <span>{formatMoney(totalSaving)}</span>
                    </div>
                </TableCard>
            </Whitebox>
        </Wrapper>
    );
};

export default Cards;
