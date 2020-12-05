import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import TalkIcon from "../../../../images/icons/talk-to-clients.inline.svg";
import IdetifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg"
import LookIcon from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import MarketIcon from "../../../../images/icons/understand-your-market.inline.svg"
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalBlueSVG from "../../../../images/oval-blue-4.inline.svg";
import Curve from "../../../atoms/shapes/curve";
import {gradient} from "../../../atoms/styles/colors";
import OvalSvg from "../../../../images/ovals/top-right-transparent-orange.inline.svg"

const BlueContainerWrapper = styled.div`
    background: rgb(255,255,255);
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
  right: 0;
  top: 0;
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
    <BlueContainerWrapper>
        <OvalCenter>
            <OvalSvg/>
        </OvalCenter>

        <Container>

            <GridSection>
                <TitleBox>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <Heading size={3}>Validating Your Bookstore Idea</Heading>
                    <Paragraph big>
                        Remember, the ideas above are just a starting point. You can define and tweak exactly how you’re going to run your bookstore business through conducting your own research.
                    </Paragraph>

                </TitleBox>

                <GridSectionList>

                    <TextBlockWithImage width={100} widthUnit="%" className="containerMargin" SvgImage={IdetifyIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Identify your bookstore business’ unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Marketing will be crucial to your success, and that means identifying the unique things your bookstore does well and promoting those into your local community.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" className="containerMargin" SvgImage={LookIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Look at who your competitors
                            are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Look at what your competitors are doing and think
                            of a way to set your bookstore apart. Don’t try
                            to compete with online businesses — you’re offering a different kind of service, so play to those strengths.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" className="containerMargin" SvgImage={MarketIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Understand your market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Clearly identify exactly who your customers are likely to be, where they hang out and how you’re going
                            to reach them. Although you can rely on some local footfall, if you can learn who is interested in your bookselling niche, you’re more likely to be a success.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" className="containerMargin" SvgImage={TalkIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.red2}>
                        <Heading size={4}>
                            Talk to customers
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your bookstore. Try, tweak and test what you’re selling to see what does well.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
                <Paragraph big style={{ justifyContent: "center", width: "100%", maxWidth: "720px", margin: "auto" }} >
                    The thing to learn here is that it’s okay to say “no” to your first, second or third bookstore business ideas. Very few entrepreneurs get it right first time. In fact, getting it wrong is often a badge of honor! Still, you don’t want to waste too much time, energy or money on the wrong initiatives, so ask and answer these questions honestly to find the right way forward.
                </Paragraph>
            </GridSection>

        </Container>
    </BlueContainerWrapper>
);

export default ValidatingBusinessIdea;
