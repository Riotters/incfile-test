import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {typeBusiness} from "../../../../static/type-of-business/dog-walking";
import OvalSvg from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import {gradient} from "../../../atoms/styles/colors";

const TypeBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>

        <TextCenterLayout headlineWidth={770} textWidth={770}
                          headline="What Type of Dog Walking or Pet Sitting Business Should You Start?"
                          text="There are several different types of dog-related business you can start."/>

        <Container>
            <Service>
                <AdventagesBox>
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
                            className="containerMargin"
                        />
                    ))}
                </AdventagesBox>
            </Service>

        </Container>
    </Wrapper>
);

const Title = styled.div`
    display: block;
    width: 100%;
    
    h3{
        font-size: 40px;
        text-align: left;
    }
`;

const ListParagraph = styled(Paragraph)`
    ul{
        li{
            list-style-type: none;
            padding-bottom: 24px;
            
            &:before{
                content: "\u2022";
                color: ${color.blue1}; 
                display: inline-block; 
                padding-right: 15px;
                font-size: 12px;
            }
        }
    }
`;

const Wrapper = styled.div`
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
  max-width: 1000px;
  margin: 72px auto 0;
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
    top: 300px;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

export default TypeBusiness;
