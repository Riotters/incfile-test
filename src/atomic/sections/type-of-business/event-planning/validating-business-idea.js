import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import OkIcon from "../../../../images/icons/ok.inline.svg";
import IdetifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg"
import LookIcon from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import MarketIcon from "../../../../images/icons/understand-your-market.inline.svg"
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import Curve from "../../../atoms/shapes/curve";
import {gradient} from "../../../atoms/styles/colors";

const ContainerWrapper = styled.div`
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
                    <Heading size={2} left>Validating Your Party Planning Business Idea</Heading>
                    <Paragraph big>
                        These are all great starting points, but you will need to build on them to make the business
                        your own. You have unique skills and insight that you can use to start an event planning
                        business that will really stand out. Before committing too much time, energy and money into your
                        new party or event planning business, it’s important to test the marketplace.
                    </Paragraph>
                    <Paragraph big>
                        Not every idea you have will make it through to becoming a successful planning business. There
                        are all sorts of reasons to say “yes” or “no” to specific businesses; think about what your
                        strengths and weaknesses are so you can choose one you’d
                        be great at.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={IdetifyIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={3} template={4}>
                            Identify your planning business’ unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Decide on the main benefits of your business and how you’re going to communicate them. Whether that’s because of your niche, experience, skills or services, you will need to set yourself apart from competitors to attract the right event planning clients.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={LookIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={3} template={4}>
                            Look at who your competitors are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Having competitors is a good thing as it shows there’s a market, but it’s still vital to find your own space. Look into who the other event and party planners are and the type of clients they have. Try to identify some gaps in the marketplace.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={MarketIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={3} template={4}>
                            Understand your market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Party and event planning relies on having enough potential clients in your local
                            marketplace. Investigate how many of a specific type of event happen in your city on a
                            regular basis to learn if there’s enough business for a new event planning company. Clearly
                            identify exactly who your customers are likely to be, where they hang out and how you’re
                            going to reach them. This will be essential to your marketing, communications, sales and
                            customer support.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={OkIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={3} template={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with your potential clients to understand local nuances and what they’re looking for
                            from an event
                            or party planning business. Validate your business idea by asking if they would commit to
                            spending real money on you as an event planner.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
            </GridSection>

        </Container>
    </ContainerWrapper>
);

export default ValidatingBusinessIdea;
