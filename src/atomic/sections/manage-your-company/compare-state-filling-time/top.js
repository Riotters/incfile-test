import styled from "styled-components";
import React from "react";
import Container from "../../../container";
import ContentCenter from "../../../partials/content-center";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import OvalSVG from "../../../../images/ovals/compare-state-filling-time-top-top-right.inline.svg";
import Oval from "../../../atoms/icons/oval";
import {HeadingP} from "../../../atoms/typography/heading-to-p";
import {color} from "../../../atoms/styles/colors";

const Wrapper = styled.section`
  position: relative;
  padding: 180px 0 48px;

  h1,
  h2,
  p {
    text-align: center;
  }
  
  h2 {
    color: ${color.grey2};
  }
`;

const ChooseParagraphType = ({ headingParagraph, left, content }) => (
    <>
        {headingParagraph && (
            <HeadingP size={2} big left={left} maxWidth={620}>{content}</HeadingP>
        )}
        {!headingParagraph && (
            <Paragraph big maxWidth={620}>
                {content}
            </Paragraph>
        )}
    </>
)

const Top = ({ className, content, ovalTop, headingParagraph = false, left = false }) => (
  <Wrapper>
    <Oval top={ovalTop ?? "13"} right="0" width={341} height={192}>
      <OvalSVG />
    </Oval>
    <ContentCenter>
      {content.header && (
        <Heading size={1} maxWidth={700}>
          {content.header}
        </Heading>
      )}
      {content.text && (
          <ChooseParagraphType headingParagraph={headingParagraph} content={content.text} left={left} />
      )}
    </ContentCenter>
  </Wrapper>
);

export default Top;
