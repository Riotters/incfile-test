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
} from "../static/learning-center-entity/virginia-corporation";
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
import ArrowLink from "../atomic/molecules/buttons/text";

import FilingTimeAndPriceBox from "../atomic/state-corporation/filing-time-and-price-box";
import ComplianceRequirementBox from "../atomic/state-corporation/compliance-requirement-box";
import { getFullPricesAndFilings } from "../api/Api";
import ReactTabs from "../atomic/partials/ReactTabs";
import { TabPanel } from "react-tabs";

const VirginiaCorporation = () => {
	const [dataApi, setDataApi] = React.useState({});
	const [
		filingTimeAndRequirementHeader,
		setFilingTimeAndRequirementHeader,
	] = React.useState("");

	React.useEffect(() => {
		getFullPricesAndFilings("Virginia", "Corporation").then((data) => {
			setDataApi(data);
			setFilingTimeAndRequirementHeader(
				`Annual ${data.prices.state} Filing Requirements`
			);
		});
	}, []);

	return (
		<Layout>
			<SEO
				title="Virginia Corporation | How to Incorporate in Virginia | Learn About Incorporating in Virginia"
				description="Information on Virginia incorporation is a click away. Find filing times and fees, what documents are required, how to choose a name, and more. "
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
								The name you choose for your new Virginia corporation is not
								allowed to be the same as or deceptively similar to the
								registered or reserved name of any other business entity in the
								state. It may not include language that states or implies that
								it’s been organized for a purpose other than one allowed under
								state law or stated in its articles of incorporation. It must
								also include as a status designator one of the following terms
								or its abbreviation: “corporation,” “incorporated,” “limited,”
								or “company.”
							</Paragraph>
							<Paragraph big>
								If your corporate name is not considered to be distinguishable
								from one already on file with the state, it’s not sufficient to
								just change some punctuation, a definite or indefinite article,
								or the status designator. In other words, if “ABC Company” is a
								name already on file in Virginia, it would not be enough of a
								difference to file your corporation’s name as “The ABC Company,”
								“A-B-C Company,” or “ABC Incorporated.”
							</Paragraph>
							<ArrowLink
								content={{
									text: `Use our name search tool to check your name availability`,
									url: `/virginia-entity-search/?open=true`,
								}}
								style={{ marginBottom: "32px" }}
							/>
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
								A new corporation’s articles of incorporation must be filed with
								the Virginia Secretary of State before it can conduct business
								in the Old Dominion. Incorporating in Virginia can occur for any
								lawful business activity (subject to Virginia regulations
								regarding certain industries), but there is no requirement to
								specifically state the corporation’s purpose in the articles.
							</Paragraph>
							<Paragraph big>
								There must be at least one incorporator (a natural person or a
								corporate entity), who signs and files the articles of
								incorporation with the Secretary of State.
							</Paragraph>
							<Paragraph big>
								The articles of incorporation must include:
							</Paragraph>

							<Colorbox
								color={color.blue3}
								content={articlesOfIncorporation.box1}
								dotsColor={color.blue1}
								style={{ marginBottom: "65px" }}
							/>
							<Paragraph big>
								Other items may-but are not required to be-included in the
								articles of incorporation, such as:
							</Paragraph>

							<Colorbox
								color={color.orange3}
								content={articlesOfIncorporation.box2}
								dotsColor={color.orange1}
								style={{ marginBottom: "48px" }}
							/>

							<Paragraph big>
								After the articles are filed, the incorporator(s) or initial
								director(s)-if they are named in the articles-must hold a
								meeting to complete the organization of the corporation.
								Virginia’s laws regarding corporations give some protection from
								liability to directors for good-faith business decisions, as
								well as for minority and dissenting shareholders.
							</Paragraph>
							<Paragraph big>
								The minimum filing fee for a corporation in Virginia is $178.
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
								Virginia corporations must maintain a registered agent within
								the state-a person or office appointed to receive official state
								correspondence, both administrative and legal. The agent must
								have the same business office address as the registered office
								and be either:
							</Paragraph>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									An individual residing in the state who is a director of the
									corporation, or
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									A member of the Virginia State Bar, or
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									A business entity with authority to transact business in
									Virginia.
								</Paragraph>
							</TextBoxed>
							<Paragraph big>
								The corporation’s registered office may be the same as any of
								the corporations's places of business.
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
								A corporation’s bylaws are critical because they describe the
								corporation’s basic operating principles from both the
								managerial and legal perspectives. A Virginia corporation must
								maintain a copy of its bylaws at its main executive office, but
								is not required to file them with the state.
							</Paragraph>
							<Paragraph big>
								The incorporators or board of directors should approve the
								corporation’s bylaws at their first meeting-insuring that they
								don’t conflict with either state law or the articles of
								incorporation-and keep them updated as time goes on.
							</Paragraph>
							<Paragraph
								big
								style={{
									fontFamily: "Avenir",
									fontWeight: "900",
									color: "#1e1e1e",
								}}
							>
								The bylaws should as a minimum include:
							</Paragraph>

							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									What authority directors have, how many there are, and how
									long they serve
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									Duties and responsibilities of officers and how long they
									serve
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									How consensus on major decisions is reached with and without
									meetings
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									How, when, and where shareholders and directors meetings are
									held
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>How stock is issued</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									Requirements for providing annual financial information to
									shareholders
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
								Directors
							</Heading>
							<Paragraph big>
								The corporation’s board of directors has the responsibility for
								making major corporate decisions. Officers of the company-who
								run the day-to-day affairs of the organization-must be listed in
								the bylaws or elected by the board. At least one officer must
								authenticate records for the corporation, as well as prepare
								minutes of directors’ and shareholders meetings. An officer may
								hold more than one office in the corporation unless otherwise
								prohibited by law.
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
								Virginia corporations must file an annual report with the
								Virginia State Corporation Commission in the last three months
								of the calendar year that begins with its date of incorporation.
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
								This report (accompanied by the filing fee of $100), must
								include the following information:
							</Paragraph>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The corporation’s name and its state or country of
									incorporation.
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The address of the corporation’s principal office.
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The names and addresses of the corporation’s directors and
									principal officers.
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The street address and county of the corporation’s registered
									office.
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The name of the corporation’s registered agent at the
									registered office.
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The aggregate number of shares which the corporation has
									authority to issue, itemized by class.
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
								The Virginia corporate income tax rate varies based on the
								amount of a corporation’s income, as well as other factors.
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

export default VirginiaCorporation;
