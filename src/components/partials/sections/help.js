import React from "react";
import styled from "styled-components";
import Container from "../../container";
import Image from "../../image_nobase64";
import Button from "../../button";
import OvalSVG from "../../../images/oval.inline.svg";
import { color } from "../../styles/colors";

const Wrapper = styled.div`
  padding: 100px 0;
  position: relative;
  background-color: #fffcf9;
`;

const Iconbox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  svg {
    height: 100%;

    path {
      fill: ${color.orange3};
    }
  }
`;

const Flex = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  padding-right: 100px;

  h2,
  p {
    max-width: 400px;
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
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 334px;

  .gatsby-image-wrapper {
    width: 100%;
  }
`;

const Buttonsbox = styled.div`
  display: flex;
`;

const Help = () => {
  return (
    <Wrapper>
      <Iconbox>
        <OvalSVG />
      </Iconbox>
      <Container>
        <Flex>
          <Content>
            <h2>We are here to help</h2>
            <p>We understand that questions come up every turn of your business</p>
            <Buttonsbox>
              <Button theme="primary56" margin="0 24px 0 0" arrow>
                Start Now
              </Button>
              <Button theme="secondary56" margin="0 auto 0 0" arrow>
                Read FAQ
              </Button>
            </Buttonsbox>
          </Content>
          <Imagebox>
            <Image filename="lifebuoy" />
          </Imagebox>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Help;
