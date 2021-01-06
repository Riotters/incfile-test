import styled from "styled-components";
import parse from "html-react-parser";
import { Heading } from "../../atoms/typography/heading";
import ImageContent from "../../partials/left-image-right-content";
import React from "react";
import Button from "../../molecules/buttons/button-action";
import { Paragraph } from "../../atoms/typography/paragraph";
import { scrollToElement } from "../../../helpers/utils";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.div`
	position: relative;
	padding: 38px 0;

	background: linear-gradient(180deg, rgba(255, 255, 255, 0) 4%, #fef6ed 99%);

	.oval {
		overflow: hidden;
	}

	p {
		span {
			display: block;
			margin-bottom: 24px;
			text-align: left;
			font-family: Engram;
			font-weight: 900;
			font-size: 20px;
			line-height: 28px;
			color: ${color.black};
		}
	}
`;

const AccountingAndTaxes = ({ content }) => (
	<Wrapper>
		<ImageContent
			image="main-header-object-certificate-good-standing-5915"
			alt="all your accounting and tax needs"
		>
			<Paragraph big mixed bottomMargin={48}>
				{parse(content.text)}
			</Paragraph>
			<Button
				onClick={(e) => scrollToElement(e, "js-business-tax-signup-form")}
				content={content.button}
				theme="primary56"
				margin="0 auto 0 0"
				arrow
			/>
			<span
				style={{
					marginTop: "24px",
					marginBottom: "24px",
					fontFamily: "Engram-Bold",
					fontSize: "16px",
					lineHeight: "24px",
				}}
			>
				{content.header2}
			</span>
		</ImageContent>
	</Wrapper>
);

export default AccountingAndTaxes;
