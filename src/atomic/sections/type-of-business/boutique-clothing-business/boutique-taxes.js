import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/top-right-transparent-babyblue1.inline.svg";
import OvalSvgBottom from "../../../../images/ovals/top-right-transparent-babyblue2.inline.svg";
import CurveSvg from "../../../../images/curve-babyblue-1.inline.svg";
import {adventages2} from "../../../../static/type-of-business/boutique-clothing-business";
import {Link} from "gatsby";

const BoutiqueTaxes = () => (
    <BabyBlueContainer>

        <Oval>
            <OvalSvg/>
        </Oval>
        <OvalBottom>
            <OvalSvgBottom/>
        </OvalBottom>

        <TextCenterLayout headline="Taxes for a Moving Business"/>

        <Container>
            <TextWrapper>
                <Paragraph big mixed={true}>
                    <Curve color={color.babyblue1}
                           style={{position: "absolute", left: "-29px", top: "-25px", transform: "rotate(-90deg)"}}/>
                    Taxes are a fact of life if you’re in business, and there are various ways you will need to file and
                    pay them. This can include self-employment tax, state income tax and federal income tax. You will
                    also probably be liable for sales and use tax.
                </Paragraph>
                <Paragraph big mixed={true}>
                    As a rule of thumb, we recommend holding back around a third of your earnings to pay your taxes. We
                    can also <Link to="/">prepare and file your tax returns for you.</Link>
                </Paragraph>
            </TextWrapper>
        </Container>

        <Service>
            <Container>

                <TextCenterLayout headline="Maintaining Your Boutique Clothing Business"
                                  text="There are certain forms and legalities you need to follow to keep your boutique clothing business in good standing."/>

                <AdventagesBox>
                    <CurveWrapper>
                        <CurveSvg/>
                    </CurveWrapper>
                    {adventages2.items.map(item => (
                        <Adventages style={{textAlign: "center"}} url={item.url} urlText={item.urlText}
                                    circleText={item.circleText} headline={item.headline} text={item.text}
                                    circlePosition="center" circleBackgroundColor={color.blue1}
                                    circleBackgroundShadow={shadow.blue1}/>
                    ))}
                </AdventagesBox>
            </Container>
        </Service>

    </BabyBlueContainer>
);

const BabyBlueContainer = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(240,248,255,1) 100%);
    padding-bottom: 100px;
    padding-top: 100px;
    position: relative;
    overflow: hidden;
`;

const TextWrapper = styled.div`
    width: 100%;
    max-width 750px;
    position: relative;
    
    @media (min-width: 750px) {
        margin: 48px auto 100px;
    }
`;

const Service = styled.div`
  position: relative;
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
    right: 0;
    top: 0;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

const OvalBottom = styled.div`
    position: absolute;
    right: 0;
    bottom: 300px;
    width: 100%;
    
    @media (min-width: 720px) {
        width: 720px;
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

export default BoutiqueTaxes;
