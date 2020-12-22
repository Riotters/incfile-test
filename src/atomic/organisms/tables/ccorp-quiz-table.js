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
	margin-bottom: 80px;

	.head {
		& > div {
			align-items: flex-start;
		}
	}

	.table-row {
		& > div {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		p {
			display: flex;
			justify-content: space-between;
			color: ${color.black};
			text-align: left;
			width: 100%;
		}
	}
`;

const CCorpQuizTable = ({ className, content }) => (
	<Wrapper className={className}>
		<GridTableRow
			className="head"
			content={content.headers}
			header
			headerSize={5}
			columns="1fr"
		/>
		{content.rows.map((row, i) => (
			<GridTableRow key={i} className="table-row" content={row} columns="1fr 1fr" />
		))}
	</Wrapper>
);

export default CCorpQuizTable;
