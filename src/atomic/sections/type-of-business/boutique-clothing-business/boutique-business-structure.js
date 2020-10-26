import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { color } from "../../../atoms/styles/colors";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import ArrowSVG from "../../../../images/arrow.inline.svg";
import IconCircle from "../../../../components/icons/circle";
import PlaneIcon from "../../../../images/icons/plane.inline.svg";
import RockerIcon from "../../../../images/icons/rocket.inline.svg";
import UmbrellaIcon from "../../../../images/icons/umbrella.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import ArrowsIcon from "../../../../images/icons/arrows.inline.svg";
import Button from "../../../molecules/buttons/button";
import OvalOrange2Svg from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";
import { shadow } from "../../../atoms/styles/shadows";
import { Link } from "gatsby";

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
  top: 211px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const BoutiqueBusinessStructure = () => (
  <OrangeContainer>
    <Oval>
      <OvalOrange2Svg />
    </Oval>

    <BusinessOwnerResponsibilities>
      <ImageContent image="unique-business-2" paddingTop="60">
        <Heading size={4} style={{ fontSize: "24px" }}>
          Choose the Right Business Structure for Your Boutique Business
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
          <Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed={true}>
            <FlexLink to="">
              <IconCircle circleColor="transparent" iconColor={color.blue1}>
                <ArrowSVG />
              </IconCircle>
              Sole Proprietorship
            </FlexLink>
          </Paragraph>

          <Paragraph big>If you don’t choose to form a legal business entity for your moving business, you will be a sole proprietor by default. This won’t give you the legal protections you need, so we do not recommend this. </Paragraph>
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
            <FlexLink to="">
              <IconCircle circleColor="transparent" iconColor={color.blue1}>
                <ArrowSVG />
              </IconCircle>
              Partnership
            </FlexLink>
          </Paragraph>

          <Paragraph big>
            Similar to a sole proprietorship, if you go into business with someone else without forming a legal business entity, you will be treated as a partnership. This doesn’t give you limited liability protections, so we don’t recommend it for your boutique clothing business.
          </Paragraph>
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
            <FlexLink to="">
              <IconCircle circleColor="transparent" iconColor={color.blue1}>
                <ArrowSVG />
              </IconCircle>
              Limited Liability Company or LLC
            </FlexLink>
          </Paragraph>

          <Paragraph big>The Limited Liability Company (LLC) is ideal for most small retail clothing businesses. An LLC is easy and inexpensive to set up, and it has the least administrative requirements of any formal business entity.</Paragraph>
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
            <FlexLink to="">
              <IconCircle circleColor="transparent" iconColor={color.blue1}>
                <ArrowSVG />
              </IconCircle>
              S Corporation
            </FlexLink>
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
            <FlexLink to="">
              <IconCircle circleColor="transparent" iconColor={color.blue1}>
                <ArrowSVG />
              </IconCircle>
              C Corporation
            </FlexLink>
          </Paragraph>

          <Paragraph big>These are the largest and most complex types of businesses and are typically far more than the average entrepreneur or boutique business owner will need.</Paragraph>
        </TextBlockWithImage>

        <Paragraph big style={{ paddingTop: "48px", paddingBottom: 0 }} mixed={true}>
          For more information on the advantages and disadvantages of different types of businesses, <Link to="/business-entity-comparison/">please see our in-depth guide</Link>. If you’ve still got questions,{" "}
          <Link to="https://grasshopper.com/blog/llc-vs-corporation-8-entrepreneur-questions-answered/">we’ve answered them to help you choose the right business structure</Link> for your boutique clothing business.
        </Paragraph>
        <Paragraph big style={{ paddingTop: "48px", paddingBottom: 0 }} mixed={true}>
          In most cases, our recommendation for a boutique business business would be to create an LLC. We’ve <Link to="/form-an-llc/">got a complete guide</Link> to everything you need to do. <Link to="/llc-state-information/">LLC formation does vary from state to state</Link>, but we’ve got you
          covered, wherever you are.
        </Paragraph>

        <Button theme="primary48" width="365px" arrow content={{ url: `${process.env.ORDER_URL}/form-order-now.php`, text: `Start your business with us, today!` }} />
      </ImageContent>
    </BusinessOwnerResponsibilities>
  </OrangeContainer>
);

const FlexLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export default BoutiqueBusinessStructure;
