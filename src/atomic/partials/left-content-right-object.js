import React from "react";
import styled from "styled-components";
import Container from "../container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 992px) {
    width: 100%;
    max-width: ${(props) => (props.contentWidth ? parseInt(props.contentWidth) + 100 : "700")}px;
    padding-right: 100px;
  }

  h2 {
    text-align: left;
  }
`;

const Objectbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (min-width: 992px) {
    flex-grow: 1;
  }

  .card {
    margin: 80px auto 0;

    @media (min-width: 992px) {
      margin: 0 auto;
    }
  }
`;

const LeftContentRightObject = ({ className, object, children, contentWidth }) => {
  return (
    <Container>
      <Wrapper className={className}>
        <Content contentWidth={contentWidth}>
          {children}
        </Content>
        <Objectbox>{object}</Objectbox>
      </Wrapper>
    </Container>
  );
};

export default LeftContentRightObject;
