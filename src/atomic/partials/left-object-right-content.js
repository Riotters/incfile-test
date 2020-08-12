import React from "react";
import styled from "styled-components";
import Container from "../container";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media(min-width: 992px) {
      flex-direction: row;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 992px) {
    width: 52%;
    max-width: 600px;
  }

  h2 {
    text-align: left;
  }
`;

const Objectbox = styled.div`
  width: 100%;
  padding-right: 0;

  @media (min-width: 992px) {
    width: 48%;
    padding-right: 100px;
  }

  .card {
    margin: 0 auto 80px;

    @media (min-width: 992px) {
      margin: 0 auto;
    }
  }
`;

const Sticky = styled.div`
  top: 100px;

  @media (min-width: 992px) {
    position: sticky !important;
  }
`;

const LeftContentRightObject = ({ children, className, object, headlineWidth, textWidth }) => {
    
  return (
    <Wrapper className={className}>
      <Container>
        <Flex>
          <Objectbox>
            <Sticky>
              { object }
            </Sticky>
          </Objectbox>
          <Content headlineWidth={headlineWidth} textWidth={textWidth}>
            { children }
          </Content>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default LeftContentRightObject;
