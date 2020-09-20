import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import IdetifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg"
import LookIcon from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import InvolvedIcon from "../../../../images/icons/get-involved-with-business-communities.inline.svg"
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/top-right-transparent-green3.inline.svg";
import Curve from "../../../atoms/shapes/curve";
import ContentCenter from "../../../partials/content-center";

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
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const AbsoluteCurve = styled.div`
    position: absolute;
    left: -27px;
    top: -16px;
    transform: rotate(-90deg);
`;
const SpecialList = styled.ul`
    list-style-type: none;
    padding-left: 15px;
    
    li{
        margin-bottom: 24px;
        position: relative;
        
        &:before{
            content: "";
            display: block;
            background-color: ${color.green1};
            width: 4px;
            height: 4px;
            border-radius: 50px;
            position: absolute;
            top: 12px;
            left: -12px;
        }
    }
`;

const Oval = styled.div`
    position: absolute;
    bottom: 472px;
    left: 0;
    width: 100%;
    transform: rotate(180deg);
    
    @media (min-width: 420px) {
        width: 420px;
    }
`;

const ValidatingBusinessIdea = () => (
    <BlueContainerWrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <Container>
            <GridSection>
                <TitleBox>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <Heading size={3}>Validating Your Brewery Business Idea</Heading>
                    <Paragraph big>
                        These areas are just starting points — there are many different types of brewery businesses.
                        Once you’ve identified the areas you’d like to go into, you need
                        to validate your brewery business idea.
                    </Paragraph>
                    <Paragraph big>
                        The thing to learn here is that it’s okay to say “no” to your first, second or third brewery
                        business ideas. Very few entrepreneurs get it right first time. In fact, getting it wrong is
                        often a badge of honor! Still, you don’t want to waste too much time, energy or money on the
                        wrong initiatives, so ask and answer these questions honestly to find the right way forward.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>

                    <TextBlockWithImage width={100} widthUnit="%" className="containerMargin" SvgImage={IdetifyIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Identify your brewery business’ unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            For a brewery this might be your location, the type
                            of beer you sell, the entertainment you provide
                            or something else. Whatever it is, it needs to be part of your marketing and a compelling
                            reason for people to drink with you.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" className="containerMargin" SvgImage={LookIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.red2}>
                        <Heading size={4}>
                            Look at who your competitors are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Breweries are becoming increasingly popular. While an average-sized city can support
                            several, it’s important to understand what other breweries are offering so you can find a
                            niche in the market.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" className="containerMargin" SvgImage={InvolvedIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Get involved with business communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            One of the great things about brewery business
                            is that there are plenty of great communities and discussion groups. Get involved with them
                            and learn the ins and outs of your chosen market before committing.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
            </GridSection>
        </Container>

        <ContentCenter contentWidth={770}>
            <div>
                <Heading size={3} maxWidth="100%" style={{fontSize: "40px"}}>
                    Startup Costs for a Brewery
                </Heading>
                <Paragraph big>
                    Compared to many other small businesses, microbreweries have high startup costs.
                    A combination of a large building to brew in, the sophisticated equipment needed and special
                    ingredients like hops, barley and malt all means a high initial capital expenditure. If you have
                    a bar, brewpub or cafe as well, you can expect those costs
                    to increase significantly. Here’s a (very) rough guide to what you can expect to pay:
                </Paragraph>
                <Paragraph big mixed={true}>
                    <SpecialList>
                        <li>
                            Brewing equipment could cost anything between $100,000 and $1,000,000
                        </li>
                        <li>
                            The lease or rent on your location varies widely between cities and lots, so inquire
                            with local property owners
                        </li>
                        <li>
                            Preparing your brewery and brewpub is also expensive — you will likely need special
                            flooring
                            for the brewery that could run to thousands of dollars, you may need to get special
                            electrics and water lines put in and you will need to pay for construction, decoration
                            and fixtures for your brewpub
                        </li>
                        <li>
                            Overall, starting a brewery could cost you anywhere from $250,000 to $2.5 million or
                            more depending on your desires, ambition and ability to negotiate
                        </li>
                        <li>
                            You will need to pay alcohol tax and licenses and permits to brew and serve alcohol
                        </li>
                    </SpecialList>
                </Paragraph>
            </div>
        </ContentCenter>

    </BlueContainerWrapper>
);

export default ValidatingBusinessIdea;
