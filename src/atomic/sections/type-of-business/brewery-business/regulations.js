import React from "react";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import styled from "styled-components";
import { Link } from "gatsby";

const Regulations = () => (
  <Wrapper>
    <Oval>
      <OvalSvg />
    </Oval>
    <Container style={{ paddingTop: "100px", paddingBottom: "100px" }} width={750}>
      <Heading size={4} style={{ fontSize: "40px" }}>
        Rules, Regulations and Taxes for Your Brewery Business
      </Heading>
      <Paragraph big mixed>
        Breweries require extensive licenses and permits. In addition to standard local business licenses, you will also need permits to brew and sell alcohol, as well as meeting other federal, state and city regulations.{" "}
        <Link to="/business-license-research-package/">We can help out with researching your brewery business licensing needs</Link>.
      </Paragraph>
      <Paragraph big mixed>
        Taxes are a fact of life if you’re in business, and there are various ways you will need to file and pay them. This can include self-employment tax, state income tax and federal income tax. Depending on where and how you’re selling products and services, you may also be liable for sales and
        use tax. As a brewery, you will also need to pay taxes for every pint or glass that you sell. We can also <Link to="/business-accounting/">prepare and file your tax returns for you</Link>.
      </Paragraph>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
`;

const Oval = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;
export default Regulations;
