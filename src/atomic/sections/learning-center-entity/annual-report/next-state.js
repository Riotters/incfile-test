import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Buttonsbox from "../../../atoms/boxes/top-buttons-box";
import Button from "../../../molecules/buttons/button";
import ArrowLink from "../../../molecules/buttons/text";
import ContentObject from "../../../partials/left-content-right-object";
import IconSVG from "../../../../images/icons/biennal-report.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import IconListColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";

const NextState = styled.section`
  position: relative;
  padding-top: 64px;
  padding-bottom: 120px;
  background-color: ${color.orange3};

  p {
    color: ${color.grey2};
  }

  ul {
      margin-bottom: 0;
  }
`;

const NextStateSection = ({ className, content }) => (
    <NextState className={className}>
        <Oval className="oval" height="570" width="570" y="-40">
            <OvalSVG />
        </Oval>
        <ContentObject object="">
            <Heading size="2" bottomMargin="48">{content.header}</Heading>
            <Heading size="4">{content.header2}</Heading>
            <Paragraph big bottomMargin="32">{content.text}</Paragraph>
        </ContentObject>
    </NextState>
  );
  
  export default NextStateSection;