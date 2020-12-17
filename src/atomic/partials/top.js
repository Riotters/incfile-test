import React from "react";
import styled from "styled-components";
import { color } from "../atoms/styles/colors";
import VisibilitySensor from "../VisibilitySensor";
import Container from "../container";
import Image from "../atoms/image/image_nobase64";
import OvalSVG from "../../images/oval.inline.svg";

const switch1 = (ovalColor) => {
  switch (ovalColor) {
    case "blue": {
      return color.blue1;
    }
    case "orange": {
      return color.orange1;
    }
    case "purple": {
      return "#9168ff";
    }
    case "purple-2": {
      return "#d2aafb";
    }
    case "yellow": {
      return "#ffc95b";
    }
    case "green": {
      return "#97e0c7";
    }
    case "sun": {
      return "#ffb059";
    }
    case "sun-2": {
      return "#ffc95b";
    }
    case "blackpink": {
      return "#ffb8b8";
    }
    case "darkblue": {
      return "#7891fc";
    }
    case "lightpurple": {
      return "#d2aafb";
    }
    case "love": {
      return "#fdabab";
    }
    case "babyblue": {
      return "#71bef8";
    }
    default:
      return "";
  }
};

const switch2 = (ovalColor) => {
  switch (ovalColor) {
    case "blue": {
      return color.babyblue2;
    }
    case "orange": {
      return color.orange2;
    }
    case "purple": {
      return "#dad2ff";
    }
    case "purple-2": {
      return "#ede0fa";
    }
    case "yellow": {
      return "#fff5d4";
    }
    case "green": {
      return "#d5f3e8";
    }
    case "sun": {
      return "#ffe3c5";
    }
    case "sun-2": {
      return "#fff5d4";
    }
    case "blackpink": {
      return "#ffdddd";
    }
    case "darkblue": {
      return "#ced7ff";
    }
    case "lightpurple": {
      return "#ede0fa";
    }
    case "love": {
      return "#f9e0e0";
    }
    case "babyblue": {
      return "#d2eeff";
    }
    default:
      return "";
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 80px;
  padding-bottom: 8px;
  z-index: 1;

  @media (min-width: 768px) and (max-width: 991px) {
    align-items: flex-start;
    overflow: ${(props) => (props.overflowMD ? "visible" : "hidden")};
  }

  @media (min-width: 992px) {
    flex-direction: row;
    height: ${(props) => (props.heightSM ? props.heightSM : "100vh")};
    max-height: 777px;
    padding-top: 0;
    padding-bottom: 0;
  }

  &.tablet--shopper {
    .top-content {
      @media (min-width: 768px) and (max-width: 991px) {
        order: 1;
        max-width: 50%;
        margin: 15px 0 0;

        h1,
        h2,
        h3,
        h4,
        p {
          text-align: left;
        }

        & > div > div {
          align-items: flex-start;
          justify-content: flex-start;
        }
      }
    }

    .top-image-container {
      @media (min-width: 768px) and (max-width: 991px) {
        order: 2;
        min-height: 100px;
        overflow: visible;
        position: relative;

        .gatsby-image-wrapper {
          top: ${(props) => props.tabletImgPosY ?? -440}%;
          left: ${(props) => props.tabletImgPosX ?? 25}%;
          width: 85%;
          max-width: 664px;
          position: absolute !important;
          transform: scale(${(props) => props.tabletImgScale ?? "1"});
        }
      }
    }

    .oval {
      @media (min-width: 768px) and (max-width: 991px) {
        width: 65%;
      }
    }

    div[class^="top-buttons-box__Wrapper"] {
      @media (min-width: 768px) and (max-width: 991px) {
        align-items: flex-start;
      }
    }
  }
`;

const Oval = styled.div`
  width: 90%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  @media (min-width: 992px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    max-width: 850px;
    max-height: 777px;
  }

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  & > svg {
    position: absolute;
    right: 0;
    bottom: 0;

    defs {
      radialGradient {
        stop {
          &:nth-child(1) {
            stop-color: ${({ ovalColor }) => switch1(ovalColor)};
          }
          &:nth-child(2) {
            stop-color: ${({ ovalColor }) => switch2(ovalColor)};
          }
        }
      }
    }

    path {
      transform: matrix(1, 0, 0, -1, -115, 777);
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 32px;

  @media (min-width: 992px) {
    width: ${(props) => (props.contentWidth ? props.contentWidth : "50")}%;
    align-items: flex-start;
  }

  @media (min-width: 1200px) {
    padding-top: ${(props) =>
      props.contentPaddingTop ? props.contentPaddingTop : "150"}px;
  }

  & > h1 {
    width: 100%;
    text-align: center;
    padding-bottom: 40px;

    @media (min-width: 992px) {
      text-align: left;
      padding-bottom: 24px;
    }

    @media (min-width: 992px) {
      max-width: ${(props) =>
        props.headlineWidth ? props.headlineWidth : "480"}px;
    }
  }

  & > p {
    margin-bottom: 32px;
    text-align: center;

    @media (min-width: 992px) {
      text-align: left;
      max-width: ${(props) =>
        props.textWidth
          ? props.textWidth
          : props.headlineWidth
          ? props.headlineWidth
          : "480"}px;
    }
    a,
    span {
      font-weight: bold;
    }

    span {
      color: ${color.grey1};
    }
  }

  .p {
    color: ${color.grey2};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  max-width: ${(props) =>
    props.imageWidth ? `${props.imageWidth}px` : "950px"};
  width: 100%;
  overflow: hidden;

  @media (min-width: 992px) {
    position: absolute;
    top: 50%;
    right: 55%;
    width: 55%;
    transform: translate(100%, -50%);
    padding-bottom: 0;
    ${(props) =>
      props.imagePositionRight && `right: ${props.imagePositionRight};`}
  }

  .gatsby-image-wrapper {
    width: 100%;
    left: ${(props) =>
      props.imageMobilePosition ? props.imageMobilePosition : "8%"};
    ${(props) =>
      props?.imageMobileWidth ? "width: " + props.imageMobileWidth + "px;" : ""}

    @media (min-width: 992px) {
      position: static !important;
    }

    img {
      object-fit: contain !important;
    }
  }
`;

const Top = ({
  children,
  imageName,
  imageAlt,
  imageWidth,
  imagePositionRight,
  imageMobilePosition,
  contentWidth,
  headlineWidth,
  textWidth,
  ovalColor,
  imageMobileWidth,
  className,
  tabletVariantClass,
  tabletImgPosX,
  tabletImgPosY,
  tabletImgScale,
  overflowMD,
  ...rest
}) => (
  <Wrapper
    className={className + " " + tabletVariantClass}
    tabletImgPosX={tabletImgPosX}
    tabletImgPosY={tabletImgPosY}
    tabletImgScale={tabletImgScale}
    overflowMD={overflowMD}
    {...rest}
  >
    {/* <VisibilitySensor partialVisibility once>
			{({ isVisible }) => ( */}
    <Oval
      //className={(isVisible ? "scaleUp enter" : "scaleUp") + " oval"}
      className={"oval"}
      ovalColor={ovalColor}
    >
      <OvalSVG />
    </Oval>
    {/* )}
		</VisibilitySensor> */}
    <ImageContainer
      className="top-image-container"
      imageWidth={imageWidth}
      imagePositionRight={imagePositionRight}
      imageMobilePosition={imageMobilePosition}
      imageMobileWidth={imageMobileWidth}
    >
      <Image filename={imageName} alt={imageAlt} />
    </ImageContainer>
    <Container className="top-content">
      <Content>
        {/* <VisibilitySensor partialVisibility once>
					{({ isVisible }) => ( */}
        <TextContainer
          //className={isVisible ? "slideRight enter" : "slideRight"}
          contentWidth={contentWidth}
          headlineWidth={headlineWidth}
          textWidth={textWidth}
          {...rest}
        >
          {children}
        </TextContainer>
        {/* )}
				</VisibilitySensor> */}
      </Content>
    </Container>
  </Wrapper>
);

export default Top;

Top.defaultProps = {
  OvalSVGFile: OvalSVG,
  overflowMD: false,
};
