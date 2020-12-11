import React from "react";
import styled from "styled-components";
import Container from "../../../atomic/container";
import Image from "../../image_nobase64";
import TextCheck from "../../static-check/text-only";
import Button from "../../../atomic/molecules/buttons/button";
import {HeadingP} from "../../../atomic/atoms/typography/heading-to-p";
import {Heading} from "../../../atomic/atoms/typography/heading";

const Wrapper = styled.div`
  padding-top: 75px;
  padding-bottom: 64px;
  position: relative;

  @media (min-width: 769px) {
    padding-top: 180px;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;

  @media (min-width: 992px) {
    padding-left: 100px;
  }

  h2 {
    padding-bottom: 40px;

    @media (min-width: 992px) {
      text-align: left;
      max-width: 410px;
    }
  }

  & > p {
    padding-bottom: 40px;
    text-align: center;

    @media (min-width: 992px) {
      text-align: left;
    }
  }
`;

const Icon = styled.div`
  display: none;
  align-items: center;
  width: 100%;
  max-width: 400px;

  @media (min-width: 992px) {
    display: flex;
  }

  .gatsby-image-wrapper {
    height: auto;
    width: 100%;
  }
`;

const Checks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 400px) {
    flex-direction: row;
  }

  @media (min-width: 992px) {
    justify-content: flex-start;
  }

  & > div {
    width: 100%;
    max-width: 300px;
  }

  p {
    padding-bottom: 24px;
  }
`;

const Certificates = ({ content }) => {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <Icon>
            <Image filename="standard-kit-5602" />
          </Icon>
          <Content>
            <Heading size={3} template={2} left>{content.header}</Heading>
            <p>{content.text}</p>
            <Heading size={4}>{content.header2}</Heading>
            <Checks>
              <div>
                <TextCheck>
                  <p>{content.list[0]}</p>
                </TextCheck>
                <TextCheck>
                  <p>{content.list[1]}</p>
                </TextCheck>
                <TextCheck>
                  <p>{content.list[2]}</p>
                </TextCheck>
              </div>
              <div>
                <TextCheck>
                  <p>{content.list[3]}</p>
                </TextCheck>
                <TextCheck>
                  <p>{content.list[4]}</p>
                </TextCheck>
                <TextCheck>
                  <p>{content.list[5]}</p>
                </TextCheck>
              </div>
            </Checks>
            <Button content={content.button} theme="primary56" margin="16px 0 0 0" marginSM="16px auto 0" marginLG="16px auto 0 0" arrow />
          </Content>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Certificates;
