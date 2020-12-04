import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import {questions, service, tabs, top} from "../static/learning-center-entity/iowa-corporation";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import TabsOvalOneSvg from "../images/ovals/bottom-left-transparent-pink.inline.svg";
import OvalSvg2 from "../images/ovals/top-right-transparent-blue2.inline.svg";
import OvalSvg3 from "../images/ovals/bottom-left-transparent-blue1.inline.svg";
import OvalSvg4 from "../images/ovals/top-right-transparent-orange3.inline.svg";
import PanelWrapper from "../atomic/organisms/tabs/panel";
import {Heading} from "../atomic/atoms/typography/heading";
import {Paragraph} from "../atomic/atoms/typography/paragraph";
import TextBoxed from "../atomic/molecules/static-check/circle-checkmark-text-boxed";
import {color, gradient} from "../atomic/atoms/styles/colors";
import Oval from "../atomic/atoms/icons/oval";
import HeadingCenter from "../atomic/partials/heading-center";
import ContentCenter from "../atomic/partials/content-center";
import LightBoxVideo from "../components/LightBox";
import Curve2SVG from "../images/curves/bottom-left-top-right-reverse-big.inline.svg";
import Curve from "../atomic/atoms/icons/curve";
import PacketsSection from "../atomic/sections/learning-center-entity/alaska-corporation/packets";
import Accordion from "../atomic/organisms/accordion/accordion";
import Rocket from "../atomic/sections/learning-center-entity/alaska-corporation/rocket";
import FilingTimeAndPriceBox from "../atomic/state-corporation/filing-time-and-price-box";
import ComplianceRequirementBox from "../atomic/state-corporation/compliance-requirement-box";
import {getFullPricesAndFilings} from "../api/Api";
import ReactTabs from "../atomic/partials/ReactTabs";
import {TabPanel} from "react-tabs";

