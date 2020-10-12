import React from "react";
import styled from "styled-components";
import { Collapse } from "react-collapse";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: ${(props) => (props.layout !== "grid" ? "670px" : "")};
  margin-left: auto;
  padding-top: 24px;
`;

const PageContent = ({ children, content }) => (
  <Collapse isOpened={true}>
    <Wrapper>{children}</Wrapper>
  </Collapse>
);

export default PageContent;
