import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import ButtonsBox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import Top from "../../atomic/partials/top";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import AirbnbBusinessPlan from "../../atomic/sections/type-of-business/airbnb/airbnb-business-plan";
import AirBnB1BusinessStructure from "../../atomic/sections/type-of-business/airbnb/business-structure";
import BlueContainer from "../../atomic/sections/type-of-business/airbnb/blue-container";
import SettingBusiness from "../../atomic/sections/type-of-business/airbnb/SettingBusiness";
import OrderNow from "../../atomic/sections/type-of-business/airbnb/order-now";
import Regulations from "../../atomic/sections/type-of-business/airbnb/regulations";
import AirbnbTaxes from "../../atomic/sections/type-of-business/airbnb/airbnb-taxes";
import InsuranceAirBnb from "../../atomic/sections/type-of-business/airbnb/insurance-airbnb";
import AirBnbOwners from "../../atomic/sections/type-of-business/airbnb/airbnb-owners";
import UseFulTools from "../../atomic/sections/type-of-business/airbnb/useful-tools";
import Rocket from "../../atomic/sections/type-of-business/airbnb/rocket";
import TabsSection from "../../atomic/partials/tabs";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import OverviewSVG from "../../images/icons/airbnb.inline.svg";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import LightIcon from "../../images/icons/light.inline.svg";
import CalcIcon from "../../images/icons/series-is-this-business-for-you.inline.svg";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import { Heading } from "../../atomic/atoms/typography/heading";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import CkeckText from "../../components/static-check/text-only";
import styled from "styled-components";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import CountingTextBoxed from "../../atomic/molecules/text-blocks/counting-text-boxed";
import TabsOvalOneSvg from "../../images/ovals/bottom-right-transparent-babyblue2.inline.svg";
import TabsOvalTwoSvg from "../../images/ovals/bottom-right-transparent-green3.inline.svg";
import CircleWithText from "../../atomic/molecules/blocks/circle-with-text-block";
import CircleSvg from "../../images/circle-percentage.inline.svg";

