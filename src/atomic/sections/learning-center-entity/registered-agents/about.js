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
import LightBox from "../../../../components/LightBox";
import TopButtonsBox from "../../../atoms/boxes/top-buttons-box";
import Button from "../../../molecules/buttons/button-action";

const About = styled.section`
  position: relative;
`;

const AboutSection = ({ className, content, openHSForm }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <ImageContent image="registered-agents-about-8281">
      <Heading size={3}>{content.header}</Heading>
      <Paragraph big bottomMargin="72">
        {content.text}
      </Paragraph>
      <IconTextColorBox color={color.blue3} Icon={IconSVG} content={content.box} rounded curve bottomMargin={48} />
      <LightBox thumbnailVideo="what-is-a-registered-agent-7199" videoID="wSsZAvrT-IU" videoSchema={{
          name: "\"What is a Registered Agent?\" by Incfile",
          description: "\n" +
              "A Registered Agent is an individual or organization that receives legal documents like tax forms, subpoenas, lawsuits and summons for your business. They are required by every state if you form a business.\n" +
              "\n" +
              "Also known as an Agent for Service of Process, a Statutory Agent, or a Resident Agent, a Registered Agent receives important documents on your behalf so you don’t have to. \n" +
              "\n" +
              "You can choose to be your own Registered Agent, or you can put it in the hands of someone who is legally equipped to be your Registered Agent.\n" +
              "\n" +
              "Want to learn more about Registered Agents? Visit the links below: \n" +
              "- Incfile's Registered Agent Service (free for the first year when you incorporate with us): https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbjhUenBlejI0aV9hUnpSZWdxbnJ0SFRXeWk3d3xBQ3Jtc0tsZkZYcHhUY3BiV0ltVmJ0VW5JUDd6c2VwbkkxYjZZaWRoZzFWSEZLM0c2ekQwRy1Td2dvSEw3WUt1X1NSWW82NW5BazhsTjdjbTdvMXVCYjBJUkh2cG40RUN5bUZ1TTZ4cGpPek9DMVRBR0V0blVfOA%3D%3D&q=https%3A%2F%2Fwww.incfile.com%2Fmanage-your-company%2Fregistered-agent%2F&v=wSsZAvrT-IU\n" +
              "- Everything You Need to Know About Registered Agents: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa21ENVlneVdoV29zRzdOUnMzUEFOMkxkMVpQUXxBQ3Jtc0tuM2R2LXdfRHpPNkNwcVc0Rjk2aHl2dHIzODZORzFLd3lxcm0xVWpjSXNvYjJfQzYyY2NiMUZ6VnhBdi1mUDRUSllYN2h2VFNGZ3JzdDQ5S1Y4Zlk4aFE2Skk3YXFoRDRQVjJ5b0kxNm5mM1pNQmZYbw%3D%3D&q=https%3A%2F%2Fwww.incfile.com%2Fregistered-agents%2F&v=wSsZAvrT-IU\n" +
              "- Can I Act as My Own Registered Agent?: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGhycmMweFRWb2RpcnhDMjZwbFd6bkZmSHNoQXxBQ3Jtc0ttNkYxVmF5WWZ4R0J3bzZoVlV1NGJrR0pqWThYeEYxU1E0T1dLT2ptQTI0cGVDMndfbThFSEJHanNJb2xhYW05SWVrRnYzWEtNLUYyOVdFNW1fMFhWU2FDMlJKSGZLVzhOdnEzUlIzUnBXZmg2M1NURQ%3D%3D&q=https%3A%2F%2Fwww.incfile.com%2Fresearch-topics%2Fregistered-agent-help%2Fcan-i-act-as-my-own-registered-agent%2F&v=wSsZAvrT-IU\n" +
              "- Filing a Change of Registered Agent: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFQtRGI3MFdyUUlESGFhdkc5bWJJc3RqMnZlUXxBQ3Jtc0trTE8xeUxUdERvdWhQYWNnYzRkclpHSW13M1JfMDRfRFRxZWsta0prMDlxMThlTUdsaHRIVUlFMUxOZ1RPalphRkVLQTRKUmFNbF9oUWxORkwxTmIxeEhnR3hWaV9CdTJFdXVfcHhjY3p5MFFHZ0ZMdw%3D%3D&q=https%3A%2F%2Fwww.incfile.com%2Fmanage-your-company%2Fchange-of-registered-agent%2F&v=wSsZAvrT-IU\n",
          uploadDate: "2020-06-05",
          duration: "1:16",
          interactionCount: "595760",
      }} />
        <TopButtonsBox style={{ justifyContent: "center" }}>
            <Button onClick={openHSForm} content={content.button} theme="primary56" arrow margin="48px 0 0" />
        </TopButtonsBox>
    </ImageContent>
  </About>
);

export default AboutSection;
