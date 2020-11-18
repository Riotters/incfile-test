import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import List from "../../../organisms/lists/related-questions-list";

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
