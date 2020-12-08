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
} from "../static/learning-center-entity/idaho-corporation";
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

const IdahoCorporation = () => {
  const [dataApi, setDataApi] = React.useState({});
  const [
    filingTimeAndRequirementHeader,
    setFilingTimeAndRequirementHeader,
  ] = React.useState("");

  React.useEffect(() => {
    getFullPricesAndFilings("Idaho", "Corporation").then((data) => {
      setDataApi(data);
      setFilingTimeAndRequirementHeader(
        `Annual ${data.prices.state} Filing Requirements`
      );
    });
  }, []);

  return (
    <Layout>
      <SEO
        title="Form a Corporation or LLC in Idaho Today | Incfile"
        description="Are you incorporating in Idaho? Learn everything you need to know about choosing a business name, filing times and prices, taxation, bylaws and more."
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

        <ReactTabs content={tabs}>
          <TabPanel>
            <PanelWrapper>
              <Heading size={3} template={3} style={{ marginBottom: "24px" }}>
                Choosing a Corporation Name
              </Heading>
              <Paragraph big>
                Your new corporation’s business name must be distinguishable
                from that of any other Idaho business entity registered or
                reserved with the state. The name may not include language that
                states or implies that the corporation is organized for some
                purpose other than one permitted by state law or than stated in
                its articles of incorporation. The fee for registering a
                business name with the state is $25.
              </Paragraph>
              <Paragraph big>
                The name must also include the words “incorporated,”
                “corporation,” “limited,” or “company,” or an abbreviation of
                one of those terms. However, if the word “company” or its
                abbreviation is used, it cannot be immediately preceded by the
                word “and” or by an abbreviation of or symbol representing the
                word “and.”
              </Paragraph>
              <Paragraph big style={{ marginBottom: "32px" }}>
                An available corporate name can be reserved with the
                Corporations Division of the Secretary of State’s office state
                for a nonrenewable four-month period for $20.
              </Paragraph>
              <LightBoxVideo
                thumbnailVideo="what-is-a-corporation-8899"
                videoID="oYZShvmf9eQ"
              />
            </PanelWrapper>
          </TabPanel>
          <TabPanel>
            <PanelWrapper>
              <Heading size={3} template={3} style={{ marginBottom: "24px" }}>
                Articles of Incorporation
              </Heading>
              <Paragraph big>
                Idaho state law requires that articles of incorporation are
                filed with the Idaho Secretary of State by one or more
                incorporators, with the following requirements:
              </Paragraph>

              <Colorbox
                color={color.blue3}
                content={articlesOfIncorporation.box1}
                dotsColor={color.blue1}
                style={{ marginBottom: "65px" }}
              />
              <Paragraph big>
                The filing fee is $100. If the articles are not typed or if
                attachments are included, the filing fee is $120.
              </Paragraph>
              <Paragraph big>
                Some other items that aren’t required-but which may be included
                in the articles of incorporation-are:
              </Paragraph>

              <Colorbox
                color={color.orange3}
                content={articlesOfIncorporation.box2}
                dotsColor={color.orange1}
                style={{ marginBottom: "48px" }}
              />
            </PanelWrapper>
          </TabPanel>
          <TabPanel>
            <PanelWrapper>
              <Heading size={3} template={3} style={{ marginBottom: "24px" }}>
                Registered Agent and Office
              </Heading>
              <Paragraph big>
                Idaho corporations must have a registered in-state agent-either
                a natural person who is an Idaho resident or a corporation
                authorized to conduct business in the Gem State. The registered
                agent must have a business office that is the same as the
                registered office.
              </Paragraph>
            </PanelWrapper>
          </TabPanel>
          <TabPanel>
            <PanelWrapper>
              <Heading size={3} template={3} style={{ marginBottom: "24px" }}>
                Bylaws
              </Heading>
              <Paragraph big>
                A corporation is required to keep its bylaws available at its
                primary executive office, but it is not required to file them
                with the state. The incorporators or board of directors should
                adopt the corporation’s bylaws at their first meeting, insuring
                that there is no conflict with the corporation’s articles of
                incorporation. They should also keep them updated as time goes
                on.
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

              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  What authority directors have, how many there are, and how
                  long they serve
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  Duties and responsibilities of officers and how long they
                  serve
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  How consensus on major decisions is reached, both with and
                  without meetings
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  How, when, and where shareholders’ and directors’ meetings are
                  held
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  How the corporation’s stock is issued
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  Requirements for publishing annual financial information to
                  shareholders
                </Paragraph>
              </TextBoxed>
            </PanelWrapper>
          </TabPanel>
          <TabPanel>
            <PanelWrapper>
              <Heading size={3} template={3} style={{ marginBottom: "24px" }}>
                Directors
              </Heading>
              <Paragraph big>
                Officers of the company must be either listed in the bylaws or
                elected by the board. At least one officer must authenticate the
                corporation’s records, as well as prepare the minutes of
                directors’ and shareholders meetings. Any officer may hold more
                than one office in the corporation, unless otherwise prohibited
                by law or the corporation’s articles of incorporation or bylaws.
              </Paragraph>
              <Paragraph big>
                The board must also report certain information about director
                indemnification and expenses and promissory note issuance to all
                shareholders with or before notice of the next shareholders’
                meeting.
              </Paragraph>
            </PanelWrapper>
          </TabPanel>
          <TabPanel>
            <PanelWrapper>
              <Heading size={3} template={3} style={{ marginBottom: "24px" }}>
                Requirement Reports
              </Heading>
              <Paragraph
                big
                style={{
                  marginBottom: "24px",
                  fontFamily: "Avenir",
                  color: "#757575",
                }}
              >
                Idaho corporations must file a report with the Idaho Secretary
                of State each year (except for the year of incorporation) that
                includes:
              </Paragraph>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The corporation’s name and its state or country of
                  incorporation
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The address of its registered in-state office and the name of
                  its registered agent at that office
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The address to which officers’ correspondence should be mailed
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The names and business addresses of the directors, president,
                  and secretary
                </Paragraph>
              </TextBoxed>
            </PanelWrapper>
          </TabPanel>
          <TabPanel>
            <PanelWrapper>
              <Heading size={3} template={3} style={{ marginBottom: "24px" }}>
                Taxes
              </Heading>
              <Paragraph big>
                Idaho’s business income tax rate is 7.6 percent of taxable Idaho
                income. The state imposes a minimum tax of $20 on all companies.
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

      <Rocket urlParams="?entityType=CCorporation&entityState=ID" />

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

export default IdahoCorporation;
