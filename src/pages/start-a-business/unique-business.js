import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import styled from "styled-components";
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import { Heading } from "../../atomic/atoms/typography/heading";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import Colorbox from "../../components/color-box";
import { color } from "../../atomic/atoms/styles/colors";
import MegafonIcon from "../../images/icons/the-question-is-just-where-do-you-start.inline.svg";
import TypeBusiness from "../../atomic/sections/type-of-business/unique-business/type-business";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/unique-business/validating-business-idea";
import BusinessPlan from "../../atomic/sections/type-of-business/unique-business/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/unique-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/unique-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/unique-business/order-now";
import Regulations from "../../atomic/sections/type-of-business/unique-business/regulations";
import Taxes from "../../atomic/sections/type-of-business/unique-business/taxes";
import ToolsAndLinks from "../../atomic/sections/type-of-business/unique-business/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import OvalSvg from "../../images/ovals/bottom-left-transparent-pink1.inline.svg";

const UniqueBusiness = () => (
  <Layout>
    <SEO title="How to Start a Unique Business" description="Some of us like to do things a little differently, and that’s also true of business owners and entrepreneurs. If you’ve looked at some standard business ideas and thought “that’s not for me,” perhaps you need something a more unique." />

    <Top ovalColor="purple-2" imageName="unique-business-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
      <h1>How to Start a Unique Business</h1>
      <p>Some of us like to do things a little differently, and that’s also true of business owners and entrepreneurs. If you’ve looked at some standard business ideas and thought “that’s not for me,” perhaps you need something a more unique.</p>
      <ButtonsBox>
        <Button theme="primary56" marginMD="0 24px 0 0" arrow content={{ url: `${process.env.ORDER_URL}/form-order-now.php`, text: "Start Now" }} />
      </ButtonsBox>

      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>

    <SimpleContainer>
      <Oval>
        <OvalSvg />
      </Oval>

      <ImageContent image="business-startup-guides" paddingTop="60">
        <Heading size={3} style={{ marginBottom: 0, maxWidth: "100%" }}>
          Starting a niche business could be a great idea
        </Heading>
        <Paragraph big bottomMargin={0}>
          You’ll be creating products or services that people can’t easily get elsewhere, and you’ll be able to identify your target market and build up your marketing and reputation with them.
        </Paragraph>

        <Colorbox color={color.blue3} curve curveColor={color.blue1} theme="icon" Icon={MegafonIcon}>
          <Paragraph big style={{ fontWeight: "bold", marginBottom: "16px" }}>
            The question is, just where do you start? How do you find a unique business idea, test it out and bring it to life?
          </Paragraph>
          <Paragraph bottomMargin={0}>
            We can help. Since 2004, we’ve helped over 500,000 people like you become entrepreneurs, starting exciting businesses and bringing their ideas to life. We’ll give you the support, guidance and advice you need to create a unique business and make it into a success.
          </Paragraph>
        </Colorbox>

        <Paragraph big style={{ marginTop: "48px" }}>
          You’ll be creating products or services that people can’t easily get elsewhere, and you’ll be able to identify your target market and build up your marketing and reputation with them.
        </Paragraph>
      </ImageContent>
    </SimpleContainer>

    <TypeBusiness />

    <ValidatingBusinessIdea />

    <BusinessPlan />

    <BusinessStructure />

    <SettingBusiness />

    <OrderNow />

    <Regulations />

    <Taxes />

    <ToolsAndLinks />

    <Conclusion to="/" buttonTitle="Start your Unique Business with us, today">
      <Heading size={3} style={{ fontSize: "48px" }}>
        Conclusion
      </Heading>
      <Paragraph big>The internet has made it possible to pursue most business ideas, no matter how unique. If you can find a great niche, understand your competitors and put together a solid business plan, you will have every chance for success.</Paragraph>
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

const Oval = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const SimpleContainer = styled.section`
  margin-top: 120px;
  position: relative;
  @media (min-width: 992px) {
    margin-top: 21px;
  }
`;

export default UniqueBusiness;
