import React from "react";
import styled from "styled-components";
import {gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {adventages} from "../../../../static/type-of-business/catering-business";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/oval-orange-4.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import ContentCenter from "../../../partials/content-center";
import {Heading} from "../../../atoms/typography/heading";

const TypeOfBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Container>
            <Service>
                <TextCenterLayout headline="Different Types of Catering Businesses"
                                  text="There are several different ways to set up and run a catering business. These include:"/>

                <AdventagesBox>
                    <CurveWrapper>
                        <Curve color={color.red1}/>
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

            <ContentCenter contentWidth={700}>
                <Heading size={3}>
                    Understand Your Catering Business Model and Financial Projections
                </Heading>

                <Paragraph big>
                    All businesses need a business model, which is how you will generate sales, provide services and
                    make money. Think about your business model now, because it’s better to have that in place so you
                    can start acquiring customers and generating revenue from day one.
                </Paragraph>

                <Paragraph big>
                    You will also need to look at financial projections for your catering business. What are your
                    expected sales and revenues? What is your profitability? How much money will you keep in the
                    business to grow it? How much will you pay yourself and others? If you can, try to plan your revenue
                    for the next month, three months, year and two years.
                </Paragraph>
            </ContentCenter>
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
    top: 300px;
`;

export default TypeOfBusiness;
