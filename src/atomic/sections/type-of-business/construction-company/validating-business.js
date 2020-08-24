import React from "react";
import styled from "styled-components";

import Container from "../../../container";

import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import {color} from "../../../atoms/styles/colors";

import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";

import Icon1 from "../../../../images/icons/identify-your-unique-selling-point.inline.svg";
import Icon2 from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import Icon3 from "../../../../images/icons/understand-your-market.inline.svg"
import Icon4 from "../../../../images/icons/talk-to-clients.inline.svg"
import OvalBlueSVG from "../../../../images/oval-blue-4.inline.svg";

const ContainerWrapper = styled.div`
    background-color: white;
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

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

const AbsoluteCurve = styled.div`
    position: absolute;
    left: -27px;
    top: -16px;
    transform: rotate(-90deg);
`;

const ValidatingBusinessIdea = () => (
    <ContainerWrapper>
        <OvalCenter>
            <OvalBlueSVG/>
        </OvalCenter>

        <Container>

            <GridSection>
                <TitleBox>
                    <Heading size={3}>Validating Your Construction Business Idea</Heading>
                    <Paragraph big>
                        The construction areas above are just starting points — there are many different types of
                        construction businesses. Once you’ve identified the areas you’d like
                        to go into, you need to validate your construction business idea to make sure
                        it’s going to work in the real world.
                    </Paragraph>

                    <Paragraph big style={{fontWeight: "bold"}}>
                        Before committing too much time, energy and money into your new construction business, it’s
                        important to test the marketplace.
                    </Paragraph>

                    <Paragraph big>
                        Not every idea you have will make it through to becoming a construction business. There are all
                        sorts of reasons to say “yes” or “no” to specific businesses, so think about what your strengths
                        and weaknesses are so you can choose a business you’d be great at.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>
                    <TextBlockWithImage SvgImage={Icon1} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Identify your construction business’s unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You will need to provide a compelling reason for clients to use your construction services
                            for their building needs. Whether it’s your niche or your particular skill set, make sure
                            you have something
                            to bring to the table.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={Icon2} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Look at who your construction competitors are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Every market is likely to have several construction businesses. That’s why it’s so important
                            to find a niche where you can dominate.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={Icon4} imageBackgroundColor={color.yellow2}
                                        imageShadowColor={color.yellow2}>
                        <Heading size={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential vacationers to understand what they want from your travel and tourism
                            services.
                            Ask about what they need from you to plan the perfect vacation or getaway.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={Icon3} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Understand your construction market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You should identify your potential client base before starting your business. Make sure that
                            there’s enough demand for your construction services. This will be essential to your
                            marketing, communications, sales and customer support.
                        </Paragraph>
                    </TextBlockWithImage>
                </GridSectionList>
            </GridSection>

        </Container>
    </ContainerWrapper>
);

export default ValidatingBusinessIdea;
