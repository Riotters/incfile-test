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
    <Container style={{ paddingTop: "100px", paddingBottom: "100px" }} width={750}>
      <Heading size={4} style={{ fontSize: "40px" }}>
        Rules, Regulations and Taxes for Your Moving Business
      </Heading>
      <Paragraph big mixed>
        You can’t escape real-world licenses, permits and regulations. You will need to explore local, state and federal licenses and permits, and <Link to="/business-license-research-package/">we can also help out with researching your business licensing needs.</Link>
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

  @media (min-width: 136px) {
    width: 136px;
  }
`;
export default Regulations;
