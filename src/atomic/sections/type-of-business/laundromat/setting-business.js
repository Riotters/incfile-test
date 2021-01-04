import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-left-transparent-green1.inline.svg";
import ContentCenter from "../../../partials/content-center";
import { gradient } from "../../../atoms/styles/colors";
import { Link } from "gatsby";
import {Heading} from "../../../atoms/typography/heading";

const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>
    <Oval2>
      <GreenOval />
    </Oval2>

    <ContentCenter contentWidth={770}>
      <TextCenterLayout headline="Setup Your Laundromat Business" headlineWidth={770} textWidth={770} text="Once you've legally created your laundromat business, you’ll need to get some other things in place." />
    </ContentCenter>

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" imageAlt="location" color={color.red3}>
          <Heading size={3} template={4}>Location of Your Business</Heading>
          <p>This is one of the most essential parts of your laundromat. Finding the right location with the perfect demographics, great access, a good footprint and other factors will be essential to your success.</p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" imageAlt="employees" color={color.orange3}>
          <Heading size={3} template={4}>Employees</Heading>
          <p>Do you need to hire employees to help you? Although it’s possible to just run the laundromat yourself, you may want to hire janitorial staff who can look after it in your absence.</p>
        </TopImageBox>

        <TopImageBox image="measuring-business-success" imageAlt="business maintenance" color={color.babyblue3}>
          <Heading size={3} template={4}>Business maintenance</Heading>
          <p>
            Most states require businesses to file an Annual Report once a year. You will also be expected to pay estimated taxes on what you plan to earn in the current business year. Your federal, state, regional and city business licenses and permits may need to be renewed on a regular basis,
            typically once a year.
          </p>
        </TopImageBox>

        <TopImageBox image="display-ads" imageAlt="marketing" color={color.purple3}>
          <Heading size={3} template={4}>Marketing</Heading>
          <p>Most of your marketing is likely to be shop front, local advertising and word of mouth. Focus on local SEO and listings and take out ads in papers and other local media.</p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" imageAlt="finance and taxes" color={color.yellow3}>
          <Heading size={3} template={4}>Finances and taxes</Heading>
          <p>
            What kind of bank account will you get? Do you need a business credit card? How will you pay your business taxes? These are important questions to consider so your laundromat business stays in the green. Here at Incfile,{" "}
            <Link to="/business-accounting/">we can even help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="permits-licences" imageAlt="permit and license" color={color.green3}>
          <Heading size={3} template={4}>Premits and licenses</Heading>
          <p>Running a laundromat business comes with certain rules, regulations and legalities you need to be aware of. Incfile offers a Business License Research Package for you, or you can take the time to do the research yourself. Some states do require a specific laundromat license.</p>
        </TopImageBox>

        <TopImageBox image="side-3" imageAlt="equipment" color={color.orange3}>
          <Heading size={3} template={4}>Equipment</Heading>
          <p>
            What equipment do you need to manage your laundromat business? You will need enough washers and dryers to handle peak demand and may also want to invest in other equipment like coin changers, soap dispensers, furniture, computers and other areas. You may want to buy a van or other
            vehicle if you plan to pick up or drop off laundry. Make sure you understand exactly what you need to spend so you can write it off against business expenses.
          </p>
        </TopImageBox>

        <TopImageBox image="organization-change-02" imageAlt="process" color={color.green3}>
          <Heading size={3} template={4}>Process</Heading>
          <p>
            You will want an efficient way to collect revenue from your laundromat. Since much of your money is going to be in the form of cash and coins, it makes sense to process all that money in an efficient way. Make sure you have good banking processes. You should also have good processes in
            place for maintaining and repairing machines.
          </p>
        </TopImageBox>
      </ImageBoxes>
    </Container>
  </GreenContainer>
);

const GreenContainer = styled.div`
  background: rgb(255, 255, 255);
  background: ${gradient.green3};
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
  top: 0;
  width: 100%;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  top: 220px;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 720px) {
    width: 720px;
  }
`;

export default SettingBusiness;
