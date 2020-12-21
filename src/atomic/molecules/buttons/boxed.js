import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Whitebox from "../../atoms/boxes/white-box";
import Circle from "../../atoms/icons/circle";
import Image from "../../atoms/image/image";
import { color } from "../../atoms/styles/colors";
import ArrowSVG from "../../../images/arrow.inline.svg";
import { shadow } from "../../atoms/styles/shadows";
import { SpanHeading } from "../../atoms/typography/span-as-heading";

const Wrapper = styled(Link)`
  .box {
    display: flex;
    justify-content: space-between;
    align-items: ${(props) => (props.ellipsis || props.icon ? "center" : "")};
    border-radius: ${(props) => (props.icon ? "20px" : "")};
    padding: ${(props) =>
      props.icon ? "16px 24px 16px 16px" : "24px 24px 24px 40px"};
    transition: box-shadow 0.3s ease;
  }

  &:hover {
    .box {
      box-shadow: ${shadow.white2};

      h4 {
        color: ${color.orange1};
      }
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;

	h3, [class*="i-believe-i-can-be-a-h"] {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: ${(props) => (props.ellipsis ? "1" : "")};
		text-overflow: ${(props) => (props.ellipsis ? "ellipsis" : "")};
		overflow: hidden;
		color: ${(props) =>
			props.icon ? color.blue1 : props.textColor ? props.textColor : ""};
	}
	
	[class*="i-believe-i-can-be-a-h"] {
		font-weight: bold;
	}

  ${(props) =>
    props.icon &&
    `h3 {
            font-size: 16px;
    
            @media (min-width: 400px) {
                font-size: 20px;
            }
        }`}
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
    padding: ${(props) =>
      props.iconPadding ? `${props.iconPadding}px` : `16px`};
    margin-right: 32px;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }
`;

const BoxedButton = ({
  className,
  content,
  textColor,
  icon,
  iconColor,
  iconPadding,
  ellipsis,
}) => {

  return (
    <Wrapper
      to={content.url}
      className={className}
      icon={icon}
      ellipsis={ellipsis}
    >
      <Whitebox className="box">
        <TextWrapper textColor={textColor} icon={icon} ellipsis={ellipsis}>
          {icon && (
            <ImageWrapper iconColor={iconColor} iconPadding={iconPadding}>
              <Image filename={icon} alt={content.imageAlt ?? content.header} />
            </ImageWrapper>
          )}
          {content.header && (
            <SpanHeading size={4} template={5} bottomMargin="0">
              {content.header}
            </SpanHeading>
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
