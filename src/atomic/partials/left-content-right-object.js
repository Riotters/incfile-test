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
  justify-content: ${props => props.contentCenter ? "center" : ""};
  width: 100%;

  @media (min-width: 992px) {
    padding-right: 100px;
    max-width: 500px;
  }

  @media (min-width: 1200px) {
    max-width: ${(props) => (props.contentWidth ? parseInt(props.contentWidth) + 100 : "700")}px;
  }

  h2 {
    text-align: left;
  }
`;

const Sticky = styled.div`
    display: block;
    width: 100%;
    position: sticky !important;
    top: 100px;
`;

const Objectbox = styled.div`
  display: flex;
  flex-direction: column;

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

const LeftContentRightObject = ({ className, object, children, contentWidth, contentCenter }) => {
  return (
    <Container>
      <Wrapper className={className}>
        <Content contentWidth={contentWidth} contentCenter={contentCenter}>{children}</Content>
        <Objectbox>
          <Sticky>
            {object}
          </Sticky>
        </Objectbox>
      </Wrapper>
    </Container>
  );
};

export default LeftContentRightObject;
