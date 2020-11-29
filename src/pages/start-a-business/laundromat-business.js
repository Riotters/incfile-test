import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import TabsSection from "../../atomic/partials/tabs";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import Tab1Icon from "../../images/icons/laundromat.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";
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
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import HandsIcon from "../../images/icons/hands.inline.svg";
import LimitedIcon from "../../images/icons/limited-liability-company-or-llc.inline.svg";
import SeriesIcon from "../../images/icons/limited-liability-company.inline.svg";
import PlaneIcon from "../../images/icons/plane.inline.svg";
import RockerIcon from "../../images/icons/rocket.inline.svg";
import SettingBusiness from "../../atomic/sections/type-of-business/laundromat/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/laundromat/order-now";
import { RingText, RingText2, toolsList } from "../../static/type-of-business/laundromat";
import HireEmployees from "../../atomic/sections/type-of-business/laundromat/hire-employees";
import UsefulTools from "../../atomic/partials/useful-tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import Adventages from "../../components/adventages";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import ColorfulRing2 from "../../images/rings.inline.svg";
import styled from "styled-components";
import OvalSvg from "../../images/ovals/top-right-transparent-yellow.inline.svg";
import OvalSvg2 from "../../images/ovals/bottom-right-transparent-pink2.inline.svg";
import OvalSvg3 from "../../images/ovals/top-right-transparent-blue.inline.svg";
import OvalSvg4 from "../../images/ovals/bottom-right-transparent-green3.inline.svg";
import OvalSvg5 from "../../images/ovals/top-right-transparent-pink2.inline.svg";
import OvalSvg6 from "../../images/ovals/top-left-transparent-orange2.inline.svg";
import OvalSvg7 from "../../images/ovals/top-right-transparent-green3.inline.svg";
import { shadow } from "../../atomic/atoms/styles/shadows";
import { Link } from "gatsby";

