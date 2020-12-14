import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import TalkIcon from "../../../../images/icons/talk-to-clients.inline.svg";
import IdetifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg"
import LookIcon from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import MarketIcon from "../../../../images/icons/understand-your-market.inline.svg"
import InvolvedIcon from "../../../../images/icons/get-involved-with-business-communities.inline.svg";
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalBlueSVG from "../../../../images/ovals/top-left-transparent-green1.inline.svg";
import OvalRedSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import Curve from "../../../atoms/shapes/curve";
import {gradient} from "../../../atoms/styles/colors";
import Colorbox from "../../../../components/color-box";
import BateryIcon from "../../../../images/icons/another-important-area-to-think-about-how-much-time-effort-and-energy.inline.svg";

const ContainerWrapper = styled.div`
    background: rgb(255,255,255);
    background-image: ${gradient.green3};
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
    
    h2 {
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

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 286px;
  width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`

const OvalBig = styled.div`
  position: absolute;
  right: 0;
  top: calc(50% - 360px);
  width: 100%;
  
  svg{
    transform: scaleX(-1);
  }
    
    @media (min-width: 720px){
        width: 720px;
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
    <ContainerWrapper>
        <Oval>
            <OvalBlueSVG/>
        </Oval>

        <OvalBig>
            <OvalRedSVG/>
        </OvalBig>

        <Container>

            <GridSection>
                <TitleBox>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <Heading size={2} left>
                        Validating Your Side Business Idea
                    </Heading>
                    <Paragraph big>
                        Remember, the ideas above are just a starting point, You can define and tweak exactly what type
                        of side business you want to run through conducting your own research.
                    </Paragraph>

                    <Paragraph big>
                        You will need the right skills to run a successful side business, and you’ll need to work those
                        out before launching your new venture. For example, you need good creative skills to become a
                        freelancer, and you’ll need to do plenty of marketplace research
                        to find products you can sell successfully.
                    </Paragraph>

                    <Colorbox curveColor={color.orange1} color={color.orange3} curve theme="icon" Icon={BateryIcon}>
                        <Paragraph big style={{fontWeight: "bold"}}>
                            Another important area to think about is how much time, effort and energy you have to put
                            into your side business.
                        </Paragraph>
                        <Paragraph bottomMargin={0}>
                            You need to commit to any venture in order to make it successful. And every side business
                            will have dozens or hundreds of competitors, sometimes from full-time entrepreneurs.
                        </Paragraph>
                    </Colorbox>

                    <Paragraph big style={{marginTop: "48px"}}>
                        Getting started in a side business is easy, but becoming a success is harder. Before committing
                        too much time, energy and money into your new side business, it’s important to test the
                        marketplace. These points will be more valid to some side businesses than others — for example,
                        if you’re driving for Uber, you probably don’t need to worry too much about understanding your
                        market and talking to clients.
                        On the other hand, competitor research will be very important to selling products on Amazon.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>
                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={IdetifyIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={3} template={4}>
                            Identify your side business’ unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Whether you’re competing on features, price, quality, speed or something else, your USPs set
                            you apart from competitors and encourage customers to come to you.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={LookIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={3} template={4}>
                            Look at who your competitors
                            are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Having competitors is a good thing as it shows there’s a market, but if there are too many, you’re likely to struggle without a really good unique selling point.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={MarketIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={3} template={4}>
                            Understand your market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Clearly identify exactly who your customers are likely to be, where they hang out and how you’re going to reach them. This will be essential to your marketing, communications, sales and customer support.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={TalkIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={3} template={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your products and services, and validate this by asking if they would commit to spending real money on them.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={InvolvedIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={3} template={4}>
                            Get involved with business communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            One of the great things about side businesses is that there are plenty of great communities and discussion groups. Get involved with them and learn the ins and outs of your chosen market before committing.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
            </GridSection>

        </Container>
    </ContainerWrapper>
);

export default ValidatingBusinessIdea;
