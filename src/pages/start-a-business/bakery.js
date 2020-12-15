import React from "react";
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
import TextCenterLayout from "../../atomic/partials/heading-left";
import Container from "../../atomic/container";
import TextBlockWithImage from "../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import IdentifyIcon from "../../images/icons/identify-your-unique-selling-point.inline.svg";
import LookIcon from "../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg";
import TalkIcon from "../../images/icons/talk-to-clients.inline.svg";
import InvolvedIcon from "../../images/icons/get-involved-with-business-communities.inline.svg";
import { color } from "../../components/styles/colors";
import CountingTextBoxed from "../../atomic/molecules/text-blocks/counting-text-boxed";
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import HandsIcon from "../../images/icons/hands.inline.svg";
import LimitedIcon from "../../images/icons/limited-liability-company-or-llc.inline.svg";
import UmbrellaIcon from "../../images/icons/umbrella.inline.svg";
import PlaneIcon from "../../images/icons/plane.inline.svg";
import RockerIcon from "../../images/icons/rocket.inline.svg";
import SettingBusiness from "../../atomic/sections/type-of-business/bakery/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/bakery/order-now";
import {
	RingText2,
	tabs,
	toolsList,
} from "../../static/type-of-business/bakery";
import UsefulTools from "../../atomic/partials/useful-tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import Adventages from "../../components/adventages";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import ColorfulRing2 from "../../images/rings-bakery.inline.svg";
import styled from "styled-components";
import OvalSvg from "../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import OvalSvg3 from "../../images/ovals/top-right-transparent-blue.inline.svg";
import OvalSvg4 from "../../images/ovals/bottom-left-transparent-orange.inline.svg";
import OvalSvg6 from "../../images/ovals/top-left-transparent-orange2.inline.svg";
import OvalSvg7 from "../../images/ovals/top-right-transparent-green3.inline.svg";
import { shadow } from "../../atomic/atoms/styles/shadows";
import { Link } from "gatsby";
import { gradient } from "../../atomic/atoms/styles/colors";
import Regulations from "../../atomic/sections/type-of-business/bakery/regulations";
import Taxes from "../../atomic/sections/type-of-business/bakery/taxes";
import InsuranceBusinessSection from "../../atomic/sections/type-of-business/bakery/insurance-business";
import Links from "../../atomic/sections/type-of-business/bakery/links";
import Curve from "../../atomic/atoms/icons/curve";
import Curve2SVG from "../../images/curves/top-left-bottom-right-big.inline.svg";
import ReactTabs from "../../atomic/partials/ReactTabs";
import { TabPanel } from "react-tabs";

