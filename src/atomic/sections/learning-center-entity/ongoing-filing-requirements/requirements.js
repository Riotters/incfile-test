import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import Image from "../../../atoms/image/image_nobase64";
import ContentLeft from "../../../partials/content-left";
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";

const Requirements = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 120px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  width: 100%;
  margin-bottom: 72px;
`;

const RequirementsSection = ({ className, content }) => (
  <Requirements className={className}>
    <Oval className="oval" height="420" width="420" bottom="20" left="0">
      <OvalSVG />
    </Oval>
    <ContentLeft contentWidth="770">
      <Heading size="2" bottomMargin="72">
        {content.header}
      </Heading>
      <Grid>
        {content.columns.map((column) => (
          <div>
            <Heading size="3" bottomMargin="24">
              {column.header}
            </Heading>
            <Paragraph big>{column.text}</Paragraph>
            <Paragraph big>{column.text2}</Paragraph>
            <ArrowLink content={column.link} />
          </div>
        ))}
      </Grid>
      <Heading size="3" bottomMargin="24">
        {content.header2}
      </Heading>
      <Paragraph big>{content.text}</Paragraph>
      <Paragraph big bottomMargin="0">
        {content.text2}
      </Paragraph>
    </ContentLeft>
  </Requirements>
);

export default RequirementsSection;
