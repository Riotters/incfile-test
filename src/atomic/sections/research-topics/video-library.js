import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowLink from "../../molecules/buttons/text";
import ImageContent from "../../partials/left-image-right-content";
import IconSVG from "../../../images/icons/no-pass-sign.inline.svg";
import IconTextColorBox from "../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../atoms/icons/oval";
import OvalSVG from "../../../images/ovals/top-left-transparent-blue3.inline.svg";
import Path from "../../molecules/blocks/research-topics-path";
import LightBoxVideo from "../../../components/LightBox";

const About = styled.section`
  position: relative;
  padding-bottom: 104px;
`;

const AboutSection = ({ className, content }) => (
  <About className={className} id="answers">
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <ImageContent image="web-address-search">
      <Path content={content.links} />
      <Heading size={3} bottomMargin="32">
        {content.header}
      </Heading>
      <Heading size={3} bottomMargin="24">
        {content.header2}
      </Heading>
      <LightBoxVideo thumbnailVideo="comparison-chart-video-3611" videoID="R_oIgzYh7NU" bottomMargin="48" videoSchema={{
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
      <Paragraph big bottomMargin="48">
        {content.text}
      </Paragraph>
      <Heading size={3} bottomMargin="24">
        {content.header3}
      </Heading>
      <LightBoxVideo thumbnailVideo="comparison-chart-video-3611" videoID="R_oIgzYh7NU" bottomMargin="48" videoSchema={{
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
      <Paragraph big bottomMargin="48">
        {content.text2}
      </Paragraph>
      <Heading size={3} bottomMargin="24">
        {content.header4}
      </Heading>
      <LightBoxVideo thumbnailVideo="comparison-chart-video-3611" videoID="R_oIgzYh7NU" bottomMargin="48" videoSchema={{
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
      <Paragraph big bottomMargin="48">
        {content.text3}
      </Paragraph>
    </ImageContent>
  </About>
);

export default AboutSection;
