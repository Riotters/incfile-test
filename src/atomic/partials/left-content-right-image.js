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

  @media (min-width: 768px) {
    width: 60%;
    padding-right: 100px;
  }

  h2 {
    text-align: left;
    padding-bottom: 40px;
  }

  p {
    padding-bottom: 40px;
  }
`;

const Imagebox = styled.div`
  display: none;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    width: 40%;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }
`;

const LeftContentRightImage = ({ className, children, image }) => {
  return (
    <Container>
      <Wrapper className={className}>
        <Content className="content">
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
