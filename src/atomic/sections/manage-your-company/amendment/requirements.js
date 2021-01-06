import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { states } from "../../../../components/states";
import ContentObject from "../../../partials/left-content-right-object";
import Card from "../../../../components/certificate-card";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import Oval2SVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";
import TextCheck from "../../../molecules/static-check/circle-checkmark-text";
import { PHeading } from "../../../atoms/typography/p-to-heading";

const Requirements = styled.section`
  position: relative;
  padding-top: 60px;

  @media (min-width: 576px) {
    padding-top: 120px;
  }

  padding-bottom: 64px;
  background-color: #f2f6ff;

  &::before {
    content: "";
    height: 2032px;
    width: 100%;
    background-image: ${gradient.blue3};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  margin-top: 32px;

  @media screen and (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }

  [class*="circle-checkmark-text"] {
    align-items: end;
    padding: 0;

    svg > g > circle {
      fill: ${color.blue1};
    }
  }
`;

const dropdownTwoOptions = states.state.map((state) => state.name);

const RequirementsSection = ({ className, content }) => (
  <Requirements className={className}>
    <Oval
      className="oval"
      height="570"
      width="570"
      y="-35"
      bottom="0"
      right="0"
    >
      <Oval2SVG />
    </Oval>
    <ContentObject
      className="help"
      headlineWidth="500"
      object={
        <Card
          className="card"
          content={content.card}
          headline="Amendment"
          price="149"
          dropdownOnePlaceholder="Select Entity Type"
          dropdownTwoPlaceholder="Select State"
          dropdownTwoOptions={dropdownTwoOptions}
          priceColumn="amend"
          orderPage="/amendment.php"
          fields="state,amendLLC,amendCorp,amendNpc"
        />
      }
    >
      <TextWrapper>
        <Curve top="-90" left="-60" color={color.blue1}>
          <CurveSVG />
        </Curve>
        <Heading size="2" bottomMargin="56" maxWidth="500">
          {content.header}
        </Heading>
        <PHeading size="3" template={4}>
          {content.header2}
        </PHeading>
        <Paragraph big bottomMargin="0">
          {content.text}
        </Paragraph>
        <List>
          {content.list.map((i) => (
            <TextCheck content={i} />
          ))}
        </List>
      </TextWrapper>
    </ContentObject>
  </Requirements>
);

export default RequirementsSection;
