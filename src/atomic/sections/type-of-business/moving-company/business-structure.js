import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { color } from "../../../../components/styles/colors";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
 import PlaneIcon from "../../../../images/icons/plane.inline.svg";
import RockerIcon from "../../../../images/icons/rocket.inline.svg";
import UmbrellaIcon from "../../../../images/icons/umbrella.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import ArrowsIcon from "../../../../images/icons/arrows.inline.svg";
import Button from "../../../molecules/buttons/button";
import Container from "../../../container";
import OvalOrange2Svg from "../../../../images/ovals/top-left-transparent-orange.inline.svg";
import { shadow } from "../../../atoms/styles/shadows";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  .colorbox {
    margin-bottom: 48px;
  }
`;

const OrangeContainer = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(254, 246, 237, 1) 100%);
  padding-bottom: 100px;
  position: relative;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 200px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const MovingBusinessStructure = () => (
  <OrangeContainer>
    <Oval>
      <OvalOrange2Svg />
    </Oval>

    <Container>
      <BusinessOwnerResponsibilities>
        <ImageContent image="unique-business-2" imageAlt="choose right moving company business structure" paddingTop="60">
          <Heading size={2} template={3} left>
            Choose the Right Business Structure and Register Your Moving Business
          </Heading>
          <Paragraph big>There are five main business structures you can have in the U.S., and it’s important to choose the right one. We’ve shared your options below. They are:</Paragraph>

          <TextBlockWithImage
            SvgImage={HandsIcon}
            textBackgroundColor="transparent"
            imageBackgroundColor={color.white}
            imageShadowColor={shadow.white2}
            imageShadowOpacity={0.5}
            boxShadow={false}
            paddingLeft={0}
            style={{ marginTop: "40px" }}
            circleShadowY={40}
            circleShadowBlure={80}
            width={100}
            widthUnit="%"
          >
            <Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed>
              Sole Proprietorship
            </Paragraph>

            <Paragraph big>If you don’t choose to form a legal business entity for your moving business, you will be a sole proprietor by default. This won’t give you the legal protections you need, so we do not recommend this.</Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            SvgImage={UmbrellaIcon}
            textBackgroundColor="transparent"
            imageBackgroundColor={color.white}
            imageShadowColor={shadow.white2}
            imageShadowOpacity={0.5}
            boxShadow={false}
            paddingLeft={0}
            style={{ marginTop: "40px" }}
            circleShadowY={40}
            circleShadowBlure={80}
            width={100}
            widthUnit="%"
          >
            <Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed={true}>
              <a href={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}>Partnership</a>
            </Paragraph>

            <Paragraph big>Similar to a sole proprietorship, if you go into business with someone else without forming a legal business entity, you will be treated as a partnership. This doesn’t give you limited liability protections, so we don’t recommend it for your moving business.</Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            SvgImage={ArrowsIcon}
            textBackgroundColor="transparent"
            imageBackgroundColor={color.white}
            imageShadowColor={shadow.white2}
            imageShadowOpacity={0.5}
            boxShadow={false}
            paddingLeft={0}
            style={{ marginTop: "40px" }}
            circleShadowY={40}
            circleShadowBlure={80}
            width={100}
            widthUnit="%"
          >
            <Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed={true}>
              <a href={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}>Limited Liability Company or LLC</a>
            </Paragraph>

            <Paragraph big>The most common type of business entity. An LLC is fast, simple and inexpensive to set up and maintain. It protects your personal finances and assets and is a great way to start your moving business.</Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            SvgImage={PlaneIcon}
            textBackgroundColor="transparent"
            imageBackgroundColor={color.white}
            imageShadowColor={shadow.white2}
            imageShadowOpacity={0.5}
            boxShadow={false}
            paddingLeft={0}
            style={{ marginTop: "40px" }}
            circleShadowY={40}
            circleShadowBlure={80}
            width={100}
            widthUnit="%"
          >
            <Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed={true}>
              <a href={process.env.ORDER_URL + "/form-order-now.php?entityType=SCorporation"}>S Corporation</a>
            </Paragraph>

            <Paragraph big>This is a more complex type of business and isn't generally recommended for smaller organizations.</Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            SvgImage={RockerIcon}
            textBackgroundColor="transparent"
            imageBackgroundColor={color.white}
            imageShadowColor={shadow.white2}
            imageShadowOpacity={0.5}
            boxShadow={false}
            paddingLeft={0}
            style={{ marginTop: "40px" }}
            circleShadowY={40}
            circleShadowBlure={80}
            width={100}
            widthUnit="%"
          >
            <Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed={true}>
              <a href={process.env.ORDER_URL + "/form-order-now.php?entityType=CCorporation"}>C Corporation</a>
            </Paragraph>

            <Paragraph big>These are the largest and most complex types of businesses, and they are typically far more than the average entrepreneur or moving business owner will need.</Paragraph>
          </TextBlockWithImage>

          <Paragraph big style={{ paddingTop: "48px", paddingBottom: 0 }} mixed={true}>
            For more information on the advantages and disadvantages of different types of businesses, <Link to="/business-entity-comparison/">please see our in-depth guide</Link>. If you’ve still got questions,{" "}
            <a href="https://grasshopper.com/blog/llc-vs-corporation-8-entrepreneur-questions-answered/" target="_blank" rel="noopener noreferrer">
              we’ve answered them to help you choose the right business structure
            </a>{" "}
            for your moving company business.
          </Paragraph>
          <Paragraph big style={{ paddingTop: "48px", paddingBottom: 0 }} mixed={true}>
            In most cases, our recommendation for your moving business would be to create an LLC. We’ve <Link to="/form-an-llc/">got a complete guide</Link> to everything you need to do. <Link to="/llc-state-information/">LLC formation does vary from state to state</Link>, but we’ve got you covered,
            wherever you are.
          </Paragraph>

          <Button externalLink theme="primary48" width="365px" arrow content={{ url: `${process.env.ORDER_URL}/form-order-now.php`, text: `Start your business with us, today!` }} />
        </ImageContent>
      </BusinessOwnerResponsibilities>
    </Container>
  </OrangeContainer>
);

export default MovingBusinessStructure;
