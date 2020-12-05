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
} from "../static/learning-center-entity/minnesota-corporation";
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

const MinnesotaCorporation = () => {
    const [dataApi, setDataApi] = React.useState({});
    const [
        filingTimeAndRequirementHeader,
        setFilingTimeAndRequirementHeader,
    ] = React.useState("");

    React.useEffect(() => {
        getFullPricesAndFilings("Minnesota", "Corporation").then((data) => {
            setDataApi(data);
            setFilingTimeAndRequirementHeader(
                `Annual ${data.prices.state} Filing Requirements`
            );
        });
    }, []);

    return (
        <Layout>
            <SEO
                title="Form a Corporation or LLC in Minnesota Today | Incfile"
                description="Learn how to form a corporation in Minnesota. Find FAQs, filing schedules and fees, operating agreements and much more."
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
                                Selecting the name of your new Minnesota corporation is one of
                                the first official steps toward actually conducting business in
                                the North Star State. The business name you choose must be
                                distinguishable from the names of other business entities
                                registered or reserved in Minnesota (with some exceptions).
                            </Paragraph>
                            <Paragraph big>
                                Your new business’ name may not state or imply that it is
                                organized for any other purpose that what’s permitted by state
                                law and laid out in its articles of incorporation, and it must
                                be written in English letters or characters. The name must
                                include one of the following terms or its abbreviation:
                                “Incorporated,” “Corporation,” “Company,” or “Limited.” The word
                                “Company” may not be preceded by the word “and” or a symbol
                                denoting it, such as “&.”
                            </Paragraph>
                            <Paragraph big style={{marginBottom: "32px"}}>
                                Available corporate names may be reserved for up to 12 months
                                for a $35 fee.
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
                                In accordance with the Minnesota Business Corporation Act in
                                Chapter 302A of the Minnesota Statutes, corporations must file
                                articles of incorporation with the Business Services Division of
                                the Minnesota Secretary of State’s office.
                            </Paragraph>
                            <Paragraph big>
                                The articles must be delivered by at least one of the
                                incorporators, accompanied by the filing fee of $135. There must
                                be at least one incorporator, who must be a natural person of
                                adult age (18). The incorporator does not have to be a director,
                                officer, or shareholder of the corporation.
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
                                The state filing office website offers the option of “express”
                                (one-day) filing of articles for an additional $10 fee-this
                                service consists of sending your incorporation information in an
                                email to the filing office instead of preparing and mailing an
                                articles form. It should be noted, though, that this service is
                                only available to subscribers to the state’s direct access
                                account, which costs $75 annually.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Registered Agent and Office
                            </Heading>
                            <Paragraph big>
                                A Minnesota corporation may-but is not required to-designate or
                                appoint a registered agent in its articles of organization. The
                                registered agent may be a natural person residing in Minnesota
                                or a business entity authorized to operate in Minnesota.
                            </Paragraph>
                            <Paragraph big>
                                The state does, however, require that every corporation maintain
                                a registered office in the state. The registered agent must have
                                a business office that is the same as the registered office.
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
                                operating principles. Although state law does not absolutely
                                require a corporation to have bylaws, it’s a critical document
                                that sets forth how the management of the business will be
                                regulated and conducted. The corporation’s initial bylaws should
                                be adopted by its incorporators, its shareholders, or its board
                                of directors, and maintained at its main executive office;
                                again, it is not required to file them with the state. The
                                bylaws may contain any provision for managing the business and
                                regulating the affairs of the corporation that’s not in conflict
                                with law or the articles of incorporation.
                            </Paragraph>
                            <Paragraph big>
                                The board of directors or the shareholders may adopt, amend, or
                                repeal bylaws, unless the articles of incorporation or the
                                bylaws reserve this right to the shareholders. At its initial
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
                                Officers may be named in the bylaws or elected by the board of
                                directors; there must be at least one officer. Officers may
                                appoint other officers in compliance with the bylaws. There must
                                be at least a chief executive officer and a chief financial
                                officer, each of whom must execute specific state-required
                                duties. An officer may hold more than one office in the
                                corporation, and may sign a document in more than one capacity
                                only if the document indicates each capacity in which the
                                officer is signing.
                            </Paragraph>
                        </PanelWrapper>
                    </TabPanel>
                    <TabPanel>
                        <PanelWrapper>
                            <Heading size={3} style={{marginBottom: "24px"}}>
                                Requirement Reports
                            </Heading>
                            <Paragraph big style={{marginBottom: "48px"}}>
                                Your new Minnesota corporation must file an annual registration
                                form with the Minnesota Secretary of State each year by December
                                31, except for the first calendar year of incorporation.
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
                                    The corporation’s name and its state of incorporation
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The address of its registered office
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The name of its registered agent at that office
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The address of its principal executive office (if different
                                    from the registered office address)
                                </Paragraph>
                            </TextBoxed>
                            <TextBoxed style={{marginBottom: "8px"}}>
                                <Paragraph bottomMargin={0}>
                                    The name and business address of the officer or person
                                    exercising the principal functions of the corporation’s chief
                                    executive officer
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
                                Minnesota’s corporate tax structure consists of a flat rate of
                                9.8 percent on all corporate income.
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

export default MinnesotaCorporation;
