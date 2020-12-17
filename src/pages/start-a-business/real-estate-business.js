import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Top from "../../atomic/partials/top";
import styled from "styled-components";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import { Heading } from "../../atomic/atoms/typography/heading";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import SvgChart from "../../images/chart-real-estate.inline.svg";
import BusinessStructure from "../../atomic/sections/type-of-business/real-estate-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/real-estate-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/real-estate-business/order-now";
import ToolsAndLinks from "../../atomic/sections/type-of-business/real-estate-business/tools";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import CkeckText from "../../components/static-check/text-only";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import {
  RingText,
  tabs,
} from "../../static/type-of-business/real-estate-business";
import CountingTextBoxed from "../../atomic/molecules/text-blocks/counting-text-boxed";
import Rocket from "../../atomic/sections/type-of-business/real-estate-business/rocket";
import OvalTabsSvg from "../../images/ovals/bottom-left-transparent-pink.inline.svg";
import OvalTabsSvg2 from "../../images/ovals/bottom-left-transparent-orange.inline.svg";
import { color } from "../../atomic/atoms/styles/colors";
import { Link } from "@reach/router";
import ReactTabs from "../../atomic/partials/ReactTabs";
import { TabPanel } from "react-tabs";
import { Helmet } from "react-helmet";

const RealEstateBusiness = () => (
  <Layout>
    <SEO
      title="Real Estate Investing | How to Start a Real Estate Business"
      description="Whether you want to buy, sell, develop, or rent out real estate, there are plenty of opportunities in the residential and commercial sectors. Learn more."
    />

    <Top
      ovalColor="sun"
      imageName="real-estate-main"
      imageAlt="Mr Bulb with seedling"
      headlineWidth={700}
    >
      <h1>How to Start a Real Estate Business</h1>
      <p>
        Whether you want to buy, sell, develop, or rent out real estate, there
        are plenty of opportunities in the residential and commercial sectors.
      </p>
      <ButtonsBox>
        <Button
          theme="primary56"
          marginMD="0 24px 0 0"
          arrow
          content={{
            url: `${process.env.ORDER_URL}/form-order-now.php`,
            text: "Start Now",
          }}
        />
      </ButtonsBox>

      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>

    <TabsWrapper>
      <TabsOval>
        <OvalTabsSvg />
      </TabsOval>
      <TabsOval2>
        <OvalTabsSvg2 />
      </TabsOval2>
      <ReactTabs content={tabs} style={{ marginTop: "100px" }}>
        <TabPanel>
          <PanelWrapper>
            <Heading size={2} template={3} left>
              Starting a Real Estate business
            </Heading>
            <Paragraph big>
              The world of real estate investing is an exciting one to get into.
              Whether you want to buy, sell, develop, or rent out real estate,
              there are plenty of opportunities in the residential and
              commercial sectors. You can make great money, love your job and
              provide a home for individuals, families and businesses. What’s
              not to love?
            </Paragraph>

            <Paragraph
              big
              style={{
                fontFamily: "Avenir",
                fontWeight: "900",
                color: color.black,
              }}
            >
              Real Estate business formation guide
            </Paragraph>

            <Paragraph big>
              In this guide, we’ll explore everything you need to do to set up
              your real estate investment business and maximize your chances for
              success. We’ll cover:
            </Paragraph>

            <ListWrapper>
              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Understanding the world of real estate
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Information on taxes and finances for your real estate
                    investing business
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Questions you should ask to see if you’re ready to start a
                    real estate investing business
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Hiring employees, marketing and administration
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Choosing the best legal structure for your new organization
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Resources for your real estate business
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Basic rules and regulations you may need to follow
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>... and much more</Paragraph>
                </CkeckText>
              </ListBox>
            </ListWrapper>

            <Paragraph big>
              By the time you’ve read through our complete real estate investing
              business guide, you'll have all the information you need to set up
              and manage a thriving real estate business. Let’s get into it.
            </Paragraph>
          </PanelWrapper>
        </TabPanel>

        <TabPanel>
          <PanelWrapper>
            <Heading size={2} template={3} left>
              Understand the World of Real Estate Investing
            </Heading>
            <Paragraph big>
              Let’s start by exploring the world of real estate and
              understanding what the opportunities are.
            </Paragraph>
            <Paragraph
              big
              style={{
                marginBottom: "80px",
                fontFamily: "Avenir",
                fontWeight: "900",
                color: color.black,
              }}
            >
              Background Data & Stats about the Real Estate Industry
            </Paragraph>

            <BlueBoxWithAbsoluteText
              absoluteText="$220T"
              text="Estimated value of all property globally. This is nearly three times the yearly U.S. GDP. Around three-quarters of this property is residential."
            />
            <BlueBoxWithAbsoluteText
              absoluteText="96%"
              text="Percentage of investors in real estate who believe the investment gave them financial success."
            />
            <BlueBoxWithAbsoluteText
              absoluteText="82%"
              text="Percentage of investors who believe real estate is important in diversifying investments."
            />
            <BlueBoxWithAbsoluteText
              absoluteText="10.6%"
              text="Average yearly return from residential and diversified property investments."
            />

            <ColorFulCircleWithTextAndList
              style={{ marginBottom: "80px" }}
              list={RingText.list}
              title={RingText.title}
              CircleSVG={SvgChart}
              withBg={true}
            />

            <Adventages
              headline="The real estate industry has been growing by 9 percent year on year over the last five years."
              width="100%"
            />

            <Adventages
              headline="The sale and rental of residential property accounts for around 72 percent of real estate business income in the U.S."
              width="100%"
            />

            <Adventages
              headline="High corporate profits are increasing opportunities in commercial and industrial real estate."
              width="100%"
            />

            <Adventages
              headline="Revenues in the real estate business market are expected to continue to grow over the next few years."
              width="100%"
            />

            <Paragraph big>
              This all points to the real estate investment world being ripe
              with new opportunities for focused entrepreneurs, so now might be
              the perfect time to dive into starting your real estate investment
              business. Incfile is here to help you form your business and
              understand the ins and outs of owning a real estate company.
            </Paragraph>
            <Paragraph big>
              There are two main ways you can take advantage of real estate
              business opportunities.
            </Paragraph>

            <Paragraph
              big
              style={{
                fontFamily: "Avenir",
                fontWeight: "900",
                color: color.black,
              }}
            >
              How to Invest in Real Estate
            </Paragraph>

            <Paragraph big>
              There are several ways to create a real estate investing business,
              depending on your focus. This might be through buying a property,
              renovating it and making improvements, then selling it on at a
              profit. Alternatively, you might buy up a number of units and rent
              them out or make money in some other way such as vacation
              accommodation or Airbnb.
            </Paragraph>

            <Heading size={3}>Understand Your Real Estate Market</Heading>

            <Paragraph big>
              If you want to get into the real estate investing business
              yourself, you need to decide the specific part of the industry
              where your business could be most successful.
            </Paragraph>

            <Adventages
              headline="Real estate property development"
              text="Building or upgrading existing residential or commercial property to resell at a profit."
              width="100%"
            />

            <Adventages
              headline="Leasing and rental of residential property"
              text="Developing or enhancing residential property and arranging for rental as a rental agency or individual landlord."
              width="100%"
            />

            <Adventages
              headline="Sale and purchase of commercial or industrial property"
              text="Working with other businesses to locate and arrange for transactions on property for profit-making purposes"
              width="100%"
            />

            <Adventages
              headline="Leasing and rental of commercial or industrial property"
              text="Developing or enhancing business property and arranging for rental as a rental agency or individual landlord."
              width="100%"
            />

            <Adventages
              headline="Real estate development for resale"
              text="Investing in commercial or residential property and making income when you sell the property."
              width="100%"
            />

            <Adventages
              headline="Real estate property management services"
              text="Real estate property management services"
              width="100%"
            />

            <Paragraph big>
              Once you know the type of real estate business you want to run,
              you need to identify the size of the market and number of
              customers in your local area. Explore how successful and volatile
              the property market is and establish the likely number of
              individuals or businesses buying, renting, developing or selling
              real estate on a yearly basis.
            </Paragraph>
            <Paragraph big>
              See how many competitors there are in your local real estate
              markets. A lot of competitors isn’t necessarily a bad thing; it
              could mean there’s plenty of demand. Get involved in local real
              estate discussion groups and ask questions about your regional
              market. You can even offer to take other real estate investors or
              business owners out to coffee to ask them questions about what
              it's like to run a real estate investment business in your region.
            </Paragraph>
            <Paragraph big>
              This initial time spent fact-finding will make sure you're
              pursuing a viable business opportunity.
            </Paragraph>

            <Heading size={3}>
              What Your Real Estate Clients are Looking For
            </Heading>

            <Paragraph big>
              When it comes to real estate, your customers will have different
              needs depending on the type of investment business you run.
            </Paragraph>

            <Adventages
              headline="Provide a complete package"
              text="Keep everything as simple as possible for your clients, whether they are buying a developed property, renting from you or something else."
              width="100%"
            />

            <Adventages
              headline="Be proactive in your communications"
              text="Buying and renting property is very stressful for most people, so active communication from you will give them peace of mind."
              width="100%"
            />

            <Adventages
              headline="Deliver exceptional value"
              text="Clients are looking for quality, accuracy, speed and reassurance when it comes to dealing with property."
              width="100%"
            />

            <Adventages
              headline="Show additional benefits"
              text="Clients will likely have plenty of choices when it comes to deciding where to buy or rent. Make sure you clearly explain the benefits of the property and the services you provide."
              width="100%"
            />

            <Paragraph big>
              If you can get these in place and explain your unique selling
              points, you'll have a good chance to stand out from the crowd.
            </Paragraph>
          </PanelWrapper>
        </TabPanel>

        <TabPanel>
          <PanelWrapper>
            <Heading size={2} template={3} left>
              Questions to Ask Before You Get into Real Estate
            </Heading>
            <Paragraph
              big
              style={{
                marginTop: "48px",
                fontFamily: "Avenir",
                fontWeight: "900",
                color: color.black,
              }}
            >
              Is Real Estate Entrepreneurship for You?
            </Paragraph>

            <Paragraph big>
              Running a real estate investment business isn't for everyone — it
              can be a stressful experience! You will need a combination of
              resilience, project management and deal-making skills, as well as
              the ability to manage clients, contractors and high-pressure
              deadlines.
            </Paragraph>
            <Paragraph big>
              You will often be working long hours or on weekends, especially as
              you're starting your new business. You need patience, chutzpah and
              the ability to juggle multiple tasks to succeed. Plus, you have to
              be prepared for your income to arrive all at once, or sometimes
              not at all.
            </Paragraph>

            <Paragraph
              big
              style={{
                marginTop: "48px",
                fontFamily: "Avenir",
                fontWeight: "900",
                color: color.black,
              }}
            >
              What Skills do You Need to be a Successful Real Estate Investor?
            </Paragraph>
            <Paragraph big>
              If you want to be successful in the world of real estate, here's
              what you need.
            </Paragraph>

            <Adventages
              headline="Excellent interpersonal skills"
              text="You will need to deal with contractors, local authorities, clients and buyers all the time. Great interpersonal skills and the ability to handle people well are essential."
              width="100%"
            />

            <Adventages
              headline="Powerful time and task management"
              text="You will likely be juggling multiple opportunities together with managing your business. You must have a good way to manage your time, tasks and appointments."
              width="100%"
            />

            <Adventages
              headline="Strong talent for negotiation"
              text="Negotiating real estate finances and pricing is an art. You need to have great deal-making and negotiation skills and understand exactly what the client wants to get out of the real estate transaction."
              width="100%"
            />

            <Adventages
              headline="Range of background skills and experience"
              text="You will want an excellent knowledge of your local market, strong relationships with mortgage providers (and other real estate support professionals) and an understanding of the legal nuances of buying and selling."
              width="100%"
            />

            <Paragraph
              big
              style={{
                marginTop: "48px",
                fontFamily: "Avenir",
                fontWeight: "900",
                color: color.black,
              }}
            >
              What Are the Main Challenges for a Real Estate Business?
            </Paragraph>
            <Paragraph big>
              Your main challenges will likely involve dealing with real estate
              property development, handling negotiations, managing a very busy
              schedule and keeping your clients happy. You will likely have a
              very full voicemail and email inbox and will need to put aside
              plenty of time for communications.
            </Paragraph>
            <Paragraph big>
              You will also need effective marketing, especially if your local
              real estate investing market is very competitive. Look into
              partnering with other related businesses for mutual benefit.
            </Paragraph>

            <Paragraph big style={{ marginTop: "48px", fontWeight: "bold" }}>
              What Does a Day in the Life of a Real Estate Entrepreneur Look
              Like?
            </Paragraph>
            <Paragraph big>
              Each day is going to be different, but you'll likely be doing the
              following:
            </Paragraph>

            <CountingTextBoxed number={1}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Reviewing development work on properties
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={2}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Dealing with contractors and other tradespeople
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={3}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Taking calls from clients
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={4}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Negotiating deals between different parties
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={5}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Arranging for contracts and legal formalities
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={6}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Setting up showings
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={7}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Preparing offers and other related documents
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={8}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Running your business (including taxes, bookkeeping, scheduling,
                emailing and more)
              </Paragraph>
            </CountingTextBoxed>

            <CountingTextBoxed number={9}>
              <Paragraph bottomPadding={0} bottomMargin={0}>
                Talking to lawyers and advisers
              </Paragraph>
            </CountingTextBoxed>

            <Paragraph big mixed={true} style={{ marginTop: "48px" }}>
              Check out our additional guidance in{" "}
              <a href="https://www.incfile.com/blog/post/is-starting-a-real-estate-business-right-for-you/">
                understanding if a real estate business is right for you
              </a>
              . In this blog post, we'll help you analyze your real estate
              business idea, conduct market research and build a business plan.
            </Paragraph>
          </PanelWrapper>
        </TabPanel>
      </ReactTabs>
    </TabsWrapper>

    <BusinessStructure />

    <SettingBusiness />

    <OrderNow />

    <ToolsAndLinks />

    <Rocket />

    <Helmet>
      <script type="application/ld+json">
        {`{
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "How to Start a Real Estate Business by Incfile",
                    "description": "Are you looking to get into real estate? There has been a significant spike in properties sold in the last year already, so now's a great time to start a real estate business. From quick-growth cities like Boston and Indy, to millennial meccas like Madison and Grand Rapids, there’s no shortage of real estate opportunities.   There are a few different ways to launch a money-making real estate investing business.  1) You might “flip” homes or commercial properties by buying, renovating and reselling.  2) Or you can purchase properties and rent them out — either long-term as a landlord or short-term through platforms like Airbnb and VRBO.   Whatever you choose, the real estate industry shows huge potential for entrepreneurs, as long as you stay informed of any changes in local and state economies and take the proper precautions to protect your personal assets by forming the right business entity.  We work with real estate investors every day to make financial independence possible for them. Are you next? Learn more about how to start a real estate business here: https://www.incfile.com/start-a-business/real-estate-business/",
                    "thumbnailUrl": "https://i.ytimg.com/vi/Eef5Zuas2dQ/default.jpg",
                    "uploadDate": "2020-07-31T17:03:39Z",
                    "duration": "PT1M38S",
                    "embedUrl": "https://www.youtube.com/embed/Eef5Zuas2dQ",
                    "interactionCount": "4"
                }`}
      </script>
    </Helmet>
  </Layout>
);

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

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
  margin-top: 104px;
  margin-bottom: 32px;
  position: relative;
  @media (min-width: 992px) {
    margin-top: 24px;
    margin-bottom: 104px;
  }
`;

const TabsOval = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const TabsOval2 = styled.div`
  position: absolute;
  bottom: 112px;
  right: 0;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 420px) {
    width: 420px;
  }
`;

export default RealEstateBusiness;
