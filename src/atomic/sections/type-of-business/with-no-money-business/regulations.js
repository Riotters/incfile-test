import React from "react";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import styled from "styled-components";
import { Link } from "gatsby";

const Regulations = () => (
  <Wrapper>
    <Container style={{ paddingTop: "100px", paddingBottom: "100px" }} width={750}>
      <Heading size={4} style={{ fontSize: "40px" }}>
        Rules, Regulations and Taxes for Your Business
      </Heading>
      <Paragraph big mixed={true}>
        Of course, along with running a business there are certain rules, regulations and legalities you need to be aware of. You will need to explore local, state and federal licenses and permits, and{" "}
        <Link to="/business-license-research-package/">we can also help out with your licensing needs</Link>.
      </Paragraph>
      <Paragraph big mixed>
        As a rule of thumb, we recommend keeping back around a third of your earnings to pay your taxes. We can <Link to="/business-accounting/">prepare and file your tax returns for you</Link>.
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
`;
export default Regulations;
