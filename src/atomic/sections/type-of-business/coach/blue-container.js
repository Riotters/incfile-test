import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import Icon1 from "../../../../images/icons/identify-your-unique-selling-point.inline.svg";
import Icon2 from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import Icon3 from "../../../../images/icons/understand-your-market.inline.svg"
import Icon4 from "../../../../images/icons/talk-to-clients.inline.svg"
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalBlueSVG from "../../../../images/oval-blue-4.inline.svg";
import Curve from "../../../atoms/shapes/curve";

const BlueContainerWrapper = styled.div`
    background: rgb(242,246,255);
    background: linear-gradient(0deg, rgba(242,246,255,1) 0%, rgba(250,251,255,1) 100%);
    padding-bottom: 100px;
    position: relative;
    padding-top: 120px;
    overflow: hidden;
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

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  
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

const BlueContainer = () => (
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
                    <Heading size={3}>Validating Your Professional Coaching Business Idea</Heading>
                    <Paragraph>
                        Getting started in an Airbnb business is easy, but becoming a success is harder. Before
                        committing too much time, energy and money into your new Airbnb business, it’s important to test
                        the marketplace.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>
                    <TextBlockWithImage className="containerMargin" SvgImage={Icon1} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Identify your coaching business’ unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Whether you’re competing on your niche, results, pricing or something else, your USPs set
                            you apart from other coaches and encourage clients to come
                            to you.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage className="containerMargin" SvgImage={Icon2} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Look at who your competitors are in
                            the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Having competitors is a good thing as it shows there’s a market. Look into the other coaches
                            operating in your niche and area.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage className="containerMargin" SvgImage={Icon3} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Understand your market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Clearly identify exactly who your clients are likely to be through the niches you serve.
                            This will be essential to your marketing, communications, sales and client support.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage className="containerMargin" SvgImage={Icon4} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your coaching services, and
                            validate this by asking if they would commit to spending real money on them.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
            </GridSection>

            <TitleBox>
                <Paragraph big>
                    Not every idea you have will make it through to becoming a coaching business. There are all sorts of reasons to say “yes” or “no” to specific businesses, so think about what your strengths and weaknesses are so you can choose a business you’d be great at.
                </Paragraph>
            </TitleBox>

        </Container>
    </BlueContainerWrapper>
);

export default BlueContainer;
