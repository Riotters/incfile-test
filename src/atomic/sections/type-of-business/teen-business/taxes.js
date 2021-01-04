import React from "react";
import styled from "styled-components";
import Adventages from "../../../../components/adventages";
import { color } from "../../../../components/styles/colors";
import { shadow } from "../../../../components/styles/shadows";
import CurveSvg from "../../../../images/curve-babyblue-1.inline.svg";
import OvalSvgBottom from "../../../../images/ovals/top-left-transparent-orange.inline.svg";
import OvalSvg from "../../../../images/ovals/top-left-transparent-red3.inline.svg";
import { adventages2 } from "../../../../static/type-of-business/teen-business";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";

const Taxes = () => (
    <Wrapper>

        <Oval>
            <OvalSvg/>
        </Oval>
        <OvalBottom>
            <OvalSvgBottom/>
        </OvalBottom>

        <Service>
            <TextCenterLayout headlineWidth={770} textWidth={770} headline="Maintaining Your Teen Business"
                              text="If you’re an LLC, there are certain forms and legalities you need to follow to keep your teen business in good standing."/>
            <Container>
               <AdventagesBox>
                    <CurveWrapper>
                        <CurveSvg/>
                    </CurveWrapper>
                    {adventages2.items.map((item, i) => (
                        <Adventages key={i} className="containerMargin" style={{textAlign: "center"}} url={item.url} urlText={item.urlText}
                                    circleText={item.circleText} headline={item.headline} text={item.text}
                                    circlePosition="center" circleBackgroundColor={color.blue1}
                                    circleBackgroundShadow={shadow.blue1}/>
                    ))}
                </AdventagesBox>
            </Container>
        </Service>

    </Wrapper>
);

const Wrapper = styled.div`
    background: rgb(255,255,255);
    padding-bottom: 0px;
    padding-top: 100px;
    position: relative;
`;

const Service = styled.div`
  padding: 64px 0;
`;

const AdventagesBox = styled.div`
  display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 30px;
    margin-top: 76px;
    margin-bottom: 76px;; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const Oval = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
      
    @media (min-width: 570px){
       width: 570px;
    }
`;

const OvalBottom = styled.div`
    position: absolute;
    right: 0;
    bottom: 225px;
    transform: scaleX(-1);
    width: 100%;
      
    @media (min-width: 420px){
       width: 420px;
    }
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: -15px;
    top: -85px;
    
    
    @media (max-width: 970px) {
        display: none;
    }
`;

export default Taxes;
