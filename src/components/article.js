import React from "react";
import styled from "styled-components";
import ArrowSVG from "../images/arrow.inline.svg";
import Image from "./image";

const Wrapper = styled.article`
  margin-bottom: 8px;
  height: 275px;

  @media (min-width: 769px) {
    padding: 0 15px;
    margin-bottom: 0;
  }
`;

const Content = styled.a`
  display: block;
  background-color: #fff;
  border-radius: 6px;
  text-decoration: none;
  user-drag: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 0;

  &:hover {
    box-shadow: 0 40px 80px 0 #e6e6e6;
    transform: scale(1.02);
  }
`;

const ImageBox = styled.div`
  height: 180px;
  background-color: #a4eed0;
  overflow: hidden;

  img {
    top: ${(props) => (props.top ? props.top : "0")} !important;
    transform: scale(${(props) => (props.scale ? props.scale : "1")});

    @media (min-width: 1070px) {
      top: ${(props) => (props.topLG ? props.topLG : "0")} !important;
    }
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  height: 95px;
  padding: 24px;

  span {
    color: #5088fd;
    font-family: Avenir;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  width: 12px;
  margin-right: 24px;

  svg {
    path {
      transition: fill 0.3s ease;
      fill: #5088fd;
    }
  }
`;

const Article = ({ children, img, top, topLG, scale }) => (
  <Wrapper>
    <Content href="#">
      {img ? (
        <ImageBox top={top} topLG={topLG} scale={scale}>
          <Image filename={img} />
        </ImageBox>
      ) : null}
      <Text>
        <Arrow>
          <ArrowSVG />
        </Arrow>
        <span>{children}</span>
      </Text>
    </Content>
  </Wrapper>
);
export default Article;
