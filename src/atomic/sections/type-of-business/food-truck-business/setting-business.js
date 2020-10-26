import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/bottom-left-transparent-green2.inline.svg";
import { Link } from "gatsby";

const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>
    <Oval2>
      <GreenOval />
    </Oval2>

    <TextCenterLayout headline="Setting Up Your Food Truck and Business Operations" headlineWidth={770} textWidth={770} text="Once you've legally created your food truck business, you’ll need to get some other things in place." />

    <Container>
      <ImageBoxes>
        <TopImageBox image="display-ads" color={color.purple3}>
          <h4>Marketing Your Food Truck Business</h4>
          <p>
            Much of your marketing will come from being in the right place at the right time. You can also try local advertising with flyers, press, radio ads and other promotions. Don’t underestimate the power of local social media either- connecting with your customers can create great ongoing
            revenue.
          </p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" color={color.yellow3}>
          <h4>Finances and Taxes</h4>
          <p>
            You will need a separate business bank account for your food truck business. You might also want to consider a business credit card. Additionally, you will also need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile{" "}
            <Link to="/business-accounting/">we can even help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
          <h4>Employees</h4>
          <p>To begin with, you probably won’t need to hire anyone else for your food truck business, especially if you’re a good administrator. You can run the business yourself, and only think about employing others when you have the money and it makes sense.</p>
        </TopImageBox>

        <TopImageBox image="software" color={color.blue3}>
          <h4>Software and Process</h4>
          <p>The right software and processes will make running your food truck business a little easier, especially for financial management, point of sale and ingredient tracking. See our list of the best apps and software at the end of this guide.</p>
        </TopImageBox>

        <TopImageBox image="location" color={color.red3}>
          <h4>Location of Your Daycare: In Home or Out?</h4>
          <p>
            You’ll mainly be operating your business from the truck itself, and this will be your most important initial investment. You need a truck that has enough space to work, can fit all your equipment, allows easy access to customers, will fit into most parking lots and is easy to repair and
            maintain.
            <br />
            <br />
            You might buy an empty truck and build it out yourself, buy a truck that’s already been fitted out for food service or even get a preowned vehicle. Make sure you explore all your options and figure them into your business plan and expenses.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" color={color.green3}>
          <h4>Equipment for Your Daycare</h4>
          <p>
            You will need cooking and other special equipment for your food truck. Depending on the type of food you make, you may need a stove top, oven, grill, refrigerator, broiler or other cooking equipment. The appliances you choose will need to be engineered to fit into your food truck and
            secured so they’re safe to use.
          </p>
        </TopImageBox>
      </ImageBoxes>
    </Container>
  </GreenContainer>
);

const GreenContainer = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(242, 248, 243, 1) 100%);
  padding-bottom: 100px;
  padding-top: 100px;
  position: relative;
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
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 394px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  bottom: 447px;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 570px) {
    width: 570px;
  }
`;

export default SettingBusiness;
