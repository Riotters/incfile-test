import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import {
  info,
  questions,
  service,
  top,
  articlesOfIncorporation,
} from "../static/learning-center-entity/indiana-corporation";
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
import FilingTimeAndPriceBox from "../atomic/state-corporation/filing-time-and-price-box";
import ComplianceRequirementBox from "../atomic/state-corporation/compliance-requirement-box";
import { getFullPricesAndFilings } from "../api/Api";

const AlaskaCorporation = () => {
  const [dataApi, setDataApi] = React.useState({});
  const [
    filingTimeAndRequirementHeader,
    setFilingTimeAndRequirementHeader,
  ] = React.useState("");

  React.useEffect(() => {
    getFullPricesAndFilings("Indiana", "Corporation").then((data) => {
      setDataApi(data);
      setFilingTimeAndRequirementHeader(
        `Annual ${data.prices.state} Filing Requirements`
      );
    });
  }, []);

  return (
    <Layout>
      <SEO
        title="Form a Corporation or LLC in Indiana Today | Incfile"
        description="Incorporating in Indiana is a snap. Find everything from filing fees and schedules, operating agreements, articles of incorporation and more."
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
                Choosing a name for your new Indiana corporation is one of the
                first official steps toward actually conducting business in the
                Hoosier State. The business name you choose must be able to be
                readily distinguished from all other registered and reserved
                Indiana business entities.
              </Paragraph>
              <Paragraph big>
                Your new business’ name must end with “Incorporated,”
                “Corporation,” “Company,” or “Limited,” or the abbreviation
                “Corp.,” “Inc.,” “Co.,” or “Ltd.” It may not contain language
                stating or implying that the corporation is organized for a
                purpose other than that permitted by state law and its own
                articles of incorporation.
              </Paragraph>
              <Paragraph big>
                The name is allowed to include the word “bank” or “banks” for a
                bank holding company, so long as it does not imply that it
                offers the same services as a bank or trust company.
              </Paragraph>
              <Paragraph big style={{ marginBottom: "32px" }}>
                Available corporate names may be reserved for up to 120 days for
                $20.
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
            <PanelWrapper>
              <Heading size={3} style={{ marginBottom: "24px" }}>
                Articles of Incorporation
              </Heading>
              <Paragraph big>
                New Indiana corporations must file articles of incorporation
                with the Indiana Secretary of State’s office before they can
                start conducting business as a corporation. The articles must be
                delivered by at least one of the incorporators, accompanied by
                the filing fee of $90. The incorporator does not have to be a
                director, officer, or shareholder of the corporation.
              </Paragraph>

              <Colorbox
                color={color.blue3}
                content={articlesOfIncorporation.box1}
                dotsColor={color.blue1}
                style={{ marginBottom: "65px" }}
              />

              <Paragraph big>
                Indiana law allows a corporation to be formed for any lawful
                business activity. There is no requirement for a specific
                corporate purpose to be stated in the articles of incorporation.
              </Paragraph>
              <Paragraph big>
                Indiana law also allows (but does not require) optional items to
                be included in the articles of incorporation for those
                corporations who wish to formally specify additional
                information.
              </Paragraph>

              <Colorbox
                color={color.orange3}
                content={articlesOfIncorporation.box2}
                dotsColor={color.orange1}
                style={{ marginBottom: "48px" }}
              />

              <Paragraph big>
                Since Indiana law does not use the concept of par value for
                stocks, you do not need to state a par value for your shares.
                The filing fee is a flat fee, rather than being based on your
                authorized shares, so you can authorize as many as desired.
              </Paragraph>
            </PanelWrapper>
            <PanelWrapper>
              <Heading size={3} style={{ marginBottom: "24px" }}>
                Registered Agent and Office
              </Heading>
              <Paragraph big>
                Indiana corporations must have a registered agent in the
                state-someone officially designated to receive state legal and
                administrative correspondence. A corporation’s registered agent
                may be an individual who resides in Indiana, or a business
                entity authorized to conduct business in the state. In either
                circumstance, the registered agent’s business office must be the
                same as the corporation’s registered office.
              </Paragraph>
            </PanelWrapper>
            <PanelWrapper>
              <Heading size={3} style={{ marginBottom: "24px" }}>
                Bylaws
              </Heading>
              <Paragraph big>
                Bylaws describe the corporation’s basic managerial and legal
                operating principles. An Indiana corporation must keep a copy of
                its bylaws at its main executive office, but is not required to
                file them with the state. At its initial meeting, the board of
                directors should adopt corporate bylaws, and then keep them
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
                The board of directors of a corporation may adopt, amend, or
                repeal bylaws, unless the articles reserve this right to the
                shareholders. Bylaws normally address:
              </Paragraph>

              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  Shareholders and directors meetings
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The authority, number, and tenure of directors
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>Voting procedures</Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The duties, responsibilities, and tenure of officers
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>How stock is issued</Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  How and when annual financial information is provided to
                  shareholders
                </Paragraph>
              </TextBoxed>
            </PanelWrapper>
            <PanelWrapper>
              <Heading size={3} style={{ marginBottom: "24px" }}>
                Directors
              </Heading>
              <Paragraph big>
                Officers are appointed or elected by the board in compliance
                with the corporation’s bylaws, or elected by shareholders in
                compliance with the articles of incorporation. One officer has
                the responsibility of preparing minutes of director and
                shareholder meetings, and for authenticating corporate records.
              </Paragraph>
              <Paragraph big>
                It is permissible for an officer to hold more than one office in
                the corporation unless otherwise prohibited by law or by the
                corporation’s bylaws. One person may hold all or any combination
                of offices when all of the issued and outstanding stock of the
                corporation is owned by this same person.
              </Paragraph>
            </PanelWrapper>
            <PanelWrapper>
              <Heading size={3} style={{ marginBottom: "24px" }}>
                Requirement Reports
              </Heading>
              <Paragraph big style={{ marginBottom: "48px" }}>
                Indiana LLCs must file a biennial (every two years) report with
                the Secretary of State. The first biennial report must be
                delivered in the anniversary month of the corporation’s
                organization in its second year. Subsequent biennial reports
                must be delivered to the secretary of state during the same
                month every two calendar years thereafter.
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
                Biennial reports may be accepted up to two months early.
              </Paragraph>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The corporation’s name and the state or country of original
                  incorporation
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The street address of the corporation’s registered office
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The name of its registered agent at that in-state office
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The address of the corporation’s principal office
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The names and addresses of the corporation’s directors,
                  secretary, and highest executive officer
                </Paragraph>
              </TextBoxed>
            </PanelWrapper>
            <Paragraph big>
              The board must also report certain information about director
              indemnification and expenses, as well as future promises or
              promissory note issuance, to all shareholders with or before
              notice of the next shareholders’ meeting.
            </Paragraph>
            <PanelWrapper>
              <Heading size={3} style={{ marginBottom: "24px" }}>
                Taxes
              </Heading>
              <Paragraph big>
                Indiana’s corporate tax structure consists of a flat rate of 8.5
                percent on all corporate income. Among states levying corporate
                income taxes, Indiana’s top rate ranks 13th highest nationally.
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
        <HeadingCenter
          headline={service.header}
          textWidth="590"
          text={service.text}
          bottomMargin="48"
          bottomMarginLG="80"
        />
        <ContentCenter style={{ marginBottom: "149px" }}>
          <Curve top="-115" left="80" rotate={180} color={color.blue2}>
            <Curve2SVG />
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
          <Accordion
            content={questions}
            curve
            curveColor={color.blue1}
            curveLeft="-15px"
          />
        </ContentCenter>
        <ContentCenter style={{ marginBottom: "48px" }}>
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
    margin-bottom: 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

export default AlaskaCorporation;
