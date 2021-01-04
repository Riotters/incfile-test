import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalBlueSVG from "../../../../images/ovals/top-right-transparent-blue3.inline.svg";
import TextCenterLayout from "../../../partials/heading-center";
import BoltIcon from "../../../../images/icons/expect-to-be-stressed-and-anxious.inline.svg";
import BookIcon from "../../../../images/icons/grow-organically.inline.svg";
import LearnIcon from "../../../../images/icons/learn-from-your-mistakes.inline.svg";
import BallsIcon from "../../../../images/icons/there-will-always-be-too-much-to-do-and-too-little-money.inline.svg";
import HeartIcon from "../../../../images/icons/there-are-plenty-of-people-out-there-who-can-help.inline.svg";
import CompetitionIcon from "../../../../images/icons/theres-lots-and-lots-of-competition.inline.svg";
import BombIcon from "../../../../images/icons/the-biggest-issue-you-will-have-is-cash-flow.inline.svg";
import PaperIcon from "../../../../images/icons/prepare-and-file-the-articles-of-incorporation.inline.svg";

const ContainerWrapper = styled.div`
    background: rgb(255,255,255);
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 40%, #f2f6ff);
    padding-bottom: 100px;
    position: relative;
    padding-top: 100px;
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
  right: 0;
  top: 599px;
  width: 100%;
  
  @media (min-width: 570px){
    width: 570px;
  }
`

const Expecting = () => (
    <ContainerWrapper>
        <OvalCenter>
            <OvalBlueSVG/>
        </OvalCenter>

        <TitleBox>
            <TextCenterLayout headline="What to Expect When Starting a Business with Low Capital"
                              text="As a new entrepreneur, here’s what you can expect throughout the lifecycle of starting, running and growing a business with a lack of finances!"/>
        </TitleBox>

        <Container>

            <GridSection>
                <GridSectionList>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={BallsIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={3} template={4}>
                            There will always be too much to do and too little money
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You will need to balance time, effort, money and outcomes on a constant basis.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={BombIcon} imageBackgroundColor={color.yellow2}
                                        imageShadowColor={color.yellow2}>
                        <Heading size={3} template={4}>
                            The biggest issue you will have
                            is cash flow
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You will need to minimize and strictly control costs. You must manage your finances on a
                            daily basis and quickly build up a financial buffer.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={CompetitionIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={3} template={4}>
                            There is lots (and lots) of competition
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Some of them will have money, some of them won’t. Competition is a fact of life and shows
                            there’s
                            a demand for what you’re offering.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={HeartIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.red2}>
                        <Heading size={3} template={4}>
                            There are plenty of people out there who can help
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            And they don’t all cost money! Although you can pay for professional help, taking part in
                            online discussion groups, meetups and networking events can often get you some good advice
                            for free.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={PaperIcon} imageBackgroundColor={color.blue2}
                                        imageShadowColor={color.blue2}>
                        <Heading size={3} template={4}>
                            Getting your idea and product or service fit right is essential
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Although you won’t be risking as much financially, you should always spend at least as long
                            researching and validating your idea as you do on setting up your business.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={BookIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={3} template={4}>
                            Grow organically
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Without the cash for big marketing efforts or customer pushes, you should grow organically
                            and sustainably instead.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={LearnIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={3} template={4}>
                            Learn from your mistakes
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You'll make plenty of them; just make sure they’re not irreversible.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={BoltIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={3} template={4}>
                            Expect to be stressed and anxious
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            A lack of money is stressful. Until you see sustainable success, expect some sleepless
                            nights.
                        </Paragraph>
                    </TextBlockWithImage>
                </GridSectionList>
            </GridSection>

        </Container>
    </ContainerWrapper>
);

export default Expecting;
