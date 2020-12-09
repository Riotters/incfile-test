import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import {
	questions,
	service,
	tabs,
	top,
} from "../static/learning-center-entity/ohio-corporation";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import TabsOvalOneSvg from "../images/ovals/bottom-left-transparent-pink.inline.svg";
import OvalSvg2 from "../images/ovals/top-right-transparent-blue2.inline.svg";
import OvalSvg3 from "../images/ovals/bottom-left-transparent-blue1.inline.svg";
import OvalSvg4 from "../images/ovals/top-right-transparent-orange3.inline.svg";
import PanelWrapper from "../atomic/organisms/tabs/panel";
import { Heading } from "../atomic/atoms/typography/heading";
import { Paragraph } from "../atomic/atoms/typography/paragraph";
import TextBoxed from "../atomic/molecules/static-check/circle-checkmark-text-boxed";
import { color, gradient } from "../atomic/atoms/styles/colors";
import Oval from "../atomic/atoms/icons/oval";
import HeadingCenter from "../atomic/partials/heading-center";
import ContentCenter from "../atomic/partials/content-center";
import LightBoxVideo from "../components/LightBox";
import Curve2SVG from "../images/curves/bottom-left-top-right-reverse-big.inline.svg";
import Curve from "../atomic/atoms/icons/curve";
import PacketsSection from "../atomic/sections/learning-center-entity/alaska-corporation/packets";
import Accordion from "../atomic/organisms/accordion/accordion";
import Rocket from "../atomic/sections/learning-center-entity/alaska-corporation/rocket";
import FilingTimeAndPriceBox from "../atomic/state-corporation/filing-time-and-price-box";
import ComplianceRequirementBox from "../atomic/state-corporation/compliance-requirement-box";
import { getFullPricesAndFilings } from "../api/Api";
import ReactTabs from "../atomic/partials/ReactTabs";
import { TabPanel } from "react-tabs";

