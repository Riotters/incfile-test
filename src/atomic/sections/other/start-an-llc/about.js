import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import Tabs from "../../../organisms/tabs/start-an-llc-tabs";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-babyblue.inline.svg";

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
    <Tabs content={content.tabs} />
  </About>
);

export default AboutSection;
