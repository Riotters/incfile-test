import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/no-pass-sign.inline.svg";
import IconListColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import Path from "../../../molecules/blocks/research-topics-path";

const About = styled.section`
  position: relative;
  padding-bottom: 32px;

  @media (min-width: 992px) {
    padding-bottom: 104px;
  }

  ul {
    margin-left: -24px;
  }
`;

const AboutSection = ({ className, content }) => (
  <About className={className} id="answers">
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <ImageContent image="web-address-search">
      <Path content={content.links} />
      <Heading size={1} template={3} bottomMargin="32">
        {content.header}
      </Heading>
      <IconListColorBox
        content={content.list}
        color={color.purple2}
        rounded
        paragraphHeader
        bottomMargin="40"
      />
      <IconListColorBox
        content={content.list2}
        color={color.yellow2}
        curve
        curveColor={color.green2}
        rounded
        paragraphHeader
        bottomMargin="40"
      />
      <IconListColorBox
        content={content.list3}
        color={color.babyblue2}
        rounded
        paragraphHeader
        bottomMargin="40"
      />
      <IconListColorBox
        content={content.list4}
        color={color.green2}
        curve
        paragraphHeader
        curveColor={color.orange2}
        rounded
      />
    </ImageContent>
  </About>
);

export default AboutSection;
