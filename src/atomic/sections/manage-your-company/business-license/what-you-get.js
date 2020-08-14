import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import HeadingCenter from "../../../partials/heading-center";
import ImageContent from "../../../partials/left-image-right-content";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-pink.inline.svg";
import LicenseSVG from "../../../../images/icons/license.inline.svg";
import PermitSVG from "../../../../images/icons/permit.inline.svg";
import TaxRegistrationSVG from "../../../../images/icons/tax-registration.inline.svg";
import ApplicationFormSVG from "../../../../images/icons/application-form.inline.svg";

const WhatYouGet = styled.section`
  position: relative;
  padding-top: 100px;
  padding-bottom: 72px;

  .headline {
      margin-bottom: 80px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
    margin-bottom: 48px;

    @media (min-width: 769px) {
      grid-template-columns: 1fr 1fr;
    }

    .box {
      background-color: ${color.green3};
      position: relative;
      padding: 35px 35px 35px 88px;
      border-radius: 5px 5px 5px 5px;

      @media (min-width: 769px) {
        &:nth-child(1) {
          border-radius: 20px 5px 5px 5px;
        }

        &:nth-child(2) {
          border-radius: 5px 20px 5px 5px;
        }

        &:nth-child(3) {
          border-radius: 5px 5px 5px 20px;
        }

        &:nth-child(4) {
          border-radius: 5px 5px 20px 5px;
        }
      }

      svg {
        position: absolute;
        top: 50%;
        left: 40px;
        transform: translateY(-50%);
      }

      h3 {
        padding: 0;
      }
    }
  }
`;

const WhatYouGetSection = ({ className, content }) => (
    <WhatYouGet className={className}>
        <Oval className="oval" height="570" width="570" top="20" left="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter className="headline" headline={content.header} headlineWidth="770" />
        <ImageContent image="registered-agents-2">
            <Paragraph big bottomMargin="48">{content.text}</Paragraph>
            <Heading size="3" bottomMargin="32">{content.header2}</Heading>
            <div className="grid">
                <div className="box">
                <LicenseSVG />
                <h4>Licenses</h4>
                </div>
                <div className="box">
                <PermitSVG />
                <h4>Permits</h4>
                </div>
                <div className="box">
                <TaxRegistrationSVG />
                <h4>Tax Registrations</h4>
                </div>
                <div className="box">
                <ApplicationFormSVG />
                <h4>Application Forms</h4>
                </div>
            </div>
            <Paragraph big bottomMargin="0">{content.text2}</Paragraph>
        </ImageContent>
    </WhatYouGet>
  );
  
  export default WhatYouGetSection;