const OhioCorporation = () => {
	const [dataApi, setDataApi] = React.useState({});
	const [
		filingTimeAndRequirementHeader,
		setFilingTimeAndRequirementHeader,
	] = React.useState("");

	React.useEffect(() => {
		getFullPricesAndFilings("Ohio", "Corporation").then((data) => {
			setDataApi(data);
			setFilingTimeAndRequirementHeader(
				`Annual ${data.prices.state} Filing Requirements`
			);
		});
	}, []);

	return (
		<Layout>
			<SEO
				title="Form a Corporation or LLC in Ohio Today | Incfile"
				description="Incorporating in Ohio has never been easier. Get access to filing schedules and fees, how to structure your business, and what documents are needed. "
			/>
			<Top
				imageName="mr-bulb-corporation-california-8302"
				imageAlt="Mrs Bulb and with checklist"
				ovalColor="purple-2"
				headlineWidth="560"
			>
				<h1>{top.header}</h1>
				<p>{top.text}</p>
				<Buttonsbox>
					<Button content={top.buttons[0]} theme="primary56" arrow />
				</Buttonsbox>

				<RatingRow>
					<CartBlock />
					<RatingBlock />
				</RatingRow>
			</Top>

			<TabsWrapper>
				<Oval className="oval" height={420} width={420} top="1" left="0">
					<TabsOvalOneSvg />
				</Oval>

				<ReactTabs content={tabs}>
					<TabPanel>
						<PanelWrapper>
							<Heading
								size={2}
								template={3}
								left
								style={{ marginBottom: "24px" }}
							>
								Choosing a Corporation Name
							</Heading>
							<Paragraph big>
								Deciding on a name for your new business is one of the first
								steps in the process of forming your Ohio corporation. The
								corporate name you choose must be distinguishable from any other
								registered Ohio business entity, as well as different from any
								reserved names on record.
							</Paragraph>
							<Paragraph big>
								The name cannot include language that says or implies that the
								corporation is connected with any government entity, or that it
								is organized for a purpose besides what is permitted by state
								law and its own articles of incorporation.
							</Paragraph>
							<Paragraph big>
								Additionally, the name must contain the words “Corporation,”
								“Company,” or “Incorporated,” their abbreviations, or words or
								abbreviations of words meaning the same in another language.
							</Paragraph>
							<Paragraph big style={{ marginBottom: "32px" }}>
								You can reserve an available corporate name for up to 180 days
								for a $50 fee.
							</Paragraph>
							<LightBoxVideo
								thumbnailVideo="what-is-a-corporation-8899"
								videoID="oYZShvmf9eQ"
							/>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading
								size={2}
								template={3}
								left
								style={{ marginBottom: "24px" }}
							>
								Articles of Incorporation
							</Heading>
							<Paragraph big>
								New Ohio businesses must file articles of incorporation with the
								Ohio Secretary of State. The Ohio General Corporation Law (Title
								17 of the Ohio Revised Code) requires that certain items are
								included in your company’s articles of incorporation. The
								minimum filing fee is $125, for which you can authorize up to
								1,500 shares.
							</Paragraph>
							<Paragraph big>
								There must be at least one incorporator, who can be either a
								natural person or a business entity. The articles must list the
								name and address of each incorporator, as well as the address of
								the corporation’s principal office.
							</Paragraph>
							<Paragraph big>
								The articles must also state the initial capital of the
								corporation, if any, as well as the number of shares that the
								corporation is authorized to issue and the par value of those
								shares.
							</Paragraph>
							<Paragraph big>
								Ohio also allows for the inclusion of optional provisions in the
								articles of incorporation, such as the names and addresses of
								the initial directors, the corporate purpose or purposes, the
								corporation’s duration (if it will not be perpetual), and other
								provisions for managing the corporation’s business.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading
								size={2}
								template={3}
								left
								style={{ marginBottom: "24px" }}
							>
								Registered Agent and Office
							</Heading>
							<Paragraph big>
								The new corporation’s authorized representative will be the new
								corporation’s incorporator. Typically, an initial director is
								named as the incorporator, but anyone can fill this role.
							</Paragraph>
							<Paragraph big>
								The incorporator must prepare and sign an Original Appointment
								of Statutory Agent form, which must be included with your
								articles when you file.
							</Paragraph>
							<Paragraph big>
								Usually, an initial director or shareholder is designated as the
								initial registered agent, who is the person authorized to
								receive legal documents on behalf of the corporation. The street
								address of the corporation can be given as the registered
								agent’s business address, which also constitutes the registered
								office of the corporation.
							</Paragraph>
							<Paragraph big>
								The registered agent must be an Ohio resident, and his or her
								business address must be in-state, also. The incorporator who
								signed the articles as the authorized representative must also
								sign the appointment form as the authorized representative, and
								the agent must sign the form as well.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading
								size={2}
								template={3}
								left
								style={{ marginBottom: "24px" }}
							>
								Bylaws
							</Heading>
							<Paragraph big>
								All corporations are required to keep a copy of their bylaws at
								their main executive office, but they are not required to file
								those bylaws with the state. At the new corporation’s initial
								meeting, the board of directors should adopt corporate bylaws,
								and then keep them updated as time goes on.
							</Paragraph>
							<Paragraph
								big
								style={{
									fontFamily: "Avenir",
									fontWeight: "900",
									color: "#1e1e1e",
								}}
							>
								Bylaws are a critically important document describing the
								corporation’s basic managerial and legal operating principles
								regarding such issues as:
							</Paragraph>

							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									Shareholders’ and directors’ meetings
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The authority, number, and tenure of directors in the board of
									directors
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>Voting procedures</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The duties, responsibilities, and tenure of officers
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>How stock is issued</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									How and when annual financial information is provided to
									shareholders
								</Paragraph>
							</TextBoxed>

							<Paragraph big>
								Officers of the new corporation can either be listed in the
								bylaws or elected by the board in compliance with those bylaws.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading
								size={2}
								template={3}
								left
								style={{ marginBottom: "24px" }}
							>
								Directors
							</Heading>
							<Paragraph big>
								Unless the articles of incorporation specify otherwise, each
								director will hold office for no more than three years or until
								the next annual meeting of the shareholders and until his
								successor is elected, or until his earlier resignation, removal
								from office, or death.
							</Paragraph>
							<Paragraph big>
								The corporation’s officers (who are elected annually by the
								directors) should consist of a president, a secretary, a
								treasurer, and, if desired, a chairman of the board, one or more
								vice presidents, and such other officers and assistant officers
								as may be thought necessary.
							</Paragraph>
							<Paragraph big>
								The chairman of the board is required to be a director, but
								unless the articles of incorporation say otherwise, none of the
								other officers need to be a director. Any two or more offices
								may be held by the same person, but an officer is not allowed to
								execute, acknowledge, or verify any official document in more
								than one capacity if that instrument is required to be executed,
								acknowledged, or verified by two or more officers.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading
								size={2}
								template={3}
								left
								style={{ marginBottom: "24px" }}
							>
								Requirement Reports
							</Heading>
							<Paragraph big style={{ marginBottom: "48px" }}>
								Ohio corporations must file an annual report with the Ohio Tax
								Commissioner each year between January 1 and March 31.
							</Paragraph>

							<Paragraph
								big
								style={{
									marginBottom: "24px",
									fontFamily: "Avenir",
									fontWeight: "900",
									color: "#1e1e1e",
								}}
							>
								The report must include:
							</Paragraph>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The corporation’s name and its state or country of
									incorporation.
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The location of the corporation’s principal office.
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The names of the corporation’s president, secretary,
									treasurer, and statutory agent in the state, with the post
									office address of each.
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The kind of business in which the corporation is engaged.
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The date of the beginning of the corporation’s annual
									accounting period that includes the first day of January of
									the tax year.
								</Paragraph>
							</TextBoxed>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading
								size={2}
								template={3}
								left
								style={{ marginBottom: "24px" }}
							>
								Taxes
							</Heading>
							<Paragraph big>
								Ohio corporations must pay a franchise tax based on the value of
								their outstanding shares of stock. This value is determined by
								corporate net income or corporate net worth.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
				</ReactTabs>
			</TabsWrapper>

			<ServiceSection>
				<Oval className="oval" height={420} width={420} top="20" right="0">
					<OvalSvg2 />
				</Oval>
				<Oval className="oval" height={720} width={720} top="60" left="0">
					<OvalSvg3 />
				</Oval>
				<HeadingCenter
					headline={service.header}
					textWidth="590"
					text={service.text}
					bottomMargin="48"
					bottomMarginLG="80"
				/>
				<ContentCenter style={{ marginBottom: "149px" }}>
					<Curve top="-115" left="80" rotate={180} color={color.blue2}>
						<Curve2SVG />
					</Curve>
					<LightBoxVideo
						thumbnailVideo="comparison-chart-video-3611"
						videoID="oYZShvmf9eQ"
					/>
				</ContentCenter>

				{/* Filing Times & Requirement section */}
				<ContentCenter contentWidth={970}>
					<HeadingCenter
						headline={filingTimeAndRequirementHeader}
						textWidth="770"
						bottomMargin="48"
						bottomMarginLG="80"
					/>
					<FilingTimeAndPriceBox data={dataApi} />
					<ComplianceRequirementBox data={dataApi} style={{ margin: 0 }} />
				</ContentCenter>
			</ServiceSection>

			<PacketsSection data={dataApi} />

			<QuestionSection>
				<Oval className="oval" height={570} width={570} top="20" right="0">
					<OvalSvg4 />
				</Oval>
				<HeadingCenter headline={questions.header} textWidth="770" />
				<ContentCenter style={{ marginBottom: "48px" }}>
					<Accordion
						content={questions}
						curve
						curveColor={color.blue1}
						curveLeft="-15px"
					/>
				</ContentCenter>
				<ContentCenter style={{ marginBottom: "48px" }}>
					<Button
						content={{
							text: `View all corporation FAQ's`,
							url: `/research-topics/c-corporation-info/`,
						}}
						width={300}
						padding="12px 48px"
					/>
				</ContentCenter>
			</QuestionSection>

			{/*<InfoSection>*/}
			{/*<HeadingCenter headline={info.header} textWidth="770" />*/}

			{/*<Container>*/}
			{/*<AdventagesBox>*/}
			{/*{info.items.map((item) => (*/}
			{/*<Adventages headline={item.headline} text={item.text} />*/}
			{/*))}*/}
			{/*</AdventagesBox>*/}
			{/*</Container>*/}
			{/*</InfoSection>*/}

			<Rocket />
		</Layout>
	);
};

const InfoSection = styled.section`
	margin-bottom: 148px;
`;

const QuestionSection = styled.section`
	background-image: ${gradient.orange3};
	position: relative;
	padding-top: 100px;
	margin-top: 52px;
	margin-bottom: 148px;
`;

const PackageSection = styled.section``;

const ServiceSection = styled.section`
	background-image: ${gradient.blue3};
	padding-top: 100px;
	position: relative;
	margin-bottom: 100px;
	overflow: hidden;
`;

const TabsWrapper = styled.section`
	position: relative;
	margin-top: 120px;

	@media (min-width: 992px) {
		margin-top: 21px;
	}
`;

const AdventagesBox = styled.div`
  display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 20px;
    margin-top: 76px;
    margin-bottom 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

export default OhioCorporation;
