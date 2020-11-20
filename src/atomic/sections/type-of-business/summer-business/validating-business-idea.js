import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import TalkIcon from "../../../../images/icons/talk-to-clients.inline.svg";
import IdetifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg"
import MarketIcon from "../../../../images/icons/understand-your-market.inline.svg";
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-right-transparent-blue3.inline.svg";
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
    margin-bottom 76px; 
    
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
  top: 378px;
  width: 100%;
  
  @media (min-width: 420px){
    width: 420px;
  }
`

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  bottom: 111px;
  width: 100%;
  
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
        <Oval>
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg2/>
        </Oval2>
        <Container>

            <GridSection>
                <TitleBox>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <Heading size={3}>Validating Your Summer Business Idea</Heading>
                    <Paragraph big>
                        You will need to think about the type of summer business you want to run, then research, refine
                        and validate your ideas. Start by making sure you have the right skillset. For example, if
                        you’re going to tutor or teach, do you have sufficient subject matter expertise to get the
                        lessons across?
                    </Paragraph>
                    <Paragraph big>
                        Not every idea you have will actually become a summer business. There are all sorts of reasons
                        to say “yes” or “no” to specific businesses, so think about what your strengths and weaknesses
                        are so you can choose a business you’d be great at.
                    </Paragraph>
                    <Paragraph big style={{fontFamily: "Avenir", fontWeight: "900", color: color.black}}>
                        Don’t assume that just because you have a summer business, running it and making money will be
                        easy.
                    </Paragraph>
                    <Paragraph big>
                        Even seasonal businesses have competitors, and you need to stand out, deliver superior products
                        and services and excel in your chosen area.
                    </Paragraph>
                    <Paragraph big>
                        Getting started in a summer business is easy, but becoming a success is harder. Before
                        committing too much time, energy and money into your new summer business, it’s important to test
                        the marketplace. Here's how:
                    </Paragraph>

                </TitleBox>

                <GridSectionList>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={IdetifyIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Identify your unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            What does your summer business have that others
                            do not? Whether you’re competing on features, price, quality, speed or something else, make sure you stand apart from competitors and encourage customers
                            to come to you.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={TalkIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.red2}>
                        <Heading size={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your products and services, and validate this by asking if they would commit
                            to spending real money on it.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={MarketIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Understand your market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Clearly identify exactly who your customers are likely to be, where they hang out and how you’re going
                            to reach them. Remember that with seasonal businesses, precisely marketing to tourists, parents or other niches will be critical.
                        </Paragraph>
                    </TextBlockWithImage>
                </GridSectionList>
                <TitleBox>
                    <Paragraph big>
                    Not every idea you have will actually become a summer business. There are all sorts of reasons to say “yes” or “no” to specific businesses, so think about what your strengths and weaknesses are so you can choose a business you’d be great at.
                    </Paragraph>
                </TitleBox>
            </GridSection>

        </Container>
    </ContainerWrapper>
);

export default ValidatingBusinessIdea;
