import React from "react";
import styled from "styled-components";
import { color } from "../styles/colors";

const ToolBox = ({ title }) => <ToolBoxWrapper>{title}</ToolBoxWrapper>;

const ToolBoxWrapper = styled.div`
  display: inline-block;
  background-color: ${color.blue3};
  padding: 8px 24px;
  color: ${color.blue1};
  font-family: Avenir, sans-serif;
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  border-radius: 30px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

export default ToolBox;
