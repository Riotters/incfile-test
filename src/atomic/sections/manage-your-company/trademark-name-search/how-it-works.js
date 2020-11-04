import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import ContentCenter from "../../../partials/content-center";
import Image from "../../../atoms/image/image";
import ArrowCircleOrangeSVG from "../../../../images/icons/arrow-circle-orange.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue3.inline.svg";

const HowItWorks = styled.section`
  position: relative;
`;

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
    background-color: ${color.white};
    box-shadow: ${shadow.white1};
    padding: 40px 24px;

    @media (min-width: 400px) {
      padding: 40px 48px;
    }

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
        background-image: linear-gradient(0deg, #f7f9fc 0%, #f6f8fc 100%);
      }
    }
  }
`;

const HowItWorksSection = ({ className, content }) => (
  <HowItWorks className={className}>
    <Oval className="oval" height="570" width="570" bottom="0" right="0" y="125">
      <OvalSVG />
    </Oval>
    <ContentCenter>
      <Heading size="2" maxWidth="770" bottomMargin="32">
        {content.header}
      </Heading>
      <Boxes>
        <div className="box">
          <div className="icon">
            <Image filename="needs-947" imageAlt="an comic speech bubble icon" />
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
            <Image filename="work-8320" imageAlt="a papersheet icon with a magnifire" />
          </div>
          <h4>We get to work</h4>
          <p>The trademark attorney will conduct a trademark search to ensure the availability, then provide the search results along with a plan of action.</p>
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
      </Boxes>
    </ContentCenter>
  </HowItWorks>
);

export default HowItWorksSection;
