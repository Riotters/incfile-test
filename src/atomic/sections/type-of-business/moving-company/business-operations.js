import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-right-transparent-green2.inline.svg";

const BusinessOperations = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <TextCenterLayout headline="Setting up Your Moving Business and Business Operations" headlineWidth={770} textWidth={770} text="Once you've legally created your moving business, you’ll need to get some other things in place." />

    <Container>
      <ImageBoxes>
        <TopImageBox image="display-ads" color={color.purple3}>
          <h4>Marketing Your Moving Business</h4>
          <p>
            Marketing will be a huge part of your moving business. Word-of-mouth and referrals will be necessary for attracting customers, and you’ll also want a really good website. Focus on delivering excellent customer service to get good reviews, which will help to drive customer acquisition.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" color={color.green3}>
          <h4>Equipment for Your Moving Business</h4>
          <p>Much of the capital expenditure for your business will be for vehicles, equipment and consumables. You will need to purchase a moving truck, moving tools, packing materials, safety equipment and various other supplies. You’ll also need a computer, laptop, tablet or smartphone.</p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
          <h4>Employees</h4>
          <p>
            If you’re managing very small, local moves, you can probably run the business yourself. If you’re doing anything larger, like whole-house moves, you will likely need to hire at least one other person. For bigger moves, or if you want to do more moves at once, you’ll need to hire even
            more employees.
          </p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" color={color.yellow3}>
          <h4>Finances and Taxes</h4>
          <p>
            You will need a separate{" "}
            <Link to="https://utility.bankofamerica.com/alliance/?formid=IF1" target="_blank" rel="noopener noreferrer">
              business bank account
            </Link>{" "}
            for your moving business. You might also want to consider a business credit card. Additionally, you will also need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile{" "}
            <Link to="https://www.incfile.com/business-accounting/">we can even help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="location" color={color.red3}>
          <h4>Location of Your Moving Business</h4>
          <p>
            You will almost certainly need office space for your moving business. You’ll need room to store your vehicles and equipment, meet with employees and clients, store goods as required and otherwise manage your business. Ideally, the office space should be located close to a major highway
            to make it quicker and easier to drive a moving truck to your customers.
          </p>
        </TopImageBox>

        <TopImageBox image="software" color={color.blue3}>
          <h4>Software and Processes</h4>
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
        width 720px;
    }
`;

export default BusinessOperations;
