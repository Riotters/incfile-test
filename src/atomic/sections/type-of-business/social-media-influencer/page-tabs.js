import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import CkeckText from "../../../../components/static-check/text-only";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import OvalGreenSVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import BlueBoxWithAbsoluteText from "../../../molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../../../components/adventages";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import { color } from "../../../atoms/styles/colors";
import Colorbox from "../../../../components/color-box";
import {
	AveragePricingFollowerCount,
	AveragePricingNiche,
	tabs,
} from "../../../../static/type-of-business/social-media-influencer";
import AveragePricing from "../../../molecules/mixed-blocks/average-pricing";
import CircleWithText from "../../../molecules/blocks/circle-with-text-block";
import ReactTabs from "../../../partials/ReactTabs";
import { TabPanel } from "react-tabs";
import PanelWrapper from "../../../organisms/tabs/panel";
import Image from "../../../../atomic/atoms/image/image";

const ListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Oval = styled.div`
	height: 100%;
	width: 100%;
	max-height: 420px;
	max-width: 420px;
	position: absolute;
	left: 0;
	top: 0;
	width: 420px;
	display: none;

	@media (min-width: 720px) {
		display: block;
	}
`;

const OvalBottom = styled.div`
	height: 100%;
	width: 100%;
	max-height: 420px;
	max-width: 420px;
	position: absolute;
	top: 667px;
	right: 0;
	width: 420px;
	display: none;

	@media (min-width: 720px) {
		display: block;
	}

	svg {
		transform: scaleX(-1);
	}
`;

const WrapperMain = styled.div`
	margin-top: 120px;
	position: relative;
	@media (min-width: 992px) {
		margin-top: 21px;
	}
`;

