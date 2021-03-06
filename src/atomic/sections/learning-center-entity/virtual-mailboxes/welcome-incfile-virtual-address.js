import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-bottom-transparent-purple2.inline.svg";
import IconSVG from "../../../../images/icons/megafon.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import { Heading } from "../../../atoms/typography/heading";
import LightBox from "../../../../components/LightBox";

const Section = styled.section`
	position: relative;
	padding-bottom: 120px;

	.oval {
		max-width: 100%;
		overflow: hidden;
	}

	p {
		color: ${color.grey2};
	}

	ul {
		margin-bottom: 0;
	}
`;

const VirtualAddressSection = ({ className, content }) => (
	<Section className={className}>
		<Oval className="oval" height="420" width="420" y="15">
			<OvalSVG />
		</Oval>
        <ImageContent image="virtual-mailbox-service-5488">
            <LightBox
                bottomMargin={42}
                thumbnailVideo="thumb-video-virtual-mailbox"
                videoID="-LK9F9jQE6Q"
            />
			<Paragraph big>{content.text}</Paragraph>
			<Paragraph big style={{ fontWeight: "bold", color: color.black }}>
				{content.text2}
			</Paragraph>
			<IconTextColorBox
				color={color.blue3}
				Icon={IconSVG}
				content={content.box}
				rounded
				curve
				curveColor={color.green1}
			/>
		</ImageContent>
	</Section>
);

export default VirtualAddressSection;
