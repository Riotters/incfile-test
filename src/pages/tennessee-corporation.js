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
} from "../static/learning-center-entity/tennessee-corporation";
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

const TennesseeCorporation = () => {
	const [dataApi, setDataApi] = React.useState({});
	const [
		filingTimeAndRequirementHeader,
		setFilingTimeAndRequirementHeader,
	] = React.useState("");

	React.useEffect(() => {
		getFullPricesAndFilings("Tennessee", "Corporation").then((data) => {
			setDataApi(data);
			setFilingTimeAndRequirementHeader(
				`Annual ${data.prices.state} Filing Requirements`
			);
		});
	}, []);

	return (
		<Layout>
			<SEO
				title="Form a Corporation or LLC in Tennessee Today | Incfile"
				description="Learn how to incorporate in Tennesse. Access filing times and fees, document requirements, FAQs and much more.    "
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
								Choosing a name for your new Tennessee corporation is one of the
								first official steps toward actually conducting business in the
								state. The corporate name you choose must be readily
								distinguishable from all other registered and reserved business
								entities on the Tennessee state rolls.
							</Paragraph>
							<Paragraph big>
								Your new business’ name must include one of the following words,
								an abbreviation thereof, or words of similar meaning in another
								language: “Incorporated,” “Corporation,” “Company,” or
								“Limited.” However, the name must not state or imply that the
								corporation is organized for some purpose other than the one
								specified in its articles of incorporation or one permitted by
								state law, and it must not state or imply that it is associated
								with the government.
							</Paragraph>
							<Paragraph big>
								An available corporate name may be reserved for up to four
								months by for a $20 fee.
							</Paragraph>
							<Paragraph big style={{ marginBottom: "0" }}>
								A corporation may apply to the Tennessee Department of State to
								use a name that is not its true corporate name. For each assumed
								name, the corporation must file an application specifying:
							</Paragraph>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>Its true corporate name</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									Its state or country of incorporation
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "8px" }}>
								<Paragraph bottomMargin={0}>
									The intention to transact business under an assumed corporate
									name
								</Paragraph>
							</TextBoxed>
							<TextBoxed style={{ marginBottom: "32px" }}>
								<Paragraph bottomMargin={0}>
									The assumed corporate name it proposes to use.
								</Paragraph>
							</TextBoxed>
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
								Before it can legitimately commence operations in the state, a
								new Tennessee corporation must file a charter (usually known as
								articles of incorporation in other states) with the Business
								Services Division of the Tennessee Department of State. The
								charter must be executed (signed) and delivered by at least one
								incorporator—who must be a natural person of legal age—and
								accompanied by a filing fee of $100. The following information
								must be included in the charter:
							</Paragraph>

							<Colorbox
								color={color.blue3}
								content={articlesOfIncorporation.box1}
								dotsColor={color.blue1}
								style={{ marginBottom: "65px" }}
							/>
							<Paragraph big>
								Tennessee also permits optional provisions to be integrated into
								the charter, such as:
							</Paragraph>

							<Colorbox
								color={color.orange3}
								content={articlesOfIncorporation.box2}
								dotsColor={color.orange1}
								style={{ marginBottom: "48px" }}
							/>

							<Paragraph big>
								Tennessee law also requires that a copy of the charter is filed
								in the Office of the Register of Deeds in the county where the
								corporation’s principal office is located.
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
								Every Tennessee corporation must have a registered agent in the
								state—the person or office designated to receive official state
								correspondence, both administrative and legal. The registered
								agent is required to sign the articles of incorporation,
								indicating acceptance of the appointment as registered agent.
							</Paragraph>
							<Paragraph big>
								The registered agent must be either a Tennessee resident whose
								business office is the same as the registered office, or a
								corporation authorized to conduct business in the Volunteer
								State that has a business office identical to the registered
								office.
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
								Bylaws lay out the corporation’s basic managerial and legal
								operating principles that manage their internal affairs.
								Tennessee corporations must keep a copy of their bylaws at their
								principal executive office, but are not required to file them
								with the state. At its initial meeting, the incorporators or the
								board of directors should adopt corporate bylaws, and then keep
								them updated as time goes on.
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
							<Heading
								size={2}
								template={3}
								left
								style={{ marginBottom: "24px" }}
							>
								Directors
							</Heading>
							<Paragraph big>
								Officers are listed in the initial bylaws or elected by the
								board of directors, and may appoint other officers in accordance
								with the bylaws. There must be at least a president and a
								secretary. At least one officer has the responsibility of
								preparing minutes of director and shareholder meetings, and for
								maintaining and authenticating corporate records.
							</Paragraph>
							<Paragraph big>
								An officer may hold more than one office in the corporation
								(except for the offices of president and secretary) unless
								otherwise prohibited by law or by the corporation’s bylaws.
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
							<Paragraph big>
								A corporation’s board of directors consists of one or more
								individuals in accordance with the corporate charter or bylaws.
								The number of directors may be increased or decreased by
								amending the charter or the bylaws.
							</Paragraph>
							<Paragraph big>
								Officers are listed in the initial bylaws or elected by the
								board of directors, and may appoint other officers in accordance
								with the bylaws. There must be at least a president and a
								secretary. At least one officer has the responsibility of
								preparing minutes of director and shareholder meetings, and for
								maintaining and authenticating corporate records.
							</Paragraph>
							<Paragraph big>
								An officer may hold more than one office in the corporation
								(except for the offices of president and secretary) unless
								otherwise prohibited by law or by the corporation’s bylaws.
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
								Tennessee’s corporate tax structure consists of a flat rate of
								6.5 percent on all corporate income. Among states levying
								corporate income taxes, Tennessee’s rate ranks 30th highest
								nationally.
							</Paragraph>
							<Paragraph big>
								Tennessee corporations are subject to an annual excise tax and a
								franchise tax. The minimum annual franchise tax is $100.
							</Paragraph>
							<Paragraph big>
								“S corporation” status is recognized by the Tennessee Secretary
								of State. A “subchapter S” corporation (frequently referred to
								as an “S corp”) is treated as a pass-through entity for tax
								purposes in the same way as a sole proprietorship or
								partnership. The S corp does not file a tax return on its own
								behalf; instead, all tax-related data for the S corp is filed as
								part of the owner’s individual income tax.
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

			<Rocket urlParams="?entityType=CCorporation&entityState=TN" />

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

export default TennesseeCorporation;
