import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import {  info, questions, service, top, articlesOfIncorporation } from "../static/learning-center-entity/north-dakota-corporation";
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
        getFullPricesAndFilings('North Dakota', 'Corporation').then(data => {
            setDataApi(data);
            setFilingTimeAndRequirementHeader(`Annual ${data.prices.state} Filing Requirements`);
        });
    }, []);

    return (
        <Layout>
            <SEO title="Form a Corporation or LLC in North Dakota Today | Incfile" description="Have questions about incorporating in North Carolina? Read our FAQs, get filing times and fees, or find out how to choose your name." />
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
                                Your North Dakota corporation’s name must be distinguishable from any other business entity name registered or reserved with the North Dakota Secretary of State. The name must contain the word “Corporation,” “Incorporated,” “Company,” or “Limited,” or one of the abbreviations “Corp.,”
                                “Inc.,” “Co.,” or “Ltd.”
            </Paragraph>
                            <Paragraph big>
                                It also is not allowed to include language that states or implies that the corporation is actually some other organization, or that it is organized for a purpose other than that permitted by state law and its articles of incorporation. The name must be in the English language or
                                expressed in English letters and characters.
            </Paragraph>
                            <Paragraph big style={{ marginBottom: "0" }}>
                                An available corporate name can be reserved for a year for a $10 fee.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Articles of Incorporation
            </Heading>
                            <Paragraph big>
                                North Dakota requires that new corporations file articles of incorporation with the Corporations Division of the state Secretary of State’s office. The articles are delivered by one or more incorporators, whose primary duties are to sign the articles and deliver the original and an
                                exact copy of the articles to the Corporations Division. The incorporator must be a natural person at least 18 years old, but does not need to be a director, officer, or shareholder of the corporation.
            </Paragraph>

                            <Colorbox color={color.blue3} content={articlesOfIncorporation.box1} dotsColor={color.blue1} style={{ marginBottom: "65px" }} />

                            <Paragraph big>
                                Since North Dakota allows a corporation to be formed for any lawful business activity, a general statement in the articles granting broad powers is acceptable-for example, to state that your new corporation is being formed for “general business purposes” is enough for most situations.
            </Paragraph>
                            <Paragraph big>
                                However, providing a specific business purpose in your articles can help the Corporations Division determine whether you are entitled to use your proposed corporate name if it is similar to that of another business entity. Even if your name is similar to the name of another
                                corporation, the state filing office may let you use the name if the specific purpose of your corporation is significantly different from the other corporation’s purpose. If you provide a specific purpose, though, you should also include a general purpose-for example, “to sell retail
                                repair parts and for any lawful purpose.”
            </Paragraph>
                            <Paragraph big>
                                North Dakota statutes do not allow a business corporation to be formed for the purpose of conducting business in the banking, farming, ranching, or insurance businesses. A business corporation may be an insurance agency that sells or services insurance products, but it cannot be the
                                insurer that actually backs the claims.
            </Paragraph>
                            <Paragraph big>
                                Also, North Dakota prohibits a corporation from including provisions in its articles of incorporation that limit the right of cumulative voting as guaranteed by the state constitution, or that authorize the issuance of stocks or bonds that are in violation of the state constitution.
            </Paragraph>

                            <Colorbox color={color.orange3} content={articlesOfIncorporation.box2} dotsColor={color.orange1} style={{ marginBottom: "48px" }} />

                            <Paragraph big>
                                The filing fee for your articles of incorporation is $90 minimum-$30 for the articles themselves, $10 for filing the Registered Agent Consent to Serve form, plus a minimum $50 license fee. The fee depends on the authorized capital specified in your articles. The license fee is $10 for
                                each $10,000 of capital or portion thereof. You will have to pay at least the minimum license fee of $50, so you should authorize at least $50,000 of capital. Within that range, for shares without par value, multiply the number of no-par shares authorized in the articles by $1. For
                                shares that do have a stated par value, multiply the par value amount of each share by the number of par value shares authorized.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Registered Agent and Office
            </Heading>
                            <Paragraph big>
                                The articles of incorporation should also include the name and address of your corporation’s initial registered agent-the person appointed to receive official legal and administrative correspondence from the state on behalf of your corporation. The registered agent must be either an
                                individual who lives in North Dakota, or a corporation authorized to conduct business in the state. In either case, the agent’s business office must be the same as the corporation’s registered office.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Bylaws
            </Heading>
                            <Paragraph big>
                                Corporations should keep a copy of their bylaws at their principal executive office, but they are not required to file those bylaws with the state. At the new corporation’s initial meeting, the incorporators or board of directors must adopt bylaws for the corporation and then keep them
                                updated as time goes on.
            </Paragraph>
                            <Paragraph big style={{ fontFamily: "Avenir", fontWeight: "900", color: "#1e1e1e" }}>
                                Bylaws are a critically important document describing the corporation’s basic managerial and legal operating principles regarding such issues as:
            </Paragraph>

                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>Shareholders’ and directors’ meetings</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The authority, number, and tenure of directors in the board of directors</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>Voting procedures</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The duties, responsibilities, and tenure of directors and officers</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>How stock is issued</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>How and when annual financial information is provided to shareholders</Paragraph>
                            </TextBoxed>

                            <Paragraph big>
                                The right to adopt, amend, or repeal bylaws is vested in the board (subject to provisions in the articles of incorporation) and the stockholders. Unless the articles or bylaws provide otherwise, shareholders who hold five percent or more of the voting power of shares entitled to vote
                                may propose a resolution for action by the shareholders to adopt, amend, or repeal bylaws which have been adopted, amended, or repealed by the board.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Directors
            </Heading>
                            <Paragraph big>
                                Corporate officers can either be listed in the bylaws or elected by the board in compliance with those bylaws. Officers must be individuals at least 18 years old. There must be at least a president, secretary, and treasurer. There may also be one or more vice presidents, as well as any
                                other officers specified by the bylaws. Officers may appoint other officers as needed for the operation of the corporation, in accordance with the bylaws. Unless a different officer is designated by the bylaws or the board, the secretary or assistant secretary is responsible for
                                preparing minutes of the directors’ and shareholders’ meetings and for maintaining and authenticating corporate records.
            </Paragraph>
                            <Paragraph big>Multiple offices may be held by the same person unless the articles or bylaws state otherwise, but no individual is allowed to act in more than one officer capacity where the action of two or more officers is required.</Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Requirement Reports
            </Heading>
                            <Paragraph big style={{ marginBottom: "48px" }}>
                                North Dakota corporations must file an annual report with the state Secretary of State each year before August 2 (or before May 16 for foreign corporations), starting with the calendar year after the year of incorporation.
            </Paragraph>

                            <Paragraph big style={{ marginBottom: "24px", fontFamily: "Avenir", fontWeight: "900", color: "#1e1e1e" }}>
                                The annual report must include:
            </Paragraph>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The corporation’s name and its state or country of incorporation</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The addresses of its principal and registered offices</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The name of the corporation’s registered agent</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The names and addresses of all officers and directors</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>A statement of the aggregate number of authorized and issued shares, itemized by classes, par value, shares without par value, and series (if any) within a class</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>A statement of the value of all corporation-owned property</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The gross amount of corporate income for the preceding calendar year</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The gross amount of corporate income received at or from its places of business inside North Dakota</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>A brief description of the character of the business</Paragraph>
                            </TextBoxed>
                            <Paragraph big>
                                When a shareholder requests it in writing, North Dakota corporations are required to prepare an annual financial statement within 180 days of the close of the fiscal year. The corporation must furnish the report-which must include an annual income statement and a year-end balance
                                sheet-to the shareholder within 10 business days of receiving the request.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Taxes
            </Heading>
                            <Paragraph big>North Dakota’s corporate tax structure consists of five brackets. The top rate of 6.5 percent takes effect at $30,000 corporate income. Among states that levy corporate income taxes, North Dakota’s top rate ranks 30th nationally.</Paragraph>
                            <Paragraph big>
                                However, North Dakota does recognize “S corp” status. A “subchapter S” corporation-frequently referred to as an “S corp”-is treated as a pass-through entity for tax purposes. The S corp does not file a tax return on its own behalf; instead, all tax-related data for the S corp is filed
                                as part of the owner’s individual income tax. Therefore, the tax rate for an S corp will depend on the owner’s filing status and situation, as well as the level of income received.
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
