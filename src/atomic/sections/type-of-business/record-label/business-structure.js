import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { color } from "../../../../components/styles/colors";
import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import PlaneIcon from "../../../../images/icons/plane.inline.svg";
import RockerIcon from "../../../../images/icons/rocket.inline.svg";
import UmbrellaIcon from "../../../../images/icons/umbrella.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import ArrowsIcon from "../../../../images/icons/arrows.inline.svg";
import Button from "../../../molecules/buttons/button";
import OvalGreen3 from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";
import { shadow } from "../../../atoms/styles/shadows";
import { gradient } from "../../../atoms/styles/colors";
import { Link } from "gatsby";
import { HeadingP } from "../../../atoms/typography/heading-to-p";

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
	background-image: ${gradient.orange3};
	padding-bottom: 100px;
	position: relative;
`;

const Oval = styled.div`
	position: absolute;
	left: 0;
	top: 100px;
	width: 100%;

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
			<ImageContent image="unique-business-2" imageAlt="choose right record label business" paddingTop="60">
				<Heading size={3} template={3}>
					Choose the Right Business Structure and Register Your Record Label
					Business
				</Heading>
				<Paragraph big>
					Now that you have all the background information for your record label
					business, it’s time to make it into a reality. That starts by choosing
					the right structure or “legal entity” for your business. In the U.S.,
					there are five main business structures. They are:
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
						If you don’t choose to form a legal business entity for your record
						label business, you will be a sole proprietor by default. This won’t
						give you the legal protections you need, so we do not recommend
						this.
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
						<Link
							to={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}
						>
							Partnership Company or LLC
						</Link>
					</HeadingP>

					<Paragraph big>
						Similar to a sole proprietorship, if you go into business with
						someone else without forming a legal business entity, you will be
						treated as a partnership. This doesn’t give you limited liability
						protections, so we don’t recommend it for your record label
						business.
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
						<Link
							to={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}
						>
							Limited Liability Company or LLC
						</Link>
					</HeadingP>

					<Paragraph big>
						The limited liability company (LLC) is ideal for most record label
						businesses. An LLC is easy and inexpensive to set up, and has the
						least administrative requirements of any formal business entity.
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
						recommended for smaller organizations, like a record label business.
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
						typically far more than the average entrepreneur or record label
						business owner will need.
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
					for your record label business.
				</Paragraph>
				<Paragraph
					big
					mixed={true}
					style={{ marginBottom: "48px", paddingBottom: 0 }}
				>
					In most cases, our recommendation for your party planning business
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
