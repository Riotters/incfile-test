import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import TalkIcon from "../../../../images/icons/talk-to-clients.inline.svg";
import InvolvedIcon from "../../../../images/icons/get-involved-with-business-communities.inline.svg";
import IdetifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg"
import LookIcon from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import MarketIcon from "../../../../images/icons/understand-your-market.inline.svg"
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalBlueSVG from "../../../../images/ovals/top-right-transparent-green3.inline.svg";
import Curve from "../../../atoms/shapes/curve";

const BlueContainerWrapper = styled.div`
    background: rgb(255,255,255);
    padding-bottom: 30px;
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
    padding-bottom: 72px;
    
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
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1000px;
    
    > div {
        margin-bottom: 70px;
    }
    
    @media (min-width: 1024px) {
        margin: 0px auto;
    }
`;

const OvalCenter = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transform: scaleX(-1);
    
    @media (min-width: 420px){
        width: 420px;
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
            <OvalBlueSVG/>
        </OvalCenter>

        <Container>

            <GridSection>
                <TitleBox>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <Heading size={3}>Validating Your Bed and Breakfast Business Idea</Heading>
                    <Paragraph big>
                        These are all great starting points, but you will need to build on them to make the business your own. You have unique skills and insight that you can use to create
                        a bed and breakfast business that will really stand out.
                    </Paragraph>
                    <Paragraph big style={{fontWeight: "bold"}}>
                        Getting started in a bed and breakfast business can take a lot of time, effort and money. It’s important to validate your idea and test the marketplace before committing too much.
                    </Paragraph>
                    <Paragraph big>
                        The thing to learn here is that it’s okay to say “no” to your first, second or third bed and breakfast business ideas. Few hospitality entrepreneurs get it right the first time. In fact, getting it wrong is often a badge of honor! Still, you don’t want to waste
                        too much time, energy or money on the wrong initiatives, so ask and answer these questions honestly to find the right way forward.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>

                    <TextBlockWithImage className="containerMargin" SvgImage={IdetifyIcon} imageBackgroundColor={color.yellow2}
                                        imageShadowColor={color.yellow2}>
                        <Heading size={4}>
                            Identify your B&B business’ unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You’ll need to find the areas that really set you apart. What is it that your boutique hotel does well that you can use as a USP? Do you offer superlative service, amazing food, a great location or something else that helps you stand out?
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage className="containerMargin" SvgImage={LookIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Look at who your competitors are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Every B&B is going to have competition. That’s not
                            a problem, so long as you can be distinctive. Remember, guests are coming to you for an experience they can’t get elsewhere, so finding out what your competitors are good at and differentiating yourself is essential.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage className="containerMargin" SvgImage={MarketIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Understand your market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            It’s vital to understand exactly who your potential guests are likely to be. Spend some time researching your desired market, where they hang out and how you’re going to reach them. This will be essential to your marketing, communications, sales and outreach.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage className="containerMargin" SvgImage={TalkIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Talk to guests
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential guests to understand what they want from your boutique hotel, and validate this by asking if they would commit to spending real money on them.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage className="containerMargin" SvgImage={InvolvedIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Get involved with business communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            One of the great things about the bed and breakfast industry is that there are plenty of great communities and discussion groups. Get involved in them and learn the ins and outs of your chosen market before committing.
                        </Paragraph>
                    </TextBlockWithImage>
                </GridSectionList>
            </GridSection>

        </Container>
    </BlueContainerWrapper>
);

export default ValidatingBusinessIdea;
