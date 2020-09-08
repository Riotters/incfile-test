import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import Tabs from "../../../organisms/tabs/comparison-chart-tabs";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-right-transparent-babyblue3.inline.svg";

const About = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 0;

  @media (min-width: 992px) {
    padding-top: 0;
    padding-bottom: 64px;
  }

  p {
    color: ${color.grey2};
  }
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="420" width="420" top="38" right="0">
      <Oval2SVG />
    </Oval>
    <Tabs content={content.tabs} />
  </About>
);

export default AboutSection;
