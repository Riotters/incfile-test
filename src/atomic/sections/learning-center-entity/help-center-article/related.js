import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import ContentCenter from "../../../partials/content-center";
import List from "../../../organisms/lists/related-questions-list";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";

const Related = styled.section`
  position: relative;
  padding-top: 48px;
  padding-bottom: 32px;
  background-color: ${color.orange3};

  @media (min-width: 992px) {
    padding-top: 104px;
    padding-bottom: 104px;
  }

  h1 {
    text-align: center;
  }
`;

const RelatedSection = ({
  className,
  headingSize = 2,
  headingSizeTemplate = 2,
  left = true,
  content,
}) => (
  <Related className={className}>
    <ContentCenter contentWidth="770">
      <Heading
        size={headingSize}
        template={headingSizeTemplate}
        left={left}
        bottomMargin="24"
        maxWidth="700"
      >
        {content.header}
      </Heading>
      <Paragraph big bottomMargin={32} bottomMarginLG={56}>
        {content.text}
      </Paragraph>
      <List content={content} />
    </ContentCenter>
  </Related>
);

export default RelatedSection;
