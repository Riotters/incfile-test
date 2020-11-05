import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { Paragraph } from "../../atoms/typography/paragraph";
import ImageContent from "../../partials/left-image-right-content";
import IconSVG from "../../../images/icons/biennal-report.inline.svg";
import IconLitsColorBox from "../../molecules/text-blocks/icon-h4-list-color";
import Oval from "../../atoms/icons/oval";
import OvalSVG from "../../../images/ovals/top-left-transparent-pink.inline.svg";
import Button from "../../molecules/buttons/button";

const About = styled.section`
  position: relative;
  padding-bottom: 120px;

  ul {
    margin-bottom: 0;
  }
`;

const AboutSection = ({ className, content }) => {
  const scrollToElement = (e, l) => {
    e.preventDefault();

    const el = document.getElementById(l);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <About className={className}>
      <Oval className="oval" height="570" width="570" y="-40">
        <OvalSVG />
      </Oval>
      <ImageContent image="clipboard-9010">
        <Paragraph big bottomMargin="48">
          {content.text}
        </Paragraph>
        <IconLitsColorBox color={color.babyblue3} Icon={IconSVG} content={content.box} bottomMargin="48" rounded curve curveColor={color.blue1} />
        <Button theme="primary56" content={content.button} arrow margin="0 auto 0 0" onClick={(e) => scrollToElement(e, "js-form")} />
      </ImageContent>
    </About>
  );
};

export default AboutSection;
