import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { color } from "../../../../components/styles/colors";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-babyblue2.inline.svg";
import OvalSvgBottom from "../../../../images/ovals/top-left-transparent-babyblue1.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { Link } from "gatsby";

const Taxes = () => (
  <BabyBlueContainer>
    <Oval>
      <OvalSvg />
    </Oval>
    <OvalBottom>
      <OvalSvgBottom />
    </OvalBottom>

    <Container>
      <TextWrapper>
        <Heading size={2} left bottomMargin={40}>
          Rules, Regulations and Taxes for Your Influencer Marketing Business
        </Heading>

        <Paragraph big mixed={true}>
          <Curve
            color={color.babyblue1}
            style={{
              position: "absolute",
              left: "-29px",
              top: "-25px",
              transform: "rotate(-90deg)",
            }}
          />
          Even though you’re running a virtual business, you can’t escape
          real-world licenses, permits and regulations. You will need to explore
          local, state and federal licenses and permits, and{" "}
          <Link to="/business-license-research-package/">
            we can also help out with researching your business licensing needs
          </Link>
        </Paragraph>
        <Heading size={3}>Finances</Heading>
        <Paragraph big mixed={true}>
          In most cases, you will want to keep your personal and business
          finances separate. We recommend a{" "}
                    <a
                      className="parnet_link"
                      data-name="Bank of America"  
            href="https://utility.bankofamerica.com/alliance/?formid=IF1"
            target="_blank"
            rel="noopener noreferrer"
          >
            business bank account
          </a>{" "}
          for your online business. You might also want to consider a{" "}
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
          self-employment tax, state income tax and federal income tax.
          Depending on where and how you’re selling products and services, you
          may also be liable for sales and use tax.
        </Paragraph>
        <Paragraph big mixed={true}>
          As a rule of thumb, we recommend holding back around a third of your
          earnings to pay your taxes. We can also{" "}
          <Link to="/business-accounting/">
            prepare and file your tax returns for you
          </Link>
          .
        </Paragraph>
      </TextWrapper>
    </Container>
  </BabyBlueContainer>
);

const BabyBlueContainer = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(240, 248, 255, 1) 100%
  );
  padding-bottom: 100px;
  padding-top: 100px;
  position: relative;
`;

const TextWrapper = styled.div`
  width: 100%;
  max-width: 750px;
  position: relative;
  margin: 48px auto 100px;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 240px;
  width: 420px;
  transform: rotate(180deg);
  display: none;

  @media (min-width: 720px) {
    display: block;
  }
`;

const OvalBottom = styled.div`
  position: absolute;
  right: 0;
  top: 0px;
  width: 720px;
  transform: scaleX(-1);
  display: none;

  @media (min-width: 720px) {
    display: block;
  }
`;


export default Taxes;
