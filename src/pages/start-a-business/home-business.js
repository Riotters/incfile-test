import React from "react";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Layout from "../../components/layout";
import styled from "styled-components";
import OvalSvg from "../../images/ovals/bottom-left-transparent-pink.inline.svg";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import { Heading } from "../../atomic/atoms/typography/heading";
import Colorbox from "../../components/color-box";
import MegafonIcon from "../../images/icons/dont-assume-just-because-its-home-based-its-easy.inline.svg";
import { color } from "../../atomic/atoms/styles/colors";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import TypeOfBusiness from "../../atomic/sections/type-of-business/home-business/type-of-business";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/home-business/validating-business";
import BusinessPlan from "../../atomic/sections/type-of-business/home-business/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/home-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/home-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/home-business/order-now";
import Regulations from "../../atomic/sections/type-of-business/home-business/regulations";
import Taxes from "../../atomic/sections/type-of-business/home-business/taxes";
import ToolsAndLinks from "../../atomic/sections/type-of-business/home-business/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import { Link } from "@reach/router";
import ReactTabs from "../../atomic/partials/ReactTabs";
import { tabs } from "../../static/type-of-business/home-business";
import { TabPanel } from "react-tabs";

const HomeBusiness = () => (
	<Layout>
		<SEO
			title="Home Business Ideas | Starting a Business From Home"
			description="We want to help you get your home-based business off the ground. Read our guide for ideas, tips, and important things to know before you get started."
		/>

		<Top
			ovalColor="green"
			imageName="home-business-main"
			imageAlt="Mr Bulb with seedling"
			headlineWidth={700}
		>
			<h1>How to Start a Home-Based Business</h1>
			<p>
				Starting a new business can be a major undertaking, so for entrepreneurs
				wanting to start off small,{" "}
				<Link to="https://www.incfile.com/post/how-start-home-business/">
					a home-based business is a great idea
				</Link>
				. You’ll learn a great deal about running a business successfully, while
				avoiding many of the costs associated with larger businesses, like
				office rental, utilities or hiring employees.
			</p>
			<ButtonsBox>
				<Button
					theme="primary56"
					marginMD="0 24px 0 0"
					arrow
					content={{
						url: `${process.env.ORDER_URL}/form-order-now.php`,
						text: "Start Now",
					}}
				/>
			</ButtonsBox>

			<RatingRow>
				<CartBlock />
				<RatingBlock />
			</RatingRow>
		</Top>

		<TabsWrapper>
			<Oval>
				<OvalSvg />
			</Oval>
			<ReactTabs content={tabs}>
				<TabPanel>
					<PanelWrapper>
						<Paragraph big style={{ marginBottom: "40px" }}>
							If you find a good niche for your home-based business, it can even
							grow to provide a full-time income for you and your family. These
							types of “lifestyle” businesses are becoming increasingly popular,
							and provide the freedom and satisfaction of running your own
							business while avoiding much of the risk that a larger-scale
							venture would create.
						</Paragraph>

						<Colorbox
							className="box"
							theme="icon"
							Icon={MegafonIcon}
							color={color.purple3}
							curve
							curveColor={color.purple1}
						>
							<Heading size={4}>
								We want to help you get your home-based business off the ground.
							</Heading>

							<Paragraph bottomMargin={0}>
								Since 2004, we’ve helped over 500,000 people to become
								entrepreneurs, starting exciting businesses and bringing their
								ideas to life. We’ll give you the support, guidance and advice
								you need to start a business from home and make it into a
								success.
							</Paragraph>
						</Colorbox>

						<Paragraph big style={{ marginTop: "40px" }}>
							From validating your ideas and doing the research to filing your
							paperwork and running your business, this guide will help you out.
							We’ll talk you through the main things you need to do to get your
							home-based business off of the ground.
						</Paragraph>

						<Paragraph big>
							Read on for some insight into starting a business from home and
							becoming an entrepreneur.
						</Paragraph>
					</PanelWrapper>
				</TabPanel>
				<TabPanel>
					<PanelWrapper>
						<Heading size={2} template={3} left>
							Why You Should Start a Business from Home
						</Heading>

						<Paragraph big style={{ marginBottom: "52px" }}>
							You’re probably wondering whether a home-based business is for
							you. If so, we’ve got some surprising statistics that suggest it’s
							a growing and lucrative type of business to run:
						</Paragraph>

						<BlueBoxWithAbsoluteText
							absoluteText="400M"
							text="Businesses in the U.S. that were started from home"
						/>
						<BlueBoxWithAbsoluteText
							absoluteText="$400B"
							text="Total revenue of the 40M businesses per year"
						/>
						<BlueBoxWithAbsoluteText
							absoluteText="100K"
							text="A fifth of home-based businesses make over a year"
						/>

						<div style={{ marginTop: "28px" }}>
							<Adventages
								headline="Nearly three-quarters of home-based businesses are still operating after three years, compared with only a third of traditional businesses"
								width="100%"
							/>
						</div>

						<Adventages
							headline="Almost half of home-based businesses are started for less than $5,000"
							width="100%"
						/>

						<Adventages
							headline="Women start more home-based businesses than men"
							width="100%"
						/>
					</PanelWrapper>
				</TabPanel>
			</ReactTabs>
		</TabsWrapper>

		<TypeOfBusiness />

		<ValidatingBusinessIdea />

		<BusinessPlan />

		<BusinessStructure />

		<SettingBusiness />

		<OrderNow />

		<Regulations />

		<Taxes />

		<ToolsAndLinks />

		<Conclusion
			to={process.env.ORDER_URL + "/form-order-now.php"}
			buttonTitle="Start your business with us, today"
		>
			<Heading size={3} style={{ fontSize: "40px", marginTop: "300px" }}>
				Conclusion
			</Heading>

			<Paragraph big>
				The world of home-based businesses is extremely diverse. With the right
				intent and purpose, you can start a home-based business and turn it into
				something that could earn you more than $100,000 a year. Use this guide
				to start your search, form your business and the sky's the limit!
			</Paragraph>
		</Conclusion>
	</Layout>
);

const ButtonsBox = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 769px) {
		flex-direction: row;
	}
`;

const TabsWrapper = styled.div`
	margin-top: 120px;
	position: relative;
	@media (min-width: 992px) {
		margin-top: 21px;
	}
`;

const Oval = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	z-index: -1;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

export default HomeBusiness;
