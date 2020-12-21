import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import GridTableRow from "../../molecules/blocks/grid-table-row";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 970px;
	position: relative;

	.table-row {
		@media (min-width: 769px) {
			grid-template-columns: 1fr 144px 144px;
		}

		@media (min-width: 992px) {
			grid-template-columns: 1fr 160px 160px;
		}

		& > div {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		p {
			color: ${color.black};
			text-align: left;
			width: 100%;
		}
	}
`;

const SCorpQuizTable = ({ className, content }) => (
	<Wrapper className={className}>
		<GridTableRow
			className="head"
			content={content.headers}
			header
			headerSize={5}
			columns="1fr 160px 160px"
		/>
		{content.rows.map((row, i) => (
            <GridTableRow
                key={i}
				className="table-row"
				content={row}
				columns="1fr 160px 160px"
			/>
		))}
	</Wrapper>
);

export default SCorpQuizTable;
