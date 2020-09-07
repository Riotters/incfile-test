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
import OvalSvg from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";
import {shadow} from "../../../atoms/styles/shadows";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  margin-top: 75px;
  padding-bottom: 64px;

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
  top: 0;
  width: 420px;
  display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`

const CoachBusinessStructure = () => (
    <OrangeContainer>

        <Oval>
            <OvalSvg/>
        </Oval>

        <Container>
            <BusinessOwnerResponsibilities>
                <ImageContent image="unique-business-green" paddingTop="60">
                    <Heading size={4} style={{fontSize: "24px"}}>
                        Choose the Right Business Structure and Register
                        Your Bookstore Business
                    </Heading>
                    <Paragraph big>
                        Now that you have all the background information for your bookstore, it’s time to make it into a
                        reality. That starts by choosing the right structure or “legal entity” for your business. In the
                        U.S., there are five main business structures. They are:
                    </Paragraph>

                    <TextBlockWithImage
                        SvgImage={HandsIcon}
                        textBackgroundColor="transparent"
                        imageBackgroundColor={color.white}
                        imageShadowColor={shadow.white2}
                        imageShadowOpacity={0.5}
                        boxShadow={false}
                        paddingLeft={0}
                        style={{marginTop: "70px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}}
                                   mixed={true}>
                            <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                <ArrowSVG/>
                            </IconCircle>
                            Sole Proprietorship
                        </Paragraph>

                        <Paragraph big>
                            If you don’t choose to form a legal business entity for your bookstore business, you will be
                            a sole proprietor by default. This won’t give you the legal protections you need, so we do
                            not recommend this.
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
                        style={{marginTop: "70px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}}
                                   mixed={true}>
                            <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                <ArrowSVG/>
                            </IconCircle>
                            Partnership
                        </Paragraph>

                        <Paragraph big>
                            Similar to a sole proprietorship, if you go into business with someone else without forming
                            a legal business entity, you will be treated
                            as a partnership. This doesn’t give you limited liability protections,
                            so we don’t recommend it for your bookstore business.
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
                        style={{marginTop: "70px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}}
                                   mixed={true}>
                            <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                <ArrowSVG/>
                            </IconCircle>
                            Limited Liability Company or LLC
                        </Paragraph>

                        <Paragraph big>
                            This is the most common type of business entity. An LLC is fast, simple and inexpensive to
                            set up and maintain. It protects your personal finances and assets and is a great way to
                            start your bookstore business.
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
                        style={{marginTop: "70px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}}
                                   mixed={true}>
                            <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                <ArrowSVG/>
                            </IconCircle>
                            S Corporation
                        </Paragraph>

                        <Paragraph big>
                            This is a more complex type of business that isn't generally recommended for smaller
                            organizations, though you might explore the benefits if your bookstore business grows.
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
                        style={{marginTop: "70px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}}
                                   mixed={true}>
                            <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                <ArrowSVG/>
                            </IconCircle>
                            C Corporation
                        </Paragraph>

                        <Paragraph big>
                            These are the largest and most complex types of businesses and are typically far more than
                            the average entrepreneur or bookstore owner
                            will need.
                        </Paragraph>
                    </TextBlockWithImage>

                    <Paragraph big style={{paddingTop: "120px"}} mixed={true}>
                        For more information on the advantages and disadvantages of different types of businesses,
                        please see our in-depth guide. If you’ve still got questions, we’ve answered them to help you
                        choose the right business structure for your bookstore business.
                    </Paragraph>
                    <Paragraph big mixed={true}>
                        In most cases, our recommendation for your bookstore business would
                        be to create an LLC. We’ve got a complete guide to everything you need to do. LLC formation does
                        vary from state to state, but we’ve got you covered, wherever you are.
                    </Paragraph>

                    <Button theme="primary48" width="365px" arrow>
                        Start your business with us, today!
                    </Button>
                </ImageContent>
            </BusinessOwnerResponsibilities>
        </Container>
    </OrangeContainer>
);

export default CoachBusinessStructure;
