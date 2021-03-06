import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import { Link } from "gatsby";
import { Heading } from "../../../atoms/typography/heading";

const SettingBusiness = () => (
  <ColorContainer>
    <Oval>
      <OvalSvg />
    </Oval>

    <TextCenterLayout
      headline="Setting Up Your Unique Business and Business Operations"
      headlineWidth={770}
      textWidth={770}
      text="Once you've legally created your business, you’ll need to get some other things in place."
    />

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" imageAlt="location" color={color.red3}>
          <Heading size={3} template={4}>
            Location
          </Heading>
          <p>
            The location you work from will be defined by the type of business
            you start. Many unique businesses can be run successfully from home,
            although other businesses may need a specialized location. Don't
            forget that if you work from home, you can write off part of your
            utility and housing costs against your taxes.
          </p>
        </TopImageBox>

        <TopImageBox image="display-ads" imageAlt="marketing" color={color.purple3}>
          <Heading size={3} template={4}>
            Marketing
          </Heading>
          <p>
            Marketing to a very defined niche is much easier than marketing to a
            broader audience. Spend some time and effort identifying who your
            audience is and the best channels to reach them. You will probably
            want an awesome website, but you'll also need to get branding,
            newsletters, digital ads, social media accounts and other channels
            in place.
          </p>
        </TopImageBox>

        <TopImageBox image="software" imageAlt="software" color={color.blue3}>
          <Heading size={3} template={4}>
            Software
          </Heading>
          <p>
            The right software and processes will make running your unique
            business much easier. See our list of the best apps and software at
            the end of this guide.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" imageAlt="equiment" color={color.green3}>
          <Heading size={3} template={4}>
            Equipment
          </Heading>
          <p>
            Depending on the type of unique business you run, equipment needs
            will vary widely. For selling services, you will probably only need
            a computer, laptop, tablet or smartphone.
          </p>
        </TopImageBox>

        <TopImageBox
            image="we-doubled-the-size-of-customer-service"
            imageAlt="employment"
            color={color.orange3}
        >
          <Heading size={3} template={4}>
            Employees
          </Heading>
          <p>
            To begin with, you probably won’t need to hire anyone else for your
            unique business, especially if you’re a good administrator. But
            start thinking about who else you may want to bring on board as your
            business grows.
          </p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" imageAlt="finance and taxes" color={color.blue3}>
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
            for your business, and you might also want to consider a{" "}
                <a
                    className="partner_link"
                    data-name="CardRatings"
              href="http://t.tihop.com/cgi/r?;n=203;c=1666272;s=7273;x=7936;f=201908011042310;u=j;z=TIMESTAMP;src=663024"
              target="_blank"
              rel="noopener noreferrer"
            >
              business credit card
            </a>
            . Additionally, you will need to keep careful bookkeeping records
            and file business and personal taxes. Here at Incfile{" "}
            <Link to="/business-accounting/">
              we can even help you file your taxes
            </Link>
            .
          </p>
        </TopImageBox>
      </ImageBoxes>
    </Container>
  </ColorContainer>
);

const ColorContainer = styled.div`
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
  left: 0;
  top: 394px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

export default SettingBusiness;
