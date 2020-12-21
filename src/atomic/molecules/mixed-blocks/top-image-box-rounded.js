import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import Image from "../../atoms/image/image";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowLink from "../buttons/text";

const Wrapper = styled.div`
  width: 100%;
  max-width: 470px;
  padding: 16px 16px 40px;
  position: relative;
  ${props => props.roundLeft ? "border-top-left-radius: 40px;" : ""}
  ${props => props.roundLeft ? "border-bottom-left-radius: 40px;" : ""}
  
  ${props => props.roundRight ? "border-top-right-radius: 40px;" : ""}
  ${props => props.roundRight ? "border-bottom-right-radius: 40px;" : ""}
  background-color: ${color.white};
  box-shadow: ${(props) => (props.noShadow ? "" : shadow.white1)};
  margin: 0 auto;

  .content {
    padding: 24px 24px 0;
    
    ${props => props.align && `
        display: flex;
        flex-direction: column;
        align-items: ${props.align};
    `}
  }

  p,
  a {
    font-size: 16px;
    line-height: 24px;
  }

  p {
    color: ${color.grey1};
  }
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 128px;
    width: 100%;
    background-color: ${(props) => (props.color ? props.color : color.white)};
    border-radius: 5px;
    
    ${props => props.roundLeft ? "border-top-left-radius: 40px;" : ""}  
    ${props => props.roundRight ? "border-top-right-radius: 40px;" : ""}

    .gatsby-image-wrapper {
      height: 96px;
      width: 96px;
    }
`;

const RoundedTopImageBox = ({ className, image, imageAlt, color, content, noShadow, roundLeft, roundRight, align }) => {
  return (
    <Wrapper className={className} noShadow={noShadow} roundLeft={roundLeft} roundRight={roundRight} align={align}>
      <ImageWrapper className="top" roundLeft={roundLeft} roundRight={roundRight} color={color}>
          {image && <Image filename={image} alt={imageAlt ?? content.header} />}
      </ImageWrapper>
      <div className="content">
        <Heading size="4" bottomMargin="16">
          {content.header}
        </Heading>
        <Paragraph bottomMargin="0">{content.text}</Paragraph>
        {content.link && <ArrowLink content={content.link} bottomMargin="0" topMargin="24" />}
      </div>
    </Wrapper>
  );
};

export default RoundedTopImageBox;