const PageTabs = () => (
	<WrapperMain>
		<Oval>
			<OvalSVG />
		</Oval>
		<OvalBottom>
			<OvalGreenSVG />
		</OvalBottom>
		<ReactTabs content={tabs}>
			<TabPanel>
				<PanelWrapper>
					<Heading size={2} template={3} left>
						Starting a Business as a Social Media Influencer
					</Heading>
					<Paragraph big>
						Social networks like Instagram and YouTube are dominated by
						influencers whose followers act as a built-in audience for
						photogenic or disruptive brands. And it’s easy to see why — in a
						digital media landscape that throws ads at us everywhere we go, some
						people turn to celebrities and social media stars for advice on what
						products they love.
					</Paragraph>
					<Paragraph big style={{ marginBottom: "50px" }}>
						The question is, how can you become a social influencer and marketer
						and start a business based on the brands and products you share with
						your followers? It’s a crowded space, but for those who make it as
						influencer marketers, the rewards can be significant. We’ll share
						information on what it means to be an influencer, how you can turn
						that into a business, the best platforms to use and other useful
						advice.
					</Paragraph>

					<Heading size={3} style={{ fontSize: "20px" }}>
						How Social Media Influencer Marketing Works on Instagram, YouTube
						and Other Networks
					</Heading>
					<Paragraph big>
						Here’s how brands, influencers, social networks and end customers
						interact in influencer marketing.
					</Paragraph>

					<CountingTextBoxed number={1}>
						<div>
							<Heading size={4} style={{ fontSize: "16px" }}>
								Brand or Marketing Agency Finds an Influencer With the Right
								Audience
							</Heading>
							<Paragraph bottomPadding={0} bottomMargin={0}>
								Once they understand audience demographics, a brand will look
								for influencers who have that audience. They will explore areas
								like follower counts, the influencer’s interests, the type of
								posts they create and various other factors. They will narrow
								influencers down to a short list and identify those most likely
								to connect with their desired target market.
							</Paragraph>
						</div>
					</CountingTextBoxed>

					<CountingTextBoxed number={2}>
						<div>
							<Heading size={4} style={{ fontSize: "16px" }}>
								Brand Identifies a Product or Service
							</Heading>
							<Paragraph bottomPadding={0} bottomMargin={0}>
								Brands have certain products or services that they want to
								promote to audiences that are hard to reach via other means. For
								example, they may have a new clothing line targeted at women
								between the ages of 18 and 22. The brand decides which products
								they want to promote and defines an audience for each one,
								typically including age, gender, location, interests and similar
								demographics.
							</Paragraph>
						</div>
					</CountingTextBoxed>

					<CountingTextBoxed number={3}>
						<div>
							<Heading size={4} style={{ fontSize: "16px" }}>
								Approach the Influencer and Arrange Terms for Sharing the
								Product
							</Heading>
							<Paragraph bottomPadding={0}>
								This is where it gets interesting. Typically, a brand or
								marketing agency will approach individual influencers and
								discuss terms for promoting their products. This will include
								areas like:
							</Paragraph>

							<ListWrapper>
								<div>
									<CkeckText>
										<Paragraph big bottomMargin={16}>
											How the brand, product or service will be represented
										</Paragraph>
									</CkeckText>
								</div>

								<div>
									<CkeckText>
										<Paragraph big bottomMargin={16}>
											Social networks where the influencer will share their
											posts
										</Paragraph>
									</CkeckText>
								</div>

								<div>
									<CkeckText>
										<Paragraph big bottomMargin={16}>
											Payment amounts for promoting the brand, product or
											service (on a per post, per purchase, campaign or other
											basis)
										</Paragraph>
									</CkeckText>
								</div>

								<div>
									<CkeckText>
										<Paragraph big bottomMargin={16}>
											How often the influencer is expected to post on their
											social media accounts
										</Paragraph>
									</CkeckText>
								</div>

								<div>
									<CkeckText>
										<Paragraph big bottomMargin={16}>
											Any hashtags and language that needs to be included in
											posts
										</Paragraph>
									</CkeckText>
								</div>

								<div>
									<CkeckText>
										<Paragraph big bottomMargin={16}>
											How the results of the campaign will be tracked
										</Paragraph>
									</CkeckText>
								</div>
							</ListWrapper>
						</div>
					</CountingTextBoxed>

					<CountingTextBoxed number={4}>
						<div>
							<Heading size={4} style={{ fontSize: "16px" }}>
								Social Media Influencer Posts About the Brand, Product or
								Service
							</Heading>
							<Paragraph bottomPadding={0} bottomMargin={0}>
								After terms have been agreed to, the influencer will create
								posts to promote the brand, product or service. They might use
								predesigned imagery, photograph a product themselves or work
								with a brand or marketing agency on other types of content. Once
								the posts have been created, they are then shared with the
								audience, typically on a predefined timetable.
							</Paragraph>
						</div>
					</CountingTextBoxed>

					<CountingTextBoxed number={5}>
						<div>
							<Heading size={4} style={{ fontSize: "16px" }}>
								Audience Interacts and Buys the Product
							</Heading>
							<Paragraph bottomPadding={0} bottomMargin={0}>
								The post is shared with the audience and they purchase the
								offering based on the influencer’s endorsement. The brand or
								marketing agency will track the success of their social media
								influencer marketing campaigns based on the revenue they
								generate. This helps the brand understand their return on
								investment and which influencers are most effective.
							</Paragraph>
						</div>
					</CountingTextBoxed>
				</PanelWrapper>
			</TabPanel>

			<TabPanel>
				<PanelWrapper>
					<Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
						Statistics on the Power of the Social Media Influencer Marketing
						Industry
					</Heading>
					<Paragraph big style={{ marginBottom: "76px" }}>
						Social media influencer marketing has some impressive numbers to
						back it up:
					</Paragraph>

					<BlueBoxWithAbsoluteText
						absoluteText="1.5M"
						text="There were over 1.5 million influencer posts on Instagram in 2017."
					/>
					<BlueBoxWithAbsoluteText
						absoluteText="$2B"
						text="Worth of influencer marketing industry in 2017, and is expected to be worth $10 billion over the next couple of years."
					/>
					<BlueBoxWithAbsoluteText
						absoluteText="18-34"
						text="Almost three-quarters of influencers on Instagram are in the 18-to-34 age range."
					/>

					<CircleWithText
						textInsideCircle="70"
						symbol="%"
						textLine="Of teens trust influencers more than traditional celebrities"
					/>

					<BubblesWrapper>
						<Bubbles>
							<BubbleImage>
								<Image
									filename="mrs-bulb-final-comp-thumb-up-color"
									alt="thumb up"
								/>
							</BubbleImage>
							<BubbleImage>
								<Image
									filename="mrs-bulb-final-comp-thumb-up-color"
									alt="thumb up"
								/>
							</BubbleImage>
							<BubbleImage>
								<Image
									filename="mrs-bulb-final-comp-thumb-up-color"
									alt="thumb up"
								/>
							</BubbleImage>
							<BubbleImage>
								<Image
									filename="mrs-bulb-final-comp-thumb-up-color"
									alt="thumb up"
								/>
							</BubbleImage>
							<BubbleImage>
								<Image
									filename="mrs-bulb-final-comp-thumb-up-copy-4"
									alt="thumb up"
								/>
							</BubbleImage>
							<BubbleImage>
								<Image
									filename="mrs-bulb-final-comp-thumb-up-copy-4"
									alt="thumb up"
								/>
							</BubbleImage>
							<BubbleImage>
								<Image
									filename="mrs-bulb-final-comp-thumb-up-copy-4"
									alt="thumb up"
								/>
							</BubbleImage>
							<BubbleImage>
								<Image
									filename="mrs-bulb-final-comp-thumb-up-copy-4"
									alt="thumb up"
								/>
							</BubbleImage>
							<BubbleImage>
								<Image
									filename="mrs-bulb-final-comp-thumb-up-copy-4"
									alt="thumb up"
								/>
							</BubbleImage>
							<BubbleImage>
								<Image
									filename="mrs-bulb-final-comp-thumb-up-copy-4"
									alt="thumb up"
								/>
							</BubbleImage>
						</Bubbles>
						<Text>
							4 in 10 millennials say that their favorite influencers understand
							them better than their friends.
						</Text>
					</BubblesWrapper>

					<Adventages
						headline="Even micro-influencers are being sought out by brands, as they see higher levels of engagement than traditional celebrities and other marketing channels."
						width="100%"
					/>

					<Adventages
						headline="Influencer marketing generates a high return on investment for brands and marketing agencies (by as much as 600 percent)."
						width="100%"
					/>

					<Adventages
						headline="Influencer marketing is the fastest growing promotional channel."
						width="100%"
					/>

					<Adventages
						headline="The influencer marketing industry was worth around $2 billion in 2017 and is expected to be worth $10 billion over the next couple of years."
						width="100%"
					/>

					<Paragraph big style={{ marginBottom: "76px" }}>
						As you can see, if you’ve got the makings of an influencer marketer,
						the size and growth potential of the industry could give you an
						amazing opportunity.
					</Paragraph>
				</PanelWrapper>
			</TabPanel>

			<TabPanel>
				<PanelWrapper>
					<Heading
						size={2}
						template={3}
						left
						style={{ textAlign: "left", marginBottom: "24px" }}
					>
						What It Means to Be a Social Media Influencer on Instagram, YouTube
						and Other Networks
					</Heading>
					<Paragraph big style={{ marginBottom: "48px" }}>
						If this sounds like something you want to be involved with, it’s
						important to understand what brands and marketing agencies are
						looking for. This could include:
					</Paragraph>

					<Adventages
						headline="A large follower count (preferably 100,000 followers or more)"
						width="100%"
					/>

					<Adventages
						headline="An active presence across one or more social media networks, especially Instagram, Facebook and YouTube"
						width="100%"
					/>

					<Adventages
						headline="A niche for yourself, whether that’s sharing makeup and fashion tips, reviewing the latest technology or having a strong opinion and viewpoint"
						width="100%"
					/>

					<Adventages
						headline="Plenty of interactions from your followers, including onward sharing, likes and favorites"
						width="100%"
					/>

					<Adventages
						headline="An audience that is difficult to reach through traditional marketing channels, like teens and young women"
						width="100%"
					/>

					<Adventages
						headline="A deep, personal connection with your fans and followers"
						width="100%"
					/>

					<Heading
						size={3}
						style={{ fontSize: "20px", textAlign: "left", marginTop: "48px" }}
					>
						How You Will Spend Your Days as a Social Media Influencer
					</Heading>

					<Paragraph big>
						The main area you’ll be focusing on is creating original content.
						Your followers will spot when you’re just sharing generic marketing
						messages, so you need to personalize all of your posts. This could
						involve taking videos of you using or wearing the product, staging
						beautiful photography or creating engaging descriptions and copy.
					</Paragraph>

					<Paragraph big>
						You’ll need to post regularly as well — not just for the offerings
						you’re being paid to promote, but about other aspects of your
						interests and life. This helps to keep your followers engaged and
						encourages more people to become fans.
					</Paragraph>

					<Paragraph big style={{ marginBottom: "48px" }}>
						You will also be reporting and sharing from others in your social
						network and interacting with your followers to build personal
						connections. You may also be seeking out marketing deals yourself
						and contacting agencies and brands to offer your services.
					</Paragraph>

					<Heading
						size={3}
						style={{
							fontSize: "20px",
							textAlign: "left",
							marginBottom: "24px",
						}}
					>
						How Instagram and Other Social Media Influencers Make Money
					</Heading>

					<Paragraph big style={{ marginBottom: "48px" }}>
						Influencers make money because brands and agencies pay them to
						promote their products or services. You may get paid in several ways
						based on multiple metrics:
					</Paragraph>

					<Colorbox className="box" color={color.blue3}>
						<Heading size={4}>
							Here’s how social media influencers make money:
						</Heading>

						<ul className="display-list">
							<li>One time for a single post</li>
							<li>
								Multiple times, for each post you make in a particular
								influencer marketing campaign
							</li>
							<li>
								A set amount, based on the number of interactions, likes, shares
								and other metrics on your posts
							</li>
							<li>
								A percentage, based on the revenue generated as a result of your
								audience buying products and services
							</li>
						</ul>
					</Colorbox>

					<Paragraph big style={{ marginBottom: "48px", marginTop: "48px" }}>
						You should work with the brand or marketing agency to agree on
						payment terms that fairly represent the effort you’re putting in and
						the results they expect to see. In terms of how much you can make,
						Instagram broke down the average of what influencers were charging
						by follower count and category. Here’s what they found:
					</Paragraph>

					<Heading size={3} style={{ fontSize: "20px", textAlign: "left" }}>
						Average Pricing Based on Follower Count
					</Heading>

					<div style={{ marginBottom: "30px" }}>
						{AveragePricingFollowerCount.map((item, index) => {
							const rowLenght = AveragePricingFollowerCount.length;

							return (
								<AveragePricing
									key={index}
									SvgIcon={item.icon}
									text={item.text}
									first={index === 0}
									last={rowLenght === index + 1}
								/>
							);
						})}
					</div>

					<Heading size={3} style={{ fontSize: "20px", textAlign: "left" }}>
						Average Pricing Based on Niche
					</Heading>

					<div style={{ marginBottom: "30px" }}>
						{AveragePricingNiche.map((item, index) => {
							const rowLenght = AveragePricingNiche.length;

							return (
								<AveragePricing
									key={index}
									SvgIcon={item.icon}
									text={item.text}
									first={index === 0}
									last={rowLenght === index + 1}
									backgroundColor={color.orange3}
								/>
							);
						})}
					</div>
				</PanelWrapper>
			</TabPanel>
		</ReactTabs>
	</WrapperMain>
);

const BubblesWrapper = styled.div`
	width: 100%;
	background-color: white;
	box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	padding: 30px;
	margin-bottom: 50px;
`;

const Bubbles = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 30px;
`;

const Text = styled.div`
	text-align: center;
	font-family: Engram, sans-serif;
	font-weight: 900;
	font-size: 20px;
	color: #1d1d1d;
	max-width: 500px;
	margin: 0 auto;
`;

const BubbleImage = styled.div`
	width: 20%;
	margin-bottom: 40px;

	> div {
		width: 74px;
		margin: 0 auto;
		height: 110px;
	}
`;

export default PageTabs;
