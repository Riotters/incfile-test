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
import SeriesIcon from "../../../../images/icons/limited-liability-company.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import ArrowsIcon from "../../../../images/icons/arrows.inline.svg"
import Button from "../../../molecules/buttons/button";
import Container from "../../../container";
import OvalGreen3 from "../../../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import {shadow} from "../../../atoms/styles/shadows";
import {gradient} from "../../../atoms/styles/colors";
import {Link} from "gatsby";

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
    background-image: ${gradient.blue3};
    padding-bottom: 100px;
    position: relative;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 100px;
  width: 100%;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

const FlexLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const BusinessStructure = () => (
    <OrangeContainer>

        <Oval>
            <OvalGreen3/>
        </Oval>

        <Container>
            <BusinessOwnerResponsibilities>
                <ImageContent image="unique-business-green" paddingTop="60">
                    <Heading size={4} style={{fontSize: "24px"}}>
                        Choose the Right Business Structure and Register Your Internet Business
                    </Heading>
                    <Paragraph big>
                        Now that you have all the background information for your internet business, it’s time to make
                        it into a reality. That starts by choosing the right structure or “legal entity” for your
                        business. In the U.S., there are four main business structures. They are:
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
                        <Paragraph big style={{color: color.blue1, fontWeight: "bold"}} mixed={true}>
                            <FlexLink to="/">
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                Sole Proprietorship
                            </FlexLink>
                        </Paragraph>

                        <Paragraph big>
                            This is the "default" business structure and is what your business will be if you decide not
                            to create a more formal structure. We don't recommend this type of business as it doesn't
                            give you the legal protections you need.
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
                            The most common type of business entity. An LLC is fast, simple and inexpensive to setup and
                            maintain. It protects your personal finances and assets and is a great way to start your
                            online business
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
                        style={{marginTop: "70px"}}
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
                                Series LLC
                            </FlexLink>
                        </Paragraph>

                        <Paragraph big>
                            This is a special type of LLC entity that's only available in certain states.
                            It allows you to create "mini" LLCs, each with their own limited liability and separate
                            assets, under the umbrella of a master LLC.
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
                            organization.
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
                            These are the largest and most complex types of businesses and are far more than the average
                            entrepreneur or business owner will need.
                        </Paragraph>
                    </TextBlockWithImage>

                    <Paragraph big style={{paddingTop: "120px"}} mixed={true}>
                        For more information on the advantages and disadvantages of different types of businesses,
                        please <Link to="/">see our in-depth guide</Link>. If you’ve still got questions, <Link to="/">we’ve answered them to help you
                        choose the right business structure</Link>.
                    </Paragraph>
                    <Paragraph big mixed={true}>
                        In most cases, our recommendation for an online business would be to create an LLC. We’ve <Link to="/">got a
                        complete guide to everything you need
                        to do</Link>, and we can even set one up for your business. <Link to="/">LLC formation does vary from state to
                        state</Link>, but we’ve got you covered, wherever you are.
                    </Paragraph>

                    <Button theme="primary48" width="365px" arrow content={{url: "/", text: "Start your business with us, today!"}} />

                </ImageContent>
            </BusinessOwnerResponsibilities>
        </Container>
    </OrangeContainer>
);

export default BusinessStructure;
