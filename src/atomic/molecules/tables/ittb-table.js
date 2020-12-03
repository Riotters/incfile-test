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

	.table-head,
	.table-row {
		@media (min-width: 769px) {
			grid-template-columns: 33.33% 66.67%;
		}

		@media (min-width: 992px) {
			grid-template-columns: 33.33% 66.67%;
		}

		& > div {
			justify-content: flex-start;
			align-items: flex-start;
			min-width: 122px;

			p {
				text-align: left;

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
			p {
				color: ${color.black};
			}
		}
	}

	.table-row {
		& > div {
			p {
				color: ${color.grey1};
			}
		}
	}
`;

const ITTBTable = ({ className, content }) => (
	<Wrapper className={className}>
		<GridTableRow
			className="table-head"
			content={content.headers}
			header
			headerSize="5"
		/>
		{content.rows.map((row) => (
			<GridTableRow className="table-row" content={row} />
		))}
	</Wrapper>
);

export default ITTBTable;
