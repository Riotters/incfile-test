import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { color } from "../../../../components/styles/colors";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import ArrowSVG from "../../../../images/arrow.inline.svg";
import IconCircle from "../../../../components/icons/circle";
import PlaneIcon from "../../../../images/icons/plane.inline.svg";
import RockerIcon from "../../../../images/icons/rocket.inline.svg";
import UmbrellaIcon from "../../../../images/icons/umbrella.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import ArrowsIcon from "../../../../images/icons/arrows.inline.svg";
import Button from "../../../molecules/buttons/button";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import { shadow } from "../../../atoms/styles/shadows";
import { Link } from "gatsby";
import { gradient } from "../../../atoms/styles/colors";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 100px;

  .colorbox {
    margin-bottom: 48px;
  }
`;

const OrangeContainer = styled.div`
  background-image: ${gradient.blue3};
  padding-bottom: 100px;
  position: relative;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 100px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const BusinessStructure = () => (
  <OrangeContainer>
    <Oval>
      <OvalSvg />
    </Oval>

    <BusinessOwnerResponsibilities>
      <ImageContent image="unique-business-green" paddingTop="60">
        <Heading size={2} template={3} left>
          Choose the Right Business Structure and Register Your Home-Based Business
        </Heading>
        <Paragraph big>Now that you have all the background information for your home-based business, it’s time to make it into a reality. That starts by choosing the right structure or “legal entity” for your business. In the U.S., there are five main business structures. They are:</Paragraph>

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
            Sole Proprietorship
          </Paragraph>

          <Paragraph big>This is the "default" business structure and is what your home-based business will be if you decide not to create a more formal structure. We don't recommend this type of business as it doesn't give you the legal protections you need.</Paragraph>
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
              <Link to={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}>Partnership</Link>
            </Paragraph>

          <Paragraph big>This is a type of business that is formed when two or more people work together without creating a formal business entity. Like a sole proprietorship, it may not give you all the protections your home-based business may need.</Paragraph>
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
              <Link to={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}>Limited Liability Company or LLC</Link>
            </Paragraph>

          <Paragraph big>The most common type of business entity. An LLC is fast, simple and inexpensive to set up and maintain. It protects your personal finances and assets and is a great way to start your home-based business.</Paragraph>
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
              <Link to={process.env.ORDER_URL + "/form-order-now.php?entityType=S-Corporation"}>S Corporation</Link>
            </Paragraph>

          <Paragraph big>This is a more complex type of business and isn't generally recommended for smaller organizations, like a home-based business.</Paragraph>
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
              <Link to={process.env.ORDER_URL + "/form-order-now.php?entityType=C-Corporation"}>C Corporation</Link>
            </Paragraph>

          <Paragraph big>These are the largest and most complex types of businesses and are typically far more than the average entrepreneur or home-based business owner will need.</Paragraph>
        </TextBlockWithImage>

        <Paragraph big mixed={true} style={{ marginBottom: "48px", paddingBottom: 0 }}>
          For more information on the advantages and disadvantages of different types of businesses, <Link to="/business-entity-comparison/">please see our in-depth guide</Link>. If you've still got questions,{" "}
          <Link to="https://grasshopper.com/blog/llc-vs-corporation-8-entrepreneur-questions-answered/">we've answered them to help you choose the right business structure</Link>.
        </Paragraph>
        <Paragraph big mixed={true} style={{ marginBottom: "48px", paddingBottom: 0 }}>
          In most cases our recommendation would be to create an LLC, We've
          <Link to="/form-an-llc/">got a complete guide to everything you need to do</Link> and we can set one up for your Home-Based business. <Link to="/llc-state-information/">LLC formation dose vary from state to state</Link>, but we've got you covered, wherever you are.
        </Paragraph>

        <Button theme="primary48" width="365px" arrow content={{ url: `${process.env.ORDER_URL}/form-order-now.php`, text: `Start your business with us, today!` }} />
      </ImageContent>
    </BusinessOwnerResponsibilities>
  </OrangeContainer>
);

export default BusinessStructure;
