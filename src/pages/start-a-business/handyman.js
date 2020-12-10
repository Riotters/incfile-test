import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import { Heading } from "../../atomic/atoms/typography/heading";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import CkeckText from "../../components/static-check/text-only";
import Container from "../../atomic/container";
import TextBlockWithImage from "../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import { color } from "../../components/styles/colors";
import CountingTextBoxed from "../../atomic/molecules/text-blocks/counting-text-boxed";
import OvalBlueSvg from "../../images/ovals/top-left-transparent-blue3.inline.svg";
import OvalGreenSvg from "../../images/ovals/top-left-transparent-green3.inline.svg";
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import HandsIcon from "../../images/icons/hands.inline.svg";
import LimitedIcon from "../../images/icons/limited-liability-company-or-llc.inline.svg";
import SeriesIcon from "../../images/icons/limited-liability-company.inline.svg";
import PlaneIcon from "../../images/icons/plane.inline.svg";
import RockerIcon from "../../images/icons/rocket.inline.svg";
import SettingBusiness from "../../atomic/sections/type-of-business/handyman/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/handyman/order-now";
import Conclusion from "../../atomic/sections/general/conclusion";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import TypeOfBusiness from "../../atomic/sections/type-of-business/handyman/type-of-business";
import Links from "../../atomic/sections/type-of-business/handyman/links";
import Colorbox from "../../components/color-box";
import CircleWithText from "../../atomic/molecules/blocks/circle-with-text-block";
import TextBoxed from "../../atomic/molecules/static-check/circle-checkmark-text-boxed";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/handyman/validating-business";
import DominoIcon from "../../images/icons/domino.inline.svg";
import Regulations from "../../atomic/sections/type-of-business/handyman/regulations";
import InsuranceBusinessSection from "../../atomic/sections/type-of-business/handyman/insurance-business";
import Taxes from "../../atomic/sections/type-of-business/handyman/taxes";
import QuestionIcon from "../../images/icons/the-question-is-just-where-do-you-start.inline.svg";
import TabOvalSvg from "../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import { shadow } from "../../atomic/atoms/styles/shadows";
import { Link } from "gatsby";
import ReactTabs from "../../atomic/partials/ReactTabs";
import { tabs } from "../../static/type-of-business/handyman";
import { TabPanel } from "react-tabs";
import CircleRing from "../../images/chart-handyman.inline.svg";

