import React from "react";
import styled from "styled-components";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import Layout from "../../components/layout";
import {
    fillingRequirements,
    info,
    packets,
    questions,
    service,
    top
} from "../../static/learning-center-entity/alaska-corporation";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import TabsOvalOneSvg from "../../images/ovals/bottom-left-transparent-pink.inline.svg";
import OvalSvg2 from "../../images/ovals/top-right-transparent-blue2.inline.svg";
import OvalSvg3 from "../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import OvalSvg4 from "../../images/ovals/top-right-transparent-orange3.inline.svg";
import TabsSection from "../../atomic/partials/tabs";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import OverviewSVG from "../../images/icons/icon-manage-your-company-color-business-license-research.inline.svg";
import LightIcon from "../../images/icons/light.inline.svg";
import RegistratedAgentIcon from "../../images/icons/icon-32-multi-color-registered-agent.inline.svg";
import BylawsIcon from "../../images/icons/icon-learning-center-color-how-to-guide.inline.svg";
import DirectorsIcon
    from "../../images/icons/icon-learning-center-color-all-ca-corporations-must-have-elected-board-of-directors.inline.svg";
import TaxesIcon from "../../images/icons/icon-learning-center-color-business-taxes.inline.svg";
import ReportsIcon from "../../images/icons/icon-start-a-business-color-maintaining-your-cleaning-business.inline.svg";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import TextBoxed from "../../atomic/molecules/static-check/circle-checkmark-text-boxed";
import {color, gradient} from "../../atomic/atoms/styles/colors";
import Oval from "../../atomic/atoms/icons/oval";
import HeadingCenter from "../../atomic/partials/heading-center";
import ContentCenter from "../../atomic/partials/content-center";
import LightBoxVideo from "../../components/LightBox";
import Curve2SVG from "../../images/curves/bottom-left-top-right-reverse-big.inline.svg";
import Curve from "../../atomic/atoms/icons/curve";
import GenericTable from "../../atomic/organisms/tables/generic-table";
import TitleWithInfoBox from "../../atomic/molecules/blocks/table-title";
import PacketsSection from "../../atomic/sections/learning-center-entity/alaska-corporation/packets";
import Accordion from "../../atomic/organisms/accordion/accordion";
import Adventages from "../../components/adventages";
import {shadow} from "../../components/styles/shadows";
import Container from "../../atomic/container";
import Rocket from "../../atomic/sections/learning-center-entity/alaska-corporation/rocket";

