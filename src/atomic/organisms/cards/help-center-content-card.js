import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import LightBoxVideo from "../../../components/LightBox";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 16px;
    overflow: unset;

    @media (min-width: 576px) {
      padding: 32px;
    }
  }

  h2 {
    text-align: left;
  }
`;

const ContentCard = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Whitebox className="card" overflow>
        <Heading size="2">Video Library</Heading>
        <Heading size="3" topMargin="48" bottomMargin="48">
          How easy is forming an LLC or corporation
        </Heading>
        <Paragraph big bottomMargin="24">
          Shows how easy and inexpensive it is to have your very own corporation or LLC. Just watch the simple 3 step process and you will have completed all the steps to forming your new business entity.
        </Paragraph>
        <LightBoxVideo thumbnailVideo="what-is-an-s-corp-7321" videoID="97238919" vimeo videoSchema={{
            name: "How to form an LLC",
            image: "https://i.vimeocdn.com/video/477541274_640.jpg",
            description: "",
            uploadDate: "2014-06-03 12:16:51",
            duration: "1:10",
            interactionCount: "34834",
        }} />
        <Heading size="3" topMargin="48" bottomMargin="48">
        Protect your personal assets
        </Heading>
        <Paragraph big bottomMargin="24">
          By incorporating your business, you are essentially drawing a line of demarkation between your personal assets and the assets owned by the business. After all, who wants their hard-earned savings or child’s college fund wiped out due to some unforeseen trouble with a business venture?
        </Paragraph>
        <LightBoxVideo thumbnailVideo="how-to-start-a-consulting-business-9829" videoID="144693528" vimeo videoSchema={{
            name: "Protect Your Personal Assets By Incorporating Your Business.",
            image: "https://i.vimeocdn.com/video/542593614_640.jpg",
            description: "Protect Your Personal Assets By Incorporating Your Business.",
            uploadDate: "2015-11-04 18:55:13",
            duration: "1:00",
            interactionCount: "1584",
        }} />
        <Heading size="3" topMargin="48" bottomMargin="48">
          Learn how to save money with incfile
        </Heading>
        <Paragraph big bottomMargin="24">
          There are a multitude of companies on the web that perform the function of starting new entities. You will pay less to get more value with Incfile, view some distinguishing features that separate us from other companies.
        </Paragraph>
        <LightBoxVideo thumbnailVideo="starting-a-cashless-business-4929" videoID="117685402" vimeo videoSchema={{
            name: "See How Incfile.com Saves You Money",
            image: "https://i.vimeocdn.com/video/504540462_640.jpg",
            description: "Incfile.com offers the best pricing starting as low as $49 + state filing fees while also providing you with Registered Agent service FREE. See what other FREE items are included when you choose www.incfile.com to assist with starting an LLC or Corporation.",
            uploadDate: "2015-01-24 15:50:40",
            duration: "2:06",
            interactionCount: "78985",
        }} />
      </Whitebox>
    </Wrapper>
  );
};

export default ContentCard;
