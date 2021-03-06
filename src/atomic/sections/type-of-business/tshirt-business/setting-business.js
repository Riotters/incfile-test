import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { color } from "../../../../components/styles/colors";
import TopImageBox from "../../../../components/top-image-box";
import GreenOval from "../../../../images/ovals/top-left-transparent-green1.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import Container from "../../../container";
import ContentCenter from "../../../partials/content-center";
import TextCenterLayout from "../../../partials/heading-left";

const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <Oval2>
      <GreenOval />
    </Oval2>

    <ContentCenter contentWidth={770}>
      <TextCenterLayout
        headline="The Next Steps: Running a T-Shirt Business"
        headlineWidth={770}
        textWidth={770}
        text="Once you've legally created your T-shirt business, you’ll need to get some other things in place."
      />
    </ContentCenter>

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" color={color.red3}>
          <Heading size={3} template={4}>
            Location of your business
          </Heading>
          <p>
            If you’re using a print-on-demand service, you should be able to run
            your business from your home. If you’re printing yourself, you will
            likely need a warehouse or something similar.
          </p>
        </TopImageBox>

        <TopImageBox image="permits-licences" imageAlt="t-shirt business license" color={color.blue3}>
          <Heading size={3} template={4}>
            Permits and licenses
          </Heading>
          <p>
            Running a T-shirt business comes with certain rules, regulations and
            legalities you need to be aware of. Incfile offers a{" "}
            <Link to="/business-license-research-package/">
              Business License Research Package
            </Link>{" "}
            for you, or you can take the time to do the research yourself.
          </p>
        </TopImageBox>

        <TopImageBox image="display-ads" imageAlt="business processes" color={color.purple3}>
          <Heading size={3} template={4}>
            Marketing
          </Heading>
          <p>
            Branding and marketing are vital to help you build a distinctive
            identity. This is one of the areas that you should invest plenty of
            time and resources into.
          </p>
        </TopImageBox>

        <TopImageBox image="organization-change-02" imageAlt="megaphone" color={color.green3}>
          <Heading size={3} template={4}>
            Processes
          </Heading>
          <p>
            Make sure you understand all your profit margins and get strong
            analytics in place so you can understand exactly what is and isn’t
            selling.
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
            You will probably need to hire employees for your T-shirt business;
            more on that below.
          </p>
        </TopImageBox>

        <TopImageBox image="side-yellow" imageAlt="computer and mobile phone" color={color.yellow3}>
          <Heading size={3} template={4}>
            Equipment
          </Heading>
          <p>
            Branding and marketing are vital to help you build a distinctive
            identity. This is one of the areas that you should invest plenty of
            time and resources into.
          </p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" imageAlt="paid taxes" color={color.yellow3}>
          <Heading size={3} template={4}>
            Finances and taxes
          </Heading>
          <p>
            What kind of bank account will you get? Do you need a{" "}
            <a
                className="partner_link"
                data-name="CardRatings"
              href="http://t.tihop.com/cgi/r?;n=203;c=1666272;s=7273;x=7936;f=201908011042310;u=j;z=TIMESTAMP;src=663024"
              target="_blank"
              rel="noopener noreferrer"
            >
              business credit card
            </a>
            ? How will you pay your business taxes? These are important
            questions to consider so your T-shirt business stays in the green.
            Here at Incfile, we can even{" "}
            <Link to="/business-accounting/">help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="measuring-business-success" imageAlt="briefcase and tools" color={color.babyblue3}>
          <Heading size={3} template={4}>
            Business maintenance
          </Heading>
          <p>
            Most states require businesses to file an{" "}
            <Link to="/manage-your-company/annual-report/">Annual Report</Link>{" "}
            once a year. You will also be expected to pay estimated taxes on
            what you plan to earn in the current business year. Your federal,
            state, regional and city{" "}
            <Link to="/business-license-research-package/">
              business licenses and permits
            </Link>{" "}
            may need to be renewed on a regular basis, typically once a year.
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
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const Oval2 = styled.div`
  width: 100%;
  right: 0;
  top: 220px;
  transform: scaleX(-1);
  position: absolute;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

export default SettingBusiness;
