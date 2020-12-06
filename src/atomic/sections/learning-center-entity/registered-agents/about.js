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
      <Heading size={2} template={3} left>{content.header}</Heading>
      <Paragraph big bottomMargin="72">
        {content.text}
      </Paragraph>
      <IconTextColorBox color={color.blue3} Icon={IconSVG} content={content.box} rounded curve bottomMargin={48} headingSize={3} />
      <LightBox thumbnailVideo="what-is-a-registered-agent-7199" videoID="wSsZAvrT-IU" />
        <TopButtonsBox style={{ justifyContent: "center" }}>
            <Button onClick={openHSForm} content={content.button} theme="primary56" arrow margin="48px 0 0" />
        </TopButtonsBox>
    </ImageContent>
  </About>
);

export default AboutSection;
