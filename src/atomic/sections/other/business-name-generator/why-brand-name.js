import React, { Fragment } from "react";
import styled from "styled-components";

import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import ContentCenter from "../../../partials/content-center";
import Image from "../../../atoms/image/image";
import ArrowCircleOrangeSVG from "../../../../images/icons/arrow-circle-orange.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ShapeCurve from "../../../atoms/shapes/curve";
import AbsoluteShapCure from "../../../elements/absolute-shape-curve-e";
import VisibilitySensor from "../../../../components/VisibilitySensor";

const Wrapper = styled.div`
  position: relative;
  background-image: linear-gradient(to top, #f2f6ff 35%, #ffffff);
`;

const TextLeftLayout = styled.div`
  position: relative;
  padding: 250px 0 100px 0;
  width: 100%;
  max-width: 700px;
  align-self: flex-start;

  h2,
  p {
    text-align: left;
  }

  .gatsby-image-wrapper {
    position: absolute;
    display: none;

    @media screen and (min-width: 769px) {
      display: block;
      position: absolute !important;
      width: 350px;
      bottom: 0;
      right: 100px;
      transform: translate(135%, 16%);
    }
  }
`;

const Boxes = styled.div`
  position: relative;
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

const WhyBrandNameSection = ({ content }) => {
  return (
    <Wrapper>
      <Oval className="oval" height="570" width="570" top="0" left="0" y="25">
        <OvalSVG />
      </Oval>
      <ContentCenter>
        <Boxes>
          <AbsoluteShapCure rotate={170} left="-25px" bottom="-25px">
            <ShapeCurve color={color.orange1} />
          </AbsoluteShapCure>
          {content.lists.map((item) => (
            <Fragment>
              <div className="box">
                <div className="icon">
                  <Image filename={item.icon} imageAlt="an comic speech bubble icon" />
                </div>
                <h4>{item.header}</h4>
                <p>{item.text}</p>
              </div>
              {item.hasCircle && (
                <div className="circle">
                  <span>
                    <ArrowCircleOrangeSVG />
                  </span>
                </div>
              )}
            </Fragment>
          ))}
        </Boxes>

        <VisibilitySensor partialVisibility once>
          {({ isVisible }) => (
            <TextLeftLayout className={isVisible ? "slideRight enter" : "slideRight"}>
              <Heading size={2}>{content.header}</Heading>
              <Paragraph big mixed={true}>
                {content.text1}
              </Paragraph>
              <Paragraph big mixed={true}>
                {content.text2}
              </Paragraph>

              <Image filename="group-4583" alt="" />
            </TextLeftLayout>
          )}
        </VisibilitySensor>
      </ContentCenter>
    </Wrapper>
  );
};

export default WhyBrandNameSection;
