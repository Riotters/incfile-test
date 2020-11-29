import React from "react";
import styled from "styled-components";
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
import Tab1Icon from "../../images/icons/handyman.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import { Heading } from "../../atomic/atoms/typography/heading";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import Container from "../../atomic/container";
import TextBlockWithImage from "../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import { color } from "../../components/styles/colors";
import CountingTextBoxed from "../../atomic/molecules/text-blocks/counting-text-boxed";
import OvalGreenSvg from "../../images/ovals/top-left-transparent-blue3.inline.svg";
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import HandsIcon from "../../images/icons/hands.inline.svg";
import LimitedIcon from "../../images/icons/limited-liability-company-or-llc.inline.svg";
import SeriesIcon from "../../images/icons/limited-liability-company.inline.svg";
import PlaneIcon from "../../images/icons/plane.inline.svg";
import RockerIcon from "../../images/icons/rocket.inline.svg";
import SettingBusiness from "../../atomic/sections/type-of-business/side-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/side-business/order-now";
import Conclusion from "../../atomic/sections/general/conclusion";
import Adventages from "../../components/adventages";
import TypeOfBusiness from "../../atomic/sections/type-of-business/side-business/type-of-business";
import Links from "../../atomic/sections/type-of-business/side-business/links";
import Colorbox from "../../components/color-box";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/side-business/validating-business";
import Regulations from "../../atomic/sections/type-of-business/side-business/regulations";
import Taxes from "../../atomic/sections/type-of-business/side-business/taxes";
import Image from "../../atomic/atoms/image/image";
import { gradient } from "../../atomic/atoms/styles/colors";
import HandIcon from "../../images/icons/if-you-dont-know-how-to-start-a-side-business.inline.svg";
import OvalSvg from "../../images/ovals/top-right-transparent-yellow.inline.svg";
import OvalSvg2 from "../../images/ovals/top-left-transparent-orange2.inline.svg";
import { shadow } from "../../atomic/atoms/styles/shadows";
import { Link } from "gatsby";

