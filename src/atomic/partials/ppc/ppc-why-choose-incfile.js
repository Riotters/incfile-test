import React from "react";
import styled from "styled-components";
import Image from "../../atoms/image/image";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
//import IncludedInAll from "./included-in-all-packages";
import Container from "../../container";

const Section = styled.section`
  position: relative;
  padding: 64px 0 32px;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 4%,
    rgb(254, 246, 237) 99%
  );
  h2 {
    text-align: left;
  }

  @media (min-width: 769px) {
    padding: 104px 0 48px;
  }

  @media (min-width: 992px) {
    padding: 144px 0 88px;
  }
`;

const Anchor = styled.div`
  position: relative;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  width: ${(props) => props.width ?? 69}px;
  position: absolute;

  ${(props) => "top: " + props.top + "px" ?? ""};
  ${(props) => "left: " + props.left + "px" ?? ""};
  ${(props) => "right: " + props.right + "px" ?? ""};
  ${(props) => "bottom: " + props.bottom + "px" ?? ""};

  @media screen and (max-width: 768px) {
    display: block;
    position: static;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 769px) {
    max-width: ${(props) =>
      props.contentWidth ? `${props.contentWidth}px` : ""};
  }

  h2 {
    text-align: left;
  }
`;

const PPCWhyChooseIncfile = ({ className, content }) => (
  <Section className={className}>
    <Container>
      <Content contentWidth={770}>
        <Anchor>
          <Heading size={2} style={{ maxWidth: `560px` }}>
            {content.header}
          </Heading>
          <ImageWrapper width={330} height={223} top={-50} right={-220}>
            <Image filename="bronze-stevie-winner-0419" alt="why choose incfile" />
          </ImageWrapper>
        </Anchor>
        <Paragraph big>{content.text1}</Paragraph>

        <Anchor>
          <Paragraph big>{content.text2}</Paragraph>
          <ImageWrapper width={335} height={211} top={0} right={-387}>
            <Image filename="enterpreneur-360-5900" alt="entrepreneur" />
          </ImageWrapper>
        </Anchor>
        <Paragraph big>{content.text3}</Paragraph>
        <Paragraph big>{content.text4}</Paragraph>
      </Content>
    </Container>

    {/* <IncludedInAll content={content.included} /> */}
  </Section>
);

export default PPCWhyChooseIncfile;
