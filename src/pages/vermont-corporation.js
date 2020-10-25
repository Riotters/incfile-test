import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import { info, packets, questions, service, top, articlesOfIncorporation} from "../static/learning-center-entity/vermont-corporation";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import TabsOvalOneSvg from "../images/ovals/bottom-left-transparent-pink.inline.svg";
import OvalSvg2 from "../images/ovals/top-right-transparent-blue2.inline.svg";
import OvalSvg3 from "../images/ovals/bottom-left-transparent-blue1.inline.svg";
import OvalSvg4 from "../images/ovals/top-right-transparent-orange3.inline.svg";
import TabsSection from "../atomic/partials/tabs";
import TabHeading from "../atomic/organisms/tabs/TabHeading";
import TabTitle from "../atomic/molecules/tabs/tab-title";
import OverviewSVG from "../images/icons/icon-manage-your-company-color-business-license-research.inline.svg";
import LightIcon from "../images/icons/light.inline.svg";
import RegistratedAgentIcon from "../images/icons/icon-32-multi-color-registered-agent.inline.svg";
import BylawsIcon from "../images/icons/icon-learning-center-color-how-to-guide.inline.svg";
import DirectorsIcon from "../images/icons/icon-learning-center-color-all-ca-corporations-must-have-elected-board-of-directors.inline.svg";
import TaxesIcon from "../images/icons/icon-learning-center-color-business-taxes.inline.svg";
import ReportsIcon from "../images/icons/icon-start-a-business-color-maintaining-your-cleaning-business.inline.svg";
import CollapseWrapper from "../atomic/organisms/tabs/collapse";
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
import Adventages from "../components/adventages";
import Container from "../atomic/container";
import Rocket from "../atomic/sections/learning-center-entity/alaska-corporation/rocket";
import Colorbox from "../atomic/molecules/blocks/left-icon-block-colored";
import FilingTimeAndPriceBox from '../atomic/state-corporation/filing-time-and-price-box';
import ComplianceRequirementBox from "../atomic/state-corporation/compliance-requirement-box";
import { getFullPricesAndFilings } from '../api/Api';

