import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import Container from "./container"
import LogoSVG from "../images/logo.inline.svg"
import ArrowSVG from "../images/arrow.inline.svg"
import FacebookSVG from "../images/facebook.inline.svg"
import TwitterSVG from "../images/twitter.inline.svg"
import YoutubeSVG from "../images/youtube.inline.svg"
import LinkedinSVG from "../images/linkedin.inline.svg"
import PinterestSVG from "../images/pinterest.inline.svg"
import Button from "./button"
import List from "../atomic/organisms/accordion/footer-single"
import CurveSVG from "../images/green-curve.inline.svg"
//Texts
import { footer } from "../static/footer"

const Wrapper = styled.div`
  padding-top: 56px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    height: 80px;
  }
`

const Bot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 36px 0;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`

const Logo = styled.div`
  height: 24px;
  margin-bottom: 25px;

  @media (min-width: 769px) {
    margin-bottom: 0;
  }
`

const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
  }

  p {
    color: #1e1e1e;
    font-family: MarkPro;
    font-size: 16px;
    line-height: 19px;

    span {
      color: #757575;
      font-family: Avenir;
    }
  }
`

const Label = styled.label`
  position: absolute;
  z-index: -1;
`;

const Newsletter = styled.input`
  border: 1px solid #e9e9e9;
  border-radius: 24px;
  width: 246px;
  height: 40px;
  margin-top: 15px;
  margin-bottom: 25px;
  margin-right: 8px;
  padding: 6px 24px;
  color: #1e1e1e;
  font-family: Avenir;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  transition: border-color 0.3s ease;

  @media (min-width: 769px) {
    margin-top: 0;
    margin-bottom: 0;
  }

  &::placeholder {
    color: #757575;
  }

  &:hover,
  &:focus {
    border-color: #fd8550;
  }
`

const Arrow = styled.div`
  width: 12px;
  margin: 10px 0;

  @media (min-width: 769px) {
    margin: 0 14px;
  }

  svg {
    transform: rotate(90deg);

    path {
      fill: #a4eed0;
    }

    @media (min-width: 769px) {
      transform: rotate(0);
    }
  }
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 60px;
  padding-bottom: 80px;
  border-bottom: 1px solid rgba(244, 244, 244, 0.9);
  position: relative;

  @media (min-width: 992px) {
    flex-direction: row;
  }

  div {
    margin-top: 25px;
    min-width: 185px;

    @media (min-width: 769px) {
      margin-top: 0;
    }

    @media (min-width: 992px) {
      padding-right: 15px;
    }

    &:last-child {
      padding-right: 0;
    }
  }
`

const Curve = styled.div`
  height: 75px;
  width: 75px;
  position: absolute;
  bottom: 0;
  right: 25px;
  z-index: -1;

  @media (min-width: 992px) {
    bottom: 75px;
  }

  @media (min-width: 1440px) {
    height: 115px;
    width: 115px;
    right: -115px;
    bottom: 75px;
  }
`

const Copyright = styled.p`
  color: #4f4f4f;
  font-family: Avenir;
  font-size: 16px;
  line-height: 19px;
  width: 290px;
  text-align: left;
  padding: 15px 0;

  @media (min-width: 769px) {
    padding: 0;
  }
`

const Social = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 15px 0;

  @media (min-width: 769px) {
    padding: 0;
  }

  li {
    height: 32px;
    width: 32px;
    margin-left: 12px;

    a {
      height: 100%;
      width: 100%;
    }
  }
`

const Footer = () => {
  const [menu, showMenu] = useState(false);

  function handleClick() {
    showMenu(!menu)
  }

  return (
    <Wrapper>
      <Container>
        <Top>
          <Logo>
            <LogoSVG />
          </Logo>
          <NewsletterWrapper>
            <p>
              Newsletter sign in <span>(no spam)</span>
            </p>
            <Arrow>
              <ArrowSVG />
            </Arrow>
            <Label for="newsletter">Newsletter</Label>
            <Newsletter placeholder="Your E-mail" name="newsletter" id="newsletter" type="text" />
            <Button theme="secondary40" arrow="yes" right="14px">
              Subscribe
            </Button>
          </NewsletterWrapper>
        </Top>
        <Navigation>
          <Curve>
            <CurveSVG />
          </Curve>
          {footer.items.map(item => (
            <List isOpen={menu} handleClick={handleClick} content={item}/>
          ))}
        </Navigation>
        <Bot>
          <Copyright>
            © {new Date().getFullYear()}.{` `}Incfile.com{` `}All Rights Reserved.
          </Copyright>
          <Social>
            <li>
              <a href="#" title="Facebook">
                <FacebookSVG />
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <TwitterSVG />
              </a>
            </li>
            <li>
              <a href="#" title="YouTube">
                <YoutubeSVG />
              </a>
            </li>
            <li>
              <a href="#" title="LinkedIn">
                <LinkedinSVG />
              </a>
            </li>
            <li>
              <a href="#" title="Pinterest">
                <PinterestSVG />
              </a>
            </li>
          </Social>
        </Bot>
      </Container>
    </Wrapper>
  )
}

export default Footer
