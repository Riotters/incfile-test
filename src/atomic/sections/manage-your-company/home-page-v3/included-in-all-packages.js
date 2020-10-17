import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import { Heading } from "../../../atoms/typography/heading";
import BenefitsSection from "../../other/incorporate/benefits-section";
import ContentCenter from "../../../partials/content-center";
import Button from "../../../molecules/buttons/button";

const Wrapper = styled.div`
  position: relative;

  .section-content {
    padding-top: 148px;
  }
`;

const Anchor = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  width: ${(props) => props.width ?? 69}px;
  position: absolute;

  ${(props) => "top: " + props.top + "px" ?? ""};
  ${(props) => "left: " + props.left + "px" ?? ""};
  ${(props) => "right: " + props.right + "px" ?? ""};
  ${(props) => "bottom: " + props.bottom + "px" ?? ""};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 769px) {
    max-width: ${(props) => (props.contentWidth ? `${props.contentWidth}px` : "")};
  }

  h2 {
    text-align: left;
  }
`;

const IncludedInAll = ({ className, content }) => (
  <Wrapper>
    <ContentCenter contentWidth={1140} className="section-content">
      <Heading size={2} maxWidth={770} bottomMargin={104}>
        {content.header}
      </Heading>
      <BenefitsSection content={content.benefits} />
      <Button content={content.button} margin="56px 0 0 0" arrow theme="primary56" />
    </ContentCenter>
  </Wrapper>
);

export default IncludedInAll;
