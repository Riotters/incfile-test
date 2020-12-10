import React from 'react';
import styled from "styled-components";
import ContentCenter from "../../partials/content-center";
import QuoteCard from "../../organisms/cards/quote-card";

const PPCQuotesSection = ({ quotes, stateName }) => {
    const newQuotes = quotes.map(quote => {
        return Object.assign({}, quote, {
            state: stateName
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
    )
}

export default PPCQuotesSection;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 100%;
	grid-gap: 30px;
	padding-top: 128px;
	padding-bottom: 64px;

	@media (min-width: 769px) {
		grid-template-columns: 1fr 1fr;
	}
`;