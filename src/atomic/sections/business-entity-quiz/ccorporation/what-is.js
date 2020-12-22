import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import OvalSvg from "../../../../images/ovals/top-left-transparent-orange.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import ContentCenter from "../../../partials/content-center";

const ContainerWrapper = styled.section`
	background: rgb(255, 255, 255);
	background-image: ${gradient.orange3reverse};
	padding-top: 100px;
	padding-bottom: 100px;
	position: relative;
`;

const TitleBox = styled.div`
	width: 100%;
	position: relative;
	max-width: 750px;

	@media (min-width: 750px) {
		margin: 0 auto;
	}

	p {
		text-align: center;
	}
`;

const OvalCenter = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const WhatIsSCorp = () => (
	<ContainerWrapper>
		<OvalCenter>
			<OvalSvg />
		</OvalCenter>

		<ContentCenter>
			<TitleBox>
				<Heading size={2}>What Is a C Corporation?</Heading>
				<Paragraph big mixed>
					{parse(`A C Corporation is one of several ways to legally recognize a business for tax, regulatory and official reasons. A C Corp is simply a way to structure ownership 
                    of a business, and contrasts with other popular business structures including Limited Liability Companies (LLCs), S Corporations, Sole Proprietorships and others.
                    <br><br>
                    Generally, a C Corporation structure is better for larger businesses. This is particularly true if they intend to publicly trade shares, through having an Initial Public Offering, or IPO. A C Corporation is much more attractive to potential investors, including venture capitalists and shareholders because it allows wider ownership of the corporation.
                    <br><br>
                    The majority of larger businesses in the United States are structured 
                    as C Corporations, although a C Corp could, theoretically, consist of just one person. The information below will help you decide if a C Corporation structure is right 
                    for your business.`)}
				</Paragraph>
			</TitleBox>
		</ContentCenter>
	</ContainerWrapper>
);

export default WhatIsSCorp;