const Airbnb = () => (
  <Layout>
    <SEO title="How to Start an Airbnb | A Guide to Airbnb Businesses" description="More than two million people stay at an Airbnb on any given day. Could starting an Airbnb business be right for you? Learn more." />

    <Top ovalColor="sun" imageName="airbnb-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
      <h1>How to Start an Airbnb</h1>
      <p>Airbnb has only been with us since 2008, but over the last few years, it’s turned over half a million people into entrepreneurs.</p>
      <ButtonsBox>
        <Button theme="primary56" marginMD="0 24px 0 0" arrow content={{ text: `Start Now`, url: `/` }} />
      </ButtonsBox>

      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>

    <TabsWrapper>
      <TabOvalOne>
        <TabsOvalOneSvg />
      </TabOvalOne>

      <TabOvalTwo>
        <TabsOvalTwoSvg />
      </TabOvalTwo>

      <TabsSection>
        <TabHeading>
          <TabTitle title="Airbnb Business" SvgIcon={OverviewSVG} />
          <TabTitle title="Why This Industry" SvgIcon={LightIcon} />
          <TabTitle title="Is This Business For You?" SvgIcon={CalcIcon} />
        </TabHeading>

        <CollapseWrapper>
          <PanelWrapper>
            <Heading size={3} style={{ marginBottom: "24px" }}>
              Starting an Airbnb Business
            </Heading>
            <Paragraph big>The concept of renting out space through Airbnb is relatively straightforward, but setting yourself up for success requires a little more work.</Paragraph>
            <Paragraph big style={{ marginBottom: "48px" }}>
              We don’t think that creating an Airbnb business needs to be daunting, and we’re here to help. We’ve supported over 250,000 people to form a business and provided answers, guidance and support to transform them into entrepreneurs. We’ll guide you through what you need to know to start
              your Airbnb venture and get it off the ground.
            </Paragraph>
            <Heading size={3} style={{ marginBottom: "24px" }}>
              Airbnb Business formation guide
            </Heading>
            <Paragraph big>From validating your business and doing the research to filing your paperwork and running your business, this guide will help you out. Read on for some insight into creating your own Airbnb business and becoming an entrepreneur. In this guide we will cover:</Paragraph>

            <ListWrapper>
              <ListBox>
                <CkeckText>
                  <Paragraph big>Statistics on why you should start an Airbnb business</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Choose the right business structure for your Airbnb company</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>How to find out if an Airbnb business is right for you</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Setting up your Airbnb business including location, equipment, employees, taxes, finances, licenses and more</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Ideas for the type of Airbnb business that you could form</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Where to find Airbnb business groups, forums and support</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Proving your Airbnb business can work</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Useful online tools for Airbnb business owners</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Business plans for Airbnb companies</Paragraph>
                </CkeckText>
              </ListBox>
            </ListWrapper>
          </PanelWrapper>

          <PanelWrapper>
            <Heading size={2} style={{ fontSize: "24px", textAlign: "left" }}>
              Why You Should Start a New Airbnb Business
            </Heading>
            <Paragraph big style={{ marginBottom: "76px" }}>
              Airbnb has made it easier than ever for people to become hosts—people that rent out property for others to stay at. Airbnb is a ready-made marketplace for guests, with millions of listings around the world. Here are some statistics on the power of the Airbnb industry:
            </Paragraph>

            <BlueBoxWithAbsoluteText absoluteText="150M" text="There are over 150 million users on Airbnb" />
            <BlueBoxWithAbsoluteText absoluteText="$34B" text="The largest market for Airbnb is in the US, with an economic impact of $34 billion" />
            <BlueBoxWithAbsoluteText absoluteText="500M" text="There have been more than 500 million stays through Airbnb" />

            <CircleWithText textInsideCircle="3.7" textLine="Increase in U.S. bookings year-to-year" withBg={true} SvgChart={CircleSvg} symbol="%" style={{ marginBottom: "72px" }} />

            <Adventages headline="Half of Airbnb users stay in an Airbnb instead of a hotel" width="100%" />

            <Adventages headline="More than two million people stay at an Airbnb on any given day" width="100%" />

            <Adventages headline="Almost nine in ten reservations are for two or more people" width="100%" />

            <Adventages headline="The compound growth rate since 2009 has been over 150 percent a year" width="100%" />

            <Adventages headline="There has been a 45 percent increase in U.S. bookings year-to-year" width="100%" />

            <Paragraph big style={{ marginTop: "18px" }}>
              This is why Airbnb businesses are so exciting — how can you be a part of that success? We're here to help you figure that out.
            </Paragraph>
          </PanelWrapper>

          <PanelWrapper>
            <Heading size={3} style={{ fontSize: "24px", marginBottom: "24px" }}>
              Is Running an Airbnb Right for You?
            </Heading>
            <Paragraph big style={{ marginBottom: "48px" }}>
              Before deciding to start an Airbnb business, it’s important to understand the skills and approach you’re likely to need.
            </Paragraph>

            <Heading size={3} style={{ fontSize: "24px", marginBottom: "24px" }}>
              A Day in the Life of an Airbnb Host
            </Heading>
            <Paragraph big style={{ marginBottom: "24px" }}>
              Here are some of the typical tasks you’ll be performing for your Airbnb business on a daily basis.
            </Paragraph>

            <CountingTextBoxed number={1}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Answering questions from guests and providing useful information
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={2}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Arranging for cleaning and other routine tasks at your properties
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={3}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Taking care of repairs and maintenance
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={4}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Ensuring that bookings are up-to-date
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={5}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Getting information and photos to create compelling Airbnb listings
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={6}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Uploading and managing listings on the Airbnb platform
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={7}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Minimizing cancellations of planned visits
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={8}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Setting prices for guests to stay in your property
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={9}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Responding to reviews from guests
              </Paragraph>
            </CountingTextBoxed>

            <Heading size={3} style={{ fontSize: "24px", marginTop: "41px", marginBottom: "24px" }}>
              Skills Needed by an Airbnb Business Entrepreneur
            </Heading>
            <Paragraph big style={{ marginBottom: "48px" }}>
              The following skills will be very useful in your role as an Airbnb small business owner.
            </Paragraph>

            <Adventages headline="Organizational skills to stay on top of your enquiries and bookings" width="100%" />

            <Adventages headline="Interpersonal skills for managing the people that provide cleaning, maitenance and other services at your properties" width="100%" />

            <Adventages headline="Planning skills to offer the amenities, supplies and services that your guests want" width="100%" />

            <Adventages headline="Financial management skills so you understand the money you’re earning from rentals" width="100%" />

            <Heading size={3} style={{ fontSize: "24px", textAlign: "left", marginBottom: "24px", marginTop: "18px" }}>
              What Your Airbnb Guests are Looking For
            </Heading>
            <Paragraph big style={{ marginBottom: "48px" }}>
              Airbnb customers, commonly known as guests, are looking for:
            </Paragraph>

            <Adventages headline="Properties that match the listings provided by the host" width="100%" />

            <Adventages headline="Properties that are safe, clean, and well-located for their needs" width="100%" />

            <Adventages headline="Properties that are priced appropriately for their location, demand and the time of year" width="100%" />

            <Adventages headline="Common amenities including clean sheets, toiletries, a first aid kit, etc." width="100%" />

            <Adventages headline="Easy access to the property" width="100%" />

            <Adventages headline="Important information like contact details, good local restaurants, transit stops, emergency service numbers, etc." width="100%" />
          </PanelWrapper>
        </CollapseWrapper>
      </TabsSection>
    </TabsWrapper>

    <BlueContainer />

    <AirbnbBusinessPlan />

    <AirBnB1BusinessStructure />

    <SettingBusiness />

    <OrderNow />

    <Regulations />

    <AirbnbTaxes />

    <InsuranceAirBnb />

    <AirBnbOwners />

    <UseFulTools />

    <Rocket />
  </Layout>
);

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListBox = styled.div`
  width: 100%;

  @media (min-width: 576px) {
    width: 50%;
  }
`;

const TabsWrapper = styled.section`
  position: relative;
  margin-top: 120px;

  @media (min-width: 992px) {
    margin-top: 21px;
  }
`;

const TabOvalOne = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 21px;

  @media (min-width: 420px) {
    width: 420px;
  }
  svg {
    transform: scaleX(-1);
  }
`;

const TabOvalTwo = styled.div`
  position: absolute;
  width: 100%;
  right: 0;
  top: 674px;

  @media (min-width: 420px) {
    width: 420px;
  }
`;
export default Airbnb;
