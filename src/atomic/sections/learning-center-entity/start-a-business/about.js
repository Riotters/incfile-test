import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/rocket2.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-red3.inline.svg";
import LightBox from "../../../../components/LightBox";

const About = styled.section`
  position: relative;
  padding-bottom: 120px;

  p {
    color: ${color.grey2};
  }

  ul {
    margin-bottom: 0;
  }
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <ImageContent image="business-startup-guides-about-321">
      <Heading size="3" bottomMargin="32">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text}
      </Paragraph>
      <IconTextColorBox color={color.green3} Icon={IconSVG} content={content.box} bottomMargin="48" rounded curve />
      <Paragraph big bottomMargin="48">
        {content.text2}
      </Paragraph>
        <LightBox thumbnailVideo="how-to-come-up-with-a-business-idea-9920" videoID="6ItzICKbe_0" videoSchema={{
            name: "\"How to Come Up with a Business Idea\" by Incfile",
            description: "\n" +
                "Want to become an entrepreneur but aren't sure what type of business to start? Here are five questions you can ask yourself to come up with the perfect business idea for you. \n" +
                "\n" +
                "Step 1: Ask \"What am I good at?\"\n" +
                "Step 2: Ask \"What do I love to do?\"\n" +
                "Step 3: Ask \"What problems can I solve?\"\n" +
                "Step 4: Ask \"What can you improve upon?\"\n" +
                "Step 5: \"Where is the money?\" \n" +
                "\n" +
                "Asking yourself these questions helps you brainstorm business ideas that you're passionate about and that serve a need in your market. If you want more ideas, check out Incfile's Business Startup Guides for everything from opening a brewery to starting an Amazon business at the link below. \n" +
                "\n" +
                "Helpful Resources:\n" +
                "\n" +
                "- File your official business incorporation paperwork for free at www.incfile.com\n" +
                "- Browse types of businesses you can start and see business ideas by industry at https://www.youtube.com/redirect?event=video_description&v=6ItzICKbe_0&q=https%3A%2F%2Fwww.incfile.com%2Fstart-a-business%2F&redir_token=QUFFLUhqbFFjbnh6Q1lncUdwTWJUTGc0dE5Send4R0lDQXxBQ3Jtc0tsWGhBOVdEdDRCZnNsRTdKbXVRclFtNUlWdmNzNHVWV3pjTG1EVXZJQ09Ec2tkRTU4VFlidUExaEF2UE1sZlB3QkM4UjRqRnB2Yi1IdW84RHQxcGp6U0syLXlRVGNMZHAxZFA5bjZ3djFSa1lITGY3NA%3D%3D\n",
            uploadDate: "2020-07-14",
            duration: "1:26",
            interactionCount: "182",
        }} />
    </ImageContent>
  </About>
);

export default AboutSection;
