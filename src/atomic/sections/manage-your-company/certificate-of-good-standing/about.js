import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconListColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-right-transparent-babyblue2.inline.svg";
import ExistenceSVG from "../../../../images/icons/certificate-of-existence.inline.svg";
import AuthorizationSVG from "../../../../images/icons/certificate-of-authorization.inline.svg";
import StatusSVG from "../../../../images/icons/certificate-of-status.inline.svg";
import {PHeading} from "../../../atoms/typography/p-to-heading";

const About = styled.section`
  position: relative;
  padding-bottom: 64px;

  p:not(.i-believe-i-can-be-a-h2):not(.i-believe-i-can-be-a-h3):not(.i-believe-i-can-be-a-h4):not(.i-believe-i-can-be-a-h5) {
    color: ${color.grey2};
  }
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  .box {
    background-color: ${color.babyblue3};
    position: relative;
    padding: 35px 35px 35px 88px;
    border-radius: 5px 5px 5px 5px;

    &:not(:last-child) {
      margin-bottom: 8px;
    }

    @media (min-width: 769px) {
      &:nth-child(1) {
        border-radius: 20px 20px 5px 5px;
      }

      &:nth-child(2) {
        border-radius: 5px 5px 5px 5px;
      }

      &:nth-child(3) {
        border-radius: 5px 5px 20px 20px;
      }
    }

    svg {
      position: absolute;
      top: 50%;
      left: 40px;
      transform: translateY(-50%);
    }

    h3 {
      padding: 0;
    }
  }
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="420" width="420" top="62" right="0">
      <Oval2SVG />
    </Oval>
    <ImageContent image="certificate-about" alt="File a Certificate of Good Standing">
      <Heading size={2} template={3} left bottomMargin="24">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text}
      </Paragraph>
      <PHeading size={3} bottomMargin="32">
        {content.header2}
      </PHeading>
      <Boxes>
        <div className="box">
          <ExistenceSVG />
          <PHeading size={4} bottomMargin={0}>Certificate of Existence</PHeading>
        </div>
        <div className="box">
          <AuthorizationSVG />
          <PHeading size={4} bottomMargin={0}>Certificate of Authorization</PHeading>
        </div>
        <div className="box">
          <StatusSVG />
          <PHeading size={4} bottomMargin={0}>Certificate of Status</PHeading>
        </div>
      </Boxes>
      <Paragraph big bottomMargin="72">
        {content.text2}
      </Paragraph>
      <Heading size={2} template={3} left bottomMargin="24">
        {content.header3}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text3}
      </Paragraph>
      <IconListColorBox color={color.yellow3} content={content.box} bottomMargin="48" rounded paragraphHeader />
      <Paragraph big bottomMargin="72">
        {content.text4}
      </Paragraph>
      <Heading size={2} template={3} left bottomMargin="24">
        {content.header4}
      </Heading>
      <Paragraph big mixed bottomMargin="40">
        {parse(content.text5)}
      </Paragraph>
      <IconListColorBox color={color.orange3} content={content.box2} bottomMargin="48" rounded paragraphHeader />
      <Paragraph big bottomMargin="0">
        {content.text6}
      </Paragraph>
    </ImageContent>
  </About>
);

export default AboutSection;