const AlaskaCorporation = () => {
    const [dataApi, setDataApi] = React.useState({});
    const [
        filingTimeAndRequirementHeader,
        setFilingTimeAndRequirementHeader,
    ] = React.useState("");

    React.useEffect(() => {
        getFullPricesAndFilings("Iowa", "Corporation").then((data) => {
            setDataApi(data);
            setFilingTimeAndRequirementHeader(
                `Annual ${data.prices.state} Filing Requirements`
            );
        });
    }, []);

    return (
        <Layout>
            <SEO
                title="Form a Corporation or LLC in Iowa Today | Incfile"
                description="Incorporating in Iowa? Get your business off the ground with info on filing times and fees, management structure, taxation and more."
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

                <ReactTabs content={tabs}>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Choosing a Corporation Name
                            </Heading>
                            <Paragraph big>
                                Your Iowa corporation’s name must be noticeably different from
                                any other registered Iowa business entity, as well as any
                                reserved names on file with the Iowa Secretary of State, with
                                only a few exceptions. It also is not allowed to use language
                                that states or implies that the corporation is organized for a
                                purpose not allowed by state law or the corporation’s articles
                                of incorporation.
                            </Paragraph>
                            <Paragraph big>
                                The name also may not state or imply that the corporation is
                                organized for some purpose other than that stated in its
                                articles of incorporation.
                            </Paragraph>
                            <Paragraph big>
                                Your new corporation’s name has to include the words
                                “Corporation,” “Incorporated,” “Company,” or “Limited,” or
                                abbreviations thereof
                            </Paragraph>
                            <Paragraph big style={{marginBottom: "32px"}}>
                                You can reserve a name not already taken by another entity for
                                up to 120 days for $10.
                            </Paragraph>
                            <LightBoxVideo
                                thumbnailVideo="what-is-a-corporation-8899"
                                videoID="oYZShvmf9eQ"
                            />
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Articles of Incorporation
                            </Heading>
                            <Paragraph big>
                                Iowa state law requires that new corporations file articles of
                                incorporation with the Iowa Secretary of State, which also
                                requires a $50 filing fee. These articles must meet the
                                requirements of the Iowa Business Corporation Act.
                            </Paragraph>
                            <Paragraph big>
                                The State of Iowa allows corporations to be formed for any
                                lawful business activity-the business purpose of the new
                                corporation is not required to be included in the articles.
                            </Paragraph>
                            <Paragraph big>
                                At least one person (usually an initial director or officer)
                                must sign the articles as incorporator. The incorporator’s
                                primary duty is to deliver the articles of incorporation to the
                                Iowa Secretary of State.
                            </Paragraph>
                            <Paragraph big>
                                The articles must also specify the classes, distinguishing
                                designation, relative rights, and number of shares of each class
                                of stock that the corporation is authorized to issue. The
                                articles must authorize two things: one or more classes of
                                shares that together have unlimited voting rights; and one or
                                more classes of shares, which may be the same class or classes
                                as those with voting rights, that together may receive the net
                                assets of the corporation upon dissolution.
                            </Paragraph>
                            <Paragraph big>
                                It’s also allowable to include other optional provisions into
                                the articles of incorporation for those who want to formalize
                                additional criteria, such as special shareholder qualifications,
                                time limits on the corporation’s existence, limits on directors’
                                liability in specific circumstances, and so on.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Registered Agent and Office
                            </Heading>
                            <Paragraph big>
                                The articles of incorporation should also include the name and
                                address of your corporation’s initial registered agent-the
                                person you designate to receive official correspondence (legal
                                or administrative) on behalf of your corporation. The registered
                                agent must be either an individual who lives in Iowa and whose
                                business office is the same as the registered office, or a
                                corporation with a business office that is the same as the
                                registered office.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Bylaws
                            </Heading>
                            <Paragraph big>
                                All corporations are required to keep a copy of their bylaws at
                                their main executive office, but they are not required to file
                                those bylaws with the state. At the new corporation’s initial
                                meeting, the board of directors should adopt corporate bylaws,
                                and then keep them updated as time goes on.
                            </Paragraph>
                            <Paragraph
                                big
                                style={{
                                    fontFamily: "Avenir",
                                    fontWeight: "900",
                                    color: "#1e1e1e",
                                }}
                            >
                                Bylaws are a critically important document describing the
                                corporation’s basic managerial and legal operating principles
                                regarding such issues as:
                            </Paragraph>

                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    Shareholders’ and directors’ meetings
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The authority, number, and tenure of directors in the board of
                                    directors
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>Voting procedures</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The duties, responsibilities, and tenure of officers
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>How stock is issued</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    How and when annual financial information is provided to
                                    shareholders
                                </Paragraph>
                            </TextBoxed>

                            <Paragraph big>
                                Officers of the new corporation can either be listed in the
                                bylaws or elected by the board in compliance with those bylaws.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Directors
                            </Heading>
                            <Paragraph big>
                                Corporate officers can either be listed in the bylaws or elected
                                by the board in compliance with the bylaws. A corporation must
                                have a chairman of the board or a president (or both), a
                                secretary, a chief financial officer, and whatever other
                                officers are listed in the bylaws or determined by the board.
                            </Paragraph>
                            <Paragraph big>
                                The president, or, if there is no president, the chairman of the
                                board, is the general manager and chief executive officer of the
                                Iowa corporation, unless otherwise stipulated in the articles or
                                bylaws. Any number of offices may be held by the same person
                                unless the articles or bylaws state otherwise.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Requirement Reports
                            </Heading>
                            <Paragraph big style={{marginBottom: "48px"}}>
                                Iowa corporations must file a report with the Iowa Secretary of
                                State’s office every even-number calendar year. The first report
                                must be delivered between January 1 and April 1 of the first
                                even-numbered year following the calendar year of incorporation,
                                or by another date that the Iowa Secretary of State’s office may
                                designate.
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
                                Each biennial report must contain information regarding the
                                two-year period immediately before the calendar year in which
                                the report is filed, including the following information:
                            </Paragraph>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The corporation’s name and its state or country of
                                    incorporation.
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The address of the corporation’s registered office and the
                                    name of its registered agent at that in-state office.
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The address of the corporation’s principal office.
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The names and addresses of the president, secretary,
                                    treasurer, and at least one member of the board of directors.
                                </Paragraph>
                            </TextBoxed>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Taxes
                            </Heading>
                            <Paragraph big>
                                The corporate tax rate for Iowa varies based on taxable net
                                income.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                </ReactTabs>
            </TabsWrapper>

            <ServiceSection>
                <Oval className="oval" height={420} width={420} top="20" right="0">
                    <OvalSvg2/>
                </Oval>
                <Oval className="oval" height={720} width={720} top="60" left="0">
                    <OvalSvg3/>
                </Oval>
                <HeadingCenter
                    headline={service.header}
                    textWidth="590"
                    text={service.text}
                    bottomMargin="48"
                    bottomMarginLG="80"
                />
                <ContentCenter style={{marginBottom: "149px"}}>
                    <Curve top="-115" left="80" rotate={180} color={color.blue2}>
                        <Curve2SVG/>
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
                    <FilingTimeAndPriceBox data={dataApi}/>
                    <ComplianceRequirementBox data={dataApi} style={{margin: 0}}/>
                </ContentCenter>
            </ServiceSection>

            <PacketsSection data={dataApi}/>

            <QuestionSection>
                <Oval className="oval" height={570} width={570} top="20" right="0">
                    <OvalSvg4/>
                </Oval>
                <HeadingCenter headline={questions.header} textWidth="770"/>
                <ContentCenter style={{marginBottom: "48px"}}>
                    <Accordion
                        content={questions}
                        curve
                        curveColor={color.blue1}
                        curveLeft="-15px"
                    />
                </ContentCenter>
                <ContentCenter style={{marginBottom: "48px"}}>
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

            <Rocket/>
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

export default AlaskaCorporation;
