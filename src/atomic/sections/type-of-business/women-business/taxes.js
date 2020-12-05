import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import CurveSvg from "../../../../images/curve-babyblue-1.inline.svg";
import {adventages2} from "../../../../static/type-of-business/women-business";
import {gradient} from "../../../atoms/styles/colors";

const Taxes = () => (
    <Wrapper>

        <Oval>
            <OvalSvg/>
        </Oval>

        <Service>
            <TextCenterLayout headlineWidth={770} textWidth={770} headline="Maintaining Your Business"
                              text="There are certain forms and legalities you need to follow to keep your business in good standing."/>

            <Container>
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

    </Wrapper>
);

const Wrapper = styled.div`
    background: rgb(255,255,255);
    background-image: ${gradient.blue3};
    padding-bottom: 0px;
    padding-top: 100px;
    position: relative;
    overflow: hidden;
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
    row-gap: 20px;
    margin-top: 76px;
    margin-bottom: 76px; 
    
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
    top: 367;
    width: 100%;
    z-index: 1;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: -15px;
    top: -85px;
    
    svg{
        path{
            fill: #d2e0fe;
        }   
    }
    @media (max-width: 970px) {
        display: none;
    }
`;

export default Taxes;
