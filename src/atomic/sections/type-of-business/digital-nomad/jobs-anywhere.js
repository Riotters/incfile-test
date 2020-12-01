import React from "react";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { gradient } from "../../../atoms/styles/colors";
import UpWorkLogo from "../../../../images/Upwork-logo.inline.svg";
import DesignLogo from "../../../../images/99-designs-logo.inline.svg";
import AirBnbLogo from "../../../../images/airbnb-full-logo.inline.svg";
import FiverrLogo from "../../../../images/fiverr-logo.inline.svg";
import FreelancerLogo from "../../../../images/freelancer-logo.inline.svg";
import LyftLogo from "../../../../images/lyft-logo.inline.svg";
import TaskRabbitLogo from "../../../../images/taskrabbit-logo.inline.svg";
import ToptalLogo from "../../../../images/toptal-logo.inline.svg";
import UberLogo from "../../../../images/uber-12-logo.inline.svg";
import { shadow } from "../../../atoms/styles/shadows";
import { Link } from "gatsby";

const JobsAnywhere = () => (
  <Wrapper>
    <Oval>
      <OvalSvg />
    </Oval>

    <Oval2>
      <OvalSvg />
    </Oval2>

    <Container style={{ paddingTop: "100px", paddingBottom: "100px" }} width={750}>
      <TextCenterLayout headline="Jobs You Can Do From Anywhere" headlineWidth={750} />

      <Paragraph big style={{ paddingTop: "100px" }}>
        If you want to be a digital nomad, the most important question you need to ask is what type of business you can successfully run remotely. If you already have a professional skill like coding and development, design, writing, video production or photography, these are all perfect candidates
        for turning your skill into a digital nomad business and traveling the world while working.
      </Paragraph>
      <Paragraph big>
        If you don't have a skill like that, you will need to find a type of business you can run from any location. Those types of businesses are not likely to be service driven, as you would have to learn to carry out the service at the same time as starting up a business — not an easy task.
      </Paragraph>
      <Paragraph big>Fortunately, there are plenty of ideas for those types of businesses — selling online through marketplaces like Amazon or eBay, creating information products, affiliate marketing, blogging, social media marketing and more.</Paragraph>
      <Paragraph mixed big>
        If you're stuck for inspiration, here's a{" "}
        <a href="https://choosytraveler.com/digital-nomad-job-ideas/" target="_blank" rel="noopener noreferrer">
          list of more than 500 ideas for a digital nomad business
        </a>
        .
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

    <Container style={{ paddingTop: "80px", paddingBottom: "100px" }} width={750}>
      <Paragraph mixed big style={{ paddingTop: "0px" }}>
        There are also plenty of marketplaces where you can offer freelance services as a digital nomad — some of the most popular are{" "}
        <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer">
          UpWork
        </a>
        ,{" "}
        <a href="https://www.freelancer.com/" target="_blank" rel="noopener noreferrer">
          Freelancer
        </a>
        ,{" "}
        <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer">
          Fiverr
        </a>
        ,{" "}
        <a href="https://99designs.com/" target="_blank" rel="noopener noreferrer">
          99 Designs
        </a>{" "}
        and{" "}
        <a href="https://www.toptal.com/" target="_blank" rel="noopener noreferrer">
          Toptal
        </a>
        . Big gig economy marketplaces like{" "}
        <a href="https://www.airbnb.com/" target="_blank" rel="noopener noreferrer">
          AirBnB
        </a>
        ,{" "}
        <a href="https://www.uber.com/" target="_blank" rel="noopener noreferrer">
          Uber
        </a>
        ,{" "}
        <a href="https://www.lyft.com/" target="_blank" rel="noopener noreferrer">
          Lyft
        </a>{" "}
        and{" "}
        <a href="https://www.taskrabbit.com/" target="_blank" rel="noopener noreferrer">
          Taskrabbit
        </a>{" "}
        can also provide plenty of opportunities. Just because you are offering services through another business marketplace doesn't mean you're not a business in your own right.
      </Paragraph>
      <Paragraph big>Finally, becoming a digital nomad comes with its own set of challenges. You must be extremely focused and very flexible, roll with internet delays and be comfortable with living and working in an isolating environment.</Paragraph>
      <Paragraph mixed big>
        You can also find <Link to="/blog/post/is-becoming-a-digital-nomad-right-for-you/">additional guidance in understanding if a digital nomad business is right for you</Link>. If this blog post, we'll help you analyze if your digital nomad business iead is a good one, conduct market research
        and build a business plan.
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
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  top: 599px;
  width: 100%;
  z-index: -1;
  transform: scaleX(-1);

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const LogosContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 30px;
    margin-top: 76px;
    margin-bottom 76px; 
    
    @media (min-width: 390px){
        grid-template-columns: 370px;
    }
    
    @media (min-width: 768px){
        grid-template-columns: 370px 370px;
    }
    
    @media (min-width: 1200px){
        grid-template-columns: 370px 370px 370px;
    }
`;

const LogoBox = styled.div`
  background-color: white;
  box-shadow: ${shadow.white1};
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 370px;
  }
`;

export default JobsAnywhere;
