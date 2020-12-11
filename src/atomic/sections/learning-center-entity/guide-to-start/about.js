import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/relax.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import LightBox from "../../../../components/LightBox";
import TopButtonsBox from "../../../atoms/boxes/top-buttons-box";
import Button from "../../../molecules/buttons/button-action";
import {PHeading} from "../../../atoms/typography/p-to-heading";

const About = styled.section`
  position: relative;
  padding-bottom: 30px;
  
  @media (min-width: 576px) {
    padding-bottom: 120px;
  }

  p:not([class*="i-believe-i-can-be-a-h"]) {
    color: ${color.grey2};
  }

  ul {
    margin-bottom: 0;
  }
`;

const AboutSection = ({ className, content, hsOpenForm }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <ImageContent image="guide-to-start-a-business-about">
      <PHeading size={3}>{content.header}</PHeading>
      <Paragraph big bottomMargin="32">
        {content.text}
      </Paragraph>
      <IconTextColorBox color={color.babyblue3} Icon={IconSVG} content={content.box} bottomMargin="48" rounded curve paragraphHeader />
      <LightBox thumbnailVideo="comparison-chart-video-3611" videoID="M-SlUnCHmXU" />
      <Paragraph big bottomMargin="32" topMargin={32}>
        {content.text2}
      </Paragraph>
        <TopButtonsBox>
            <Button theme="primary56" content={content.button} onClick={hsOpenForm} margin="0 0 48px" arrow />
        </TopButtonsBox>
      {/*<ArrowLink content={content.link} bottomMargin="72" />*/}
    </ImageContent>
  </About>
);

export default AboutSection;
