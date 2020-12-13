import React from "react";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSvg from "../../../../images/oval-blue-5.inline.svg";
import styled from "styled-components";
import { Link } from "gatsby";

const Regulations = () => (
  <Wrapper>
    <Oval>
      <OvalSvg />
    </Oval>
    <Container style={{ paddingTop: "100px", paddingBottom: "100px" }} width={750}>
      <Heading size={2} left>
        Rules, Regulations, and Licenses for Airbnbs
      </Heading>
      <Paragraph big mixed={true}>
        Even though you’re running an Airbnb business, you can’t escape real-world licenses, permits and regulations. You will need to explore local, state and federal licenses and permits, and{" "}
        <Link to="/business-license-research-package/">we can also help out with researching your business licensing needs</Link>.
      </Paragraph>
      <Paragraph big mixed={true}>
        It’s also very important to consider local zoning laws, ordinances and permits. Some municipalities don’t allow just anyone to set themselves up as an Airbnb host, and if you do, you could be fined. Check with your local and regional authorities what their requirements are for Airbnb hosts.
      </Paragraph>
    </Container>
  </Wrapper>
);

const ContainerBox = styled.div`
  padding-bottom: 0px;
  padding-top: 100px;

  @media (min-width: 576px) {
    padding-bottom: 100px;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Oval = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`;
export default Regulations;
