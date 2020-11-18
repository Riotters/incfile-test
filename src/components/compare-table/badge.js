import React from "react";
import styled from "styled-components";
import { color } from "../../atomic/atoms/styles/colors";

const StyledDiv = styled.div`
  background-color: ${(props) => (props.selected ? "#fcefef" : "#f2f6ff")};
  color: ${(props) => (props.selected ? "#f1a0a0" : "#5089fd")};
  font-family: "Avenir", sans-serif;
  font-size: 16px;
  font-weight: 900;
  padding: 4px 16px;
  border-radius: 16px;
  margin-bottom: 8px;
  width: fit-content;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? color.blue3 : color.red3)};
    color: ${(props) => (props.selected ? color.blue1 : color.red1)};
  }
`;

const Badge = ({ children, selected }) => (
  <StyledDiv {...{ selected }}>
    <span>{selected ? "−" : "+"}</span> {children}
  </StyledDiv>
);

export default Badge;
