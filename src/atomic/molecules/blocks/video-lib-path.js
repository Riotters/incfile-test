import React from "react";
import { color } from "../../atoms/styles/colors";
import styled from "styled-components";
import Path from "../buttons/path";

const Wrapper = styled.span`
  font-family: Avenir, sans-serif;
  font-size: 16px;
  color: ${color.grey1};
  margin-bottom: 24px;

  a {
    margin-right: 10px;
    white-space: nowrap;
  }
`;

const VideoLibPath = () => (
  <Wrapper>
    <Path to="/">Home</Path>
    <Path to="/help-center/">View All Topics</Path>
    Video Library:
  </Wrapper>
);

export default VideoLibPath;
