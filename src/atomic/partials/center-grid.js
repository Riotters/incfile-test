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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: ${props => props.rowGap ? props.rowGap : "30"}px;
  width: 100%;

  @media (min-width: 769px) {
    max-width: ${props => (props.contentWidth ? `${props.contentWidth}px` : "")};
  }
`;

const CategoriesGrid = ({ className, children, contentWidth, headlineWidth, textWidth, rowGap }) => {
    
  return (
      <Container>
        <Wrapper className={className}>
          <Content contentWidth={contentWidth} headlineWidth={headlineWidth} textWidth={textWidth} rowGap={rowGap}>
            { children }
          </Content>
        </Wrapper>
      </Container>
  );
};

export default CategoriesGrid;
