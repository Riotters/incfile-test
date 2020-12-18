import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import SearchIcon from "../../../images/icons/magnitude-glass.inline.svg";
import LLCIcon from "../../../images/icons/llc.inline.svg";
import SCIcon from "../../../images/icons/s-c.inline.svg";
import CCIcon from "../../../images/icons/c-c.inline.svg";
import NPIcon from "../../../images/icons/np.inline.svg";
import RegisteredAgent from "../../../images/icons/registered-agent-form.inline.svg";
import Container from "../../container";
import { shadow } from "../../atoms/styles/shadows";
import { Heading } from "../../atoms/typography/heading";
import Circle from "../../atoms/icons/circle";
import ArrowSVG from "../../../images/arrow.inline.svg";
import { color } from "../../atoms/styles/colors";

const Resources = () => (
  <Container>
    <Heading size={2} style={{ marginTop: "100px", marginBottom: "100px" }}>
      Resources, guides, and articles.
    </Heading>
    <Wrapper>
      <Item to="/research-topics/general-research-topics/">
        <Icon>
          <SearchIcon />
        </Icon>
        General
        <Circle
          circleColor={color.orange3}
          iconColor={color.orange1}
          className="arrow-link"
        >
          <ArrowSVG />
        </Circle>
      </Item>
      <Item to="/research-topics/llc-info/">
        <Icon>
          <LLCIcon />
        </Icon>
        LLC
        <Circle
          circleColor={color.orange3}
          iconColor={color.orange1}
          className="arrow-link"
        >
          <ArrowSVG />
        </Circle>
      </Item>
      <Item to="/research-topics/s-corporation-info/">
        <Icon>
          <SCIcon />
        </Icon>
        S-Corporation
        <Circle
          circleColor={color.orange3}
          iconColor={color.orange1}
          className="arrow-link"
        >
          <ArrowSVG />
        </Circle>
      </Item>
      <Item to="/research-topics/c-corporation-info/">
        <Icon>
          <CCIcon />
        </Icon>
        C-Corporation
        <Circle
          circleColor={color.orange3}
          iconColor={color.orange1}
          className="arrow-link"
        >
          <ArrowSVG />
        </Circle>
      </Item>
      <Item to="/research-topics/nonprofit-info/">
        <Icon>
          <NPIcon />
        </Icon>
        Nonprofit
        <Circle
          circleColor={color.orange3}
          iconColor={color.orange1}
          className="arrow-link"
        >
          <ArrowSVG />
        </Circle>
      </Item>
      <Item to="/research-topics/registered-agent-help/">
        <Icon>
          <RegisteredAgent />
        </Icon>
        Registered Agent
        <Circle
          circleColor={color.orange3}
          iconColor={color.orange1}
          className="arrow-link"
        >
          <ArrowSVG />
        </Circle>
      </Item>
    </Wrapper>
  </Container>
);

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 30px;
  row-gap: 30px;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Item = styled(Link)`
  display: flex;
  width: 100%;
  box-shadow: ${shadow.white1};
  background-color: white;
  border-radius: 5px;
  font-family: Avenir;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s ease;

  .arrow-link {
    transition: all 0.5s;
    pointer-events: none;
    margin: 0 48px 0 auto;
    opacity: 0;
  }

  svg {
    opacity: 0.75;
    transition: opacity 0.3s ease;
  }

  &:hover {
    font-family: Avenir;
    font-weight: 900;
    box-shadow: ${shadow.white2};

    .arrow-link {
      opacity: 1;
      margin: 0 16px 0 auto;
    }

    svg {
      opacity: 1;
    }
  }
`;

const Icon = styled.span`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #f4f4f4;
  margin-right: 24px;
`;

export default Resources;
