import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import TalkIcon from "../../../../images/icons/talk-to-clients.inline.svg";
import TakeStocks from "../../../../images/icons/take-stock-concerns.inline.svg";
import IdetifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg"
import InvolvedIcon from "../../../../images/icons/get-involved-with-business-communities.inline.svg"
import MarketIcon from "../../../../images/icons/understand-your-market.inline.svg";
import LookIcon from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg";
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalBlueSVG from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import Curve from "../../../atoms/shapes/curve";
import {gradient} from "../../../atoms/styles/colors";

const ContainerWrapper = styled.div`
    background: rgb(255,255,255);
    background-image: ${gradient.blue3};
    padding-bottom: 100px;
    position: relative;
    padding-top: 120px;
`;


const GridSection = styled.div`
    width: 100%;
    margin-top: 110px;
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
    margin-top: 76px;
    margin-bottom: 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const OvalCenter = styled.div`
  position: absolute;
  left: 0;
  top: 500px;
  width: 100%;
  
  @media (min-width: 420px){
    width: 420px;
  }
`

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  top: 839px;
  width: 100%;
  transform: scaleX(-1);
  
  @media (min-width: 720px){
    width: 720px;
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

        <Oval2>
            <OvalBlueSVG/>
        </Oval2>

        <Container>

            <GridSection>
                <TitleBox>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <Heading size={3}>Validating Your Woman-Owned Business Idea</Heading>
                    <Paragraph big>
                        These areas are just starting points — there are infinite business ideas you can start
                        as a female owner. Once you’ve identified the area you’d like to go into, you need
                        to validate your business idea.
                    </Paragraph>
                    <Paragraph big style={{fontWeight: "bold"}}>
                        First, you will need the right skill set.
                    </Paragraph>
                    <Paragraph big>
                        For example, if you’re going into marketplace-based freelancing, do you have
                        a marketable skill you can sell? If you want to be an ecommerce entrepreneur, do you understand all about product marketing, profit margins, working with suppliers and getting customers?
                    </Paragraph>
                    <Paragraph big>
                        Remember that it’s okay to say “no” to your first, second or third business ideas.
                        Very few entrepreneurs get it right the first time — male or female.
                    </Paragraph>
                    <Paragraph big>
                        Here are some questions to ask yourself:
                    </Paragraph>

                </TitleBox>

                <GridSectionList>

                    <TextBlockWithImage SvgImage={IdetifyIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Identify your business’ unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Whether you’re competing on features, price, quality, speed or something else, your USPs will set you apart from competitors and encourage customers to come to you.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={TakeStocks} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Take stock of your concerns
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Read through the concerns we covered above and think about ideas to reduce those issues.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={LookIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Look at who your competitors are
                            in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Having competitors is a good thing as it shows there’s a market, but if there are too many, you’re likely
                            to struggle without a really good unique selling point.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={MarketIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Understand your market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Clearly identify exactly who your customers are likely to be, where they hang out and how you’re going
                            to reach them. This will be essential to your marketing, communications, sales and customer support.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={TalkIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.red2}>
                        <Heading size={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your products and services, and validate this by asking if they would commit
                            to spending real money for it.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={InvolvedIcon} imageBackgroundColor={color.yellow2}
                                        imageShadowColor={color.yellow2}>
                        <Heading size={4}>
                            Get involved with business communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            One of the great things about women-owned businesses is that there are plenty of great communities and discussion groups. Get involved with them and learn the ins and outs of your chosen market before committing.
                        </Paragraph>
                    </TextBlockWithImage>
                </GridSectionList>
            </GridSection>

        </Container>
    </ContainerWrapper>
);

export default ValidatingBusinessIdea;
