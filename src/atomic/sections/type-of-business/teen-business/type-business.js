import React from "react";
import styled from "styled-components";
import {gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {typeBusiness} from "../../../../static/type-of-business/teen-business";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import AdventagesWithLongText from "../../../molecules/mixed-blocks/adventages-with-long-text";
import {Paragraph} from "../../../atoms/typography/paragraph";

const TypeBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>

        <Oval2>
            <OvalSvg/>
        </Oval2>
        <TextCenterLayout headlineWidth={770} textWidth={770} headline="Business Ideas for Teens, Kids and Students"
                          text="There are several different types of teen businesses that you can start. Here are some of the more popular options:"/>

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
                    <AdventagesWithLongText
                        style={{textAlign: "left"}}
                        circleText={8}
                        title="Other teen business ideas include:"
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1}
                        imageName="no-money-icon"
                    >
                        <Paragraph mixed={true}>
                            This is perhaps the biggest sector of all, and you have plenty of choices when it comes to
                            being a successful ecommerce entrepreneur:

                            <ul style={{paddingLeft: "15px", paddingTop: "15px"}}>
                                <li style={{paddingBottom: "15px"}}>
                                    Dog walking
                                </li>

                                <li style={{paddingBottom: "15px"}}>Garage sales</li>

                                <li style={{paddingBottom: "15px"}}>Selling food and drinks
                                </li>

                                <li style={{paddingBottom: "15px"}}>Clothing or jewelry design
                                </li>

                                <li style={{paddingBottom: "15px"}}>Pet grooming
                                </li>
                                <li>Washing cars</li>
                            </ul>
                        </Paragraph>
                    </AdventagesWithLongText>
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

const Oval = styled.div`
      position: absolute; 
      right: 0;
      top: 539px;
      width: 100%;
      
      @media (min-width: 570px){
        width: 570px;
      }
`;

const Oval2 = styled.div`
      position: absolute; 
      left: 0;
      bottom: 720px;
      width: 100%;
      transform: rotate(180deg);
      
      @media (min-width: 720px){
        width: 720px;
      }
`;

export default TypeBusiness;
