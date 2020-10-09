import React from "react";
import styled from "styled-components";
import {gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {typeBusiness} from "../../../../static/type-of-business/consulting-business";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import CurveFile from "../../../../images/curves/bottom-left-top-right-reverse-big.inline.svg";

const TypeBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg2/>
        </Oval2>

        <AbsoluteCurve>
            <CurveFile />
        </AbsoluteCurve>

        <TextCenterLayout headline="Types of Consulting Business"
                          text="Consulting is the practice of giving expert advice to others, normally in business, financial or technical areas. Clearly that’s a broad definition, so let’s narrow it down a little. Common types of consulting include:"/>

        <Container>
            <Service>
                <AdventagesBox>
                    <CurveWrapper>
                        <Curve color={color.orange1}/>
                    </CurveWrapper>
                    {typeBusiness.items.map(item => (
                        <Adventages
                            style={{textAlign: "center"}}
                            url={item.url}
                            urlText={item.urlText}
                            circleText={item.circleText}
                            headline={item.headline}
                            text={item.text}
                            circlePosition="center"
                            circleBackgroundColor={color.blue1}
                            circleBackgroundShadow={shadow.blue1}
                            imageName={item.imageName}
                        />
                    ))}
                </AdventagesBox>
            </Service>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    background: rgba(255,255,255,1);
    background-image: ${gradient.blue3}; 
    padding-top: 100px;
    position: relative;
`;

const Service = styled.div`
    padding: 0px 0px 64px 0
`;

const AdventagesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 970px;
  margin: 128px auto 0;
  position: relative;
 
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: -24px;
    top: 0px;
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 287px;
    width: 100%;
    
    @media (min-width: 720px) {
        width: 720px;
    }
`;

const Oval2 = styled.div`
    position: absolute; 
    left: 0;
    top: calc(50% - 210px);
    width: 100%;
    
    @media (min-width: 420px) {
        width: 420px;
    }
`;

const AbsoluteCurve = styled.div`
    bottom: 197px;
    right: 250px;
    position: absolute;
    
    svg{
        path{
            fill: #d2e0fe;
        }
    }
`;

export default TypeBusiness;
