import React from "react";
import styled from "styled-components";

import Container from "../../../container";

import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import {color} from "../../../atoms/styles/colors";
import Curve from "../../../atoms/shapes/curve";

import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";

import Icon1 from "../../../../images/icons/identify-your-unique-selling-point.inline.svg";
import Icon2 from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import Icon3 from "../../../../images/icons/understand-your-market.inline.svg"
import Icon4 from "../../../../images/icons/talk-to-clients.inline.svg"
import Icon5 from "../../../../images/icons/get-involved-with-business-communities.inline.svg"
import OvalBlueSVG from "../../../../images/ovals/top-left-transparent-orange.inline.svg";

const ContainerWrapper = styled.div`
    background-color: white;
    padding-bottom: 100px;
    position: relative;
    padding-top: 120px;
`;


const GridSection = styled.div`
    width: 100%;
`;

const TitleBox = styled.div`
    width: 100%;
    position: relative;
    max-width: 750px;
    
    @media (min-width:750px) {
        
        margin: 0 auto;
    }
    
    h3{
        color: #1d1d1d;
        font-size: 40px;
        text-align: left;
        margin-bottom: 24px;
    }
`;

const GridSectionList = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 70px;
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  top: 500px;
  width: 100%;
  transform: scaleX(-1);
  
  @media (min-width: 570px){
    width: 570px;
  }
`

const AbsoluteCurve = styled.div`
    position: absolute;
    left: -27px;
    top: -16px;
    transform: rotate(-90deg);
`;

const ValidatingBusinessIdea = () => (
    <ContainerWrapper>
        <OvalCenter>
            <OvalBlueSVG/>
        </OvalCenter>

        <Container>

            <GridSection>
                <TitleBox>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <Heading size={3}>Validating Your Travel Agency Business Idea</Heading>
                    <Paragraph big>
                        The travel and tourism ideas above are all great starting points, but you will need to build on
                        them to make the business your own. You have unique skills and insight that you can use to
                        create a travel agency business that will really stand out. Your travel agency business will
                        have dozens or hundreds of competitors, and you need to deliver superior travel and tourism
                        services and excel in your chosen travel niche.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>
                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={Icon1} imageBackgroundColor={color.yellow2}
                                        imageShadowColor={color.yellow2}>
                        <Heading size={4}>
                            Identify your travel agency business’s unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            When you know the travel niche you want to go into, make sure you have a compelling and
                            unique tourism proposition. Your USPs set you apart from competitors and encourage customers
                            to come to you.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={Icon2} imageBackgroundColor={color.blue2}
                                        imageShadowColor={color.blue2}>
                        <Heading size={4}>
                            Look at who your travel competitors
                            are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Having competitors is a good thing as it shows there’s a market, but if there are too many,
                            you’re likely
                            to struggle without a really good unique selling point. See how many other tourism experts
                            operate in your chosen niche.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={Icon3} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Understand your travel and tourism market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Clearly identify exactly who your vacation and travel customers are likely to be, where they
                            hang out and how you’re going to reach them. This will be essential to your marketing,
                            communications, sales and customer support.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={Icon4} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential vacationers to understand what they want from your travel and tourism services.
                            Ask about what they need from you to plan the perfect vacation or getaway.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={Icon5} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Get involved with business communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Get involved with business communities and discussion groups
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
            </GridSection>

        </Container>
    </ContainerWrapper>
);

export default ValidatingBusinessIdea;
