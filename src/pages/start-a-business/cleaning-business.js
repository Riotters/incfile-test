import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import TabsSection from "../../atomic/partials/tabs";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import Tab1Icon from "../../images/icons/cleaning-business.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";
import { Heading } from "../../atomic/atoms/typography/heading";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import CkeckText from "../../components/static-check/text-only";
import TextCenterLayout from "../../atomic/partials/heading-left";
import Container from "../../atomic/container";
import TextBlockWithImage from "../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import IdentifyIcon from "../../images/icons/identify-your-unique-selling-point.inline.svg";
import LookIcon from "../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg";
import ValidateIcon from "../../images/icons/look-for-market-research.inline.svg";
import TalkIcon from "../../images/icons/talk-to-clients.inline.svg";
import InvolvedIcon from "../../images/icons/get-involved-with-business-communities.inline.svg";
import { color } from "../../components/styles/colors";
import CountingTextBoxed from "../../atomic/molecules/text-blocks/counting-text-boxed";
import OvalOrange2Svg from "../../images/ovals/top-left-transparent-orange2.inline.svg";
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import HandsIcon from "../../images/icons/hands.inline.svg";
import LimitedIcon from "../../images/icons/limited-liability-company-or-llc.inline.svg";
import SeriesIcon from "../../images/icons/limited-liability-company.inline.svg";
import PlaneIcon from "../../images/icons/plane.inline.svg";
import RockerIcon from "../../images/icons/rocket.inline.svg";
import SettingBusiness from "../../atomic/sections/type-of-business/cleaning-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/cleaning-business/order-now";
import {
	RingText,
	toolsList,
} from "../../static/type-of-business/cleaning-business";
import HireEmployees from "../../atomic/sections/type-of-business/cleaning-business/hire-employees";
import UsefulTools from "../../atomic/partials/useful-tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import RingSvg from "../../images/rings.inline.svg";
import Adventages from "../../components/adventages";
import TypeOfBusiness from "../../atomic/sections/type-of-business/cleaning-business/type-of-business";
import TabsOvalSvg from "../../images/ovals/bottom-right-transparent-babyblue2.inline.svg";
import TabsOvalSvg2 from "../../images/ovals/bottom-right-transparent-green3.inline.svg";
import OvalSvg2 from "../../images/ovals/top-right-transparent-blue.inline.svg";
import OvalSvg3 from "../../images/ovals/top-left-transparent-green3.inline.svg";
import OvalSvg4 from "../../images/ovals/top-left-transparent-pink.inline.svg";
import OvalSvg5 from "../../images/ovals/top-left-transparent-orange.inline.svg";
import { shadow } from "../../atomic/atoms/styles/shadows";
import OvalSvg6 from "../../images/ovals/top-right-transparent-green3.inline.svg";

