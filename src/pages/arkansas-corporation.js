import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import { fillingRequirements, info, packets, questions, service, top, articlesOfIncorporation, corporationName } from "../static/learning-center-entity/arkansas-corporation";
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
import GenericTable from "../atomic/organisms/tables/generic-table";
import TitleWithInfoBox from "../atomic/molecules/blocks/table-title";
import PacketsSection from "../atomic/sections/learning-center-entity/alaska-corporation/packets";
import Accordion from "../atomic/organisms/accordion/accordion";
import Adventages from "../components/adventages";
import Container from "../atomic/container";
import Rocket from "../atomic/sections/learning-center-entity/alaska-corporation/rocket";
import Colorbox from "../atomic/molecules/blocks/left-icon-block-colored";
import CorporationNameIcon from "../images/icons/icon-learning-center-color-business-name-trademark.inline.svg";

const AlaskaCorporation = () => (
  <Layout>
    <SEO title="Form a Corporation in Arkansas." description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
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
            <Paragraph big>
            The name chosen for your corporation must not be the same as or confusingly similar to the name of any other registered or reserved Arkansas business entity, and it may not state or imply that it is organized for some purpose other than permitted by state law or as stated in its articles of incorporation. It must also contain one of the following words or an abbreviation thereof: “Incorporated,” “Corporation,” “Company,” or “Limited.”
            </Paragraph>
            <Paragraph big style={{ marginBottom: "0" }}>
            You can reserve an Arkansas corporate name for up to 120 days for $25.
            </Paragraph>
          </PanelWrapper>
          <PanelWrapper>
            <Heading size={3} style={{ marginBottom: "24px" }}>
              Articles of Incorporation
            </Heading>
            <Paragraph big>Arkansas state law requires filing of articles of incorporation.</Paragraph>

            <Colorbox color={color.blue3} content={articlesOfIncorporation.box1} dotsColor={color.blue1} style={{ marginBottom: "65px" }} />

            <Colorbox color={color.orange3} content={articlesOfIncorporation.box2} dotsColor={color.orange1} style={{ marginBottom: "48px" }} />

            <Paragraph big>If the initial articles do not name directors for the corporation, the incorporators may elect directors or amend the bylaws.</Paragraph>
          </PanelWrapper>
          <PanelWrapper>
            <Heading size={3} style={{ marginBottom: "24px" }}>
              Registered Agent and Office
            </Heading>
            <Paragraph big>
            Arkansas corporations must have a registered agent in Arkansas who is designated to receive official state administrative and legal correspondence. The registered agent must be either an individual Arkansas resident whose business office is the same as the registered office, or a corporation whose business office is the same as the registered office.
            </Paragraph>
          </PanelWrapper>
          <PanelWrapper>
            <Heading size={3} style={{ marginBottom: "24px" }}>
              Bylaws
            </Heading>
            <Paragraph big>
            A corporation is required to keep a copy of its bylaws at its main executive office, but is not required to file them with the state. At its initial meeting, the board of directors should adopt corporate bylaws, and then keep them updated as time goes on.
            </Paragraph>
            <Paragraph big style={{ fontFamily: "Avenir", fontWeight: "900", color: "#1e1e1e" }}>
            Bylaws describe the corporation’s basic managerial and legal operating principles, including information on:
            </Paragraph>

            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>Shareholders and directors meetings</Paragraph>
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
            Your new Arkansas corporation is required to have at least one director. The articles of incorporation or bylaws may list director qualifications. A director does not need to be an Arkansas resident or a shareholder of the corporation unless so stated in the articles of incorporation or bylaws.
            </Paragraph>
            <Paragraph big>
            The board of directors is required to elect officers in accordance with the corporation’s bylaws. The titles and duties of corporate officers must be described in the corporation’s bylaws, or they must be appointed by the board of directors in accordance with the bylaws. A duly appointed officer may appoint as many officers or assistant officers as authorized by the bylaws or the board of directors. The bylaws or the board of directors will delegate responsibility to one of the officers for preparing minutes of the directors’ and shareholders’ meetings, as well as for authenticating corporate records. The same individual may simultaneously hold more than one office in a corporation.
            </Paragraph>
          </PanelWrapper>
          <PanelWrapper>
            <Heading size={3} style={{ marginBottom: "24px" }}>
              Requirement Reports
            </Heading>
            <Paragraph big style={{ marginBottom: "48px" }}>
            An annual franchise report must be filed with the Arkansas Secretary of State each year.
            </Paragraph>

            <Paragraph big style={{ marginBottom: "24px", fontFamily: "Avenir", fontWeight: "900", color: "#1e1e1e" }}>
            This report must include:
            </Paragraph>
            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>The corporation’s name and its state or country of incorporation</Paragraph>
            </TextBoxed>
            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>The address of its registered office</Paragraph>
            </TextBoxed>
            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>The address of the corporation’s principal office</Paragraph>
            </TextBoxed>
            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>The names and business addresses of the corporation’s directors and principal officers</Paragraph>
            </TextBoxed>
            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>A brief description of the nature of its business</Paragraph>
            </TextBoxed>
            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>The total number and itemization by class and series of authorized shares</Paragraph>
            </TextBoxed>
            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>The total number and itemization by class and series of issued and outstanding shares</Paragraph>
            </TextBoxed>
          </PanelWrapper>
          <PanelWrapper>
            <Heading size={3} style={{ marginBottom: "24px" }}>
              Taxes
            </Heading>
            <Paragraph big>Arkansas’ corporate tax structure consists of six separate brackets with a top rate of 6.5 percent that takes effect when corporate income reaches $100,000. Arkansas’ top rate ranks 30th highest nationally among states with corporate income taxes.</Paragraph>
            <Paragraph big>The Arkansas secretary of state recognizes S corporation status. A “subchapter S” corporation or “S corp” is one that chooses to be treated as a pass-through entity for tax purposes in the same way as a sole proprietorship or partnership. Tax-related information for the S corp is filed as part of the owner’s individual income tax. Arkansas does not require filing a separate form for the S corp.</Paragraph>
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
        <LightBoxVideo thumbnailVideo="comparison-chart-video-3611" videoID="oYZShvmf9eQ" />
      </ContentCenter>

      <ContentCenter contentWidth={970}>
        <HeadingCenter headline={fillingRequirements.mainHeader} textWidth="770" bottomMargin="48" bottomMarginLG="80" />

        <TitleWithInfoBox title={fillingRequirements.header1} style={{ marginBottom: "24px" }} hasInfoBox infoBoxText={fillingRequirements.header1infoBox} questionMarkColor={color.blue1} />
        <GenericTable className="blue3 headers-start left" content={fillingRequirements.table} style={{ "margin-bottom": "56px", width: "100%" }} />

        <TitleWithInfoBox title={fillingRequirements.header2} style={{ marginBottom: "24px" }} hasInfoBox infoBoxText={fillingRequirements.header2infoBox} questionMarkColor={color.blue1} />
        <GenericTable className="blue3 headers-start left" content={fillingRequirements.table2} style={{ "margin-bottom": "56px", width: "100%" }} />

        <TitleWithInfoBox title={fillingRequirements.header3} style={{ marginBottom: "24px" }} />
        <GenericTable className="blue3 headers-start left" content={fillingRequirements.table3} style={{ "margin-bottom": "56px", width: "100%" }} />
      </ContentCenter>
    </ServiceSection>

    <PackageSection>
      <HeadingCenter headline={packets.header} textWidth="770" />
      <PacketsSection content={packets} />
    </PackageSection>

    <QuestionSection>
      <Oval className="oval" height={570} width={570} top="20" right="0">
        <OvalSvg4 />
      </Oval>
      <HeadingCenter headline={questions.header} textWidth="770" />
      <ContentCenter style={{ marginBottom: "48px" }}>
        <Accordion content={questions} curve curveColor={color.blue1} curveLeft="-15px" />
      </ContentCenter>
      <ContentCenter style={{ marginBottom: "48px" }}>
        <Button content={{ text: `View all corporation FAQ's`, url: `/` }} width={300} padding="12px 48px" />
      </ContentCenter>
    </QuestionSection>

    <InfoSection>
      <HeadingCenter headline={info.header} textWidth="770" />

      <Container>
        <AdventagesBox>
          {info.items.map((item) => (
            <Adventages headline={item.headline} text={item.text} />
          ))}
        </AdventagesBox>
      </Container>
    </InfoSection>

    <Rocket />
  </Layout>
);

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