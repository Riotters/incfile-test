import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { color } from "../../../../components/styles/colors";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import PlaneIcon from "../../../../images/icons/plane.inline.svg";
import RockerIcon from "../../../../images/icons/rocket.inline.svg";
import UmbrellaIcon from "../../../../images/icons/umbrella.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import ArrowsIcon from "../../../../images/icons/arrows.inline.svg";
import Button from "../../../molecules/buttons/button";
import OvalGreen3 from "../../../../images/ovals/top-right-transparent-babyblue2.inline.svg";
import { shadow } from "../../../atoms/styles/shadows";
import { HeadingP } from "../../../atoms/typography/heading-to-p";
import ArrowLink from "../../../../components/arrow-link";

const BusinessOwnerResponsibilities = styled.section`
	position: relative;
	padding-top: 75px;
	padding-bottom: 64px;

	.colorbox {
		margin-bottom: 48px;
	}
`;

const OrangeContainer = styled.div`
	background: rgb(255, 255, 255);
	padding-bottom: 100px;
	position: relative;
`;

const Oval = styled.div`
	position: absolute;
	left: 0;
	top: 211px;
	width: 100%;
	transform: scaleX(-1);

	@media (min-width: 570px) {
		width: 570px;
	}
`;

const BusinessStructure = () => (
	<OrangeContainer>
		<Oval>
			<OvalGreen3 />
		</Oval>

		<BusinessOwnerResponsibilities>
			<ImageContent image="unique-business-green" alt="choose right business structure" paddingTop="60">
				<Heading size={2} template={3}>
					Choose the Right Business Structure and Register Your Bed and
					Breakfast
				</Heading>
				<Paragraph big>
					There are five main business structures you can have in the U.S., and
					it’s important to choose the right one. We’ve shared your options
					below. They are:
				</Paragraph>

				<TextBlockWithImage
					SvgImage={HandsIcon}
					textBackgroundColor="transparent"
					imageBackgroundColor={color.white}
					imageShadowColor={shadow.white2}
					imageShadowOpacity={0.5}
					boxShadow={false}
					paddingLeft={0}
					style={{ marginTop: "40px" }}
					circleShadowY={40}
					circleShadowBlure={80}
					width={100}
					widthUnit="%"
				>
					<HeadingP
						size={3}
						big
						style={{ color: color.blue1, fontWeight: "bold" }}
						mixed={true}
					>
						Sole Proprietorship
					</HeadingP>

					<Paragraph big>
						This is the "default" business structure and is what your bed and
						breakfast business will be if you decide not to create a more formal
						structure. We don't recommend this type of business as it doesn't
						give you the legal protections you need.
					</Paragraph>
				</TextBlockWithImage>

				<TextBlockWithImage
					SvgImage={UmbrellaIcon}
					textBackgroundColor="transparent"
					imageBackgroundColor={color.white}
					imageShadowColor={shadow.white2}
					imageShadowOpacity={0.5}
					boxShadow={false}
					paddingLeft={0}
					style={{ marginTop: "40px" }}
					circleShadowY={40}
					circleShadowBlure={80}
					width={100}
					widthUnit="%"
				>
					<HeadingP
						size={3}
						big
						style={{ color: color.blue1, fontWeight: "bold" }}
						mixed={true}
					>
                        <ArrowLink
                            externalLink
                            arrow={false}
							url={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}
						>
							Partnership Company or LLC
						</ArrowLink>
					</HeadingP>

					<Paragraph big>
						This is a type of business that is formed when two or more people
						work together without creating a more formal business entity. Like a
						sole proprietorship, it may not give you all the protections your
						bed and breakfast business may need.
					</Paragraph>
				</TextBlockWithImage>

				<TextBlockWithImage
					SvgImage={ArrowsIcon}
					textBackgroundColor="transparent"
					imageBackgroundColor={color.white}
					imageShadowColor={shadow.white2}
					imageShadowOpacity={0.5}
					boxShadow={false}
					paddingLeft={0}
					style={{ marginTop: "40px" }}
					circleShadowY={40}
					circleShadowBlure={80}
					width={100}
					widthUnit="%"
				>
					<HeadingP
						size={3}
						big
						style={{ color: color.blue1, fontWeight: "bold" }}
						mixed={true}
					>
                        <ArrowLink
                            externalLink
                            arrow={false}
							url={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}
						>
							Limited Liability Company or LLC
						</ArrowLink>
					</HeadingP>

					<Paragraph big>
						The most common type of business entity. An LLC is fast, simple and
						inexpensive to set up and maintain. It protects your personal
						finances and assets and is a great way to start your bed and
						breakfast business.
					</Paragraph>
				</TextBlockWithImage>

				<TextBlockWithImage
					SvgImage={PlaneIcon}
					textBackgroundColor="transparent"
					imageBackgroundColor={color.white}
					imageShadowColor={shadow.white2}
					imageShadowOpacity={0.5}
					boxShadow={false}
					paddingLeft={0}
					style={{ marginTop: "40px" }}
					circleShadowY={40}
					circleShadowBlure={80}
					width={100}
					widthUnit="%"
				>
					<Paragraph
						big
						style={{ color: color.blue1, fontWeight: "bold" }}
						mixed={true}
					>
                        <ArrowLink
                            externalLink
                            arrow={false}
							url={process.env.ORDER_URL + "/form-order-now.php?entityType=SCorporation"}
						>
							S Corporation
						</ArrowLink>
					</Paragraph>

					<Paragraph big>
						This is a more complex type of business and isn't generally
						recommended for smaller organizations.
					</Paragraph>
				</TextBlockWithImage>

				<TextBlockWithImage
					SvgImage={RockerIcon}
					textBackgroundColor="transparent"
					imageBackgroundColor={color.white}
					imageShadowColor={shadow.white2}
					imageShadowOpacity={0.5}
					boxShadow={false}
					paddingLeft={0}
					style={{ marginTop: "40px" }}
					circleShadowY={40}
					circleShadowBlure={80}
					width={100}
					widthUnit="%"
				>
					<Paragraph
						big
						style={{ color: color.blue1, fontWeight: "bold" }}
						mixed={true}
					>
                        <ArrowLink
                            externalLink
                            arrow={false}
							url={process.env.ORDER_URL + "/form-order-now.php?entityType=CCorporation"}
						>
							C Corporation
						</ArrowLink>
					</Paragraph>

					<Paragraph big>
						These are the largest and most complex types of businesses and are
						typically far more than the average hospitality entrepreneur or bed
						and breakfast business owner will need.
					</Paragraph>
				</TextBlockWithImage>

				<Paragraph
					big
					style={{ paddingTop: "48px", paddingBottom: 0 }}
					mixed={true}
				>
					For more information on the advantages and disadvantages of different
					types of businesses,{" "}
					<Link to="/business-entity-comparison/">
						please see our in-depth guide
					</Link>
					. If you’ve still got questions,{" "}
					<a
						href="https://grasshopper.com/blog/llc-vs-corporation-8-entrepreneur-questions-answered/"
						target="_blank"
						rel="noopener noreferrer"
					>
						we’ve answered them to help you choose the right business structure
					</a>{" "}
					for your bed and breakfast business.
				</Paragraph>
				<Paragraph
					big
					mixed={true}
					style={{ marginBottom: "48px", paddingBottom: 0 }}
				>
					In most cases, our recommendation for your bed and breakfast business
					would be to create an LLC. We’ve got a{" "}
					<Link to="/form-an-llc/">
						complete guide to everything you need to do
					</Link>
					.{" "}
					<Link to="/llc-state-information/">
						LLC formation does vary from state to state
					</Link>
					, but we’ve got you covered, wherever you are.
				</Paragraph>

                <Button
                    externalLink
					theme="primary48"
					width="365px"
					arrow
					content={{
						url: `${process.env.ORDER_URL}/form-order-now.php`,
						text: `Start your business with us, today!`,
					}}
				/>
			</ImageContent>
		</BusinessOwnerResponsibilities>
	</OrangeContainer>
);

export default BusinessStructure;
