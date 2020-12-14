import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import OkIcon from "../../../../images/icons/talk-to-clients.inline.svg";
import IdetifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg"
import LookIcon from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import MarketIcon from "../../../../images/icons/understand-your-market.inline.svg"
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import Curve from "../../../atoms/shapes/curve";
import InvolvedIcon from "../../../../images/icons/get-involved-with-business-communities.inline.svg";

const BlueContainerWrapper = styled.div`
    background: rgb(255,255,255);
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
    padding-bottom: 80px;
    
    @media (min-width:750px) {
        margin: 0 auto;
    }
    
    h2{
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
    margin-top: 76px;
    margin-bottom: 76px;; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  top: 677px;
  width: 100%;
  transform: scaleX(-1);
  
  @media (min-width: 570px){
    width: 570px;
  }
`

const OvalCenter2 = styled.div`
  position: absolute;
  left: 0;
  top: 587px;
  width: 100%;
  
  @media (min-width: 136px){
    width: 136px;
  }
`

const AbsoluteCurve = styled.div`
    position: absolute;
    left: -27px;
    top: -16px;
    transform: rotate(-90deg);
    display: none;
  
      @media (min-width: 1200px){
        display: block;
      }
`;

const ValidatingBusinessIdea = () => (
    <BlueContainerWrapper>
        <OvalCenter>
            <OvalSVG/>
        </OvalCenter>
        <OvalCenter2>
            <OvalSVG/>
        </OvalCenter2>
        <Container>

            <GridSection>
                <TitleBox>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <Heading size={2} left>Validating Your Food Truck Business Idea</Heading>
                    <Paragraph big>
                        These ideas are just starting points — you’ll need to do plenty of research to understand your customers and create a food truck experience they’re going to love.
                    </Paragraph>
                    <Paragraph big>
                        It can be quite expensive to open a food truck business, with estimates of between $50,000 and $100,000 for your startup costs. Before committing too much time, energy and money into your new food truck business, it’s vital to test the marketplace.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>

                    <TextBlockWithImage SvgImage={LookIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={3} template={4}>
                            Look at who your competitors are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Food trucks are a popular type of business, so it’s important to know who else is operating
                            in your area. Before starting your own, see who else is out there. Do some local research,
                            go to events and popular public places and see the types of food trucks already operating,
                            This can help you find a niche that’s not already taken.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={IdetifyIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={3} template={4}>
                            Identify your food truck business’ unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            What does your food truck offer that your competitors don’t? Look for ways that you can stand out, whether that’s with your chosen cuisine, supporting people on particular diets or something else.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={MarketIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={3} template={4}>
                            Understand your market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Clearly identify exactly who your customers are likely to be and what they want to eat. You’ll need to find
                            a food truck niche where there’s enough demand for the food you’re making and selling.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={OkIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={3} template={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers about what they want from a food truck. Are they after a particular type of food that they can’t already get? Can you offer a meal experience in a different way?
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={InvolvedIcon} imageBackgroundColor={color.yellow2}
                                        imageShadowColor={color.yellow2}>
                        <Heading size={3} template={4}>
                            Get involved with food truck communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            One of the great things about food truck businesses
                            is that there are several communities and discussion groups. Get involved in them and learn the ins and outs of your chosen market before committing.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
                <Paragraph big style={{ justifyContent: "center", width: "100%", maxWidth: "750px", margin: "auto" }}>              
                    Keep researching and testing until you find the right type of food truck business. It’s fine to say no to the first few ideas, so long as you settle on a niche where there’s a genuine need.
                </Paragraph>
            </GridSection>

        </Container>
    </BlueContainerWrapper>
);

export default ValidatingBusinessIdea;
