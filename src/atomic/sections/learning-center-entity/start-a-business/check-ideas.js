import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";

const CheckIdeas = styled.section`
  position: relative;
  padding-bottom: 120px;

  p {
    color: ${color.grey2};
  }

  ul {
      margin-bottom: 0;
  }
`;

const CheckIdeasSection = ({ className, content }) => (
    <CheckIdeas className={className}>

    </CheckIdeas>
  );
  
  export default CheckIdeasSection;