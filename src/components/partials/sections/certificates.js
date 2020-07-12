import React from "react";
import styled from "styled-components";
import Container from "../../container";
import Image from "../../image_nobase64";
import TextCheck from "../../static-check/text-only";
import Button from "../../button";

const Wrapper = styled.div`
  padding-top: 75px;
  padding-bottom: 64px;
  position: relative;

  @media (min-width: 768px) {
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
  padding-left: 100px;

  h2 {
    text-align: left;
    max-width: 410px;
    padding-bottom: 40px;
  }

  & > p {
    padding-bottom: 40px;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;

  .gatsby-image-wrapper {
    height: auto;
    width: 100%;
  }
`;

const Checks = styled.div`
  display: flex;

  & > div {
    width: 100%;
    max-width: 300px;
  }

  p {
    padding-bottom: 24px;
  }
`;

const Certificates = () => {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <Icon>
            <Image filename="manage-your-company" />
          </Icon>
          <Content>
            <h2>Corporate LLC Kits & Stock Certificates.</h2>
            <p>All Corporations are required to maintain a "corporate minute book" that holds things like the formation paperwork, licenses, resolutions and meeting minutes. It is one of the first things requested when your company is audited or being sold.</p>
            <Checks>
              <div>
                <TextCheck>
                  <p>Metal Die-Cast Embossing Seal</p>
                </TextCheck>
                <TextCheck>
                  <p>Metal Die-Cast Embossing Seal</p>
                </TextCheck>
                <TextCheck>
                  <p>Metal Die-Cast Embossing Seal</p>
                </TextCheck>
              </div>
              <div>
                <TextCheck>
                  <p>Metal Die-Cast Embossing Seal</p>
                </TextCheck>
                <TextCheck>
                  <p>Operating Agreement for LLCs</p>
                </TextCheck>
                <TextCheck>
                  <p>Minutes and By-Laws for Corporations</p>
                </TextCheck>
              </div>
            </Checks>
            <Button href="#" theme="primary56" margin="16px auto 0 0" arrow>
              Show more
            </Button>
          </Content>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Certificates;
