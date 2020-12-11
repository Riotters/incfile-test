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
import { Heading } from "../../atomic/atoms/typography/heading";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import Colorbox from "../../components/color-box";
import MegafornIcon from "../../images/icons/megafon.inline.svg";
import { color } from "../../components/styles/colors";
import TypeBusiness from "../../atomic/sections/type-of-business/gym-personal-training/type-business";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/gym-personal-training/validating-business-idea";
import BusinessPlan from "../../atomic/sections/type-of-business/gym-personal-training/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/gym-personal-training/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/gym-personal-training/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/gym-personal-training/order-now";
import Regulations from "../../atomic/sections/type-of-business/gym-personal-training/regulations";
import InsuranceBusinessSection from "../../atomic/sections/type-of-business/gym-personal-training/insurance-business";
import Taxes from "../../atomic/sections/type-of-business/gym-personal-training/taxes";
import ToolsAndLinks from "../../atomic/sections/type-of-business/gym-personal-training/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import TextBoxed from "../../atomic/molecules/text-blocks/text-boxed";
import CkeckText from "../../components/static-check/text-only";
import TextWithBubbleCounting from "../../atomic/molecules/mixed-blocks/text-with-bubble-counting";
import OvalSvg from "../../images/ovals/bottom-left-transparent-orange.inline.svg";
import ReactTabs from "../../atomic/partials/ReactTabs";
import { tabs } from "../../static/type-of-business/gym-personal-training";
import { TabPanel } from "react-tabs";

