import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Whitebox from "../../atoms/boxes/white-box";
import Circle from "../../atoms/icons/circle";
import Image from "../../atoms/image/image";
import { Heading } from "../../atoms/typography/heading";
import { color } from "../../atoms/styles/colors";
import ArrowSVG from "../../../images/arrow.inline.svg";
import { shadow } from "../../atoms/styles/shadows";

const Wrapper = styled(Link)`
  .box {
    display: flex;
    justify-content: space-between;
    align-items: ${(props) => (props.ellipsis || props.icon ? "center" : "")};
    border-radius: ${(props) => (props.icon ? "20px" : "")};
    padding: ${(props) => (props.icon ? "16px 24px 16px 16px" : "24px 24px 24px 40px")};
    transition: box-shadow 0.3s ease;
  }

  &:hover {
    .box {
      box-shadow: ${shadow.white2};

      h3 {
        color: ${color.orange1};
      }
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;

  h3,
  h4 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${(props) => (props.ellipsis ? "1" : "")};
    text-overflow: ${(props) => (props.ellipsis ? "ellipsis" : "")};
    overflow: hidden;
    color: ${(props) => (props.icon ? color.blue1 : props.textColor ? props.textColor : "")};
  }

  h3 {
    font-size: 16px;

    @media (min-width: 400px) {
      font-size: 20px;
    }
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
    padding: ${(props) => (props.iconPadding ? `${props.iconPadding}px` : `16px`)};
    margin-right: 32px;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }
`;

const BoxedButton = ({ className, content, textColor, icon, headingSizes = [ 3, 4 ], iconColor, iconPadding, ellipsis }) => {
  return (
    <Wrapper to={content.url} className={className} icon={icon} ellipsis={ellipsis} headingSizes={headingSizes}>
      <Whitebox className="box">
        <TextWrapper textColor={textColor} icon={icon} ellipsis={ellipsis} headingSizes={headingSizes}>
          {icon && (
            <ImageWrapper iconColor={iconColor} iconPadding={iconPadding}>
              <Image filename={icon} />
            </ImageWrapper>
          )}
          {content.header && (
            <Heading size={icon ? headingSizes[0] : headingSizes[1]} template={icon ? 4 : 5} bottomMargin="0">
              {content.header}
            </Heading>
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