const CleaningBusiness = () => (
	<Layout>
		<SEO
			title="How to Start a Cleaning Business"
			description="Starting a cleaning business can be an ideal way to begin your journey as an entrepreneur. Although they may seem simple, cleaning businesses have a lot going for them."
		/>

		<Top
			ovalColor="green"
			imageName="cleaning-business-main"
			imageAlt="Mr Bulb with seedling"
			headlineWidth={700}
		>
			<h1>How to Start a Cleaning Business</h1>
			<p>
				Starting a cleaning business can be an ideal way to begin your journey
				as an entrepreneur. Although they may seem simple, cleaning businesses
				have a lot going for them.
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
				<TabsOvalSvg />
			</TabsOval>
			<TabsOval2>
				<TabsOvalSvg2 />
			</TabsOval2>
			<TabsSection>
				<TabHeading>
					<TabTitle title="Cleaning Business" SvgIcon={Tab1Icon} />
					<TabTitle title="Why This Industry" SvgIcon={Tab2Icon} />
					<TabTitle title="Is This Business For You?" SvgIcon={Tab3Icon} />
				</TabHeading>

				<CollapseWrapper>
					<PanelWrapper>
						<Heading size={3}>Starting a Cleaning Business</Heading>
						<Paragraph big>
							Starting a cleaning business can be an ideal way to begin your
							journey as an entrepreneur. Although they may seem simple,
							cleaning businesses have a lot going for them.
						</Paragraph>
						<Paragraph big>
							Cleaning is a service that will always be in demand, and you don't
							need an enormous amount of capital or any special training to get
							started. As a business model, cleaning will never be challenged by
							ecommerce, and the industry is not dominated by any major players.
						</Paragraph>

						<Paragraph
							big
							style={{
								fontFamily: "Avenir",
								fontWeight: "900",
								marginTop: "48px",
								color: color.black,
							}}
						>
							Cleaning business formation guide
						</Paragraph>

						<Paragraph big>
							Though cleaning may not be the most glamorous type of business in
							the world, a well-managed and marketed cleaning business can
							generate good profits and become a trusted part of your client’s
							lives. Starting up a cleaning business doesn’t have to be
							complicated, and in this guide we’ll cover what you need to know.
						</Paragraph>

						<ListWrapper>
							<ListBox>
								<CkeckText>
									<Paragraph big>
										Understanding the world of a beauty salon
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>Understanding the world of cleaning</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>Hiring employees</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Deciding if you’re ready to start a cleaning business
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Setting your business up with efficient marketing and
										administration practices
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Choosing the best legal structure for your new organization
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Gathering resources for your cleaning business
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Following various rules and regulations
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Finding information on taxes and finances for your cleaning
										business
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>... and much more</Paragraph>
								</CkeckText>
							</ListBox>
						</ListWrapper>

						<Paragraph big>
							By the time you’ve read through our complete beauty salon business
							guide, you will have all the information you need to set up and
							manage a thriving beauty salon business. Let’s get into it.
						</Paragraph>
					</PanelWrapper>

					<PanelWrapper>
						<Heading size={3}>
							Understanding the World of a Cleaning Business
						</Heading>

						<Paragraph
							big
							style={{
								fontFamily: "Avenir",
								fontWeight: "900",
								marginTop: "48px",
								color: color.black,
							}}
						>
							Key Cleaning Business and Background Data and Statistics
						</Paragraph>

						<Paragraph big>
							Cleaning companies provide substantial benefits to the U.S.
							economy.
						</Paragraph>

						<BlueBoxWithAbsoluteText
							absoluteText="875K"
							text="In the U.S. in 2015, there were 875,000 cleaning businesses employing nearly about 3.5 million people."
						/>
						<BlueBoxWithAbsoluteText
							absoluteText="$175B"
							text="People employed in the industry across the U.S."
						/>
						<BlueBoxWithAbsoluteText
							absoluteText="4 - 6%"
							text="The industry is growing at a rate of between 4-6 percent a year."
						/>

						<ColorFulCircleWithTextAndList
							style={{ marginBottom: "48px" }}
							list={RingText.list}
							title={RingText.title}
							CircleSVG={RingSvg}
							withBg={true}
						/>

						<Adventages
							headline="The commercial office and retail sectors generate the majority of revenue, followed by education and healthcare."
							width="100%"
						/>

						<Adventages
							headline="The number of cleaning companies is growing by around 1.7 percent each year"
							width="100%"
						/>

						<Adventages
							headline="Around 10 percent of cleaning industry revenues come from franchises."
							width="100%"
						/>

						<Adventages
							headline="Commercial cleaning contracts are the most reliable type of income for cleaning businesses, with office buildings accounting for nearly a third of such contracts."
							width="100%"
						/>

						<Paragraph big>
							This all points to the cleaning industry being ripe with new
							opportunities for focused entrepreneurs, so now might be the
							perfect time to dive into starting your cleaning business. Incfile
							is here to help you form your cleaning business and understand the
							ins and outs of owning a cleaning company.
						</Paragraph>
					</PanelWrapper>

					<PanelWrapper>
						<Heading size={3}>
							Questions to Ask Before You Start a Cleaning Business
						</Heading>

						<Paragraph
							big
							style={{
								fontFamily: "Avenir",
								fontWeight: "900",
								marginTop: "48px",
								color: color.black,
							}}
						>
							Is Cleaning Entrepreneurship for You?
						</Paragraph>

						<Paragraph big>
							Running a cleaning business could be a good option if you:
						</Paragraph>

						<Adventages
							headline="Have a strong focus on customer service"
							text="You'll need to make sure all your employees are great at dealing with demanding clients."
							width="100%"
						/>

						<Adventages
							headline="Don’t mind staff turnover"
							text="Cleaning isn’t an extremely well-paid job, so there can be fairly rapid employee turnover."
							width="100%"
						/>

						<Adventages
							headline="Marketing"
							text="You will probably need to build a website and have a brand and logo professionally designed. You should also look into local search advertising."
							width="100%"
						/>

						<Adventages
							headline="Are great at training"
							text="Your cleaners will need to clean to the very highest quality, so they will need excellent training and materials."
							width="100%"
						/>

						<Adventages
							headline="Don’t mind competition"
							text="The barrier to entry for cleaning businesses is very low, and there are always new entrants into the marketplace."
							width="100%"
						/>

						<Adventages
							headline="Operational management"
							text="Ensuring customers are served well and beauty treatments are provided to the standards you expect"
							width="100%"
						/>

						<Adventages
							headline="Enjoy dealing with people"
							text="Cleaning is a very people-focused business, so you will constantly be interacting with customers and employees."
							width="100%"
						/>

						<Paragraph
							big
							style={{
								fontFamily: "Avenir",
								fontWeight: "900",
								color: color.black,
							}}
						>
							What Are the Main Challenges for a Cleaning Entrepreneur?
						</Paragraph>

						<Paragraph big>
							Aside from intense competition and employee turnover, the main
							challenge for a cleaning entrepreneur will be finding new
							customers and keeping existing ones happy. You’ll also need a
							rock-solid understanding of pricing and business finances — if
							you’re paying other people, your margins will likely be very thin.
						</Paragraph>

						<Paragraph
							big
							style={{
								fontFamily: "Avenir",
								fontWeight: "900",
								color: color.black,
							}}
						>
							What Does a Day in the Life of a Cleaning Entrepreneur Look Like?
						</Paragraph>

						<Paragraph big>On any given day you will be:</Paragraph>

						<CountingTextBoxed number={1}>
							<Paragraph bottomMargin={0}>
								Scheduling appointments for cleaning
							</Paragraph>
						</CountingTextBoxed>

						<CountingTextBoxed number={2}>
							<Paragraph bottomMargin={0}>
								Negotiating contracts and setting rates
							</Paragraph>
						</CountingTextBoxed>

						<CountingTextBoxed number={3}>
							<Paragraph bottomMargin={0}>Dealing with employees</Paragraph>
						</CountingTextBoxed>

						<CountingTextBoxed number={4}>
							<Paragraph bottomMargin={0}>Ordering cleaning supplies</Paragraph>
						</CountingTextBoxed>

						<CountingTextBoxed number={5}>
							<Paragraph bottomMargin={0}>
								Planning out optimal routes
							</Paragraph>
						</CountingTextBoxed>

						<CountingTextBoxed number={6}>
							<Paragraph bottomMargin={0}>
								Developing training on cleaning and customer service
							</Paragraph>
						</CountingTextBoxed>

						<CountingTextBoxed number={7}>
							<Paragraph bottomMargin={0}>
								Collecting payments and managing finances
							</Paragraph>
						</CountingTextBoxed>

						<CountingTextBoxed number={8}>
							<Paragraph bottomMargin={0}>...and much more</Paragraph>
						</CountingTextBoxed>
					</PanelWrapper>
				</CollapseWrapper>
			</TabsSection>
		</TabsWrapper>

		<TypeOfBusiness />

		<BlueContainer>
			<Oval2>
				<OvalSvg2 />
			</Oval2>
			<Container>
				<CenterBox>
					<TextCenterLayout
						headlineWidth={770}
						headline="Plan Your Cleaning Business"
					/>
					<Paragraph big>
						Before you start your business, there are a few key areas you need
						to focus on. You will need to figure out whether there’s a demand
						for your cleaning business services, consider potential benefits and
						pitfalls, understand how your business finances might look and
						ensure everything is in order.
					</Paragraph>

					<Heading size={3} style={{ marginTop: "80px" }}>
						Do Market Research and Validate Your Cleaning Products and Services
					</Heading>

					<Paragraph big>
						Before you launch your cleaning business, you need to understand if
						there’s a demand for what you’re selling. That means carrying out
						market research and “validating” your services. Here’s how to go
						about it:
					</Paragraph>
				</CenterBox>

				<GridSectionList>
					<TextBlockWithImage
						width="100"
						widthUnit="%"
						SvgImage={IdentifyIcon}
						imageBackgroundColor={color.babyblue2}
						imageShadowColor={color.babyblue2}
					>
						<Heading size={4}>
							Identify your business’s unique selling points (USPs)
						</Heading>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							These are the areas that will set you apart from competitors and
							encourage customers to come to you. You might have better pricing,
							a higher-quality service, faster delivery or some other special
							feature. Green and eco-based cleaning are becoming increasingly
							popular, for example.
						</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						width="100"
						widthUnit="%"
						SvgImage={LookIcon}
						imageBackgroundColor={color.green2}
						imageShadowColor={color.green2}
					>
						<Heading size={4}>Consider who your competitors are</Heading>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Having competitors is a good thing as it shows there’s a market
							for your cleaning services. Low barriers to entry mean there is
							typically lots of competition for cleaners.
						</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						width="100"
						widthUnit="%"
						SvgImage={InvolvedIcon}
						imageBackgroundColor={color.red2}
						imageShadowColor={color.red2}
					>
						<Heading size={4}>
							Get involved with business communities and discussion groups
						</Heading>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Ask questions about cleaning businesses. You may even be able to
							find some clients there!
						</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						width="100"
						widthUnit="%"
						SvgImage={ValidateIcon}
						imageBackgroundColor={color.orange2}
						imageShadowColor={color.orange2}
					>
						<Heading size={4}>
							Look for market research reports for cleaning businesses
						</Heading>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Because cleaning businesses operate in a very localized market,
							you might want to look at your specific area. These reports don't
							have to just be about cleaning businesses; if you’re after
							commercial cleaning clients, check commercial activity in your
							region, for example.
						</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						width="100"
						widthUnit="%"
						SvgImage={TalkIcon}
						imageBackgroundColor={color.purple2}
						imageShadowColor={color.purple2}
					>
						<Heading size={4}>Talk to clients</Heading>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Speak with potential customers to understand what they want from
							your cleaning services. This is especially important if you’re
							going into a specialized area.
						</Paragraph>
					</TextBlockWithImage>
				</GridSectionList>

				<CenterBox>
					<Heading size={3} style={{ marginTop: "70px" }}>
						Understand Your Cleaning Business Model and Financial Projections
					</Heading>
					<Paragraph big>
						All businesses need a business model, which will lay out the way you
						will generate sales, provide services and make money. Think about
						your business model now, because it’s better to have that in place
						so you can start acquiring customers and generating revenue from day
						one.
					</Paragraph>
					<Paragraph big>
						You will also need to look at financial projections for your
						cleaning business. What are your expected sales and revenues? What
						is your profitability? How much money will you keep in the business
						to grow it? How much will you pay yourself and others? If you can,
						try to plan your revenue out for the next month, three months, year
						and two years. Margins in the cleaning business are slim, so plan
						with that in mind.
					</Paragraph>
				</CenterBox>
			</Container>
		</BlueContainer>

		<SimpleSection>
			<Oval3>
				<OvalSvg3 />
			</Oval3>
			<Oval4>
				<OvalSvg4 />
			</Oval4>

			<Container>
				<CenterBox>
					<Heading>Write a Business Plan for Your Cleaning Business</Heading>

					<Paragraph big>
						Finally, you should put your business plan together. Business plans
						do vary slightly, but they should cover the following areas:
					</Paragraph>

					<CountingTextBoxed number={1}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							An executive summary with the most important points from your
							business plan
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={2}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Your goals and what you hope to achieve with your coaching
							business
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={3}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							A description of your life or business coaching niche, background
							information and context
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={4}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							A market analysis and likely demand
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={5}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							An overview of how your life or business coaching organization is
							structured
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
						<Link to="/blog/post/keys-successful-business-plan/">
							guide to writing your business plan.
						</Link>
					</Paragraph>
				</CenterBox>
			</Container>
		</SimpleSection>

		<OrangeContainer>
			<Oval>
				<OvalOrange2Svg />
			</Oval>
			<Oval5>
				<OvalSvg5 />
			</Oval5>

			<BusinessOwnerResponsibilities>
				<ImageContent image="unique-business-2" paddingTop="60">
					<Heading size={4} style={{ fontSize: "24px" }}>
						Choose the Right Business Structure and Register Your Cleaning
						Business
					</Heading>
					<Paragraph big>
						Now that you have all the background information for your cleaning
						business, it’s time to make it into a reality. That starts by
						choosing the right structure or “legal entity” for your business. In
						the U.S., there are four main business structures. They are:
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
							This is the "default" business structure and is what your business
							will be if you decide not to create a more formal structure. We
							don't recommend this type of business as it doesn't give you the
							legal protections you need.
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
							finances and assets and is a great way to start your real estate
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
								Series LLC
							</Link>
						</Paragraph>

						<Paragraph big>
							This is a special type of LLC entity that's only available in
							certain states. It allows you to create "mini" LLCs, each with
							their own limited liability and separate assets, under the
							umbrella of a master LLC.
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
									"/form-order-now.php?entityType=C-Corporation"
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
						for your cleaning business.
					</Paragraph>
					<Paragraph
						big
						mixed={true}
						style={{ marginBottom: "56px", paddingBottom: 0 }}
					>
						In most cases our recommendation would be to create an LLC. We have
						a{" "}
						<Link to="/form-an-llc/">
							complete guide to everything you need to do
						</Link>
						, and we can set one up for your cleaning business.{" "}
						<Link to="/llc-state-information/">
							LLC formation does vary from state to state
						</Link>
						, but we’ve got you covered, wherever you are.
					</Paragraph>

					<Heading size={3} style={{ marginBottom: "48px", paddingBottom: 0 }}>
						Special Considerations for Setting up a Cleaning Business Entity
					</Heading>

					<Paragraph big mixed={true}>
						Liability protection and insurance will both be very important for a
						cleaning business. Although people are careful, accidents can
						happen, so limiting liability and having good protections in place
						will be essential.
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

		<HireEmployees />

		<ToolsWrapper>
			<Oval6>
				<OvalSvg6 />
			</Oval6>
			<UsefulTools
				style={{ paddingBottom: "200px" }}
				toolsList={toolsList.tools}
				headlineText={toolsList.headlineText}
				description={toolsList.description}
			/>
		</ToolsWrapper>

		<Conclusion
			to={process.env.ORDER_URL + "/form-order-now.php"}
			buttonTitle="Start your Cleaning Business with us, today"
		>
			<Heading size={3} style={{ fontSize: "40px" }}>
				Conclusion
			</Heading>
			<Paragraph big>
				A cleaning business can be a very solid choice for a first-time
				entrepreneur. The combination of a low barrier to entry, focus on strong
				customer service and the need for excellent interpersonal skills makes
				it an ideal choice.
			</Paragraph>
			<Paragraph big>
				Although there’s lot of competition and plenty of demanding clients, a
				cleaning business that's run well can generate excellent revenue. When
				you’re ready to start up your cleaning business.
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

const ToolsWrapper = styled.div`
	position: relative;
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
	background: rgb(242, 246, 255);
	background: linear-gradient(
		0deg,
		rgba(242, 246, 255, 1) 0%,
		rgba(250, 251, 255, 1) 100%
	);
	padding-top: 100px;
	position: relative;
`;

const CenterBox = styled.div`
	width: 100%;
	padding-bottom: 100px;
	max-width: 670px;

	@media (min-width: 670px) {
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
    margin-top: 12px;
    margin-bottom 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
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
	left: 0;
	top: 211px;
	width: 570px;
	display: none;

	@media (min-width: 1200px) {
		display: block;
	}
`;

const TabsWrapper = styled.section`
	margin-top: 120px;
	position: relative;
	@media (min-width: 992px) {
		margin-top: 21px;
	}
`;

const TabsOval = styled.div`
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	transform: scaleX(-1);

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const TabsOval2 = styled.div`
	position: absolute;
	width: 100%;
	top: 436px;
	right: 0;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const Oval2 = styled.div`
	position: absolute;
	width: 100%;
	top: 0;
	right: 0;

	@media (min-width: 570px) {
		width: 570px;
	}
`;

const Oval3 = styled.div`
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const Oval4 = styled.div`
	position: absolute;
	width: 100%;
	bottom: 100px;
	right: 0;
	transform: scaleX(-1);

	@media (min-width: 720px) {
		width: 720px;
	}
`;

const Oval5 = styled.div`
	position: absolute;
	width: 100%;
	bottom: 368px;
	right: 0;
	transform: scaleX(-1);

	@media (min-width: 570px) {
		width: 570px;
	}
`;

const Oval6 = styled.div`
	position: absolute;
	width: 100%;
	top: 0px;
	right: 0;
	z-index: -1;

	@media (min-width: 720px) {
		width: 720px;
	}
`;

export default CleaningBusiness;
