import React from "react";
import styled from "styled-components";
import ArrowLink from "../../molecules/buttons/text";

const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  @media (min-width: 576px) {
    flex-direction: row;
    margin-bottom: 0;
  }

  a {
    word-break: break-word;
    margin-bottom: 16px !important;

    @media (min-width: 576px) {
      margin-bottom: 32px important;
    }

    &:not(:first-child) {
      @media (min-width: 576px) {
        margin-left: 16px;
      }
    }
  }
`;

const ResearchTopicPath = ({ content }) => (
  <Wrapper>
    {content.map((link) => (
      <ArrowLink content={link} />
    ))}
  </Wrapper>
);

export default ResearchTopicPath;
