import React from "react";
import styled from "styled-components";
import ContentCenter from "../../partials/content-center";
import QuoteCard from "../../organisms/cards/quote-card";

const PPCQuotesSection = ({ quotes, stateName }) => {
  const newQuotes = quotes.map((quote) => {
    return Object.assign({}, quote, {
      state: stateName,
    });
  });

  return (
    <ContentCenter>
      <Grid>
        {newQuotes.map((card, i) => (
          <QuoteCard content={card} key={i} />
        ))}
      </Grid>
    </ContentCenter>
  );
};

export default PPCQuotesSection;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;
  padding-top: 48px;
  padding-bottom: 24px;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
    padding-top: 72px;
  }

  @media (min-width: 992px) {
    padding-top: 96px;
    padding-bottom: 64px;
  }
`;
