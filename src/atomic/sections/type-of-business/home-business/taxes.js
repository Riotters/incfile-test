import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import {adventages2} from "../../../../static/type-of-business/home-business";
import Curve from "../../../atoms/shapes/curve";

const Taxes = () => (
    <Wrapper>

        <Oval>
            <OvalSvg/>
        </Oval>

        <Service>
            <TextCenterLayout headlineWidth={770} textWidth={770} headline="Maintaining Your Home-Based Business"
                              text="There are certain forms and legalities you need to follow to keep your home-based business in good standing."/>

            <Container>
                <AdventagesBox>
                    <CurveWrapper>
                        <Curve color={color.yellow1}/>
                    </CurveWrapper>
                    {adventages2.items.map((item, i) => (
                        <Adventages key={i} style={{textAlign: "center"}} url={item.url} urlText={item.urlText}
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
    top: -100px;
    width: 100%;
  
    @media (min-width: 720px) {
        width: 720px;
    }
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: 85px;
    top: -25px;
    
    @media (max-width: 1200px) {
        display: none;
    }
`;

export default Taxes;
