import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/bottom-left-transparent-green2.inline.svg";
import { Link } from "gatsby";
import { Heading } from "../../../atoms/typography/heading";
const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>
    <Oval2>
      <GreenOval />
    </Oval2>

    <TextCenterLayout
      headline="Setting Up Your Business and Business Operations"
      headlineWidth={770}
      textWidth={770}
      text="Once you've legally created your business, you’ll need to get some other things in place."
    />

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" imageAlt="location" color={color.red3}>
          <Heading size={3} template={4}>
            Location of your business
          </Heading>
          <p>
            Almost all internet entrepreneurs can work from home or a shared
            working space. This is great as it reduces your office costs
            considerably. Don't forget that if you work from home, you can write
            off part of your utility and housing costs against your taxes.
          </p>
        </TopImageBox>

        <TopImageBox image="display-ads" imageAlt="marketing" color={color.purple3}>
          <Heading size={3} template={4}>
            Marketing
          </Heading>
          <p>
            Marketing will be a huge part of your online business. Naturally,
            you will need an awesome website, but you'll also need to get
            branding, newsletters, digital ads, social media accounts and other
            channels in place.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" imageAlt="equipment" color={color.green3}>
          <Heading size={3} template={4}>
            Equipment
          </Heading>
          <p>
            It’s likely that the only equipment you will need to run your online
            business is a computer, laptop, tablet or smartphone.
          </p>
        </TopImageBox>

        <TopImageBox image="software" imageAlt="software" color={color.blue3}>
          <Heading size={3} template={4}>
            Software and Process
          </Heading>
          <p>
            Online entrepreneurs make extensive use of software; see our great
            list of the top apps at the end of this article.
          </p>
        </TopImageBox>

        <TopImageBox
                    image="we-doubled-the-size-of-customer-service"
                    imageAlt="employees"
          color={color.orange3}
        >
          <Heading size={3} template={4}>
            Employees
          </Heading>
          <p>
            To begin with, you probably won’t need to hire anyone else for your
            online business, especially if you’re a good administrator.
          </p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" imageAlt="finance and taxes" color={color.yellow3}>
          <Heading size={3} template={4}>
            Finances and Taxes
          </Heading>
          <p>
            You will need a separate{" "}
            <a
                className="partner_link"
                data-name="Bank of America"
                href="https://utility.bankofamerica.com/alliance/?formid=IF1"
                target="_blank"
                rel="noopener noreferrer"
            >
              business bank account
            </a>{" "}
            for your online business. You might also want to consider a business
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
  </GreenContainer>
);

const GreenContainer = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(242, 248, 243, 1) 100%
  );
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
  bottom: 164px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  top: 348;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 570px) {
    width: 570px;
  }
`;

export default SettingBusiness;
