import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import OvalSvgBottom from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import CurveSvg from "../../../../images/curve-babyblue-1.inline.svg";
import {adventages2} from "../../../../static/type-of-business/publishing-company-business";

const Taxes = () => (
    <Wrapper>

        <OvalBottom>
            <OvalSvgBottom/>
        </OvalBottom>

        <Service>
            <TextCenterLayout textWidth={770} headlineWidth={770} headline="Maintaining Your Publishing Company"
                              text="There are certain forms and legalities you need to follow to keep your construction business in good standing."/>

            <Container>

                 <AdventagesBox>
                    <CurveWrapper>
                        <CurveSvg/>
                    </CurveWrapper>
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
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1000px;
  padding: 40px 0;
  margin: 0 auto;
  position: relative;
  
  @media (min-width: 1024px) {
    padding: 140px 0 0;
  }
`;

const OvalBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: 300px;
    opacity: 0.5;
    width: 100%;
    
    svg {
        transform: scaleY(-1);
    }
    
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
    
    svg{
        path{
            fill: #d2e0fe;
        }
    }
`;

export default Taxes;
