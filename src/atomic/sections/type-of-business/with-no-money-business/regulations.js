import React from "react";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import styled from "styled-components";
import { Link } from "gatsby";

const Regulations = () => (
  <Wrapper>
    <Container
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
      width={750}
    >
      <Heading
        size={2}
        template={4}
        left
        style={{ fontSize: "40px", lineHeight: `45px` }}
      >
        Rules, Regulations and Taxes for Your Business
      </Heading>
      <Paragraph big mixed={true}>
        Of course, along with running a business there are certain rules,
        regulations and legalities you need to be aware of. You will need to
        explore local, state and federal licenses and permits, and{" "}
        <Link to="/business-license-research-package/">
          we can also help out with your licensing needs
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
