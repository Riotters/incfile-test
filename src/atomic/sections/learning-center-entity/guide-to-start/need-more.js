import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import HeadingCenter from "../../../partials/heading-center";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/biennal-report.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";

const NeedMore = styled.section`
  position: relative;
  padding-bottom: 120px;

  p {
    color: ${color.grey2};
  }

  ul {
    margin-bottom: 0;
  }
`;

const NeedMoreSection = ({ className, content }) => (
  <NeedMore className={className}>
    <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} textWidth="770" linkText={content.link.text} linkUrl={content.link.url} />
  </NeedMore>
);

export default NeedMoreSection;
