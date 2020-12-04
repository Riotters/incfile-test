import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentCenter from "../../../partials/content-center";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-left-right-orange2-big.inline.svg";
import Customers from "./customers";
import { gradient } from "../../../atoms/styles/colors";
import Oval from "../../../atoms/icons/oval";
import TopRightOvalSVG from "../../../../images/ovals/home-page-v3-setup-business-top-right.inline.svg";
import TopLeftOvalSVG from "../../../../images/ovals/home-page-v3-customers-top-left.inline.svg";
import LightBoxVideo from "../../../../components/LightBox";

const Wrapper = styled.div`
  position: relative;
  background: ${gradient.orange3};

  .section-content {
    padding-top: 100px;
  }

  .oval {
    overflow: hidden;
  }
`;

const Video = styled.div`
  width: 100%;
  max-width: 770px;
  background-color: ${color.orange3};
  position: relative;
`;

const SetupYourBusiness = ({ className, content }) => (
  <Wrapper>
    <Oval className="oval" height="570" width="570" top="21" right="0">
      <TopRightOvalSVG />
    </Oval>
    <Oval className="oval" height="720" width="720" top="53" left="0">
      <TopLeftOvalSVG />
    </Oval>
    <ContentCenter contentWidth={1140} className="section-content">
      <Heading size={2} maxWidth={770}>
        {content.header}
      </Heading>
      <Paragraph big bottomMargin={52}>
        {content.text}
      </Paragraph>
      <Video>
        <Curve top="-115" left="-115" color={color.purple2}>
          <CurveSVG />
        </Curve>
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
      </Video>
    </ContentCenter>

    <Customers content={content} />
  </Wrapper>
);

export default SetupYourBusiness;