const Bakery = () => (
	<Layout>
		<SEO
			title="How to Start a Bakery | Opening a Baking Business"
			description="Bakeries are a growing industry in the US. Read our guide to starting a successful bakery business and get your company off the ground today."
		/>

		<Top
			ovalColor="sun-2"
			imageName="bakery-main-header"
			imageAlt="Mr Bulb with seedling"
			headlineWidth={700}
		>
			<h1>How to Start a Bakery Business</h1>
			<p>
				Bakeries are a growing industry in the US. It’s easy to see why, as
				people shop for their daily bread or seek out cakes and other sweet
				treats. Specialty baking is on the rise too, with products designed for
				people who have particular dietary choices or digestive issues.
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
			<TabsOval>
				<OvalSvg />
			</TabsOval>
			<ReactTabs content={tabs}>
				<TabPanel>
					<PanelWrapper>
						<Paragraph big>
							We want to help you get your bakery business off the ground. Since
							2004, we’ve helped over 100,000 people to become entrepreneurs,
							starting exciting businesses and bringing their ideas to life.
							We’ll give you the support, guidance and advice you need to create
							a business and make it into a success.
						</Paragraph>

						<Heading size={2} template={3} left>
							Here is our simple guide to starting up a successful bakery
							business.
						</Heading>

						<Paragraph big style={{ marginBottom: "72px" }}>
							From exploring the types of business you can start, through
							research, to the legalities of setting up your business and the
							realities of your day to day operations, this guide is here to
							help.
						</Paragraph>

						<Heading size={2} template={3} left>
							Read on for some insight into creating your own bakery business
							and becoming an entrepreneur.In this guide we will cover:
						</Heading>

						<Paragraph big>
							From exploring the types of business you can start, through
							research, to the legalities of setting up your business and the
							realities of your day to day operations, this guide is here to
							help.
						</Paragraph>

						<ListWrapper>
							<ListBox>
								<CkeckText>
									<Paragraph big>
										Facts and figures on the success of bakery businesses
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Learn if a bakery business could be right for you
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Ideas for the type of bakery business that you could form
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Proving your bakery business can work
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Useful online tools for bakery business owners
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Choose the right business structure for your bakery company
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Where to find bakery business groups, forums and support
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>Business plans for bakery companies</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										How to start your bakery business with information on
										equipment, employees, location, pernits, finance, taxes and
										more
									</Paragraph>
								</CkeckText>
							</ListBox>
						</ListWrapper>
					</PanelWrapper>
				</TabPanel>
				<TabPanel>
					<PanelWrapper>
						<Heading size={2} template={3} left style={{ marginTop: "72px" }}>
							Why You Should Open a New Baking Business
						</Heading>

						<Paragraph big style={{ marginBottom: "72px" }}>
							You might not think of the humble bakery as a powerhouse for
							business, but the stats say otherwise!
						</Paragraph>

						<BlueBoxWithAbsoluteText
							absoluteText="11K"
							text="There are more than 11,000 bakery cafes in the US"
						/>
						<BlueBoxWithAbsoluteText
							absoluteText="$300B"
							text="Bakery products make up over two percent of the GDP of the US, which works out to over $300 billion a year"
						/>
						<BlueBoxWithAbsoluteText
							absoluteText="$350"
							text="Average spending of each US household on bakery products"
						/>

						<Paragraph
							big
							style={{
								fontFamily: "Avenir",
								fontWeight: "900",
								color: "#1d1d1d",
								marginTop: "20px",
								marginBottom: 0,
							}}
						>
							The following products make up the bakery market in the US:
						</Paragraph>

						<ColorFulCircleWithTextAndList
							CircleSVG={ColorfulRing2}
							title={RingText2.title}
							list={RingText2.list}
							withBg={true}
							style={{ marginTop: "48px" }}
						/>

						<Paragraph
							big
							style={{
								fontFamily: "Avenir",
								fontWeight: "900",
								color: "#1d1d1d",
								marginTop: "48px",
								marginBottom: "88px",
							}}
						>
							The time to take advantage is now — we’ll help you be a part of
							that success!
						</Paragraph>

						<Adventages
							headline="Sales from retail bakeries are expected to increase by over five percent a year"
							width="100%"
						/>

						<Adventages
							headline="Two-thirds of bakeries have fewer than ten employees"
							width="100%"
						/>

						<Adventages
							headline="Gluten-free baking is rapidly increasing in popularity, with almost 30 percent of people purchasing these products"
							width="100%"
						/>
					</PanelWrapper>
				</TabPanel>
				<TabPanel>
					<PanelWrapper>
						<Heading size={2} template={3} left>
							Is Owning a Bakery Right for You?
						</Heading>
						<Paragraph big style={{ marginBottom: "48px" }}>
							Before deciding to open a bakery, it’s important to understand the
							skills and approach you’re likely to need.
						</Paragraph>

						<Heading size={2} template={3} left>
							A Day in the Life of a Bakery Business Owner
						</Heading>
						<Paragraph big style={{ marginBottom: "48px" }}>
							Here are some of the typical tasks you’ll be performing for your
							bakery business on a daily basis.
						</Paragraph>

						<Adventages
							headline="Understanding customer demand for the products you’re intending to make"
							width="100%"
						/>

						<Adventages
							headline="Purchasing ingredients for baking products"
							width="100%"
						/>

						<Adventages
							headline="Preparing ingredients for baking"
							width="100%"
						/>

						<Adventages
							headline="Working out the costs of ingredients, selling prices and profit margins"
							width="100%"
						/>

						<Adventages
							headline="Baking products and putting them out for sale"
							width="100%"
						/>

						<Adventages headline="Storing products as needed" width="100%" />

						<Adventages headline="Marketing your bakery" width="100%" />

						<Adventages headline="Managing bakery employees" width="100%" />

						<Adventages headline="Dealing with customers" width="100%" />

						<Heading size={2} template={3} left style={{ marginTop: "48px" }}>
							Skills Needed by a Bakery Business Entrepreneur
						</Heading>
						<Paragraph big style={{ marginBottom: "48px" }}>
							The following skills will be very useful in your role as a bakery
							small business owner.
						</Paragraph>

						<Adventages
							headline="An excellent grasp of the art and science of baking"
							width="100%"
						/>

						<Adventages
							headline="Good soft skills and talking to customers to find out what they want"
							width="100%"
						/>

						<Adventages
							headline="Math skills so you can work out the ingredients you need and what you should sell products for"
							width="100%"
						/>

						<Adventages
							headline="People management skills for your behind-the-scenes and front-of-house staff"
							width="100%"
						/>

						<Adventages
							headline="Marketing skills to get people into the bakery"
							width="100%"
						/>

						<Heading size={2} template={3} left style={{ marginTop: "48px" }}>
							What Your Bakery Customers are Looking For
						</Heading>
						<Paragraph big style={{ marginBottom: "48px" }}>
							Someone coming to your bakery is likely to want:
						</Paragraph>

						<Adventages
							headline="Delicious, fresh, high-quality baked products"
							width="100%"
						/>

						<Adventages
							headline="A good variety of breads, pastries, cakes and more"
							width="100%"
						/>

						<Adventages
							headline="A place to sit, relax and chat with friends"
							width="100%"
						/>

						<Adventages
							headline="Reasonable prices for baked goods"
							width="100%"
						/>

						<Adventages
							headline="Drink options like tea and coffee"
							width="100%"
						/>
					</PanelWrapper>
				</TabPanel>
			</ReactTabs>
		</TabsWrapper>

		<BlueContainer>
			<Oval3>
				<OvalSvg3 />
			</Oval3>
			<Oval2>
				<OvalSvg />
			</Oval2>

			<Container>
				<CenterBox>
					<TextCenterLayout
						headlineWidth={770}
						headline="Validating Your Bakery Business Idea"
					/>
					<Paragraph big>
						These areas are just starting points — there are many different
						types of bakery businesses. Once you’ve identified the type of
						bakery you’d like to run and what you want to sell, you need to
						validate your business idea.
					</Paragraph>
					<Paragraph big>
						Start by checking you have the right skillset. Bakers work long
						hours and need sufficient technical skill to make great products.
						You’ll need to deal with employees and customers too, and there’s a
						lot of planning that goes into running a successful bakery.
					</Paragraph>
					<Paragraph big>
						The thing to learn here is that it’s okay to say “no” to your first,
						second or third bakery business ideas. Very few entrepreneurs get it
						right first time. In fact, getting it wrong is often a badge of
						honor! Still, you don’t want to waste too much time, energy or money
						on the wrong initiatives, so ask and answer these questions honestly
						to find the right way forward.
					</Paragraph>
					<Paragraph big>
						Before committing too much time, energy and money into your new
						bakery business, it’s important to test the marketplace.
					</Paragraph>
				</CenterBox>

				<GridSectionList>
					<TextBlockWithImage
						width={100}
						widthUnit="%"
						SvgImage={IdentifyIcon}
						imageBackgroundColor={color.babyblue2}
						imageShadowColor={color.babyblue2}
					>
						<Heading size={3} template={4}>
							Identify your business’s unique selling points (USPs)
						</Heading>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							You need something that’s going to help your bakery stand out,
							whether that’s the quality of your products, the range of what you
							sell, the ambiance of your location or something else.
						</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						width={100}
						widthUnit="%"
						SvgImage={LookIcon}
						imageBackgroundColor={color.green2}
						imageShadowColor={color.green2}
					>
						<Curve top="-110" right="-30" color={color.blue1}>
							<Curve2SVG />
						</Curve>
						<Heading size={3} template={4}>
							Look at who your competitors are in the space
						</Heading>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Having competitors is a good thing as it shows there’s a market,
							but if there are too many local challengers, you’re likely to
							struggle without a really good unique selling point. Don’t just
							look at other bakeries, you also need to see how many grocery
							stores and regular cafes you have in your area.
						</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						width={100}
						widthUnit="%"
						SvgImage={TalkIcon}
						imageBackgroundColor={color.orange2}
						imageShadowColor={color.orange2}
					>
						<Heading size={3} template={4}>
							Understand your customers
						</Heading>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Talking to customers will help you find out what they’re looking
							for, so you can tailor your products and offerings accordingly.
						</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						width={100}
						widthUnit="%"
						SvgImage={InvolvedIcon}
						imageBackgroundColor={color.purple2}
						imageShadowColor={color.purple2}
					>
						<Heading size={3} template={4}>
							Get involved with local business communities and discussion groups
						</Heading>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							There are plenty of great communities and discussion groups. Get
							involved in them and learn the ins and outs of your chosen market
							before committing.
						</Paragraph>
					</TextBlockWithImage>
				</GridSectionList>
			</Container>
		</BlueContainer>

		<SimpleSection>
			<Oval>
				<OvalSvg4 />
			</Oval>

			<Container>
				<CenterBox>
					<Heading size={2} left>
						Your Bakery Needs a Business Plan
					</Heading>

					<Paragraph big>
						You need to define how you’re going to run your bakery business,
						market yourself, get sales, make a profit and grow. This can only
						come about through creating a watertight business plan. It will help
						you get your thinking in order and show your commitment to your
						bakery business.
					</Paragraph>
					<Paragraph big>
						You will also need to look at financial projections for your bakery
						business. What are your expected sales and revenues? What is your
						profitability? How much money will you keep in the business to grow
						it? How much will you pay yourself and others?
					</Paragraph>
					<Paragraph big>
						If you can, try to plan your revenue for the next month, three
						months, year and two years. It’s vital to take into account the cost
						of setting up a bakery business in the first place, also factoring
						in utility, staff and other costs.
					</Paragraph>

					<CountingTextBoxed number={1}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							An executive summary with the most important points from your
							business plan
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={2}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Your goals and what you hope to achieve with your bakery business
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={3}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							A description of your bakery business, background information and
							context
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={4}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							A market analysis and likely demand
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={5}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							An overview of how your bakery business is structured
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

		<OrangeContainer>
			<Oval6>
				<OvalSvg6 />
			</Oval6>

			<BusinessOwnerResponsibilities>
				<ImageContent image="unique-business-2" paddingTop="60">
					<Heading
						size={2}
						template={3}
						left
					>
						Choose the Right Business Structure and Register Your Bakery
						Business
					</Heading>
					<Paragraph big>
						There are five main business structures you can have in the US, and
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
						<Paragraph
							big
							style={{ color: color.blue1, fontWeight: "bold" }}
							mixed={true}
						>
							Sole Proprietorship
						</Paragraph>

						<Paragraph big>
							If you don’t choose to form a legal business entity for your
							bakery business, you will be a sole proprietor by default. This
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
							your bakery business may need.’
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
								Limited Liability Company or LLC
							</Link>
						</Paragraph>

						<Paragraph big>
							The most common type of business entity. An LLC is fast, simple
							and inexpensive to setup and maintain. It protects your personal
							finances and assets and is a great way to start your bakery
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
						<Paragraph
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
						</Paragraph>

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
									"/form-order-now.php?entityType=CCorporation"
								}
							>
								C Corporation
							</Link>
						</Paragraph>

						<Paragraph big>
							These are the largest and most complex types of businesses and are
							far more than the average entrepreneur or business owner will
							need.
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
						for your bakery business.
					</Paragraph>
					<Paragraph
						big
						style={{ paddingTop: "48px", paddingBottom: 0 }}
						mixed={true}
					>
						In most cases our recommendation would be to create an LLC. We have
						a{" "}
						<Link to="/form-an-llc/">
							complete guide to everything you need to do
						</Link>
						, and we can set one up for your bakery business.{" "}
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
		</OrangeContainer>

		<SettingBusiness />

		<OrderNow />

		<Regulations />

		<Taxes />

		<InsuranceBusinessSection />

		<Links />

		<ToolsWrapper>
			<Oval7>
				<OvalSvg7 />
			</Oval7>
			<UsefulTools
				style={{ paddingBottom: "200px" }}
				toolsList={toolsList.tools}
				headlineText={toolsList.headlineText}
				description={toolsList.description}
			/>
		</ToolsWrapper>

		<Conclusion
			to={process.env.ORDER_URL + "/form-order-now.php"}
			buttonTitle="Start your Bakery Business with us, today"
		>
			<Heading size={3} style={{ fontSize: "40px" }}>
				Conclusion
			</Heading>
			<Paragraph big>
				A bakery is a great way to provide amazing food to friendly people, and
				is an industry that’s still seeing growth in the US. If you can find a
				great niche, understand your competitors and put together a solid
				business plan, you will have every chance for success
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

