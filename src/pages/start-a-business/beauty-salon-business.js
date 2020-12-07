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
import TextCenterLayout from "../../atomic/partials/heading-left";
import Container from "../../atomic/container";
import TextBlockWithImage from "../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import IdentifyIcon from "../../images/icons/identify-your-unique-selling-point.inline.svg";
import LookIcon from "../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg";
import ValidateIcon from "../../images/icons/look-for-market-research.inline.svg";
import TalkIcon from "../../images/icons/talk-to-clients.inline.svg";
import InvolvedIcon from "../../images/icons/get-involved-with-business-communities.inline.svg";
import CountingTextBoxed from "../../atomic/molecules/text-blocks/counting-text-boxed";
import OvalOrange2Svg from "../../images/ovals/top-left-transparent-orange2.inline.svg";
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import HandsIcon from "../../images/icons/hands.inline.svg";
import LimitedIcon from "../../images/icons/limited-liability-company-or-llc.inline.svg";
import SeriesIcon from "../../images/icons/limited-liability-company.inline.svg";
import PlaneIcon from "../../images/icons/plane.inline.svg";
import RockerIcon from "../../images/icons/rocket.inline.svg";
import SettingBusiness from "../../atomic/sections/type-of-business/beauty-salon/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/beauty-salon/order-now";
import {
	RingText,
	tabs,
	toolsList,
} from "../../static/type-of-business/beauty-salon";
import HireEmployees from "../../atomic/sections/type-of-business/beauty-salon/hire-employees";
import UsefulTools from "../../atomic/partials/useful-tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import RingSvg from "../../images/rings-2.inline.svg";
import Adventages from "../../components/adventages";
import ListBoxWithIcon from "../../atomic/molecules/lists/list-box-with-icon";
import TabOvalSvg from "../../images/ovals/bottom-left-transparent-pink.inline.svg";
import TabOvalSvg2 from "../../images/ovals/bottom-right-transparent-babyblue2.inline.svg";
import OvalSvg2 from "../../images/ovals/top-right-transparent-blue.inline.svg";
import OvalSvg3 from "../../images/ovals/top-left-transparent-green3.inline.svg";
import OvalSvg5 from "../../images/ovals/top-left-transparent-green3.inline.svg";
import OvalSvg4 from "../../images/ovals/top-left-transparent-pink.inline.svg";
import { shadow } from "../../atomic/atoms/styles/shadows";
import { color } from "../../atomic/atoms/styles/colors";
import { Link } from "gatsby";
import ReactTabs from "../../atomic/partials/ReactTabs";
import { TabPanel } from "react-tabs";

