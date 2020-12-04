import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/what-is-a-registered-agent.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-babyblue.inline.svg";
import LightBoxVideo from "../../../../components/LightBox";

const About = styled.section`
  position: relative;
  padding-bottom: 136px;
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="720" width="720" y="-40">
      <OvalSVG />
    </Oval>
    <ImageContent image="business-name-search-about-7420">
      <Paragraph big>{content.text}</Paragraph>
      <Heading size={3}>{content.header2}</Heading>
      <Paragraph big bottomMargin="56">
        {content.text2}
      </Paragraph>
      <LightBoxVideo
        thumbnailVideo="how-do-i-perform-a-business-name-search-5332"
        videoID="XePRillB3UE"
        videoSchema={{
            name: "\"How Do I Perform a Business Name Search?\" by Incfile",
            description: "\n" +
                "Picking the perfect business name is hard! Once you've narrowed down your options, you'll need to run a business entity search to ensure your preferred name is available and not already taken by another business in your state. This can be done on your state's Secretary of State website using their business lookup tool, or through Incfile's Business Name Search Tool, which searches your state's business registry for you. \n" +
                "\n" +
                "To check your business name's availability, visit the Incfile Business Name Search Tool here: https://www.youtube.com/redirect?q=https%3A%2F%2Fwww.incfile.com%2Fbusiness-name-search%2F&redir_token=QUFFLUhqazhYbmpFY2w1Q1hoQlg5Z0NtRUpmVWtJa2JfQXxBQ3Jtc0tuVlMxdlA4NHB6cjBnWkdCaW0yTnlPNTZGTF9HUF9IM2FyNGR3OUdjT05QZDhPMGtWYzNnVVRacGFISUh1ZEF4clFybllJSDBQU2RNbGVzd0YtSUJjREVVNk4tSWQ3VVNMYzQtdU9yaFp6cXd4T0pfUQ%3D%3D&event=video_description&v=XePRillB3UE.\n",
            uploadDate: "2020-07-03",
            duration: "1:18",
            interactionCount: "60",
        }}
      />
    </ImageContent>
  </About>
);

export default AboutSection;
