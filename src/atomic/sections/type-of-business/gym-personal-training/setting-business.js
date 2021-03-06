import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import { Link } from "gatsby";
import {Heading} from "../../../atoms/typography/heading";

const SettingBusiness = () => (
  <WrapperContainer>
    <Oval>
      <OvalSvg />
    </Oval>

    <Oval2>
      <OvalSvg />
    </Oval2>

    <TextCenterLayout headline="Setting Up Business Operations" headlineWidth={770} textWidth={770} text="Once you've legally created your gym, fitness or personal training business, you’ll need to get some other things in place." />

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" imageAlt="location for your gym" color={color.babyblue3}>
          <Heading size={3} template={4}>Location of Your Gym</Heading>
          <p>
            If you’re running a gym, the location will be vital. You’ll need somewhere that’s easily accessible, with enough space for all the equipment you’ll need and classes you want to run. These types of spaces can be hard to find, so engage a commercial real estate agent who can provide
            options for renting and leasing space. Remember to take into account specialized needs like flooring for classes, reinforced areas for weights and multiple power points for fitness equipment.
          </p>
        </TopImageBox>

        <TopImageBox image="general-gym-and-fitness-ceter" imageAlt="equipment for your gym" color={color.red3}>
          <Heading size={3} template={4}>Equipment for Your Gym</Heading>
          <p>
            One of your main expenses for your gym will be fitness equipment. You’ll need special training devices for cardiovascular workouts like treadmills, rowing machines and cross trainers. You’ll also need other equipment like weights, balance balls, resistance machines and much more. Don’t
            forget to budget for all your fixtures and fittings, together with computer equipment and entertainment systems to keep members happy while they work out.
          </p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" imageAlt="employess for your gym" color={color.orange3}>
          <Heading size={3} template={4}>Employees</Heading>
          <p>If you’re a personal trainer, you probably won't need to hire anyone else. If you’re running a gym, it’s likely you’ll need to take on some staff to help you with administration, providing fitness classes and other tasks.</p>
        </TopImageBox>

        <TopImageBox image="software" imageAlt="software and process for your gym" color={color.blue3}>
          <Heading size={3} template={4}>Software and Process</Heading>
          <p>The right software and processes will make running your gym, fitness or personal training business much easier. See our list of the best apps and software at the end of this guide.</p>
        </TopImageBox>

        <TopImageBox image="franchise-2" imageAlt="location for your gym" color={color.green3}>
          <Heading size={3} template={4}>Location of Your Personal Training Business</Heading>
          <p>
            If you’re running a personal training business, you’ll have more flexibility. You may be able to rent a hall or event space when you need it for classes, or work with a local gym owner to provide services at their location. Some personal trainers may choose to provide classes in the
            great outdoors, but beware of weather changes.
          </p>
        </TopImageBox>

        <TopImageBox image="display-ads" imageAlt="marketing for your gym" color={color.red3}>
          <Heading size={3} template={4}>Marketing Your Gym, Fitness or Personal Training Business</Heading>
          <p>Marketing will be a huge part of your gym, fitness or personal training business. Naturally, you will need an awesome website, but you'll also need to get branding, newsletters, digital ads, social media accounts and other channels in place.</p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" imageAlt="finance and taxes for your gym" color={color.yellow3}>
          <Heading size={3} template={4}>Finances and Taxes</Heading>
          <p>
            You will need a separate business bank account for your gym or personal training business. You might also want to consider a business credit card. Additionally, you will need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile{" "}
            <Link to="/business-accounting/">we can even help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" imageAlt="equipment for your gym" color={color.green3}>
          <Heading size={3} template={4}>Equipment for Your Personal Training Business</Heading>
          <p>As a personal trainer, you’ll need far less equipment. Your exact needs will vary depending on the type of training you offer, but you will at least need some good sets of gym clothes and shoes, a mobile device to track signups and schedules and a reliable mode of transportation.</p>
        </TopImageBox>
      </ImageBoxes>
    </Container>
  </WrapperContainer>
);

const WrapperContainer = styled.div`
  background: rgb(255, 255, 255);
  background-image: ${gradient.blue3};
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
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  top: calc(50% - 210px);
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 420px) {
    width: 420px;
  }
`;

export default SettingBusiness;
