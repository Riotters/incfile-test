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
} from "../static/learning-center-entity/alabama-corporation";
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
import Colorbox from "../atomic/molecules/blocks/left-icon-block-colored";
import FilingTimeAndPriceBox from "../atomic/state-corporation/filing-time-and-price-box";
import ComplianceRequirementBox from "../atomic/state-corporation/compliance-requirement-box";

import {getFullPricesAndFilings} from "../api/Api";
import ReactTabs from "../atomic/partials/ReactTabs";
import {TabPanel} from "react-tabs";

const AlabamaCorporation = () => {
    const [dataApi, setDataApi] = React.useState({});
    const [
        filingTimeAndRequirementHeader,
        setFilingTimeAndRequirementHeader,
    ] = React.useState("");

    React.useEffect(() => {
        getFullPricesAndFilings("Alabama", "Corporation").then((data) => {
            setDataApi(data);
            setFilingTimeAndRequirementHeader(
                `Annual ${data.prices.state} Filing Requirements`
            );
        });
    }, []);
    return (
        <Layout>
            <SEO
                title="Form a Corporation in Alabama."
                description="Interested in starting a corporation in Alabama? Learn about filing times and costs, management structure requirements, choosing a company name and more."
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
                                The business name you choose for your new Alabama corporation
                                must be readily distinguishable from all other registered and
                                reserved Alabama business entities. It must end with either
                                “Incorporated” or “Corporation” (or an abbreviation thereof)-or,
                                if it is to be a banking corporation, “Bank,” “Banking,” or
                                “Bankers.” The name cannot state or imply that the corporation
                                is organized for some purpose other than the one specified in
                                its articles of incorporation.
                            </Paragraph>
                            <Paragraph big style={{marginBottom: "32px"}}>
                                You must reserve your new corporation’s name with the state
                                filing office before filing your articles of incorporation. This
                                costs $10 and is good for up to 120 days.
                            </Paragraph>
                            <LightBoxVideo thumbnailVideo="what-is-a-corporation-8899" videoID="oYZShvmf9eQ" videoSchema={{
                                name: "\"What is a Corporation?\" by Incfile",
                                description: "\n" +
                                    "What is a corporation and how does it work? One of the most important decisions you'll make when starting a business is its legal structure. A popular option is a “corporation\"—but what does this mean for business owners? \n" +
                                    "\n" +
                                    "A corporation is its own legal entity separate from the owners. It has nearly all the legal rights of an individual: It can hire employees, own assets, enter into contracts, sue and be sued, loan and borrow money, and pay taxes. But since the corporation exists as a separate entity, it limits the liability of its owners. That means shareholders have the right to participate in profits, but they’re not held personally liable for the company’s debts. And since a corporation isn’t linked to a single person, it doesn’t dissolve when its owners or shareholders change or die, so liability protection is passed on to the next in line.\n" +
                                    "\n" +
                                    "The Three Main Types of Corporations: \n" +
                                    "- C Corporations\n" +
                                    "- S Corporations\n" +
                                    "- Non-profits \n" +
                                    "\n" +
                                    "Learn more about the three main types of corporations by visiting these links below: \n" +
                                    "\n" +
                                    "- What is an S Corporation? https://www.youtube.com/redirect?q=https%3A%2F%2Fwww.incfile.com%2Fwhat-is-s-corporation%2F&event=video_description&v=oYZShvmf9eQ&redir_token=QUFFLUhqbjNJckMzMnF1TkJKOFN1MUpoU3REbEJ5SWhWZ3xBQ3Jtc0ttVmNoYUtGY2MwU2xudkVYNkF0NnNSZ0tPWGJlOHk5aXpjVGgzQTNkdjdreXIwcjVhZDAweFoxZDc2Z3BqYnJhWU0ybGhPQ0JYRm1OdEhabmpybDlmbzBvTm5oYy1LdUhRWEcwazgyN0pMRkUxYkxpYw%3D%3D\n" +
                                    "- What is a C Corporation? https://www.youtube.com/redirect?q=https%3A%2F%2Fwww.incfile.com%2Fwhat-is-c-corporation%2F&event=video_description&v=oYZShvmf9eQ&redir_token=QUFFLUhqbjBOQWJFTXRUbzhUTmhLZ3RRODNiTzdvM2I2UXxBQ3Jtc0tuLU5iMjJHQ2Fnank1V0k5eUNwQnhZNERITDBMd2ZKYVVnWU1BNE1pSUlyQ3RoRHpkcmZhZDRQVzBVRWNhSGVtUjNGNTNuSnF2X3FpZm5rdnc4M0JoZTJWTFVvTDVVRU1wamh1SFd4c2VYaTl1QUZXcw%3D%3D\n" +
                                    "- What is a Nonprofit? https://www.youtube.com/redirect?q=https%3A%2F%2Fwww.incfile.com%2Fwhat-is-non-profit-corporation%2F&event=video_description&v=oYZShvmf9eQ&redir_token=QUFFLUhqbkhQM2t1Nm5HRTV2U0xVMk5rekd5NGVXVUpMQXxBQ3Jtc0tuMkFhYkJSTlVVWV9Sc05BT2V5ZElfM2RqaDgwQTE4N3BxRmd6STIwUGFNNkZtS2UtZDZjSXRkU1RlejQ1REZvdmVxZU5VM3Z4QzRlbGpPM0RTLXBkbldpRTJqb0ExOThna2pCdXdkd3JvX3d1MjdYUQ%3D%3D\n",
                                uploadDate: "2020-09-07",
                                duration: "1:40",
                                interactionCount: "166",
                            }} />

                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Articles of Incorporation
                            </Heading>
                            <Paragraph big>
                                New Alabama corporations must file an original and two copies of
                                your articles of incorporation with their local county probate
                                judge before they can start conducting business as a
                                corporation. Once the judge finds that the articles are in
                                compliance with state law, he or she will issue (publish) one
                                certified copy of the articles, return one to the LLC, and
                                forward the third within 10 days to the Corporate Section of the
                                Alabama Secretary of State’s office. Filing requires a $40 fee
                                payable to the Alabama Secretary of State, and another $35
                                payable to the county probate judge, for a total of $75.
                            </Paragraph>
                            <Paragraph big>
                                The articles must be delivered by at least one of the
                                incorporators, who must sign and deliver the articles to the
                                judge.
                            </Paragraph>

                            <Colorbox
                                color={color.blue3}
                                content={articlesOfIncorporation.box1}
                                dotsColor={color.blue1}
                                style={{marginBottom: "65px"}}
                            />

                            <Colorbox
                                color={color.orange3}
                                content={articlesOfIncorporation.box2}
                                dotsColor={color.orange1}
                                style={{marginBottom: "48px"}}
                            />

                            <Paragraph big>
                                Since Alabama law does not use the concept of par value for
                                stocks, you do not need to state a par value for your shares.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Registered Agent and Office
                            </Heading>
                            <Paragraph big>
                                Every Alabama corporation must have a registered agent in the
                                state-someone designated to receive official state
                                administrative and legal correspondence. The registered agent
                                must be either an adult Alabama resident, or a corporation with
                                a business office identical to the registered office. The
                                registered office may be at any of the corporation’s places of
                                business.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Bylaws
                            </Heading>
                            <Paragraph big>
                                Bylaws describe the corporation’s basic managerial and legal
                                operating principles. An Alabama corporation must keep a copy of
                                its bylaws at its main executive office, but is not required to
                                file them with the state. The initial bylaws must be adopted by
                                the board of directors, unless the articles of incorporation
                                specify that shareholders have this right.
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

                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    Shareholders and directors meetings
                                </Paragraph>
                            </TextBoxed>

                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The authority, number, and tenure of directors
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

                            <TextBoxed style={{marginBottom: "48px"}}>
                                <Paragraph bottomMargin={0}>
                                    How and when annual financial information is provided to
                                    shareholders
                                </Paragraph>
                            </TextBoxed>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Directors
                            </Heading>
                            <Paragraph big>
                                A director must be a natural person of at least 19 years of age,
                                but they do not have to be an Alabama resident-or even a
                                shareholder-unless so stipulated in the articles of
                                incorporation or the corporate bylaws. Either one of those
                                documents may also specify a minimum and a maximum number of
                                directors, but they are not required to be listed by name in the
                                articles. Directors are elected annually to serve one-year
                                terms.
                            </Paragraph>
                            <Paragraph big>
                                he bylaws may either describe the corporation’s officer
                                positions and duties or authorize that the board of directors
                                make these appointments. These duties must include the
                                responsibility for preparing minutes of meetings and for
                                authenticating corporate records. Unless the bylaws provide
                                otherwise, an officer may simultaneously hold more than one
                                office in a corporation.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Requirement Reports
                            </Heading>
                            <Paragraph big style={{marginBottom: "24px"}}>
                                The Alabama Secretary of State requires that Alabama
                                corporations file an annual report between January 1 and March
                                15 each year that specifies:
                            </Paragraph>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The corporation’s name and the state or country of original
                                    incorporation.
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The address of the corporation’s registered office in the
                                    state.
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The name of its registered agent at that office.
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The nature of the corporation’s business.
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>

                                <Paragraph bottomMargin={0}>
                                    The names and addresses of the corporation’s president and
                                    secretary.
                                </Paragraph>
                            </TextBoxed>
                            <Paragraph big>
                                An Alabama corporation is also required to send annual financial
                                statements to all shareholders within 120 days after the end of
                                each fiscal year.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Taxes
                            </Heading>
                            <Paragraph big>
                                Alabama’s corporate tax structure consists of a flat rate of
                                6.5% on all corporate income. Among states with corporate income
                                taxes, Alabama’s rate ranks 30th in the nation. Alabama also
                                assesses a business privilege tax, which is an annual tax on
                                corporate shares based on the net worth of the corporation.
                            </Paragraph>
                            <Paragraph big>
                                The Alabama Secretary of State recognizes subchapter S status
                                for corporations. A “subchapter S” corporation (frequently
                                referred to as an “S corp”) is treated as a “pass-through”
                                entity for tax purposes in the same way as a sole proprietorship
                                or partnership. The S corp does not file a tax return on its own
                                behalf; instead, all tax-related data for the S corp is filed as
                                part of the owner’s individual income tax.
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
                        videoSchema={{
                            name: "\"What is a Corporation?\" by Incfile",
                            description: "\n" +
                                "What is a corporation and how does it work? One of the most important decisions you'll make when starting a business is its legal structure. A popular option is a “corporation\"—but what does this mean for business owners? \n" +
                                "\n" +
                                "A corporation is its own legal entity separate from the owners. It has nearly all the legal rights of an individual: It can hire employees, own assets, enter into contracts, sue and be sued, loan and borrow money, and pay taxes. But since the corporation exists as a separate entity, it limits the liability of its owners. That means shareholders have the right to participate in profits, but they’re not held personally liable for the company’s debts. And since a corporation isn’t linked to a single person, it doesn’t dissolve when its owners or shareholders change or die, so liability protection is passed on to the next in line.\n" +
                                "\n" +
                                "The Three Main Types of Corporations: \n" +
                                "- C Corporations\n" +
                                "- S Corporations\n" +
                                "- Non-profits \n" +
                                "\n" +
                                "Learn more about the three main types of corporations by visiting these links below: \n" +
                                "\n" +
                                "- What is an S Corporation? https://www.youtube.com/redirect?q=https%3A%2F%2Fwww.incfile.com%2Fwhat-is-s-corporation%2F&event=video_description&v=oYZShvmf9eQ&redir_token=QUFFLUhqbjNJckMzMnF1TkJKOFN1MUpoU3REbEJ5SWhWZ3xBQ3Jtc0ttVmNoYUtGY2MwU2xudkVYNkF0NnNSZ0tPWGJlOHk5aXpjVGgzQTNkdjdreXIwcjVhZDAweFoxZDc2Z3BqYnJhWU0ybGhPQ0JYRm1OdEhabmpybDlmbzBvTm5oYy1LdUhRWEcwazgyN0pMRkUxYkxpYw%3D%3D\n" +
                                "- What is a C Corporation? https://www.youtube.com/redirect?q=https%3A%2F%2Fwww.incfile.com%2Fwhat-is-c-corporation%2F&event=video_description&v=oYZShvmf9eQ&redir_token=QUFFLUhqbjBOQWJFTXRUbzhUTmhLZ3RRODNiTzdvM2I2UXxBQ3Jtc0tuLU5iMjJHQ2Fnank1V0k5eUNwQnhZNERITDBMd2ZKYVVnWU1BNE1pSUlyQ3RoRHpkcmZhZDRQVzBVRWNhSGVtUjNGNTNuSnF2X3FpZm5rdnc4M0JoZTJWTFVvTDVVRU1wamh1SFd4c2VYaTl1QUZXcw%3D%3D\n" +
                                "- What is a Nonprofit? https://www.youtube.com/redirect?q=https%3A%2F%2Fwww.incfile.com%2Fwhat-is-non-profit-corporation%2F&event=video_description&v=oYZShvmf9eQ&redir_token=QUFFLUhqbkhQM2t1Nm5HRTV2U0xVMk5rekd5NGVXVUpMQXxBQ3Jtc0tuMkFhYkJSTlVVWV9Sc05BT2V5ZElfM2RqaDgwQTE4N3BxRmd6STIwUGFNNkZtS2UtZDZjSXRkU1RlejQ1REZvdmVxZU5VM3Z4QzRlbGpPM0RTLXBkbldpRTJqb0ExOThna2pCdXdkd3JvX3d1MjdYUQ%3D%3D\n",
                            uploadDate: "2020-09-07",
                            duration: "1:40",
                            interactionCount: "166",
                        }}
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

const AdventagesBox = styled.div`
  display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 20px;
    margin-top: 76px;
    margin-bottom: 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

export default AlabamaCorporation;
