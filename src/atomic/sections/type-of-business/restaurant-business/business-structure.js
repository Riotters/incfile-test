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
import SeriesIcon from "../../../../images/icons/limited-liability-company-2.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import ArrowsIcon from "../../../../images/icons/arrows.inline.svg"
import Button from "../../../molecules/buttons/button";
import Container from "../../../container";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import {shadow} from "../../../atoms/styles/shadows";
import {gradient} from "../../../atoms/styles/colors";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
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
  top: 100px;
  width: 420px;
`

const BusinessStructure = () => (
    <OrangeContainer>

        <Oval>
            <OvalSvg />
        </Oval>

        <Container>
            <BusinessOwnerResponsibilities>
                <ImageContent image="unique-business-green" paddingTop="60">
                    <Heading size={4} style={{fontSize: "24px"}}>
                        Choose the Right Business Structure and Register
                        Your Restaurant Business
                    </Heading>
                    <Paragraph big>
                        Now that you have all the background information for your restaurant business, it’s time to make it into a reality. That starts by choosing the right structure or “legal entity” for your business. In the U.S., there are four main business structures. They are:
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
                        <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}} mixed={true}>
                            <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                <ArrowSVG/>
                            </IconCircle>
                            Sole Proprietorship
                        </Paragraph>

                        <Paragraph big>
                            This is the "default" business structure and is what your business will
                            be if you decide not to create a more formal structure. We don't recommend this type of business as it doesn't give you the legal protections you need.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage
                        SvgImage={ArrowsIcon}
                        textBackgroundColor="transparent"
                        imageBackgroundColor={color.white}
                        imageShadowColor="#ababab"
                        imageShadowOpacity={0.5}
                        boxShadow={false}
                        paddingLeft={0}
                        style={{marginTop: "70px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}} mixed={true}>
                            <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                <ArrowSVG/>
                            </IconCircle>
                            Limited Liability Company or LLC
                        </Paragraph>

                        <Paragraph big>
                            The most common type of business entity. An LLC is fast, simple and inexpensive to setup and maintain. It protects your personal finances and assets and is a great way to start your real estate
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage
                        SvgImage={SeriesIcon}
                        textBackgroundColor="transparent"
                        imageBackgroundColor={color.white}
                        imageShadowColor="#ababab"
                        imageShadowOpacity={0.5}
                        boxShadow={false}
                        paddingLeft={0}
                        style={{marginTop: "70px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}} mixed={true}>
                            <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                <ArrowSVG/>
                            </IconCircle>
                            Series LLC
                        </Paragraph>

                        <Paragraph big>
                            This is a special type of LLC entity that's only available in certain states.
                            It allows you to create "mini" LLCs, each with their own limited liability and separate assets, under the umbrella of a master LLC.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage
                        SvgImage={PlaneIcon}
                        textBackgroundColor="transparent"
                        imageBackgroundColor={color.white}
                        imageShadowColor="#ababab"
                        imageShadowOpacity={0.5}
                        boxShadow={false}
                        paddingLeft={0}
                        style={{marginTop: "70px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}} mixed={true}>
                            <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                <ArrowSVG/>
                            </IconCircle>
                            S Corporation
                        </Paragraph>

                        <Paragraph big>
                            This is a more complex type of business and isn't generally recommended for smaller organization.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage
                        SvgImage={RockerIcon}
                        textBackgroundColor="transparent"
                        imageBackgroundColor={color.white}
                        imageShadowColor="#ababab"
                        imageShadowOpacity={0.5}
                        boxShadow={false}
                        paddingLeft={0}
                        style={{marginTop: "70px"}}
                        circleShadowY={40}
                        circleShadowBlure={80}
                        width={100}
                        widthUnit="%"
                    >
                        <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}} mixed={true}>
                            <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                <ArrowSVG/>
                            </IconCircle>
                            C Corporation
                        </Paragraph>

                        <Paragraph big>
                            These are the largest and mostcomplex types of businessesand are far more than the average entrepreneur or business owner will need.
                        </Paragraph>
                    </TextBlockWithImage>

                    <Paragraph big style={{paddingTop: "120px"}} mixed={true}>
                        For more information on the advantages and disadvantages of different types of businesses, please see our in-depth guide. If you’ve still got questions, we’ve answered them to help you choose the right business structure.
                    </Paragraph>
                    <Paragraph big mixed={true}>
                        In almost every case, the right business entity for a restaurant is going
                        to be an LLC. It provides you with liability protection, is easy to set up and run, has low administrative overhead and can be tax advantageous. We’ve got a complete guide to everything you need to do here, and we can even set up an LLC for your restaurant business. LLC formation does vary from state to state, but we’ve got you covered, wherever you are.
                    </Paragraph>

                    <Button theme="primary48" width="365px" arrow>
                        Start your business with us, today!
                    </Button>
                </ImageContent>
            </BusinessOwnerResponsibilities>
        </Container>
    </OrangeContainer>
);

export default BusinessStructure;
