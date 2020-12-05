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
import OvalBlueSVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const ContainerWrapper = styled.div`
    background-color: white;
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
  left: 0;
  top: 570px;
  width: 100%;
  
  @media (min-width: 420px){
    width: 420px;
  }
`

const AbsoluteCurve = styled.div`
    position: absolute;
    left: -27px;
    top: -16px;
    transform: rotate(-90deg);
    display: none;
  
  @media (min-width: 1200px){
    display: block;
  }
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

                    <Paragraph big style={{fontFamily: "Avenir", fontWeight: "900", color: color.black}}>
                        Before committing too much time, energy and money into your new construction business, it’s
                        important to test the marketplace.
                    </Paragraph>

                </TitleBox>

                <GridSectionList>
                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={Icon1} imageBackgroundColor={color.purple2}
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

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={Icon2} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Look at who your construction competitors are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Every market is likely to have several construction businesses. That’s why it’s so important
                            to find a niche where you can dominate.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={Icon4} imageBackgroundColor={color.yellow2}
                                        imageShadowColor={color.yellow2}>
                        <Heading size={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your building company.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={Icon3} imageBackgroundColor={color.babyblue2}
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
                <Paragraph big style={{ justifyContent: "center", width: "100%", maxWidth: "720px", margin: "auto" }} >
                    Not every idea you have will make it through to becoming a construction business. There are all sorts of reasons to say “yes” or “no” to specific businesses, so think about what your strengths and weaknesses are so you can choose a business you’d be great at.
                </Paragraph>
            </GridSection>

        </Container>
    </ContainerWrapper>
);

export default ValidatingBusinessIdea;
