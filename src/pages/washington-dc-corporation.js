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
} from "../static/learning-center-entity/washington-dc-corporation";
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
		getFullPricesAndFilings("Washington DC", "Corporation").then((data) => {
			setDataApi(data);
			setFilingTimeAndRequirementHeader(
				`Annual ${data.prices.state} Filing Requirements`
			);
		});
	}, []);

	return (
		<Layout>
			<SEO
				title="Form a Corporation or LLC in Washington DC Today | Incfile"
				description="Incoporating in the District of Columbia? Learn how to choose a business name, file the required documents, structure management and more. "
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
							<Heading size={2} template={3} style={{ marginBottom: "24px" }}>
								Choosing a Corporation Name
							</Heading>
							<Paragraph big>
								Choosing a name for your new District of Columbia corporation is
								one of the first official steps toward actually conducting
								business in the District. The corporate name you choose must be
								readily distinguishable from all other registered and reserved
								business entities on the District of Columbia rolls.
							</Paragraph>
							<Paragraph big>
								Your new business’ name must include one of the following words
								or an abbreviation thereof: “Incorporated,” “Corporation,”
								“Company,” or “Limited.” It’s also a good idea to make sure that
								the name does not state or imply that the corporation is
								organized for some purpose other than stated in its articles of
								incorporation or one permitted by District law.
							</Paragraph>
							<Paragraph big style={{ marginBottom: "32px" }}>
								An available corporate name can be reserved for up to 60 days
								for a $35 fee.
							</Paragraph>
							<LightBoxVideo
								thumbnailVideo="what-is-a-corporation-8899"
								videoID="oYZShvmf9eQ"
							/>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={2} template={3} style={{ marginBottom: "24px" }}>
								Articles of Incorporation
							</Heading>
							<Paragraph big>
								Before it can start conducting business in the District, a new
								DC corporation must file articles of incorporation, along with a
								minimum $120 incorporation fee ($100 filing fee and a minimum
								$20 authorized stock fee). You may authorize up to $100,000 of
								capitalization (shares) in your articles for this minimum $20
								fee—for example, 100,000 shares with a par value of $1 each or
								200,000 with a par value of 50 cents each. Shares without par
								value are given a $1 per share value for purposes of this fee,
								so you can authorize up to 100,000 shares without par value for
								the minimum $20 authorized stock fee.
							</Paragraph>
							<Paragraph big>
								Two original signed copies of the articles, along with a Written
								Consent of Registered Agent, must be delivered by at least one
								incorporator. The incorporator may be one of the initial
								directors, or anyone else as long as they are at least 18 years
								of age.
							</Paragraph>
							<Paragraph big>
								The following information must be included in the articles of
								incorporation:
							</Paragraph>

							<Colorbox
								color={color.orange3}
								content={articlesOfIncorporation.box1}
								dotsColor={color.orange1}
								style={{ marginBottom: "48px" }}
							/>

							<Paragraph big>
								Most incorporators authorize only common shares of stock with
								equal voting, dividend, and liquidation rights, and no special
								restrictions. If you want to authorize the maximum number of
								common shares without par value, you can state that in your
								articles. Or, to authorize par value shares, you can include a
								statement along the lines of, “The aggregate number of shares
								the corporation is authorized to issue is 100,000, with a par
								value of $1.00 each.”
							</Paragraph>
							<Paragraph big>
								If you want to authorize a special class or classes of shares,
								you must state the name of each class or series, the number of
								shares in each, and the par value (if any) of each class or
								series. Another alternative is to state that the shares in each
								class or series are without par value.
							</Paragraph>
							<Paragraph big>
								If you do authorize separate classes or series of shares, you
								should also state any applicable rights and/or restrictions.
							</Paragraph>
							<Paragraph big>
								District law requires that a corporation obtains at least $1,000
								of capitalization before it starts doing business. Your
								financial records should show that this much cash or property
								was paid into your corporation by the initial shareholders.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={2} template={3} style={{ marginBottom: "24px" }}>
								Registered Agent and Office
							</Heading>
							<Paragraph big>
								Every District of Columbia corporation must have a registered
								agent in the district—the person or office designated to receive
								official administrative and legal correspondence. The registered
								agent is required to sign the articles of incorporation,
								indicating acceptance of the appointment as such.
							</Paragraph>
							<Paragraph big>
								The registered agent must be either a DC resident or a
								corporation authorized to conduct business there. In either
								case, the agent’s business office must be the same as the
								registered office. The registered office may be the same as the
								corporation’s place of business.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={2} template={3} style={{ marginBottom: "24px" }}>
								Bylaws
							</Heading>
							<Paragraph big>
								Bylaws lay out the corporation’s basic managerial and legal
								operating principles that manage their internal affairs. The
								District of Columbia corporations must keep a copy of their
								bylaws at their principal executive office, but are not required
								to file them with the state. At its initial meeting, the
								incorporators or the board of directors should adopt corporate
								bylaws, and then keep them updated as time goes on.
							</Paragraph>
							<Paragraph
								big
								style={{
									fontFamily: "Avenir",
									fontWeight: "900",
									color: "#1e1e1e",
								}}
							>
								The board of directors of a corporation may adopt, amend, or
								repeal bylaws, unless the articles reserve this right to the
								shareholders. Bylaws normally address:
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
							<Heading size={2} template={3} style={{ marginBottom: "24px" }}>
								Directors
							</Heading>
							<Paragraph big>
								Officers are listed in the initial bylaws or elected by the
								board of directors, and may appoint other officers in accordance
								with the bylaws. At least one officer should have the
								responsibility of preparing minutes of director and shareholder
								meetings, and for maintaining and authenticating corporate
								records.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={2} template={3} style={{ marginBottom: "24px" }}>
								Requirement Reports
							</Heading>
							<Paragraph big>
								DC corporations must file a report with the mayor’s office by
								the end of the second calendar month after delivery of the
								corporation’s original articles, and every year after that. This
								report must include the corporation’s name, its jurisdiction of
								incorporation, and any information in its articles that has
								since changed since the last report.
							</Paragraph>
							<Paragraph big>
								If shareholder requests it, a DC corporation must send that
								shareholder its most recent annual and published reports.
							</Paragraph>
						</PanelWrapper>
					</TabPanel>
					<TabPanel>
						<PanelWrapper>
							<Heading size={2} template={3} style={{ marginBottom: "24px" }}>
								Taxes
							</Heading>
							<Paragraph big>
								The District of Columbia imposes a corporate franchise tax based
								on net taxable income, and it also imposes an unincorporated
								business tax on unincorporated businesses. The minimum tax is
								$100 per year, which includes a surtax.
							</Paragraph>
							<Paragraph big>
								District corporations must pay a 9.975 percent tax on all income
								earned there. The District also charges a sales tax of 5.75
								percent rate on most sales and a maximum rate of 14.5 percent.
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
