import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    width: 60%;
    max-width: 700px;
    padding-right: 100px;
  }

  h2 {
    max-width: ${props => (props.headlineWidth ? props.headlineWidth : "")}px;
  }

  p {
    max-width: ${props => (props.textWidth ? props.textWidth : "")}px;
  }

  h2 {
    text-align: left;
    padding-bottom: 56px;
  }

  h4 {
    padding-bottom: 24px;
  }

  p {
    padding-bottom: 24px;
  }
`;

const Objectbox = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;

const LeftContentRightObject = ({ children, className, object, headlineWidth, textWidth }) => {
    
  return (
        <Wrapper className={className}>
          <Content headlineWidth={headlineWidth} textWidth={textWidth}>
            { children }
          </Content>
          <Objectbox>
            { object }
          </Objectbox>
        </Wrapper>
  );
};

export default LeftContentRightObject;
