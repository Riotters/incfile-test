import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { color } from "../atomic/atoms/styles/colors";
import Container from "../atomic/container";
import LogoSVG from "../images/logo.inline.svg";
import ArrowSVG from "../images/arrow.inline.svg";
import FacebookSVG from "../images/facebook.inline.svg";
import TwitterSVG from "../images/twitter.inline.svg";
import YoutubeSVG from "../images/youtube.inline.svg";
import LinkedinSVG from "../images/linkedin.inline.svg";
import PinterestSVG from "../images/pinterest.inline.svg";
import Button from "../atomic/molecules/buttons/button";
import List from "../atomic/organisms/accordion/footer-single";
import Curve from "../atomic/atoms/icons/curve";
import CurveSVG from "../images/green-curve.inline.svg";
//Texts
import { newsletter, footer } from "../static/footer";

const Wrapper = styled.div`
  padding-top: 56px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Bot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 36px 0;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

const Logo = styled.div`
  height: 24px;
  margin-bottom: 32px;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }

  p {
    color: #1e1e1e;
    font-family: MarkPro, sans-serif;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 16px;

    @media (min-width: 992px) {
      margin-bottom: 0;
    }

    span {
      color: ${color.grey2};
      font-family: Avenir, sans-serif;
      padding-left: 5px;
    }
  }
`;

const Label = styled.label`
  z-index: -1;
  color: ${color.white};
  position: absolute;
`;

const Newsletter = styled.input`
  border: 1px solid #e9e9e9;
  border-radius: 24px;
  width: 100%;
  height: 40px;
  margin-bottom: 24px;
  margin-right: 8px;
  padding: 6px 24px;
  color: #1e1e1e;
  font-family: Avenir, sans-serif;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  transition: border-color 0.3s ease;

  @media (min-width: 576px) {
    width: 246px;
  }

  @media (min-width: 992px) {
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
`;

const Arrow = styled.div`
  display: none;
  width: 12px;
  margin: 10px 0;

  @media (min-width: 992px) {
    display: block;
    margin: 0 14px;
  }

  svg {
    transform: rotate(0);

    path {
      fill: #a4eed0;
    }
  }
`;

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
`;

// const Curve = styled.div`
//   height: 75px;
//   width: 75px;
//   position: absolute;
//   bottom: 0;
//   right: 25px;
//   z-index: -1;

//   @media (min-width: 992px) {
//     bottom: 75px;
//   }

//   @media (min-width: 1440px) {
//     height: 115px;
//     width: 115px;
//     right: -115px;
//     bottom: 75px;
//   }
// `;

const Copyright = styled.p`
  color: #4f4f4f;
  font-family: Avenir, sans-serif;
  font-size: 16px;
  line-height: 19px;
  width: 290px;
  text-align: left;
  padding: 15px 0;

  @media (min-width: 769px) {
    padding: 0;
  }
`;

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
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Top>
          <Logo>
            <LogoSVG />
          </Logo>
          <NewsletterWrapper>
            <p>
              {newsletter.text} 
              <span>({newsletter.bracket})</span>
            </p>
            <Arrow>
              <ArrowSVG />
            </Arrow>
            <Label for="newsletter">Newsletter</Label>
            <Newsletter placeholder="Your E-mail" name="newsletter" id="newsletter" type="text" />
            <Button content={newsletter.button} theme="secondary40" arrow="yes" right="14px" margin="0 auto 0 0" />
          </NewsletterWrapper>
        </Top>
        <Navigation>
          <Curve right="-30" bottom="150">
            <CurveSVG />
          </Curve>
          {footer.items.map((item) => (
            <List content={item} />
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
  );
};

export default Footer;
