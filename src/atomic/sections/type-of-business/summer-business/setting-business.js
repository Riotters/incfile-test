import React from "react";
import { Link } from "gatsby";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-right-transparent-green3.inline.svg";

const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <TextCenterLayout headline="Setting up Your Teen Business and Business Operations" headlineWidth={770} textWidth={770} text="Once you've legally created your teen business, you’ll need to get some other things in place." />

    <Container>
      <ImageBoxes>
        <TopImageBox image="display-ads" color={color.purple3}>
          <h4>Marketing</h4>
          <p>
            Although most of your revenue will happen during the summer months, you should be marketing your business over a much longer period. You will want to stay top-of-mind with parents, kids, tourists or whatever target market you’ve chosen. You can do this by having a great website, social
            media marketing, paid advertising, local flyers or whatever works for your business type. Remember to build excitement in the off months so you can add to your potential client list.
          </p>
        </TopImageBox>

        <TopImageBox image="location" color={color.red3}>
          <h4>Location</h4>
          <p>
            The location you work from will be defined by the type of summer business you start. You can run some seasonal businesses successfully from home, although other businesses may need a retail or specialized location. Remember that if you do need to rent space somewhere, get a short-term
            contract to ensure you’re not locked into a lease for a long period of time.
          </p>
        </TopImageBox>

        <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
          <h4>Equipment</h4>
          <p>Depending on how busy your business is, you might need to hire some people over the summer months. If so, you'll need systems to to pay them, provide employee insurance and submit payroll taxes.</p>
        </TopImageBox>

        <TopImageBox image="software" color={color.blue3}>
          <h4>Software and Processes</h4>
          <p>The right software can make it easier to run your summer business; see our great list of the top apps at the end of this guide.</p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" color={color.yellow3}>
          <h4>Finances and taxes</h4>
          <p>
            You will need a separate{" "}
            <a href="https://utility.bankofamerica.com/alliance/?formid=IF1" target="_blank" rel="noopener noreferrer">
              business bank account
            </a>{" "}
            for your summer business. You might also want to consider a business credit card. Additionally, you will also need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile <Link to="/business-accounting/">we can even help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="business-planning-and-funding" color={color.babyblue3}>
          <h4>Planning During the Downtime</h4>
          <p>
            Take advantage of the spring, fall and winter to plan for your summer business. Experiment with different types of marketing, automate your business administration and talk about your summer business with others. Test out your ideas to see if they can add revenue, and continue tweaking
            and refining how you approach your business.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" color={color.green3}>
          <h4>Equipment</h4>
          <p>Depending on the type of summer business you run, equipment needs will vary widely. You won’t have long to recoup your investment, so try and keep your equipment, inventory and other costs as low as possible.</p>
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

  @media (min-width: 570px) {
    width: 570px;
  }
`;

export default SettingBusiness;
