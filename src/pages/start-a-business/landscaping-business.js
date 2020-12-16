import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import { Heading } from "../../atomic/atoms/typography/heading";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import CkeckText from "../../components/static-check/text-only";
import TextCenterLayout from "../../atomic/partials/heading-left";
import Container from "../../atomic/container";
import TextBlockWithImage from "../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import IdentifyIcon from "../../images/icons/identify-your-unique-selling-point.inline.svg";
import LookIcon from "../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg";
import TalkIcon from "../../images/icons/talk-to-clients.inline.svg";
import MarketIcon from "../../images/icons/look-for-market-research.inline.svg";
import InvolvedIcon from "../../images/icons/get-involved-with-business-communities.inline.svg";
import { color } from "../../components/styles/colors";
import CountingTextBoxed from "../../atomic/molecules/text-blocks/counting-text-boxed";
import OvalOrange2Svg from "../../images/ovals/top-left-transparent-orange2.inline.svg";
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import HandsIcon from "../../images/icons/hands.inline.svg";
import LimitedIcon from "../../images/icons/limited-liability-company-or-llc.inline.svg";
import SeriesIcon from "../../images/icons/limited-liability-company.inline.svg";
import PlaneIcon from "../../images/icons/plane.inline.svg";
import RockerIcon from "../../images/icons/rocket.inline.svg";
import SettingBusiness from "../../atomic/sections/type-of-business/landscaping-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/landscaping-business/order-now";
import {
  RingText,
  RingText2,
  tabs,
  toolsList,
} from "../../static/type-of-business/landscaping-business";
import HireEmployees from "../../atomic/sections/type-of-business/landscaping-business/hire-employees";
import UsefulTools from "../../atomic/partials/useful-tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import Adventages from "../../components/adventages";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import ColorfulRing from "../../images/chart-landscaping.inline.svg";
import ColorfulRing2 from "../../images/chart-landscaping-2.inline.svg";
import { shadow } from "../../atomic/atoms/styles/shadows";
import TaxesIcon from "../../images/icons/taxes-icon.inline.svg";
import AgentIcon from "../../images/icons/registered-agent-case.inline.svg";
import BuildingIcon from "../../images/icons/building.inline.svg";
import CaseIcon from "../../images/icons/case-white.inline.svg";
import styled from "styled-components";
import TabsOvalSvg from "../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import TabsOvalSvg2 from "../../images/ovals/bottom-left-transparent-orange.inline.svg";
import OvalSvg2 from "../../images/ovals/top-right-transparent-blue.inline.svg";
import OvalSvg3 from "../../images/ovals/top-right-transparent-green3.inline.svg";
import OvalSvg4 from "../../images/ovals/top-left-transparent-pink.inline.svg";
import ReactTabs from "../../atomic/partials/ReactTabs";
import { TabPanel } from "react-tabs";