const AlaskaCorporation = () => {
    const [dataApi, setDataApi] = React.useState({});
    const [filingTimeAndRequirementHeader, setFilingTimeAndRequirementHeader] = React.useState('');

    React.useEffect(() => {
        getFullPricesAndFilings('Vermont', 'Corporation').then(data => {
            setDataApi(data);
            setFilingTimeAndRequirementHeader(`Annual ${data.prices.state} Filing Requirements`);
        });
    }, []);

    return (
        <Layout>
            <SEO title="Form a Corporation in Alaska." description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
            <Top imageName="mr-bulb-corporation-california-8302" imageAlt="Mrs Bulb and with checklist" ovalColor="purple-2" headlineWidth="560">
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

                <TabsSection>
                    <TabHeading>
                        <TabTitle title="Corporation Name" SvgIcon={OverviewSVG} />
                        <TabTitle title="Articles of Incorporation" SvgIcon={LightIcon} />
                        <TabTitle title="Registered Agent" SvgIcon={RegistratedAgentIcon} />
                        <TabTitle title="Bylaws" SvgIcon={BylawsIcon} />
                        <TabTitle title="Directors" SvgIcon={DirectorsIcon} />
                        <TabTitle title="Required Reports" SvgIcon={ReportsIcon} />
                        <TabTitle title="Taxes" SvgIcon={TaxesIcon} />
                    </TabHeading>

                    <CollapseWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Choosing a Corporation Name
            </Heading>
                            <Paragraph big>
                                Choosing a name for your new Vermont corporation is one of the first official steps toward actually conducting business in the state. The corporate name you choose must be readily distinguishable from all other registered and reserved business entities and it may not state or imply
                                that the corporation is organized for some purpose other than specified in its articles of incorporation or permitted by state law.
            </Paragraph>
                            <Paragraph big>Your new business’ name must include one of the following words, an abbreviation thereof, or words of similar meaning in another language: “Incorporated,” “Corporation,” “Limited,” or “Company.”</Paragraph>
                            <Paragraph big style={{ marginBottom: "0" }}>
                                An available corporate name may be reserved for up to four months by for a $20 fee.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Articles of Incorporation
            </Heading>
                            <Paragraph big>
                                Before it can legitimately begin operations in the state, a new Vermont corporation must file articles of incorporation with the Vermont Corporations Division of the Secretary of State’s office. The articles must be executed (signed) and delivered by at least one incorporator—who must
                                be a natural person (not a business entity) of legal age—and accompanied by the $75 filing fee.
            </Paragraph>

                            <Colorbox color={color.blue3} content={articlesOfIncorporation.box1} dotsColor={color.blue1} style={{ marginBottom: "65px" }} />

                            <Colorbox color={color.orange3} content={articlesOfIncorporation.box2} dotsColor={color.orange1} style={{ marginBottom: "48px" }} />

                            <Paragraph big>If the initial articles do not name directors for the corporation, the incorporators may elect directors or amend the bylaws.</Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Registered Agent and Office
            </Heading>
                            <Paragraph big>Every Vermont corporation must have a registered agent in the state—the person or office designated to receive official state administrative and legal correspondence.</Paragraph>
                            <Paragraph big>The registered agent must be either a Vermont resident whose business office is the same as the registered office, or a corporation authorized to conduct business in Vermont that has a business office identical to the registered office.</Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Bylaws
            </Heading>
                            <Paragraph big>Bylaws lay out the corporation’s basic managerial and legal operating principles that manage their internal affairs. Vermont corporations must keep a copy of their bylaws at their principal executive office, but are not required to file them with the state.</Paragraph>
                            <Paragraph big>
                                At its initial meeting, the incorporators or the board of directors should adopt corporate bylaws, and then keep them updated as time goes on. If no directors have been elected the incorporators may adopt initial bylaws for the corporation. If neither the incorporators nor the board of
                                directors have adopted initial bylaws, the shareholders may do so.
            </Paragraph>
                            <Paragraph big style={{ fontFamily: "Avenir", fontWeight: "900", color: "#1e1e1e" }}>
                                The board of directors of a corporation may adopt, amend, or repeal bylaws, unless the articles reserve this right to the shareholders. Bylaws normally address:
            </Paragraph>

                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>Shareholders and directors meetings</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The authority, number, and tenure of directors</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>Voting procedures</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The duties, responsibilities, and tenure of officers</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>How stock is issued</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>How and when annual financial information is provided to shareholders</Paragraph>
                            </TextBoxed>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Directors
            </Heading>
                            <Paragraph big>
                                Officers are listed in the initial bylaws or elected by the board of directors, and may appoint other officers in accordance with the bylaws. There must be at least a president and a secretary. Officers may appoint other officers in compliance with the bylaws and board of directors. At
                                least one officer has the responsibility of preparing minutes of director and shareholder meetings, and for maintaining and authenticating corporate records.
            </Paragraph>
                            <Paragraph big>An officer may hold more than one office in the corporation unless the corporation is a professional corporation.</Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Requirement Reports
            </Heading>
                            <Paragraph big style={{ marginBottom: "48px" }}>
                                Your new Vermont corporation must file an annual report with the state Secretary of State within two and a half months following the end of each fiscal year.
            </Paragraph>

                            <Paragraph big style={{ marginBottom: "24px", fontFamily: "Avenir", fontWeight: "900", color: "#1e1e1e" }}>
                                This report must indicate:
            </Paragraph>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The corporation’s name and its place of incorporation</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The address of the corporation’s registered office</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The name of its registered agent there</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The address of the corporation’s principal office</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The names and addresses of the corporation’s directors, president, secretary, treasurer, and all others with policy-making authority</Paragraph>
                            </TextBoxed>
                            <Paragraph big>The corporation must mail annual financial statements to its shareholders within 120 days after the close of its fiscal year. These statements must include (as a minimum) a balance sheet, income statement, and a statement of changes in shareholders’ equity.</Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Taxes
            </Heading>
                            <Paragraph big>Vermont’s corporate tax system has three brackets with an annual minimum payment of $250 and a top rate of 8.5 percent on corporate income of over $25,000.</Paragraph>
                            <Paragraph big>
                                The Green Mountain State recognizes “S corporation” status. A “subchapter S” corporation (frequently referred to as an “S corp”) is treated as a pass-through entity for tax purposes in the same way as a sole proprietorship or partnership. The S corp does not file a tax return on its
                                own behalf. Instead, all tax-related data for the S corp is filed as part of the owner’s individual income tax.
            </Paragraph>
                        </PanelWrapper>
                    </CollapseWrapper>
                </TabsSection>
            </TabsWrapper>

            <ServiceSection>
                <Oval className="oval" height={420} width={420} top="20" right="0">
                    <OvalSvg2 />
                </Oval>
                <Oval className="oval" height={720} width={720} top="60" left="0">
                    <OvalSvg3 />
                </Oval>
                <HeadingCenter headline={service.header} textWidth="590" text={service.text} bottomMargin="48" bottomMarginLG="80" />
                <ContentCenter style={{ marginBottom: "149px" }}>
                    <Curve top="-115" left="80" rotate={180} color={color.blue2}>
                        <Curve2SVG />
                    </Curve>
                    <LightBoxVideo thumbnailVideo="comparison-chart-video-3611" videoID="oYZShvmf9eQ" />
                </ContentCenter>

                {/* Filing Times & Requirement section */}
                <ContentCenter contentWidth={970}>
                    <HeadingCenter headline={filingTimeAndRequirementHeader} textWidth="770" bottomMargin="48" bottomMarginLG="80" />
                    <FilingTimeAndPriceBox data={dataApi} />
                    <ComplianceRequirementBox data={dataApi} style={{ margin: 0 }} />
                </ContentCenter>
            </ServiceSection>

            <PackageSection>
                <HeadingCenter headline={packets.header} textWidth="770" />
                <PacketsSection data={dataApi} />
            </PackageSection>

            <QuestionSection>
                <Oval className="oval" height={570} width={570} top="20" right="0">
                    <OvalSvg4 />
                </Oval>
                <HeadingCenter headline={questions.header} textWidth="770" />
                <ContentCenter style={{ marginBottom: "48px" }}>
                    <Accordion content={questions} curve curveColor={color.blue1} curveLeft="-15px" />
                </ContentCenter>
                <ContentCenter style={{ marginBottom: "48px" }}>
                    <Button content={{ text: `View all corporation FAQ's`, url: `/research-topics/c-corporation-info/` }} width={300} padding="12px 48px" />
                </ContentCenter>
            </QuestionSection>

            <InfoSection>
                <HeadingCenter headline={info.header} textWidth="770" />

                <Container>
                    <AdventagesBox>
                        {info.items.map((item) => (
                            <Adventages headline={item.headline} text={item.text} />
                        ))}
                    </AdventagesBox>
                </Container>
            </InfoSection>

            <Rocket />
        </Layout>
    );
}

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