const AlaskaCorporation = () => (
    <Layout>
        <SEO title="Form a Corporation in Alaska."
             description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing."/>
        <Top imageName="mr-bulb-corporation-california-8302"
             imageAlt="Mrs Bulb and with checklist" ovalColor="purple-2" headlineWidth="560">
            <h1>{top.header}</h1>
            <p>{top.text}</p>
            <Buttonsbox>
                <Button content={top.buttons[0]} theme="primary56" arrow/>
            </Buttonsbox>

            <RatingRow>
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

        <TabsWrapper>
            <Oval className="oval" height={420} width={420} top="1" left="0">
                <TabsOvalOneSvg/>
            </Oval>

            <TabsSection>
                <TabHeading>
                    <TabTitle title="Corporation Name" SvgIcon={OverviewSVG}/>
                    <TabTitle title="Articles of Incorporation" SvgIcon={LightIcon}/>
                    <TabTitle title="Registered Agent" SvgIcon={RegistratedAgentIcon}/>
                    <TabTitle title="Bylaws" SvgIcon={BylawsIcon}/>
                    <TabTitle title="Directors" SvgIcon={DirectorsIcon}/>
                    <TabTitle title="Required Reports" SvgIcon={ReportsIcon}/>
                    <TabTitle title="Taxes" SvgIcon={TaxesIcon}/>

                </TabHeading>

                <CollapseWrapper>

                    <PanelWrapper>Todo</PanelWrapper>
                    <PanelWrapper>Todo</PanelWrapper>
                    <PanelWrapper>Todo</PanelWrapper>
                    <PanelWrapper>
                        <Heading size={3} style={{marginBottom: "24px"}}>Bylaws</Heading>
                        <Paragraph big>
                            Bylaws lay out the corporation’s basic operating principles from both the managerial and
                            legal perspectives. A corporation must keep its bylaws available at its principal executive
                            office, but is not required to file them with the state. The incorporators or board of
                            directors should adopt the corporation’s bylaws at their first meeting-insuring there is no
                            conflict with the corporation’s articles of incorporation-and keep them updated as time goes
                            on.
                        </Paragraph>
                        <Paragraph big style={{fontFamily: "Avenir-Heavy", color: "#1e1e1e"}}>Bylaws should include, at
                            minimum:</Paragraph>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>
                                What authority directors have, how many there are, and how long they serve
                            </Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>
                                Duties and responsibilities of officers and how long they serve
                            </Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>
                                How consensus on major decisions is reached, both with and without meetings
                            </Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>
                                How, when, and where shareholders’ and directors’ meetings are held
                            </Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>
                                How the corporation’s stock is issued
                            </Paragraph>
                        </TextBoxed>

                        <TextBoxed style={{marginBottom: "48px"}}>
                            <Paragraph bottomMargin={0}>
                                Requirements for publishing annual financial information to shareholders
                            </Paragraph>
                        </TextBoxed>

                        <Paragraph big>
                            Even though the corporation is not required to file its bylaws with the state, if the
                            articles of incorporation don’t specify the number of directors, the bylaws must either
                            state the exact number of directors or specify
                            a minimum or maximum number of directors, along with the way that shareholder or board
                            approval will determine the exact number
                            at a specified later date.
                        </Paragraph>
                    </PanelWrapper>
                    <PanelWrapper>Todo</PanelWrapper>
                    <PanelWrapper>Todo</PanelWrapper>
                    <PanelWrapper>Todo</PanelWrapper>
                </CollapseWrapper>
            </TabsSection>
        </TabsWrapper>

        <ServiceSection>
            <Oval className="oval" height={420} width={420} top="20" right="0">
                <OvalSvg2/>
            </Oval>
            <Oval className="oval" height={720} width={720} top="60" left="0">
                <OvalSvg3/>
            </Oval>
            <HeadingCenter headline={service.header} textWidth="590" text={service.text} bottomMargin="48"
                           bottomMarginLG="80"/>
            <ContentCenter style={{marginBottom: "149px"}}>
                <Curve top="-115" left="80" rotate={180} color={color.blue2}>
                    <Curve2SVG/>
                </Curve>
                <LightBoxVideo thumbnailVideo="comparison-chart-video-3611" videoID="R_oIgzYh7NU"/>
            </ContentCenter>

            <ContentCenter contentWidth={970}>
                <HeadingCenter headline={fillingRequirements.mainHeader} textWidth="770" bottomMargin="48"
                               bottomMarginLG="80"/>

                <TitleWithInfoBox title={fillingRequirements.header1} style={{marginBottom: "24px"}} hasInfoBox
                                  infoBoxText={fillingRequirements.header1infoBox} questionMarkColor={color.blue1}/>
                <GenericTable className="blue3 headers-start left" content={fillingRequirements.table}
                              style={{"margin-bottom": "56px", width: "100%"}}/>

                <TitleWithInfoBox title={fillingRequirements.header2} style={{marginBottom: "24px"}} hasInfoBox
                                  infoBoxText={fillingRequirements.header2infoBox} questionMarkColor={color.blue1}/>
                <GenericTable className="blue3 headers-start left" content={fillingRequirements.table2}
                              style={{"margin-bottom": "56px", width: "100%"}}/>

                <TitleWithInfoBox title={fillingRequirements.header3} style={{marginBottom: "24px"}}/>
                <GenericTable className="blue3 headers-start left" content={fillingRequirements.table3}
                              style={{"margin-bottom": "56px", width: "100%"}}/>
            </ContentCenter>

        </ServiceSection>

        <PackageSection>
            <HeadingCenter headline={packets.header} textWidth="770"/>
            <PacketsSection content={packets}/>
        </PackageSection>

        <QuestionSection>
            <Oval className="oval" height={570} width={570} top="20" right="0">
                <OvalSvg4/>
            </Oval>
            <HeadingCenter headline={questions.header} textWidth="770"/>
            <ContentCenter style={{marginBottom: "48px"}}>
                <Accordion content={questions} curve curveColor={color.blue1} curveLeft="-15px"/>
            </ContentCenter>
            <ContentCenter style={{marginBottom: "48px"}}>
                <Button content={{text: `View all corporation FAQ's`, url: `/`}} width={300} padding="12px 48px"/>
            </ContentCenter>
        </QuestionSection>

        <InfoSection>
            <HeadingCenter headline={info.header} textWidth="770"/>

            <Container>

                <AdventagesBox>
                    {info.items.map(item => (
                        <Adventages headline={item.headline} text={item.text}/>
                    ))}
                </AdventagesBox>
            </Container>
        </InfoSection>

        <Rocket />
    </Layout>
);

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

const PackageSection = styled.section`
`

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
    
    @media (min-width: 992px){
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
