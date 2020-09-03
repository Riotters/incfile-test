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
  max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : ""};
  margin: 0 auto;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (min-width: 992px) {
    max-width: ${(props) => (props.contentWidth ? props.contentWidth : "600")}px;
  }

  h2 {
    text-align: left;
  }
`;

const Objectbox = styled.div`
  width: 100%;
  padding-right: 0;

  @media (min-width: 992px) {
    max-width: ${(props) => (props.objectWidth ? `${props.objectWidth}px` : "")};
    padding-right: ${(props) => (props.objectPadding ? `${props.objectPadding}` : "100")}px;
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

const LeftContentRightObject = ({ children, className, maxWidth, object, objectWidth, objectPadding, contentWidth, headlineWidth, textWidth }) => {
  return (
    <Wrapper className={className}>
      <Container>
        <Flex maxWidth={maxWidth}>
          <Objectbox objectWidth={objectWidth} objectPadding={objectPadding}>
            <Sticky>{object}</Sticky>
          </Objectbox>
          <Content contentWidth={contentWidth} headlineWidth={headlineWidth} textWidth={textWidth}>
            {children}
          </Content>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default LeftContentRightObject;
