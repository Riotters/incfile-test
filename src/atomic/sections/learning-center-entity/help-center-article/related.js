import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import List from "../../../organisms/lists/related-questions-list";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";

const Related = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 104px;
  background-color: ${color.orange3};
`;

const RelatedSection = ({ className, content }) => (
  <Related className={className}>
    <HeadingCenter headline={content.header} text={content.text} headlineWidth="700" bottomMargin="80" />
    <ContentCenter contentWidth="770">
      <List content={content} />
    </ContentCenter>
  </Related>
);

export default RelatedSection;
