import React from "react";
import styled from "styled-components";
import { shadow } from "../../atoms/styles/shadows";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Whitebox from "../../atoms/boxes/white-box";
import ButtonLink from "../../molecules/buttons/button";
import ButtonAction from "../../molecules/buttons/button-action";

import Image from "../../atoms/image/image";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled(Whitebox)`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 488px;
	transition: box-shadow 0.3s ease;
	padding: 56px 32px 48px;

	&:hover {
		box-shadow: ${shadow.white2};

		p {
			height: 72px;
		}

		& > div {
			&:last-child {
				height: 304px;
			}
		}
	}
`;

const ImageBox = styled.div`
	display: block;
	width: 158px;
	height: 210px;
	margin: 0 auto 40px;

	.gatsby-image-wrapper {
		height: 100%;
		width: 100%;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 148px;
	transition: height 0.3s ease;

	span,
	p {
		text-align: center;
	}

	span {
		display: block;
		min-height: 48px;
		font-family: Avenir;
		font-weight: 900;
		font-size: 20px;
		line-height: 28px;
		color: ${color.black};
		margin-bottom: 16px;
	}

	p {
		height: 0;
		transition: height 0.3s ease;
		overflow: hidden;
	}
`;

const DownloadPdfBox = ({ className, content, image, openModal }) => {
	return (
		<Wrapper className={className}>
			<ImageBox>
				<Image filename={image} alt={content.imageAlt ?? content.header} />
			</ImageBox>
			<TextWrapper>
				{/* {content.header && (
					<Heading size="4" bottomMargin="16">
						{content.header}
					</Heading>
				)} */}
				{content.header && <span>{content.header}</span>}

				{content.text && <Paragraph bottomMargin="0">{content.text}</Paragraph>}

				{content.button && content.button.type === "internal-link" && (
					<ButtonLink
						content={content.button}
						theme="secondary48"
						margin="36px 0 0"
						marginSM="36px auto 0"
						arrow
					/>
				)}

				{content.button && !content.button?.type && (
					<ButtonAction
						content={content.button}
						onClick={function (e) {
							if (
								typeof window !== "undefined" &&
								typeof window.br_dpfw_m_popup === "function"
							) {
								e.preventDefault();
								window.br_dpfw_m_popup(
									e,
									JSON.parse(JSON.stringify(content.header)),
									JSON.parse(JSON.stringify(content.hs_form_id))
								);
							}
						}}
						theme="secondary48"
						margin="36px 0 0"
						marginSM="36px auto 0"
					/>
				)}
			</TextWrapper>
		</Wrapper>
	);
};

export default DownloadPdfBox;
