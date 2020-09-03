import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import Image from "../../atoms/image/image";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowLink from "../buttons/text";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 470px;
    padding: 32px 40px 40px;
    position: relative;
    border-radius: 5px;
    background-color: ${color.white};
    box-shadow: ${(props) => (props.noShadow ? "" : shadow.white1)};
    margin: auto;

    & > h4, & > p {
        text-align: center;
    }
`;

const ImageWrapper = styled.div`
  height: 180px;
  width: 180px;
  margin: 0 auto 24px;
`;

const ColorBox = styled.div`
    width: 100%;
    background-color: ${props => props.color ? props.color : ""};
    border-radius: 20px;
    padding: 30px;

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

const SCorpTaxBox = ({ className, image, color, content }) => {
  return (
    <Wrapper className={className}>
        <ImageWrapper>
            <Image filename={image} />
        </ImageWrapper>
        <Heading size="4" bottomMargin="16">
          {content.header}
        </Heading>
        <Paragraph maxWidth="358">{content.text}</Paragraph>
        {content.boxes.map(box => (
            <ColorBox color={color}>
                <Heading size="4" bottomMargin="16">
                    {box.header}
                </Heading>
                <Paragraph bottomMargin="0">{box.text}</Paragraph>
            </ColorBox>
        ))}
    </Wrapper>
  );
};

export default SCorpTaxBox;
