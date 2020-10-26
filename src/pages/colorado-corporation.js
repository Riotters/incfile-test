import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import { info, questions, service, top, articlesOfIncorporation } from "../static/learning-center-entity/colorado-corporation";
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
        getFullPricesAndFilings('Colorado', 'Corporation').then(data => {
            setDataApi(data);
            setFilingTimeAndRequirementHeader(`Annual ${data.prices.state} Filing Requirements`);
        });
    }, []);

    return (
        <Layout>
            <SEO title="Colorado Corporation | How to Incorporate in Colorado | Learn About Incorporating in Colorado" description="Find everything you need to incorporate in Colorado, including filing schedules and costs, how a corporation is taxed, and how to choose a name. " />
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
                                Your new corporation’s name must be distinguishable from the name of any other registered or reserved Colorado business entity. It must also contain the words “incorporated,” “corporation,” “limited,” or “company,” or an abbreviation of these same terms. It may also not contain
                                language stating or implying that it is organized for a purpose other than one permitted by state law or stated in its articles of incorporation.
            </Paragraph>
                            <Paragraph big style={{ marginBottom: "32px" }}>
                                If your corporate name is not considered to be distinguishable from one already on file with the state or in use, it’s not enough to merely change some punctuation, a definite or indefinite article (such as “a,” “an,” or “the”), or the status designator (“corporation,” “company,”
                                “incorporated,” “limited,” etc.).
            </Paragraph>
                            <Paragraph big style={{ marginBottom: "0" }}>
                                Corporate names can be reserved with the state for up to 120 days at a time for $10.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Articles of Incorporation
            </Heading>
                            <Paragraph big>Colorado requires that a new corporation’s articles of incorporation must be filed (along with a $50 fee) with the Colorado Secretary of State</Paragraph>
                            <Colorbox color={color.blue3} content={articlesOfIncorporation.box1} dotsColor={color.blue1} style={{ marginBottom: "65px" }} />
                            <Colorbox color={color.orange3} content={articlesOfIncorporation.box2} dotsColor={color.orange1} style={{ marginBottom: "48px" }} />
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Registered Agent and Office
            </Heading>
                            <Paragraph big>Every Colorado corporation must have a registered agent in the state-a natural person with a primary residence in Colorado, or a registered business entity authorized to conduct business in the state.</Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Bylaws
            </Heading>
                            <Paragraph big>
                                A corporation must maintain its bylaws at its main executive office, but is not required to file them with the state. The incorporators or board of directors should adopt the corporation’s bylaws at its initial meeting-insuring that they do not conflict with the articles of
                                incorporation-and keep them updated as time goes on.
            </Paragraph>
                            <Paragraph big style={{ fontFamily: "Avenir", fontWeight: "900", color: "#1e1e1e" }}>
                                Bylaws describe the corporation’s basic operating principles from both the managerial and legal perspectives, and should include as a minimum:
            </Paragraph>

                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>How, when, and where shareholders and directors meetings are held</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>What authority directors have, how many there are, and how long they serve</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>How consensus on major decisions is reached with and without meetings</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>Duties and responsibilities of officers and how long they serve</Paragraph>
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
                                The board of directors is responsible for making major decisions for the corporation. Officers of the company must be listed in the bylaws or elected by the board. At least one officer must authenticate records for the corporation, as well as prepare minutes of directors’ and
                                shareholders meetings. Any officer may hold more than one office in the corporation unless otherwise prohibited by law.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Requirement Reports
            </Heading>
                            <Paragraph big style={{ marginBottom: "48px" }}>
                                A Colorado corporation must file an annual report with the Colorado Secretary of State each year that includes the corporation’s name, principal office, names and addresses of directors and officers, and any information that has changed since the filing of the articles of
                                incorporation. Colorado strongly encourages electronic filing of annual reports.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Taxes
            </Heading>
                            <Paragraph big>Colorado has both a corporate income tax and a sales tax for businesses; actual rates depend on the type and amount of business activity.</Paragraph>
                            <Paragraph big>
                                A “subchapter S” corporation or “S-Corporation” is one that chooses to be treated as a pass-through entity (the same way as a sole proprietorship or partnership) for tax purposes, meaning that the tax-related information for the “S-Corp” is filed as part of the owner’s individual
                                income tax. Since Colorado has a state income tax, a subchapter-S choice when forming a corporation affects state and federal taxes for Centennial State corporations.
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
