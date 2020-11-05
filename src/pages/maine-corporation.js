import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import { info, questions, service, top, articlesOfIncorporation } from "../static/learning-center-entity/maine-corporation";
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
        getFullPricesAndFilings('Maine', 'Corporation').then(data => {
            setDataApi(data);
            setFilingTimeAndRequirementHeader(`Annual ${data.prices.state} Filing Requirements`);
        });
    }, []);

    return (
        <Layout>
            <SEO title="Form a Corporation or LLC in Maine Today | Incfile" description="Need information on incorporating in Maine? Find out what documents are needed, when is the best time to file, and how much it will cost." />
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
                                Your new corporation’s name must be distinguishable from all other business entities already registered or reserved with the Maine Secretary of State. The name does not (unlike most other states) have to include a corporate designator, such as “Inc.” or “Corporation.” However, many
                                consider it advisable to include such a designation anyway, to let potential customers know that you are incorporated.
            </Paragraph>
                            <Paragraph big>The name is not permitted, however, to contain language that states or implies that the corporation is organized for some purpose other than that permitted by state law and the corporation’s articles of incorporation.</Paragraph>
                            <Paragraph big>Additionally, the name request may be refused if the Secretary of State finds the requested name to be obscene, promoting of abusive or unlawful activity, falsely suggestive of some association with public institutions, or of violating any other state laws.</Paragraph>
                            <Paragraph big style={{ marginBottom: "0" }}>
                                An available corporate name can be reserved for 120 days for $25.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Articles of Incorporation
            </Heading>
                            <Paragraph big>State law requires that the new Maine corporation file articles of incorporation with the Secretary of State, delivered by at least one incorporator and accompanied by a filing fee of $145.</Paragraph>

                            <Colorbox color={color.blue3} content={articlesOfIncorporation.box1} dotsColor={color.blue1} style={{ marginBottom: "65px" }} />
                            <Paragraph big>
                                Maine law no longer uses the concept of par value for shares, so you only need to specify the number of shares you wish to authorize for later issuance to shareholders. The filing fee is not based on the number of authorized shares, so you can authorize as many as you wish.
            </Paragraph>

                            <Colorbox color={color.orange3} content={articlesOfIncorporation.box2} dotsColor={color.orange1} style={{ marginBottom: "48px" }} />
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Registered Agent and Office
            </Heading>
                            <Paragraph big>
                                Every Maine corporation must have a clerk, who must be a natural person who is a Maine resident. (In other states, this position is usually called the “registered agent.”) The clerk is the person designated to receive official state administrative and legal correspondence, including
                                notice if the corporation is served with a lawsuit. The clerk may be-but is not required to be-one of the directors or officers of the corporation, or the clerk may be a person holding no other position with the corporation. The clerk must be appointed by the corporation’s board of
                                directors unless the articles of incorporation reserve appointment of the clerk to the shareholders.
            </Paragraph>
                            <Paragraph big>In addition, the clerk must keep on file a list of all shareholders of the corporation and maintain records of all shareholders’ meetings, including all records of all votes and minutes of the meetings.</Paragraph>
                            <Paragraph big>Maine requires that every corporation maintain a registered office, which may be the same as its place of business.</Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Bylaws
            </Heading>
                            <Paragraph big>
                                A corporation is required to keep its bylaws available at its main office, but it is not required to file them with the state. The incorporators or board of directors should adopt the corporation’s bylaws at their first meeting, insuring that there is no conflict with the articles of
                                incorporation or state law. They should also keep the bylaws updated as time goes on.
            </Paragraph>
                            <Paragraph big style={{ fontFamily: "Avenir", fontWeight: "900", color: "#1e1e1e" }}>
                                Bylaws set forth the corporation’s basic operating principles from both the managerial and legal perspectives, and should include, as a minimum:
            </Paragraph>

                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The authority of directors, how many there are, and how long they serve</Paragraph>
                            </TextBoxed>

                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>Officers’ duties and responsibilities and how long they serve</Paragraph>
                            </TextBoxed>

                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>How major decisions are reached, with or without meetings</Paragraph>
                            </TextBoxed>

                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>How, when, and where shareholders’ and directors’ meetings are held</Paragraph>
                            </TextBoxed>

                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>How the corporation’s stock is issued</Paragraph>
                            </TextBoxed>

                            <TextBoxed style={{ marginBottom: "48px" }}>
                                <Paragraph bottomMargin={0}>Requirements for publishing annual financial information to shareholders</Paragraph>
                            </TextBoxed>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Directors
            </Heading>
                            <Paragraph big>Directors are not required by law to be stockholders, but the articles of incorporation or the bylaws may specify a requirement in this area as well as others.</Paragraph>
                            <Paragraph big>
                                The officers of a corporation oversee the day-to-day operations of the organization and carry out the strategic decisions made by the board of directors. They are listed by name in the bylaws or elected by the board, and their titles and duties are stated in the bylaws. They may
                                appoint other officers in compliance with the bylaws.
            </Paragraph>
                            <Paragraph big>Additionally, at least one officer is responsible for preparing minutes of director and shareholder meetings and for authenticating records. An officer may simultaneously hold more than one office in the corporation.</Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Requirement Reports
            </Heading>
                            <Paragraph big style={{ marginBottom: "48px" }}>
                                A report must be filed with the Maine Secretary of State each year, except for the first year of incorporation. This report must be filed each year between January 1 and June 1 in the calendar year following the year of incorporation
            </Paragraph>

                            <Paragraph big style={{ marginBottom: "24px", fontFamily: "Avenir", fontWeight: "900", color: "#1e1e1e" }}>
                                Must indicate:
            </Paragraph>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The corporation’s name and where it was incorporated</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The address of its registered office and the name of its clerk</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The address of its principal office and name of its registered agent, if a foreign corporation</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>A brief statement of the nature of the business in which the corporation is engaged</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The names and business or residence addresses of the president or chief executive officer, the treasurer or chief financial officer, and all directors (or shareholders, if no directors)</Paragraph>
                            </TextBoxed>
                            <Paragraph big style={{ marginBottom: "48px" }}>
                                Each corporation (except for closed corporations) must also file an annual financial statement, not later than five months after the close of the corporate fiscal year, which includes its year-end balance sheet, income statement, and a statement of change of shareholders’ equity,
                                unless this information appears elsewhere in the financial statements.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Taxes
            </Heading>
                            <Paragraph big>Maine’s corporate tax structure consists of four brackets with a top rate of 8.93 percent; the top bracket takes effect when the income level reaches $250,000. Among states levying corporate income taxes, Maine’s top rate ranks ninth highest nationally.</Paragraph>
                            <Paragraph big>“S” corporation status is recognized by the State of Maine.</Paragraph>
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
