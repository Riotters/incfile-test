import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import Colorbox from "../../components/color-box";
import TextCenterLayout from "../../components/partials/blocks/heading-center";
import styled from "styled-components";
import Top from "../../atomic/partials/top";
import ImageContent from "../../atomic/partials/left-image-right-content";
import Articles from "../../components/partials/sections/articles";
import { color, gradient } from "../../components/styles/colors";
import { shadow } from "../../components/styles/shadows";
import Container from "../../components/container";
import ShieldSVG from "../../images/icons/shield.inline.svg";
import Helpo from "../../components/partials/blocks/left-content-right-object";
import Accordion from "../../components/accordion";
import Benefits from "../../components/partials/sections/benefits";
import Card from "../../components/certificate-card";
import ArrowCircleOrangeSVG from "../../images/icons/arrow-circle-orange.inline.svg";
import Image from "../../components/image_nobase64";
import CheckBlueSVG from "../../images/circle-status-check-blue.inline.svg";
import { Heading } from "../../atomic/atoms/typography/heading";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
//Sections
import About from "../../atomic/sections/manage-your-company/trademark-name-search/about"
import Help from "../../atomic/sections/manage-your-company/trademark-name-search/help"
import Faq from "../../atomic/sections/manage-your-company/trademark-name-search/faq"
import Cta from "../../atomic/sections/manage-your-company/trademark-name-search/cta"
//Texts
import { top, about, help, howitworks, faq, cta } from "../../static/manage-your-company/trademark-name-search"

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: 72px;

  @media (min-width: 769px) {
    flex-direction: row;
  }

  .box {
    width: 100%;
    box-shadow: ${shadow.white1};
    padding: 40px 48px;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 140px;
      width: 140px;
      margin: 0 auto 60px;

      .gatsby-image-wrapper {
        height: 100%;
        width: 100%;

        img {
          object-fit: contain !important;
        }
      }
    }

    h4 {
      padding-bottom: 16px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      color: ${color.grey1};
    }
  }

  .circle {
    align-self: center;
    height: 30px;
    width: 100%;
    max-width: 30px;
    position: relative;

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 96px;
      width: 96px;
      background-color: ${color.white};
      box-shadow: inset ${shadow.white1};
      box-shadow: inset 0 0 32px 0 rgba(236, 236, 236, 0.4);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(90deg);

      @media (min-width: 769px) {
        transform: translate(-50%, -50%) rotate(0);
      }
    }
  }
`;

const TrademarkNameSearch = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-trademark" imageAlt="Mr Bulb holding a certificate and tossing an orginal and a trademark sign" ovalColor="darkblue">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Help content={help} />
    <Boxes>
            <div className="box">
              <div className="icon">
                <Image filename="needs" imageAlt="an comic speech bubble icon" />
              </div>
              <h4>Tell us what you need</h4>
              <p>Tell us what you need. A trademark attorney will follow up with you to get a better understanding of your needs and provide guidance on how the process works.</p>
            </div>
            <div className="circle">
              <span>
                <ArrowCircleOrangeSVG />
              </span>
            </div>
            <div className="box">
              <div className="icon">
                <Image filename="trademark" imageAlt="a papersheet with a trademark icon" />
              </div>
              <h4>We will file your trademark wih the Patent and Trademark office</h4>
              <p>The attorney will file the trademark with the US Patent and Trademark office and deliver the approved trademark documentation.</p>
            </div>
            <div className="circle">
              <span>
                <ArrowCircleOrangeSVG />
              </span>
            </div>
            <div className="box">
              <div className="icon">
                <Image filename="work" imageAlt="a papersheet icon with a magnifire" />
              </div>
              <h4>We get to work</h4>
              <p>The trademark attorney will conduct a trademark search to ensure the availability, then provide the search results along with a plan of action.</p>
            </div>
          </Boxes>
    <Benefits />
    <Faq content={faq} />
    <Cta content={cta} />
    <Articles />
  </Layout>
);

export default TrademarkNameSearch;
