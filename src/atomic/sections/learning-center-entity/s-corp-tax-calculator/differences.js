import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import ContentLeft from "../../../partials/content-left";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Card from "../../../molecules/mixed-blocks/s-corp-tax-box";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-green2.inline.svg";

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
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  width: 100%;
`;

const images = [`cert-llc-232`, `cert-s-433`];
const colors = [color.babyblue3, color.green3];

const DifferencesSection = ({ className, content }) => (
  <Differences className={className}>
    <Oval className="oval" height="720" width="720" top="11" right="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} linkText={content.link.text} linkUrl={content.link.url} />
    <ContentCenter contentWidth="970">
        <Grid>
            {content.cards.map((card, i) => (
                <Card content={card} image={images[i]} color={colors[i]} />
            ))}
        </Grid>
    </ContentCenter>
    <ContentLeft contentWidth="770">
      <Heading size="3">
        {content.header2}
      </Heading>
      <Paragraph big>
        {content.text}
      </Paragraph>
    </ContentLeft>
  </Differences>
);

export default DifferencesSection;