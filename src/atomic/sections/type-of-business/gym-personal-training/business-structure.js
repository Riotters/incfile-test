import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import React from "react";
import styled from "styled-components";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import {color} from "../../../../components/styles/colors";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import ArrowSVG from "../../../../images/arrow.inline.svg";
import IconCircle from "../../../../components/icons/circle";
import PlaneIcon from "../../../../images/icons/plane.inline.svg";
import RockerIcon from "../../../../images/icons/rocket.inline.svg";
import UmbrellaIcon from "../../../../images/icons/umbrella.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import ArrowsIcon from "../../../../images/icons/arrows.inline.svg"
import Button from "../../../molecules/buttons/button";
import Container from "../../../container";
import OvalSvg from "../../../../images/ovals/top-left-transparent-green3.inline.svg";
import {shadow} from "../../../atoms/styles/shadows";
import {Link} from "gatsby";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 100px;

  .colorbox {
    margin-bottom: 48px;
  }
`;

const OrangeContainer = styled.div`
    background: rgb(255,255,255);
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
`

const BusinessStructure = () => (
    <OrangeContainer>

        <Oval>
            <OvalSvg/>
        </Oval>

        <Container>
            <BusinessOwnerResponsibilities>
                <ImageContent image="unique-business-green" paddingTop="60">
                    <Heading size={4} style={{fontSize: "24px"}}>
                        Choose the Right Business Structure and Register Your Travel Agency
                    </Heading>
                    <Paragraph big>
                        There are five main business structures you can have in the U.S., and it’s important to choose
                        the right one. We’ve shared your options below.
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
                        style={{marginTop: "40px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big style={{color: color.blue1, fontWeight: "bold"}} mixed={true}>
                            <FlexLink to="/">
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                Sole Proprietorship
                            </FlexLink>
                        </Paragraph>

                        <Paragraph big>
                            If you don’t choose to form a legal business entity for your gym, fitness
                            or personal training business, you will be a sole proprietor by default.
                            This won’t give you the legal protections you need, so we do not recommend this.
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
                        style={{marginTop: "40px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big style={{color: color.blue1, fontWeight: "bold"}}
                                   mixed={true}>
                            <FlexLink to="/">
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                Partnership
                            </FlexLink>
                        </Paragraph>

                        <Paragraph big>
                            Similar to a sole proprietorship, if you go into business with someone
                            else without forming a legal business entity, you will be treated
                            as a partnership. This doesn’t give you limited liability protection,
                            so we don’t recommend it for your gym or personal training business.
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
                        style={{marginTop: "40px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big style={{color: color.blue1, fontWeight: "bold"}}
                                   mixed={true}>
                            <FlexLink to="/">
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                Limited Liability Company or LLC
                            </FlexLink>
                        </Paragraph>

                        <Paragraph big>
                            As the most common type of business entity, an LLC is fast, simple and inexpensive to set up
                            and maintain. It protects your personal finances and assets and is a great way to start your
                            personal training or gym business.
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
                        style={{marginTop: "40px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big style={{color: color.blue1, fontWeight: "bold"}}
                                   mixed={true}>
                            <FlexLink to="/">
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                S Corporation
                            </FlexLink>
                        </Paragraph>

                        <Paragraph big>
                            This is a more complex type of business and isn't generally recommended for smaller
                            organizations.
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
                        style={{marginTop: "40px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big style={{color: color.blue1, fontWeight: "bold"}}
                                   mixed={true}>
                            <FlexLink to="/">
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                C Corporation
                            </FlexLink>
                        </Paragraph>

                        <Paragraph big>
                            These are the largest and most complex types of businesses and are typically far more than
                            the average fitness entrepreneur will need.
                        </Paragraph>
                    </TextBlockWithImage>

                    <Paragraph big mixed={true} style={{marginBottom: "48px", paddingBottom: 0}}>
                        For more information on the advantages and disadvantages of different types of businesses, <Link
                        to="/">please see our in-depth guide</Link>. If you’ve still got questions, <Link
                        to="/">we’ve answered them to help you choose the right business structure</Link> for
                        your gym, fitness or personal training business.
                    </Paragraph>
                    <Paragraph big mixed={true} style={{marginBottom: "48px", paddingBottom: 0}}>
                        In most cases, our recommendation for a gym, fitness or personal training business would
                        be to create an LLC. We’ve <Link to="/">got a complete guide</Link> to everything
                        you need to do. <Link to="/">LLC formation does vary from state to state</Link>,
                        but we’ve got you covered, wherever you are.
                    </Paragraph>

                    <Button theme="primary48" width="365px" arrow content={{url: "/", text: "Start your business with us, today!"}} />

                </ImageContent>
            </BusinessOwnerResponsibilities>
        </Container>
    </OrangeContainer>
);

const FlexLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export default BusinessStructure;
