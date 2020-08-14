import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Buttonsbox from "../../../atoms/boxes/top-buttons-box";
import Button from "../../../molecules/buttons/button";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/business-license.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange.inline.svg";

const About = styled.section`
  position: relative;
  padding-bottom: 120px;

  p {
    color: ${color.grey2};
  }
`;

const AboutSection = ({ className, content }) => (
    <About className={className}>
        <Oval className="oval" height="570" width="570" y="-40">
            <OvalSVG />
        </Oval>
        <ImageContent image="registered-agents">
            <Heading size={3} bottomMargin="40">{content.header}</Heading>
            <Paragraph big bottomMargin="40">{content.text}</Paragraph>
            <Paragraph big bottomMargin="40">{content.text2}</Paragraph>
            <Button content={content.button} theme="primary56" margin="0 auto 40px 0" arrow />
            <IconTextColorBox color={color.babyblue3} Icon={IconSVG} content={content.box} bottomMargin="40" rounded curve />
            <Paragraph big bottomMargin="40">{content.text3}</Paragraph>
            <ArrowLink content={content.link} />
            <Heading size={3} bottomMargin="40">{content.header2}</Heading>
            <Paragraph big bottomMargin="40">{content.text3}</Paragraph>
            <Paragraph big bottomMargin="40">{content.text4}</Paragraph>
            <Paragraph big bottomMargin="40">{content.text5}</Paragraph>
            <Heading size={3} bottomMargin="40">{content.header3}</Heading>
            <Paragraph big bottomMargin="40">{content.text6}</Paragraph>
            <p>List</p>
            <Paragraph big bottomMargin="40">{content.text7}</Paragraph>
            <Buttonsbox>
                <Button content={content.buttons[0]} theme="primary56" margin="0 auto 40px 0" arrow />
                <Button content={content.buttons[1]} theme="secondary56" margin="0 auto 40px 0" arrow />
            </Buttonsbox>
            <Heading size={3} bottomMargin="40">{content.header4}</Heading>
            <p>List</p>
        </ImageContent>
    </About>
  );
  
  export default AboutSection;