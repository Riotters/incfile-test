import React from "react";
import styled from "styled-components";
import UsefulTools from "../../../partials/useful-tools";
import { toolsList } from "../../../../static/type-of-business/record-label";
import OvalSvg from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import OvalSvg2 from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";

const ToolsAndLinks = () => (
  <Wrapper>
    <Oval>
      <OvalSvg />
    </Oval>
    <Oval2>
      <OvalSvg2 />
    </Oval2>

    <UsefulTools
      toolsList={toolsList.tools}
      headlineText={toolsList.headlineText}
      description={toolsList.description}
    />
  </Wrapper>
);

const Wrapper = styled.div`
  padding-top: 100px;
  margin-bottom: 200px;
  position: relative;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  top: 400px;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

export default ToolsAndLinks;
