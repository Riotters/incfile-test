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
} from "../static/learning-center-entity/nebraska-corporation";
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

const NebraskaCorporation = () => {
    const [dataApi, setDataApi] = React.useState({});
    const [
        filingTimeAndRequirementHeader,
        setFilingTimeAndRequirementHeader,
    ] = React.useState("");

    React.useEffect(() => {
        getFullPricesAndFilings("Nebraska", "Corporation").then((data) => {
            setDataApi(data);
            setFilingTimeAndRequirementHeader(
                `Annual ${data.prices.state} Filing Requirements`
            );
        });
    }, []);

    return (
        <Layout>
            <SEO
                title="Nebraska Corporation | How to Incorporate in Nebraska | Learn About Incorporating in Nebraska"
                description="Read our Nebraska incorporation guide to learn about filing times and fees, business taxation and bylaws, operating agreements and much more."
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
                                The name you decide on for your new corporation cannot be the
                                same as or deceptively similar to the name of any other Nebraska
                                business entity registered or reserved with the state. The name
                                may not include language that states or implies that the
                                corporation is organized for some purpose other than one
                                permitted by state law or than stated in its articles of
                                incorporation.
                            </Paragraph>
                            <Paragraph big>
                                The name must also include the words “incorporated,”
                                “corporation,” “limited,” or “company,” or an abbreviation of
                                one of those terms. Banking businesses, however, may use the
                                word “bank” and are not required to use these words or
                                abbreviations.
                            </Paragraph>
                            <Paragraph big style={{marginBottom: "32px"}}>
                                Corporate names can be reserved with the state for $30 for up to
                                120 days.Corporate names can be reserved with the state for $30
                                for up to 120 days.
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
                                Actually getting your new corporation authorized to conduct
                                business in Nebraska requires filing articles of incorporation
                                with the Corporation Bureau of the Nebraska Secretary of State’s
                                office. The articles must be delivered to the state by one or
                                more incorporators, who may be either any natural person of
                                legal age or a business entity.
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
                                Nebraska requires that your shares have a stated par value. Most
                                incorporators make sure that the capital value of their
                                authorized shares (number of shares multiplied by par value) is
                                $10,000 or less in order to pay the minimum filing fee. If you
                                want to authorize more than one class of shares, you must list
                                the designation of each class, the number of shares in each
                                class, a statement of the par value of the shares in each class,
                                and the rights and restrictions associated with each class.
                            </Paragraph>
                            <Paragraph big>
                                There is a $5 per page filing fee plus a $60 minimum capital
                                stock fee if your corporation’s capital stock does not exceed
                                $10,000, for a minimum filing fee of $65 for one-page articles.
                                Your corporation’s capital stock is the number of shares
                                authorized in your articles multiplied by the par value of these
                                shares.
                            </Paragraph>
                            <Colorbox
                                color={color.orange3}
                                content={articlesOfIncorporation.box3}
                                dotsColor={color.orange1}
                                style={{marginBottom: "48px"}}
                            />
                            <Paragraph big>
                                Nebraska law requires publication of a notice of incorporation
                                for three successive weeks in a general circulation newspaper in
                                the county where the corporation’s principal office is located,
                                and proof of publication then submitted to the Secretary of
                                State.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Registered Agent and Office
                            </Heading>
                            <Paragraph big>
                                Nebraska corporations must have a registered in-state agent-the
                                person or office designated to receive official state
                                administrative and legal correspondence on behalf of the
                                corporation. The registered agent must have a business office
                                that is the same as the registered office and must be either an
                                individual state resident or a corporation authorized to conduct
                                business in the Cornhusker State.
                            </Paragraph>
                            <Paragraph big>
                                The registered office may be the same as any of the
                                corporation’s places of business.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Bylaws
                            </Heading>
                            <Paragraph big>
                                The incorporators or board of directors should adopt the
                                corporation’s bylaws at their first meeting, insuring that there
                                is no conflict with the corporation’s articles of incorporation
                                or state law. A corporation is required to keep its bylaws
                                available at its primary executive office, but it is not
                                required to file them with the state. They should also keep them
                                updated as time goes on.
                            </Paragraph>
                            <Paragraph
                                big
                                style={{
                                    fontFamily: "Avenir",
                                    fontWeight: "900",
                                    color: "#1e1e1e",
                                }}
                            >
                                Bylaws set forth the corporation’s basic operating principles
                                from both the managerial and legal perspectives, and should
                                include (as a minimum):
                            </Paragraph>

                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    What authority directors have, how many there are, and how
                                    long they serve
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    Duties and responsibilities of officers and how long they
                                    serve
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    How consensus on major decisions is reached, both with and
                                    without meetings
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    How, when, and where shareholders’ and directors’ meetings are
                                    held
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    How the corporation’s stock is issued
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    Requirements for publishing annual financial information to
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
                                Officers of the company must be either listed in the bylaws or
                                elected by the board. A duly appointed officer may appoint one
                                or more officers or assistant officers if authorized by the
                                bylaws or the board of directors. At least one officer must
                                authenticate the corporation’s records, as well as prepare the
                                minutes of directors’ and shareholders meetings. An officer may
                                hold more than one office in the corporation, unless otherwise
                                prohibited by law, the corporation’s articles of incorporation,
                                or the bylaws.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Requirement Reports
                            </Heading>
                            <Paragraph big style={{marginBottom: "48px"}}>
                                Nebraska corporations must file a biennial (every two years)
                                report with the Nebraska Secretary of State by March 1 of every
                                even-numbered year.
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
                                The report must be current as of January 1 of the filing year
                                and must include:
                            </Paragraph>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The name of the corporation
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The street address of the corporation’s registered office in
                                    Nebraska
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The name of the corporation’s registered agent there
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The street address of the corporation’s principal office
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The names and street addresses of the corporation’s directors
                                    and principal officers (president, secretary, and treasurer)
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    A brief description of the nature of the corporation’s
                                    business
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The amount of paid-up capital stock
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "16px"}}>
                                <Paragraph bottomMargin={0}>
                                    Any changes in the preceding information since the last
                                    biennial report
                                </Paragraph>
                            </TextBoxed>
                            <Paragraph big>
                                The corporation must provide its shareholders an annual
                                financial statement within 120 days after the close of each
                                fiscal year. These statements must include a year-end balance
                                sheet, an income statement for that year, and a statement of
                                changes in shareholders’ equity for that year (unless this
                                information is stated elsewhere in the financial statements).
                            </Paragraph>
                            <Paragraph big>
                                The corporation must also report in writing any expenses
                                advanced to a director, as well as any issued or authorized
                                promissory notes or promises to render services in the future,
                                with or before notice of the next shareholders’ meeting.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Taxes
                            </Heading>
                            <Paragraph big>
                                Nebraska imposes an annual corporation license tax, for which
                                the minimum payment is $50.
                            </Paragraph>
                            <Paragraph big>
                                Additionally, “S corporation” status is recognized by the State
                                of Nebraska. A “subchapter S” corporation (frequently referred
                                to as an “S corp”) is treated as a pass-through entity for tax
                                purposes in the same way as a sole proprietorship or
                                partnership. The S corp does not file a tax return on its own
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

export default NebraskaCorporation;
