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
import OvalGreen3 from "../../../../images/ovals/top-right-transparent-green3.inline.svg";
import { shadow } from "../../../atoms/styles/shadows";
import { Link } from "gatsby";
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

const WrapperContainer = styled.div`
	background: rgb(255, 255, 255);
	padding-bottom: 100px;
	position: relative;
`;

const Oval = styled.div`
	position: absolute;
	left: 0;
	top: 100px;
	width: 100%;
	transform: scaleX(-1);

	@media (min-width: 570px) {
		width: 570px;
	}
`;

const CoachBusinessStructure = () => (
	<WrapperContainer>
		<Oval>
			<OvalGreen3 />
		</Oval>

		<BusinessOwnerResponsibilities>
			<ImageContent image="unique-business-green"  imageAlt="choose right construction company structure" paddingTop="60">
				<Heading size={2} template={3} left>
					Choose the Right Business Structure and Register Your Construction
					Business
				</Heading>
				<Paragraph big>
					Now that you have all the background information for your construction
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
						construction business, you will be a sole proprietor by default.
						This won’t give you the legal protections you need, so we do not
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
                        <ArrowLink
                            externalLink
                            arrow={false}
							url={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}
						>
							Partnership Company or LLC
						</ArrowLink>
					</HeadingP>

					<Paragraph big>
						Similar to a sole proprietorship, if you go into business with
						someone else without forming a legal business entity, you will be
						treated as a partnership. This doesn’t give you limited liability
						protections, so we don’t recommend it for your construction
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
                        <ArrowLink
                            externalLink
                            arrow={false}
							url={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}
						>
							Limited Liability Company or LLC
						</ArrowLink>
					</HeadingP>

					<Paragraph big>
						The most common type of business entity, an LLC is fast, simple and
						inexpensive to set up and maintain. It protects your personal
						finances and assets and is a great way to start your construction
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
							url={
								process.env.ORDER_URL +
								"/form-order-now.php?entityType=SCorporation"
							}
						>
							S Corporation
						</ArrowLink>
					</HeadingP>

					<Paragraph big>
						This is a more complex type of business and isn't generally
						recommended for smaller organizations, but it could be a good fit
						for your construction business depending on your goals.
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
                        <ArrowLink
                            externalLink
                            arrow={false}
							url={
								process.env.ORDER_URL +
								"/form-order-now.php?entityType=CCorporation"
							}
						>
							C Corporation
						</ArrowLink>
					</HeadingP>

					<Paragraph big>
						This is a more complex type of business and isn't generally
						recommended for smaller organizations, but it could be a good fit
						for your construction business depending on your goals.
					</Paragraph>
				</TextBlockWithImage>

				<Paragraph
					big
					style={{ paddingTop: "48px", paddingBottom: 0 }}
					mixed={true}
				>
					For more information on the advantages and disadvantages of different
					types of businesses,
					<Link to="/business-entity-comparison/">
						please see our in-depth guide
					</Link>
					. If you’ve still got questions,{" "}
					<a href="https://grasshopper.com/blog/llc-vs-corporation-8-entrepreneur-questions-answered/" target="_blank" rel="noopener noreferrer">
						we’ve answered them to help you choose the right business structure
					</a>{" "}
					for your construction business.
				</Paragraph>
				<Paragraph
					big
					style={{ paddingTop: "48px", paddingBottom: 0 }}
					mixed={true}
				>
					In most cases, our recommendation for your construction business would
					be to create an LLC. We’ve{" "}
					<Link to="/form-an-llc/">got a complete guide</Link> to everything you
					need to do.{" "}
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
	</WrapperContainer>
);

export default CoachBusinessStructure;
