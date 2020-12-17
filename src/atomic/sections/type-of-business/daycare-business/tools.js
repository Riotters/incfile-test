import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import { shadow } from "../../../atoms/styles/shadows";
import { color } from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import { toolsList } from "../../../../static/type-of-business/daycare-business";
import OvalSvg from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import OvalSvg2 from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";
const ToolsAndLinks = () => (
  <Wrapper>
    <Oval>
      <OvalSvg />
    </Oval>

    <Oval2>
      <OvalSvg2 />
    </Oval2>

    <Oval3>
      <OvalSvg />
    </Oval3>

    <Container>
      <TextCenterLayout
        headline="Groups and Forums for Daycare Owners"
        text="Here are some useful places where you can connect with other daycare entrepreneurs."
      />

      <LinksContainer>
        <LinkItem>
          <PathLink
            to="https://daycare.com"
            textColor={color.blue1}
            hoverColor={color.orange1}
            arrowColor={color.blue1}
          >
            Daycare.com Forum
          </PathLink>
        </LinkItem>

        <LinkItem>
          <PathLink
            to="https://www.infantandtoddlerforum.org/"
            textColor={color.blue1}
            hoverColor={color.orange1}
            arrowColor={color.blue1}
          >
            Infant and Toddler Forum
          </PathLink>
        </LinkItem>

        <LinkItem>
          <PathLink
            to="https://www.facebook.com/Daycare-Providers-Networking-Group-192651797531950/"
            textColor={color.blue1}
            hoverColor={color.orange1}
            arrowColor={color.blue1}
          >
            Facebook Daycare Providers Networking Group
          </PathLink>
        </LinkItem>

        <LinkItem>
          <PathLink
            to="https://www.facebook.com/Home-Daycare-Providers-314058115271/"
            textColor={color.blue1}
            hoverColor={color.orange1}
            arrowColor={color.blue1}
          >
            Facebook Home Daycare Providers
          </PathLink>
        </LinkItem>

        <LinkItem>
          <PathLink
            to="https://www.facebook.com/groups/daycareproviders/"
            textColor={color.blue1}
            hoverColor={color.orange1}
            arrowColor={color.blue1}
          >
            Facebook Daycare Providers
          </PathLink>
        </LinkItem>
      </LinksContainer>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  padding-top: 100px;
  margin-bottom: 200px;
  position: relative;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0) 50%,
    #fef6ed
  );
`;

const LinksContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100%;
  justify-content: center;
  column-gap: 30px;
  row-gap: 20px;
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
  position: relative;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const Oval3 = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  transform: scaleX(-1);
  opacity: 0.5;

  svg {
    transform: scaleY(-1);
  }

  @media (min-width: 420px) {
    width: 420px;
  }
`;

export default ToolsAndLinks;
