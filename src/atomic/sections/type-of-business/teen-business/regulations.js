import React from "react";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import styled from "styled-components";
import { Link } from "gatsby";

const Regulations = () => (
  <Wrapper>
    <Container style={{ paddingTop: "100px", paddingBottom: "100px" }} width={750}>
      <Heading size={2} left>
        Rules, Regulations and Taxes for Your Teen Business
      </Heading>
      <Paragraph big mixed>
        Even though you’re running a teen business, you need to know about licenses, permits and regulations. You will need to explore local, state and federal licenses and permits, and{" "}
        <Link to="/business-license-research-package/">we can also help out with researching your business licensing needs</Link>.
      </Paragraph>
      <Paragraph big>
        Taxes are a fact of life if you’re in business, and there are various ways you will need to file and pay them. This can include self-employment tax, state income tax and federal income tax. Depending on where and how you’re selling products and services, you may also be liable for sales and
        use tax.
      </Paragraph>
      <Paragraph big mixed>
        As a rule of thumb, we recommend holding back around a third of your earnings to pay your taxes. We can also <Link to="/business-accounting/">prepare and file your tax returns for you</Link>.
      </Paragraph>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
`;

export default Regulations;
