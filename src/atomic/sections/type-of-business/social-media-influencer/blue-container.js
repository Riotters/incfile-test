import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBoxed from "../../../molecules/text-blocks/text-boxed";
import React from "react";
import styled from "styled-components";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import Curve from "../../../atoms/shapes/curve";
import {color} from "../../../atoms/styles/colors";

const BlueContainerWrapper = styled.div`
    background: rgb(242,246,255);
    background: linear-gradient(0deg, rgba(242,246,255,1) 0%, rgba(250,251,255,1) 100%);
    padding-bottom: 100px;
    position: relative;
`;

const TextBorderedSection = styled.div`
    width: 100%;
    max-width: 670px;
    padding-top: 100px;
    position: relative;
    
    @media (min-width: 670px) {
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
    margin-top: 30px;
    
    @media (min-width: 576px) {
        margin-top: 80px;
    }
    
    >div {
        margin-bottom: 8px;
    }
`;

const Oval = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: none;
  width: 570px;
  @media (min-width: 720px){
    display: block;
  }
`

const AbsoluteCurve = styled.div`
    position: absolute;
    left: -27px;
    top: 82px;
    transform: rotate(-90deg);
`;

const BlueContainer = () => (
    <BlueContainerWrapper>
        <Oval>
            <OvalSVG/>
        </Oval>

        <Container>

            <TextBorderedSection>
                <AbsoluteCurve>
                    <Curve color={color.blue1}/>
                </AbsoluteCurve>

                <Heading size={3} style={{textAlign: "left"}}>
                    The Best Platforms for Influencers — Instagram and YouTube
                </Heading>
                <Paragraph big>
                    The best platform for influencers, by far, is Instagram. It’s designed around beautiful images and
                    easy sharing, so it’s one of the best ways for brands to showcase their products through you.
                    YouTube is also becoming increasingly popular, as more of us are choosing to consume content via
                    video.
                </Paragraph>

                <Heading size={3} style={{textAlign: "left", fontSize: "24px"}}>Tips on Instagram Businesses and Making Money on Instagram</Heading>
                <Paragraph big>
                    Here’s a selection of advice on building and making money from an Instagram business.
                </Paragraph>

                <TextBorderedList>

                    <TextBoxed>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You probably don’t need as many followers as you think to make money on Instagram. Some influencers in specific niches made an average of 83 a post with fewer than 1,000 followers.
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Finding the right niche is essential. Choose an area that you’re passionate about and where you can develop a strong voice and personal brand.
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Invest in a good camera and find the strengths in your personal style and appearance. A visual style is vital to success on Instagram.
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Share posts from other influencers, the latest news, and areas trending in your niche. Become an expert Instagram curator your followers can trust.
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Do your research and find the right brands and marketing agencies to work with. Approach them with a compelling pitch on why they might want to work with you.
                        </Paragraph>
                    </TextBoxed>

                </TextBorderedList>

            </TextBorderedSection>

            <TextBorderedSection>
                <Heading size={3} style={{textAlign: "left", fontSize: "24px"}}>Tips on YouTube Businesses and Creators</Heading>
                <Paragraph big>
                    Although most YouTube creators make money from ads posted on their videos, there’s a growing market for YouTube influencer businesses:
                </Paragraph>

                <TextBorderedList>

                    <TextBoxed>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            YouTube success is all about being incredibly relevant to your audience. Find a niche that balances your individual viewpoints and opinions with a specialist subject matter.
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            YouTube success is all about being incredibly relevant to your audience. Find a niche that balances your individual viewpoints and opinions with a specialist subject matter.
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Find your voice. The nature of YouTube videos means you have a little longer to build a connection with your followers. Focus on unique interactions and give your audience a reason to subscribe and follow you.
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Get a deep understanding of your audience and who is interacting with you. Experiment with different kinds of videos to see what gets the most engagement; read your comments and tailor your approach.
                        </Paragraph>
                    </TextBoxed>

                    <TextBoxed>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Use search engine optimization on your videos and take advantage of the title and description for keywords, so you stand out in searches.
                        </Paragraph>
                    </TextBoxed>

                </TextBorderedList>

            </TextBorderedSection>

        </Container>
    </BlueContainerWrapper>
);

export default BlueContainer;