const BeautySalon = () => (
	<Layout>
		<SEO
			title="How to Start a Beauty Salon Business | Starting Salon and Spa Business"
			description="Personal care and pampering is something we all need. If you’re an entrepreneur, the world of the beauty salon has some surprising advantages. "
		/>

		<Top
			ovalColor="sun-2"
			imageName="beauty-salon-main"
			imageAlt="Mr Bulb with seedling"
			headlineWidth={700}
		>
			<h1>How to Start a Beauty Salon Business</h1>
			<p>
				Personal care and pampering is something we all need. If you’re an
				entrepreneur, the world of the beauty salon has some surprising
				advantages.
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
				<TabOvalSvg />
			</TabsOval>
			<TabsOval2>
				<TabOvalSvg2 />
			</TabsOval2>
			<ReactTabs content={tabs}>
				<TabPanel>
					<PanelWrapper>
						<Heading size={2} template={3} left>
							Starting a Beauty Salon business
						</Heading>
						<Paragraph big>
							To begin with, it’s largely immune to the trend toward ecommerce
							since beauty salons provide hyper-localized personalized services.
							Secondly, if you provide great service, you will quickly develop
							an excellent reputation that will lead to repeat bookings.
						</Paragraph>
						<Paragraph big>
							Finally, there’s a trend toward buying “experiences” rather than
							“products,” and the beauty salon fits very neatly into this newway
							of thinking and purchasing. All that said, starting up a beauty
							salon business can be tricky. There may be local competition, and
							you'llneed to invest in finding skilled workers and developing an
							excellent brand.
						</Paragraph>

						<Paragraph
							big
							style={{
								fontWeight: "bold",
								marginTop: "48px",
								color: color.black,
							}}
						>
							Beauty Salon business formation guide
						</Paragraph>

						<Paragraph big>
							In this guide we’ll explore everything you need to do to set up
							your beauty salon business and maximize your chances for success.
							We’ll cover:
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
									<Paragraph big>
										Paying taxes for your beauty salon business
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Deciding if you’re ready to start a beauty salon business
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Hiring employees, managing finances and administering your
										beauty salon business
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Deciding if you’re ready to start a beauty salon business
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Locating other resources for your beauty salon business
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Determining the best legal structure for your new
										organization
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
									<Paragraph big>And much more</Paragraph>
								</CkeckText>
							</ListBox>
						</ListWrapper>

						<Paragraph big>
							By the time you’ve read through our complete beauty salon business
							guide, you will have all the information you need to set up and
							manage a thriving beauty salon business. Let’s get into it.
						</Paragraph>
					</PanelWrapper>
				</TabPanel>
				<TabPanel>
					<PanelWrapper>
						<Heading size={2} template={3} left>
							Understanding the World of the Beauty Salon Business
						</Heading>

						<Paragraph
							big
							style={{
								fontFamily: "Avenir",
								fontWeight: "900",
								color: color.black,
								marginTop: "48px",
							}}
						>
							Key Beauty Salon Business and Background Data and Statistics
						</Paragraph>

						<Paragraph big>
							Here are some of current statistics that will help you understand
							the beauty salon industry:
						</Paragraph>

						<BlueBoxWithAbsoluteText
							absoluteText="$57B"
							text="Consumers spent in the hair and nail salon industry in 2016"
						/>
						<BlueBoxWithAbsoluteText
							absoluteText="700K"
							text="People employed in the industry across the U.S."
						/>
						<BlueBoxWithAbsoluteText
							absoluteText="2.8%"
							text="Revenue increase by year, while job growth is expected to increase by 0.6 percent a year"
						/>

						<ColorFulCircleWithTextAndList
							style={{ marginBottom: "48px" }}
							list={RingText.list}
							title={RingText.title}
							CircleSVG={RingSvg}
							withBg={true}
						/>

						<Adventages
							headline="The biggest expenses for beauty salons are employee compensation, real estate and rental, manufacturing and professional and business services."
							width="100%"
						/>

						<Adventages
							headline="There are nearly 270,000 beauty salons, hairdressers and barber shops in the U.S."
							width="100%"
						/>

						<Adventages
							headline="Wages paid to workers are typically low, with many earning around $22,000-$25,000 a year."
							width="100%"
						/>

						<Adventages
							headline="The industry is very fragmented, with the largest 50 salon chains only contributing 15 percent to overall revenue"
							width="100%"
						/>

						<Paragraph big>
							This all points to the beauty salon industry being ripe with new
							opportunities for focused entrepreneurs, so now might be the
							perfect time to dive into starting your beauty salon business.
							Incfile is here to help you form your beauty salon business and
							understand the ins and outs of owning a beauty salon company.
						</Paragraph>

						<Paragraph
							big
							style={{
								fontFamily: "Avenir",
								fontWeight: "900",
								color: color.black,
							}}
						>
							What Your Beauty Salon Customers Are Looking for
						</Paragraph>

						<Paragraph big>
							If you want to run a successful beauty salon, you need to build
							your entire suite of services around customer needs. When it comes
							to offering beauty and hairdressing services, that means providing
							a great range of services at an extraordinarily high quality
							combined with reasonable pricing.
						</Paragraph>
						<Paragraph big>
							Your beauty salon will rely on word-of-mouth marketing, so you
							want to help customers become an advocate for your business. You
							can do this by offering personalized service and ensuring your
							staff provides extensive beauty treatments that leave your
							customers feeling pampered and wonderful.
						</Paragraph>
						<Paragraph big>
							When it comes to providing beauty treatments, you will want to
							ensure you’re providing the right niche of services. You have
							plenty of options:
						</Paragraph>

						<ListBoxWithIcon
							title="Hairstyling and hairdressing"
							radiusTop
							backgroundColor={color.green3}
						/>
						<ListBoxWithIcon
							title="Hair removal and hot wax treatments"
							backgroundColor={color.green3}
						/>
						<ListBoxWithIcon
							title="Manicures and pedicures"
							backgroundColor={color.green3}
						/>
						<ListBoxWithIcon title="Massage" backgroundColor={color.green3} />
						<ListBoxWithIcon title="Tanning" backgroundColor={color.green3} />
						<ListBoxWithIcon
							title="Facials and skin care"
							backgroundColor={color.green3}
							radiusBottom
						/>
					</PanelWrapper>
				</TabPanel>
				<TabPanel>
					<PanelWrapper>
						<Heading size={2} template={3} left>
							What Are the Main Skills, Expertise and Experience Needed to be a
							Successful Beauty Salon Entrepreneur?
						</Heading>
						<Paragraph big>
							When it comes to skill sets, you need wide-ranging expertise to be
							a successful beauty salon owner. These skills should include:
						</Paragraph>

						<Adventages
							headline="Hiring"
							text="Finding, interviewing and hiring great beauty salon employees who can provide awesome beauty treatments and hairstyling services"
							width="100%"
						/>

						<Adventages
							headline="People management"
							text="Dealing with staff schedules, coverage, internal issues and other people management areas"
							width="100%"
						/>

						<Adventages
							headline="Marketing"
							text="Promoting your beauty salon business against a competitive field; local marketing expertise is essential"
							width="100%"
						/>

						<Adventages
							headline="Treatment design and pricing"
							text="Working with employees to create luxurious treatments with good profit margins"
							width="100%"
						/>

						<Adventages
							headline="Salon creation"
							text="Setting up the salon in the first place, which includes finding equipment, furniture, fixtures and fittings"
							width="100%"
						/>

						<Adventages
							headline="Operational management"
							text="Ensuring customers are served well and beauty treatments are provided to the standards you expect"
							width="100%"
						/>

						<Adventages
							headline="Business administration"
							text="Sorting out profits, payroll, financial management, accounting and all the other areas that go into running any successful business"
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
							What Are the Main Challenges for a Beauty Salon Entrepreneur?
						</Paragraph>

						<Paragraph big>
							Your main challenges will be finding the best beauty treatment
							therapists, local marketing and creating good profit margins for
							your business. You will also need to focus on creating
							extraordinary customer experiences so your customers become
							advocates for your salon.
						</Paragraph>
					</PanelWrapper>
				</TabPanel>
			</ReactTabs>
		</TabsWrapper>

		<BlueContainer>
			<Oval2>
				<OvalSvg2 />
			</Oval2>
			<Container>
				<CenterBox>
					<TextCenterLayout headline="Plan Your Beauty Salon Business" />
					<Paragraph big>
						Before you start your business, there are a few key areas you need
						to focus on. You will need to establish whether there’s a demand for
						your beauty salon services, look at potential benefits and pitfalls,
						understand how your business finances might look and ensure
						everything is in order.
					</Paragraph>
					<Paragraph big>
						In short, you need a business plan — here’s how to think about your
						business idea.
					</Paragraph>

					<Heading size={2} template={3} left style={{ marginTop: "80px" }}>
						Do Market Research and Validate Your Beauty Salon Products and
						Services
					</Heading>

					<Paragraph big style={{ marginBottom: "70px" }}>
						Before you launch your beauty salon business, you need to understand
						if there’s a demand for what you’re selling. That means carrying out
						market research and “validating” your products and services. Here’s
						how to go about it:
					</Paragraph>
				</CenterBox>

				<GridSectionList>
					<TextBlockWithImage
						width={100}
						widthUnit="%"
						className="containerMargin"
						SvgImage={IdentifyIcon}
						imageBackgroundColor={color.babyblue2}
						imageShadowColor={color.babyblue2}
					>
						<Heading size={3} template={4}>
							Identify your business’s unique selling points (USPs)
						</Heading>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							These are the areas that will set you apart from competitors and
							encourage customers to come to you. You might have better pricing,
							a higher-quality service, a loyalty plan or some other special
							feature.
						</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						width={100}
						widthUnit="%"
						className="containerMargin"
						SvgImage={LookIcon}
						imageBackgroundColor={color.green2}
						imageShadowColor={color.green2}
					>
						<Heading size={3} template={4}>
							Look at who your competitors are in the space
						</Heading>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Having competitors is a good thing as it shows there’s a market.
							Make a note of all local competitors, their pricing and the beauty
							treatment services they provide.
						</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						width={100}
						widthUnit="%"
						className="containerMargin"
						SvgImage={InvolvedIcon}
						imageBackgroundColor={color.red2}
						imageShadowColor={color.red2}
					>
						<Heading size={3} template={4}>
							Get involved with business communities and discussion groups
						</Heading>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Ask questions about beauty salon businesses. You can find links to
							some excellent discussion groups later in the article.
						</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						width={100}
						widthUnit="%"
						className="containerMargin"
						SvgImage={TalkIcon}
						imageBackgroundColor={color.purple2}
						imageShadowColor={color.purple2}
					>
						<Heading size={3} template={4}>
							Talk to clients
						</Heading>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Speak with potential customers to understand what they want from
							your beauty salon products and services. See if there is a
							specific demand for niche treatments.
						</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						width={100}
						widthUnit="%"
						className="containerMargin"
						SvgImage={ValidateIcon}
						imageBackgroundColor={color.orange2}
						imageShadowColor={color.orange2}
					>
						<Heading size={3} template={4}>
							See if there are any market research reports for beauty salon
							businesses
						</Heading>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Search locally, nationally or internationally. Explore statewide
							and national trends to identify growing treatment areas.
						</Paragraph>
					</TextBlockWithImage>
				</GridSectionList>

				<CenterBox>
					<Heading size={2} template={3} left style={{ marginTop: "70px" }}>
						Understand Your Beauty Salon Business Model and Financial
						Projections
					</Heading>
					<Paragraph big>
						All businesses need a business model, which is how you will generate
						sales, provide services and make money. Think about your business
						model now, because it’s better to have that in place so you can
						start acquiring customers and generating revenue from day one.
					</Paragraph>
					<Paragraph big>
						You will also need to look at financial projections for your beauty
						salon business. What are your expected sales and revenues? What is
						your profitability? How much money will you keep in the business to
						grow it? How much will you pay yourself and others? If you can, try
						to plan your revenue for the next month, three months, year and two
						years.
					</Paragraph>
					<Paragraph big>
						You might start by just offering one or two high-demand beauty
						treatments and then expanding later as you build your reputation and
						clientele.
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
					<Heading size={2} template={1} left>
						Write a Business Plan for Your Beauty Salon Business
					</Heading>

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

			<BusinessOwnerResponsibilities>
				<ImageContent image="unique-business-2" paddingTop="60">
					<Heading
						size={2}
						template={4}
						left
						style={{ fontSize: "24px", "max-width": "unset" }}
					>
						Choose the Right Business Structure and Register Your Beauty Salon
						Business
					</Heading>
					<Paragraph big>
						Now that you have all the background information for your beauty
						salon business, it’s time to make it into a reality. Starts by
						choosing the right structure or “legal entity” for your business. In
						the U.S., there are five main business structures. They are:
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
							finances and assets and is a great way to start your real estate.
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
							please see our in-depth guide on business entities.
						</Link>{" "}
						If you still have questions,{" "}
						<a
							href="https://grasshopper.com/blog/llc-vs-corporation-8-entrepreneur-questions-answered/"
							target="_blank"
							rel="noopener noreferrer"
						>
							we’ve answered them to help you choose the right business
							structure.
						</a>
					</Paragraph>
					<Paragraph
						big
						style={{ paddingTop: "48px", paddingBottom: 0 }}
						mixed={true}
					>
						In most cases our recommendation would be to create an LLC. We have{" "}
						<Link to="/form-an-llc/">
							a complete guide to everything you need to do
						</Link>{" "}
						and we can set one up for your beauty salon business.{" "}
						<Link to="/llc-state-information/">
							LLC formation does vary from state to state,
						</Link>{" "}
						but we’ve got you covered, wherever you are.
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
			<Oval5>
				<OvalSvg5 />
			</Oval5>
			<UsefulTools
				style={{ paddingBottom: "200px" }}
				toolsList={toolsList.tools}
				headlineText={toolsList.headlineText}
				description={toolsList.description}
			/>
		</ToolsWrapper>

		<Conclusion
			to={process.env.ORDER_URL + "/form-order-now.php"}
			buttonTitle="Start your Beauty Salon Business with us, today"
		>
			<Heading size={3} style={{ fontSize: "40px" }}>
				Conclusion
			</Heading>
			<Paragraph big>
				As you can see, starting a beauty salon can be a great way to grow a
				thriving business. A strong focus on the best treatments, understanding
				your clientele and local marketing will position you for success. Good
				luck!
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

const ToolsWrapper = styled.div`
	position: relative;
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
	padding-bottom: 80px;
`;

const CenterBox = styled.div`
	width: 100%;
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
	padding-bottom: 70px;
	position: relative;
`;

const BusinessOwnerResponsibilities = styled.section`
	position: relative;
	padding-top: 100px;

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
	top: 200px;
	width: 100%;

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
	left: 0;
	top: 0;
	width: 100%;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const TabsOval2 = styled.div`
	position: absolute;
	right: 0;
	top: 436px;
	width: 100%;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const Oval2 = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;

	@media (min-width: 570px) {
		width: 570px;
	}
`;

const Oval3 = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const Oval4 = styled.div`
	position: absolute;
	right: 0;
	bottom: 100px;
	width: 100%;
	transform: scaleX(-1);

	@media (min-width: 720px) {
		width: 720px;
	}
`;

const Oval5 = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	z-index: -1;

	@media (min-width: 720px) {
		width: 720px;
	}
`;

export default BeautySalon;
