import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const FilingRequirementBox = ({ margin, data, className, ...rest }) => {
	return (
		<Filing margin={margin} className={className} {...rest}>
			{parse(data?.filings ? data.filings.requirement : "loading")}
		</Filing>
	);
};

export default FilingRequirementBox;

const Filing = styled.div`
	width: 100%;
	margin: ${(props) => (props.margin ? props.margin : "52px 0 42px 0")};

	p:nth-child(4) > strong {
		padding-right: 10px;
	}

	div.full-width {
		margin-bottom: 24px;
	}

	h3,
	h4 {
		font-family: Engram;
		font-weight: 900;
		font-size: 20px;
		line-height: 28px;
		margin-bottom: 15px;
		margin-top: 42px;
	}

	p {
		width: 100%;
		background-color: #ffffff;
		box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
		border-radius: 5px;
		padding: 24px;
		margin-bottom: 8px;
		display: flex;
		flex-direction: column;
		font-size: 16px;
		gap: 30px;
		align-items: baseline;

		@media (min-width: 576px) {
			flex-direction: row;
		}

		// span {
		// 	display: flex;
		// 	flex-direction: column;

		// 	@media (min-width: 576px) {
		// 		flex-direction: row;
		// 	}
		// }

		strong {
			display: flex;
			align-items: center;
			font-family: Engram, sans-serif;
			font-size: 16px;
			line-height: 24px;
			margin-bottom: 0px;
			min-width: 110px;
		}
	}

	.full-width {
		margin-top: 20px;
	}
`;
