import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import OvalSvg from "../../../../images/ovals/top-left-transparent-green3.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";

const Regulations = () => (
  <Wrapper>
    <Oval>
      <OvalSvg />
    </Oval>
    <Oval2>
      <OvalSvg2 />
    </Oval2>
    <Container
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
      width={750}
    >
      <Heading size={2} left>
        Rules, Regulations and Taxes for Your Travel Agency
      </Heading>
      <Paragraph big mixed={true}>
        It’s very likely that your travel agency business must meet certain
        regulations. You achieve this through acquiring licenses and permits and
        complying with regulations. You will need to explore local, state and
        federal licenses and permits, and{" "}
        <Link to="/business-license-research-package/">
          we can also help out with researching your travel agent business
          licensing needs.
        </Link>
      </Paragraph>
      <Heading size={3} left>
        Taxes
      </Heading>
      <Paragraph big mixed={true}>
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
  bottom: 100px;
  left: 0;
  width: 100%;
  transform: scaleY(-1);

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
