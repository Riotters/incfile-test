import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import { Heading } from "../../../atoms/typography/heading";
import Image from "../../../atoms/image/image";
import HeadingCenter from "../../../partials/heading-center";
import ContentObject from "../../../partials/left-content-right-object";
import ObjectContent from "../../../partials/left-object-right-content";
//cards
import BusinessRegistrySVG from "../../../../images/cards/search-the-business-registry.inline.svg";
import ProposedNameSVG from "../../../../images/cards/see-if-your-proposed-business.inline.svg";
import UpToDateSVG from "../../../../images/cards/quwey-the-most-up-to-date.inline.svg";
import SearchSVG from "../../../../images/cards/search-for-both-corporation.inline.svg";
import FormSVG from "../../../../images/cards/choose-the-form.inline.svg";
//shapes
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue3.inline.svg";

const shadow1 = (bgColor) => {
  switch (bgColor) {
    case color.blue2: {
      return shadow.blue2;
    }
    case color.orange2: {
      return shadow.orange2;
    }
    case color.green2: {
      return shadow.green2;
    }
    case color.purple2: {
      return shadow.purple2;
    }
    case color.babyblue2: {
      return shadow.babyblue2;
    }
    case color.yellow2: {
      return shadow.yellow2;
    }
    case color.red2: {
      return shadow.red2;
    }
    default:
      return "";
  }
};

const Features = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 104px;

  .left,
  .right {
    h3 {
      max-width: 430px;
      padding-bottom: 56px;
    }
  }

  .left {
    .card-wrapper {
      margin-left: auto;
    }

    h3 {
      padding-left: 75px;
    }
  }

  .right {
    .card-wrapper {
      margin-right: auto;
    }

    h3 {
      padding-right: 75px;
    }
  }
`;

const CardWrapper = styled.div`
  width: 570px;
  position: relative;
`;

const IconWrapper = styled.div`
  height: 96px;
  width: 96px;
  background-color: ${(props) => (props.color ? props.color : "")};
  box-shadow: ${({ color }) => shadow1(color)};
  position: absolute;
  top: -30px;
  right: 15px;
  border-radius: 20px;
  padding: 16px;
`;

const FeaturesSection = ({ className, content }) => (
  <Features className={className}>
    <Oval className="oval" height="720" width="720" top="0" right="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} text={content.text} headlineWidth="640" textWidth="770" bottomMargin="104" />
    <ContentObject
      className="left"
      object={
        <CardWrapper className="card-wrapper">
          <IconWrapper color={color.blue2}>
            <Image filename="business-registry-8199" />
          </IconWrapper>
          <BusinessRegistrySVG />
        </CardWrapper>
      }
      contentCenter
    >
      <Heading size="3" bottomMargin="0">
        {content.header2}
      </Heading>
    </ContentObject>
    <ObjectContent
      className="right"
      object={
        <CardWrapper className="card-wrapper">
          <IconWrapper color={color.purple2}>
            <Image filename="proposed-name-4338" />
          </IconWrapper>
          <ProposedNameSVG />
        </CardWrapper>
      }
      contentCenter
    >
      <Heading size="3" bottomMargin="0">
        {content.header3}
      </Heading>
    </ObjectContent>
    <ContentObject
      className="left"
      object={
        <CardWrapper className="card-wrapper">
          <IconWrapper color={color.yellow2}>
            <Image filename="upadated-informations-5921" />
          </IconWrapper>
          <UpToDateSVG />
        </CardWrapper>
      }
      contentCenter
    >
      <Heading size="3" bottomMargin="0">
        {content.header4}
      </Heading>
    </ContentObject>
    <ObjectContent
      className="right"
      object={
        <CardWrapper className="card-wrapper">
          <IconWrapper color={color.green2}>
            <Image filename="search-for-name-7559" />
          </IconWrapper>
          <SearchSVG />
        </CardWrapper>
      }
      contentCenter
    >
      <Heading size="3" bottomMargin="0">
        {content.header5}
      </Heading>
    </ObjectContent>
    <ContentObject
      className="left"
      object={
        <CardWrapper className="card-wrapper">
          <IconWrapper color={color.babyblue2}>
            <Image filename="choose-to-form-8375" />
          </IconWrapper>
          <FormSVG />
        </CardWrapper>
      }
      contentCenter
    >
      <Heading size="3" bottomMargin="0">
        {content.header6}
      </Heading>
    </ContentObject>
  </Features>
);

export default FeaturesSection;
