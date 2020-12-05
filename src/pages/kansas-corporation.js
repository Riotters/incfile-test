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
    top
} from "../static/learning-center-entity/kansas-corporation";
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

const KansasCorporation = () => {
    const [dataApi, setDataApi] = React.useState({});
    const [
        filingTimeAndRequirementHeader,
        setFilingTimeAndRequirementHeader,
    ] = React.useState("");

    React.useEffect(() => {
        getFullPricesAndFilings("Kansas", "Corporation").then((data) => {
            setDataApi(data);
            setFilingTimeAndRequirementHeader(
                `Annual ${data.prices.state} Filing Requirements`
            );
        });
    }, []);

    return (
        <Layout>
            <SEO
                title="Form a Corporation or LLC in Kansas Today | Incfile"
                description="Want to know how to incorporate in Kansas? Find information on filing schedules and fees, taxation, management structure and more."
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
                                Your Kansas corporation’s name must be distinguishable from any
                                other registered or reserved Kansas business entity on file with
                                the Kansas Secretary of State. Besides being unique, the name
                                (unless it’s a bank) must contain the word “association,”
                                “church,” “college,” “company,” “corporation,” “club,”
                                “foundation,” “fund,” “incorporated,” “institute,” “limited,”
                                “society,” “syndicate,” or “union,” or one of the abbreviations
                                “Co.,” “Corp.,” “Inc.,” or “Ltd.” An equivalent word or
                                abbreviation in another language may be used as long as it is
                                written in Roman characters.
                            </Paragraph>
                            <Paragraph big>
                                The name also is not allowed to include language that states or
                                implies that the corporation is organized for a purpose other
                                than one permitted by state law and its articles of
                                incorporation.
                            </Paragraph>
                            <Paragraph big style={{marginBottom: "32px"}}>
                                You can reserve an available corporate name for 120 days for $20
                                using a paper name reservation request, or do it online for $27.
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
                                Kansas state law requires that new corporations file articles of
                                incorporation with the Kansas Secretary of State, which also
                                requires a $90 filing fee ($84 if done online). These articles
                                must meet the requirements of the Kansas General Corporation
                                Code, which is in Chapter 17 of the Kansas Statutes, Articles
                                60-75.
                            </Paragraph>
                            <Paragraph big>
                                The State of Kansas allows corporations to be formed for any
                                lawful business activity. However, the nature of the
                                corporation’s business or its purpose-or a general statement
                                that the corporation may engage in any lawful act-must be
                                included in the articles of incorporation.
                            </Paragraph>
                            <Paragraph big>
                                At least one person (usually an initial director or officer)
                                must sign the articles as incorporator. The incorporator’s
                                primary duty is to deliver the articles of incorporation to the
                                Kansas Secretary of State.
                            </Paragraph>
                            <Paragraph big>
                                The articles must list the name and address of all
                                incorporators, the names and addresses of the initial directors
                                (if the powers of the incorporators will end after the articles
                                are filed), and the classes-as well as par value and number of
                                shares of each class-that the corporation is authorized to
                                issue.
                            </Paragraph>
                            <Paragraph big>
                                You can authorize shares with a stated par value or without par
                                value; the most common practice is to issue shares without par
                                value. The filing fee is not based on the number of authorized
                                shares, so you can authorize as many as desired. Most
                                incorporators authorize common shares with equal voting,
                                dividend, and liquidation rights, and no special restrictions.
                            </Paragraph>
                            <Paragraph big>
                                It’s also allowable to include other optional provisions into
                                the articles of incorporation for those who want to formalize
                                additional criteria.
                            </Paragraph>

                            <Colorbox
                                color={color.blue3}
                                content={articlesOfIncorporation.box1}
                                dotsColor={color.blue1}
                                style={{marginBottom: "48px"}}
                            />
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
                                person you designate to receive official legal and
                                administrative correspondence on behalf of your corporation. The
                                registered agent must be either an individual who lives in
                                Kansas and whose business office is the same as the registered
                                office, or a domestic corporation with a business office that is
                                the same as the registered office.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Bylaws
                            </Heading>
                            <Paragraph big>
                                Corporations should keep a copy of their bylaws at their
                                principal executive office, but they are not required to file
                                those bylaws with the state. At the new corporation’s initial
                                meeting, the incorporators or board of directors should adopt
                                corporate bylaws and then keep them updated as time goes on.
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
                                The right to adopt, amend, or repeal bylaws is vested in the
                                board, subject to the articles of incorporation and the
                                stockholders.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Directors
                            </Heading>
                            <Paragraph big>
                                Directors are generally elected at each annual shareholder
                                meeting to hold office until the next annual meeting. The bylaws
                                may prescribe additional qualifications for directors that are
                                consistent with the articles of incorporation.
                            </Paragraph>
                            <Paragraph big>
                                Corporate officers can either be listed in the bylaws or elected
                                by the board in compliance with those bylaws. Officers may
                                appoint other officers as needed for the operation of the
                                corporation, in accordance with the bylaws. There must be one
                                officer who is responsible for preparing and maintaining records
                                of the proceedings of director and shareholder meetings.
                            </Paragraph>
                            <Paragraph big>
                                Any number of offices may be held by the same person unless the
                                articles or bylaws state otherwise.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Requirement Reports
                            </Heading>
                            <Paragraph big style={{marginBottom: "48px"}}>
                                Each Kansas corporation must file a report with the Kansas
                                Secretary of State’s office every year every year when it files
                                its state income tax return.
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
                                The annual report must include:
                            </Paragraph>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>The corporation’s name</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The location of its principal office
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The nature and type of business in which the corporation is
                                    engaged
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The addresses of stockholders who own at least five percent of
                                    the corporation’s capital stock
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The number of shares of (and amount paid up in) capital stock
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The names and addresses of the president, secretary,
                                    treasurer, and members of the board of directors
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    Information about agricultural land held by the corporation
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
                                The corporate tax rate for Kansas varies based on taxable net
                                income. Kansas does, however, impose an annual franchise tax and
                                a corporate income tax, plus a surtax on corporate taxable
                                income over $50,000.
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
    margin-bottom: 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

export default KansasCorporation;
