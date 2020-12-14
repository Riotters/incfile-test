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
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import Curve from "../../../atoms/shapes/curve";

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
    margin-top: 12px;
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
  left: 0;
  top: 471px;
  width: 100%;
  
  @media (min-width: 420px) {
    width: 420px;
  }
`

const OvalCenter2 = styled.div`
  position: absolute;
  right: 0;
  bottom: 196px;
  width: 100%;
  transform: scaleX(-1);
  
  @media (min-width: 420px) {
    width: 420px;
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
                    <Heading size={2} left>Validating Your Fitness Business Idea</Heading>
                    <Paragraph big>
                        Remember, the ideas above are just a starting point. You can define and tweak exactly what type
                        of gym, fitness or personal training business you want to run through conducting your own
                        research.
                    </Paragraph>
                    <Paragraph big>
                        Every fitness-based business will have many competitors, and you need to stand out - you should
                        deliver superior fitness classes and excel in your chosen area. Here's how:
                    </Paragraph>
                </TitleBox>

                <GridSectionList>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={IdetifyIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={3} template={4}>
                            Identify your gym or personal training business’ unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Once you know what type of fitness business you want to run, list the key benefits it will
                            provide
                            to members and what makes it unique compared
                            to your competitors.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={LookIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.red2}>
                        <Heading size={3} template={4}>
                            Look at who your competitors are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You will have plenty of competitors. Get a good idea of all the fitness services they
                            provide, and see if you can compete effectively — or if you need to find
                            a slightly different fitness niche.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={MarketIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={3} template={4}>
                            Understand your market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            One of the best ways to get started is to find out exactly what type of people will want to
                            use your fitness services. Work out what part of the community you’re going to serve, and
                            start building personal training and gym services around that.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={TalkIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={3} template={4}>
                            Talk to possible members
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Talk to the types of people who might want to use your fitness services. See what their
                            needs are and how your gym or training can help to meet them. Tweak the classes you offer so
                            they’re of most benefit to your members.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>

                <Paragraph big style={{ justifyContent: "center", width: "100%", maxWidth: "750px", margin: "auto auto 24px auto", fontWeight: "bold" }}>
                        Not every idea you have will make it through to becoming a gym, fitness or personal training
                        business.
                </Paragraph>
                <Paragraph big style={{ justifyContent: "center", width: "100%", maxWidth: "750px", margin: "auto" }}>
                        There are all sorts of reasons to say “yes” or “no” to specific businesses, so think about what
                        your strengths and weaknesses are so you can choose a business you’d be great at.
                </Paragraph>
            </GridSection>

        </Container>
    </BlueContainerWrapper>
);

export default ValidatingBusinessIdea;
