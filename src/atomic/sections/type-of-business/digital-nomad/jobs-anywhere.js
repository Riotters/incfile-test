import React from "react";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import {Paragraph} from "../../../atoms/typography/paragraph";
import {gradient} from "../../../atoms/styles/colors";
import UpWorkLogo from "../../../../images/Upwork-logo.inline.svg";
import DesignLogo from "../../../../images/99-designs-logo.inline.svg";
import AirBnbLogo from "../../../../images/airbnb-full-logo.inline.svg";
import FiverrLogo from "../../../../images/fiverr-logo.inline.svg";
import FreelancerLogo from "../../../../images/freelancer-logo.inline.svg";
import LyftLogo from "../../../../images/lyft-logo.inline.svg";
import TaskRabbitLogo from "../../../../images/taskrabbit-logo.inline.svg";
import ToptalLogo from "../../../../images/toptal-logo.inline.svg";
import UberLogo from "../../../../images/uber-12-logo.inline.svg";
import {shadow} from "../../../atoms/styles/shadows";

const JobsAnywhere = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>

        <Oval2>
            <OvalSvg/>
        </Oval2>

        <Container style={{paddingTop: "100px", paddingBottom: "100px"}} width={750}>
            <TextCenterLayout headline="Jobs You Can Do From Anywhere" headlineWidth={750}/>

            <Paragraph big style={{paddingTop: "100px"}}>
                If you want to be a digital nomad, the most important question you need to ask is what type of business
                you can successfully run remotely. If you already have a professional skill like coding and development,
                design, writing, video production or photography, these are all perfect candidates for turning your
                skill into a digital nomad business and traveling the world while working.
            </Paragraph>
            <Paragraph big>
                If you don't have a skill like that, you will need to find a type of business you can run from any
                location. Those types of businesses are not likely to be service driven, as you would have to learn to
                carry out the service at the same time as starting up a business — not an easy task.
            </Paragraph>
            <Paragraph big>
                Fortunately, there are plenty of ideas for those types of businesses — selling online through
                marketplaces like Amazon or eBay, creating information products, affiliate marketing, blogging, social
                media marketing and more.
            </Paragraph>
            <Paragraph big>
                If you're stuck for inspiration, here's a list of more than 500 ideas for a digital nomad business.
            </Paragraph>
        </Container>

        <LogosContainer>
            <LogoBox>
                <UpWorkLogo />
            </LogoBox>

            <LogoBox>
                <FiverrLogo />
            </LogoBox>

            <LogoBox>
                <AirBnbLogo />
            </LogoBox>

            <LogoBox>
                <FreelancerLogo />
            </LogoBox>

            <LogoBox>
                <DesignLogo />
            </LogoBox>

            <LogoBox>
                <UberLogo />
            </LogoBox>

            <LogoBox>
                <ToptalLogo />
            </LogoBox>

            <LogoBox>
                <LyftLogo />
            </LogoBox>

            <LogoBox>
                <TaskRabbitLogo />
            </LogoBox>

        </LogosContainer>

        <Container style={{paddingTop: "80px", paddingBottom: "100px"}} width={750}>
            <Paragraph big style={{paddingTop: "0px"}}>
                There are also plenty of marketplaces where you can offer freelance services as a digital nomad — some of the most popular are UpWork, Freelancer, Fiverr, 99 Designs and Toptal. Big gig economy marketplaces like AirBnB, Uber, Lyft and Taskrabbit can also provide plenty of opportunities. Just because you are offering services through another business marketplace doesn't mean you're not a business in your own right.
            </Paragraph>
            <Paragraph big>
                Finally, becoming a digital nomad comes with its own set of challenges. You must be extremely focused and very flexible, roll with internet delays and be comfortable with living and working in an isolating environment.
            </Paragraph>
            <Paragraph big>
                You can also find additional guidance in understanding if a digital nomad business is right for you. If this blog post, we'll help you analyze if your digital nomad business iead is a good one, conduct market research and build a business plan.
            </Paragraph>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    background-image: ${gradient.blue3};
    position: relative;
`;

const Oval = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 570px;
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    right: 0;
    top: 599px;
    width: 720px;
    z-index: -1;
    transform: scaleX(-1);
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

const LogosContainer = styled.div`
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (min-width: 1230px) {
        width: 1230px;
        margin: 0 auto;
    }
`;

const LogoBox = styled.div`
    background-color: white;
    box-shadow: ${shadow.white1};
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 370px;
    margin-bottom: 30px;
`;

export default JobsAnywhere;
