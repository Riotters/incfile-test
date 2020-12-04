import React from "react";
import HeadingCenter from "../../partials/heading-center";
import ContentCenter from "../../partials/content-center";
import Curve from "../../atoms/icons/curve";
import Curve2SVG from "../../../images/curves/bottom-left-top-right-reverse-big.inline.svg";
import LightBoxVideo from "../../../components/LightBox";
import styled from "styled-components";
import OvalSvg from "../../../images/ovals/bottom-left-transparent-pink1.inline.svg";
import OvalSvg2 from "../../../images/ovals/oval-half-circle-orange-transparent.inline.svg";
import Oval from "../../atoms/icons/oval";

const Video = () => (
  <Wrapper>
    <Oval className="oval" height={652} width={652} top="20" left="0">
      <OvalSvg />
    </Oval>
    <Oval className="oval" height={217} width={434} top="60" right="15">
      <OvalSvg2 />
    </Oval>
    <HeadingCenter headline="See how easy it can be to get your business incorporated" textWidth="590" text="Take a moment to view our instructional video." bottomMargin="48" bottomMarginLG="80" />
    <ContentCenter className="content">
      <Curve bottom="150" left="-160" color="#ede0fa">
        <Curve2SVG />
      </Curve>
      <LightBoxVideo thumbnailVideo="how-to-start-an-llc-2379" videoID="R_oIgzYh7NU" videoSchema={{
          name: "\"How to Start an LLC\" by Incfile",
          description: "Are you ready to make your business official and protect your personal assets? Learn how to form an LLC and officially incorporate your business, including:\n" +
              "1) choosing a business name and running a business entity search in your state\n" +
              "2) finding a Registered Agent\n" +
              "3) creating an LLC operating agreement\n" +
              "4) filing your Articles of Organization\n" +
              "\n" +
              "Learn more about setting up an LLC at https://www.incfile.com/form-an-llc/",
          duration: "2:58",
          uploadDate: "2020-04-11",
          interactionCount: "2081"
      }} />
    </ContentCenter>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-top: 160px;
  position: relative;
  
  .content {
    margin-bottom: 70px;
  
    @media (min-width: 576px) {
       margin-bottom: 149px;
    } 
  }
`;

export default Video;
