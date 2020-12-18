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
import SeriesIcon from "../../../../images/icons/limited-liability-company-2.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import ArrowsIcon from "../../../../images/icons/arrows.inline.svg";
import Button from "../../../molecules/buttons/button";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import { shadow } from "../../../atoms/styles/shadows";
import { Link } from "gatsby";
import { HeadingP } from "../../../atoms/typography/heading-to-p";

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
  padding-bottom: 100px;
  position: relative;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 50%,
    #f2f8f3
  );
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

const BusinessStructure = () => (
  <OrangeContainer>
    <Oval>
      <OvalSvg />
    </Oval>

    <BusinessOwnerResponsibilities>
      <ImageContent image="unique-business-green" paddingTop="60">
        <Heading size={2} template={3} left>
          Choose the Right Business Structure and Register Your Franchise
          Business
        </Heading>
        <Paragraph big>
          Now you have all the background information for your franchise
          business, it’s time to make it into a reality. That starts by choosing
          the right structure or “legal entity” for your business. In the U.S.,
          there are four main business structures. They are:
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
          <Paragraph
            big
            style={{ color: color.blue1, fontWeight: "bold" }}
            mixed={true}
          >
            Sole Proprietorship
          </Paragraph>

          <Paragraph big>
            This is the "default" business structure and is what your business
            will be if you decide not to create a more formal structure. We
            don't recommend this type of business as it doesn't give you the
            legal protections you need.
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
            <Link
              to={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}
            >
              Limited Liability Company or LLC
            </Link>
          </HeadingP>

          <Paragraph big>
            The most common type of business entity. An LLC is fast, simple and
            inexpensive to setup and maintain. It protects your personal
            finances and assets and is a great way to start your franchise
            business.
          </Paragraph>
        </TextBlockWithImage>

        <TextBlockWithImage
          SvgImage={SeriesIcon}
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
          <Paragraph
            big
            style={{ color: color.blue1, fontWeight: "bold" }}
            mixed={true}
          >
            <Link
              to={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}
            >
              Series LLC
            </Link>
          </Paragraph>

          <Paragraph big>
            This is a special type of LLC entity that's only available in
            certain states. It allows you to create "mini" LLCs, each with their
            own limited liability and separate assets, under the umbrella of a
            master LLC.
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
            <Link
              to={
                process.env.ORDER_URL +
                "/form-order-now.php?entityType=SCorporation"
              }
            >
              S Corporation
            </Link>
          </HeadingP>

          <Paragraph big>
            This is a more complex type of business and isn't generally
            recommended for smaller organization.
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
            <Link
              to={
                process.env.ORDER_URL +
                "/form-order-now.php?entityType=CCorporation"
              }
            >
              C Corporation
            </Link>
          </HeadingP>

          <Paragraph big>
            These are the largest and most complex types of businesses and are
            far more than the average entrepreneur or business owner will need.
          </Paragraph>
        </TextBlockWithImage>

        <Paragraph
          big
          style={{ paddingTop: "48px", paddingBottom: 0 }}
          mixed={true}
        >
          For more information on the advantages and disadvantages of different
          types of businesses, please{" "}
          <Link to="/business-entity-comparison/">see our in-depth guide</Link>.
          If you’ve still got questions,{" "}
          <Link to="https://grasshopper.com/blog/llc-vs-corporation-8-entrepreneur-questions-answered/">
            we’ve answered them to help you choose the right business structure
          </Link>
          .
        </Paragraph>
        <Paragraph
          big
          style={{ paddingTop: "48px", paddingBottom: 0 }}
          mixed={true}
        >
          In most cases our recommendation would be to create an LLC. We’ve{" "}
          <Link to="/form-an-llc/">
            got a complete guide to everything you need to do
          </Link>
          , and we can even set one up for your franchise business.{" "}
          <Link to="/llc-state-information/">
            LLC formation does vary from state to state
          </Link>
          , but we’ve got you covered wherever you are.
        </Paragraph>
        <Paragraph
          big
          style={{ paddingTop: "48px", paddingBottom: 0 }}
          mixed={true}
        >
          Most franchisors will insist that you have a proper legal structure
          around your business entity, and most will expect to see that you have
          formed an LLC. Their formal agreement will likely be with your
          business rather than with you personally.
        </Paragraph>

        <Button
          theme="primary48"
          width="365px"
          arrow
          content={{
            url: `${process.env.ORDER_URL}/form-order-now.php`,
            text: `Start your business with us, today!`,
          }}
        />
      </ImageContent>
    </BusinessOwnerResponsibilities>
  </OrangeContainer>
);

export default BusinessStructure;
