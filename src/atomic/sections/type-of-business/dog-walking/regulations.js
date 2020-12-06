import React from "react";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-pink.inline.svg";
import styled from "styled-components";
import { Link } from "gatsby";

const Regulations = () => (
  <Wrapper>
    <Oval>
      <OvalSvg />
    </Oval>
    <Container width={770}>
      <Heading size={2} template={4} left style={{ fontSize: "40px" }}>
        Rules, Regulations and Taxes for Your Dog Walking or Pet Sitting Business
      </Heading>
      <Paragraph big mixed>
        It’s possible that your dog-related business will need licenses, permits and regulations. You should explore local, state and federal licenses and permits, and
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
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Oval = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;
export default Regulations;
