import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Form from "../../../organisms/forms/business-name-search-form";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";

const Care = styled.section`
	position: relative;
	padding-top: 104px;
	padding-bottom: 104px;
	background-color: ${color.orange3};
`;

const CareSection = ({ className, content, id }) => {
	return (
		<Care className={className} id={id}>
			<Oval className="oval" height="720" width="720" top="0" right="0">
				<OvalSVG />
			</Oval>
			<ContentCenter>
				<Heading size="2" maxWidth="770" style={{ textAlign: "center" }}>
					Free Business Name Search
				</Heading>
				<Paragraph
					big
					bottomMargin={24}
					style={{
						fontWeight: "bold",
						color: color.black,
						fontSize: "24px",
						lineHeight: "32px",
						fontFamily: "Engram-Bold",
					}}
				>
					We’ll Take Care of the Entity Search.
				</Paragraph>
				<Paragraph
					big
					maxWidth="770"
					style={{ textAlign: "center" }}
					bottomMargin="80"
				>
					We’ll tell you if your business name is available with the Secretary
					of State. Just fill in your proposed business name, and we’ll search
					the company registrar for you.
				</Paragraph>
				<Form content={content.form} />
			</ContentCenter>
		</Care>
	);
};

export default CareSection;
