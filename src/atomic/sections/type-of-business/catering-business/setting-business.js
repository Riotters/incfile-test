import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-right-transparent-green2.inline.svg";
import ContentCenter from "../../../partials/content-center";
import { Link } from "gatsby";
import {Heading} from "../../../atoms/typography/heading";

const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <ContentCenter contentWidth={770}>
      <TextCenterLayout headline="Set up & Maintain Your Catering Business" headlineWidth={770} textWidth={770} text="Once you've legally created your catering business, you’ll need to get some other things in place." />
    </ContentCenter>

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" color={color.red3}>
          <Heading size={3} template={4}>Business location</Heading>
          <p>Depending on the size of your business, you will need a location with excellent kitchen facilities. It must be easily accessible, should meet the needs of your staff and clients and shouldn’t eat into your profit margins too much.</p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
          <Heading size={3} template={4}>Employees</Heading>
          <p>You will need to hire employees throughout your catering business. From chefs to serving staff to assistant cooks, getting your staff balance right is essential to your success.</p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" color={color.yellow3}>
          <Heading size={3} template={4}>Finances and Taxes</Heading>
          <p>
            What kind of bank account will you get? And how will you pay your business taxes? These are all important things to consider so your catering business stays in the green. Here at Incfile, we can even <Link to="/business-accounting/">help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="permits-licences" color={color.babyblue3}>
          <Heading size={3} template={4}>Permits and licenses</Heading>
          <p>
            Running a catering business comes with certain rules, regulations and legalities you need to be aware of, especially around staff health and safety and food hygiene and preparation. Incfile can conduct a <Link to="/business-license-research-package/">Business License Research</Link>{" "}
            package for you, or you can take the time to do the research yourself.
          </p>
        </TopImageBox>

        <TopImageBox image="display-ads" color={color.purple3}>
          <Heading size={3} template={4}>Marketing</Heading>
          <p>Your catering business likely needs its own website, and you will also need to develop a local brand, logo and other marketing collateral. You should engage with local marketing firms who understand your immediate marketplace and can provide advice on getting your name out there.</p>
        </TopImageBox>

        <TopImageBox image="side-4" color={color.green3}>
          <Heading size={3} template={4}>Equipment and ingredients</Heading>
          <p>Caterers need a lot of upfront capital to invest in equipment, fixtures and furniture. From kitchen equipment to tables, chairs, plates and silverware, you will need to carefully budget everything you spend. Add to that the cost of ingredients, and you must keep a tight rein on expenses.</p>
        </TopImageBox>

        <TopImageBox image="software" color={color.blue3}>
          <Heading size={3} template={4}>Software</Heading>
          <p>There are many software products specifically for caterers that can make managing this business much easier. From taking orders to checks and food preparation to point of sale, the right software will make running a catering company more efficient and cost-effective.</p>
        </TopImageBox>

        <TopImageBox image="measuring-business-success" color={color.babyblue3}>
          <Heading size={3} template={4}>Business maintenance</Heading>
          <p>
            Most states require businesses to file an <Link to="/manage-your-company/annual-report/">Annual Report</Link> report once a year. You will also be expected to pay estimated taxes on what you plan to earn in the current business year. Four federal, state, regional and city{" "}
            <Link to="/business-license-research-package/">business licenses and permits</Link> may need to be renewed on a regular basis, typically once a year.
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

const Oval = styled.div`
  position: absolute;
  right: 0;
  top: 220px;
  width: 100%;
  display: none;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

export default SettingBusiness;
