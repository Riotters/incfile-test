import React from "react";
import styled from "styled-components";
import parser from "html-react-parser";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Buttonsbox from "../../../atoms/boxes/top-buttons-box";
import Button from "../../../molecules/buttons/button";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/business-license.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import IconListColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";

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
    <Oval className="oval" height="570" width="570" y="-32">
      <OvalSVG />
    </Oval>
    <ImageContent image="registered-agents-about-9001">
      <Heading size={3} bottomMargin="24">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text}
      </Paragraph>
      <Paragraph big bottomMargin="40">
        {content.text2}
      </Paragraph>
      <Button content={content.button} theme="primary56" margin="0 auto 48px 0" arrow />
      <IconTextColorBox color={color.babyblue3} Icon={IconSVG} content={content.box} bottomMargin="48" rounded curve />
      <Paragraph big bottomMargin="32" mixed={true}>
        {parser(content.text3)}
      </Paragraph>
      {/* <ArrowLink content={content.link} bottomMargin="72" /> */}
      <Heading size={3} bottomMargin="24">
        {content.header2}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text4}
      </Paragraph>
      <Paragraph big bottomMargin="40">
        {content.text5}
      </Paragraph>
      <Paragraph big bottomMargin="48">
        {content.text6}
      </Paragraph>
      <Heading size={3} bottomMargin="24">
        {content.header3}
      </Heading>
      <Paragraph big bottomMargin="32">
        {content.text7}
      </Paragraph>
      <IconListColorBox color={color.orange3} content={content.box2} bottomMargin="48" rounded />
      <Paragraph big bottomMargin="32">
        {content.text8}
      </Paragraph>
      <Buttonsbox mediaXL>
        <Button content={content.buttons[0]} theme="primary56" margin="0 auto 24px 0" marginXL="0 auto 72px 0" arrow />
        <Button content={content.buttons[1]} theme="secondary56" margin="0 auto 24px 0" marginXL="0 auto 72px 0" arrow />
      </Buttonsbox>
      <Heading size={3} bottomMargin="32" style={{ marginTop: `48px` }}>
        {content.header4}
      </Heading>
      <NumericList content={content.list} bottomMargin="0" />
    </ImageContent>
  </About>
);

export default AboutSection;
