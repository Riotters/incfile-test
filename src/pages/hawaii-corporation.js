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
} from "../static/learning-center-entity/hawaii-corporation";
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
    getFullPricesAndFilings("Hawaii", "Corporation").then((data) => {
      setDataApi(data);
      setFilingTimeAndRequirementHeader(
        `Annual ${data.prices.state} Filing Requirements`
      );
    });
  }, []);

  return (
    <Layout>
      <SEO
        title="Form a Corporation or LLC in Hawai Today | Incfile"
        description="Incorporating in Hawaii is easy. Get access to articles of incorporation requirements, filing times and fees, and answers to FAQs."
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
                Your Hawaii corporation’s name must be different from any other
                authorized business entity on file (registered or reserved) with
                the Hawaii Department of Commerce and Consumer Affairs (DCCA).
                The name also may not state or imply that the corporation is
                organized for some purpose other than that stated in its
                articles of incorporation.
              </Paragraph>
              <Paragraph big>
                Your new corporation’s name has to include the words
                “Corporation,” “Incorporated,” or “Limited,” or the applicable
                abbreviation: “Corp.,” “Inc.,” or “Ltd.”
              </Paragraph>
              <Paragraph big style={{ marginBottom: "32px" }}>
                You can reserve an available corporate name for 120 days for a
                $20 fee.
              </Paragraph>
              <LightBoxVideo
                thumbnailVideo="what-is-a-corporation-8899"
                videoID="oYZShvmf9eQ"
              />
            </PanelWrapper>
            <PanelWrapper>
              <Heading size={3} style={{ marginBottom: "24px" }}>
                Articles of Incorporation
              </Heading>
              <Paragraph big>
                Hawaiian law requires that articles of incorporation be filed
                with the Hawaii DCCA. The fee to file your corporation’s
                articles is $100, plus another $50 if you want expedited one-day
                filing. Certified copies of your articles of incorporation are
                $20 each.
              </Paragraph>
              <Paragraph big>
                Hawaii allows corporations to be formed for any lawful business
                activity; in fact, the business purpose of the new corporation
                does not even have to be listed in the articles.
              </Paragraph>
              <Paragraph big>
                At least one person (usually an initial director or officer)
                must sign the articles as incorporator. The incorporator’s
                primary duty is to deliver the articles of incorporation to the
                Hawaii DCCA.
              </Paragraph>
              <Paragraph big>
                Hawaiian state law doesn’t use the concept of par value, so you
                don’t have to state a par value for your shares in the articles
                of incorporation. The filing fee is a flat amount and is not
                based on your authorized shares, so you can authorize as many
                shares as you desire. Many incorporators authorize common shares
                with equal voting, dividend, and liquidation rights, and no
                special restrictions. If you want to authorize one or more
                special classes of shares, state the name of each class or
                series, the number of shares in each, and the rights and
                restrictions associated with each class or series. A Hawaii
                corporation is exempt from registration under Hawaii’s Uniform
                Securities Act if the number of subscribers is 25 or less.
              </Paragraph>
              <Paragraph big>
                It’s also allowable to integrate other optional provisions into
                the articles of incorporation for those corporations wishing to
                formalize additional criteria, such as special qualifications of
                shareholders, limits on the duration of the corporation’s
                existence, any limits on the liability of a director in specific
                circumstances, and the like.
              </Paragraph>
            </PanelWrapper>
            <PanelWrapper>
              <Heading size={3} style={{ marginBottom: "24px" }}>
                Registered Agent and Office
              </Heading>
              <Paragraph big>
                The articles of incorporation should also include the name and
                address of your corporation’s initial registered agent-the
                person you designate to receive official correspondence (legal
                or administrative) on behalf of your corporation. The registered
                agent must be either an individual who lives in Hawaii and whose
                business office is the same as the registered office, or a
                corporation with a business office that is the same as the
                registered office.
              </Paragraph>
            </PanelWrapper>
            <PanelWrapper>
              <Heading size={3} style={{ marginBottom: "24px" }}>
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

              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  Shareholders’ and directors’ meetings
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The authority, number, and tenure of directors in the board of
                  directors
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

              <Paragraph big>
                Officers of the new corporation can either be listed in the
                bylaws or elected by the board in compliance with those bylaws.
              </Paragraph>
            </PanelWrapper>
            <PanelWrapper>
              <Heading size={3} style={{ marginBottom: "24px" }}>
                Directors
              </Heading>
              <Paragraph big>
                Corporate officers can either be listed in the bylaws or elected
                by the board in compliance with the corporation’s bylaws. A
                corporation must have a chairman of the board or a president (or
                both), a secretary, a chief financial officer, and whatever
                other officers with titles and duties as listed in the bylaws or
                determined by the board.
              </Paragraph>
              <Paragraph big>
                The president, or, if there is no president, the chairman of the
                board, is the general manager and chief executive officer of the
                Hawaii corporation, unless otherwise provided in the articles or
                bylaws. Any number of offices may be held by the same person
                unless the articles or bylaws require otherwise.
              </Paragraph>
            </PanelWrapper>
            <PanelWrapper>
              <Heading size={3} style={{ marginBottom: "24px" }}>
                Requirement Reports
              </Heading>
              <Paragraph big style={{ marginBottom: "48px" }}>
                Your corporation must file an annual report with the DCCA every
                year between January 1 and April 1, or on another date that the
                director may specify. The first report must be filed within this
                period in the year immediately after the calendar year in which
                the company was incorporated.
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
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The corporation’s name and where (state or country) it was
                  incorporated.
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The company’s principal office mailing address, its registered
                  office address in Hawaii, and the name of its registered agent
                  at its registered office in Hawaii.
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The names and business addresses of its directors and
                  officers.
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  A brief description of the nature of its business.
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "32px" }}>
                <Paragraph bottomMargin={0}>
                  If it’s a domestic corporation, the total number of authorized
                  shares, itemized by class and series, and the total number of
                  issued and outstanding shares, itemized by class and series
                  within each class.
                </Paragraph>
              </TextBoxed>
              <Paragraph big style={{ marginBottom: "16px" }}>
                Additionally, the board must send an annual report to all
                shareholders by a filing date based on the date of
                incorporation.
              </Paragraph>
            </PanelWrapper>
            <PanelWrapper>
              <Heading size={3} style={{ marginBottom: "24px" }}>
                Taxes
              </Heading>
              <Paragraph big>
                The corporate tax rate for Hawaii varies based on taxable net
                income.
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
    margin-bottom 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

export default AlaskaCorporation;
