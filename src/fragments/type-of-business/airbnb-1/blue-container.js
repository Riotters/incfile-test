import Container from "../../../atomic/container";
import {Heading} from "../../../atomic/atoms/typography/heading";
import {Paragraph} from "../../../atomic/atoms/typography/paragraph";
import TextBoxed from "../../../atomic/molecules/text-blocks/text-boxed";
import TextBlockWithImage from "../../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import OkIcon from "../../../images/icons/ok.inline.svg";
import {color} from "../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalSVG from "../../../images/oval-blue-3.inline.svg";
import OvalBlueSVG from "../../../images/oval-blue-4.inline.svg";
import Curve from "../../../atomic/atoms/shapes/curve";

const BlueContainerWrapper = styled.div`
    background: rgb(242,246,255);
    background: linear-gradient(0deg, rgba(242,246,255,1) 0%, rgba(250,251,255,1) 100%);
    padding-bottom: 100px;
    position: relative;
`;


const GridSection = styled.div`
    width: 100%;
    margin-top: 110px;
`;

const TitleBox = styled.div`
    width: 100%;
    margin-bottom: 120px;
    position: relative;
     
    @media (min-width:750px) {
        width: 750px;
        margin: 0 auto 120px;
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
        margin: 0 auto;
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
  top: 0;
`

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  top: 40%;
`

const AbsoluteCurve = styled.div`
    position: absolute;
    left: -27px;
    top: -16px;
    transform: rotate(-90deg);
`;

const BlueContainer = () => (
    <BlueContainerWrapper>
        <Oval>
            <OvalSVG/>
        </Oval>
        <OvalCenter>
            <OvalBlueSVG/>
        </OvalCenter>

        <Container>

            <TextBorderedSection>
                <Heading size={3}>Creating a Unique Airbnb Business</Heading>
                <Paragraph>
                    When it comes to starting an Airbnb business, you want to make sure that your property
                    and listings are unique, so you can attract customers. You can do this by highlighting certain
                    aspects in your listings:
                </Paragraph>

                <TextBorderedList>

                    <TextBoxed>
                        <Paragraph bottomSpace={0}>
                            Get a professional to photograph your property, so it’s portrayed in the best way
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed>
                        <Paragraph bottomSpace={0}>
                            Invest in making your property look good, with a fresh coat of paint, new furniture and
                            a deep clean
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed>
                        <Paragraph bottomSpace={0}>
                            Highlight anything unique about the property, like original features or unusual
                            facilities
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed>
                        <Paragraph bottomSpace={0}>
                            Show how close you are to public transport, local points of interest and restaurants
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed>
                        <Paragraph bottomSpace={0}>
                            Maintain a listing that gets good reviews from guests and builds trust
                        </Paragraph>
                    </TextBoxed>

                </TextBorderedList>
            </TextBorderedSection>

            <GridSection>
                <TitleBox>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <Heading size={3}>Validating Your Airbnb Business</Heading>
                    <Paragraph>
                        Getting started in an Airbnb business is easy, but becoming a success is harder.
                        Before committing too much time, energy and money into your new Airbnb business, it’s
                        important to test the marketplace.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>
                    <TextBlockWithImage SvgImage={OkIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Identify your Airbnb business’s unique selling points (USPs)
                        </Heading>
                        <Paragraph>
                            We’ve covered some key points on how to differentiate your listings above, but it’s
                            important to reiterate: If you want your Airbnb business to be a success, you do need to
                            stand out.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={OkIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Look at who your competitors are in the space
                        </Heading>
                        <Paragraph>
                            Having competitors is a good thing as it shows there’s a market, but you want to avoid
                            too much competition. Look at how many other hosts are providing accommodation close to
                            your location, and see how they position their listings and prices.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={OkIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Understand your market
                        </Heading>
                        <Paragraph>
                            You might want to target your listings to a particular type of guest, so if you know
                            there’s a market, make sure your accommodation reflects what might be of value to them.
                            For example, younger people might want vibrant nightlife and a very modern place to
                            stay, while older people could want more peace and quiet, with natural outside space.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={OkIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Get involved with business communities and discussion groups
                        </Heading>
                        <Paragraph>
                            One of the great things about Airbnb business is that there are plenty of great
                            communities and discussion groups. Get involved in them and learn the ins and outs of
                            your chosen market before committing.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
            </GridSection>

        </Container>
    </BlueContainerWrapper>
);

export default BlueContainer;
