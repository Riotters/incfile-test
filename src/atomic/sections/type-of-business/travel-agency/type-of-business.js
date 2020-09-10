import React from "react";
import styled from "styled-components";
import {gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {adventages} from "../../../../static/type-of-business/travel-agency";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/top-right-transparent-green3.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import ContentCenter from "../../../partials/content-center";

const TypeOfBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg/>
        </Oval2>
        <Container>
            <Service>
                <TextCenterLayout headline="What Type of Daycare Should You Start?"
                                  text="There are several different types of daycare business that you can start. You will also want to decide if you want to be a work-from-home travel agent, or if you have other options for where to locate your business."/>

                <ContentCenter>
                    <Paragraph big>
                        Here are some of the most popular options:
                    </Paragraph>
                </ContentCenter>

                <AdventagesBox>
                    <CurveWrapper>
                        <Curve color={color.orange1}/>
                    </CurveWrapper>
                    {adventages.items.map(item => (
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
    background-image: ${gradient.green3}; 
    padding-top: 100px;
    position: relative;
`;

const Service = styled.div`
  padding: 64px 0;
`;

const AdventagesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 970px;
  margin: 140px auto 0;
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
    top: 353px;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    bottom: 51px;
    width: 100%;
    transform: rotate(180deg);
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

export default TypeOfBusiness;
