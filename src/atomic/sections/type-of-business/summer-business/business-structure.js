import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import { color } from "../../../../components/styles/colors";
import ArrowsIcon from "../../../../images/icons/arrows.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import PlaneIcon from "../../../../images/icons/plane.inline.svg";
import RockerIcon from "../../../../images/icons/rocket.inline.svg";
import UmbrellaIcon from "../../../../images/icons/umbrella.inline.svg";
import OvalGreen3 from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import { shadow } from "../../../atoms/styles/shadows";
import { Heading } from "../../../atoms/typography/heading";
import { HeadingP } from "../../../atoms/typography/heading-to-p";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Button from "../../../molecules/buttons/button";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
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
  padding-bottom: 100px;
  position: relative;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 200px;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const BusinessStructure = () => (
    <OrangeContainer>
        <Oval>
            <OvalGreen3 />
        </Oval>

        <BusinessOwnerResponsibilities>
            <ImageContent image="unique-business-green" imageAlt="choose right summer business" paddingTop="60">
                <Heading size={2} template={3} left>
                    Choose the Right Business Structure and Register Your Summer Business
        </Heading>
                <Paragraph big>
                    There are five main business structures you can have in the U.S., and
                    it’s important to choose the right one. We’ve shared your options
                    below. They are:
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
                        This is the "default" business structure and is what your summer
                        business will be if you decide not to create a more formal
                        structure. Although you could use this for a tiny summer business,
                        we don't recommend it as it doesn't give you the legal protections
                        you need.
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
                            Partnership Company or LLC
            </ArrowLink>
                    </HeadingP>

                    <Paragraph big>
                        This is a type of business that is formed when two or more people
                        work together without creating a more formal business entity. Like a
                        sole proprietorship, it may not give you all the protections your
                        summer business may need.
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
                        The most common type of business entity, an LLC is fast, simple and
                        inexpensive to set up and maintain. It protects your personal
                        finances and assets and is a great way to start your summer
                        business.
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
                        recommended for smaller organizations, like a summer business.
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
                        typically far more than the average entrepreneur or summer business
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
          for your summer business.
        </Paragraph>
                <Paragraph
                    big
                    style={{ paddingTop: "48px", paddingBottom: 0 }}
                    mixed={true}
                >
                    In most cases, our recommendation for a summer business would be to
          create an LLC. We’ve{" "}
                    <Link to="/form-an-llc/">got a complete guide</Link> to everything you
          need to do, and we can even set one up for your business.{" "}
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
                        text: `Start your business with us, today!`,
                    }}
                />
            </ImageContent>
        </BusinessOwnerResponsibilities>
    </OrangeContainer>
);

export default BusinessStructure;
