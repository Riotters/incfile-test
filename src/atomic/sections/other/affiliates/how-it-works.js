import React from "react"
import styled from "styled-components"
import { color } from "../../../atoms/styles/colors"
import { shadow } from "../../../atoms/styles/shadows"
import ContentCenter from "../../../partials/content-center"
import Image from "../../../atoms/image/image"
import ArrowCircleOrangeSVG from "../../../../images/icons/arrow-circle-orange.inline.svg"
import { Heading } from "../../../atoms/typography/heading"
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-orange3-2.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";

const HowItWorks = styled.section`
  position: relative;
  background-color: ${color.orange3};
  padding: 100px 0 120px;
  
  .oval:not(.small) {
        max-width: 100%;
        overflow: hidden;
    }
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
        background-image: linear-gradient(0deg,#f7f9fc 0%,#f6f8fc 100%);
      }
    }
  }
`;

const HowItWorksSection = ({ className, content }) => (
    <HowItWorks className={className}>
        <Oval className="oval" height="570" width="570" top="0" right="0">
            <OvalSVG />
        </Oval>
        <ContentCenter>
            <Heading size="2" maxWidth="770" bottomMargin="24">{content.header}</Heading>

            <Paragraph>{content.text}</Paragraph>

            <Boxes>
                <div className="box">
                    <div className="icon">
                        <Image filename="sign-up-7749" imageAlt="Sign up" />
                    </div>
                    <h4>Sign up</h4>
                    <p>Fill in our short online application.</p>
                </div>
                <div className="circle">
                <span>
                    <ArrowCircleOrangeSVG />
                </span>
                </div>
                <div className="box">
                    <div className="icon">
                        <Image filename="display-ads" imageAlt="Display ads" />
                    </div>
                    <h4>Display ads</h4>
                    <p>Link to Incfile from your website.</p>
                </div>
                <div className="circle">
                <span>
                    <ArrowCircleOrangeSVG />
                </span>
                </div>
                <div className="box">
                    <div className="icon">
                        <Image filename="get-paid-0492" imageAlt="Get paid" />
                    </div>
                    <h4>Get paid</h4>
                    <p>Make $50 when customers you refer form an LLC or Corporation.</p>
                </div>
            </Boxes>
        </ContentCenter>
    </HowItWorks>
);

export default HowItWorksSection;