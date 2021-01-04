import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {adventages} from "../../../../static/type-of-business/home-business";
import Curve from "../../../../images/curve-orange.inline.svg";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import OvalSvg2 from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import {gradient} from "../../../atoms/styles/colors";

const TypeOfBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <OvalBottom>
            <OvalSvg2/>
        </OvalBottom>

        <TextCenterLayout headlineWidth={770} textWidth={770} headline="What Type of Home-Based Business Should You Start?"
                          text="If you want to start a successful home-based business, it’s important to know what your options are. Here are some of the more popular home business ideas:"/>

        <Container>
            <Service>
                <AdventagesBox>
                    <CurveWrapper>
                        <Curve/>
                    </CurveWrapper>
                    {adventages.items.map(item => (
                        <Adventages
                            style={{textAlign: "left"}}
                            url={item.url}
                            urlText={item.urlText}
                            circleText={item.circleText}
                            headline={item.headline}
                            text={item.text}
                            circlePosition="center"
                            circleBackgroundColor={color.blue1}
                            circleBackgroundShadow={shadow.blue1}
                            imageName={item.imageName}
                            width="100%"
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
  padding: 64px 0 120px 0;
`;

const AdventagesBox = styled.div`
  display: grid;
  position: relative;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 20px;
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const CurveWrapper = styled.div`
    position: absolute;
    left: -70px;
    bottom: -70px;
    display: none;
    transform: rotate(-90deg);
    
    @media (min-width: 1200px){
       display: block;
    }
    
    svg{
        path{
            fill: #d2e0fe;
        }
    }
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 300px;
    width: 100%;
  
  @media (min-width: 570px) {
        width: 570px;
  }
`;

const OvalBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: 300px;
    width: 100%;
    transform: scaleY(-1);
    opacity: 0.5;
  
      @media (min-width: 570px) {
            width: 570px;
      }
`;

export default TypeOfBusiness;
