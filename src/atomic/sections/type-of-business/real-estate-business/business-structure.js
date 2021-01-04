import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { color } from "../../../../components/styles/colors";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import LLCSVG from "../../../../images/icons/limited-liability-company-or-llc.inline.svg";
import LimitedIcon from "../../../../images/icons/limited-liability-company.inline.svg";
import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import PlaneIcon from "../../../../images/icons/plane.inline.svg";
import RockerIcon from "../../../../images/icons/rocket.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import Button from "../../../molecules/buttons/button";
import OvalSvg from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";
import { shadow } from "../../../atoms/styles/shadows";
import { gradient } from "../../../atoms/styles/colors";
import Colorbox from "../../../../components/color-box";
import { HeadingP } from "../../../atoms/typography/heading-to-p";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 32px;
  padding-bottom: 32px;

  @media (min-width: 992px) {
    padding-top: 104px;
    padding-bottom: 104px;
  }

  .colorbox {
    margin-bottom: 48px;
  }
`;

const OrangeContainer = styled.div`
  background: ${gradient.orange3};
  padding-bottom: 32px;
  position: relative;

  @media (min-width: 992px) {
    padding-bottom: 104px;
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

const BusinessStructure = () => (
  <OrangeContainer>
    <Oval>
      <OvalSvg />
    </Oval>

    <BusinessOwnerResponsibilities>
      <ImageContent image="unique-business-green" paddingTop="60">
        <Heading size={2} template={3} left>
          Formally Registering Your Real Estate Investment Business
        </Heading>
        <Paragraph big>
          Now that you have all the background information for your real estate
          business, it's time to choose the right structure or "legal entity"
          for your business. In the U.S., there are several business structures.
          They are:
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
            This is the "default" business structure and is what your business
            will be if you decide not to create a more formal structure. We
            don't recommend this type of business as it doesn't give you the
            legal protections you need.
          </Paragraph>
        </TextBlockWithImage>

        <TextBlockWithImage
          SvgImage={LLCSVG}
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
            finances and assets and is a great way to start your real estate.
          </Paragraph>
        </TextBlockWithImage>

        <TextBlockWithImage
          SvgImage={LimitedIcon}
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

        <Heading size={3}>A Special Note on Series LLCs</Heading>

        <Paragraph big>
          Series LLCs are ideal for real estate investors. A series LLC gives
          you all the same benefits as a regular LLC, but it serves as a sort of
          “umbrella company” with additional flexibility and protections for
          multiple companies or lines of business within your overall operation.
          For instance, a series LLC can give rental property owners a way to
          separate their real estate investments from one another.
        </Paragraph>
        <Paragraph big>
          Even though series LLCs were created to simplify investment portfolio
          management, this type of business structure is still a relatively new
          approach to LLCs. In addition, series LLCs are currently only
          available in eight states:
        </Paragraph>

        <Colorbox curve color={color.blue3}>
          <ul className="display-list">
            <li>Delaware</li>
            <li>Illinois</li>
            <li>Iowa</li>
            <li>Nevada</li>
            <li>Oklahoma</li>
            <li>Tennessee</li>
            <li>Texas</li>
            <li>Utah</li>
          </ul>
        </Colorbox>

        <Paragraph
          big
          mixed={true}
          style={{ marginTop: "48px", marginBottom: "72px" }}
        >
          If you’re in one of these states,{" "}
          <Link to="https://www.incfile.com/blog/post/series-llc-why-need-one/">
            see if a series LLC could be right for you.
          </Link>
        </Paragraph>

        <Heading size={3} style={{ maxWidth: "100%" }}>
          Special Considerations for Setting up a Real Estate Business Entity
        </Heading>

        <Paragraph big bottomMargin={0} style={{ paddingBottom: 0 }}>
          As a real estate investment entrepreneur, the standard or series LLC
          is very likely the best option for you. They do not have a lot of
          administrative overhead and still provide you with good liability
          protection.
        </Paragraph>

        <Paragraph
          big
          style={{ paddingTop: "120px", paddingBottom: 0 }}
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
          for your real estate business.
        </Paragraph>
        <Paragraph
          big
          style={{ paddingTop: "48px", paddingBottom: 0 }}
          mixed={true}
        >
          In most cases our recommendation would be to create an LLC. We have a{" "}
          <Link to="/form-an-llc/">
            complete guide to everything you need to do
          </Link>
          , and we can set one up for your real estate business.{" "}
          <Link to="/llc-state-information/">
            LLC formation does vary from state to state
          </Link>
          , but we’ve got you covered, wherever you are.
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
