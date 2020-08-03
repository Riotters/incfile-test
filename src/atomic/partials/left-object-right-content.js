import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media(min-width: 768px) {
      flex-direction: row;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    width: 52%;
    max-width: 600px;
  }
`;

const Objectbox = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    width: 48%;
    padding-right: 100px;
  }
`;

const LeftContentRightObject = ({ children, className, object, headlineWidth, textWidth }) => {
    
  return (
        <Wrapper className={className}>
          <Objectbox>
            { object }
          </Objectbox>
          <Content headlineWidth={headlineWidth} textWidth={textWidth}>
            { children }
          </Content>
        </Wrapper>
  );
};

export default LeftContentRightObject;
