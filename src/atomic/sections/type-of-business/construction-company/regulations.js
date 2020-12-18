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
    <Container
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
      width={750}
    >
      <Heading size={2} left>
        Rules, Regulations and Taxes for Your Construction Business
      </Heading>
      <Paragraph big mixed={true}>
        Construction businesses will need to meet stringent rules and
        regulations, especially around building codes. You will also need to get
        licenses and permits.{" "}
        <Link to="/business-license-research-package/">
          We can help out with researching your construction business licensing
          needs.
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
  top: 168px;
  left: 0;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;
export default Regulations;
