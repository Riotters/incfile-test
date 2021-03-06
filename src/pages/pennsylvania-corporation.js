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
} from "../static/learning-center-entity/pennsylvania-corporation";
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

const PennsylvaniaCorporation = () => {
	const [dataApi, setDataApi] = React.useState({});
	const [
		filingTimeAndRequirementHeader,
		setFilingTimeAndRequirementHeader,
	] = React.useState("");

	React.useEffect(() => {
		getFullPricesAndFilings("Pennsylvania", "Corporation").then((data) => {
			setDataApi(data);
			setFilingTimeAndRequirementHeader(
				`Learn more about incorporating in ${data.prices.state}`
			);
		});
	}, []);

	return (
		<Layout>
			<SEO
				title="Form a Corporation or LLC in Pennsylvania Today | Incfile"
				description="Get information on incoropration in Pennsylvania. Learn how to structure your business, choose a name, what documents are needed and more. "
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
								Choosing a name for your new Pennsylvania Corporation is one of
								the first official steps toward actually conducting business in
								the Keystone State. The business name you choose must be
								distinguishable from other registered Pennsylvania business
								entities, as well as any names already reserved (with some
								exceptions).
							</Paragraph>
							<Paragraph big>
								Your new business’ name may not state or imply that it is a
								state or federal governmental agency, or that it is organized
								for a purposed other than that permitted by state law and the
								corporation’s articles of incorporation. The name also (with a
								few exceptions) may not state or imply that it is a credit union
								or a public utility company. The name must use Roman characters
								and Roman or Arabic numerals, and it may not contain language
								that constitutes blasphemy, profane cursing, swearing, or
								profaning the Lord’s name.
							</Paragraph>
							<Paragraph big>
								The name must include one of the following terms or its
								abbreviation (or words or abbreviations of the same meaning in
								another language): “Incorporated,” “Corporation,” “Company,”
								“Limited,” “Association,” “Fund,” or “Syndicate.” “Company” or
								“Co.” may be immediately preceded by “and” or the symbol “&.”
							</Paragraph>
							<Paragraph big style={{ marginBottom: "32px" }}>
								Available corporate names may be reserved for up to 120 days for
								a $70 fee.
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
								In accordance with the Pennsylvania Business Corporation Law
								(found in Title 15 of the Pennsylvania Consolidated Statutes),
								corporations must file articles of incorporation with the
								Department of State, Corporation Bureau, before conducting
								business in the state. The articles must be delivered by at
								least one of the incorporators, accompanied by the filing fee of
								$125. There must be at least one incorporator, who must be
								either a natural person of adult age or a corporation. The
								incorporator does not have to be a director, officer, or
								shareholder of the corporation.
							</Paragraph>
							<Paragraph big>
								The following information must be included in the articles of
								incorporation:
							</Paragraph>

							<Colorbox
								color={color.blue3}
								content={articlesOfIncorporation.box1}
								dotsColor={color.blue1}
								style={{ marginBottom: "65px" }}
							/>

							<Paragraph big>
								A docketing statement must also accompany the articles of
								incorporation at filing. This states the corporation’s general
								business activity, the person responsible for initial tax
								reports, the fiscal year, and the Employer Identification Number
								(EIN), if applicable.
							</Paragraph>
							<Paragraph big>
								Pennsylvania law allows a corporation to be formed for any
								lawful business activity. Although there is no requirement for a
								specific corporate purpose to be stated in the articles of
								incorporation, a general statement about the corporation’s
								primary business activity must be included in the docketing
								statement that is attached to the articles when they are filed
								with the state.
							</Paragraph>
							<Paragraph big>
								Pennsylvania law also allows (but does not require) optional
								items to be included in the articles of incorporation for those
								corporations who wish to formally specify additional
								information, such as:
							</Paragraph>
							<Colorbox
								color={color.orange3}
								content={articlesOfIncorporation.box2}
								dotsColor={color.orange1}
								style={{ marginBottom: "48px" }}
							/>

							<Paragraph big>
								In Pennsylvania, it’s not required to state a par value for your
								new corporation’s shares. The filing fee is not based on how
								many shares are authorized, so you can authorize as many as
								desired. Most incorporators authorize one class of common shares
								with equal voting, dividend, and liquidation rights, with no
								special restrictions.
							</Paragraph>
							<Paragraph big>
								Pennsylvania law requires that an incorporator(s) publish a
								notice or either the intention to file or the actual filing of
								the articles of incorporation. The notice must state the
								corporate name and specify that it has been incorporated under
								the provisions of the Business Corporation Law of 1988. The
								notice must be published at least once in at least two local
								newspapers, one of which should be a “general circulation”
								newspaper and the other a “designated legal newspaper” in the
								same county as the corporation’s registered office. If there are
								no designated legal newspapers in that county, the notice can be
								published in two general circulation papers. Proof of the
								notice’s publication does not have to be filed with the
								Pennsylvania Department of State, but a copy should be kept with
								the corporate records.
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
								Every Pennsylvania Corporation must have a registered agent in
								the state – someone designated to receive official state
								correspondence, including notice if the corporation is “served”
								with a lawsuit. The registered agent must be either a
								Pennsylvania resident whose business office is the same as the
								registered office, or a corporation with a business office
								identical with the registered office.
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
								Bylaws describe the corporation’s basic managerial and legal
								operating principles. The incorporators or the board of
								directors are required to adopt the initial bylaws for the
								Pennsylvania Corporation.
							</Paragraph>
							<Paragraph big>
								A Pennsylvania corporation must keep a copy of its bylaws at its
								main executive office, but is not required to file them with the
								state. The bylaws may contain any provision for managing the
								business and regulating the affairs of the corporation that’s
								not in conflict with law or the articles of incorporation.
							</Paragraph>
							<Paragraph big>
								The board of directors of a corporation may adopt, amend, or
								repeal bylaws, unless the articles reserve this right to the
								shareholders. At its initial meeting, the board of directors
								should adopt corporate bylaws, and then keep them updated as
								time goes on.
							</Paragraph>
							<Paragraph
								big
								style={{
									fontFamily: "Avenir",
									fontWeight: "900",
									color: "#1e1e1e",
								}}
							>
								Bylaws normally address:
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
							<Heading
								size={2}
								template={3}
								left
								style={{ marginBottom: "24px" }}
							>
								Directors
							</Heading>
							<Paragraph big>
								Officers must be named in the bylaws or elected by the board of
								directors, and there must be, as a minimum, a president, a
								secretary, and a treasurer, or persons who shall act as such,
								regardless of what title they may have. The bylaws may prescribe
								specific qualifications for officers. The president and
								secretary have to be natural persons of at least 18 years of
								age. The treasurer may be a corporation but must be at least 18
								if a natural person.
							</Paragraph>
							<Paragraph big>
								Officers may appoint other officers in compliance with the
								bylaws and board of directors. If the articles of incorporation
								and the bylaws allows it, an officer may hold multiple offices
								in the corporation. Unless otherwise specified in the bylaws,
								officers do not also have to be directors.
							</Paragraph>
							<Paragraph big>
								At least one officer should be designated as responsible for
								preparing minutes of the directors’ and shareholders’ meetings,
								and for maintaining and authenticating corporate records.
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
								In Pennsylvania, for-profit corporations do not have to file an
								annual report with the state Department of State. However, the
								corporation must (subject to certain state exceptions) file a
								“decennial” report every 10 years, listing its name, registered
								office or other office address, and a statement of existence.
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
								Pennsylvania corporations are subject to a state net corporate
								income tax corporate tax and a loans tax, based on corporate
								indebtedness. In addition, Pennsylvania corporations must pay a
								capital stock tax based on their net worth, with a current
								minimum annual payment of $200. They must also pay an annual
								franchise tax, the minimum amount of which is $35.
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

			<Rocket urlParams="?entityType=CCorporation&entityState=PA" />

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



export default PennsylvaniaCorporation;
