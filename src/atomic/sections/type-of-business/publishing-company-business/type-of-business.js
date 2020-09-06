import React from "react";
import styled from "styled-components";
import {gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {adventages} from "../../../../static/type-of-business/publishing-company-business";
import OvalSvg from "../../../../images/ovals/top-left-transparent-orange.inline.svg";
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
                        Here are some of the more popular options:
                    </Paragraph>
                </ContentCenter>

                <AdventagesBox>
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
    background-image: ${gradient.orange3}; 
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
    top: 312px;
    width: 720px;
    transform: scaleX(-1);
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    bottom: 400px;
    width: 570px;
    transform: scaleY(-1);
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

export default TypeOfBusiness;