const SideBusiness = () => (
  <Layout>
    <SEO
      title="How to Start a Side Business"
      description="Starting a side business is a great way to dip your toe into the waters of entrepreneurship. You can create and manage a side business alongside your normal job, so you’re reducing your risk and have a fallback position if the side business doesn’t work out."
    />

    <Top ovalColor="babyblue" imageName="side-business-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
      <h1>How to Start a Side Business</h1>
      <p>Starting a side business is a great way to dip your toe into the waters of entrepreneurship. You can create and manage a side business alongside your normal job, so you’re reducing your risk and have a fallback position if the side business doesn’t work out.</p>
      <ButtonsBox>
        <Button theme="primary56" marginMD="0 24px 0 0" arrow content={{ url: `${process.env.ORDER_URL}/form-order-now.php`, text: "Start Now" }} />
      </ButtonsBox>

      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>

    <TabsWrapper>
      <TabOval>
        <OvalSvg />
      </TabOval>
      <TabsSection>
        <TabHeading>
          <TabTitle title="Side Business" SvgIcon={Tab1Icon} />
          <TabTitle title="Why This Industry?" SvgIcon={Tab2Icon} />
        </TabHeading>

        <CollapseWrapper>
          <PanelWrapper>
            <Paragraph big>Of course, if the side business does work out and starts to grow, you can make an informed decision as to whether you want to focus on it full-time.</Paragraph>
            <Paragraph big>
              Until then, you’ll be able to work on your side business part-time at your own pace. You’ll still learn a great deal about starting and running a business, which will be incredibly valuable when you take your side business to the next level (or start up another new business).
            </Paragraph>

            <Colorbox curveColor={color.blue1} color={color.babyblue3} curve theme="icon" Icon={HandIcon}>
              <Paragraph big style={{ fontWeight: "bold" }}>
                If you don’t know how to start a side business, we’re here to help.
              </Paragraph>
              <Paragraph bottomMargin={0}>We’ve supported over 250,000 people to form their business and provided answers to transform them into entrepreneurs. We’ll guide you through what you need to know to create your side business and get it off the ground.</Paragraph>
            </Colorbox>

            <Paragraph big style={{ marginTop: "48px" }}>
              From validating your business and doing the research to filing your paperwork and running your business, this guide will help you out.
            </Paragraph>

            <Paragraph big>Read on for some insight into creating your own side business and becoming an entrepreneur.</Paragraph>
          </PanelWrapper>

          <PanelWrapper>
            <Heading size={3}>Why You Should Start a New Side Business</Heading>

            <Paragraph big>If you’re wondering how viable it is to start a side business in addition to your regular job, here are some statistics to inspire you.</Paragraph>

            <BubblesWrapper>
              <Bubbles>
                <BubbleImage>
                  <Image filename="mrs-bulb-final-comp-thumb-up-color" />
                </BubbleImage>
                <BubbleImage>
                  <Image filename="mrs-bulb-final-comp-thumb-up-color" />
                </BubbleImage>
                <BubbleImage>
                  <Image filename="mrs-bulb-final-comp-thumb-up-color" />
                </BubbleImage>
                <BubbleImage>
                  <Image filename="mrs-bulb-final-comp-thumb-up-color" />
                </BubbleImage>
                <BubbleImage>
                  <Image filename="mrs-bulb-final-comp-thumb-up-color" />
                </BubbleImage>
                <BubbleImage>
                  <Image filename="mrs-bulb-final-comp-thumb-up-color" />
                </BubbleImage>
                <BubbleImage>
                  <Image filename="mrs-bulb-final-comp-thumb-up-copy-4" />
                </BubbleImage>
                <BubbleImage>
                  <Image filename="mrs-bulb-final-comp-thumb-up-copy-4" />
                </BubbleImage>
                <BubbleImage>
                  <Image filename="mrs-bulb-final-comp-thumb-up-copy-4" />
                </BubbleImage>
                <BubbleImage>
                  <Image filename="mrs-bulb-final-comp-thumb-up-copy-4" />
                </BubbleImage>
              </Bubbles>
              <Text>Around 6 in 10 people who run a side business have a full-time job already</Text>
            </BubblesWrapper>

            <div style={{ marginBottom: "30px", marginTop: "48px" }}>
              <Adventages headline="Around a quarter of Americans have some sort of side business (almost 60 million people)" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="The main reason for starting a side business is to boost finances, with two-thirds of side business owners saying that was their main motivation" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="Just over half of side business owners said they could see their side business become a full-time career" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="Around six in 10 people who run a side business have a full-time job already Half of side business owners devote 10 or more hours a week to their side business" width="100%" />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Adventages headline="A quarter of side business entrepreneurs are using the business to make a lifestyle change or pursue their passion" width="100%" />
            </div>

            <Paragraph big>If you want to find out whether a side business is right for you, the time to start is now. We're here to help you figure out how to do that.</Paragraph>
          </PanelWrapper>
        </CollapseWrapper>
      </TabsSection>
    </TabsWrapper>

    <TypeOfBusiness />

    <ValidatingBusinessIdea />

    <SimpleSection>
      <OvalGreen>
        <OvalGreenSvg />
      </OvalGreen>
      <Container>
        <CenterBox>
          <Heading>Your Side Business Needs a Business Plan</Heading>

          <Paragraph big>
            It’s easy to think you won’t need a business plan for a side business, but they can give you a surprising number of benefits (especially if you want to expand your business). A business plan will help you define your side business, market yourself, get sales, make a profit and grow.
          </Paragraph>
          <Paragraph big>Business plans do vary slightly, but they should all cover the following areas:</Paragraph>

          <CountingTextBoxed number={1}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              An executive summary with the most important points from your business plan
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={2}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Your goals and what you hope to achieve with your side business
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={3}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              A description of your side business, background information and contex
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={4}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              A market analysis and likely demand
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={5}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              An overview of how your side business is structured
            </Paragraph>
          </CountingTextBoxed>

          <CountingTextBoxed number={6}>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Your online business model
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
      <Oval>
        <OvalSvg2 />
      </Oval>

      <BusinessOwnerResponsibilities>
        <ImageContent image="unique-business-2" paddingTop="60">
          <Heading size={4} style={{ fontSize: "24px" }}>
            Choose the Right Business Structure and Register Your Side Business
          </Heading>
          <Paragraph big>There are five main business structures you can have in the U.S., and it’s important to choose the right one. We’ve shared your options below. They are:</Paragraph>

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

            <Paragraph big>This is the "default" business structure and is what your side business will be if you decide not to create a more formal structure. We don't recommend this type of business as it doesn't give you the legal protections you need.</Paragraph>
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
              <Link to={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}>Partnership</Link>
            </Paragraph>

            <Paragraph big>This is a type of business that is formed when two or more people work together without creating a more formal business entity. Like a sole proprietorship, it may not give you all the protections your side business may need.</Paragraph>
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
              <Link to={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}>Limited Liability Company or LLC</Link>
            </Paragraph>

            <Paragraph big>The most common type of business entity, an LLC is fast, simple and inexpensive to set up and maintain. It protects your personal finances and assets and is a great way to start your side business.</Paragraph>
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
            Our <Link to="/business-entity-comparison/">in-depth guide</Link> covers more of the advantages and disadvantages of different types of business entities, and you’ve still got questions, you can read our answers to frequently asked questions on{" "}
            <a href="https://grasshopper.com/blog/llc-vs-corporation-8-entrepreneur-questions-answered/" target="_blank" rel="noopener noreferrer">
              choosing the right business structure
            </a>
            .
          </Paragraph>
          <Paragraph big style={{ paddingTop: "48px", paddingBottom: 0 }} mixed={true}>
            In most cases, our recommendation for a side business would be to create an LLC. See our
            <Link to="/form-an-llc/"> complete guide to creating an LLC</Link> to learn everything you need to do, or and have Incfile register your business for you. No matter what state you’re in, we’ve got you covered.
          </Paragraph>

          <Button theme="primary48" width="365px" arrow content={{ url: `${process.env.ORDER_URL}/form-order-now.php`, text: `Start your business with us, today!` }} />
        </ImageContent>
      </BusinessOwnerResponsibilities>
    </OrangeContainer>

    <SettingBusiness />

    <OrderNow />

    <Regulations />

    <Taxes />

    <Links />

    <Conclusion to="/" buttonTitle="Start your Side Business with us, today">
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

const CenterBox = styled.div`
  width: 100%;
  padding-bottom: 100px;
  max-width: 670px;

  @media (min-width: 670px) {
    margin: 0 auto;
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
  background-image: ${gradient.orange3};
  padding-bottom: 60px;
  position: relative;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 200px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const TabOval = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transform: scaleX(-1);

  svg {
    transform: scaleY(-1);
  }

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const OvalGreen = styled.div`
  position: absolute;
  left: 0;
  top: 60px;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const BubblesWrapper = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 30px;
  margin-bottom: 50px;
`;

const Bubbles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Text = styled.div`
  text-align: center;
  font-family: Avenir, sans-serif;
  font-weight: 900;
  font-size: 20px;
  color: #1d1d1d;
  max-width: 500px;
  margin: 0 auto;
`;

const BubbleImage = styled.div`
  width: 20%;
  margin-bottom: 40px;

  > div {
    width: 74px;
    margin: 0 auto;
    height: 110px;
  }
`;

const TabsWrapper = styled.div`
  margin-top: 120px;
  position: relative;
  @media (min-width: 992px) {
    margin-top: 21px;
  }
`;

export default SideBusiness;
