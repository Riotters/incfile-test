import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { color } from "../../../../components/styles/colors";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import PlaneIcon from "../../../../images/icons/plane.inline.svg";
import RockerIcon from "../../../../images/icons/rocket.inline.svg";
import UmbrellaIcon from "../../../../images/icons/umbrella.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import ArrowsIcon from "../../../../images/icons/limited-liability-company-or-llc.inline.svg";
import Button from "../../../molecules/buttons/button";
import OvalOrange2Svg from "../../../../images/ovals/top-left-transparent-orange.inline.svg";
import { shadow } from "../../../atoms/styles/shadows";
import { Link } from "gatsby";
import { HeadingP } from "../../../atoms/typography/heading-to-p";
import ArrowLink from "../../../../components/arrow-link";

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
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(254, 246, 237, 1) 100%
  );
  position: relative;

  @media (min-width: 769px) {
    padding-bottom: 100px;
  }
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

const AirBnB1BusinessStructure = () => (
  <OrangeContainer>
    <Oval>
      <OvalOrange2Svg />
    </Oval>
    {/*HEADINGS O.K*/}
    <BusinessOwnerResponsibilities>
      <ImageContent image="unique-business-2" paddingTop="60">
        <Heading
          size={2}
          template={4}
          left
          style={{ fontSize: "24px", "max-width": "unset" }}
        >
          Choose the Right Business Structure for Your Airbnb Business
        </Heading>
        <Paragraph big>
          Now that you have all the background information for your Airbnb
          business, it’s time to make it into a reality. That starts by choosing
          the right structure or “legal entity” for your business. In the US,
          there are five main business structures. They are:
        </Paragraph>

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
          <HeadingP
            size={3}
            big
            style={{ color: color.blue1, fontWeight: "bold" }}
            mixed={true}
          >
            Sole Proprietorship
          </HeadingP>

          <Paragraph big>
            This is the "default" business structure and is what your Airbnb
            business will be if you decide not to create a more formal
            structure. We don't recommend this type of business as it doesn't
            give you the legal protections you need.
          </Paragraph>
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
          <HeadingP
            size={3}
            big
            style={{ color: color.blue1, fontWeight: "bold" }}
            mixed={true}
          >
            <ArrowLink
                externalLink
                arrow={false}
                url={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}
            >
              Partnership
            </ArrowLink>
          </HeadingP>

          <Paragraph big>
            This is a type of business that is formed when two or more people
            work together without creating a more formal business entity. Like a
            sole proprietorship, it may not give you all the protections your
            Airbnb business may need.
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
          <HeadingP
            size={3}
            big
            style={{ color: color.blue1, fontWeight: "bold" }}
            mixed={true}
          >
            <ArrowLink
              externalLink
              arrow={false}
              url={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}
            >
              Limited Liability Company or LLC
            </ArrowLink>
          </HeadingP>

          <Paragraph big>
            The Limited Liability Company (LLC) is ideal for most Airbnb
            businesses. An LLC is easy and inexpensive to setup, and has the
            least administrative requirements of any formal business entity.
          </Paragraph>
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
          <HeadingP
            size={3}
            big
            style={{ color: color.blue1, fontWeight: "bold" }}
            mixed={true}
          >
            <ArrowLink
              externalLink
              arrow={false}
              url={
                process.env.ORDER_URL +
                "/form-order-now.php?entityType=SCorporation"
              }
            >
              S Corporation
            </ArrowLink>
          </HeadingP>

          <Paragraph big>
            This is a more complex type of business and isn't generally
            recommended for smaller organizations, like an Airbnb business.
          </Paragraph>
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
          <HeadingP
            size={3}
            big
            style={{ color: color.blue1, fontWeight: "bold" }}
            mixed={true}
          >
            <ArrowLink
              externalLink
              arrow={false}
              url={
                process.env.ORDER_URL +
                "/form-order-now.php?entityType=CCorporation"
              }
            >
              C Corporation
            </ArrowLink>
          </HeadingP>

          <Paragraph big>
            These are the largest and most complex types of businesses and are
            typically far more than the average entrepreneur or Airbnb business
            owner will need.
          </Paragraph>
        </TextBlockWithImage>

        <Paragraph
          big
          style={{ paddingTop: "48px", paddingBottom: 0 }}
          mixed={true}
        >
          For more information on the advantages and disadvantages of different
          types of businesses,{" "}
          <Link to="/business-entity-comparison/">
            please see our in-depth guide
          </Link>
          . If you’ve still got questions,{" "}
          <a
            href="https://grasshopper.com/blog/llc-vs-corporation-8-entrepreneur-questions-answered/"
            target="_blank"
            rel="noopener noreferrer"
          >
            we’ve answered them to help you choose the right business structure
          </a>{" "}
          for your Airbnb business.
        </Paragraph>
        <Paragraph
          big
          mixed={true}
          style={{ marginBottom: "48px", paddingBottom: 0 }}
        >
          In most cases, our recommendation for your daycare business would be
          to create an LLC. We’ve{" "}
          <Link to="/form-an-llc/">got a complete guide</Link> to everything you
          need to do.{" "}
          <Link to="/llc-state-information/">
            LLC formation does vary from state to state
          </Link>
          , but we’ve got you covered, wherever you are.
        </Paragraph>

        <Button
            externalLink
            theme="primary48"
            width="365px"
            arrow
            content={{
                url: `${process.env.ORDER_URL}/form-order-now.php`,
                text: "Start your business with us, today!",
            }}
        />
      </ImageContent>
    </BusinessOwnerResponsibilities>
  </OrangeContainer>
);

export default AirBnB1BusinessStructure;
