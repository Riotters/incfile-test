import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import TalkIcon from "../../../../images/icons/talk-to-clients.inline.svg";
import IdetifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg"
import InvolvedIcon from "../../../../images/icons/get-involved-with-business-communities.inline.svg"
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalBlueSVG from "../../../../images/oval-blue-4.inline.svg";
import {gradient} from "../../../atoms/styles/colors";
import ContentCenter from "../../../partials/content-center";
import TextCenterLayout from "../../../partials/heading-left";

const ContainerWrapper = styled.div`
    background: rgb(255,255,255);
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 40%, #f2f6ff);
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

const MainChallenges = () => (
    <ContainerWrapper>
        <OvalCenter>
            <OvalBlueSVG/>
        </OvalCenter>

        <Container>

            <GridSection>
                <TitleBox>
                    <Heading size={3}>What Are the Main Challenges for a Photography Entrepreneur?</Heading>
                    <Paragraph big>
                        The main challenge for a photographer is not the photography itself. If you have the right
                        skills and training, good equipment, strong methods and techniques and an eye for detail, you
                        can produce some beautiful images.
                    </Paragraph>
                    <Paragraph big>
                        Most photographers fail because they are not good business people. They don’t know how to
                        market themselves, manage their cashflows or drum up new business. Being a successful
                        photographer is about balancing the creative with the critical and the art with the
                        administration.
                    </Paragraph>
                    <Paragraph big>
                        If you want to be a success, here are the key areas you’ll need to add you your
                        skillset:
                    </Paragraph>

                </TitleBox>

                <GridSectionList>

                    <TextBlockWithImage SvgImage={IdetifyIcon} imageBackgroundColor={color.yellow2}
                                        imageShadowColor={color.yellow2}>
                        <Heading size={4}>
                            Financial management
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Making sure you have enough money coming
                            in to pay your bills and having a cash buffer put aside for lean times.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={InvolvedIcon} imageBackgroundColor={color.blue2}
                                        imageShadowColor={color.blue2}>
                        <Heading size={4}>
                            Client relationship management
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Nurturing and building relationships with new, current and previous clients and encouraging
                            them to work with you.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={TalkIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Marketing and seeking out work
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Getting your name out there and approaching gigs and jobs that can help you build your
                            portfolio.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
            </GridSection>

            <ContentCenter contentWidth={770}>
                <TextCenterLayout headline="What Does a Day in the Life of a Photography Entrepreneur Look Like?"
                                  headlineWidth={770}/>
                <Paragraph big>
                    A typical day for a photographer depends on the type of photography you do.
                    For photographers who work in studio environments (e.g. portrait, pets, food, advertising) you will
                    spend time setting up your studio and lighting. You will then work with clients to get an exact
                    understanding of their needs, shoot until you get
                    it right, then complete any post-production tasks.
                </Paragraph>

                <Paragraph big>
                    For photographers who work in live environments (weddings, events etc.) you will likely spend time
                    traveling, setting up your equipment and keeping a constant eye open for the perfect picture.
                </Paragraph>

                <Paragraph big>
                    Once you have completed the photography shoot, you will then spend time reviewing the thousands of
                    images you have taken and send the best ones to your clients for approval. You will likely touch-up
                    certain photos, then handle all of your business administration and perhaps seek out new work.
                </Paragraph>
            </ContentCenter>

        </Container>

    </ContainerWrapper>
);

export default MainChallenges;