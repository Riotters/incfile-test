import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-left-transparent-green1.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import { Link } from "gatsby";
import { Heading } from "../../../atoms/typography/heading";

const SettingBusiness = () => (
  <WrapperContainer>
    <Oval>
      <GreenOval />
    </Oval>

    <Oval2>
      <GreenOval />
    </Oval2>

    <TextCenterLayout
      headline="Set up & Maintain Your Real Estate Investment Business"
      headlineWidth={770}
      textWidth={770}
      text="Once you've legally created your real estate investment business, you’ll need to get some other things in place."
    />

    <Container>
      <ImageBoxes>
        <TopImageBox image="permits-licences" imageAlt="permit and license" color={color.babyblue3}>
          <Heading size={3} template={4}>
            Permits & Licenses
          </Heading>
          <p>
            Running a real estate business comes with certain rules, regulations
            and legalities you need to be aware of. Incfile can conduct a{" "}
            <Link to="/business-license-research-package/">
              Business License Research
            </Link>{" "}
            package for you, or you can take the time to do the research
            yourself. Check out our{" "}
            <Link to="https://www.incfile.com/blog/post/how-to-maintain-your-real-estate-business-with-proper-permits-licenses-insurance-other-legalities/">
              blog post on real estate business legalities to follow for more
              information
            </Link>
            .
          </p>
        </TopImageBox>

        <TopImageBox image="display-ads" imageAlt="marketing" color={color.red3}>
          <Heading size={3} template={4}>
            Marketing
          </Heading>
          <p>
            Do you need to build a website? Should you have a logo designed
            professionally? Will you need business cards? Since real estate is
            such a networking-based business, you'll probably want to develop
            strong branding and use it on collateral you can hand out at
            in-person events.
          </p>
        </TopImageBox>

        <TopImageBox image="location" imageAlt="location" color={color.red3}>
          <Heading size={3} template={4}>
            Business Location
          </Heading>
          <p>
            Where are you going to run your business from? Will you work from
            home, get an office, use a shared working space or something else?
            Many real estate investors can easily work from home.
          </p>
        </TopImageBox>

        <TopImageBox image="organization-change-02" imageAlt="process" color={color.green3}>
          <Heading size={3} template={4}>
            Process
          </Heading>
          <p>
            What business processes are you going to use to run your business
            efficiently and effectively? You should come up with good processes
            for negotiation, managing legal details and more.
          </p>
        </TopImageBox>

        <TopImageBox image="software" imageAlt="software" color={color.blue3}>
          <Heading size={3} template={4}>
            Software
          </Heading>
          <p>
            Is there software that can help you manage and market your business?
            Real estate investors should focus specifically on scheduling,
            customer relationship management, project management, document
            management and task management.
          </p>
        </TopImageBox>

        <TopImageBox image="side-yellow" imageAlt="equipment" color={color.yellow3}>
          <Heading size={3} template={4}>
            Equipment
          </Heading>
          <p>
            What equipment do you need to manage your real estate investment
            business? What about transportation or specialized equipment? Make
            sure you understand exactly what you need to spend so you can write
            it off against business expenses.
          </p>
        </TopImageBox>

        <TopImageBox image="measuring-business-success" imageAlt="business maintenances" color={color.babyblue3}>
          <Heading size={3} template={4}>
            Business Maintenance
          </Heading>
          <p>
            Most states require businesses to file an Annual Report report once
            a year. You will also be expected to pay estimated taxes on what you
            plan to earn in the current business year. Also, your federal,
            state, regional and city business licenses and permits may need to
            be renewed on a regular basis, typically once a year.
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
            Do you need to hire employees to help you out?{" "}
            <Link to="https://www.incfile.com/blog/post/avoid-confusion-when-hiring/">
              Read our 10 must-know tips for hiring for your business
            </Link>
            .
          </p>
        </TopImageBox>
      </ImageBoxes>
    </Container>
  </WrapperContainer>
);

const WrapperContainer = styled.div`
  background: rgb(255, 255, 255);
  background-image: ${gradient.green3};
  padding-bottom: 32px;
  padding-top: 64px;
  position: relative;

  @media (min-width: 992px) {
    padding-top: 104px;
    padding-bottom: 104px;
  }
`;

const ImageBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 32px;
  width: 100%;
  max-width: 970px;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 970px) {
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    padding-top: 104px;
  }
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  top: 220px;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 720px) {
    width: 720px;
  }
`;

export default SettingBusiness;
