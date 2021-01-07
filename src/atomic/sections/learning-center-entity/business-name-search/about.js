import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-babyblue.inline.svg";
import LightBoxVideo from "../../../../components/LightBox";

const About = styled.section`
	position: relative;
	padding-bottom: 136px;
`;

const AboutSection = ({ className, content }) => (
	<About className={className}>
		<Oval className="oval" height="720" width="720" y="-40">
			<OvalSVG />
		</Oval>
		<ImageContent image="business-name-search-about-7420" alt="business name search">
			<Paragraph big>{content.text}</Paragraph>
			<Paragraph
				big
				bottomMargin={24}
				style={{
					fontWeight: "bold",
					color: color.black,
					fontSize: "24px",
					lineHeight: "32px",
					fontFamily: "MarkPro",
				}}
			>
				{content.header2}
			</Paragraph>
			<Paragraph big bottomMargin="56">
				{content.text2}
			</Paragraph>
            <LightBoxVideo
                alt="perform a business name"
				thumbnailVideo="how-do-i-perform-a-business-name-search-5332"
				videoID="XePRillB3UE"
			/>
		</ImageContent>
	</About>
);

export default AboutSection;
