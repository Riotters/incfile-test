import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import Tabs from "../../../organisms/tabs/c-corp-tabs-rq"
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";

const Requirements = styled.section`
  background-color: ${color.orange3};
  position: relative;
  padding: 64px 0;

  p {
    color: ${color.grey2};
  }
`;

const RequirementsSection = ({ className, content }) => (
    <Requirements className={className}>
        <Oval className="oval" height="720" width="720" top="0" left="0">
            <OvalSVG />
        </Oval>
        <Tabs content={content.tabs}/>
    </Requirements>
  );
  
  export default RequirementsSection;