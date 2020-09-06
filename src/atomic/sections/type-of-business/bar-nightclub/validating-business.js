import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import TalkIcon from "../../../../images/icons/talk-to-clients.inline.svg";
import IdetifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg"
import LookIcon from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import MarketIcon from "../../../../images/icons/look-for-market-research.inline.svg"
import InvolvedIcon from "../../../../images/icons/get-involved-with-business-communities.inline.svg";
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const ContainerWrapper = styled.div`
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 30%, #fef6ed);
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

const TextBorderedSection = styled.div`
    width: 100%;
    padding-top: 100px;
    
    @media (min-width: 670px) {
        width: 670px;
        margin: 0 auto;
    }
    
    h3{
        color: #1d1d1d;
        font-size: 40px;
        text-align: center;
        margin-bottom: 24px;
    }
`;

const TextBorderedList = styled.div`
    margin-top: 80px;
    
    >div {
        margin-bottom: 8px;
    }
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 200px;
  width: 420px;
`

const OvalBig = styled.div`
  position: absolute;
  right: 0;
  top: calc(50% - 360px);
  width: 420px;
  transform: scaleY(-1);
  
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
            <OvalSVG/>
        </Oval>

        <OvalBig>
            <OvalSVG/>
        </OvalBig>

        <Container>

            <GridSection>
                <TitleBox>
                    <Heading size={3}>
                        Plan Your Bar or Club Business
                    </Heading>
                    <Paragraph big>
                        Before you start your business, there are a few key areas you need to focus on.
                        You will need to establish whether there’s a demand for your bar or club business services, look at potential benefits and pitfalls, understand how your business finances might look and ensure everything is in order.
                    </Paragraph>
                    <Paragraph big>
                        In short, you need a business plan — here’s how to think about your business idea.
                    </Paragraph>

                    <Heading size={3} style={{fontWeight: "bold", marginTop: "100px", fontSize: "40px"}}>
                        Do Market Research and Validate Your Bar or Club Products and Services
                    </Heading>

                    <Paragraph big>
                        Before you launch your bar or club business, you need to understand if there’s
                        a demand for what you’re selling. That means carrying out market research and “validating” your products and services. Here’s how to go about it:
                    </Paragraph>
                </TitleBox>

                <GridSectionList>

                    <TextBlockWithImage SvgImage={MarketIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Find market research reports for bar or club businesses
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            These types of businesses rely almost completely on locality and location, so understanding the residential and tourism markets in your region is critical.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={LookIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Check out your competitors in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Having competitors is a good thing as it shows there’s a market. Additionally, in the bar and club scene there’s generally plenty of room for a niche establishment that provides a unique reason for customers to drink there.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={TalkIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Talk to patrons
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your bar or club and find out what’s currently missing in the local area
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={IdetifyIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Identify your business’s unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            These are the areas that will set you apart from competitors and encourage customers to come
                            to you. This will mainly be driven by the type of bar
                            or club you choose to run.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={InvolvedIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Get involved with business communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Ask questions about bar or club businesses and meet up with other owners. You can find links to some excellent discussion groups later in the article.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
            </GridSection>

        </Container>
    </ContainerWrapper>
);

export default ValidatingBusinessIdea;
