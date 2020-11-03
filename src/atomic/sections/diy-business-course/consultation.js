import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../atoms/typography/paragraph";
import { color, gradient } from "../../atoms/styles/colors";
import ContentImage from "../../partials/left-content-right-image";
import parse from "html-react-parser";

const Protect = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  &::before {
    content: "";
    height: 2232px;
    width: 100%;
    background-image: ${gradient.orange3};
    position: absolute;
    top: 0;
    left: 0;
  }

  p {
    span {
      color: ${color.orange1};
      font-weight: 900;
    }
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const ProtectSection = ({ className, content }) => (
  <Protect className={className}>
    <ContentImage image="after-formation-cta-7994" contentWidth="470" contentPadding="20">
      <TextWrapper>
        <Paragraph big mixed>
          {parse(content.text)}
        </Paragraph>
        <Paragraph big>{content.text2}</Paragraph>
        <Paragraph big bottomMargin="0">
          {content.text3}
        </Paragraph>
      </TextWrapper>
    </ContentImage>
  </Protect>
);

export default ProtectSection;
