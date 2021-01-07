import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import UboxingFormationKit from "../../../organisms/kit/unboxing-formation-kit";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";

const Unboxing = styled.section`
  position: relative;
  padding: 120px 0 0;
  
  @media (min-width: 576px) {
    padding: 120px 0 64px;
  }

  @media (min-width: 992px) {
    padding: 0 0 64px;
  }

  .heading {
    p {
      padding-bottom: 48px;
    }
  }
`;

const UnboxingSection = ({ className, content }) => (
  <Unboxing className={className}>
    <Oval className="oval" height="720" width="720" top="0" left="0" y="-15">
      <OvalSVG />
    </Oval>
    <HeadingCenter className="heading" headline={content.header} headlineWidth="770" text={content.text} />
    <ContentCenter>
      <UboxingFormationKit content={content.boxes} />
    </ContentCenter>
  </Unboxing>
);

export default UnboxingSection;
