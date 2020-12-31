import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-right-transparent-babyblue2.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import { Link } from "gatsby";
import { Heading } from "../../../atoms/typography/heading";

const SettingBusiness = () => (
  <WrapperContainer>
    <Oval>
      <GreenOval />
    </Oval>
    <Oval2>
      <GreenOval />
    </Oval2>

    <TextCenterLayout
      headline="Setting up Your Boutique Hotel and Business Operations"
      headlineWidth={770}
      textWidth={770}
      text="Once you've legally created your bed and breakfast business, you’ll need to get some other things in place."
    />

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" color={color.red3}>
          <Heading size={3} template={4}>
            Location of your Bed and Breakfast or Hotel
          </Heading>
          <p>
            This is, by far, the most important choice you’ll make. You will
            need to secure a property large enough to give you all the B&B rooms
            you need to reliably generate revenue based on expected occupancy.
            Of course, you can choose to live in the property as well, which
            will reduce your expenses and ensure you’re on hand when needed.
            Choose a location that’s suited to the type of guests you want to
            attract. Look at other competitors in your immediate area, as you
            don’t want to be on each other’s doorsteps.
          </p>
        </TopImageBox>

        <TopImageBox image="display-ads" color={color.red3}>
          <Heading size={3} template={4}>
            Marketing Your Bed and Breakfast or Hotel
          </Heading>
          <p>
            Marketing will be a huge part of your bed and breakfast business.
            Naturally, you will need an awesome website, but you'll also need to
            get branding, newsletters, digital ads, social media accounts and
            other channels in place. You should also focus on review websites
            like TripAdvisor or Yelp. See if you can get into partnerships with
            travel agents and similar businesses, and market your B&B through
            travel portals and aggregators.
          </p>
        </TopImageBox>

        <TopImageBox image="software" color={color.blue3}>
          <Heading size={3} template={4}>
            Software and Process
          </Heading>
          <p>
            The right software and processes will make running your bed and
            breakfast business much easier. See our list of the best apps and
            software at the end of this guide.
          </p>
        </TopImageBox>

        <TopImageBox
          image="we-doubled-the-size-of-customer-service"
          color={color.orange3}
        >
          <Heading size={3} template={4}>
            Employees
          </Heading>
          <p>
            To begin with, you might want to do everything in your B&B yourself.
            Later on, you could look into hiring people for tasks like cleaning
            or cooking.
          </p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" color={color.yellow3}>
          <Heading size={3} template={4}>
            Finances and Taxes
          </Heading>
          <p>
            You will need a separate business bank account for your bed and
            breakfast business. You might also want to consider a business
            credit card. Additionally, you will also need to keep careful
            bookkeeping records and file business and personal taxes. Here at
            Incfile{" "}
            <Link to="/business-accounting/">
              we can even help you file your taxes
            </Link>
            .
          </p>
        </TopImageBox>
      </ImageBoxes>
    </Container>
  </WrapperContainer>
);

const WrapperContainer = styled.div`
  background: rgb(255, 255, 255);
  background-image: ${gradient.babyblue3};
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

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 394px;
  transform: rotate(180deg);
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  bottom: 555px;
  width: 100%;
  transform: scaleY(-1);

  @media (min-width: 420px) {
    width: 420px;
  }
`;

export default SettingBusiness;
