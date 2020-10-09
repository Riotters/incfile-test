import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Accordion from "../../../organisms/accordion/accordion";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-babyblue2.inline.svg";

const Faq = styled.section`
  position: relative;
  padding-top: 75px;
`;

const FaqSection = ({ className, content }) => (
  <Faq className={className}>
    <Oval className="oval" height="570" width="570" top="0" right="0" y="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter className="headline" headline={content.header} headlineWidth="640" bottomMargin="55" />
    <ContentCenter>
      <Accordion content={content.faq} />
    </ContentCenter>
  </Faq>
);

export default FaqSection;
