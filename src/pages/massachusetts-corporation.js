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
} from "../static/learning-center-entity/massachusetts-corporation";
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

const AlaskaCorporation = () => {
	const [dataApi, setDataApi] = React.useState({});
	const [
		filingTimeAndRequirementHeader,
		setFilingTimeAndRequirementHeader,
	] = React.useState("");

	React.useEffect(() => {
		getFullPricesAndFilings("Massachusetts", "Corporation").then((data) => {
			setDataApi(data);
			setFilingTimeAndRequirementHeader(
				`Annual ${data.prices.state} Filing Requirements`
			);
		});
	}, []);

	return (
		<Layout>
			<SEO
				title="Form a Corporation or LLC in Massachusetts Today | Incfile"
				description="Have questions about incorporating in Massachusetts? Find the answers in our FAQs. See filing times and prices, who can own a business, and much more. "
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
								Your Massachusetts corporation’s name must be different from any
								other authorized business entity on file with the Secretary of
								the Commonwealth. This applies to entities formed in the state,
								as well as those originally formed elsewhere but authorized to
								conduct business in Massachusetts.
							</Paragraph>
							<Paragraph big>
								The corporation’s name must include either the word
								“Incorporation,” “Incorporated,” “Company,” or “Limited” (or an
								abbreviation thereof) at its end, and it can’t include language
								that might suggest or imply that the corporation has been formed
								for a purpose not permitted by law or allowed by its articles of
								organization.
							</Paragraph>
							<Paragraph big>
								The Corporations Division does not allow symbols as part of a
								corporate name-for example, the name “Pri¢e Bu$ters” would not
								be allowed. The Corporations Division also discourages the use
								of initials, numbers, hyphens, apostrophes, and commas in
								corporate names. If you do include punctuation in your
								corporation’s name, it must be included on all filing documents
								with the office.
							</Paragraph>
							<Paragraph big style={{ marginBottom: "32px" }}>
								You can reserve an available corporate name with the state for
								60 days for a $30 fee.
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
								The existence of a domestic profit corporation begins when its
								articles of organization are filed with the Corporations
								Division of the Secretary of the Commonwealth’s office. The
								articles of organization must include the corporate name, the
								street address of the main corporate office, the number of
								authorized shares, the name and address of each incorporator,
								and some supplemental information that is not a permanent part
								of the articles
							</Paragraph>

							<Colorbox
								color={color.blue3}
								content={articlesOfIncorporation.box1}
								dotsColor={color.blue1}
								style={{ marginBottom: "65px" }}
							/>

							<Colorbox
								color={color.orange3}
								content={articlesOfIncorporation.box2}
								dotsColor={color.orange1}
								style={{ marginBottom: "48px" }}
							/>

							<Paragraph big>
								Massachusetts corporations must continuously maintain a
								registered agent in Massachusetts who is designated to receive
								official state administrative and legal correspondence. The
								agent may be an individual (who may be the secretary or officer
								of another corporation) and whose business office is the
								registered office of the corporation, or a corporation
								authorized to do business in Massachusetts, with a business
								office that is the same as the registered office.
							</Paragraph>
							<Paragraph big>
								The registered office may be-but does not have to be-the same as
								the corporation’s place of business.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={3} style={{ marginBottom: "24px" }}>
								Registered Agent and Office
							</Heading>
							<Paragraph big>
								Bylaws govern a Massachusetts corporation’s business and
								affairs. A corporation is required to keep a copy of its bylaws
								at its main executive office, but is not required to file them
								with the state. Either the incorporators or the board of
								directors should adopt corporate bylaws at their initial
								meeting, and then keep them updated as time goes on. Bylaws
								describe the corporation’s basic managerial and legal operating
								principles, including information on:
							</Paragraph>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									Shareholders and directors meetings
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The authority, number, and tenure of directors
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
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={3} style={{ marginBottom: "24px" }}>
								Bylaws
							</Heading>
							<Paragraph big>
								A corporation’s board of directors must consist of at least one
								director, with the total number specified in the articles of
								organization the bylaws. If the corporation has only one
								shareholder, then only one director is necessary; if there are
								two shareholders, there must be at least two directors; and if
								there are three or more directors, there must be at least three
								directors.
							</Paragraph>
							<Paragraph big>
								The state does not mandate eligibility requirements for
								directors, but the articles or bylaws may specify director
								qualifications.
							</Paragraph>
							<Paragraph big>
								Officers may be appointed by the board of directors if not
								already listed in the bylaws, and those officers may appoint
								other officers if so authorized by the board or the bylaws.
							</Paragraph>
							<Paragraph big>
								Every corporation must have for its officers a minimum of a
								president, a treasurer, and a clerk (called a “secretary” in
								other states). The clerk or assistant clerk has the
								responsibility of preparing minutes of director and shareholder
								meetings and for authenticating corporate records. Two or more
								offices may be held by the same person.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={3} style={{ marginBottom: "24px" }}>
								Directors
							</Heading>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The corporation’s name and the state or country of
									incorporation
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The address of its registered office and the name of its
									registered agent at that office in the commonwealth
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The address of its principal office
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The names and business addresses of its directors, officers,
									and chief executive officer and chief financial officer, if
									different
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									A brief description of any change in the nature of business
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The total number of authorized, issued, and outstanding
									shares, itemized by class and series, if any, within each
									class
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									Any change in the designated fiscal year of the corporation
								</Paragraph>
							</TextBoxed>
							<Paragraph big>
								The corporation’s board of directors must send an annual report
								to all shareholders no more than 120 days after the close of the
								fiscal year, describing the financial position of the
								corporation for the fiscal year, as well as any statements of
								cash flows.
							</Paragraph>
							<Paragraph big>
								The corporation must also send out a report of condition to the
								Massachusetts Secretary of the Commonwealth within four months
								after the close of the fiscal year (but not before the date
								fixed in its bylaws for the annual meeting). This report must
								include the corporation name, the street address of the
								corporation’s principal office, particular stock information
								(including the total amount of the corporation’s authorized
								stock and its par value), and the names and addresses of the
								corporation’s directors and officers, as well as the date at
								which their terms of office expire.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={3} style={{ marginBottom: "24px" }}>
								Requirement Reports
							</Heading>
							<Paragraph big style={{ marginBottom: "48px" }}>
								Massachusetts’ corporate tax structure consists of a flat rate
								of 9.5% on all corporate income. Among states levying corporate
								income taxes, Massachusetts’ rate ranks fourth highest
								nationally.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={3} style={{ marginBottom: "24px" }}>
								Taxes
							</Heading>
							<Paragraph big>
								Massachusetts’ corporate tax structure consists of a flat rate
								of 9.5% on all corporate income. Among states levying corporate
								income taxes, Massachusetts’ rate ranks fourth highest
								nationally.
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

export default AlaskaCorporation;
