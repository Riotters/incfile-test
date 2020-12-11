import React from "react"
import styled from "styled-components"
import { Heading } from "../../../atoms/typography/heading"
import ContentCenter from "../../../partials/content-center"
import ArrowLink from "../../../molecules/buttons/text"
import {PHeading} from "../../../atoms/typography/p-to-heading";

const Cta = styled.section`
  position: relative;
  padding-top: 20px;
  padding-bottom: 0;
  
  @media (min-width: 576px) {
      padding-top: 100px;
      padding-bottom: 144px;
  }
`;

const CtaSection = ({ className, content }) => (
    <Cta className={className}>
        <ContentCenter>
            <PHeading size={2} maxWidth="770" center>{content.header}</PHeading>
            <ArrowLink content={content.link} />
        </ContentCenter>
    </Cta>
);
  
export default CtaSection;