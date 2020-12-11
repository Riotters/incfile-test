import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Top from "../../atomic/partials/top";
import styled from "styled-components";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import Colorbox from "../../components/color-box";
import StarIcon from "../../images/icons/star-with-base.inline.svg";
import { color } from "../../components/styles/colors";
import { Heading } from "../../atomic/atoms/typography/heading";
import Adventages from "../../components/adventages";
import TypeBusiness from "../../atomic/sections/type-of-business/women-business/type-of-business";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/women-business/validating-business";
import BusinessPlan from "../../atomic/sections/type-of-business/women-business/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/women-business/business-structure";
import OrderNow from "../../atomic/sections/type-of-business/women-business/order-now";
import Regulations from "../../atomic/sections/type-of-business/women-business/regulations";
import Taxes from "../../atomic/sections/type-of-business/women-business/taxes";
import ToolsAndLinks from "../../atomic/sections/type-of-business/women-business/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import Grants from "../../atomic/sections/type-of-business/women-business/grants";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import CircleWithText from "../../atomic/molecules/blocks/circle-with-text-block";
import Chart from "../../images/icons/circle-2.inline.svg";
import TabsOvalOneSvg from "../../images/ovals/bottom-left-transparent-orange.inline.svg";
import ReactTabs from "../../atomic/partials/ReactTabs";
import { tabs } from "../../static/type-of-business/women-business";
import { TabPanel } from "react-tabs";

const WomenBusiness = () => (
	<Layout>
		<SEO
			title="Business Ideas for Women & Moms | Starting a Woman-Owned Business"
			description="We want to help you get your business off the ground. Read our guide for ideas, tips, and important things to know before you get started."
		/>

		<Top
			ovalColor="yellow"
			imageName="women-business-main"
			imageAlt="Mr Bulb with seedling"
			headlineWidth={700}
		>
			<h1>Business Ideas for Women</h1>
			<p>
				There are constant demands on your time as a woman - whether you have
				kids or not, the mix of a job, household chores and all the other
				responsibilities that creep into your day could lead you to think you
				don’t have time to run a business.
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
			<TabOvalOne>
				<TabsOvalOneSvg />
			</TabOvalOne>

			<ReactTabs content={tabs}>
				<TabPanel>
					<PanelWrapper>
						<Paragraph big>
							Although starting a new business or running a business on the side
							can take a fair amount of time and effort, the rewards could be
							more than worth it.
						</Paragraph>
						<Paragraph big>
							Of course, as a woman, you know the trick is to have a business
							that integrates with your life, while still giving you the time
							you need to meet your commitments. There are many types of
							businesses a female entrepreneur can start to test the waters —
							and if you like one of them, you can grow it into providing a
							substantial part- or full-time income.
						</Paragraph>

						<Colorbox
							className="box"
							theme="icon"
							Icon={StarIcon}
							color={color.purple3}
							curve
							curveColor={color.purple1}
						>
							<Heading size={2} template={4} left>
								We want to help you get your business off the ground.
							</Heading>
							<Paragraph bottomPadding={0} bottomMargin={0}>
								Since 2004, we’ve helped over 500,000 people start exciting
								businesses and bring their ideas to life. We’ll give you the
								support, guidance and advice you need to create a woman-owned
								business and make it into a success.
							</Paragraph>
						</Colorbox>

						<Paragraph big style={{ marginTop: "48px" }}>
							Here is our simple guide to finding the right ideas, researching
							and creating a successful business. Whether you’re a stay-at-home
							mom or an independent business woman, this guide is here to help
							you.
						</Paragraph>
					</PanelWrapper>
				</TabPanel>
				<TabPanel>
					<PanelWrapper>
						<Heading size={2} template={3} left>
							Why You Should Start a New Woman-Owned Business
						</Heading>
						<Paragraph big style={{ marginBottom: "52px" }}>
							Some of the best inspiration comes from learning about the
							successes of other women who have started businesses. Here are
							some statistics about how successful you could be:
						</Paragraph>

						<BlueBoxWithAbsoluteText
							absoluteText="12M"
							text="Businesses in the U.S. are owned by women"
						/>
						<BlueBoxWithAbsoluteText
							absoluteText="$2.5T"
							text="Generated sales a year of women entrepreneurs as majority or joint business owners"
						/>
						<BlueBoxWithAbsoluteText
							absoluteText="$1M"
							text="Sales a year or more by nearly one in 20 firms owned by women"
						/>

						<CircleWithText
							textInsideCircle="40"
							textLine="Of privately - held businesses are owned by women"
							withBg={true}
							SvgChart={Chart}
							symbol="%"
						/>

						<div style={{ marginBottom: "30px", marginTop: "48px" }}>
							<Adventages
								headline="Over the last 10 years, the number of women-owned businesses has grown by 45 percent (five times faster than the national average)"
								width="100%"
							/>
						</div>

						<div style={{ marginBottom: "30px" }}>
							<Adventages
								headline="Nearly two-thirds of female entrepreneurs say their business is their main source of income"
								width="100%"
							/>
						</div>

						<div style={{ marginBottom: "48px" }}>
							<Adventages
								headline="Women are more likely to start service businesses, especially around healthcare and education"
								width="100%"
							/>
						</div>

						<Paragraph big>
							This is why businesses started by female entrepreneurs are so
							exciting - so how can you be part of that success? We're here to
							help you figure that out.
						</Paragraph>
					</PanelWrapper>
				</TabPanel>
			</ReactTabs>
		</TabsWrapper>

		<Grants />

		<TypeBusiness />

		<ValidatingBusinessIdea />

		<BusinessPlan />

		<BusinessStructure />

		<OrderNow />

		<Regulations />

		<Taxes />

		<ToolsAndLinks />

		<Conclusion
			to={process.env.ORDER_URL + "/form-order-now.php"}
			buttonTitle="Why delay? Start your Business with us, today"
		>
			<Heading size={3} style={{ fontSize: "48px" }}>
				Conclusion
			</Heading>
			<Paragraph big>
				When you’re ready to embark on your new entrepreneurial career, be sure
				to take a look at our Start a Business Checklist to get your business
				going in the best possible way. We’re confident you can find the perfect
				business to fit in with your lifestyle. The speed of growth for
				woman-owned businesses is necessary and inspiring. We hope you’ve found
				this guide useful, and that it sets you on the path to building the next
				great business as a female entrepreneur!
			</Paragraph>
		</Conclusion>
	</Layout>
);

const TabsWrapper = styled.section`
	margin-top: 120px;
	position: relative;
	@media (min-width: 992px) {
		margin-top: 21px;
	}
`;

const TabOvalOne = styled.div`
	position: absolute;
	width: 100%;
	left: 0;
	top: 21px;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const ButtonsBox = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 769px) {
		flex-direction: row;
	}
`;

export default WomenBusiness;
