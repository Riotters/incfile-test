import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { color } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/megafon.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Adventages from "../../../../components/adventages";

const About = styled.section`
	position: relative;
	padding-bottom: 30px;

	@media (min-width: 992px) {
		padding-bottom: 120px;
	}

	p {
		span {
			display: block;
			color: ${color.black};
			font-weight: bold;
			margin-top: 24px;
		}
	}

	.adventage {
		& > div {
			align-items: flex-start;
		}

		p {
			max-width: 400px;
			font-weight: bold;
			color: ${color.black};
			margin-top: 0;
		}
	}
`;

const AboutSection = ({ className, content }) => (
	<About className={className}>
		<ImageContent image="nonprofit-about-2728">
			<IconTextColorBox
				color={color.blue3}
				Icon={IconSVG}
				content={content.box}
				rounded
				curve
				curveColor={color.blue1}
				bottomMargin={48}
			/>
			<Paragraph big mixed>
				{parse(content.text)}
			</Paragraph>
			<Paragraph big mixed bottomMargin={72}>
				{parse(content.text2)}
			</Paragraph>
			<Adventages
				className="adventage"
				disadventage={content.box2.disadventage}
				circleBackgroundColor={content.box2.circleBackgroundColor}
				circleBackgroundShadow={content.box2.circleBackgroundShadow}
				text={content.box2.text}
				width="100%"
			/>
		</ImageContent>
	</About>
);

export default AboutSection;
