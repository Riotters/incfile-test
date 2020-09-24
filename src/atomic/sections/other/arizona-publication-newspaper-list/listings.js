import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentLeft from "../../../partials/content-left";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-right-transparent-blue3.inline.svg";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { Heading } from "../../../atoms/typography/heading";
import Whitebox from "../../../atoms/boxes/white-box";
import Container from "../../../container";

const Listings = styled.section`
  position: relative;
  padding-top: 56px;
  padding-bottom: 64px;
  background-image: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(242,246,255,1) 50%, rgba(255,255,255,1) 100%);

  .headline {
    margin-bottom: 80px;
  }
`;

const Region = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 48px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
    <Oval className="oval" height="720" width="720" top="5" left="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="770" bottomMargin="32" />
    <ContentLeft contentWidth="770">
      <Paragraph big>
        {content.text}
      </Paragraph>
      <Paragraph big>
        {content.text2}
      </Paragraph>
      <Paragraph big bottomMargin="64">
        {content.text3}
      </Paragraph>
    </ContentLeft>
    {content.regions.map((region) => (
      <Region>
        <Container>
          <Wrapper>
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
          </Wrapper>
        </Container>
      </Region>
    ))}
  </Listings>
);

export default ListingsSection;
