import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import ContentLeft from "../../../partials/content-left";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Card from "../../../molecules/mixed-blocks/s-corp-tax-box";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import {PHeading} from "../../../atoms/typography/p-to-heading";

const Differences = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 112px;

  &::before {
    content: "";
    height: 3171px;
    width: 100%;
    background-image: ${gradient.blue3};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;
  width: 100%;
  padding-bottom: 72px;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const images = [`cert-llc-232`, `cert-s-433`];
const imageAlts = [`paying as an llc`, `paying as a s corp`];
const colors = [color.babyblue3, color.green3];

const DifferencesSection = ({ className, content, paragraphHeader = false }) => (
  <Differences className={className}>
    <Oval className="oval" height="570" width="570" top="0" right="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="770" bottomMargin="56" />
    <ContentCenter contentWidth="970">
      <Grid>
        {content.cards.map((card, i) => (
          <Card content={card} image={images[i]} imageAlt={imageAlts[i]} color={colors[i]} curve={i === 0 ? true : false} paragraphHeading={paragraphHeader} />
        ))}
      </Grid>
    </ContentCenter>
    <ContentLeft contentWidth="770">
      <PHeading size={3}>{content.header2}</PHeading>
      <Paragraph big>{content.text}</Paragraph>
    </ContentLeft>
  </Differences>
);

export default DifferencesSection;
