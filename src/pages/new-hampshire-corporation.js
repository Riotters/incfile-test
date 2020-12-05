import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import { info, questions, service, top, articlesOfIncorporation} from "../static/learning-center-entity/new-hampshire-corporation";
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
        getFullPricesAndFilings('New Hampshire', 'Corporation').then(data => {
            setDataApi(data);
            setFilingTimeAndRequirementHeader(`Annual ${data.prices.state} Filing Requirements`);
        });
    }, []);

    return (
        <Layout>
            <SEO title="Form a Corporation or LLC in New Hampshire Today | Incfile" description="New Hampshire incorporation information is just a click away! Find filing fees and schedules, what documents are required, and how to choose a name." />
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
                            <Paragraph big>The name of the New Hampshire corporation you’re starting up is very important-it’s one of your business organization’s first official acts, and it’s how people first meet your company.</Paragraph>
                            <Paragraph big>Your company’s name must be distinguishable from any other registered or reserved New Hampshire business entity. Its name must be such that it cannot easily be confused with not only other business entities, but also government entities and political parties.</Paragraph>
                            <Paragraph big>Your corporation’s name also is not allowed to include language that states or gives the impression that the corporation is organized for any purpose other than one permitted by state law and its articles of incorporation.</Paragraph>
                            <Paragraph big>The corporation’s name must contain one or more of the following words, an abbreviation thereof, or words of similar meaning in another language: “Incorporated,” “Corporation,” or “Limited.”</Paragraph>
                            <Paragraph big>It also may not include words or phrases (or their abbreviations or derivations) that are prohibited or restricted by the state. Your corporation may, however, use an alternate name for a limited period of time, subject to certain state requirements.</Paragraph>
                            <Paragraph big style={{ marginBottom: "0" }}>
                                You can reserve an available corporate name for 120 days for $15.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Articles of Incorporation
            </Heading>
                            <Paragraph big>
                                After choosing a name, the next step for your brand new corporation in New Hampshire is filing articles of incorporation with the state, along with the $100 filing fee. This fee includes the $50 articles filing fee, plus another $50 fee for filing the required addendum form.
            </Paragraph>
                            <Paragraph big>The certificate must be delivered to the state by one or more incorporators (there must be at least one), who are not required to be a director, officer, or shareholder of the corporation. The incorporator must also execute (sign) the articles.</Paragraph>

                            <Colorbox color={color.blue3} content={articlesOfIncorporation.box1} dotsColor={color.blue1} style={{ marginBottom: "65px" }} />
                            <Paragraph big>Before your new corporation can be registered with the state, however, the incorporator(s) must sign a statement of compliance with New Hampshire Securities Laws.</Paragraph>

                            <Colorbox color={color.orange3} content={articlesOfIncorporation.box2} dotsColor={color.orange1} style={{ marginBottom: "48px" }} />

                            <Paragraph big>New Hampshire also allows optional provisions to be included in the articles of incorporation.</Paragraph>
                            <Colorbox color={color.orange3} content={articlesOfIncorporation.box3} dotsColor={color.orange1} />
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Registered Agent and Office
            </Heading>
                            <Paragraph big>All New Hampshire corporations must have a registered agent the state. The registered agent is the person or office designated to receive official state administrative and legal correspondence.</Paragraph>
                            <Paragraph big>The corporation’s registered agent must have a business office that is the same as the registered office and must be either a natural person who resides in New Hampshire, or a corporation authorized to conduct business there.</Paragraph>
                            <Paragraph big>New Hampshire requires that every corporation have a registered office in the state, which may be the same of any of its places of business.</Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Bylaws
            </Heading>
                            <Paragraph big>
                                Bylaws lay out a corporation’s basic managerial and legal operating principles; the corporation must keep a copy at its principal executive office, but is not required to file them with the state. Nonetheless, they are a critically important document for the corporation.
            </Paragraph>
                            <Paragraph big>
                                At its initial meeting, the incorporators or the corporation’s board of directors must adopt corporate bylaws, and then keep them updated as time goes on. The corporation’s board of directors can make, alter, amend, or repeal those bylaws, unless the articles of incorporation reserve
                                this right to the shareholders.
            </Paragraph>
                            <Paragraph big style={{ fontFamily: "Avenir", fontWeight: "900", color: "#1e1e1e" }}>
                                Bylaws normally address:
            </Paragraph>

                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>Shareholders’ and directors’ meetings</Paragraph>
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
                                If a board of directors has the power to fix or change the number of directors, the board may raise or lower by no more than 30 percent the number of directors last approved by the shareholders, but only the shareholders may increase or decrease by more than 30 percent the number of
                                directors. The terms of all other directors expire at the next annual shareholders’ meeting following their election.
            </Paragraph>
                            <Paragraph big>
                                Officers may be listed in the bylaws or elected by the board, and may appoint other officers in compliance with the bylaws. Also, one officer must be given the responsibility of preparing minutes of the directors’ and shareholders’ meetings and for authenticating corporate records. The
                                same individual may simultaneously hold more than one office in a corporation.
            </Paragraph>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Requirement Reports
            </Heading>
                            <Paragraph big style={{ marginBottom: "24px" }}>
                                An annual report must be filed with the New Hampshire Corporation Division between January 1 and April 1 starting the year after the calendar year of incorporation that includes:
            </Paragraph>

                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The corporation’s name and the state or country under whose law it is incorporated</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The address of the corporation’s registered New Hampshire office and the name of its registered agent there</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The address of the corporation’s principal office</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The names and business addresses of the corporation’s directors and principal officers</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>A brief description of the nature of the corporation’s business</Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{ marginBottom: "8px" }}>
                                <Paragraph bottomMargin={0}>The signature of an officer, director, or any other person authorized by the board of directors to execute the annual report</Paragraph>
                            </TextBoxed>
                        </PanelWrapper>
                        <PanelWrapper>
                            <Heading size={3} style={{ marginBottom: "24px" }}>
                                Taxes
            </Heading>
                            <Paragraph big>New Hampshire’s corporate tax structure consists of two brackets, with a top rate of 9.25 percent that takes effect at an income level of $150,000. Among states levying corporate income taxes, New Hampshire’s top rate ranks the state sixth highest nationally.</Paragraph>
                            <Paragraph big>S corporation status is recognized by the State of New Hampshire.</Paragraph>
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
                    <LightBoxVideo thumbnailVideo="comparison-chart-video-3611" videoID="oYZShvmf9eQ" videoSchema={{
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
