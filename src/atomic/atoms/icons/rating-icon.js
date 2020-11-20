import React from "react";
import styled from "styled-components";
import { color } from "../styles/colors";
import { shadow } from "../styles/shadows";

const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  background: ${color.white};
  border-radius: 50%;
  overflow: hidden;
  box-shadow: ${shadow.white1};
  padding: 16px;
  margin-bottom: 8px;

  svg {
    width: 100%;
  }

  @media (min-width: 769px) {
    margin-bottom: 0;
  }
`;

const Rating = ({ children, className }) => <Wrapper className={className}>{children}</Wrapper>;

export default Rating;
