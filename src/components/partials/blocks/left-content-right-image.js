import React from "react";
import styled from "styled-components";
import Image from "../../image_nobase64";

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    width: 60%;
    padding-right: 100px;
  }

  h2,
  p {
    ${props => (props.textWidth ? props.textWidth : "")}px;
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
  max-width: ${props => (props.imageWidth ? props.imageWidth : "")}px;

  @media (min-width: 768px) {
    display: flex;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }
`;

// const Buttonsbox = styled.div`
//   display: flex;
//   flex-direction: column;

//   @media (min-width: 768px) {
//     flex-direction: row;
//   }
// `;

const LeftImageRightContent = ({ children, image, imageWidth, textWidth }) => {
  return (
        <Wrapper>
          <Content textWidth={textWidth}>
              { children }
            {/* <h2>We are here to help</h2>
            <p>We understand that questions come up every turn of your business</p>
            <Buttonsbox>
              <Button theme="primary56" marginMD="0 24px 0 0" arrow>
                Start Now
              </Button>
              <Button theme="secondary56" margin="24px 0 0 0" marginMD="0 auto 0 0" arrow>
                Read FAQ
              </Button>
            </Buttonsbox> */}
          </Content>
          <Imagebox imageWidth={imageWidth}>
            {/* <Image filename="lifebuoy" /> */}
            <Image filename={image} />
          </Imagebox>
        </Wrapper>
  );
};

export default LeftImageRightContent;
