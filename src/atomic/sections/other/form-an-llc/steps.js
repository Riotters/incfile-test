import React from "react";
import styled from "styled-components";

import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import { color } from "../../../atoms/styles/colors";
import Button from "../../../molecules/buttons/button";
import { Heading } from "../../../atoms/typography/heading";
import LightBoxVideo from '../../../../components/LightBox';
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import ContentObject from "../../../partials/left-content-right-object";
import OvalSVG from "../../../../images/ovals/top-right-orange1-to-transparent.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";

const Steps = styled.section`
  position: relative;
  padding: 108px 0;
  background-color: ${color.blue3};
`;

const Video = styled.div`
  width: 100%;
  max-width: 770px;
  background-color: ${color.orange3};
  position: relative;

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

const StepsSection = ({ className, content }) => (
  <Steps className={className}>
    <Oval className="oval" height="720" width="720" top="0" right="0">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="420" width="420" bottom="0" left="0">
      <Oval2SVG />
    </Oval>
    <ContentObject
      object={
        <Video>
          <Curve top="-25" right="-29" color={color.purple1}>
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
      }
      contentWidth="500"
      contentCenter
    >
      <Heading size="2" bottomMargin="48" style={{ position: `relative` }}>
        {content.header}
      </Heading>
      <NumericList content={content.list} bottomMargin="0" noBox />
      <Button theme="primary56" content={content.button} marginSM="0 auto 0 0" arrow />
    </ContentObject>
  </Steps>
);

export default StepsSection;
