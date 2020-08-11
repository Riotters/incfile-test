import React from "react";
import styled from "styled-components";
import Container from "../container";
import Image from "../atoms/image/image";

const Wrapper = styled.div`
  position: relative;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 670px;
  padding-top: ${props => (props.paddingTop ? props.paddingTop : "0")}px;
`;

const Sticky = styled.div`
    display: block;
    width: 100%;

    .gatsby-image-wrapper {
        position: sticky !important;
        top: 100px;
    }
`;

const Imagebox = styled.div`
  display: none;
  width: 100%;
  max-width: 485px;
  position: relative;

  @media(min-width: 769px) {
    display: flex;
  }

  .gatsby-image-wrapper {
    height: auto;
    width: 100%;
  }
`;

const Certificates = ({ children, image, paddingTop }) => {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <Imagebox>
            <Sticky>
                <Image filename={image} />
            </Sticky>
          </Imagebox>
          <Content paddingTop={paddingTop}>
            {children}
          </Content>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Certificates;