const BlueContainer = styled.section`
	background-image: ${gradient.blue3};
	padding-top: 100px;
	position: relative;
`;

const CenterBox = styled.div`
	width: 100%;
	padding-bottom: 80px;
	max-width: 770px;

	@media (min-width: 770px) {
		margin: 0 auto;
	}
`;

const GridSectionList = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 100%;
	justify-content: center;
	column-gap: 30px;
	row-gap: 70px;
	margin-top: 76px;
	margin-bottom: 76px;

	@media (min-width: 490px) {
		grid-template-columns: 470px;
	}

	@media (min-width: 992px) {
		grid-template-columns: 470px 470px;
	}
`;

const SimpleSection = styled.div`
	padding-top: 100px;
	position: relative;
`;

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
	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(254, 246, 237, 1) 100%
	);
	padding-bottom: 100px;
	position: relative;
`;

const Oval = styled.div`
	position: absolute;
	right: 0;
	top: 380px;
	width: 100%;
	transform: scaleX(-1);

	@media (min-width: 570px) {
		width: 570px;
	}
`;

const TabsWrapper = styled.div`
	margin-top: 120px;
	position: relative;
	@media (min-width: 992px) {
		margin-top: 21px;
	}
`;

const TabsOval = styled.div`
	position: absolute;
	width: 100%;
	top: 0px;
	left: 0;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const Oval3 = styled.div`
	position: absolute;
	width: 100%;
	top: 0;
	right: 0;
	z-index: -1;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const Oval6 = styled.div`
	position: absolute;
	width: 100%;
	top: 211px;
	left: 0;

	@media (min-width: 570px) {
		width: 570px;
	}
`;

const Oval2 = styled.div`
	position: absolute;
	width: 100%;
	top: 50%;
	left: 0;

	@media (min-width: 720px) {
		width: 720px;
	}
`;

const ToolsWrapper = styled.div`
	position: relative;
`;

const Oval7 = styled.div`
	position: absolute;
	width: 100%;
	top: 0;
	right: 0;
	z-index: -1;

	@media (min-width: 720px) {
		width: 720px;
	}
`;

export default Bakery;
