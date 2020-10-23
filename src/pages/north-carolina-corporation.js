import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import { fillingRequirements, info, packets, questions, service, top, articlesOfIncorporation, corporationName } from "../static/learning-center-entity/north-carolina-corporation";
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
    <SEO title="Form a Corporation in Alaska." description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
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
            Choosing a name for your new North Carolina corporation is one of the first official steps toward actually conducting business in the Tarheel State. The business name you choose must be able to be readily distinguished from all other registered North Carolina business entities, as well as any names already reserved on the state rolls (with some exceptions).
            </Paragraph>
            <Paragraph big>
            Your new business’ name may not state or imply that it is organized for a purpose other than one permitted by state law and its articles of incorporation. The name must end with one of the following terms or its abbreviation: “Incorporated,” “Corporation,” “Company,” or “Limited.”
            </Paragraph>
            <Paragraph big style={{ marginBottom: "0" }}>
            Available corporate names may be reserved for up to 120 days for a $30 fee.
            </Paragraph>
          </PanelWrapper>
          <PanelWrapper>
            <Heading size={3} style={{ marginBottom: "24px" }}>
              Articles of Incorporation
            </Heading>
            <Paragraph big>
            In accordance with the North Carolina Business Corporation Act (Chapter 55 of the North Carolina General Statutes), corporations must file articles of incorporation with the state Secretary of State’s office before conducting business. The articles must be delivered by at least one of the incorporators, accompanied by the filing fee of $125.
            </Paragraph>
            <Paragraph big>Normal processing time by the state is five business from the date the state filing office receives your articles. Filing within 24 hours is $100 extra; same-day filing costs an additional $200.</Paragraph>

            <Colorbox color={color.blue3} content={articlesOfIncorporation.box1} dotsColor={color.blue1} style={{ marginBottom: "65px" }} />
            
            <Paragraph big>North Carolina law allows a corporation to be formed for any lawful business activity. There is no requirement for a specific corporate purpose to be stated in the articles of incorporation. North Carolina law also allows (but does not require) optional items to be included in the articles of incorporation for those corporations who wish to formally specify additional information.</Paragraph>

            <Colorbox color={color.orange3} content={articlesOfIncorporation.box2} dotsColor={color.orange1} style={{ marginBottom: "48px" }} />

            <Paragraph big>In North Carolina, it’s not required to state a par value for your new corporation’s shares. The filing fee is not based on how many shares are authorized, so you can authorize as desired. Most incorporators authorize one class of common shares with equal voting, dividend, and liquidation rights, with no special restrictions.</Paragraph>
          </PanelWrapper>
          <PanelWrapper>
            <Heading size={3} style={{ marginBottom: "24px" }}>
              Registered Agent and Office
            </Heading>
            <Paragraph big>
            Every North Carolina corporation must have a registered agent in the state-someone designated to receive official state correspondence, including notice if the corporation is “served” with a lawsuit. The registered agent must be either a North Carolina resident whose business office is the same as the registered office, or a corporation with a business office identical with the registered office.
            </Paragraph>
          </PanelWrapper>
          <PanelWrapper>
            <Heading size={3} style={{ marginBottom: "24px" }}>
              Bylaws
            </Heading>
            <Paragraph big>
            Bylaws describe the corporation’s basic managerial and legal operating principles. A North Carolina corporation must keep a copy of its bylaws at its main executive office, but is not required to file them with the state. The bylaws may contain any provision for managing the business and regulating the affairs of the corporation that’s not in conflict with law or the articles of incorporation.
            </Paragraph>
            <Paragraph big>
            The board of directors of a corporation may adopt, amend, or repeal bylaws, unless the articles reserve this right to the shareholders. At its initial meeting, the board of directors should adopt corporate bylaws, and then keep them updated as time goes on.
            </Paragraph>
            <Paragraph big style={{ fontFamily: "Avenir", fontWeight: "900", color: "#1e1e1e" }}>
            Bylaws normally address:
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
            A director of the corporation must be a “natural person” (as opposed to a business entity) who is at least 18 years of age, and there must be at least one. The articles of incorporation or the corporation’s bylaws may specify additional qualifications for directors.
            </Paragraph>
            <Paragraph big>
            An officer may hold more than one corporate office unless prohibited by the corporation’s bylaws. However, no individual is allowed to act in more than one capactity where the action of two or more officers is required.
            </Paragraph>
          </PanelWrapper>
          <PanelWrapper>
            <Heading size={3} style={{ marginBottom: "24px" }}>
              Requirement Reports
            </Heading>
            <Paragraph big style={{ marginBottom: "48px" }}>
            An annual report must be filed (in either paper or electronic format) with the North Carolina Secretary of State each year by the 15th day of the third month after the end of the corporation’s fiscal year.
            </Paragraph>

            <Paragraph big style={{ marginBottom: "24px", fontFamily: "Avenir", fontWeight: "900", color: "#1e1e1e" }}>
            This report must include:
            </Paragraph>
            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>The corporation’s official name and its state or country of incorporation.</Paragraph>
            </TextBoxed>
            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>The county, street address, and mailing address (if different) of its registered office, the registered agent at that office, and a statement of change regarding any change of the registered agent and/or registered office.</Paragraph>
            </TextBoxed>
            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>The address and telephone number of the corporation’s main office.</Paragraph>
            </TextBoxed>
            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>The names, titles, and business addresses of its principal officers.</Paragraph>
            </TextBoxed>
            <TextBoxed style={{ marginBottom: "8px" }}>
              <Paragraph bottomMargin={0}>A brief description of the nature of the business.</Paragraph>
            </TextBoxed>
            <Paragraph big>
            Additionally, state law requires that the corporation mail an annual financial statement to all shareholders within 120 days of the end of the corporate fiscal year. These statements must include a year-end balance sheet, an income statement for that year, and a statement of the year’s cash flows, unless that information appears elsewhere in the financial statements
            </Paragraph>
          </PanelWrapper>
          <PanelWrapper>
            <Heading size={3} style={{ marginBottom: "24px" }}>
              Taxes
            </Heading>
            <Paragraph big>North Carolina corporations are subject to a state corporate income tax. They must also pay an annual franchise tax, the minimum amount of which is $35.</Paragraph>
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