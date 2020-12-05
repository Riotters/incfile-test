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
import Icon4 from "../../../../images/icons/get-involved-with-business-communities.inline.svg"
import OvalBlueSVG from "../../../../images/ovals/top-right-transparent-orange.inline.svg";

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
  right: 0;
  top: 38%;
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
        <OvalCenter>
            <OvalBlueSVG/>
        </OvalCenter>

        <Container>

            <GridSection>
                <TitleBox>
                    <Heading size={3}>Validating Your Publishing Business Idea</Heading>
                    <Paragraph big>
                        These areas are just starting points — there are many different types of publishing businesses. Once you’ve identified the areas you’d like to go into, you need
                        to validate your publishing business idea.
                    </Paragraph>

                    <Paragraph big style={{fontFamily: "Avenir", fontWeight: "900", color: color.black}}>
                        Getting started in a publishing business is easy, but becoming
                        a success is harder.
                    </Paragraph>

                    <Paragraph big>
                        Before committing too much time, energy and money into your new publishing business, it’s important to test the marketplace.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>
                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={Icon1} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Identify your publishing business’ unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            For most publishers, your USPs will come from two areas: the niche you choose and the style/format that you present work in.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={Icon3} imageBackgroundColor={color.yellow2}
                                        imageShadowColor={color.yellow2}>
                        <Heading size={4}>
                            Understand your construction market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You should identify your potential client base before starting your business. Make sure that
                            there’s enough demand for your construction services. This will be essential to your
                            marketing, communications, sales and customer support.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={Icon2} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Look at who your construction competitors are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Every market is likely to have several construction businesses. That’s why it’s so important
                            to find a niche where you can dominate.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={Icon4} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Get involved with business communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            One of the great things about the publishing business is that there are plenty of great communities and discussion groups. Get involved in them and learn the ins and outs of your chosen market before committing.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
                <Paragraph big style={{ justifyContent: "center", width: "100%", maxWidth: "750px", margin: "auto" }}>
                    The thing to learn here is that it’s okay to say “no” to your first, second or third publishing business ideas. Very few entrepreneurs get it right the first time. In fact, getting it wrong is often a badge of honor! Still, you don’t want to waste too much time, energy or money on the wrong initiatives, so ask and answer these questions honestly to find the right way forward.
                </Paragraph>
            </GridSection>

        </Container>
    </ContainerWrapper>
);

export default ValidatingBusinessIdea;
