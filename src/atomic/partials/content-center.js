import React from "react";
import styled from "styled-components";
import Container from "../container"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media(min-width: 769px) {
      flex-direction: row;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    width: 100%;
    max-width: ${props => (props.contentWidth ? `${props.contentWidth}px` : "")};
  }
`;

const ContentCenter = ({ className, children, contentWidth, headlineWidth, textWidth }) => {
    
  return (
      <Container>
        <Wrapper className={className}>
          <Content contentWidth={contentWidth} headlineWidth={headlineWidth} textWidth={textWidth}>
            { children }
          </Content>
        </Wrapper>
      </Container>
  );
};

export default ContentCenter;
