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
import Button from "../../../molecules/buttons/button";

const BusinessStructure = styled.section`
  position: relative;
  padding-bottom: 120px;

  p {
    color: ${color.grey2};
  }

  ul {
    margin-bottom: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  width: 100%;

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

  div {
    &:nth-child(1) {
      div {
        border-radius: 50px 5px 5px 15px;
      }
    }
    &:nth-child(2),
    &:nth-child(3) {
      div {
        border-radius: 5px;
      }
    }
    &:nth-child(4) {
      div {
        border-radius: 5px 50px 15px 5px;
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
        {content.cards.map((card, i) => (
          <Box>
            <ColoredBox color={colors[i]}>
              <Image filename={icons[i]} />
            </ColoredBox>
            <Heading size="4">{card.header}</Heading>
            <Paragraph>{card.text}</Paragraph>
          </Box>
        ))}
      </Grid>
      <Button content={content.button} theme="secondary56" arrow />
    </ContentCenter>
  </BusinessStructure>
);

export default BusinessStructureSection;
