import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import Tabs from "../../../organisms/tabs/llc-tabs"
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green3.inline.svg";

const About = styled.section`
  position: relative;
  padding-bottom: 64px;

  p:not([class*="i-believe-i-can-be-a-h"]) {
    color: ${color.grey2};
  }
`;

const AboutSection = ({ className, content, clickOpenModal }) => (
    <About className={className}>
        <Oval className="oval" height="570" width="570" y="-40">
            <OvalSVG />
        </Oval>
        <Tabs content={content.tabs} clickOpenModal={clickOpenModal} />
    </About>
  );
  
  export default AboutSection;