const LandscapingBusiness = () => (
  <Layout>
    <SEO
      title="How to Start a Landscaping Business | Landscape Business"
      description="Do you like to work outdoors and have a passion for lush green lawns? Starting a landscape business could be your way to do what you really enjoy."
    />

    <Top
      ovalColor="green"
      imageName="landscaping-main"
      imageAlt="Mr Bulb with seedling"
      headlineWidth={700}
    >
      <h1>How to Start a Landscaping Business</h1>
      <p>
        We all want to live in a beautiful environment, and part of that is
        ensuring our yards and gardens are properly designed, maintained and
        looked after. This provides landscape business entrepreneurs with a
        great opportunity
      </p>
      <ButtonsBox>
        <Button
          theme="primary56"
          marginMD="0 24px 0 0"
          arrow
          content={{ url: "/", text: "Start Now" }}
        />
      </ButtonsBox>

      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>

    <TabsWrapper>
      <TabsOval>
        <TabsOvalSvg />
      </TabsOval>
      <TabsOval2>
        <TabsOvalSvg2 />
      </TabsOval2>
      <ReactTabs content={tabs}>
        <TabPanel>
          <PanelWrapper>
            <Heading size={2} template={3} left>
              Starting a Landscaping Business
            </Heading>
            <Paragraph big>
              We all want to live in a beautiful environment, and part of that
              is ensuring our yards and gardens are properly designed,
              maintained and looked after. This provides landscape business
              entrepreneurs with a great opportunity — if you can provide
              excellent yard and garden services, you can build a thriving local
              landscaping business.
            </Paragraph>
            <Paragraph big>
              Whether you want to get involved in wholesale design and yard
              makeovers or you want to provide maintenance and beautification
              services, there are plenty of opportunities in landscaping.
              However, because of the expertise, equipment and staff needed,
              landscaping design has quite a high barrier to entry.
            </Paragraph>
            <Paragraph big>
              Conversely, simple lawn maintenance businesses can be started by
              almost anyone. This means that a landscaping business is suitable
              for entrepreneurs of varying skills, experience and expertise.
            </Paragraph>

            <Heading size={3} style={{ marginTop: "48px", fontSize: "20px" }}>
              Landscaping Business formation guide
            </Heading>
            <Paragraph big>
              In this guide we’ll explore everything you need to do to set up
              your Etsy business and maximize your chances for success. We’ll
              cover:
            </Paragraph>

            <ListWrapper>
              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Understanding the world of the landscaping
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Paying taxes and for your landscaping business
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Deciding if you’re ready to start a landscaping business
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Hiring employees, managing finances and administering your
                    landscaping business
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Planning out your landscaping business
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Locating other resources for your landscaping business
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Determining the best legal structure for your new
                    organization
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>
                    Following various rules and regulations
                  </Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>And much more</Paragraph>
                </CkeckText>
              </ListBox>
            </ListWrapper>

            <Paragraph big>
              By the time you’ve read through our complete landscaping business
              guide, you will have all the information you need to set up and
              manage a thriving landscaping business. Let’s get into it
            </Paragraph>
          </PanelWrapper>
        </TabPanel>

        <TabPanel>
          <PanelWrapper>
            <Heading size={2} template={3} left>
              Understanding the World of the Landscaping Business
            </Heading>

            <Paragraph big style={{ fontWeight: "bold" }}>
              Key Landscaping Business and Background Data and Statistics
            </Paragraph>

            <Paragraph big>
              The size of the landscaping sector may surprise you:
            </Paragraph>

            <BlueBoxWithAbsoluteText
              absoluteText="$800B"
              text="Revenue in 2017, which is around 160,000 per business."
            />
            <BlueBoxWithAbsoluteText
              absoluteText="4.8%"
              text="Revenues growing rate of the industry year on year."
            />
            <BlueBoxWithAbsoluteText
              absoluteText="15%"
              text="Generated revenues of the industry's top 50 landscaping companies."
            />
            <BlueBoxWithAbsoluteText
              absoluteText="$16B"
              text="U.S. households spent on lawn care and gardening services in 2015."
            />

            <ColorFulCircleWithTextAndList
              CircleSVG={ColorfulRing}
              title={RingText.title}
              list={RingText.list}
              withBg={true}
            />

            <ColorFulCircleWithTextAndList
              CircleSVG={ColorfulRing2}
              title={RingText2.title}
              list={RingText2.list}
              withBg={true}
              style={{ marginTop: "48px" }}
            />

            <div style={{ marginBottom: "10px", marginTop: "48px" }}>
              <Adventages
                headline="There are around half a million landscaping businesses in the U.S. that employ around 1 million people"
                width="100%"
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <Adventages
                headline="Commercial landscaping services account for about 50% of industry revenue, while residential services account for about 30%"
                width="100%"
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages
                headline="57% of businesses made $300,000 or less per year, while 19% made between $300,000 and $1 million and 24% $1 million or more"
                width="100%"
              />
            </div>

            <Paragraph big>
              This all points to the landscaping industry being ripe with new
              opportunities for focused entrepreneurs, so now might be the
              perfect time to dive into starting your landscaping business.
              Incfile is here to help you form your landscaping business and
              understand the ins and outs of owning a landscaping company.
            </Paragraph>
          </PanelWrapper>
        </TabPanel>

        <TabPanel>
          <PanelWrapper>
            <Heading size={2} template={3} left>
              What Your Landscaping Customers Are Looking for
            </Heading>

            <Paragraph big>
              What your customers need will depend on the type of services you
              provide and the types of clients you plan to work for. Here are
              some examples based on what you decide to specialize in:
            </Paragraph>

            <TextBlockWithImage
              SvgImage={CaseIcon}
              textBackgroundColor="transparent"
              imageBackgroundColor={color.orange2}
              imageShadowColor={shadow.white2}
              imageShadowOpacity={0.5}
              boxShadow={false}
              paddingLeft={0}
              style={{ marginTop: "40px" }}
              circleShadowY={40}
              circleShadowBlure={80}
              width={100}
              widthUnit="%"
            >
              <Paragraph
                big
                flex
                flexAlign={true}
                style={{ fontWeight: "bold" }}
              >
                Landscape design, installation and makeover
              </Paragraph>

              <Paragraph big>
                A solid portfolio of work combined with a strong, reliable work
                ethic and good word-of-mouth recommendations
              </Paragraph>
            </TextBlockWithImage>

            <TextBlockWithImage
              SvgImage={TaxesIcon}
              textBackgroundColor="transparent"
              imageBackgroundColor={color.green2}
              imageShadowColor={shadow.white2}
              imageShadowOpacity={0.5}
              boxShadow={false}
              paddingLeft={0}
              style={{ marginTop: "8px" }}
              circleShadowY={40}
              circleShadowBlure={80}
              width={100}
              widthUnit="%"
            >
              <Paragraph
                big
                flex
                flexAlign={true}
                style={{ fontWeight: "bold" }}
              >
                Lawn and yard maintenance
              </Paragraph>

              <Paragraph big>
                Reliable, well-priced services provided on a regular basis by
                skilled, polite workers
              </Paragraph>
            </TextBlockWithImage>

            <TextBlockWithImage
              SvgImage={AgentIcon}
              textBackgroundColor="transparent"
              imageBackgroundColor={color.blue2}
              imageShadowColor={shadow.white2}
              imageShadowOpacity={0.5}
              boxShadow={false}
              paddingLeft={0}
              style={{ marginTop: "8px" }}
              circleShadowY={40}
              circleShadowBlure={80}
              width={100}
              widthUnit="%"
            >
              <Paragraph
                big
                flex
                flexAlign={true}
                style={{ fontWeight: "bold" }}
              >
                Residential customers
              </Paragraph>

              <Paragraph big>
                Competitively-priced services that provide a high value for
                money
              </Paragraph>
            </TextBlockWithImage>

            <TextBlockWithImage
              SvgImage={BuildingIcon}
              textBackgroundColor="transparent"
              imageBackgroundColor={color.purple2}
              imageShadowColor={shadow.white2}
              imageShadowOpacity={0.5}
              boxShadow={false}
              paddingLeft={0}
              style={{ marginTop: "8px" }}
              circleShadowY={40}
              circleShadowBlure={80}
              width={100}
              widthUnit="%"
            >
              <Paragraph
                big
                flex
                flexAlign={true}
                style={{ fontWeight: "bold" }}
              >
                Commercial and industrial customers
              </Paragraph>

              <Paragraph big>
                Reliable, trustworthy services provided quickly and efficiently
              </Paragraph>
            </TextBlockWithImage>

            <Heading size={3}>
              What Are the Main Skills, Expertise and Experience Needed to be a
              Successful Landscaping Entrepreneur?
            </Heading>

            <Paragraph big>
              There are a variety of skills you will need as a landscape
              entrepreneur, depending on where you want to focus your business
              services. Here are some of the main skills necessary:
            </Paragraph>

            <div style={{ marginBottom: "30px" }}>
              <Adventages
                headline="Hiring"
                text="Finding, interviewing and hiring great landscaping employees who can provide the right design, maintenance, installation and other services"
                width="100%"
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages
                headline="People management"
                text="Dealing with staff, coverage issues and other people management areas"
                width="100%"
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages
                headline="Marketing"
                text="Promoting your landscaping business against a competitive field; local marketing expertise is essential"
                width="100%"
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages
                headline="Service pricing"
                text="Creating competitive services with reasonable profit margins, factoring in employee and materials costs"
                width="100%"
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages
                headline="Business creation"
                text="Setting up the landscaping business in the first place and finding equipment, staff, vehicles, etc."
                width="100%"
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages
                headline="Operational management"
                text="Ensuring customers are treated well and yard services are provided to the standards you expect"
                width="100%"
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages
                headline="Business administration"
                text="Sorting out profits, payroll, financial management, accounting and all the other areas that go into running any successful business"
                width="100%"
              />
            </div>
          </PanelWrapper>
        </TabPanel>
      </ReactTabs>
    </TabsWrapper>

    <BlueContainer>
      <Oval2>
        <OvalSvg2 />
      </Oval2>
      <Container>
        <CenterBox>
          <TextCenterLayout
            headlineWidth={770}
            headline="Plan Your Landscaping Business"
          />
          <Paragraph big>
            Before you start your business, there are a few key areas you need
            to focus on. You will need to establish whether there’s a demand for
            your landscaping business services, look at potential benefits and
            pitfalls, understand how your business finances might work and
            ensure everything is in order.
          </Paragraph>
          <Paragraph big>
            In short, you need a business plan — here’s how to think about your
            business idea.
          </Paragraph>

          <Paragraph
            big
            style={{
              marginTop: "48px",
              fontFamily: "MarkPro",
              fontSize: "24px",
              color: color.black,
            }}
          >
            Do Market Research and Validate Your Landscaping Products and
            Services
          </Paragraph>
          <Paragraph big>
            Here’s a selection of advice on building and making money from an
            Instagram business.
          </Paragraph>
        </CenterBox>

        <GridSectionList>
          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={IdentifyIcon}
            imageBackgroundColor={color.babyblue2}
            imageShadowColor={color.babyblue2}
          >
            <Heading size={2} template={4} left>
              Identify your business’s unique selling points (USPs)
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              These are the areas that will set you apart from competitors and
              encourage customers to come to you. You might have better pricing,
              a higher-quality service, faster delivery or some other special
              feature. Early on, think about offering work at a better price so
              you can start to build up a portfolio.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={LookIcon}
            imageBackgroundColor={color.green2}
            imageShadowColor={color.green2}
          >
            <Heading size={2} template={4} left>
              Look at who your competitors are in the space
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Look at who your competitors are in the space: Having competitors
              is a good thing as it shows there’s a market. You will want to
              find out what local competitors offer the same services you do.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={MarketIcon}
            imageBackgroundColor={color.orange2}
            imageShadowColor={color.orange2}
          >
            <Heading size={2} template={4} left>
              Do market research
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Test whether people will commit to spending real money on what
              you’re offering.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={TalkIcon}
            imageBackgroundColor={color.purple2}
            imageShadowColor={color.purple2}
          >
            <Heading size={2} template={4} left>
              Talk to clients
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              See if there are any market research reports for landscaping
              businesses: Search locally, nationally or internationally.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={InvolvedIcon}
            imageBackgroundColor={color.red2}
            imageShadowColor={color.red2}
          >
            <Heading size={2} template={4} left>
              Get involved with business communities and discussion groups
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Ask questions about landscaping businesses. You can find links to
              some excellent discussion groups later in the article.
            </Paragraph>
          </TextBlockWithImage>
        </GridSectionList>

        <CenterBox>
          <Heading size={3}>
            Understand Your Landscaping Business Model and Financial Projections
          </Heading>
          <Paragraph big>
            All businesses need a business model, which is how you will generate
            sales, provide services and make money. Think about your business
            model now, because it’s better to have that in place so you can
            start acquiring customers and generating revenue from day one.
          </Paragraph>
          <Paragraph big>
            You will also need to look at financial projections for your
            landscaping business. What are your expected sales and revenues?
            What is your profitability? How much money will you keep in the
            business to grow it? How much will you pay yourself and others? If
            you can, try to plan your revenue for the next month, three months,
            year and two years.
          </Paragraph>
          <Paragraph big>
            One of the best ways to build a successful financial future is to
            sign clients on for recurring services, so you can bill them on a
            periodic basis. This is especially useful if you provide regular
            lawn care and yard maintenance.
          </Paragraph>
        </CenterBox>
      </Container>
    </BlueContainer>

    <SimpleSection>
      <Oval3>
        <OvalSvg3 />
      </Oval3>
      <Oval4>
        <OvalSvg4 />
      </Oval4>
      <Container>
        <CenterBox>
          <Heading size={2} template={1} left>
            Write a Business Plan for Your Landscaping Business
          </Heading>

          <Paragraph big>
            Finally, you should put your business plan together. Business plans
            do vary slightly, but they should cover the following areas:
          </Paragraph>

          <CountingTextBoxed number={1}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              An executive summary with the most important points from your
              business plan
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={2}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Your goals and what you hope to achieve with your landscaping
              business
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={3}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              A description of your business, background information and context
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={4}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              A market analysis and likely demand
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={5}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              An overview of how your business is structured
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={6}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Your business model
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={7}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              How you will market and sell your offerings
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={8}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Financial projections, revenue and profitability
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={9}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Appendices
            </Paragraph>
          </CountingTextBoxed>

          <Paragraph big mixed={true} style={{ marginTop: "50px" }}>
            We’ve got the perfect{" "}
            <Link to="https://www.incfile.com/blog/post/keys-successful-business-plan/">
              guide to writing your business plan.
            </Link>
          </Paragraph>
        </CenterBox>
      </Container>
    </SimpleSection>

    <OrangeContainer>
      <Oval>
        <OvalOrange2Svg />
      </Oval>

      <BusinessOwnerResponsibilities>
        <ImageContent image="unique-business-2" paddingTop="60">
          <Heading size={2} template={3} left>
            Choose the Right Business Structure and Register Your Landscaping
            Business
          </Heading>
          <Paragraph big>
            Now that you have all the background information for your
            landscaping business, it’s time to make it into a reality. Starts by
            choosing the right structure or “legal entity” for your business. In
            the U.S., there are five main business structures. They are:
          </Paragraph>

          <TextBlockWithImage
            SvgImage={HandsIcon}
            textBackgroundColor="transparent"
            imageBackgroundColor={color.white}
            imageShadowColor={shadow.white2}
            imageShadowOpacity={0.5}
            boxShadow={false}
            paddingLeft={0}
            style={{ marginTop: "40px" }}
            circleShadowY={40}
            circleShadowBlure={80}
            width={100}
            widthUnit="%"
          >
            <Paragraph
              big
              style={{ color: color.blue1, fontWeight: "bold" }}
              mixed={true}
            >
              Sole Proprietorship
            </Paragraph>

            <Paragraph big>
              This is the "default" business structure and is what your
              influencer business will be if you decide not to create a more
              formal structure. We don't recommend this type of business as it
              doesn't give you the legal protections you need.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            SvgImage={LimitedIcon}
            textBackgroundColor="transparent"
            imageBackgroundColor={color.white}
            imageShadowColor={shadow.white2}
            imageShadowOpacity={0.5}
            boxShadow={false}
            paddingLeft={0}
            style={{ marginTop: "40px" }}
            circleShadowY={40}
            circleShadowBlure={80}
            width={100}
            widthUnit="%"
          >
            <Paragraph
              big
              style={{ color: color.blue1, fontWeight: "bold" }}
              mixed={true}
            >
              <Link
                to={
                  process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"
                }
              >
                Limited Liability Company or LLC
              </Link>
            </Paragraph>

            <Paragraph big>
              The most common type of business entity. An LLC is fast, simple
              and inexpensive to setup and maintain. It protects your personal
              finances and assets and is a great way to start your real estate
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            SvgImage={SeriesIcon}
            textBackgroundColor="transparent"
            imageBackgroundColor={color.white}
            imageShadowColor={shadow.white2}
            imageShadowOpacity={0.5}
            boxShadow={false}
            paddingLeft={0}
            style={{ marginTop: "40px" }}
            circleShadowY={40}
            circleShadowBlure={80}
            width={100}
            widthUnit="%"
          >
            <Paragraph
              big
              style={{ color: color.blue1, fontWeight: "bold" }}
              mixed={true}
            >
              <Link
                to={
                  process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"
                }
              >
                Series LLC
              </Link>
            </Paragraph>

            <Paragraph big>
              This is a special type of LLC entity that's only available in
              certain states. It allows you to create "mini" LLCs, each with
              their own limited liability and separate assets, under the
              umbrella of a master LLC.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            SvgImage={PlaneIcon}
            textBackgroundColor="transparent"
            imageBackgroundColor={color.white}
            imageShadowColor={shadow.white2}
            imageShadowOpacity={0.5}
            boxShadow={false}
            paddingLeft={0}
            style={{ marginTop: "40px" }}
            circleShadowY={40}
            circleShadowBlure={80}
            width={100}
            widthUnit="%"
          >
            <Paragraph
              big
              style={{ color: color.blue1, fontWeight: "bold" }}
              mixed={true}
            >
              <Link
                to={
                  process.env.ORDER_URL +
                  "/form-order-now.php?entityType=SCorporation"
                }
              >
                S Corporation
              </Link>
            </Paragraph>

            <Paragraph big>
              This is a more complex type of business and isn't generally
              recommended for smaller organization.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            SvgImage={RockerIcon}
            textBackgroundColor="transparent"
            imageBackgroundColor={color.white}
            imageShadowColor={shadow.white2}
            imageShadowOpacity={0.5}
            boxShadow={false}
            paddingLeft={0}
            style={{ marginTop: "40px" }}
            circleShadowY={40}
            circleShadowBlure={80}
            width={100}
            widthUnit="%"
          >
            <Paragraph
              big
              style={{ color: color.blue1, fontWeight: "bold" }}
              mixed={true}
            >
              <Link
                to={
                  process.env.ORDER_URL +
                  "/form-order-now.php?entityType=CCorporation"
                }
              >
                C Corporation
              </Link>
            </Paragraph>

            <Paragraph big>
              These are the largest and most complex types of businesses and are
              far more than the average entrepreneur or business owner will
              need.
            </Paragraph>
          </TextBlockWithImage>

          <Paragraph
            big
            style={{ paddingTop: "48px", paddingBottom: 0 }}
            mixed={true}
          >
            For more information on the advantages and disadvantages of
            different types of businesses,{" "}
            <Link to="/business-entity-comparison/">
              please see our in-depth guide
            </Link>
            . If you’ve still got questions,{" "}
            <a
              href="https://grasshopper.com/blog/llc-vs-corporation-8-entrepreneur-questions-answered/"
              target="_blank"
              rel="noopener noreferrer"
            >
              we’ve answered them to help you choose the right business
              structure
            </a>{" "}
            for your landscaping business.
          </Paragraph>
          <Paragraph
            big
            style={{ paddingTop: "48px", paddingBottom: 0 }}
            mixed={true}
          >
            In most cases, our recommendation for a landscaping business would
            be to create an LLC. We’ve
            <Link to="/form-an-llc/">got a complete guide</Link> to everything
            you need to do.{" "}
            <Link to="/llc-state-information/">
              LLC formation does vary from state to state
            </Link>
            , but we’ve got you covered, wherever you are.
          </Paragraph>

          <Paragraph
            big
            style={{
              fontFamily: "Avenir",
              fontWeight: "900",
              marginTop: "48px",
              color: color.black,
              paddingBottom: 0,
            }}
          >
            Special Considerations for Setting up a Landscaping Business Entity
          </Paragraph>
          <Paragraph big>
            For more information on the advantages and disadvantages of
            different types of businesses, please see our in-depth guide on
            business entities. If you still have questions,{" "}
            <Link to="https://grasshopper.com/blog/llc-vs-corporation-8-entrepreneur-questions-answered/">
              we’ve answered them to help you choose the right business
              structure
            </Link>
            .
          </Paragraph>
          <Paragraph big mixed>
            In most cases our recommendation would be to create an LLC. We have{" "}
            <Link to="/form-an-llc/">
              a complete guide to everything you need to do
            </Link>
            , and we can set one up for your landscaping business.{" "}
            <Link to="/llc-state-information/">
              LLC formation does vary from state to state
            </Link>
            , but we’ve got you covered, wherever you are.
          </Paragraph>
          <Button
            theme="primary48"
            width="365px"
            arrow
            content={{
              url: `${process.env.ORDER_URL}/form-order-now.php`,
              text: `Start your business with us, today!`,
            }}
          />
        </ImageContent>
      </BusinessOwnerResponsibilities>
    </OrangeContainer>

    <SettingBusiness />

    <OrderNow />

    <HireEmployees />

    <UsefulTools
      style={{ paddingBottom: "16px" }}
      toolsList={toolsList.tools}
      headlineText={toolsList.headlineText}
      description={toolsList.description}
    />

    <Conclusion
      to={process.env.ORDER_URL + "/form-order-now.php"}
      buttonTitle="Start your Landscaping Business with us, today"
    >
      <Heading size={3} style={{ fontSize: "40px" }}>
        Conclusion
      </Heading>
      <Paragraph big>
        As you can see, there are several different types of landscaping
        service, and with the right approach and expertise you can make a splash
        in your local marketplace. Look into the types of maintenance and design
        you want to offer, and you can build a sustainable, thriving business
        that helps clients keep their grounds looking beautiful.
      </Paragraph>
    </Conclusion>
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

const BlueContainer = styled.section`
  background: ${color.blue3};
  padding-top: 100px;
  position: relative;
`;

const CenterBox = styled.div`
  width: 100%;
  padding-bottom: 48px;
  max-width: 770px;

  @media (min-width: 770px) {
    margin: 0 auto;
  }
`;

const GridSectionList = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100%;
  justify-content: center;
  column-gap: 30px;
  row-gap: 70px;
  margin-top: 76px;
  margin-bottom: 76px;

  @media (min-width: 490px) {
    grid-template-columns: 470px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 470px 470px;
  }
`;

const SimpleSection = styled.div`
  padding-top: 100px;
  position: relative;
`;

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  .colorbox {
    margin-bottom: 48px;
  }
`;

const OrangeContainer = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(254, 246, 237, 1) 100%
  );
  padding-bottom: 100px;
  position: relative;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 100px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const TabsWrapper = styled.div`
  margin-top: 120px;
  position: relative;
  @media (min-width: 992px) {
    margin-top: 21px;
  }
`;

const TabsOval = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const TabsOval2 = styled.div`
  position: absolute;
  right: 0;
  bottom: 284px;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval3 = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const Oval4 = styled.div`
  position: absolute;
  right: 0;
  bottom: 100px;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 720px) {
    width: 720px;
  }
`;

export default LandscapingBusiness;
