import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import CkeckText from "../../../../components/static-check/text-only";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import OvalGreenSVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import BlueBoxWithAbsoluteText from "../../../molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../../../components/adventages";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import CircleWithText from "../../../molecules/blocks/circle-with-text-block";
import CircleIcon from "../../../../images/chart-boutique-clothing.inline.svg";
import ReactTabs from "../../../partials/ReactTabs";
import { tabs } from "../../../../static/type-of-business/boutique-clothing-business";
import { TabPanel } from "react-tabs";
import PanelWrapper from "../../../organisms/tabs/panel";
import LightBox from "../../../../components/LightBox";

const WrapperMain = styled.div`
	margin-top: 120px;
	position: relative;
	@media (min-width: 992px) {
		margin-top: 40px;
	}
`;

const ListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const ListBox = styled.div`
	width: 50%;
`;

const Oval = styled.div`
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const OvalBottom = styled.div`
	width: 100%;
	position: absolute;
	right: 0;
	top: 677px;
	transform: scaleX(-1);

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const BoutiqueClothingTabs = () => (
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
					<LightBox
						alt="boutique clothing business"
						bottomMargin={42}
						thumbnailVideo="how-start-brand-business-video-thumb-09122020"
						videoID="F336c6HKzXM"
					/>
					<Heading size={2} template={3} left>
						Starting a Boutique Clothing Business
					</Heading>
					<Paragraph big>
						Rather than selling everyday garments, boutique businesses focus on
						specific garments, tastes, designs and customers. If you have a
						unique taste and can curate the perfect collection, you can
						certainly start a successful retail clothing business.
					</Paragraph>
					<Paragraph big style={{ marginBottom: "48px" }}>
						The question is, just where do you start? Here at Incfile, we know
						the answer, and we’ve shared it with more than 500,000 people who
						we've helped to form their businesses. Since 2004, we’ve supported
						retail entrepreneurs just like you, and we’re proud to have been a
						part of the business revolution.
					</Paragraph>

					<Heading size={3}>Botique Clothing Business formation guide</Heading>
					<Paragraph big>
						Here is our simple guide to starting up a successful boutique
						clothing business. From researching the type of business you can
						start, through legalities of setting up your boutique and managing
						your operations, this guide is here to help. Read on for some
						insight into creating your own boutique business and becoming an
						entrepreneur. In this guide we will cover:
					</Paragraph>

					<ListWrapper>
						<ListBox>
							<CkeckText>
								<Paragraph big>
									Facts and figures on the success of boutique garment
									businesses
								</Paragraph>
							</CkeckText>
						</ListBox>

						<ListBox>
							<CkeckText>
								<Paragraph big>
									How to choose whether your clothing business should be an LLC
									or corporation
								</Paragraph>
							</CkeckText>
						</ListBox>

						<ListBox>
							<CkeckText>
								<Paragraph big>
									Whether a retail clothing business could be right for you
								</Paragraph>
							</CkeckText>
						</ListBox>

						<ListBox>
							<CkeckText>
								<Paragraph big>
									How to start your boutique business with information on
									equipment, employees, location, permits, finances, taxes and
									more
								</Paragraph>
							</CkeckText>
						</ListBox>

						<ListBox>
							<CkeckText>
								<Paragraph big>
									Ideas for the type of boutique clothing business that you
									could form
								</Paragraph>
							</CkeckText>
						</ListBox>

						<ListBox>
							<CkeckText>
								<Paragraph big>
									Helpful software for boutique clothing business owners
								</Paragraph>
							</CkeckText>
						</ListBox>

						<ListBox>
							<CkeckText>
								<Paragraph big>
									How to validate your clothing business idea
								</Paragraph>
							</CkeckText>
						</ListBox>

						<ListBox>
							<CkeckText>
								<Paragraph big>
									Business plans for boutique clothing companies
								</Paragraph>
							</CkeckText>
						</ListBox>
					</ListWrapper>
				</PanelWrapper>
			</TabPanel>

			<TabPanel>
				<PanelWrapper>
					<Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
						Why You Should Start a New Boutique Clothing Business
					</Heading>
					<Paragraph big style={{ marginBottom: "76px" }}>
						Clothing is one of the most popular retail sectors. Here are some
						surprising statistics:
					</Paragraph>

					<BlueBoxWithAbsoluteText
						absoluteText="$20B"
						text="Clothing boutiques earn over $20 billion in the U.S. every year"
					/>
					<BlueBoxWithAbsoluteText
						absoluteText="150K"
						text="There are over 150,000 boutique clothing businesses in the U.S., employing over 250.000 people"
					/>
					<BlueBoxWithAbsoluteText
						absoluteText="$700K"
						text="Worldwide revenue for online clothing is expected to rise to over $700 billion by 2022"
					/>

					<CircleWithText
						style={{ marginBottom: "48px" }}
						textInsideCircle="9"
						textLine="Expected revenue growth of Online boutique a year in the U.S."
						withBg={true}
						SvgChart={CircleIcon}
						symbol="%"
					/>

					<Adventages
						headline="On average, a boutique clothing business earns over $130,000 a year and employs between one and two people"
						width="100%"
					/>

					<Adventages
						headline="The traditional, brick-and-mortar clothing boutique is facing challenges, so more clothing entrepreneurs are selling online"
						width="100%"
					/>

					<Adventages
						headline="Worldwide revenue for online clothing is expected to rise to over $700 billion by 2022"
						width="100%"
					/>

					<Adventages
						headline="The average online customer spends between $280 and $300 a year on clothes"
						width="100%"
					/>

					<Adventages
						headline="Online boutique revenue is expected to grow by around 9 percent a year in the U.S."
						width="100%"
					/>
				</PanelWrapper>
			</TabPanel>

			<TabPanel>
				<PanelWrapper>
					<Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
						An Online Boutique vs. a Brick-and-Mortar Store
					</Heading>
					<Paragraph big style={{ marginBottom: "48px" }}>
						One of the biggest questions a boutique clothing entrepreneur will
						need to answer is whether to start a traditional, in-person
						boutique, an online boutique or a combination of the two. Each of
						these options has advantages and challenges.
					</Paragraph>

					<Heading
						size={3}
						style={{
							fontSize: "20px",
							textAlign: "left",
							fontFamily: "Avenir",
							fontWeight: "900",
						}}
					>
						Starting a Traditional Brick-and-Mortar Clothing Boutique
					</Heading>

					<Heading
						size={3}
						style={{
							fontSize: "20px",
							textAlign: "left",
							fontFamily: "Avenir",
							fontWeight: "900",
						}}
					>
						Advantages
					</Heading>

					<Adventages
						headline="You get visibility on the street, so passing customers can drop into your clothing store"
						width="100%"
					/>

					<Adventages
						headline="It’s easy to browse a range of clothing quickly so customers can find something they like"
						width="100%"
					/>

					<Adventages
						headline="Customers can try on clothing right then to see how they look"
						width="100%"
					/>

					<Adventages
						headline="Returns of clothing are likely to be minimal"
						width="100%"
					/>

					<Adventages
						headline="There’s likely to be less competition, depending on where you’re located"
						width="100%"
					/>

					<Adventages
						headline="You can display clothes and create an atmosphere for your boutique to build ambiance"
						width="100%"
					/>

					<Heading
						size={3}
						style={{
							fontSize: "20px",
							textAlign: "left",
							fontFamily: "Avenir",
							fontWeight: "900",
							marginTop: "48px",
						}}
					>
						Disadvantages
					</Heading>

					<Adventages
						circleBackgroundColor={color.red1}
						circleBackgroundShadow={shadow.red1}
						disadventage={true}
						headline="Your startup costs will be high as you will need to lease retail space and pay for fixtures, fittings and other expenses for your store"
						width="100%"
					/>

					<Adventages
						circleBackgroundColor={color.red1}
						circleBackgroundShadow={shadow.red1}
						disadventage={true}
						headline="Ongoing bills can be high, especially for lighting and heating"
						width="100%"
					/>

					<Adventages
						circleBackgroundColor={color.red1}
						circleBackgroundShadow={shadow.red1}
						disadventage={true}
						headline="Staff should be onsite whenever you are open, which means you’ll likely need to pay someone else if you want to take a break or vacation"
						width="100%"
					/>

					<Adventages
						circleBackgroundColor={color.red1}
						circleBackgroundShadow={shadow.red1}
						disadventage={true}
						headline="You will need to hold garments in a variety of styles and sizes, which locks up cash flow"
						width="100%"
					/>

					<Adventages
						circleBackgroundColor={color.red1}
						circleBackgroundShadow={shadow.red1}
						disadventage={true}
						headline="The traditional clothing boutique business in the U.S. is shrinking at a rate of around 2 percent a year"
						width="100%"
					/>

					<Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
						Starting an Online Clothing Boutique
					</Heading>

					<Heading
						size={3}
						style={{
							fontSize: "20px",
							textAlign: "left",
							fontFamily: "Avenir",
							fontWeight: "900",
							marginTop: "48px",
						}}
					>
						Advantages
					</Heading>

					<Adventages
						headline="Much lower startup costs, including expenses involved in setting up an ecommerce website, buying inventory and marketing"
						width="100%"
					/>

					<Adventages
						headline="Your ongoing expenses will be much lower since you can run an online boutique by yourself"
						width="100%"
					/>

					<Adventages
						headline="The online clothing boutique business is growing"
						width="100%"
					/>

					<Heading
						size={3}
						style={{ fontSize: "20px", textAlign: "left", marginTop: "48px" }}
					>
						Disadvantages
					</Heading>

					<Adventages
						circleBackgroundColor={color.red1}
						circleBackgroundShadow={shadow.red1}
						disadventage={true}
						headline="It’s more difficult for potential customers to browse items like they could in a store"
						width="100%"
					/>

					<Adventages
						circleBackgroundColor={color.red1}
						circleBackgroundShadow={shadow.red1}
						disadventage={true}
						headline="There’s much more competition for online clothing sales, as they’re not limited by location or geography"
						width="100%"
					/>

					<Adventages
						circleBackgroundColor={color.red1}
						circleBackgroundShadow={shadow.red1}
						disadventage={true}
						headline="Because customers can’t try clothing on before they purchase, return rates can be very high (some estimates indicate returns will be around half of what you sell!)"
						width="100%"
					/>

					<Adventages
						circleBackgroundColor={color.red1}
						circleBackgroundShadow={shadow.red1}
						disadventage={true}
						headline="It’s much harder to distinguish yourself online than in a physical location"
						width="100%"
					/>

					<Paragraph big style={{ marginBottom: "48px" }}>
						It’s vital to decide on the approach you want to take. The advice we
						present in the rest of this guide can apply to either type of
						clothing boutique, so please bear in mind the type you want to start
						when applying it to your own circumstances.
					</Paragraph>

					<Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
						Is a Boutique Right for You?
					</Heading>

					<Paragraph big style={{ marginBottom: "48px" }}>
						Although it can be exciting to form a boutique clothing business,
						there will be significant demands on you as a small business owner.
						Here are some of the things you can expect.
					</Paragraph>

					<Heading
						size={3}
						style={{
							fontSize: "20px",
							textAlign: "left",
							fontFamily: "Avenir",
							fontWeight: "900",
						}}
					>
						A Day in the Life of a Retail Business Owner
					</Heading>

					<Paragraph big style={{ marginBottom: "24px" }}>
						Here are some of the typical tasks you’ll be performing for your
						boutique clothing business on a daily basis.
					</Paragraph>

					<CountingTextBoxed number={1}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Seek out new clothing and garments that would fit well with your
							boutique
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={2}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Build your brand and focus on your unique clothing styles
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={3}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Provide advice to customers on clothes that match their personal
							taste
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={4}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Sell clothing to customers and deal with customer service and
							returns
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={5}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Handle the marketing for your boutique clothing business
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={6}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Deal with clothing suppliers and distribution of your garments
						</Paragraph>
					</CountingTextBoxed>

					<CountingTextBoxed number={7}>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							Handle financial and administrative management
						</Paragraph>
					</CountingTextBoxed>

					<Heading
						size={3}
						style={{
							fontSize: "20px",
							textAlign: "left",
							fontFamily: "Avenir",
							fontWeight: "900",
							marginTop: "48px",
							color: color.black,
						}}
					>
						Skills Needed by a Boutique Business Entrepreneur
					</Heading>
					<Paragraph big style={{ marginBottom: "48px" }}>
						The following skills will be very useful in your role as a boutique
						clothing small business owner.
					</Paragraph>

					<Adventages
						headline="Ability to research new trends and tastes in the clothing marketplace and garment industry"
						width="100%"
					/>

					<Adventages
						headline="A strong eye for style and branding so you can develop a unique niche for your clothes"
						width="100%"
					/>

					<Adventages
						headline="Good insight into customer tastes to help you sell clothes and manage inventory"
						width="100%"
					/>

					<Adventages
						headline="Financial management acumen so you can price items appropriately and pay bills"
						width="100%"
					/>

					<Adventages
						headline="Excellent interpersonal skills to help you deal with and sell to customers"
						width="100%"
					/>
				</PanelWrapper>
			</TabPanel>
		</ReactTabs>
	</WrapperMain>
);

export default BoutiqueClothingTabs;
