import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-green3.inline.svg";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { Heading } from "../../../atoms/typography/heading";
import Whitebox from "../../../atoms/boxes/white-box";

const Listings = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  .headline {
    margin-bottom: 80px;
  }
`;

const Region = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 48px;

  h3 {
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;
  width: 100%;

  @media(min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Box = styled(Whitebox)`
  padding: 40px;
`;

const ListingsSection = ({ className, content }) => (
  <Listings className={className}>
    <Oval className="oval" height="570" width="570" top="10" left="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="770" />
    <ContentCenter>
      <Paragraph big maxWidth="770">
        {content.text}
      </Paragraph>
      <Paragraph big maxWidth="770">
        {content.text2}
      </Paragraph>
      <Paragraph big maxWidth="770">
        {content.text3}
      </Paragraph>
      {content.regions.map((region) => (
        <Region>
          <Heading size="3" bottomMargin="48">
            {region.header}
          </Heading>
          <Grid>
            {region.newspapers.map((newspaper) => (
              <Box>
                <Heading size="4" bottomMargin="16">
                  {newspaper.header}
                </Heading>
                <Paragraph bottomMargin="0">{newspaper.text}</Paragraph>
              </Box>
            ))}
          </Grid>
        </Region>
      ))}
    </ContentCenter>
  </Listings>
);

export default ListingsSection;
