import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import parse from "html-react-parser";
import {
  articlesOfIncorporation,
  questions,
  service,
  tabs,
  top,
} from "../static/learning-center-entity/michigan-corporation";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import TabsOvalOneSvg from "../images/ovals/bottom-left-transparent-pink.inline.svg";
import OvalSvg2 from "../images/ovals/top-right-transparent-blue2.inline.svg";
import OvalSvg3 from "../images/ovals/bottom-left-transparent-blue1.inline.svg";
import OvalSvg4 from "../images/ovals/top-right-transparent-orange3.inline.svg";
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
import Rocket from "../atomic/sections/learning-center-entity/alaska-corporation/rocket";
import Colorbox from "../atomic/molecules/blocks/left-icon-block-colored";
import FilingTimeAndPriceBox from "../atomic/state-corporation/filing-time-and-price-box";
import ComplianceRequirementBox from "../atomic/state-corporation/compliance-requirement-box";
import { getFullPricesAndFilings } from "../api/Api";
import ReactTabs from "../atomic/partials/ReactTabs";
import { TabPanel } from "react-tabs";
import { Helmet } from "react-helmet";

const MichiganCorporation = () => {
  const [dataApi, setDataApi] = React.useState({});
  const [
    filingTimeAndRequirementHeader,
    setFilingTimeAndRequirementHeader,
  ] = React.useState("");

  React.useEffect(() => {
    getFullPricesAndFilings("Michigan", "Corporation").then((data) => {
      setDataApi(data);
      setFilingTimeAndRequirementHeader(
        `Learn more about incorporating in ${data.prices.state}`
      );
    });
  }, []);

  return (
    <Layout>
      <SEO
        title="Michigan Corporation | How to Incorporate in Michigan | Learn About Incorporating in Michigan"
        description="Incorporating in Michigan is easy with Incfile. Find filing times and fees, how to select a name and structure your business, and so much more."
      />
      <Top
        imageName="mr-bulb-corporation-california-8302"
        imageAlt="corporation in michigan"
        ovalColor="purple-2"
        headlineWidth="560"
      >
        <h1>{top.header}</h1>
        <p>{top.text}</p>
        <Buttonsbox>
          <Button
            externalLink
            content={top.buttons[0]}
            theme="primary56"
            arrow
          />
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

        <ReactTabs content={tabs}>
          <TabPanel>
            <PanelWrapper>
              <Heading
                size={2}
                template={3}
                left
                style={{ marginBottom: "24px" }}
              >
                Choosing a Corporation Name
              </Heading>
              <Paragraph big mixed>
                {parse(`Selecting the name of your new Michigan corporation is one of the first official steps toward actually conducting business in the Wolverine State. The
<a href="/michigan-entity-search/">business name</a> you choose must be distinguishable from other business entities registered or reserved in Michigan (with some exceptions).`)}
              </Paragraph>
              <Paragraph big mixed>
                {parse(`Your new <a href="/michigan-entity-search/">business’ name</a> may not state or imply that it is organized for any other purpose that what’s permitted by state law and laid out in its articles
of incorporation. The name also cannot contain a word, phrase, abbreviation, or a derivative of a word or phrase whose use is forbidden or restricted by
state law. The name must include one of the following terms or its abbreviation: “Incorporated,” “Corporation,” “Company,” or “Limited.”`)}
              </Paragraph>
              <Paragraph big>
                Available corporate names may be reserved for up to 180 days for
                a $25 fee.
              </Paragraph>
              <Paragraph big>
                A Michigan corporation may also conduct business under an
                assumed name or DBA (“doing business as” name) that complies
                with the state’s corporate naming rules. Doing so requires
                filing a certificate of assumed name with the state secretary of
                state (along with the $10 fee), and must be periodically
                renewed.
              </Paragraph>
              <Paragraph big style={{ marginBottom: "32px" }}>
                The filing fee includes a $10 nonrefundable fee plus a $50
                organization tax for the first 60,000 shares authorized in the
                new corporation’s articles of incorporation. If more shares are
                authorized, the organization portion of the fee increases in a
                graduated manner. For each additional 20,000 shares (or a
                portion thereof), the organization tax is $30 more. The maximum
                organization tax for the first 10 million shares is $5,000. Most
                incorporators simply authorize 60,000 shares and pay the minimum
                filing fee.
              </Paragraph>
              <LightBoxVideo
                thumbnailVideo="what-is-a-corporation-8899"
                videoID="oYZShvmf9eQ"
              />
            </PanelWrapper>
          </TabPanel>
          <TabPanel>
            <PanelWrapper>
              <Heading
                size={2}
                template={3}
                left
                style={{ marginBottom: "24px" }}
              >
                Articles of Incorporation
              </Heading>
              <Paragraph big>
                In accordance with the Michigan Business Corporation Act
                contained in Chapter 450 (Corporations) of the Michigan Compiled
                Laws, corporations must file articles of incorporation with the
                Michigan Department of Labor and Economic Growth, Bureau of
                Commercial Services, Corporation Division, before conducting
                business in the state.
              </Paragraph>
              <Paragraph big>
                The articles must be delivered by at least one of the
                incorporators, accompanied by the filing fee of $60 minimum,
                depending on the number of shares authorized. There must be at
                least one incorporator, who must be either a natural person of
                adult age (18) or a corporation. The incorporator does not have
                to be a director, officer, or shareholder of the corporation.
              </Paragraph>
              <Paragraph big>
                The following information must be included in the articles of
                incorporation:
              </Paragraph>

              <Colorbox
                color={color.blue3}
                content={articlesOfIncorporation.box1}
                dotsColor={color.blue1}
                style={{ marginBottom: "65px" }}
              />

              <Paragraph big>
                Michigan law allows a corporation to be formed for any lawful
                business activity. Althought it is required to state the
                business purpose, it is sufficient to state that the corporation
                may engage in any activity included in the purposes for which
                corporations may be legally formed under the Michigan Business
                Corporation Act. State law may have additional requirements for
                corporations that are formed for education-related purposes.
              </Paragraph>
              <Paragraph big>
                Michigan law also allows additional provisions to be included in
                the articles for managing the business and regulating the
                affairs of the corporation, as well as regulating the
                corporation’s powers, its board of directors, and shareholders
              </Paragraph>
            </PanelWrapper>
          </TabPanel>
          <TabPanel>
            <PanelWrapper>
              <Heading
                size={2}
                template={3}
                left
                style={{ marginBottom: "24px" }}
              >
                Registered Agent and Office
              </Heading>
              <Paragraph big>
                All corporations authorized to conduct business in Michigan must
                have and maintain both a registered office (which may be the
                same as its place of business) and a Registered Agent in the
                state-someone designated to receive official state
                correspondence, including notice if the corporation is “served”
                with a lawsuit.
              </Paragraph>
              <Paragraph big>The Registered Agent must be either:</Paragraph>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  An individual resident in Michigan whose business office or
                  residence is the same as the registered office
                </Paragraph>
              </TextBoxed>
              <TextBoxed>
                <Paragraph bottomMargin={0}>
                  A domestic corporation, or
                </Paragraph>
              </TextBoxed>
              <TextBoxed>
                <Paragraph bottomMargin={0}>
                  A foreign corporation authorized to transact business in
                  Michigan and having a business office that is the same as the
                  registered office
                </Paragraph>
              </TextBoxed>
            </PanelWrapper>
          </TabPanel>
          <TabPanel>
            <PanelWrapper>
              <Heading
                size={2}
                template={3}
                left
                style={{ marginBottom: "24px" }}
              >
                Bylaws
              </Heading>
              <Paragraph big>
                Bylaws describe the corporation’s basic managerial and legal
                operating principles. The corporation’s initial bylaws must be
                adopted by its incorporators, its shareholders, or its board of
                directors.
              </Paragraph>
              <Paragraph big>
                A Michigan corporation should keep a copy of its bylaws at its
                main executive office, but is not required to file them with the
                state. The bylaws may contain any provision for managing the
                business and regulating the affairs of the corporation that’s
                not in conflict with law or the articles of incorporation.
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
                  fontFamily: "Engram",
                  fontWeight: "900",
                  color: "#1e1e1e",
                }}
              >
                Bylaws normally address:
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
          </TabPanel>
          <TabPanel>
            <PanelWrapper>
              <Heading
                size={2}
                template={3}
                left
                style={{ marginBottom: "24px" }}
              >
                Directors
              </Heading>
              <Paragraph big>
                Officers must be named in the bylaws or elected by the board of
                directors. As a minimum, there must be a president, a secretary,
                and a treasurer; if desired, the corporation may have a chairman
                of the board, one or more vice presidents, and other officers as
                set forth in the bylaws or as decided by the board of directors
              </Paragraph>
              <Paragraph big>
                Officers may appoint other officers in compliance with the
                bylaws. If the articles of incorporation and the bylaws allows
                it, an officer may hold multiple offices in the corporation, but
                they may not sign any documents in more than one capacity.
              </Paragraph>
              <Paragraph big>
                At least one officer should be designated as responsible for
                preparing minutes of the directors’ and shareholders’ meetings,
                and for maintaining and authenticating corporate records.
              </Paragraph>
            </PanelWrapper>
          </TabPanel>
          <TabPanel>
            <PanelWrapper>
              <Heading
                size={2}
                template={3}
                left
                style={{ marginBottom: "24px" }}
              >
                Requirement Reports
              </Heading>
              <Paragraph big style={{ marginBottom: "24px" }}>
                A report must be filed with the Michigan Secretary of State no
                later than May 15 of each year (except for the first year of
                incorporation) indicating:
              </Paragraph>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>The corporation’s name</Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The registered in-state office address
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The name of the corporation’s resident agent at that office in
                  this state
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The general nature of the business in which the corporation is
                  engaged
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The names and addresses of the directors, president,
                  secretary, and treasurer
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  For foreign corporations authorized to transact business in
                  the state, the total number of authorized shares and the most
                  recent percentage used in computation of the tax required by
                  the single business tax act
                </Paragraph>
              </TextBoxed>
              <Paragraph big>
                Within four months of the end of the corporation’s fiscal year,
                it must also send a financial report to its shareholders with
                its end-of-year balance sheet, state of income, and any other
                information required by state law.
              </Paragraph>
            </PanelWrapper>
          </TabPanel>
          <TabPanel>
            <PanelWrapper>
              <Heading
                size={2}
                template={3}
                left
                style={{ marginBottom: "24px" }}
              >
                Taxes
              </Heading>
              <Paragraph big>
                Michigan imposes a Single Business Tax (SBT) on both corporate
                and noncorporate business income as the only general business
                tax levied by the state. The SBT replaced net income-based
                taxation with value-added taxation, which levies taxes on a
                “services consumed” or “benefits received” basis. It was enacted
                in 1976 to replace seven business taxes, including the corporate
                income tax. In 1999, the governor signed legislation to phase
                out the SBT by 2022.
              </Paragraph>
            </PanelWrapper>
          </TabPanel>
        </ReactTabs>
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
            videoID="372490609"
            vimeo
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

      <Rocket urlParams="?entityType=CCorporation&entityState=MI" />

      <Helmet>
        <script type="application/ld+json">
          {`{
                        "@context": "http://schema.org",
                        "@type": "VideoObject",
                        "name": "What is a Corporation? by Incfile",
                        "description": "What is a corporation and how does it work? One of the most important decisions you'll make when starting a business is its legal structure. A popular option is a “corporation“—but what does this mean for business owners?   A corporation is its own legal entity separate from the owners. It has nearly all the legal rights of an individual: It can hire employees, own assets, enter into contracts, sue and be sued, loan and borrow money, and pay taxes. But since the corporation exists as a separate entity, it limits the liability of its owners. That means shareholders have the right to participate in profits, but they’re not held personally liable for the company’s debts. And since a corporation isn’t linked to a single person, it doesn’t dissolve when its owners or shareholders change or die, so liability protection is passed on to the next in line.  The Three Main Types of Corporations:  - C Corporations - S Corporations - Non-profits   Learn more about the three main types of corporations by visiting these links below:   - What is an S Corporation? https://www.incfile.com/what-is-s-corporation/ - What is a C Corporation? https://www.incfile.com/what-is-c-corporation/ - What is a Nonprofit? https://www.incfile.com/what-is-non-profit-corporation/",
                        "thumbnailUrl": "https://i.ytimg.com/vi/oYZShvmf9eQ/default.jpg",
                        "uploadDate": "2020-09-07T17:00:19Z",
                        "duration": "PT1M41S",
                        "embedUrl": "https://www.youtube.com/embed/oYZShvmf9eQ",
                        "interactionCount": "74"
                    }`}
        </script>
      </Helmet>
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

export default MichiganCorporation;
