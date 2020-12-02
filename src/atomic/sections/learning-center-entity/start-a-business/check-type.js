import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import Container from "../../../container";
import Tabs from "../../../organisms/tabs/check-types-tabs";
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-left-transparent-blue1.inline.svg";

const CheckType = styled.section`
  padding-top: 104px;
  padding-bottom: 104px;
  position: relative;
  background-color: ${color.blue3};

  .heading {
    h3,
    p {
      text-align: center;
    }
  }
`;

const CheckTypeSection = ({ content }) => {
  return (
    <CheckType>
      <Oval className="oval" height="720" width="720" top="0" right="0">
        <OvalSVG />
      </Oval>
      <Oval className="oval" height="720" width="720" bottom="0" left="0">
        <Oval2SVG />
      </Oval>
      <ContentCenter className="heading">
        <Heading size="2" maxWidth="670" bottomMargin="104">
          {content.header}
        </Heading>
      </ContentCenter>
      <Container>
        <Tabs content={content.tabs} />
      </Container>
    </CheckType>
  );
};

export default CheckTypeSection;
