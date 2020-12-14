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
import Curve from "../../../atoms/shapes/curve";
import BigCurve from "../../../../images/curve-orange.inline.svg";
import {gradient} from "../../../atoms/styles/colors";
import Colorbox from "../../../../components/color-box";
import StarIcon from "../../../../images/icons/star-with-base.inline.svg";

const ContainerWrapper = styled.div`
    background-image: ${gradient.orange3};
    padding-bottom: 100px;
    position: relative;
    padding-top: 120px;
`;


const GridSection = styled.div`
    width: 100%;
`;

const TitleBox = styled.div`
    width: 100%;
    max-width: 750px;
    position: relative;
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

const CurveWrapper = styled.div`
    position: absolute;
    right: -70px;
    top: -70px;
    display: none;
    transform: rotate(90deg);
    
    @media (min-width: 1200px){
       display: block;
    }
    
    svg{
        path{
            fill: #f5cdcd;
        }
    }
`;

const AbsoluteCurve = styled.div`
    position: absolute;
    left: -27px;
    top: -16px;
    transform: rotate(-90deg);
`;

const ValidatingBusinessIdea = () => (
    <ContainerWrapper>

        <Container>

            <GridSection>
                <TitleBox>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <Heading size={2} left>
                        Validating Your Home-Based Business Idea
                    </Heading>
                    <Paragraph big>
                        The above home business ideas are all great starting points, but you’ll need to build on them to make the business your own. You have unique skills and insight you can use to create a home-based business that will really stand out.
                    </Paragraph>

                    <Paragraph big>
                        Start by determining whether you have the right skillset. For example, if you’re selling products from home, have you identified the right niche and marketplace? If you’re providing home-based services, is there a demand for those services in your area?
                    </Paragraph>

                    <Paragraph big style={{marginTop: "48px", marginBottom: "48px"}}>
                        Don’t assume that just because it’s home-based, it’s easy. Every home-based business will have dozens or hundreds of competitors, and you need to stand out, deliver superior products and services and excel in your chosen area.
                    </Paragraph>

                    <Paragraph big style={{fontFamily: "Avenir", fontWeight: "900", color: color.black}}>
                        Getting started in a home-based business is easy, but becoming a success is harder. Before committing too much time, energy and money into your new home-based business, it’s important to test the marketplace and validate your ideas.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>
                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={IdetifyIcon}
                                        imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={3} template={4}>
                            Identify your home-based business’s unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Whether you’re competing on features, price, quality, speed or something else, your USPs set
                            you apart from competitors and encourage customers to come to you.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={LookIcon}
                                        imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <CurveWrapper>
                            <BigCurve/>
                        </CurveWrapper>
                        <Heading size={3} template={4}>
                            Look at who your competitors are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Having competitors is a good thing as it shows there’s a market — but if there are too many,
                            you’re likely
                            to struggle without a really good unique selling point.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={MarketIcon}
                                        imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={3} template={4}>
                            Understand your market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Clearly identify exactly who your customers are likely to be, where they hang out and how
                            you’re going to reach them. This will be essential to your marketing, communications, sales
                            and customer support.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={TalkIcon}
                                        imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={3} template={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your products and services,
                            and validate this by asking if they would commit to spending real money on them.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={InvolvedIcon} 
                                        imageBackgroundColor={color.red2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={3} template={4}>
                            Get involved with business communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            One of the great things about home-based business is that there are plenty of great communities and discussion groups. Get involved in them and learn the ins and outs of your chosen market before committing.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>

                <Paragraph big style={{ justifyContent: "center", width: "100%", maxWidth: "720px", margin: "auto auto 24px auto" }}>
                    The thing to learn here is that it’s okay to say “no” to your first, second or third home-based business ideas. Very few entrepreneurs get it right first time. In fact, getting it wrong is often a badge of honor!
                </Paragraph>
                <Paragraph big style={{ justifyContent: "center", width: "100%", maxWidth: "720px", margin: "auto" }}>
                    Still, you don’t want to waste too much time, energy or money on the wrong initiatives, so ask and answer these questions honestly to find the right way forward.
                </Paragraph>
            </GridSection>

        </Container>
    </ContainerWrapper>
);

export default ValidatingBusinessIdea;
