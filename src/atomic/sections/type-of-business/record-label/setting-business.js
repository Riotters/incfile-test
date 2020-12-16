import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";
import { Link } from "gatsby";
import { gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";

const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <TextCenterLayout
      headline="Setting Up Your Record Label Business and Business Operations"
      headlineWidth={770}
      textWidth={770}
      text="Once you've legally created your record label business, you’ll need to get some other things in place."
    />

    <Container>
      <ImageBoxes>
        <TopImageBox image="display-ads" color={color.purple3}>
          <Heading size={3} template={4}>
            Marketing Your Record Label Business
          </Heading>
          <p>
            Marketing will be a huge part of your record label business and a
            big part of your budget. Naturally, you will need an awesome website
            for your record label and artists, but you'll also need to get
            branding, newsletters, digital ads, social media accounts and other
            channels in place.
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
            To begin with, you probably won’t need to hire anyone else for your
            record label business on a permanent basis, especially if you’re a
            good administrator. Instead, you’ll likely be making use of
            contract, on-demand services like producers, graphic designers,
            engineers and the like.
          </p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" color={color.yellow3}>
          <Heading size={3} template={4}>
            Finances and Taxes
          </Heading>
          <p>
            You will need a separate{" "}
            <Link to="https://utility.bankofamerica.com/alliance/?formid=IF1">
              business bank account
            </Link>{" "}
            for your record label business. You might also want to consider a
            business credit card. Additionally, you will need to keep careful
            bookkeeping records and file business and personal taxes. Here at
            Incfile{" "}
            <Link to="/business-accounting/">
              we can even help you file your taxes
            </Link>
            .
          </p>
        </TopImageBox>

        <TopImageBox image="location" color={color.red3}>
          <Heading size={3} template={4}>
            Location of Your Record Label business
          </Heading>
          <p>
            To begin with, you can likely run your record label from home or a
            shared working space. This is great as it reduces your office costs
            considerably. You will, of course, need to arrange meetings with
            artists, producers, engineers and others, so look for local places
            that let you hire out meeting rooms for that purpose. You’ll also
            need to make arrangements with recording studios, and you can start
            by exploring local options. Don't forget that if you work from home,
            you can write off part of your utility and housing costs against
            your taxes.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" color={color.green3}>
          <Heading size={3} template={4}>
            Equipment for Your Record Label business
          </Heading>
          <p>
            The day-to-day administration of your business will only need a
            computer, laptop, tablet or smartphone. Actually recording your
            artists requires a special studio setup that can cost hundreds of
            dollars an hour.
          </p>
        </TopImageBox>

        <TopImageBox image="software" color={color.blue3}>
          <Heading size={3} template={4}>
            Software and Process
          </Heading>
          <p>
            Record label entrepreneurs make extensive use of software; see our
            great list of the top apps at the end of this guide.
          </p>
        </TopImageBox>
      </ImageBoxes>
    </Container>
  </GreenContainer>
);

const GreenContainer = styled.div`
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
  right: 0;
  top: 220px;
  width: 100%;

  @media (min-width: 720px) {
    width: 720px;
  }
`;
export default SettingBusiness;
