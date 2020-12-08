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
} from "../static/learning-center-entity/montana-corporation";
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

const MontanaCorporation = () => {
  const [dataApi, setDataApi] = React.useState({});
  const [
    filingTimeAndRequirementHeader,
    setFilingTimeAndRequirementHeader,
  ] = React.useState("");

  React.useEffect(() => {
    getFullPricesAndFilings("Montana", "Corporation").then((data) => {
      setDataApi(data);
      setFilingTimeAndRequirementHeader(
        `Annual ${data.prices.state} Filing Requirements`
      );
    });
  }, []);

  return (
    <Layout>
      <SEO
        title="Form a Corporation or LLC in Montana Today | Incfile"
        description="View our guide to incorporating in Montana. Find filing schedules and fees, learn how to select a name, how to structure your business, and much more. "
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
                The name you decide on for your new corporation cannot be the
                same as or deceptively similar to the name of any other Montana
                business entity registered or reserved with the state. The name
                may not include language that states or implies that the
                corporation is organized for some purpose other than one
                permitted by state law or than stated in its articles of
                incorporation.
              </Paragraph>
              <Paragraph big>
                The name must also include the words “incorporated,”
                “corporation,” “limited,” or “company,” an abbreviation of one
                of those terms, or words of a similar meaning in another
                language.
              </Paragraph>
              <Paragraph big style={{ marginBottom: "32px" }}>
                Corporate names can be reserved with the state for $10 for up to
                120 days.
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
                Actually getting your new corporation authorized to conduct
                business in Montana requires filing articles of incorporation
                with the Corporation Bureau of the Montana Secretary of State’s
                office, along with a $70 filing fee. The articles must be
                delivered to the state by one or more incorporators, who may be
                either any natural person of legal age or a business entity. The
                articles must include:
              </Paragraph>

              <Colorbox
                color={color.blue3}
                content={articlesOfIncorporation.box1}
                dotsColor={color.blue1}
                style={{ marginBottom: "65px" }}
              />
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
                Montana corporations must have a registered in-state
                agent-either a natural person who is a resident of Montana or a
                corporation authorized to conduct business in the Big Sky State.
                The registered agent is responsible for receiving official state
                administrative and legal correspondence on behalf of the
                corporation.
              </Paragraph>
              <Paragraph big>
                The registered agent must have a business office that is the
                same as the registered office.
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
                incorporation or state law. They should also keep them updated
                as time goes on.
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
                elected by the board. A duly appointed officer may appoint one
                or more officers or assistant officers if authorized by the
                bylaws or the board of directors. At least one officer must
                authenticate the corporation’s records, as well as prepare the
                minutes of directors’ and shareholders meetings. Any officer may
                hold more than one office in the corporation, unless otherwise
                prohibited by law or the corporation’s articles of incorporation
                or bylaws.
              </Paragraph>
            </PanelWrapper>
          </TabPanel>
          <TabPanel>
            <PanelWrapper>
              <Heading size={3} template={3} style={{ marginBottom: "24px" }}>
                Requirement Reports
              </Heading>
              <Paragraph big style={{ marginBottom: "48px" }}>
                Montana corporations must file a report with the Montana
                Secretary of State each year between January 1 and April 15,
                except for the first calendar year of incorporation.
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
                The report must contain:
              </Paragraph>

              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The corporation’s name and its state of original incorporation
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The mailing address (and street address, if different) of its
                  registered office
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The name of its registered agent there
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The address of the corporation’s principal office
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The names and business addresses of the directors and
                  principal officers
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  A brief description of the nature of the corporation’s
                  business
                </Paragraph>
              </TextBoxed>
              <TextBoxed style={{ marginBottom: "8px" }}>
                <Paragraph bottomMargin={0}>
                  The total number of authorized, issued, and outstanding
                  shares, itemized by class and series
                </Paragraph>
              </TextBoxed>

              <Paragraph big>
                Additionally, the corporation must send its most recent
                financial statements to any shareholder who requests them in
                writing. These statements must show in reasonable detail the
                corporation’s assets and liabilities, as well as the results of
                its operations.
              </Paragraph>
            </PanelWrapper>
          </TabPanel>
          <TabPanel>
            <PanelWrapper>
              <Heading size={3} template={3} style={{ marginBottom: "24px" }}>
                Taxes
              </Heading>
              <Paragraph big>
                Montana imposes an annual corporation license tax, for which the
                minimum payment is $50.
              </Paragraph>
              <Paragraph big>
                Additionally, “S corporation” status is recognized by the State
                of Montana. A “subchapter S” corporation (frequently referred to
                as an “S corp”) is treated as a pass-through entity for tax
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

      <Rocket urlParams="?entityType=CCorporation&entityState=MT" />

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

export default MontanaCorporation;
