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
} from "../static/learning-center-entity/connecticut-corporation";
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
import { Helmet } from "react-helmet";

const ConnecticutCorporation = () => {
	const [dataApi, setDataApi] = React.useState({});
	const [
		filingTimeAndRequirementHeader,
		setFilingTimeAndRequirementHeader,
	] = React.useState("");

	React.useEffect(() => {
		getFullPricesAndFilings("Connecticut", "Corporation").then((data) => {
			setDataApi(data);
			setFilingTimeAndRequirementHeader(
				`Learn more about incorporating in ${data.prices.state}`
			);
		});
	}, []);

	return (
		<Layout>
			<SEO
				title="Form a Corporation or LLC in Connecticut Today | Incfile"
				description="Learn and obtain information regarding how to file and operate a corporation in the State of Connecticut."
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
								Your new corporation’s name must be distinguishable from all
								other business entities registered or reserved with the
								Connecticut Secretary of State. The name must include the word
								“Incorporated,” “Corporation,” “Limited,” “Company,” or “Societa
								per Azioni” (“publicly traded company” in Italian)-or
								itsabbreviation, “S.p.A.”-or words of similar meaning in another
								language. You new corporation name can also use an abbreviation
								of one of these terms.
							</Paragraph>
							<Paragraph big style={{ marginBottom: "32px" }}>
								You can reserve an available corporate name for 120 days for a
								$30 fee.
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
								Connecticut state laws require new corporations file articles of
								incorporation with the Secretary of State, which must include
								the following:
							</Paragraph>

							<Colorbox
								color={color.blue3}
								content={articlesOfIncorporation.box1}
								dotsColor={color.blue1}
								style={{ marginBottom: "65px" }}
							/>

							<Paragraph big>
								Connecticut does not require a forming corporation to specify a
								par value for their shares. The maximum number of shares that
								can be authorized for the lowest filing fee of $150 is 20,000.
								Most incorporators authorize common shares with equal voting,
								dividend, and liquidation rights and no special restrictions. If
								you wish to authorize one or more special classes of shares, you
								must specify the name of each class and the number of shares per
								class. If you do specify different classes in this section, the
								total number of shares of each class listed should equal the
								total number of authorized shares.
							</Paragraph>
							<Paragraph big>
								A Connecticut corporation may be formed for any lawful business
								activity, except that of a bank and trust company, savings bank,
								or savings and loan association. The actual purpose is not
								required to be listed in the certificate.
							</Paragraph>
							<Paragraph big>
								The Registered Agent must also sign the articles of
								incorporation, indicating acceptance of the appointment.
							</Paragraph>
							<Paragraph big>
								Connecticut also permits optional provisions to be included in
								the certificate of incorporation for corporations wishing to
								specify additional criteria, including:
							</Paragraph>
							<Colorbox
								color={color.orange3}
								content={articlesOfIncorporation.box2}
								dotsColor={color.orange1}
								style={{ marginBottom: "24px" }}
							/>

							<Paragraph big>
								The filing fee is $50 plus a minimum $150 franchise tax, payable
								to the “Secretary of State.” An Organization and First Report
								form must be filed within 30 days of the corporation’s
								organizational meeting; the filing fee for this report is $75.
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
								Connecticut corporations must have a registered in-state agent-a
								natural person who is a Connecticut resident-who is designated
								to receive official correspondence from the state. The
								Registered Agent must have a business office that is the same as
								the registered office.
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
								A corporation should keep its bylaws available at its principal
								executive office, but it is not required to file them with the
								state. The incorporators or board of directors should adopt the
								corporation’s bylaws at their first meeting, insuring that there
								is no conflict with the articles of incorporation or state law.
								They should also keep the bylaws updated as time goes on.
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
							<Heading
								size={2}
								template={3}
								left
								style={{ marginBottom: "24px" }}
							>
								Directors
							</Heading>
							<Paragraph big>
								Directors are elected at the first annual shareholders’ meeting
								and at each annual meeting thereafter, unless their terms are
								staggered.
							</Paragraph>
							<Paragraph big>
								The officers of a corporation oversee the day-to-day operations
								of the organization and carry out the strategic decisions made
								by the board of directors. Their titles and duties are stated in
								the bylaws and/or specified by the board, but they must be
								organized so as to be able to sign instruments and stock
								certificates that comply with state law. One of the officers
								will have the duty of recording the proceedings of shareholders’
								and directors’ meetings. An officer may hold more than one
								office simultaneously unless the certificate or bylaws state
								otherwise.
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
							<Paragraph big style={{ marginBottom: "32px" }}>
								Connecticut corporations must file an annual or biannual report
								with the Connecticut Secretary of State. The first report must
								be filed within 30 days after its organizational meeting. This
								report must include the corporation’s name, its principal
								office, and the names and addresses of the directors and
								officers.
							</Paragraph>
							<Paragraph big style={{ marginBottom: "24px" }}>
								A corporation shall mail required annual financial statements to
								each shareholder within 120 days after the close of each fiscal
								year. If a shareholder requests it, a corporation must send its
								most recent annual report and financial statement.
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
								Taxes
							</Heading>
							<Paragraph big>
								Corporations pay a corporate business tax for being able to
								conduct business in a corporate capacity in Connecticut.
								Corporations can calculate their tax under two alternative
								methods-tax measured by net income and the minimum tax-and pay
								the higher of the two. If the tax measured by net income is less
								than $250, the corporation pays the minimum tax, which is never
								less than $250.
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
						videoID="372490609"
						vimeo
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

			<Rocket urlParams="?entityType=CCorporation&entityState=CT" />

			<Helmet>
				<script type="application/ld+json">
					{`{
                        "@context": "http://schema.org",
                        "@type": "VideoObject",
                        "name": "What is a Corporation? by Incfile",
                        "description": "What is a corporation and how does it work? One of the most important decisions you'll make when starting a business is its legal structure. A popular option is a “corporation“—but what does this mean for business owners?   A corporation is its own legal entity separate from the owners. It has nearly all the legal rights of an individual: It can hire employees, own assets, enter into contracts, sue and be sued, loan and borrow money, and pay taxes. But since the corporation exists as a separate entity, it limits the liability of its owners. That means shareholders have the right to participate in profits, but they’re not held personally liable for the company’s debts. And since a corporation isn’t linked to a single person, it doesn’t dissolve when its owners or shareholders change or die, so liability protection is passed on to the next in line.  The Three Main Types of Corporations:  - C Corporations - S Corporations - Non-profits   Learn more about the three main types of corporations by visiting these links below:   - What is an S Corporation? https://www.incfile.com/what-is-s-corporation/ - What is a C Corporation? https://www.incfile.com/what-is-c-corporation/ - What is a Nonprofit? https://www.incfile.com/what-is-non-profit-corporation/",
                        "thumbnailUrl": "https://i.ytimg.com/vi/oYZShvmf9eQ/default.jpg",
                        "uploadDate": "2020-09-07T17:00:19Z",
                        "duration": "PT1M41S",
                        "embedUrl": "https://www.youtube.com/embed/oYZShvmf9eQ",
                        "interactionCount": "74"
                    }`}
				</script>
			</Helmet>
		</Layout>
	);
};

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

export default ConnecticutCorporation;
