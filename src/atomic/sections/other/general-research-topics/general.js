import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import List from "../../../organisms/lists/general-questions-list";

const General = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 104px;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0), #fef6ed);
`;

const GeneralSection = ({ className, content }) => (
  <General className={className}>
    <HeadingCenter headline={content.header} linkText={content.link.text} linkUrl={content.link.linkUrl} headlineWidth="700" bottomMargin="80" />
    <ContentCenter contentWidth="770">
      <List content={content} />
    </ContentCenter>
  </General>
);

export default GeneralSection;
