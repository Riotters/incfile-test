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
	margin-bottom: ${(props) =>
		props.bottomMargin ? `${props.bottomMargin}px` : ""};

	.table-head,
	.table-row {
		grid-template-columns: 50% 50%;
		grid-template-areas:
			"header header"
			"col1 col2";

		@media (min-width: 769px) {
			grid-template-columns: 33.33% 33.33% 33.33%;
			grid-template-areas: "header col1 col2";
		}

		@media (min-width: 992px) {
			grid-template-columns: 33.33% 33.33% 33.33%;
		}

		& > div {
			justify-content: flex-start;
			align-items: flex-start;
			min-width: 122px;

			&:nth-child(1) {
				grid-area: header;
			}
			&:nth-child(2) {
				grid-area: col1;
			}
			&:nth-child(3) {
				grid-area: col2;
			}

			p {
				text-align: left;
				color: ${color.black};

				span {
					font-weight: normal;
				}
			}

			ul {
				list-style: none;

				li {
					position: relative;
					margin-bottom: 12px;

					&::before {
						content: "";
						height: 4px;
						width: 4px;
						border-radius: 50%;
						position: absolute;
						top: 10px;
						left: -12px;
						background-color: ${color.orange1};
					}
				}
			}
		}
	}

	.table-head {
		& > div {
			align-items: flex-end;

			&:nth-child(2),
			&:nth-child(3) {
				justify-content: center;
			}
		}
	}

	.table-row {
		& > div {
			&:first-child {
				p {
					font-weight: bold;
				}
			}
		}
	}
`;

const IncfileVsCompareTableA = ({ className, content }) => (
	<Wrapper className={className} bottomMargin={content.bottomMargin}>
		<GridTableRow
			className="table-head"
			content={content.headers}
			header
			headerSize={5}
			badge={content.badge}
		/>
		{content.rows.map((row, i) => (
			<GridTableRow className="table-row" content={row} key={i} />
		))}
	</Wrapper>
);

export default IncfileVsCompareTableA;