const GymPersonalTraining = () => (
	<Layout>
		<SEO
			title="Start a Gym, Fitness Center or Personal Training Business"
			description="If you’ve got an interest in exercise or personal training, then opening up a fitness-based business could be right for you. Learn more."
		/>

		<Top
			ovalColor="blue"
			imageName="gym-personal-training-main"
			imageAlt="Mr Bulb with seedling"
			headlineWidth={700}
		>
			<h1>
				How to Start Your Own Gym, Fitness Center or Personal Training Business
			</h1>
			<p>
				Getting fit, losing weight and living a healthy lifestyle is a priority
				for many of us. From new diets to innovative exercise regimes, we all
				want to find interesting ways to be active.
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
			<ReactTabs style={{ marginTop: "100px" }} content={tabs}>
				<TabPanel>
					<PanelWrapper>
						<Paragraph big>
							If you’ve got an interest in exercise or personal training and
							want to turn that expertise into a business, then opening up a
							fitness-based business could be right for you.
						</Paragraph>
						<Paragraph big>
							You’ve got plenty of choices depending on your budget, target
							clients and ideas for marketing your gym or personal training
							venture.
						</Paragraph>

						<Colorbox
							className="box"
							theme="icon"
							Icon={MegafornIcon}
							color={color.blue3}
							curve
							curveColor={color.orange2}
						>
							<Heading size={2} template={4} left>
								The question is, just where do you start?
							</Heading>
							<Paragraph bottomPadding={0} bottomMargin={0}>
								Here at Incfile, we know the answer, and we’ve shared it with
								more than 100,000 people who we've helped to form their
								businesses. Since 2004, we’ve supported gym, fitness or personal
								training entrepreneurs just like you, and we’re proud to have
								been a part of the healthy lifestyle business revolution.
							</Paragraph>
						</Colorbox>

						<Paragraph big style={{ marginTop: "48px" }}>
							From validating your business and doing the research to filing
							your paperwork and running your business, this guide will help you
							out. We’ll talk you through the main things you need to do to get
							your fitness business off of the ground.
						</Paragraph>

						<Paragraph
							big
							style={{
								fontFamily: "Avenir",
								fontWeight: "900",
								color: color.black,
							}}
						>
							Read on for some insight into creating your own gym, fitness
							center or personal training business and becoming an entrepreneur.
							In this guide we will cover:
						</Paragraph>

						<ListWrapper>
							<ListBox>
								<CkeckText>
									<Paragraph big>
										Statistics on why you should start a fitness-based business
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
										Ideas for the type of healthy lifestyle venture that you
										could create
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										How to validate your gym or personal training business idea
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Business plans for fitness companies
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Helpful software for gym, fitness or personal training
										business owners
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										How to start your gym, fitness or personal training business
										with information on equipment, employees, location, permits,
										finance, taxes and more
									</Paragraph>
								</CkeckText>
							</ListBox>

							<ListBox>
								<CkeckText>
									<Paragraph big>
										Learn if a gym, personal training or other type of fitness
										business could be right for you
									</Paragraph>
								</CkeckText>
							</ListBox>
						</ListWrapper>
					</PanelWrapper>
				</TabPanel>

				<TabPanel>
					<PanelWrapper>
						<Heading size={2} template={3} left>
							Why You Should Open a New Gym or Personal Training Business
						</Heading>
						<Paragraph big style={{ marginBottom: "80px" }}>
							You might wonder if now is the right time to open your own gym or
							get into personal training. The answer is a resounding “yes.”
							Here’s how the fitness industry is performing:
						</Paragraph>

						<BlueBoxWithAbsoluteText
							absoluteText="$26B - $27.5B"
							text="Increase of U.S. revenues from gym, personal training and related businesses between 2015 and 2016"
						/>
						<BlueBoxWithAbsoluteText
							absoluteText="4% - 7%"
							text="Growth of fitness industry in the U.S. a year."
						/>
						<BlueBoxWithAbsoluteText
							absoluteText="$40K"
							text="Approximate numbers of gyms, fitness clubs and similar businesses in the U.S."
						/>

						<TextWithBubbleCounting>
							<Paragraph big style={{ fontWeight: "bold" }} bottomMargin={0}>
								Around 1 in 5 Americans has a membership to a fitness club, gym
								or studio
							</Paragraph>
							<Paragraph big bottomMargin={0}>
								(over 60 milion people)
							</Paragraph>
						</TextWithBubbleCounting>

						<div style={{ marginTop: "80px" }}>
							<Adventages
								headline="Boutique studios providing specialized fitness and well-being services are becoming increasingly popular"
								width="100%"
							/>
						</div>

						<div style={{ marginBottom: "48px" }}>
							<Adventages
								headline="Boutique studios providing specialized fitness and well-being services are becoming increasingly popular"
								width="100%"
							/>
						</div>

						<Paragraph big>
							This is why gym, fitness or personal training businesses are so
							exciting — how can you be part of that success? We're here to help
							you figure that out.
						</Paragraph>
					</PanelWrapper>
				</TabPanel>

				<TabPanel>
					<PanelWrapper>
						<Heading size={2} template={3} left>
							Is a Fitness-Based Business Right for You?
						</Heading>
						<Paragraph big style={{ marginBottom: "48px" }}>
							Although it can be exciting to form a gym or personal training
							business, there will be significant demands on you as a small
							business owner. Here are some of the things you can expect.
						</Paragraph>

						<Heading size={3}>
							A Day in the Life of a Gym, Fitness Center or Personal Training
							Business Owner
						</Heading>
						<Paragraph big>
							Here are some of the typical tasks you’ll be performing for your
							business on a daily basis.
						</Paragraph>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									Signing up new members and taking them through fitness
									orientations
								</Paragraph>
							</TextBoxed>
						</div>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									Checking out your facilities and equipment to keep everything
									clean, tidy, hygienic and safe
								</Paragraph>
							</TextBoxed>
						</div>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									Staying up-to-date with the latest thinking on exercise and
									fitness industry trends
								</Paragraph>
							</TextBoxed>
						</div>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									Scheduling appointments for classes or personal training
								</Paragraph>
							</TextBoxed>
						</div>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									Teaching classes and providing personal training
								</Paragraph>
							</TextBoxed>
						</div>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									Dealing with staff and members of the public
								</Paragraph>
							</TextBoxed>
						</div>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									Maintaining and buying equipment and other products
								</Paragraph>
							</TextBoxed>
						</div>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									Administering your business including paying suppliers,
									charging customers and other operations
								</Paragraph>
							</TextBoxed>
						</div>

						<TextBoxed>
							<Paragraph big bottomMargin={0}>
								Promoting and marketing your gym
							</Paragraph>
						</TextBoxed>

						<Heading size={3} style={{ marginTop: "48px" }}>
							Skills Needed by a Fitness Entrepreneur
						</Heading>
						<Paragraph big>
							The following skills will be very useful in your role as a
							fitness-based small business owner.
						</Paragraph>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									A good understanding of human anatomy and fitness needs
								</Paragraph>
							</TextBoxed>
						</div>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									The ability to tailor exercise to individuals so they meet
									their fitness goals
								</Paragraph>
							</TextBoxed>
						</div>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									The right approach for inspiring people through exercise
								</Paragraph>
							</TextBoxed>
						</div>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									Good interpersonal skills for dealing with gym members, staff
									and the public
								</Paragraph>
							</TextBoxed>
						</div>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									Strong administration for scheduling and finances
								</Paragraph>
							</TextBoxed>
						</div>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									The ability to identify and capitalize on fitness trends
								</Paragraph>
							</TextBoxed>
						</div>

						<TextBoxed>
							<Paragraph big bottomMargin={0}>
								Marketing your fitness products and services based on member
								needs
							</Paragraph>
						</TextBoxed>

						<Heading size={3} style={{ marginTio: "48px" }}>
							What Your Gym Members Are Looking For
						</Heading>
						<Paragraph big>
							Although many people have the same basic needs from a fitness
							business - losing weight, building endurance, getting stronger and
							improving general health - your clients' needs can vary widely
							beyond that. Think about the types of customers you’re appealing
							to:
						</Paragraph>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									Some might be training for a specific event like a marathon,
									Ironman or other medium- to long-term goal.
								</Paragraph>
							</TextBoxed>
						</div>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									Some might have personal bests that they’re trying to beat,
									every day.
								</Paragraph>
							</TextBoxed>
						</div>

						<div style={{ marginBottom: "10px" }}>
							<TextBoxed>
								<Paragraph big bottomMargin={0}>
									Some may want training to deal with particular life
									circumstances, like recovering from injury or getting in shape
									after the birth of a child.
								</Paragraph>
							</TextBoxed>
						</div>

						<TextBoxed>
							<Paragraph big bottomMargin={0}>
								Some may need help to maintain a general level of fitness and
								stay in shape.
							</Paragraph>
						</TextBoxed>

						<Paragraph big style={{ marginTop: "48px" }}>
							The key is to meet the various needs of each type of member. They
							will want a place they can go where they trust the trainers, have
							access to the latest equipment and are able to achieve their
							personal goals.
						</Paragraph>
					</PanelWrapper>
				</TabPanel>
			</ReactTabs>
		</TabsWrapper>

		<TypeBusiness />

		<ValidatingBusinessIdea />

		<BusinessPlan />

		<BusinessStructure />

		<SettingBusiness />

		<OrderNow />

		<Regulations />

		<InsuranceBusinessSection />

		<Taxes />

		<ToolsAndLinks />

		<Conclusion
			to={process.env.ORDER_URL + "/form-order-now.php"}
			buttonTitle="Start your Gym Personal Training Business with us, today"
		>
			<Heading size={3} style={{ fontSize: "48px" }}>
				Conclusion
			</Heading>
			<Paragraph big>
				The need for engaging, powerful ways to build our strength, endurance,
				fitness and well-being isn’t going away. Build on these opportunities by
				starting your own gym or personal training business and turning it into
				a success.
			</Paragraph>
		</Conclusion>
	</Layout>
);

const Oval = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;

	@media (min-width: 570px) {
		width: 570px;
	}
`;

const ButtonsBox = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 769px) {
		flex-direction: row;
	}
`;

const TabsWrapper = styled.section`
	margin-top: 120px;
	position: relative;
	@media (min-width: 992px) {
		margin-top: 21px;
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

export default GymPersonalTraining;
