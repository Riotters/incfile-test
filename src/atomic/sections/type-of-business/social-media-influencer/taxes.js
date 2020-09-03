import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-babyblue2.inline.svg";
import OvalSvgBottom from "../../../../images/ovals/top-left-transparent-babyblue1.inline.svg";
import CurveSvg from "../../../../images/curve-babyblue-1.inline.svg";
import {adventages2} from "../../../../static/type-of-business/boutique-clothing-business";
import {Heading} from "../../../atoms/typography/heading";

const Taxes = () => (
    <BabyBlueContainer>

        <Oval>
            <OvalSvg/>
        </Oval>
        <OvalBottom>
            <OvalSvgBottom/>
        </OvalBottom>

        <Container>
            <TextWrapper>
                <Heading style={3} style={{fontSize: "40px"}}>Rules, Regulations and Taxes for Your Influencer Marketing Business</Heading>

                <Paragraph big mixed={true}>
                    Even though you’re running a virtual business, you can’t escape real-world licenses, permits and regulations. You will need to explore local, state and federal licenses and permits, and <span className="blue big">we can also help out with researching your business licensing needs.</span>
                </Paragraph>
            </TextWrapper>

            <TextCenterLayout headline="Taxes for a Moving Business"/>

            <TextWrapper>
                <Paragraph big mixed={true}>
                    <Curve color={color.babyblue1}
                           style={{position: "absolute", left: "-29px", top: "-25px", transform: "rotate(-90deg)"}}/>
                    Taxes are a fact of life if you’re in business, and there are various ways you will need to file and pay them. This can include self-employment tax, state income tax and federal income tax. You will also probably be liable for sales and use tax.
                </Paragraph>
                <Paragraph big mixed={true}>
                    As a rule of thumb, we recommend holding back around a third of your earnings to pay your taxes. We can also <span className="big blue">prepare and file your tax returns for you.</span>
                </Paragraph>
            </TextWrapper>
        </Container>

    </BabyBlueContainer>
);

const BabyBlueContainer = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(240,248,255,1) 100%);
    padding-bottom: 100px;
    padding-top: 100px;
    position: relative;
`;

const TextWrapper = styled.div`
    width: 100%;
    position: relative;
    
    @media (min-width: 750px) {
        width: 750px;
        margin: 48px auto 100px;
    }
`;

const Service = styled.div`
  padding: 64px 0;
`;

const AdventagesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 970px;
  padding: 140px 0;
  margin: 0 auto;
  position: relative;
`;

const Oval = styled.div`
    position: absolute;
    left: 0;
    top: 240px;
    width: 420px;
    transform: rotate(180deg);
    display: none;
    
    @media (min-width: 720px) {
        display: block;
    }
`;

const OvalBottom = styled.div`
    position: absolute;
    right: 0;
    top: 0px;
    width: 720px;
    transform: scaleX(-1);
    display: none;
    
    @media (min-width: 720px) {
        display: block;
    }
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: -115px;
    top: 24px;
    
    @media (max-width: 970px) {
        display: none;
    }
`;

export default Taxes;
