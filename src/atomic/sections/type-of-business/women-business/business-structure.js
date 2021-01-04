import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import { color } from "../../../../components/styles/colors";
import ArrowsIcon from "../../../../images/icons/arrows.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import PlaneIcon from "../../../../images/icons/plane.inline.svg";
import RockerIcon from "../../../../images/icons/rocket.inline.svg";
import UmbrellaIcon from "../../../../images/icons/umbrella.inline.svg";
import OvalGreen3 from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import { shadow } from "../../../atoms/styles/shadows";
import { Heading } from "../../../atoms/typography/heading";
import { HeadingP } from "../../../atoms/typography/heading-to-p";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Button from "../../../molecules/buttons/button";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";

const BusinessOwnerResponsibilities = styled.section`
	position: relative;
	padding-top: 75px;
	padding-bottom: 64px;

	.colorbox {
		margin-bottom: 48px;
	}
`;

const OrangeContainer = styled.div`
	padding-bottom: 100px;
	position: relative;
`;

const Oval = styled.div`
	position: absolute;
	left: 0;
	top: 100px;
	width: 100%;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const BusinessStructure = () => (
	<OrangeContainer>
		<Oval>
			<OvalGreen3 />
		</Oval>

		<BusinessOwnerResponsibilities>
			<ImageContent image="unique-business-2" imageAlt="choose right women business" paddingTop="60">
				<Heading size={2} template={3} left>
					Choose the Right Business Structure and Register Your Business
				</Heading>
				<Paragraph big>
					Now that you have all the background information for your woman-owned
					business, it’s time to make it into a reality. That starts by choosing
					the right structure or “legal entity” for your business. In the U.S.,
					there are five main business structures:
				</Paragraph>

				<TextBlockWithImage
					SvgImage={HandsIcon}
					textBackgroundColor="transparent"
					imageBackgroundColor={color.white}
					imageShadowColor={shadow.white2}
					imageShadowOpacity={0.5}
					boxShadow={false}
					paddingLeft={0}
					style={{ marginTop: "70px" }}
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
						This is the "default" business structure and is what your business
						will be if you decide not to create a more formal structure. We
						don't recommend this type of business as it doesn't give you the
						legal protections you need.
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
					style={{ marginTop: "70px" }}
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
						<Link
							to={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}
						>
							Partnership Company or LLC
						</Link>
					</HeadingP>

					<Paragraph big>
						This is a type of business that is formed when two or more people
						work together without creating a more formal business entity. Like a
						sole proprietorship, it may not provide all the protections your
						business may need.
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
					style={{ marginTop: "70px" }}
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
						<Link
							to={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}
						>
							Limited Liability Company or LLC
						</Link>
					</HeadingP>

					<Paragraph big>
						The most common type of business entity, an LLC is fast, simple and
						inexpensive to set up and maintain. It protects your personal
						finances and assets and is a great way to start your woman-owned
						business.
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
					style={{ marginTop: "70px" }}
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
						<Link
							to={
								process.env.ORDER_URL +
								"/form-order-now.php?entityType=SCorporation"
							}
						>
							S Corporation
						</Link>
					</HeadingP>

					<Paragraph big>
						This is a more complex type of business and isn't generally
						recommended for smaller organization.
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
					style={{ marginTop: "70px" }}
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
						<Link
							to={
								process.env.ORDER_URL +
								"/form-order-now.php?entityType=CCorporation"
							}
						>
							C Corporation
						</Link>
					</HeadingP>

					<Paragraph big>
						These are the largest and most complex types of businesses and are
						far more than the average entrepreneur or business owner will need.
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
					for your women business.
				</Paragraph>
				<Paragraph big mixed={true}>
					In most cases, our recommendation would be to create an LLC. We’ve{" "}
					<Link to="/form-an-llc/">
						got a complete guide to everything you need to do
					</Link>
					, — and we can even set up your LLC for you
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
