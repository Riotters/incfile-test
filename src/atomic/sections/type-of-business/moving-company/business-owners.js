import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import { shadow } from "../../../atoms/styles/shadows";
import { color } from "../../../atoms/styles/colors";

const BusinessOwners = () => (
  <Wrapper>
    <Container>
      <TextCenterLayout
        headline="Groups and Forums for Moving Business Owners"
        text="Here are some useful places where you can connect with other moving entrepreneurs."
      />

      <LinksContainer>
        <LinkItem>
          <PathLink
            to="https://www.facebook.com/groups/286259695128425/"
            textColor={color.blue1}
            hoverColor={color.orange1}
            arrowColor={color.blue1}
          >
            Junk Removal, Moving, and Dumpster Rental business owners discussion
            group (Facebook)
          </PathLink>
        </LinkItem>

        <LinkItem>
          <PathLink
            to="https://www.movingscam.com/forum/"
            textColor={color.blue1}
            hoverColor={color.orange1}
            arrowColor={color.blue1}
          >
            Moving Scam forum to protect consumers
          </PathLink>
        </LinkItem>

        <LinkItem>
          <PathLink
            to="http://reviewamover.com/forum/"
            textColor={color.blue1}
            hoverColor={color.orange1}
            arrowColor={color.blue1}
          >
            Review a Mover forum
          </PathLink>
        </LinkItem>
      </LinksContainer>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  padding-top: 100px;
`;

const LinksContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100%;
  justify-content: center;
  column-gap: 30px;
  row-gap: 30px;
  margin-top: 76px;
  margin-bottom: 76px;

  @media (min-width: 490px) {
    grid-template-columns: 470px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 470px 470px;
  }
`;

const LinkItem = styled.div`
  margin: 0 auto;
  padding: 28px 40px 28px 40px;
  background-color: white;
  box-shadow: ${shadow.white1};
  width: 100%;
`;

export default BusinessOwners;
