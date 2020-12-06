import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalBlueSVG from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import FinancialIcon from "../../../../images/icons/financial-managment.inline.svg";
import RealtionshipIcon from "../../../../images/icons/relationship-icon.inline.svg";
import SeekingIcon from "../../../../images/icons/seeking-out-work.inline.svg";
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
`;

const TitleBox = styled.div`
    width: 100%;
    position: relative;
    max-width: 750px;
    padding-bottom: 80px;
    
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

const OvalCenter = styled.div`
  position: absolute;
  left: 0;
  top: 598px;
  width: 100%;
  
  @media (min-width: 570px){
    width: 570px;
  }
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
                    <Heading size={2} template={3} left>What Are the Main Challenges for a Photography Entrepreneur?</Heading>
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

                    <TextBlockWithImage SvgImage={FinancialIcon} imageBackgroundColor={color.yellow2}
                                        imageShadowColor={color.yellow2}>
                        <Heading size={3} template={4}>
                            Financial management
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Making sure you have enough money coming
                            in to pay your bills and having a cash buffer put aside for lean times.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={RealtionshipIcon} imageBackgroundColor={color.blue2}
                                        imageShadowColor={color.blue2}>
                        <Heading size={3} template={4}>
                            Client relationship management
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Nurturing and building relationships with new, current and previous clients and encouraging
                            them to work with you.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={SeekingIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={3} template={4}>
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
