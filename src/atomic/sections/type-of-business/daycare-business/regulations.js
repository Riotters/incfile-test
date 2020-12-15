import React from "react";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import styled from "styled-components";
import { Link } from "gatsby";

const Regulations = () => (
  <Wrapper>
    <Oval>
      <OvalSvg />
    </Oval>

    <Oval2>
      <OvalSvg />
    </Oval2>
    <Container
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
      width={750}
    >
      <Heading size={2} left bottomMargin={56}>
        Rules, Regulations and Taxes for Your Daycare Business
      </Heading>
      <Paragraph big mixed={true}>
        Running a daycare business means you’ll probably need to satisfy a fair
        amount of licenses, permits and regulations. You will need to explore
        local, state and federal licenses and permits for childcare and other
        aspects of your business.{" "}
        <Link to="/business-license-research-package/">
          We can help out with researching your business licensing needs.
        </Link>
      </Paragraph>
      <Paragraph big>
        Taxes are a fact of life if you’re in business, and there are various
        ways you will need to file and pay them. This can include
        self-employment tax, state income tax and federal income tax. Depending
        on where and how you’re selling products and services, you may also be
        liable for sales and use tax.
      </Paragraph>
      <Paragraph big mixed={true}>
        As a rule of thumb, we recommend holding back around a third of your
        earnings to pay your taxes. We can also{" "}
        <Link to="/business-accounting/">
          prepare and file your tax returns for you.
        </Link>
      </Paragraph>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
`;

const Oval = styled.div`
  position: absolute;
  top: 178px;
  left: 0;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  top: 226px;
  right: 0;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 136px) {
    width: 136px;
  }
`;
export default Regulations;
