import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentCenter from "../../../partials/content-center";
import Container from "../../../container";
import Image from "../../../atoms/image/image";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/biennal-report.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right.inline.svg";
import Curve2SVG from "../../../../images/curves/bottom-left-top-right-reverse.inline.svg";
import Button from "../../../molecules/buttons/button";

const BusinessStructure = styled.section`
  position: relative;
  padding-top: 104px;

  ul {
    margin-bottom: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  width: 100%;
  padding-bottom: 80px;
  position: relative;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  h4,
  p {
    max-width: 254px;
    text-align: center;
  }

  .box {
    &--1 {
      & > div {
        border-radius: 25px 10px 10px 100px;
      }
    }

    &--2 {
      & > div {
        border-radius: 10px 100px 25px 10px;
      }
    }

    &--3 {
      & > div {
        border-radius: 100px 10px 10px 25px;
      }
    }

    &--4 {
      & > div {
        border-radius: 10px 100px 25px 10px;
      }
    }
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColoredBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 270px;
  width: 100%;
  background-color: ${(props) => (props.color ? props.color : "")};
  margin-bottom: 24px;

  .gatsby-image-wrapper {
    width: 100%;
    max-width: 160px;
  }
`;

const icons = ["cert-llc-232", "cert-s-433", "cert-c-831", "cert-n-826"];
const colors = [color.blue3, color.purple3, color.orange3, color.green3];

const BusinessStructureSection = ({ className, content }) => (
  <BusinessStructure className={className}>
    <ContentCenter className="heading">
      <Heading size="2" maxWidth="670" bottomMargin="104">
        {content.header}
      </Heading>
      <Grid>
        <Curve top="-25" left="-29" color={color.babyblue1}>
          <CurveSVG />
        </Curve>
        <Curve bottom="157" right="-29" color={color.red2}>
          <Curve2SVG />
        </Curve>
        {content.cards.map((card, i) => (
          <Box className={`box box--${i + 1}`}>
            <ColoredBox color={colors[i]}>
              <Image filename={icons[i]} />
            </ColoredBox>
            <Heading size="4" bottomMargin="8">
              {card.header}
            </Heading>
            <Paragraph bottomMargin="0">{card.text}</Paragraph>
          </Box>
        ))}
      </Grid>
      <Button content={content.button} theme="secondary56" />
    </ContentCenter>
  </BusinessStructure>
);

export default BusinessStructureSection;
