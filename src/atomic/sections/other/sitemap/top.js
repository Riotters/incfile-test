import React from "react";
import styled from "styled-components";
import { color } from "../../../../components/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";
import ContentCenter from "../../../partials/content-center";
import { Heading } from "../../../atoms/typography/heading";

const Wrapper = styled.div`
	padding: 120px 0;
	position: relative;

	.oval {
		top: 36%;
		left: 36%;
	}

	h1 {
		padding-top: 136px;
	}
`;

function Top({ content }) {
	return (
		<Wrapper>
			<Curve className="oval" rotate="-5" color={color.orange1}>
				<CurveSVG />
			</Curve>
			<ContentCenter>
				<Heading size={1} template={2} maxWidth="770">
					{content.header}
				</Heading>
			</ContentCenter>
		</Wrapper>
	);
}

export default Top;
