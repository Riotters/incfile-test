import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import LightBoxVideo from "../../../components/LightBox";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 16px;
    overflow: unset;

    @media (min-width: 576px) {
      padding: 32px;
    }
  }

  h2 {
    text-align: left;
  }
`;

const ContentCard = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Whitebox className="card" overflow>
        <Heading size="2">Video Library</Heading>
        <Heading size="3" topMargin="48" bottomMargin="48">
          aaa
        </Heading>
        <Paragraph big bottomMargin="24">
          aaa
        </Paragraph>
        <LightBoxVideo thumbnailVideo="comparison-chart-video-3611" videoID="R_oIgzYh7NU" />
        <Heading size="3" topMargin="48" bottomMargin="48">
          aaa
        </Heading>
        <Paragraph big bottomMargin="24">
          aaa
        </Paragraph>
        <LightBoxVideo thumbnailVideo="comparison-chart-video-3611" videoID="R_oIgzYh7NU" />
        <Heading size="3" topMargin="48" bottomMargin="48">
          aaa
        </Heading>
        <Paragraph big bottomMargin="24">
          aaa
        </Paragraph>
        <LightBoxVideo thumbnailVideo="comparison-chart-video-3611" videoID="R_oIgzYh7NU" />
      </Whitebox>
    </Wrapper>
  );
};

export default ContentCard;
