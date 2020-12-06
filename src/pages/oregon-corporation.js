import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import {
	articlesOfIncorporation,
	questions,
	service,
	tabs,
	top,
} from "../static/learning-center-entity/oregon-corporation";
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
import Colorbox from "../atomic/molecules/blocks/left-icon-block-colored";
import FilingTimeAndPriceBox from "../atomic/state-corporation/filing-time-and-price-box";
import ComplianceRequirementBox from "../atomic/state-corporation/compliance-requirement-box";
import { getFullPricesAndFilings } from "../api/Api";
import ReactTabs from "../atomic/partials/ReactTabs";
import { TabPanel } from "react-tabs";

const OregonCorporation = () => {
	const [dataApi, setDataApi] = React.useState({});
	const [
		filingTimeAndRequirementHeader,
		setFilingTimeAndRequirementHeader,
	] = React.useState("");

	React.useEffect(() => {
		getFullPricesAndFilings("Oregon", "Corporation").then((data) => {
			setDataApi(data);
			setFilingTimeAndRequirementHeader(
				`Annual ${data.prices.state} Filing Requirements`
			);
		});
	}, []);

	return (
		<Layout>
			<SEO
				title="Form a Corporation or LLC in Oregon Today | Incfile"
				description="Learn about incorporating in Oregon. Read our guide to get filing times and fees, understand management structure, compliance requirements and more. "
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
							<Heading size={3} style={{ marginBottom: "24px" }}>
								Choosing a Corporation Name
							</Heading>
							<Paragraph big>
								Your new corporation’s name must be distinguishable from all
								other business entities registered or reserved with the Oregon
								Secretary of State. The name must include the word
								“incorporated,” “corporation,” “company,” “limited,” or an
								abbreviation thereof, or words or abbreviations of similar
								meaning in another language. The name may not, however, include
								language that states or implies that the corporation is
								organized for a purpose other than one permitted by state law
								and its articles of incorporation.
							</Paragraph>
							<Paragraph big style={{ marginBottom: "32px" }}>
								You can reserve a name for up to 120 days from the state filing
								office website for $50.
							</Paragraph>
							<LightBoxVideo
								thumbnailVideo="what-is-a-corporation-8899"
								videoID="oYZShvmf9eQ"
							/>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={3} style={{ marginBottom: "24px" }}>
								Articles of Incorporation
							</Heading>
							<Paragraph big>
								Oregon state law requires that the new Oregon corporation file
								articles of incorporation with the Secretary of State
							</Paragraph>

							<Colorbox
								color={color.blue3}
								content={articlesOfIncorporation.box1}
								dotsColor={color.blue1}
								style={{ marginBottom: "65px" }}
							/>
							<Paragraph big>
								There must be at least one incorporator, either a natural person
								of legal age or a legal entity, who signs the articles of
								incorporation.
							</Paragraph>

							<Colorbox
								color={color.orange3}
								content={articlesOfIncorporation.box2}
								dotsColor={color.orange1}
								style={{ marginBottom: "48px" }}
							/>

							<Paragraph big>
								Oregon allows a corporation to be formed for any lawful business
								activity. Except for professional corporations, there is no need
								to state the corporate purpose in the articles.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={3} style={{ marginBottom: "24px" }}>
								Registered Agent and Office
							</Heading>
							<Paragraph big>
								Oregon corporations must have a registered in-state agent who is
								designated to receive official state correspondence. The agent
								is the person or business entity designated to receive official
								state correspondence, including notice if the corporation is
								served with a lawsuit.
							</Paragraph>
							<Paragraph big>
								Every corporation must have a registered office in the state,
								which may be any of its places of business.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={3} style={{ marginBottom: "24px" }}>
								Bylaws
							</Heading>
							<Paragraph big>
								A corporation is required to keep its bylaws available at its
								primary executive office, but it is not required to file them
								with the state. The incorporators or board of directors should
								adopt the corporation’s bylaws at their first meeting, insuring
								that there is no conflict with the articles of incorporation or
								state law. They should also keep the bylaws updated as time goes
								on.
							</Paragraph>
							<Paragraph
								big
								style={{
									fontFamily: "Avenir",
									fontWeight: "900",
									color: "#1e1e1e",
								}}
							>
								Bylaws set forth the corporation’s basic operating principles
								from both the managerial and legal perspectives, and should
								include, as a minimum:
							</Paragraph>

							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The authority of directors, how many there are, and how long
									they serve
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									Officers’ duties and responsibilities and how long they serve
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									How major decisions are reached, with or without meetings
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									How, when, and where shareholders’ and directors’ meetings are
									held
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									How the corporation’s stock is issued
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									Requirements for publishing annual financial information to
									shareholders
								</Paragraph>
							</TextBoxed>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={3} style={{ marginBottom: "24px" }}>
								Directors
							</Heading>
							<Paragraph big>
								There must be at least one director, but there are no statutory
								eligibility requirements. However, the articles of incorporation
								or the bylaws may specify these requirements.
							</Paragraph>
							<Paragraph big>
								Officers must be listed in the bylaws or elected by the board of
								directors. The officers of a corporation oversee the day-to-day
								operations of the organization and carry out the strategic
								decisions made by the board of directors. There must be at least
								a president and a secretary. Their titles and duties are stated
								in the bylaws and/or specified by the board, but they must be
								organized so as to be able to sign instruments and stock
								certificates that comply with state law. Officers may appoint
								other officers in compliance with the bylaws and board of
								directors. One of the officers will have the duty of recording
								the proceedings of stockholder and director meetings and
								authenticating records for the corporation. An officer may hold
								more than one office simultaneously unless the certificate or
								bylaws state otherwise.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={3} style={{ marginBottom: "24px" }}>
								Requirement Reports
							</Heading>
							<Paragraph big style={{ marginBottom: "48px" }}>
								A report must be filed with the Oregon Secretary of State each
								year on the anniversary of its incorporation date.
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
									The street address of its registered office and the name of
									its registered agent at that office.
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The address of the corporation’s principal executive office,
									if different from the registered office.
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The names and addresses of the president and secretary of the
									corporation.
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The classification code category most closely designating the
									primary business activity of the corporation.
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The corporation’s federal employer identification number
									(EIN).
								</Paragraph>
							</TextBoxed>
							<Paragraph big>
								The corporation must provide its shareholders a report of any
								indemnifications or expenses advanced to a director in
								connection with a proceeding by or for the benefit of the
								corporation, with or before notice of the next shareholders’
								meeting.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={3} style={{ marginBottom: "24px" }}>
								Taxes
							</Heading>
							<Paragraph big>
								Oregon imposes a flat rate of 6.6 percent on all corporate
								revenue generated within the state. Oregon corporations
								operating in more than one state pay corporate excise taxes
								according to an apportionment formula, but within the state, the
								formula is based only on in-state revenue.
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

export default OregonCorporation;
