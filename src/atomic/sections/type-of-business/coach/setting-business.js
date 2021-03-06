import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import Curve from "../../../../images/green-curve.inline.svg";
import GreenOval from "../../../../images/ovals/top-right-transparent-green2.inline.svg";
import { Link } from "gatsby";
import {Heading} from "../../../atoms/typography/heading";
const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <TextCenterLayout headline="Setting up Your Life or Business Coaching Operations" headlineWidth={770} textWidth={770} text="Once you've legally created your coaching business, you’ll need to get some other things in place." />

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" imageAlt="location of coach business" color={color.red3}>
          <Heading size={3} template={4}>Location of Your Coaching Business</Heading>
          <p>
            Almost all coaching entrepreneurs can work from home, although you may need a dedicated space to meet with clients (or you may want to travel to their home or business location). This is great as it reduces your office costs considerably. Don't forget that if you work from home, you can
            write off part of your utility and housing costs against your taxes.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" imageAlt="equipment of coach business" color={color.green3}>
          <Heading size={3} template={4}>Equipment for Your Coaching Business</Heading>
          <p>It’s likely that the only equipment you will need to run your life or business coaching venture is a computer, laptop, tablet or smartphone. You will also want to invest in a wardrobe that keeps you presentable for client meetings.</p>
        </TopImageBox>

        <TopImageBox image="display-ads" imageAlt="marketing of coach business" color={color.purple3}>
          <Heading size={3} template={4}>Marketing Your Coaching Business</Heading>
          <p>Marketing will be a huge part of your coaching business. Naturally, you will need an awesome website, but you'll also need to get branding, newsletters, digital ads, social media accounts and other channels in place.</p>
        </TopImageBox>

        <TopImageBox image="software" imageAlt="software and processes of coach business" color={color.blue3}>
          <Heading size={3} template={4}>Software and Processes</Heading>
          <p>Life or business coaching entrepreneurs make extensive use of software; see our great list of the top apps at the end of this guide.</p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" imageAlt="finace and taxes of coach business" color={color.yellow3}>
          <Heading size={3} template={4}>Finances and Taxes</Heading>
          <p>
            You will need a separate{" "}
            <a className="partner_link" data-name="Bank of America" href="https://utility.bankofamerica.com/alliance/?formid=IF1" target="_blank" rel="noopener noreferrer">
              business bank account
            </a>{" "}
            for your coaching business. You might also want to consider a business credit card. Additionally, you will also need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile <Link to="/business-accounting/">we can even help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="permits-licences"  imageAlt="certificate of coach business" color={color.babyblue3}>
          <Heading size={3} template={4}>Life or Business Coach Qualification, Certification and Training</Heading>
          <p>It will likely help you to prove your expertise as a life or business coach with the right qualifications. Types of qualifications and certifications will vary depending on your chosen field.</p>

          <GreenCurve>
            <Curve />
          </GreenCurve>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service"  imageAlt="employess of coach business" color={color.orange3}>
          <Heading size={3} template={4}>Employees</Heading>
          <p>To begin with, you probably won’t need to hire anyone else for your life or business coaching business, especially if you’re a good administrator.</p>
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
`;

const Oval = styled.div`
  position: absolute;
  right: 0;
  top: 220px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

export default SettingBusiness;
