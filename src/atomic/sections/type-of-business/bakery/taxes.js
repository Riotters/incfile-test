import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color, gradient} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import OvalSvgBottom from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import CurveSvg from "../../../../images/curve-babyblue-1.inline.svg";
import {adventages2} from "../../../../static/type-of-business/bakery";
import Curve2SVG from "../../../../images/curves/top-left-bottom-right-big.inline.svg";
import Curve from "../../../atoms/icons/curve";

const Taxes = () => (
    <Wrapper>

        <OvalBottom>
            <OvalSvgBottom/>
        </OvalBottom>

        <Service>
            <TextCenterLayout headlineWidth={770} textWidth={770} headline="Maintaining Your Party Planning Business"
                              text="There are certain forms and legalities you need to follow to keep your event planning business in good standing."/>

            <Container>
                <AdventagesBox>
                    <Curve top="-100" right="80" color={color.blue2}>
                        <CurveSvg/>
                    </Curve>
                    {adventages2.items.map(item => (
                        <Adventages className="containerMargin" style={{textAlign: "center"}} url={item.url} urlText={item.urlText}
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
    margin-bottom: 76px;; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const OvalBottom = styled.div`
    position: absolute;
    right: 0;
    top: 210px;
    width: 100%;
    
    @media (min-width: 720px) {
        width: 720px;
    }
`;

export default Taxes;
