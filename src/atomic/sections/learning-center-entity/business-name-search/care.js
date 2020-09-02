import React from "react";
import styled from "styled-components";
import { gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Form from "../../../organisms/forms/business-name-search-form";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";

const Care = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 64px;

  &::before {
    content: "";
    height: 1542px;
    width: 100%;
    background-image: ${gradient.orange3};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const CareSection = ({ className, content }) => (
  <Care className={className}>
    <Oval className="oval" height="570" width="570" top="14" left="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="640" text={content.text} textWidth="670" bottomMargin="64" />
    <ContentCenter>
      <Form content={content.form} />
    </ContentCenter>
  </Care>
);

export default CareSection;
