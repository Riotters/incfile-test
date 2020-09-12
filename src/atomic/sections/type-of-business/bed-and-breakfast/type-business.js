import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {typeBusiness} from "../../../../static/type-of-business/bed-and-breakfast";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import OvalBottom from "../../../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import {gradient} from "../../../atoms/styles/colors";

const TypeBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>

        <OvalBottomWrapper>
            <OvalBottom/>
        </OvalBottomWrapper>

        <TextCenterLayout headlineWidth={770} textWidth={770} headline="What Type of Bed and Breakfast Business Should You Start?"
                          text="If you want to start a successful bed and breakfast business, it’s important to know what your options are. Here are some of the more popular business ideas:"/>

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
    background-image: ${gradient.blue3}; 
    padding-top: 100px;
    position: relative;
`;

const Service = styled.div`
  padding-top: 64px;
`;

const AdventagesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 970px;
  margin: 72px auto 0;
  position: relative;
 
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: -24px;
    top: 0px;
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 300px;
    width: 100%;
    
    svg {
        transform: scaleX(-1);
    }
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

const OvalBottomWrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 15%; 
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

export default TypeBusiness;
