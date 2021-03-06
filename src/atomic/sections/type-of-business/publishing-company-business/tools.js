import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import { shadow } from "../../../atoms/styles/shadows";
import { color, gradient } from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import { toolsList } from "../../../../static/type-of-business/publishing-company-business";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/top-left-transparent-green3.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const ToolsAndLinks = () => (
  <Wrapper>
    <Oval>
      <OvalSvg />
    </Oval>
    <Oval2>
      <OvalSvg />
    </Oval2>
    <Oval3>
      <OvalSvg2 />
    </Oval3>
    <Container>
      <TextCenterLayout
        headline="Groups and Forums for Your Publishing Company"
        text="Here are some useful places where you can connect with other publishing entrepreneurs:"
      />

      <LinksContainer>
        <LinkItem>
          <PathLink
            to="http://idpf.org/forums/"
            textColor={color.blue1}
            hoverColor={color.orange1}
            arrowColor={color.blue1}
          >
            International Digital Publishing Forum
          </PathLink>
        </LinkItem>

        <LinkItem>
          <CurveWrapper>
            <Curve color={color.orange1} />
          </CurveWrapper>
          <PathLink
            to="https://www.stateofdigitalpublishing.com/slack-community/"
            textColor={color.blue1}
            hoverColor={color.orange1}
            arrowColor={color.blue1}
          >
            State of Digital Publishing Slack discussion group
          </PathLink>
        </LinkItem>

        <LinkItem>
          <PathLink
            to="https://www.ukaop.org/groups"
            textColor={color.blue1}
            hoverColor={color.orange1}
            arrowColor={color.blue1}
          >
            Advocate for Quality Original Digital Content
          </PathLink>
        </LinkItem>
      </LinksContainer>
    </Container>

    <UsefulTools
      toolsList={toolsList.tools}
      headlineText={toolsList.headlineText}
      description={toolsList.description}
    />
  </Wrapper>
);

const Wrapper = styled.div`
  padding-top: 100px;
  margin-bottom: 200px;
  position: relative;
  background-image: ${gradient.green3};
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
  position: relative;
`;

const CurveWrapper = styled.div`
  position: absolute;
  right: -24px;
  top: -24px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Oval = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  bottom: 626px;
  right: 0;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const Oval3 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

export default ToolsAndLinks;
