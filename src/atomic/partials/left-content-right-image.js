import React from "react";
import styled from "styled-components";
import Container from "../container";
import Image from "../atoms/image/image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  order: 2;

  @media (min-width: 992px) {
    max-width: 500px;
    padding-right: 100px;
    order: 1;
  }
  
  @media (min-width: 1200) {
    max-width: ${props => (props.contentWidth ? parseInt(props.contentWidth) + 100 : "700")}px;
  }


  h2 {
    text-align: left;
  }
`;

const Imagebox = styled.div`
  display: none;
  align-items: center;
  order: 1;
  margin-bottom: 32px;

  @media (min-width: 769px) {
    display: flex;
    flex-grow: 1;
    order: 2;
    margin-bottom: 0;
  }

  .gatsby-image-wrapper {
    width: 80%;
    max-width: 350px;
    margin: 0 auto;

    @media (min-width: 769px) {
      width: 100%;
      max-width: 100%;
    }
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
