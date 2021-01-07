import React from "react";
import styled from "styled-components";
import GridTableRow from "../../molecules/blocks/grid-table-row";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	h5 {
		font-family: Engram, sans-serif;
	}

	.head,
	.row {
		width: fit-content;

		@media (min-width: 769px) {
			width: 100%;
		}

		& > div {
			@media (min-width: 769px) {
				min-width: 120px;
			}

			&:not(:first-child) {
				justify-content: center;

				h5,
				p {
					text-align: center;
				}
			}
		}
	}

	.row {
		& > div {
			&:not(:first-child) {
				p {
					background-color: ${color.green3};
					border-radius: 20px;
					padding: 8px 16px;
				}
			}
		}
	}

	p {
		font-size: 16px;
		line-height: 24px;
		color: ${color.black};
	}
`;

const TaxReturnTable = ({
	className,
	headerSize = 3,
	headerSizeTemplate = 5,
	content,
}) => {
	return (
		<Wrapper className={className}>
			<GridTableRow
				className="head"
				content={content.headers}
				header
				headerSize={headerSize}
				headerSizeTemplate={headerSizeTemplate}
				columns="3fr 1fr 1fr 1fr 1fr"
			/>
			{content.rows.map((row, i) => (
				<GridTableRow
					key={i}
					className="row"
					content={row}
					columns="3fr 1fr 1fr 1fr 1fr"
				/>
			))}
		</Wrapper>
	);
};

export default TaxReturnTable;
