import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import UboxingFormationKit from "../../../organisms/kit/unboxing-formation-kit";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import OvalSVG2 from "../../../../images/ovals/corporate-llc-kit-unboxing-bottom-right.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import {Heading} from "../../../atoms/typography/heading";

const Unboxing = styled.section`
  position: relative;
  padding: 120px 0 64px;

  @media (min-width: 992px) {
    padding: 180px 0 64px;
  }

  .heading {
    p {
      padding-bottom: 48px;
    }
  }
`;

const UnboxingSection = ({ className, content }) => (
    <Unboxing className={className}>
        <Oval className="oval" height="720" width="720" top="0" left="0">
            <OvalSVG />
        </Oval>
        <Oval className="oval" height="420" width="420" bottom="13" right="0">
            <OvalSVG2 />
        </Oval>
        <HeadingCenter className="heading" headline={content.header} headlineWidth="770" text={content.text} />
        <ContentCenter>
            <Heading size={4}>{content.header2}</Heading>
            <UboxingFormationKit content={content.boxes} />
        </ContentCenter>
    </Unboxing>
);

export default UnboxingSection;
