import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";

const Regulations = () => (
  <Wrapper>
    <Container
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
      width={750}
    >
      <Heading size={2} left>
        Rules, Regulations and Taxes for Your Woman-Owned Business
      </Heading>
      <Paragraph big mixed={true}>
        Whether your business is woman-owned or not, almost no company can
        escape real-world licenses, permits and regulations. You will need to
        explore local, state and federal licenses and permits, and{" "}
        <Link to="/business-license-research-package/">
          we can also help out with researching your business licensing needs
        </Link>
        .
      </Paragraph>
      <Heading size={3}>Finances</Heading>
      <Paragraph big mixed={true}>
        In most cases, you will want to keep your personal and business finances
        separate. We recommend a{" "}
        <a
            className="partner_link"
            data-name="Bank of America"
          href="https://utility.bankofamerica.com/alliance/?formid=IF1"
          target="_blank"
          rel="noopener noreferrer"
        >
          business bank account
        </a>{" "}
        for your women business. You might also want to consider a{" "}
        <a
            className="partner_link"
            data-name="CardRatings"
          href="http://t.tihop.com/cgi/r?;n=203;c=1666272;s=7273;x=7936;f=201908011042310;u=j;z=TIMESTAMP;src=663024"
          target="_blank"
          rel="noopener noreferrer"
        >
          business credit card
        </a>
        . Additionally, you will also need to keep careful bookkeeping records
        and file business and personal taxes.
      </Paragraph>
      <Heading size={3}>Taxes</Heading>
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
          prepare and file your tax returns for you
        </Link>
        .
      </Paragraph>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
`;

export default Regulations;
