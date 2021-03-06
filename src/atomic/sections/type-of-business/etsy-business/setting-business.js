import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import Curve from "../../../../images/green-curve.inline.svg";
import GreenOval from "../../../../images/ovals/top-left-transparent-green1.inline.svg";
import ContentCenter from "../../../partials/content-center";
import { Link } from "@reach/router";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";

const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <OvalRight>
      <GreenOval />
    </OvalRight>

    <ContentCenter>
      <TextCenterLayout
        headline="Setting Up Your Etsy Shop"
        headlineWidth={770}
        textWidth={770}
        text="Once you've legally created your Etsy business, you’ll need to get some other things in place. The most obvious first step is to create your Etsy seller account at etsy.com. Etsy will walk you through creating a seller profile, adding your products, and creating store policies, like those for returns and exchanges and customer service. You'll want to have attractive product photos and descriptive listings to help people find your products."
      />
      <Paragraph big maxWidth={770}>
        There are other logistical matters you'll need to consider in order to
        get your Etsy shop up and running. These include:
      </Paragraph>
    </ContentCenter>

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" imageAlt="location of etsy business" color={color.red3}>
          <Heading size={3} template={4}>
            Location of your workshop
          </Heading>
          <p>
            Where are you going to create your products and run your business
            from? Some crafters may have a workshop at home, but remember you
            will need to store inventory and manage shipping. This can take up a
            lot of space. As your business grows, you might think about getting
            a more professional crafting space, complete with an area that's
            well lit for product photos.
          </p>
        </TopImageBox>

        <TopImageBox image="software" imageAlt="software of etsy business" color={color.blue3}>
          <Heading size={3} template={4}>
            Software that Integrates with Etsy
          </Heading>
          <p>
            Is there software that can help you manage and market your Etsy
            business? Some tools integrate with Etsy to help you manage your
            orders, estimate profits, create email campaigns, manage social
            media posts, or take better photos. There are also software
            platforms that help you cross-sell on other platforms, like
            Facebook. Explore whether these tools can help you run your business
            more effectively.
          </p>
        </TopImageBox>

        <TopImageBox image="display-ads" imageAlt="marketing of etsy business" color={color.purple3}>
          <Heading size={3} template={4}>
            Marketing on Etsy
          </Heading>
          <p>
            You will need to develop a brand and use digital marketing channels
            to drive traffic to your Etsy shop. This can include using keyword
            optimization in your Etsy listings so you show up in results, or it
            could include email and social media marketing. You also might want
            to consider paying for Etsy ads to get your listings more views.
            You'll find lots of great advice on these topics in the "Etsy
            Business Resources" later in this guide.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" imageAlt="equipment of etsy business" color={color.green3}>
          <Heading size={3} template={4}>
            Equipment
          </Heading>
          <p>
            What equipment do you need to manage your Etsy business? You will
            need a computer and smartphone at minimum, but you will also require
            crafting tools, machinery and raw materials. Make sure you account
            for likely demand and possible waste. Understand exactly what you
            need to spend so you can write it off against business expenses.
          </p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" imageAlt="finance and taxes of etsy business" color={color.yellow3}>
          <Heading size={3} template={4}>
            Finances and Taxes
          </Heading>
          <p>
            What kind of{" "}
            <a href="https://utility.bankofamerica.com/alliance/?formid=IF1" className="partner_link" data-name="Bank of America">
              bank account
            </a>{" "}
            will you get? Do you need a{" "}
            <a href="http://t.tihop.com/cgi/r?;n=203;c=1666272;s=7273;x=7936;f=201908011042310;u=j;z=TIMESTAMP;src=663024" className="partner_link" data-name="CardRatings">
              business credit card
            </a>
            ? How will you pay your business taxes? These are important
            questions to consider so your Etsy business stays in the green. Here
            at Incfile, we can even{" "}
            <Link to="/business-accounting/">help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="permits-licences" color={color.babyblue3}>
          <Heading size={3} template={4}>
            Life or Business Coach Qualification, Certification and Training
          </Heading>
          <p>
            Running an Etsy business comes with certain rules, regulations and
            legalities you need to be aware of. Incfile offers a Business
            License Research Package for you or you can take the time to do the
            research yourself.
          </p>
        </TopImageBox>

        <TopImageBox image="measuring-business-success" color={color.babyblue3}>
          <Heading size={3} template={4}>
            Business maintenance
          </Heading>
          <p>
            Most states require businesses to file an{" "}
            <Link to="/manage-your-company/annual-report/">Annual Report</Link>{" "}
            once a year. You will also be expected to pay estimated taxes on
            what you plan to earn in the current business year. Your federal,
            state, regional and city{" "}
            <Link to="/business-license-research-package/">
              business licenses and permits
            </Link>{" "}
            may need to be renewed on a regular basis, typically once a year.
          </p>
        </TopImageBox>

        <TopImageBox
                    image="we-doubled-the-size-of-customer-service"
                    imageAlt="employess of etsy business"
          color={color.orange3}
        >
          <Heading size={3} template={4}>
            Employees
          </Heading>
          <p>Do you need to hire employees to help you? More on that below.</p>

          <GreenCurve>
            <Curve />
          </GreenCurve>
        </TopImageBox>

        <TopImageBox image="organization-change-02" imageAlt="process of etsy business" color={color.green3}>
          <Heading size={3} template={4}>
            Processes
          </Heading>
          <p>
            Make sure you have the right processes in place to understand what
            your most popular products are and analytics on how your business is
            doing. Etsy has some built-in analytics that will help you here, but
            you'll want to make sure you know how to get these reports and that
            you look at them regularly. Again, you'll find helpful advice on
            developing these processes in the "Etsy Business Resources" later in
            this guide.
            <br />
            <br />
            You'll also want to find ways to manage your finances carefully and
            create your products in a cost-effective manner. Sometimes this can
            mean searching out cheaper resources for your raw materials, or
            cutting down on the time it takes to craft each individual item.
          </p>
        </TopImageBox>
      </ImageBoxes>
    </Container>
  </GreenContainer>
);

const GreenContainer = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(242, 248, 243, 1) 100%
  );
  padding-bottom: 100px;
  padding-top: 100px;
  position: relative;
  overflow: hidden;
`;

const ImageBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 112px;
  width: 100%;
  max-width: 970px;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 970px) {
    margin: 0 auto;
  }
`;

const GreenCurve = styled.div`
  position: absolute;
  right: -115px;
  bottom: -122px;
  width: 115px;
  display: none;

  @media (min-width: 720px) {
    display: block;
  }
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 720px;
  display: none;

  @media (min-width: 720px) {
    display: block;
  }
`;

const OvalRight = styled.div`
  position: absolute;
  right: 0;
  top: 220px;
  width: 720px;
  transform: scaleX(-1);
  display: none;

  @media (min-width: 720px) {
    display: block;
  }
`;
export default SettingBusiness;
