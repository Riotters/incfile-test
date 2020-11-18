import React from "react";
import styled from "styled-components";
import { color } from "../../atomic/atoms/styles/colors";

const Oval = styled.div`
  width: 32px;
  height: 32px;
  background-color: #fef6ed;
  border-radius: 32px;
  display: grid;
  place-items: center;
  margin-right: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${color.blue3};

    div {
      background-color: ${color.blue1};
    }
  }
`;

const Minus = styled.div`
  width: 14px;
  height: 3px;
  background-color: #fc9768;
  border-radius: 3px;
  transition: background-color 0.3s ease;
`;

const MinusIcon = () => (
  <Oval>
    <Minus />
  </Oval>
);

export default MinusIcon;