const LandscapingBusiness = () => (
  <Layout>
    <SEO title="How to Start a Laundromat Business" description="The most successful businesses in the world are those that meet a genuine personal need. The laundromat is a great example of this type of business" />

    <Top ovalColor="sun" imageName="laundromat-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
      <h1>How to Start a Laundromat Business</h1>
      <p>The most successful businesses in the world are those that meet a genuine personal need. The laundromat is a great example of this type of business</p>
      <ButtonsBox>
        <Button theme="primary56" marginMD="0 24px 0 0" arrow content={{ url: `${process.env.ORDER_URL}/form-order-now.php`, text: "Start Now" }} />
      </ButtonsBox>

      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>

    <TabsWrapper>
      <TabsOval>
        <OvalSvg />
      </TabsOval>
      <TabsOval2>
        <OvalSvg2 />
      </TabsOval2>
      <TabsSection>
        <TabHeading>
          <TabTitle title="Laundromat Business" SvgIcon={Tab1Icon} />
          <TabTitle title="Why This Industry" SvgIcon={Tab2Icon} />
          <TabTitle title="Is This Business For You?" SvgIcon={Tab3Icon} />
        </TabHeading>

        <CollapseWrapper>
          <PanelWrapper>
            <Heading size={3}>Starting a Landscaping Business</Heading>
            <Paragraph big>
              The most successful businesses in the world are those that meet a genuine personal need — they provide basic necessities to people to help them feel safe, comfortable and looked after. The laundromat is a great example of this type of business, providing a basic but essential service.
              If online selling or being a digital nomad isn’t for you, a laundromat is a reliable, sustainable alternative.
            </Paragraph>
            <Paragraph big>
              Like cleaning businesses, laundromats help your customers meet their most basic needs — cleanliness and comfort. It might not have the kudos of consultancy or the flashy screens of the latest consumer device, but people will always need clean clothes. Coin-operated laundromat
              businesses don’t need a huge amount of administrative overhead either, so they can be a good way to break into the entrepreneurship space.
            </Paragraph>
            <Paragraph big>Laundromats are also referred to as coin-op laundries, coin laundries, coin-operated laundries or self-service laundries.</Paragraph>

            <Heading size={3} style={{ marginTop: "48px", fontSize: "20px" }}>
              Laundromat business formation guide
            </Heading>
            <Paragraph big>In this guide we’ll explore everything you need to do to set up your laundromat business and maximize your chances for success. We’ll cover:</Paragraph>

            <ListWrapper>
              <ListBox>
                <CkeckText>
                  <Paragraph big>Understanding the world of the laundromat</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Paying taxes and for your laundromat business</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Deciding if you’re ready to start a laundromat business</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Hiring employees, managing finances and administering your laundromat business</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Planning out your laundromat business</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Locating other resources for your laundromat business</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Determining the best legal structure for your new organization</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>Following various rules and regulations</Paragraph>
                </CkeckText>
              </ListBox>

              <ListBox>
                <CkeckText>
                  <Paragraph big>And much more</Paragraph>
                </CkeckText>
              </ListBox>
            </ListWrapper>

            <Paragraph big>By the time you’ve read through our complete laundromat business guide, you will have all the information you need to set up and manage a thriving laundromat business. Let’s get into it.</Paragraph>
          </PanelWrapper>

          <PanelWrapper>
            <Heading size={3}>Understanding the World of the Laundromat Business</Heading>

            <Paragraph big style={{ fontWeight: "bold" }}>
              Key Laundromat Business and Background Data and Statistics
            </Paragraph>

            <Paragraph big>The size and success of laundromat businesses might surprise you:</Paragraph>

            <BlueBoxWithAbsoluteText absoluteText="$4B" text="Revenue of laundromats in the U.S. in 2016" />
            <BlueBoxWithAbsoluteText absoluteText="$4.3B" text="Revenue is expected to grow by 2020" />
            <BlueBoxWithAbsoluteText absoluteText="$666M" text="Total wages in the industry in 2016" />
            <BlueBoxWithAbsoluteText absoluteText="50K" text="People are employed by Laundromats" />

            <ColorFulCircleWithTextAndList CircleSVG={ColorfulRing2} title={RingText.title} list={RingText.list} withBg={true} />

            <ColorFulCircleWithTextAndList CircleSVG={ColorfulRing2} title={RingText2.title} list={RingText2.list} withBg={true} style={{ marginTop: "48px" }} />

            <div style={{ marginBottom: "10px", marginTop: "48px" }}>
              <Adventages headline="There are nearly 30,000 coin laundries in the U.S." width="100%" />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <Adventages headline="The market value of an established coin laundry can vary between $50,000 and $1 million" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="Annual growth in the overall market is expected to be between 1 and 1.5 percent" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="A typical coin-operated laundry will generate yearly revenues of between $15,000 and $300,000 depending on size, location, usage and services" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="Laundromats are normally sized between 1,000 to 5,000 square feet with an average of nearly 2,200 square feet" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="Laundromats have been used for over 70 years" width="100%" />
            </div>

            <Paragraph big>
              This all points to the laundromat industry being ripe with new opportunities for focused entrepreneurs, so now might be the perfect time to dive into starting your laundromat business. Incfile is here to help you form your laundromat business and understand the ins and outs of owning a
              laundromat company.
            </Paragraph>

            <Paragraph big style={{ fontWeight: "bold" }}>
              What Your Laundromat Customers Are Looking for
            </Paragraph>

            <Paragraph big>
              A laundromat is a simple concept: you provide reliable, efficient, commercial washers and dryers in a retail space and request payment for the usage of the machines. Most laundromats are self-service, simply requiring that the customer purchase a certain amount of time using a washer
              or dryer.
            </Paragraph>
            <Paragraph big>
              Your customers want simple, easy-to-use machines that provide fast, effective washing and drying of clothes at a reasonable price. Ideally, you will want your laundromat business to be well-located, so placing your business in densely-populated, renter-occupied areas is a very good
              idea.
            </Paragraph>
            <Paragraph big>
              Access to and from your site needs to be straightforward, and you should have adequate parking for all your customers. Coin-operated machines are the standard in the industry, but card operated machines are also available — you can even combine these with membership schemes and
              incentives to keep customers loyal.
            </Paragraph>
            <Paragraph big>There are two main types of laundromat businesses: standard independent retail laundromats, and laundromats that are located inside apartment buildings to serve the residents. This second type of laundry business is known as the multi-housing laundry business.</Paragraph>
          </PanelWrapper>

          <PanelWrapper>
            <Heading size={3}>What Are the Challenges and Benefits of a Laundromat Entrepreneur?</Heading>

            <Paragraph big>If you want to start a laundromat business, it’s important to know what to expect.</Paragraph>

            <Paragraph big style={{ fontWeight: "bold" }}>
              Challenges of Running a Laundromat
            </Paragraph>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="Long hours" text="Laundromats typically open between 6 a.m. and 10 p.m." width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="People management" text="Dealing with staff, coverage issues and other people management areas" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="Costs" text="The main operational costs of a laundromat are staff wages and capital expenses" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="Capital expenses" text="Laundromat owners will spend a substantial amount on buying, upgrading, maintaining and repairing machines, coin changers, vehicles and other items" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="Other expenses" text="Other major expenses include property tax and utility costs (especially electricity, water and wastewater)" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="Main skills" text="You will need skill in maintenance, collections, employee management, bookkeeping, administration and several other areas" width="100%" />
            </div>

            <Paragraph big style={{ fontWeight: "bold" }}>
              Benefits of Running a Laundromat
            </Paragraph>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="Resilient" text="Laundromats do well in any market conditions, as people will always need clean clothes" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="Hands off" text="In many cases, laundromats do not need an enormous amount of staff oversight" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="Steady income" text="Laundromat owners will spend a substantial amount on buying, upgrading, maintaining and repairing machines, coin changers, vehicles and other items" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="No inventory" text="You do not need to take in and sell stock, meaning you don’t have money tied up in inventory" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="Upselling services" text="You can provide further services, laundry detergent, offer snacks, sell coffee, etc." width="100%" />
            </div>
          </PanelWrapper>
        </CollapseWrapper>
      </TabsSection>
    </TabsWrapper>

    <BlueContainer>
      <Oval3>
        <OvalSvg3 />
      </Oval3>

      <CenterBox>
        <TextCenterLayout headlineWidth={770} headline="Plan Your Laundromat Business" />
        <Paragraph big>
          Before you start your business, there are a few key areas you need to focus on. You will need to establish whether there’s a demand for your laundromat in your area, look at potential benefits and pitfalls, understand how your business finances might look and ensure everything is in order.
        </Paragraph>
        <Paragraph big>In short, you need a business plan — here’s how to think about your business idea.</Paragraph>
      </CenterBox>

      <CenterBox>
        <Paragraph big style={{ fontFamily: "Avenir", fontWeight: "900", color: color.black }}>
          Do Market Research and Validate Your Laundromat Products and Services
        </Paragraph>
        <Paragraph big>Before you launch your laundromat business, you need to understand if there’s a demand. That means carrying out market research and “validating” your services. Here’s how to go about it:</Paragraph>
      </CenterBox>

      <Container>
        <GridSectionList>
          <TextBlockWithImage width={100} widthUnit="%" SvgImage={IdentifyIcon} imageBackgroundColor={color.babyblue2} imageShadowColor={color.babyblue2}>
            <Heading size={4}>Identify your business’s unique selling points (USPs)</Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              These are the areas that will set you apart from competitors and encourage customers to come to you. You might have better pricing, a higher-quality service, a loyalty plan or some other special feature.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage width={100} widthUnit="%" SvgImage={LookIcon} imageBackgroundColor={color.green2} imageShadowColor={color.green2}>
            <Heading size={4}>Look at who your competitors are in the space</Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Having competitors is a good thing as it shows there’s a market. See how many other laundromats are operating in your town or city and their “catchment area” — try to find an optimal location so you’re not competing too directly.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage width={100} widthUnit="%" SvgImage={InvolvedIcon} imageBackgroundColor={color.red2} imageShadowColor={color.red2}>
            <Heading size={4}>Get involved with business communities and discussion groups</Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Ask questions about laundromat businesses. You can find links to some excellent discussion groups later in the article.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage width={100} widthUnit="%" SvgImage={MarketIcon} imageBackgroundColor={color.yellow2} imageShadowColor={color.yellow2}>
            <Heading size={4}>See if there are any market research reports for beauty salon businesses</Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              See if there are any market research reports for beauty salon businesses
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage width={100} widthUnit="%" SvgImage={TalkIcon} imageBackgroundColor={color.purple2} imageShadowColor={color.purple2}>
            <Heading size={4}>Talk to clients</Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              See if there are any market research reports for landscaping businesses: Search locally, nationally or internationally.
            </Paragraph>
          </TextBlockWithImage>
        </GridSectionList>

        <CenterBox>
          <Heading size={3}>Understand Your Laundromat Business Model and Financial Projections</Heading>
          <Paragraph big>All businesses need a business model, which is how you will generate sales, provide services and make money. Think about your business model now, because it’s better to have that in place so you can start acquiring customers and generating revenue from day one.</Paragraph>
          <Paragraph big>You will also need to look at financial projections for your laundromat business. What are your expected sales and revenues? What is your profitability? How much money will you keep in the business to grow it? How much will you pay yourself and others?</Paragraph>
          <Paragraph big>If you can, try to plan your revenue for the next month, three months, year and two years. It’s vital to take into account the high capital cost of setting up a laundromat in the first place, also factoring in utility, staff and other costs.</Paragraph>
        </CenterBox>
      </Container>
    </BlueContainer>

    <SimpleSection>
      <Oval>
        <OvalSvg4 />
      </Oval>
      <Oval4>
        <OvalSvg5 />
      </Oval4>

      <Container>
        <CenterBox>
          <Heading>Write a Business Plan for Your Laundromat Business</Heading>

          <Paragraph big>Finally, you should put your business plan together. Business plans do vary slightly, but they should cover the following areas:</Paragraph>

          <CountingTextBoxed number={1}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              An executive summary with the most important points from your business plan
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={2}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Your goals and what you hope to achieve with your coaching business
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={3}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              A description of your life or business coaching niche, background information and context
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={4}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              A market analysis and likely demand
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={5}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              An overview of how your life or business coaching organization is structured
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
            We’ve got the perfect <Link to="/blog/post/keys-successful-business-plan/">guide to writing your business plan.</Link>
          </Paragraph>
        </CenterBox>
      </Container>
    </SimpleSection>

    <OrangeContainer>
      <Oval6>
        <OvalSvg6 />
      </Oval6>

      <BusinessOwnerResponsibilities>
        <ImageContent image="unique-business-2" paddingTop="60">
          <Heading size={4} style={{ fontSize: "24px" }}>
            Choose the Right Business Structure and Register Your Laundromat Business
          </Heading>
          <Paragraph big>Now that you have all the background information for your laundromat business, it’s time to make it into a reality. Starts by choosing the right structure or “legal entity” for your business. In the U.S., there are four main business structures. They are:</Paragraph>

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
            <Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed={true}>
              Sole Proprietorship
            </Paragraph>

            <Paragraph big>This is the "default" business structure and is what your business will be if you decide not to create a more formal structure. We don't recommend this type of business as it doesn't give you the legal protections you need.</Paragraph>
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
            <Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed={true}>
              <Link to={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}>Limited Liability Company or LLC</Link>
            </Paragraph>

            <Paragraph big>The most common type of business entity. An LLC is fast, simple and inexpensive to setup and maintain. It protects your personal finances and assets and is a great way to start your real estate</Paragraph>
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
<Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed={true}>
              <Link to={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}>Series LLC</Link>
            </Paragraph>

            <Paragraph big>This is a special type of LLC entity that's only available in certain states. It allows you to create "mini" LLCs, each with their own limited liability and separate assets, under the umbrella of a master LLC.</Paragraph>
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
            <Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed={true}>
              <Link to={process.env.ORDER_URL + "/form-order-now.php?entityType=S-Corporation"}>S Corporation</Link>
            </Paragraph>

            <Paragraph big>This is a more complex type of business and isn't generally recommended for smaller organization.</Paragraph>
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
            <Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed={true}>
              <Link to={process.env.ORDER_URL + "/form-order-now.php?entityType=C-Corporation"}>C Corporation</Link>
            </Paragraph>

            <Paragraph big>These are the largest and most complex types of businesses and are far more than the average entrepreneur or business owner will need.</Paragraph>
          </TextBlockWithImage>

          <Paragraph big style={{ paddingTop: "48px", paddingBottom: 0 }} mixed={true}>
            For more information on the advantages and disadvantages of different types of businesses, <Link to="/business-entity-comparison/">please see our in-depth guide</Link>. If you’ve still got questions,{" "}
            <a href="https://grasshopper.com/blog/llc-vs-corporation-8-entrepreneur-questions-answered/" target="_blank" rel="noopener noreferrer">
              we’ve answered them to help you choose the right business structure
            </a>{" "}
            for your laundromat business.
          </Paragraph>
          <Paragraph big style={{ paddingTop: "48px", paddingBottom: 0 }} mixed={true}>
            In most cases our recommendation would be to create an LLC. We have a <Link to="/form-an-llc/">complete guide to everything you need to do</Link>, and we can set one up for your laundromat business. <Link to="/llc-state-information/">LLC formation does vary from state to state</Link>, but
            we’ve got you covered, wherever you are.
          </Paragraph>

          <Button theme="primary48" width="365px" arrow content={{ url: `${process.env.ORDER_URL}/form-order-now.php`, text: `Start your business with us, today!` }} />
        </ImageContent>
      </BusinessOwnerResponsibilities>
    </OrangeContainer>

    <SettingBusiness />

    <OrderNow />

    <HireEmployees />

    <ToolsWrapper>
      <Oval7>
        <OvalSvg7 />
      </Oval7>
      <UsefulTools style={{ paddingBottom: "200px" }} toolsList={toolsList.tools} headlineText={toolsList.headlineText} description={toolsList.description} />
    </ToolsWrapper>

    <Conclusion to="/" buttonTitle="Start your Laundromat Business with us, today">
      <Heading size={3} style={{ fontSize: "40px" }}>
        Conclusion
      </Heading>
      <Paragraph big>
        If you’re after a straightforward, easy-to-understand, in-demand business and have the money to invest in machinery, owning a laundromat could be a great opportunity. There’s not a lot of administrative overhead, and with the right location you will have a resilient income stream for years
        to come. Do your research and find the right space; you can develop a thriving laundromat business to serve the needs of your local community and provide you with a good living.
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
  padding-bottom: 80px;
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
    margin-bottom 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
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
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(254, 246, 237, 1) 100%);
  padding-bottom: 100px;
  position: relative;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 420px;
  transform: rotate(180deg);
  display: none;

  @media (min-width: 1200px) {
    display: block;
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
  width: 100%;
  top: 0px;
  left: 0;
  transform: rotate(180deg);

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const TabsOval2 = styled.div`
  position: absolute;
  width: 100%;
  top: 436px;
  right: 0;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const Oval3 = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval4 = styled.div`
  position: absolute;
  width: 100%;
  bottom: 100px;
  right: 0;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const Oval6 = styled.div`
  position: absolute;
  width: 100%;
  top: 211px;
  left: 0;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const ToolsWrapper = styled.div`
  position: relative;
`;

const Oval7 = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  z-index: -1;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

export default LandscapingBusiness;
