import React from "react";
import { Link } from "gatsby";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../atoms/styles/colors";
import styled from "styled-components";
import Curve from "../../../../images/green-curve.inline.svg";
import GreenOval from "../../../../images/ovals/top-left-transparent-green1.inline.svg";
import { Heading } from "../../../atoms/typography/heading";

const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <TextCenterLayout
      headline="Setting Up Your Airbnb Business Operations"
      headlineWidth={770}
      textWidth={770}
      text="Once you've legally created your Airbnb business you’ll need to get some other things in place."
    />

    <Container>
      <ImageBoxes>
        <TopImageBox image="state-filling-fees" color={color.yellow3}>
          <Heading size={3} template={4}>
            Finance
          </Heading>
          <p>
            You will need a separate{" "}
            <a
              href="https://utility.bankofamerica.com/alliance/?formid=IF1"
              target="_blank"
              rel="noopener noreferrer"
            >
              business bank account
            </a>{" "}
            for your Airbnb business. You might also want to consider a business
            credit card. Additionally, you will also need to keep careful
            bookkeeping records and file business and personal taxes. Here at
            Incfile{" "}
            <Link to="/business-accounting/">
              we can even help you file your taxes
            </Link>
            .
          </p>
        </TopImageBox>

        <TopImageBox image="location" imageAlt="globe with pins in it" color={color.red3}>
          <Heading size={3} template={4}>
            Location of your Airbnb Business
          </Heading>
          <p>
            You can almost certainly administer your Airbnb business from home.
            This is great as it reduces your office costs considerably. Don't
            forget that if you work from home, you can write off part of your
            utility and housing costs against your taxes.
          </p>
        </TopImageBox>

        <TopImageBox image="side" imageAlt="laptop and smart phone" color={color.purple3}>
          <Heading size={3} template={4}>
            Equipment for Your Airbnb Business
          </Heading>
          <p>
            It’s likely that the only equipment you will need to run your Airbnb
            business is a computer, laptop, tablet or smartphone. Of course,
            you’ll also need to have supplies on hand for your properties.
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
            You probably don’t need to hire any employees to help run your
            Airbnb business, but you’ll likely want to contract with cleaners,
            maintenance crews or a handyman.
          </p>

          <GreenCurve>
            <Curve />
          </GreenCurve>
        </TopImageBox>

        <TopImageBox image="software" imageAlt="software and processes" color={color.blue3}>
          <Heading size={3} template={4}>
            Software and Processes
          </Heading>
          <p>
            The right software and processes will make running your Airbnb
            business much easier. See our list of the best apps and software at
            the end of this guide.
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

  @media (min-width: 1024px) {
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

  display: none;

  @media (min-width: 1200px) {
    display: block;
  }

  svg {
    path {
      fill: ${color.green2};
    }
  }
`;

const Oval = styled.div`
  position: absolute;
  right: 0;
  top: 220px;
  transform: scaleX(-1);
  width: 100%;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

export default SettingBusiness;
