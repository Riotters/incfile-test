import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Whitebox from "../../atoms/boxes/white-box";
import Circle from "../../atoms/icons/circle";
import Image from "../../atoms/image/image";
import { Paragraph } from "../../atoms/typography/paragraph";
import { color } from "../../atoms/styles/colors";
import ArrowSVG from "../../../images/arrow.inline.svg";

const Wrapper = styled(Link)`
  .box {
    display: flex;
    justify-content: space-between;
    align-items: ${(props) => (props.ellipsis || props.icon ? "center" : "")};
    border-radius: ${(props) => (props.icon ? "20px" : "")};
    padding: 24px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${(props) => (props.ellipsis ? "1" : "")};
    text-overflow: ${(props) => (props.ellipsis ? "ellipsis" : "")};
    overflow: hidden;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  min-height: 48px;
  min-width: 48px;
  border-radius: 15px;
  background-color: ${(props) => (props.iconColor ? props.iconColor : "")};
  padding: 6px;
  margin-right: 16px;

  @media (min-width: 400px) {
    height: 88px;
    width: 88px;
    min-height: 88px;
    min-width: 88px;
    border-radius: 15px;
    padding: 16px;
    margin-right: 32px;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }
`;

const BoxedButton = ({ className, content, icon, iconColor, ellipsis }) => {
  return (
    <Wrapper to={content.url} className={className} icon={icon} ellipsis={ellipsis}>
      <Whitebox className="box">
        <TextWrapper icon={icon} ellipsis={ellipsis}>
          {icon && (
            <ImageWrapper iconColor={iconColor}>
              <Image filename={icon} />
            </ImageWrapper>
          )}
          {content.header && (
            <Paragraph bottomMargin="0">
              {content.header}
            </Paragraph>
          )}
        </TextWrapper>
        <Circle circleColor={color.orange3} iconColor={color.orange1}>
          <ArrowSVG />
        </Circle>
      </Whitebox>
    </Wrapper>
  );
};

export default BoxedButton;
