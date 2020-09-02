import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {typeBusiness} from "../../../../static/type-of-business/bed-and-breakfast";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/oval-blue-3.inline.svg";
import OvalBottom from "../../../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import {gradient} from "../../../atoms/styles/colors";

const TypeBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>

        <OvalBottomWrapper>
            <OvalBottom/>
        </OvalBottomWrapper>
        <Container>
            <Service>
                <TextCenterLayout headline="What Type of Bed and Breakfast Business Should You Start?"
                                  text="If you want to start a successful bed and breakfast business, it’s important to know what your options are. Here are some of the more popular business ideas:"/>

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
    background-image: ${gradient.blue3}; 
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
    top: 300px;
    
    svg {
        transform: scaleX(-1);
    }
`;

const OvalBottomWrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 15%; 
    width: 420px;
`;

export default TypeBusiness;
