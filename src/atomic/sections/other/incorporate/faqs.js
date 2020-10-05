import React from "react";
import styled from "styled-components";
import {Heading} from "../../../atoms/typography/heading";
import Accordion from "../../../organisms/accordion/accordion";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h3 {
    width: auto;
  }
`;

const FAQSection = ({ className, content }) => {
    return (
        <Wrapper className={className}>
            <Heading size={2} maxWidth={770} bottomMargin={55}>{content.header}</Heading>
            <Accordion content={content.faq} />
        </Wrapper>
    );
};

export default FAQSection;