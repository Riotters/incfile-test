import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { color } from "../../../../components/styles/colors";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import ArrowSVG from "../../../../images/arrow.inline.svg";
import IconCircle from "../../../../components/icons/circle";
import PlaneIcon from "../../../../images/icons/plane.inline.svg";
import RockerIcon from "../../../../images/icons/rocket.inline.svg";
import UmbrellaIcon from "../../../../images/icons/umbrella.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import ArrowsIcon from "../../../../images/icons/limited-liability-company-or-llc.inline.svg";
import Button from "../../../molecules/buttons/button";
import { shadow } from "../../../atoms/styles/shadows";
import OvalSvg from "../../../../images/ovals/top-right-transparent-green3.inline.svg";
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

const WrapperContainer = styled.div`
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

const CoachBusinessStructure = () => (
	<WrapperContainer>
		<Oval>
			<OvalSvg />
		</Oval>

		<BusinessOwnerResponsibilities>
			<ImageContent image="unique-business-green" paddingTop="60">
				<Heading size={2} template={3} left>
					Choose the Right Business Structure and Register Your Publishing
					Company
				</Heading>
				<Paragraph big>
					Now that you have all the background information for your publishing
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
						If you don’t choose to form a legal business entity for your
						publishing business, you will be a sole proprietor by default. This
						won’t give you the legal protections you need, so we do not
						recommend this.
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
						This is a type of business that is formed when two or more people
						work together without creating a more formal business entity. Like a
						sole proprietorship, it may not give you all the protections your
						publishing business may need.
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
						This is a type of business that is formed when two or more people
						work together without creating a more formal business entity. Like a
						sole proprietorship, it may not give you all the protections your
						publishing business may need.
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
						typically far more than the average entrepreneur will need.
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
					for your publishing company business.
				</Paragraph>
				<Paragraph
					big
					style={{ paddingTop: "48px", paddingBottom: 0 }}
					mixed={true}
				>
					In most cases, our recommendation for your publishing business would
					be to create an LLC. We’ve{" "}
					<Link to="/form-an-llc/">got a complete guide</Link> to everything you
					need to do.{" "}
					<Link to="/llc-state-information/">
						LLC formation does vary from state to state
					</Link>
					, but we’ve got you covered, wherever you are.
				</Paragraph>

				<Button
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
	</WrapperContainer>
);

export default CoachBusinessStructure;
