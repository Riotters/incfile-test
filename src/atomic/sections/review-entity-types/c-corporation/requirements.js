import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import Tabs from "../../../organisms/tabs/c-corp-tabs-rq";

const Requirements = styled.section`
  background-image: ${gradient.orange3};
  position: relative;
  padding: 64px 0;

  p {
    color: ${color.grey2};
  }
`;

const RequirementsSection = ({ className, content }) => (
  <Requirements className={className}>
    <Tabs content={content.tabs} />
  </Requirements>
);

export default RequirementsSection;
