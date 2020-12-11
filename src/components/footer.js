import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
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
import CurveSVG from "../images/green-curve.inline.svg"

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

    h4 {
      color: #757575;
      font-family: MarkPro;
      font-size: 16px;
      letter-spacing: 1px;
      line-height: 14px;
      opacity: 1;
      padding-top: 10px;
      padding-bottom: 10px;
      text-transform: uppercase;
      border-top: 1px solid #f4f4f4;
      background-color: #fff;

      @media (min-width: 992px) {
        font-size: 12px;
        letter-spacing: 1px;
        padding-top: 0;
        padding-bottom: 24px;
        border-top: none;
        opacity: 0.9;
      }
    }
  }

  ul {
    list-style: none;

    li {
      display: none;

      @media (min-width: 992px) {
        display: block;
      }

      a {
        text-decoration: none;
        color: #797a79;
        font-family: Avenir;
        font-size: 14px;
        line-height: 17px;
        transition: color 0.3s ease;

        &:hover {
          color: #fd8550;
        }
      }
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

const Footer = () => (
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
        <div>
          <h4>Entity Types</h4>
          <ul>
            <li>
              <Link to="/limited-liability-company/">LLC</Link>
            </li>
            <li>
              <Link to="/what-is-s-corporation/">S-Corporation</Link>
            </li>
            <li>
              <Link to="/what-is-c-corporation/">C-Corporation</Link>
            </li>
            <li>
              <Link to="/what-is-non-profit-corporation/">Nonprofit</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/manage-your-company/registered-agent/">Registered Agent</Link>
            </li>
            <li>
              <Link to="/manage-your-company/annual-report/">Annual Report</Link>
            </li>
            <li>
              <Link to="/manage-your-company/certificate-of-good-standing/">Certificate Of Good Standing</Link>
            </li>
            <li>
              <Link to="/manage-your-company/change-of-registered-agent/">Change Of Registered Agent</Link>
            </li>
            <li>
              <Link to="/manage-your-company/foreign-qualification/">Foreign Qualification</Link>
            </li>
            <li>
              <Link to="/manage-your-company/amendment/">Amendment</Link>
            </li>
            <li>
              <Link to="/manage-your-company/dissolution/">Dissolution</Link>
            </li>
            <li>
              <Link to="/manage-your-company/tax-id-ein/">EIN/Tax ID Number</Link>
            </li>
            <li>
              <Link to="/business-license-research-package/">Business License Search</Link>
            </li>
            <li>
              <Link to="/business-accounting/">File Business Taxes</Link>
            </li>
            <li>
              <Link to="/fictitious-business-or-trade-name/">Fictitious Business Name</Link>
            </li>
            <li>
              <Link to="/llc-s-corp-election/">File S Corp Tax Election</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/start-your-company/">Review Entity Types</Link>
            </li>
            <li>
              <Link to="/manage-your-company/">Manage Your Company</Link>
            </li>
            <li>
              <Link to={`${process.env.ORDER_URL}/dashboard`}>Check Order Status</Link>
            </li>
            <li>
              <Link to="/learn-more/">Learn More</Link>
            </li>
            <li>
              <Link to={`${process.env.ORDER_URL}/form-order-now.php`}>Pricing</Link>
            </li>
            <li>
              <Link to="https://www.incfile.com/blog/">Blog</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>
              <Link to={`${process.env.ORDER_URL}/dashboard`}>Renew Registered Agent</Link>
            </li>
            <li>
              <Link to="/compare-state-filing-times/">Filing Times</Link>
            </li>
            <li>
              <Link to="/why-choose-incfile/">Why Choose Us</Link>
            </li>
            <li>
              <Link to="/reviews/">Testimonials</Link>
            </li>
            <li>
              <Link to="/business-entity-comparison/">Entity Comparison Chart</Link>
            </li>
            <li>
              <Link to="/llc-state-information/">LLC State Info</Link>
            </li>
            <li>
              <Link to="/corporation-state-information/">Corporation State Info</Link>
            </li>
            <li>
              <Link to="/manage-your-company/corporatellc-kit/">Corporate/LLC Kit</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>
              <Link to="/contact/new-sales/">Contact</Link>
            </li>
            <li>
              <Link to="/affiliates/">Affiliates</Link>
            </li>
            <li>
              <Link to="/sitemap/">Sitemap</Link>
            </li>
            <li>
              <Link to="/cancellation-policy/">Cancellation Policy</Link>
            </li>
            <li>
              <Link to="/privacy-policy/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/disclaimer/">Legal Disclaimer</Link>
            </li>
            <li>
              <Link to="/glossary/">Glossary</Link>
            </li>
          </ul>
        </div>
      </Navigation>
      <Bot>
        <Copyright>
          © {new Date().getFullYear()}.{` `}Incfile.com{` `}All Rights Reserved.
        </Copyright>
        <Social>
          <li>
            <a href="https://facebook.com/incfile" title="Facebook">
              <FacebookSVG />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC-hfd-zO8SSMpOgLNYwLAXA" title="YouTube">
              <YoutubeSVG />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/incfile-com/" title="LinkedIn">
              <LinkedinSVG />
            </a>
          </li>
        </Social>
      </Bot>
    </Container>
  </Wrapper>
)

export default Footer
