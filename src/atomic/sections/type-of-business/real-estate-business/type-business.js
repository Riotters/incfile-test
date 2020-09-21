import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {typeBusiness} from "../../../../static/type-of-business/gym-personal-training";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/oval-blue-3.inline.svg";
import OvalBottom from "../../../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import ContentCenter from "../../../partials/content-center";
import {Heading} from "../../../atoms/typography/heading";

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
                <TextCenterLayout headline="What Type of Fitness-Based Business Should You Start?"
                                  text="There are lots of different options for the type of fitness business you can start. We’ve provided several suggestions below."/>

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

            <ContentCenter contentWidth={770}>
                <Title>
                    <Heading size={3}>
                        Personal Training
                    </Heading>
                </Title>

                <Paragraph big>
                    If you don’t want the considerable expense of opening a gym, you might decide
                    to go down the personal trainer route. You have several good options:
                </Paragraph>

                <ListParagraph big mixed={true}>
                    <ul>
                        <li>Provide one-on-one training with individual clients to help them meet fitness goals</li>
                        <li>Instruct specialized classes like aerobics, Zumba, Pilates or spinning</li>
                        <li>Get the blood pumping with circuit training or high-intensity interval training</li>
                    </ul>
                </ListParagraph>

                <Paragraph big style={{paddingBottom: "48px"}}>
                    You’ll need the right skills and experience — and if you don’t want to go it alone, there are plenty of franchise opportunities available to personal trainers.
                </Paragraph>
            </ContentCenter>
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
    background-color: ${color.blue3}; 
    padding-top: 100px;
    position: relative;
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
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
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
