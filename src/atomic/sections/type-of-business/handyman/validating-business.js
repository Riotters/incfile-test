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
import OvalBlueSVG from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import OvalRedSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import Curve from "../../../atoms/shapes/curve";
import BigCurve from "../../../../images/curve-orange.inline.svg";

const ContainerWrapper = styled.div`
    background: rgb(255,255,255);
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
     
    @media (min-width:750px) {
        width: 750px;
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
    
    > div {
        margin-bottom: 70px;
    }
    
    @media (min-width: 970px) {
        width: 970px;
        margin: 120px auto 0;
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

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 286px;
  width: 420px;
`

const OvalBig = styled.div`
  position: absolute;
  right: 0;
  top: calc(50% - 360px);
  width: 720px;
  
  svg{
    transform: scaleX(-1);
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
                    <Heading size={3}>
                        Validating Your Handyman
                        Business Idea
                    </Heading>
                    <Paragraph big>
                        These are all great starting points for a home handyman, but you will need to build on them to
                        make the business your own. It’s your unique skills and approach that will really help your
                        business stand out.
                    </Paragraph>

                    <Paragraph big style={{fontWeight: "bold", marginTop: "48px"}}>
                        These are all great starting points for a home handyman, but you will need to build on them to
                        make the business your own. It’s your unique skills and approach that will really help your
                        business stand out.
                    </Paragraph>

                    <Paragraph big>
                        Before committing too much time, energy and money into your new handyman business, it’s
                        important to test the marketplace.
                    </Paragraph>
                    <Paragraph big>
                        Not every idea you have will make it to becoming a handyman business. There are all sorts of
                        reasons to say “yes” or “no” to specific businesses, so think about what your strengths and
                        weaknesses are so you can choose a handyman business you’d be great at.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>
                    <TextBlockWithImage SvgImage={IdetifyIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Identify your handyman business’ unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            What do you bring to your clients that they can’t easily get elsewhere? Do you specialize in
                            particular skills, or do you serve specific types of customers? Finding your unique selling
                            points — what you do better than anyone else — is a great way to stand out.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={LookIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <CurveWrapper>
                            <BigCurve />
                        </CurveWrapper>
                        <Heading size={4}>
                            Look at who your competitors are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Establish how much competition you’re likely to have from other tradesmen and handymen in your area. Some competition is fine, as it shows there’s demand for your services, but too much competition can make it hard to build up a client base. That’s why we recommend going niche and finding one or two areas you can really excel in.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={MarketIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Understand your market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You need to understand exactly who you’re going
                            to be providing handyman services to. Will it mainly be new homeowners, seniors, people in a particular locale, commercial building owners, businesses
                            or something else? This will be essential to your marketing, communications, and finding clients.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={TalkIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your handyman services, and validate this by asking if they would commit to spending real money on them.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={InvolvedIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Get involved with business communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            One of the great things about the handyman industry is that there are some awesome communities and discussion groups. Get involved in them and learn the ins and outs of your chosen market before committing.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
            </GridSection>

            <TitleBox>
                <Paragraph big>
                    Not every idea you have will make it through to becoming a moving business. There are all sorts of
                    reasons to say “yes” or “no” to specific businesses, so think about what your strengths and
                    weaknesses are so you can choose a type of relocation business you’d be great at.
                </Paragraph>
            </TitleBox>

        </Container>
    </ContainerWrapper>
);

export default ValidatingBusinessIdea;
