import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-right-transparent-green2.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import { Link } from "gatsby";
import {Heading} from "../../../atoms/typography/heading";

const SettingBusiness = () => (
  <WrapperContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <TextCenterLayout headline="Setting Up Your Dog Walking or Pet Sitting Business and Business Operations" headlineWidth={770} textWidth={770} text="Once you've legally created your dog walking or pet sitting business, you’ll need to get some other things in place." />

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" imageAlt="location of dog walking business" color={color.red3}>
          <Heading size={3} template={4}>Location of your Dog Walking or Pet Sitting business</Heading>
          <p>
            Your business location depends entirely on the type of canine business you’re running. If you’re walking dogs, you only need a place to administer your business, like a small home office. If you’re running a doggy daycare or a groomer, you may well need a specialized facility. It’s best
            to start small so you can prove out your dog business before committing to longer-term, expensive leases, rents or fees.
          </p>
        </TopImageBox>

        <TopImageBox image="display-ads" imageAlt="marketing of dog walking business" color={color.red3}>
          <Heading size={3} template={4}>Marketing Your Dog Walking or Pet Sitting Business</Heading>
          <p>
            Marketing will be a huge part of your dog walking, pet sitting or other business. Naturally, you will need an awesome website, but you'll also need to get branding, digital ads, social media accounts and other channels in place. Most of your advertising will be local, and you may want to
            get involved with local animal shelters, dog events and similar to get the word out.
          </p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" imageAlt="employess of dog walking business" color={color.orange3}>
          <Heading size={3} template={4}>Employees</Heading>
          <p>To start with, you will probably be running your business by yourself. Don’t think about hiring anyone else until you have a good customer base and can afford to expand.</p>
        </TopImageBox>

        <TopImageBox image="software" imageAlt="software and process of dog walking business" color={color.blue3}>
          <Heading size={3} template={4}>Software and Process</Heading>
          <p>The right software and processes will make running your dog walking or pet sitting business much easier. See our list of the best apps and software at the end of this guide.</p>
        </TopImageBox>

        <TopImageBox image="side-4" imageAlt="equipment of dog walking business" color={color.green3}>
          <Heading size={3} template={4}>Equipment for Your Dog Walking or Pet Sitting business</Heading>
          <p>Like the location, your equipment needs will vary depending on the type of business you run. A dog walking business might only need leashes, collars and treats, whereas a groomer will need all sorts of specialized tools and products.</p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" imageAlt="finance and taxes of dog walking business" color={color.yellow3}>
          <Heading size={3} template={4}>Finances and Taxes</Heading>
          <p>
            If you’re set up as an LLC or corporation, you will need a separate business bank account for your canine concern. Additionally, you will also need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile{" "}
            <Link to="/business-accounting/">we can even help you file your taxes</Link>.
          </p>
        </TopImageBox>
      </ImageBoxes>
    </Container>
  </WrapperContainer>
);

const WrapperContainer = styled.div`
  background: rgb(255, 255, 255);
  background-image: ${gradient.green3};
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
  right: 0;
  bottom: 366px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

export default SettingBusiness;