const Handyman = () => (
	<Layout>
		<SEO
			title="How to Start a Handyman Business | Be a Home Handyman"
			description="We want to help you get your handyman business off the ground. Read our guide for ideas, tips, and important things to know before you get started."
		/>

		<Top
			ovalColor="sun-2"
			imageName="handyman-main"
			imageAlt="Mr Bulb with seedling"
			headlineWidth={700}
		>
			<h1>How to Start a Home Handyman Business</h1>
			<p>
				If you have some skill with home improvement, DIY or fixing things, then
				running a home handyman business could be right for you.
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
			<TabOval>
				<TabOvalSvg />
			</TabOval>

			<ReactTabs content={tabs}>
				<TabPanel>
					<PanelWrapper>
						<Heading size={2} template={3} left>
							A handyman business has several advantages over other types of
							business:
						</Heading>

						<ListWrapper>
							<ListBox>
								<CkeckText>
									<Paragraph big>
										It demands vocational skills that few people have
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										You’ll be in demand if your work is high-quality
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Handyman services aren’t easily replaced by automation
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										You can build up a strong local reputation
									</Paragraph>
								</CkeckText>
							</ListBox>
						</ListWrapper>

						<Paragraph
							big
							style={{
								fontFamily: "Avenir",
								fontWeight: "900",
								marginTop: "48px",
								marginBottom: "48px",
								color: color.black,
							}}
						>
							Of course, you’re likely to face competition from other tradesmen,
							but if you find the right niche, do some research and get your
							marketing right, then word-of-mouth will help you build your
							handyman business.
						</Paragraph>

						<Colorbox
							curveColor={color.blue1}
							color={color.blue3}
							curve
							theme="icon"
							Icon={QuestionIcon}
						>
							<Paragraph big style={{ fontWeight: "bold" }}>
								The question is, just where do you start?
							</Paragraph>
							<Paragraph>
								Here at Incfile, we know the answer, and we’ve shared it with
								more than 100,000 people who we've helped form their businesses.
								Since 2004, we’ve supported tradesmen just like you.
							</Paragraph>
							<Paragraph bottomMargin={0}>
								To get you started on the right foot, here’s our simple guide to
								starting up a successful handyman business. From highlighting
								important facts to validating your ideas, and from choosing the
								right structure to your options for managing your business,
								you’ll find the answers you need.
							</Paragraph>
						</Colorbox>

						<Paragraph
							big
							style={{
								fontFamily: "Avenir",
								fontWeight: "900",
								marginTop: "48px",
								color: color.black,
							}}
						>
							Read on for some insight into creating your own home handyman
							business and becoming an entrepreneur. In this guide we will
							cover:
						</Paragraph>

						<ListWrapper>
							<ListBox>
								<CkeckText>
									<Paragraph big>
										Facts and figures about the success of handyman businesses
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										How to choose the right business structure
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										How to find out if a handyman business is right for you
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Where to find handyman business groups, forums and support
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Ideas for the type of handyman business you could form
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Helpful software for handyman business owners
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										How to validate your handyman business idea
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										How to start your handyman business with information on
										equipment, employees, location, permits, finance, taxes and
										more
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Business plans for handyman companies
									</Paragraph>
								</CkeckText>
							</ListBox>
						</ListWrapper>
					</PanelWrapper>
				</TabPanel>

				<TabPanel>
					<PanelWrapper>
						<Heading size={2} template={3} left>
							Helpful software for handyman business owners
						</Heading>

						<Paragraph big>
							How successful can you be as a handyman? Let’s dig into the facts
							and figures.
						</Paragraph>

						<BlueBoxWithAbsoluteText
							absoluteText="$4 Bilion"
							text="The overall revenues of handyman service franchise industry (groups of various types of tradesmen working together) a year in the U.S."
						/>

						<CircleWithText
							symbol="%"
							textInsideCircle="6"
							textLine="Annual growth in the franchise part of a handyman business a year"
							withBg={true}
							SvgChart={CircleRing}
						/>

						<div style={{ marginBottom: "30px", marginTop: "48px" }}>
							<Adventages
								headline="A successful handyman could earn as much as $3,000 a week"
								width="100%"
							/>
						</div>

						<div style={{ marginBottom: "30px" }}>
							<Adventages
								headline="The most popular home handyman specializations include maintenance, plumbing, painting, flooring, landscaping and electrical"
								width="100%"
							/>
						</div>
					</PanelWrapper>
				</TabPanel>

				<TabPanel>
					<PanelWrapper>
						<Heading size={2} template={3} left>
							Is a Handyman Business Right for You?
						</Heading>
						<Paragraph big>
							Although it can be exciting to form a handyman business, there
							will be significant demands on you as a small business owner. Here
							are some of the things you can expect.
						</Paragraph>

						<Paragraph big style={{ fontWeight: "bold" }}>
							A Day in the Life of a Handyman
						</Paragraph>

						<Paragraph big>
							Here are some of the typical tasks you’ll be performing for your
							handyman business on a daily basis:
						</Paragraph>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Deal with phone calls, emails and other contacts from potential
								clients
							</Paragraph>
						</TextBoxed>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Travel to job sites to assess work and estimate costs
							</Paragraph>
						</TextBoxed>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Create quotes and send them out to clients
							</Paragraph>
						</TextBoxed>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Buy materials and tools for completing jobs
							</Paragraph>
						</TextBoxed>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Travel to job sites for work
							</Paragraph>
						</TextBoxed>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Provide home handyman services to clients
							</Paragraph>
						</TextBoxed>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Market your business using local promotions, your website,
								social media and other means
							</Paragraph>
						</TextBoxed>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Send out invoices, take payment and manage your finances
							</Paragraph>
						</TextBoxed>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Carry out business administration
							</Paragraph>
						</TextBoxed>

						<Paragraph big style={{ fontWeight: "bold", marginTop: "48px" }}>
							Skills Needed by a Handyman Business Entrepreneur
						</Paragraph>

						<Paragraph big>
							The following skills will be very useful in your role as a
							handyman small business owner:
						</Paragraph>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Ability to quickly understand the amount of work and materials
								needed to complete a job
							</Paragraph>
						</TextBoxed>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Experience with completing similar jobs in the past
							</Paragraph>
						</TextBoxed>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Good vocational skills in your chosen home handyman area
								(painting, landscaping, carpentry, plumbing, etc.)
							</Paragraph>
						</TextBoxed>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Excellent interpersonal skills for dealing with potential
								customers and existing clients
							</Paragraph>
						</TextBoxed>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Networking skills so you can connect with other tradesmen and
								commercial clients
							</Paragraph>
						</TextBoxed>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Strong understanding of financial management and cash flow
							</Paragraph>
						</TextBoxed>

						<TextBoxed style={{ marginBottom: "8px" }}>
							<Paragraph bottomMargin={0}>
								Some skills in marketing and promotion
							</Paragraph>
						</TextBoxed>

						<Paragraph big style={{ fontWeight: "bold", marginTop: "48px" }}>
							What Your Handyman Customers Are Looking For
						</Paragraph>

						<Paragraph big>
							Clients who hire a home handyman want reliability, quality and
							value. Reliability means you turn up when you say you will and
							you’ll complete the job to the agreed scope, timeline and price.
							Quality means you’ll approach the work with a careful eye,
							complete it with skill and deliver a finished product that meets
							your customers' needs. Value means that you charge fairly for your
							time, you don’t add unexpected fees and that your quote is
							reasonable for the work you’re doing.
						</Paragraph>
						<Paragraph big>
							It’s also important to note that not every customer is looking for
							the lowest quote — some clients are happy to pay more for higher
							quality work.
						</Paragraph>
					</PanelWrapper>
				</TabPanel>
			</ReactTabs>
		</TabsWrapper>

		<TypeOfBusiness />

		<ValidatingBusinessIdea />

		<SimpleSection>
			<OvalGreen>
				<OvalGreenSvg />
			</OvalGreen>
			<OvalGreen2>
				<OvalGreenSvg />
			</OvalGreen2>
			<Container>
				<CenterBox>
					<Heading size={2} template={1} left>
						Your Handyman Business Needs a Plan
					</Heading>

					<Paragraph big>
						If you’re a home handyman business, you might be wondering if you
						really need a business plan? Yes, you do.
					</Paragraph>

					<Colorbox
						curveColor={color.green1}
						color={color.green3}
						curve
						theme="icon"
						Icon={DominoIcon}
					>
						<Paragraph big style={{ fontWeight: "bold" }}>
							Why You Need a Business Plan?
						</Paragraph>
						<Paragraph bottomMargin={0}>
							You need to define how you’re going to run your handyman business,
							market yourself, get sales, make a profit and grow. This can only
							come about by creating a watertight business plan. It will help
							you get your thinking in order and show your commitment to your
							handyman business.
						</Paragraph>
					</Colorbox>

					<Paragraph big style={{ marginTop: "48px" }}>
						You will also need to look at customer and financial projections for
						your handyman business. What are your expected sales and revenues?
						What is your profitability? How much money will you keep in the
						business to grow it? How much will you pay yourself? What will be
						the costs of your materials, advertising and everything else that
						goes into running a successful tradesman business?
					</Paragraph>
					<Paragraph big>
						Business plans do vary slightly, but they should all cover the
						following areas:
					</Paragraph>

					<CountingTextBoxed number={1}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							An executive summary with the most important points from your
							business plan
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={2}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Your goals and what you hope to achieve with your handyman
							business
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={3}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							A description of your handyman business, background information
							and context
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={4}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							A market analysis and likely demand
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={5}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							An overview of how your handyman business is structured
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={6}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Your business model
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={7}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							How you will market and sell your offerings
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={8}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Financial projections, revenue and profitability
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={9}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Appendices
						</Paragraph>
					</CountingTextBoxed>

					<Paragraph big mixed={true} style={{ marginTop: "50px" }}>
						We’ve got the perfect{" "}
						<Link to="https://www.incfile.com/blog/post/keys-successful-business-plan/">
							guide to writing your business plan.
						</Link>
					</Paragraph>
				</CenterBox>
			</Container>
		</SimpleSection>

		<WhiteContainer>
			<Oval>
				<OvalBlueSvg />
			</Oval>

			<BusinessOwnerResponsibilities>
				<ImageContent image="unique-business-green" paddingTop="60">
					<Heading size={2} template={4} left style={{ fontSize: "24px" }}>
						Choose the Right Business Structure and Register Your Handyman
						Business
					</Heading>
					<Paragraph big>
						There are five main business structures you can have in the U.S.,
						and it’s important to choose the right one. We’ve shared your
						options below. They are:
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
						<Paragraph
							big
							style={{ color: color.blue1, fontWeight: "bold" }}
							mixed={true}
						>
							Sole Proprietorship
						</Paragraph>

						<Paragraph big>
							This is the "default" business structure and is what your handyman
							business will be if you decide not to create a more formal
							structure. We don't recommend this type of business as it doesn't
							give you the legal protections you need.
						</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						SvgImage={LimitedIcon}
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
							<Link
								to={
									process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"
								}
							>
								Partnership
							</Link>
						</Paragraph>

						<Paragraph big>
							This is a type of business that is formed when two or more people
							work together without creating a more formal business entity. Like
							a sole proprietorship, it may not give you all the protections
							your handyman business may need.
						</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						SvgImage={SeriesIcon}
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
							<Link
								to={
									process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"
								}
							>
								Limited Liability Company or LLC
							</Link>
						</Paragraph>

						<Paragraph big>
							The Limited Liability Company (LLC) is ideal for most handyman
							businesses. An LLC is easy and inexpensive to set up, and it has
							the least administrative requirements of any formal business
							entity.
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
							<Link
								to={
									process.env.ORDER_URL +
									"/form-order-now.php?entityType=S-Corporation"
								}
							>
								S Corporation
							</Link>
						</Paragraph>

						<Paragraph big>
							This is a more complex type of business and isn't generally
							recommended for smaller organizations, like a handyman business.
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
							<Link
								to={
									process.env.ORDER_URL +
									"/form-order-now.php?entityType=C-Corporation"
								}
							>
								C Corporation
							</Link>
						</Paragraph>

						<Paragraph big>
							These are the largest and most complex types of businesses and are
							typically far more than the average entrepreneur or handyman
							business owner will need.
						</Paragraph>
					</TextBlockWithImage>

					<Paragraph
						big
						style={{ paddingTop: "48px", paddingBottom: 0 }}
						mixed={true}
					>
						For more information on the advantages and disadvantages of
						different types of businesses,{" "}
						<Link to="/business-entity-comparison/">
							please see our in-depth guide
						</Link>
						. If you’ve still got questions,{" "}
						<a
							href="https://grasshopper.com/blog/llc-vs-corporation-8-entrepreneur-questions-answered/"
							target="_blank"
							rel="noopener noreferrer"
						>
							we’ve answered them to help you choose the right business
							structure
						</a>{" "}
						for your handyman business.
					</Paragraph>
					<Paragraph
						big
						style={{ paddingTop: "48px", paddingBottom: 0 }}
						mixed={true}
					>
						In most cases, our recommendation for your handyman business would
						be to create an LLC. We’ve{" "}
						<Link to="/form-an-llc/">got a complete guide</Link> to everything
						you need to do.{" "}
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
		</WhiteContainer>

		<SettingBusiness />

		<OrderNow />

		<Regulations />

		<InsuranceBusinessSection />

		<Taxes />

		<Links />

		<Conclusion
			to={process.env.ORDER_URL + "/form-order-now.php"}
			buttonTitle="Start your Handyman Business with us, today"
		>
			<Heading size={3} style={{ fontSize: "40px" }}>
				Conclusion
			</Heading>
			<Paragraph big>
				With the right attitude, skills and approach, you can build a very
				successful home handyman business. Identify your areas of expertise,
				market yourself well and put together a business plan. This will help
				you build good word-of-mouth and grow your client base. Whatever type of
				tradesman you end up being, we wish you the very best of luck!
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

const ListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const ListBox = styled.div`
	width: 100%;

	@media (min-width: 576px) {
		width: 50%;
	}
`;

const CenterBox = styled.div`
	width: 100%;
	max-width: 670px;
	padding-bottom: 100px;

	@media (min-width: 670px) {
		margin: 0 auto;
	}
`;

const SimpleSection = styled.div`
	padding-top: 100px;
	position: relative;
	background-image: linear-gradient(
		to bottom,
		rgba(255, 255, 255, 0) 30%,
		#f2f8f3
	);
`;

const BusinessOwnerResponsibilities = styled.section`
	position: relative;
	padding-top: 75px;
	padding-bottom: 64px;

	.colorbox {
		margin-bottom: 48px;
	}
`;

const WhiteContainer = styled.div`
	background: rgb(255, 255, 255);
	padding-bottom: 100px;
	position: relative;
`;

const Oval = styled.div`
	position: absolute;
	left: 0;
	top: 200px;
	width: 100%;

	@media (min-width: 570px) {
		width: 570px;
	}
`;

const OvalGreen = styled.div`
	position: absolute;
	left: 0;
	top: 60px;
	width: 100%;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const OvalGreen2 = styled.div`
	position: absolute;
	right: 0;
	bottom: 377px;
	width: 100%;

	@media (min-width: 720px) {
		width: 720px;
	}

	svg {
		transform: scaleX(-1);
	}
`;

const TabsWrapper = styled.div`
	margin-top: 120px;
	position: relative;
	@media (min-width: 992px) {
		margin-top: 21px;
	}
`;

const TabOval = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

export default Handyman;
