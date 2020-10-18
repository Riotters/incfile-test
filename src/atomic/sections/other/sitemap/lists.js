import React, { Component, Fragment, useState } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { Link } from "gatsby";

import { color } from "../../../../components/styles/colors";
import Container from "../../../container";
import Image from "../../../atoms/image/image_nobase64";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import OvalSVG2 from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import StarSVG from "../../../../images/icons/star.inline.svg";
import ShapeCurve from "../../../atoms/shapes/curve";
import RelativeElement from "../../../elements/relative-e";
import AbsoluteShapCure from "../../../elements/absolute-shape-curve-e";
import Whitebox from "../../../atoms/boxes/white-box";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Drop from "../../../../components/form/dropdown";
import ContentCenter from "../../../partials/content-center";
import { Heading } from "../../../atoms/typography/heading";
import ArrowLink from "../../../molecules/buttons/text";

const Wrapper = styled.div`
  position: relative;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 56px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 30px;
  width: 100%;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Lists = ({ content }) => (
  <Wrapper>
    <Oval className="oval" height="420" width="460" top="7" left="0" y="-20">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="570" width="570" bottom="0" right="0" y="20">
      <OvalSVG2 />
    </Oval>
    <ContentCenter>
      {content.sections.map((section) => (
        <>
          <Heading size="3" maxWidth="1170" bottomMargin="32">
            {section.header}
          </Heading>
          {section.rows.map((row) => (
            <Row>
              {row.header ? (
                <Heading size="5" maxWidth="1170" bottomMargin="12">
                  {row.header}
                </Heading>
              ) : null}
              <Grid>
                {row.columns.map((column) => (
                  <Column>
                    {column.links.map((link) => (
                      <ArrowLink content={link} bottomMargin="12" />
                    ))}
                  </Column>
                ))}
              </Grid>
            </Row>
          ))}
        </>
      ))}
    </ContentCenter>
  </Wrapper>
);

export default Lists;
