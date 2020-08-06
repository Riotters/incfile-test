import React from "react";
import styled from "styled-components";
import Container from "../container";
import Image from "../atoms/image/image";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 100%;
    padding-right: 100px;
    max-width: ${props => (props.contentWidth ? parseInt(props.contentWidth) + 100 : "700")}px;
  }

  h2 {
    text-align: left;
  }
`;

const Imagebox = styled.div`
  display: none;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-grow: 1;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }
`;

const LeftContentRightImage = ({ className, children, image, contentWidth }) => {
  return (
    <Container>
      <Wrapper className={className}>
        <Content className="content" contentWidth={contentWidth}>
            { children }
        </Content>
        <Imagebox className="imagebox">
          <Image filename={image} />
        </Imagebox>
      </Wrapper>
    </Container>
  );
};

export default LeftContentRightImage;
