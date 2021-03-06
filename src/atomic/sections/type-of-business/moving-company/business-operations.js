import React from "react";
import { Link } from "gatsby";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-right-transparent-green2.inline.svg";
import {Heading} from "../../../atoms/typography/heading";

const BusinessOperations = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <TextCenterLayout headline="Setting up Your Moving Business and Business Operations" headlineWidth={770} textWidth={770} text="Once you've legally created your moving business, you’ll need to get some other things in place." />

    <Container>
      <ImageBoxes>
        <TopImageBox image="display-ads" imageAlt="marketing" color={color.purple3}>
          <Heading size={3} template={4}>Marketing Your Moving Business</Heading>
          <p>
            Marketing will be a huge part of your moving business. Word-of-mouth and referrals will be necessary for attracting customers, and you’ll also want a really good website. Focus on delivering excellent customer service to get good reviews, which will help to drive customer acquisition.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" imageAlt="equipment" color={color.green3}>
          <Heading size={3} template={4}>Equipment for Your Moving Business</Heading>
          <p>Much of the capital expenditure for your business will be for vehicles, equipment and consumables. You will need to purchase a moving truck, moving tools, packing materials, safety equipment and various other supplies. You’ll also need a computer, laptop, tablet or smartphone.</p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" imageAlt="employees" color={color.orange3}>
          <Heading size={3} template={4}>Employees</Heading>
          <p>
            If you’re managing very small, local moves, you can probably run the business yourself. If you’re doing anything larger, like whole-house moves, you will likely need to hire at least one other person. For bigger moves, or if you want to do more moves at once, you’ll need to hire even
            more employees.
          </p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" imageAlt="finance and taxes" color={color.yellow3}>
          <Heading size={3} template={4}>Finances and Taxes</Heading>
          <p>
            You will need a separate{" "}
            <a
                className="partner_link"
                data-name="Bank of America"
                href="https://utility.bankofamerica.com/alliance/?formid=IF1" target="_blank" rel="noopener noreferrer">
              business bank account
            </a>{" "}
            for your moving business. You might also want to consider a business credit card. Additionally, you will also need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile <Link to="/business-accounting/">we can even help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="location" imageAlt="location" color={color.red3}>
          <Heading size={3} template={4}>Location of Your Moving Business</Heading>
          <p>
            You will almost certainly need office space for your moving business. You’ll need room to store your vehicles and equipment, meet with employees and clients, store goods as required and otherwise manage your business. Ideally, the office space should be located close to a major highway
            to make it quicker and easier to drive a moving truck to your customers.
          </p>
        </TopImageBox>

        <TopImageBox image="software" imageAlt="software" color={color.blue3}>
          <Heading size={3} template={4}>Software and Processes</Heading>
          <p>The right software and processes will make running your moving business much easier. See our list of the best apps and software at the end of this guide.</p>
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

  @media (min-width: 768px) {
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
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

export default BusinessOperations;
