import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import Image from "../../../atoms/image/image_nobase64";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-pink1.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-left-transparent-red3.inline.svg";
import BoxedButton from "../../../molecules/buttons/boxed";
import PlayerSVG from "../../../../images/icons/player.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";
import Curve2SVG from "../../../../images/curves/bottom-left-top-right-reverse-big.inline.svg";
import LightBoxVideo from "../../../../components/LightBox";

const Service = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 120px;
  overflow: hidden;
`;

const Video = styled.div`
  width: 100%;
  max-width: 770px;
  background-color: ${color.orange3};
  position: relative;

  &::before {
    content: "";
    display: block;
    padding-top: 56.23%;
  }

  .gatsby-image-wrapper {
    overflow: hidden;
    border-radius: 6px;
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const PlayButton = styled.button`
  width: 80px;
  height: 80px;
  background-color: ${color.orange1};
  border: 0;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease;
  cursor: pointer;

  span {
    display: block;
    height: 21px;
    width: 21px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
  }
`;

const ServiceSection = ({ className, content }) => (
  <Service className={className}>
    <Oval className="oval" height="652" width="652" bottom="5" left="0">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="300" width="300" top="48" left="50" x="122">
      <Oval2SVG />
    </Oval>
    <Curve bottom="270" left="80" color={color.purple2}>
      <Curve2SVG />
    </Curve>
    <HeadingCenter headline={content.header} textWidth="770" text={content.text} bottomMargin="48" bottomMarginLG="80" />
    <ContentCenter>
      {/* <Video>
        <Curve top="-25" right="-29" color={color.purple1}>
          <CurveSVG />
        </Curve>
        <Image filename="comparison-chart-video-3611" />
        <PlayButton>
          <span>
            <PlayerSVG />
          </span>
        </PlayButton>
      </Video> */}
      <LightBoxVideo thumbnailVideo="comparison-chart-video-3611" videoID="R_oIgzYh7NU" videoSchema={{
              name: "\"How to Start an LLC\" by Incfile",
              description: "\n" +
                  "Are you ready to make your business official and protect your personal assets? Learn how to form an LLC and officially incorporate your business, including:\n" +
                  "1) choosing a business name and running a business entity search in your state\n" +
                  "2) finding a Registered Agent\n" +
                  "3) creating an LLC operating agreement\n" +
                  "4) filing your Articles of Organization\n" +
                  "\n" +
                  "Learn more about setting up an LLC at https://www.incfile.com/form-an-llc/\n" +
                  "\n" +
                  "Additional Resources: \n" +
                  "Incfile's 'Business Name Search' tool: https://www.youtube.com/redirect?redir_token=QUFFLUhqbjQyVTh6UE8yendwekk2SEd4QWZWM0pxNHVNQXxBQ3Jtc0tsSGxrX1FEQ0dDd2xnSU1CSkVoc2o4TkR3Wm9UMmxOLVBHZkY5VUljMGw0VWw1MjFSeGJQVzRSbEVYNUVNQ1VWb3U5aURzUzRPXzNsQ1JXM1RDbG81RWpmcXpubmI0bzkxc0l2R0JyZF9oYzBISlZ3RQ%3D%3D&event=video_description&v=R_oIgzYh7NU&q=https%3A%2F%2Fwww.incfile.com%2Fbusiness-name-search%2F\n" +
                  "State-by-State Guides to Starting an LLC: https://www.youtube.com/redirect?redir_token=QUFFLUhqa0pNUmM5bzEzdTRxUVAwN01aRW1PMDU5ZW42UXxBQ3Jtc0tsNnJ3UDlkU2F3aVYxbW4yS2dSWDc3OVVqdEp1VUFGaWUyQkdzMmpUX1Z3aGVjbWxKNG1NTDRuYlpNUDZLRTBaaGQxeERVcHZQYjRtWnhaUmdWTnpwMXVpTjBOZ055OFlvajhKYTBRbUE4Z2dGb1JUWQ%3D%3D&event=video_description&v=R_oIgzYh7NU&q=https%3A%2F%2Fwww.incfile.com%2Fllc-state-information%2F\n",
              uploadDate: "2020-04-11",
              duration: "2:58",
              interactionCount: "2084",
          }} />
    </ContentCenter>
  </Service>
);

export default ServiceSection;
