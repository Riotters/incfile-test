import React from "react";
import styled from "styled-components";
import Container from "../container"

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
    width: 60%;
    max-width: 700px;
    padding-right: 100px;
  }
`;

const Objectbox = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const LeftContentRightObject = ({ className, object, children, headlineWidth, textWidth }) => {
    
  return (
      <Container>
        <Wrapper className={className}>
          <Content headlineWidth={headlineWidth} textWidth={textWidth}>
            { children }
          </Content>
          <Objectbox>
            { object }
          </Objectbox>
        </Wrapper>
      </Container>
  );
};

export default LeftContentRightObject;
