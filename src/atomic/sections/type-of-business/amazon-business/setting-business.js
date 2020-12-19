import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import Curve from "../../../../images/green-curve.inline.svg";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import ContentCenter from "../../../partials/content-center";
import Button from "../../../molecules/buttons/button";
import { gradient } from "../../../atoms/styles/colors";
import { Link } from "gatsby";
import { Heading } from "../../../atoms/typography/heading";

const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <OvalSvg />
    </Oval>

    <Container>
      <TextCenterLayout
        headline="Setup & Maintain Your Amazon Business"
        headlineWidth="700"
        text="Once you've legally created your Amazon business you’ll need to get some other things in place."
      />
      <ImageBoxes>
        <TopImageBox image="location" imageAlt="business location" color={color.red3}>
          <Heading size={3} template={4}>
            Business Location
          </Heading>
          <p>
            Where are you going to run your business? Will you work from home,
            get an office, use a shared working space or something else? In most
            cases, unless you are planning to store products, it’s best to start
            an Amazon business from your home.
          </p>
        </TopImageBox>

        <TopImageBox image="permits-licences" imageAlt="permit & license" color={color.blue3}>
          <Heading size={3} template={4}>
            Permits & Licenses
          </Heading>
          <p>
            Running an Amazon business could come with certain rules,
            regulations and legalities you need to be aware of. Incfile can
            conduct a{" "}
            <Link to="/business-license-research-package/">
              Business License Research
            </Link>{" "}
            package for you, or you can take the time to do the research
            yourself.
          </p>
          <AbsoluteCurve>
            <Curve />
          </AbsoluteCurve>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" imageAlt="finace & taxes" color={color.yellow3}>
          <Heading size={3} template={4}>
            Finances & Taxes
          </Heading>
          <p>
            What kind of{" "}
            <a class="partner_link" data-name="Bank of America" href="https://utility.bankofamerica.com/alliance/?formid=IF1">
              bank account
            </a>{" "}
            will you get? And how will you pay your business taxes? How do you
            find the{" "}
            <a class="partner_link" data-name="CardRatings" href="http://t.tihop.com/cgi/r?;n=203;c=1666272;s=7273;x=7936;f=201908011042310;u=j;z=TIMESTAMP;src=663024">
              best business credit card
            </a>
            ? These are all important things to consider, so your Amazon
            business stays in the green.{" "}
            <Link to="https://www.incfile.com/blog/post/amazon-sellers-finances-taxes/">
              Check out our quick guide to finances and taxes for Amazon sellers
            </Link>
            .
          </p>
        </TopImageBox>

        <TopImageBox image="organization-change-02" imageAlt="process" color={color.green3}>
          <Heading size={3} template={4}>
            Processes
          </Heading>
          <p>
            What business processes are you going to use to run your business
            efficiently and effectively? You will need efficient processes for
            managing inventory, dealing with suppliers, ordering stock, looking
            at competitors and completing market research.
          </p>
        </TopImageBox>

        <TopImageBox image="side-4" imageAlt="equiment" color={color.purple3}>
          <Heading size={3} template={4}>
            Equipment
          </Heading>
          <p>
            What equipment do you need to manage your Amazon business? Make sure
            you understand exactly what you need to spend, so you can write it
            off against business expenses. In most cases, you won’t need any
            specialized equipment or supplies unless you are planning to ship
            products yourself.
          </p>
        </TopImageBox>

        <TopImageBox image="measuring-business-success" imageAlt="business maintenace" color={color.babyblue3}>
          <Heading size={3} template={4}>
            Business Maintenance
          </Heading>
          <p>
            Most states require businesses to file an{" "}
            <Link to="/manage-your-company/annual-report/">Annual Report</Link>{" "}
            report once a year. You will also be expected to pay estimated taxes
            on what you plan to earn in the current business year. And, your
            federal, state, regional and city{" "}
            <Link to="/business-license-research-package/">
              business licenses and permits
            </Link>{" "}
            may need to be renewed on a regular basis, typically once a year.
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
            Do you need to hire employees to help you out? This may change as
            your business grows, but try to think ahead about what sort of
            experts you may need.
          </p>
        </TopImageBox>

        <TopImageBox image="software" imageAlt="software" color={color.blue3}>
          <Heading size={3} template={4}>
            Software
          </Heading>
          <p>
            Is there software that can help you manage and market your business?
            There are dozens of software applications designed specifically to
            help Amazon sellers.{" "}
            <a href="https://www.avalara.com/us/en/blog/2015/07/6-must-have-tools-for-successful-amazon-sellers.html">
              Here are some great starting points
            </a>
            .
          </p>
        </TopImageBox>
      </ImageBoxes>

      <ContentCenter>
                <Button
                    externalLink
          theme="primary56"
          marginMD="0 24px 0 0"
          arrow
          content={{
            url: `${process.env.ORDER_URL}/form-order-now.php`,
            text: `Start your business with us, today!`,
          }}
        />
      </ContentCenter>
    </Container>
  </GreenContainer>
);

const GreenContainer = styled.div`
  background: rgb(255, 255, 255);
  background: ${gradient.blue3};
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
  padding-bottom: 80px;
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
  top: 227px;
  width: 720px;
  opacity: 0.5;
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;

const AbsoluteCurve = styled.div`
  position: absolute;
  top: -105px;
  right: -105px;
  width: 115px;
  display: none;
  transform: rotate(-90deg);

  @media (min-width: 1200px) {
    display: block;
  }

  svg {
    path {
      fill: #d2e0fe;
    }
  }
`;

export default SettingBusiness;
