import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";
import HeadingCenter from "../../../partials/heading-center"
import ContentCenter from "../../../partials/content-center";
import Image from "../../../atoms/image/image"
import ArrowCircleOrangeSVG from "../../../../images/icons/arrow-circle-orange.inline.svg";

const ResearchPackage = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
  background-color: ${color.white};
  position: relative;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: stretch;
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

    p {
      font-size: 16px;
      line-height: 24px;
      color: ${color.grey1};
    }
  }

  .circle {
    height: 30px;
    width: 100%;
    max-width: 30px;
    position: relative;

    @media (min-width: 992px) {
      height: auto;
    }

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

      @media (min-width: 992px) {
        transform: translate(-50%, -50%) rotate(0);
      }
    }
  }
`;

const ResearchPackageSection = ({ className, content }) => (
    <ResearchPackage className={className}>
        <HeadingCenter headline="As part of the Business License Research Package, a licensing expert will..." headlineWidth="890" />
        <ContentCenter>
            <Boxes>
            <Curve top="40" right="-29" color={color.blue1}>
                <CurveSVG />
            </Curve>
            <div className="box">
                <div className="icon">
                <Image filename="determine-all-business-licenses" />
                </div>
                <p>Determine all business licenses and permits required at the federal, state, county and municipal level.</p>
            </div>
            <div className="circle">
                <span>
                <ArrowCircleOrangeSVG />
                </span>
            </div>
            <div className="box">
                <div className="icon">
                <Image filename="select-a-package" />
                </div>
                <p>Provide you with the proper license/permit applications.</p>
            </div>
            <div className="circle">
                <span>
                <ArrowCircleOrangeSVG />
                </span>
            </div>
            <div className="box">
                <div className="icon">
                <Image filename="what-you-need" />
                </div>
                <p>List filing instructions, supporting document requirements, and fees.</p>
            </div>
            </Boxes>
        </ContentCenter>
    </ResearchPackage>
);
  
export default ResearchPackageSection;