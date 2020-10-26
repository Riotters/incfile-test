import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import { info, questions, service, top, articlesOfIncorporation } from "../static/learning-center-entity/west-virginia-corporation";
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
        getFullPricesAndFilings('West Virginia', 'Corporation').then(data => {
            setDataApi(data);
            setFilingTimeAndRequirementHeader(`Annual ${data.prices.state} Filing Requirements`);
        });
    }, []);

    return (
        <Layout>
            <SEO title="Form a Corporation or LLC in West Virginia Today | Incfile" description="Read our FAQs on how to incorporate in West Virginia. Plus, get information to filing times and fees, taxation and bylaws, operating agreements and more." />
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
                                The name you choose for your new West Virginia corporation may not be the same as or deceptively similar to the registered or reserved name of any other business entity in the state. It may not include language that states or implies that it has been organized for some other purpose
                                than one allowed under state law or stated in its articles of incorporation.
            </Paragraph>
                            <Paragraph big>The name also must contain one of the following words, or an abbreviation thereof: “corporation,” “incorporated,” “limited,” or “company.”</Paragraph>
                            <Paragraph big style={{ marginBottom: "0" }}>
                                You can reserve an available corporate name for up to 120 days for $15.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Articles of Incorporation
            </Heading>
                            <Paragraph big>
                                A new corporation’s articles of incorporation must be filed with the West Virginia Secretary of State before it can conduct business in the state. There must be at least one incorporator, who can be a natural person or a corporate entity, and does not have to be a corporate director,
                                officer, or shareholder. The incorporator signs the articles of incorporation and then files them with the Secretary of State.
            </Paragraph>

                            <Colorbox color={color.blue3} content={articlesOfIncorporation.box1} dotsColor={color.blue1} style={{ marginBottom: "65px" }} />

                            <Colorbox color={color.orange3} content={articlesOfIncorporation.box2} dotsColor={color.orange1} style={{ marginBottom: "48px" }} />

                            <Paragraph big>The incorporation fee has three parts: first, a registration fee of $50; second, an “attorney-in-fact” fee (the amount of which depends on the month in which you file your articles); and third, a license fee.</Paragraph>
                            <Paragraph big>
                                The amount of the license fee depends on the value of the shares you authorize in your articles and the month when your articles are received for filing. To pay the smallest license fee, keep the authorized capital of your corporation at or below $5,000. For par value shares,
                                authorized capital simply means the number of shares authorized in your articles multiplied by the par value amount of each share. Shares without par value are assumed to have a par value of $25 per share for purposes of this calculation.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Registered Agent and Office
            </Heading>
                            <Paragraph big>
                                West Virginia corporations must maintain a registered agent within the state—a person or office appointed to receive official state administrative and legal correspondence. The agent must have the same business office address as the registered office and be either an individual living
                                in the state a business entity with authority to transact business in West Virginia.
            </Paragraph>
                            <Paragraph big>The corporation’s registered office may be the same as any of the corporation’s places of business.</Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Bylaws
            </Heading>
                            <Paragraph big>
                                A corporation’s bylaws are very important because they lay out the corporation’s basic operating principles and processes. A West Virginia corporation must maintain a copy of its bylaws at its main executive office, but is not required to file them with the state.
            </Paragraph>
                            <Paragraph big style={{ fontFamily: "Avenir", fontWeight: "900", color: "#1e1e1e" }}>
                                The incorporators or board of directors should approve the corporation’s bylaws at their first meeting—insuring that they don’t conflict with either state law or the articles of incorporation—and keep them updated as time goes on. The bylaws should, at a minimum, include:
            </Paragraph>

                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>What authority directors have, how many there are, and how long they serve</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>Duties and responsibilities of officers and how long they serve</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>How consensus on major decisions is reached with and without meetings</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>How, when, and where shareholders and directors meetings are held</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>How stock is issued</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>Requirements for providing annual financial information to shareholders</Paragraph>
                            </TextBoxed>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Directors
            </Heading>
                            <Paragraph big>
                                The articles of incorporation or the bylaws may specify a variable range for the size of the board of directors by establishing a minimum and maximum number of directors. If a variable range is established, the number of directors may be specified or changed within the minimum and
                                maximum by the shareholders or the board of directors.
            </Paragraph>
                            <Paragraph big>After shares have been issued, only the corporation’s shareholders are allowed to change the range of the board’s size, change from a fixed- to a variable-range size board or vice versa.</Paragraph>
                            <Paragraph big>
                                Officers of the company—who run the day-to-day affairs of the organization—must be natural persons and may be listed in the bylaws or elected by the board. An officer may appoint other officers in accordance with the bylaws and the volte of the board of directors. At least one officer
                                must authenticate records for the corporation, as well as prepare minutes of directors’ and shareholders’ meetings. An officer may hold more than one office in the corporation unless otherwise prohibited by law.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Requirement Reports
            </Heading>
                            <Paragraph big style={{ marginBottom: "48px" }}>
                                An annual return must be filed with the West Virginia Tax Commissioner by July 1st of each year.
            </Paragraph>

                            <Paragraph big style={{ marginBottom: "24px", fontFamily: "Avenir", fontWeight: "900", color: "#1e1e1e" }}>
                                The return must include:
            </Paragraph>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The address of the corporation’s principal office</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The names and addresses of the officers and directors</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The name and address of the person on whom notice of process may be served</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The name and address of the corporation’s parent corporation and of each subsidiary of the corporation licensed to do business in the state</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The county or county code in which the principal office address or mailing address of the company is located in</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The corporation’s business class code and</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>Any other information the tax commissioner considers appropriate.</Paragraph>
                            </TextBoxed>
                            <Paragraph big>
                                Unless unanimously waived by the shareholders, a West Virginia corporation must mail financial statements to its shareholders within 120 days of the end of each fiscal year. The statement must include a balance sheet, an income statement, and a statement of changes in shareholders’
                                equity for the year, unless that information appears elsewhere in the financial statements.
            </Paragraph>
                            <Paragraph big>Additionally, certain types of businesses (such as health care and real estate) are required to obtain a license and pay a fee to operate in West Virginia.</Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Taxes
            </Heading>
                            <Paragraph big>West Virginia’s corporate tax structure consists of a flat 8.5 percent rate on all corporate income. Among states that tax corporate income, West Virginia’s corporate rate ranks 11th highest nationally.</Paragraph>
                            <Paragraph big>
                                West Virginia recognizes “subchapter S” corporation or “S corporation” status, where a corporation chooses to be treated as a pass-through entity for tax purposes. This means that the tax-related information for the “S corp” is filed as part of the owner’s individual income tax and is
                                taxed at the appropriate individual rate.
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

            <PacketsSection data={dataApi} />

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
