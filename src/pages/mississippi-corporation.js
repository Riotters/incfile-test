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
} from "../static/learning-center-entity/mississippi-corporation";
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

const MississippiCorporation = () => {
    const [dataApi, setDataApi] = React.useState({});
    const [
        filingTimeAndRequirementHeader,
        setFilingTimeAndRequirementHeader,
    ] = React.useState("");

    React.useEffect(() => {
        getFullPricesAndFilings("Mississippi", "Corporation").then((data) => {
            setDataApi(data);
            setFilingTimeAndRequirementHeader(
                `Annual ${data.prices.state} Filing Requirements`
            );
        });
    }, []);

    return (
        <Layout>
            <SEO
                title="Form a Corporation or LLC in Mississippi Today | Incfile"
                description="Need information on incorporating in Mississippi? Find a list of required documents, filing times and fees, FAQs and more."
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
                                Choosing a name for your new Mississippi corporation is one of
                                the first official steps toward actually conducting business in
                                the Magnolia State. The business name you choose must be able to
                                be readily distinguished from all other registered Mississippi
                                business entities, as well as any business entity names already
                                reserved on the state rolls.
                            </Paragraph>
                            <Paragraph big>
                                Your new business’ name must be written in English letters or
                                characters and include one of the following words or an
                                abbreviation thereof: “Incorporated,” “Corporation,” “Company,”
                                or “Limited.” If the word “Company” is used, it may not be
                                preceded by the word “and” or a symbol that means the same
                                thing, such as “&.” The name also must not state or imply that
                                the corporation is organized for some purpose other than the one
                                specified in its articles of incorporation.
                            </Paragraph>
                            <Paragraph big style={{marginBottom: "32px"}}>
                                Available corporate names may be reserved for up to 180 days for
                                a fee of $25.
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
                                New Mississippi corporations must file articles of incorporation
                                with the Mississippi Secretary of State’s office before they can
                                start conducting business as a corporation. The articles must be
                                delivered by at least one of the incorporators (who must be a
                                natural person at least 18 years old), accompanied by the $50
                                filing fee.
                            </Paragraph>

                            <Colorbox
                                color={color.blue3}
                                content={articlesOfIncorporation.box1}
                                dotsColor={color.blue1}
                                style={{marginBottom: "65px"}}
                            />

                            <Paragraph big>
                                Mississippi law allows a corporation to be formed for any lawful
                                business activity. There is no requirement for a specific
                                corporate purpose to be stated in the articles of incorporation.
                            </Paragraph>
                            <Colorbox
                                color={color.orange3}
                                content={articlesOfIncorporation.box2}
                                dotsColor={color.orange1}
                                style={{marginBottom: "48px"}}
                            />

                            <Paragraph big>
                                Since Mississippi law does not use the concept of par value for
                                stocks, you do not need to state a par value for your shares.
                                The filing fee is a flat fee, rather than being based on your
                                authorized shares, so you can authorize as many as desired. Most
                                incorporators authorize common shares with equal voting,
                                dividend, and liquidation rights and no special restrictions.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Registered Agent and Office
                            </Heading>
                            <Paragraph big>
                                Every Mississippi corporation must have a registered agent in
                                the state-the person or office designated to receive official
                                state correspondence, both administrative and legal. The
                                registered agent must be either a Mississippi resident whose
                                business office is the same as the registered office, or a
                                corporation with a business office identical to the registered
                                office.
                            </Paragraph>
                            <Paragraph big>
                                The registered office may be any of the corporation’s places of
                                business in Mississippi.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Bylaws
                            </Heading>
                            <Paragraph big>
                                Bylaws lay out the corporation’s basic managerial and legal
                                operating principles. Mississippi corporations must keep a copy
                                of their bylaws at their principal executive office, but are not
                                required to file them with the state. At its initial meeting,
                                the board of directors should adopt corporate bylaws, and then
                                keep them updated as time goes on.
                            </Paragraph>
                            <Paragraph big>
                                The board of directors of a corporation may adopt, amend, or
                                repeal bylaws, unless the articles reserve this right to the
                                shareholders.
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
                            <TextBoxed style={{marginBottom: "8px"}}>
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
                                Officers are appointed or elected by the board in compliance
                                with the corporation’s bylaws, or elected by shareholders in
                                compliance with the articles of incorporation. One officer has
                                the responsibility of preparing minutes of director and
                                shareholder meetings, and for maintaining and authenticating
                                corporate records.
                            </Paragraph>
                            <Paragraph big>
                                It is permissible for an officer to hold more than one office in
                                the corporation unless otherwise prohibited by law or by the
                                corporation’s bylaws. Any officer may hold more than one office
                                in the Mississippi incorporation.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Requirement Reports
                            </Heading>
                            <Paragraph big style={{marginBottom: "48px"}}>
                                The Mississippi Secretary of State requires that Mississippi
                                corporations file a report each year within 60 days of the
                                anniversary of its incorporation.
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
                                The report must include:
                            </Paragraph>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The corporation’s name and the state or country of original
                                    incorporation
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The street address of the corporation’s registered office in
                                    the state
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The name of its registered agent there
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The address of the corporation’s principal office
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The names and addresses of the directors and principal
                                    officers
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    A brief description of the nature of its business
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The total number of issued and outstanding shares, itemized by
                                    class and series (if any) within each class
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
                                Mississippi imposes an annual corporate franchise tax of $2.50
                                per $1,000 of corporate capital, surplus, and profits, plus a
                                corporate income tax. There is a minimum annual franchise
                                payment of $25. You must file a combined corporate franchise and
                                income tax return each year.
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
    margin-bottom 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

export default MississippiCorporation;
