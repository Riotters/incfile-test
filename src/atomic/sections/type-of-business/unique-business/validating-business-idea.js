import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import OkIcon from "../../../../images/icons/ok.inline.svg";
import IdetifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg"
import LookIcon from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import MarketIcon from "../../../../images/icons/understand-your-market.inline.svg"
import {color, gradient} from "../../../atoms/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import Curve from "../../../atoms/shapes/curve";
import InvolvedIcon from "../../../../images/icons/get-involved-with-business-communities.inline.svg";
import Colorbox from "../../../../components/color-box";

const BlueContainerWrapper = styled.div`
    background-image: ${gradient.orange3};
    padding-bottom: 100px;
    position: relative;
    padding-top: 120px;
`;


const GridSection = styled.div`
    width: 100%;
`;

const TitleBox = styled.div`
    width: 100%;
    position: relative;
     
    @media (min-width:750px) {
        width: 750px;
        margin: 0 auto;
    }
    
    h3{
        color: #1d1d1d;
        font-size: 40px;
        text-align: left;
        margin-bottom: 24px;
    }
`;

const GridSectionList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    
    > div {
        margin-bottom: 70px;
    }
    
    @media (min-width: 970px) {
        width: 970px;
        margin: 120px auto 0;
    }
`;

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  width: 720px;
  
  svg {
    transform: scaleX(-1);
  }
`

const OvalBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 80px;
  width: 570px;
`

const AbsoluteCurve = styled.div`
    position: absolute;
    left: -27px;
    top: -16px;
    transform: rotate(-90deg);
`;

const ValidatingBusinessIdea = () => (
    <BlueContainerWrapper>
        <OvalCenter>
            <OvalSVG/>
        </OvalCenter>

        <OvalBottom>
            <OvalSVG/>
        </OvalBottom>

        <Container>

            <GridSection>
                <TitleBox>

                    <Heading size={3}>Unique Small Business Ideas — Finding the Right Type of Business</Heading>
                    <Paragraph big>
                        Remember, the ideas you’ve created are just a starting point. You will need to define and tweak
                        exactly what type of unique business you want to run by conducting your own research.
                    </Paragraph>

                    <Colorbox theme="icon" curve curveColor={color.orange1} color={color.orange3}>
                        <Paragraph style={{fontWeight: "bold", fontSize: "20px"}} >
                            And don’t assume that just because you have a great idea, it will be easy to turn that into revenue.
                        </Paragraph>
                        <Paragraph bottomMargin={0}>
                            You still need to stand out, deliver superior products and services and excel in your chosen area.
                        </Paragraph>
                    </Colorbox>

                    <Paragraph big style={{marginTop: "48px"}}>
                        The thing to learn here is that it’s okay to say “no” to your first, second or third unique
                        business idea. Very few entrepreneurs get it right the first time. In fact, getting it wrong is
                        often a badge of honor! Still, you don’t want to waste too much time, energy or money on the
                        wrong initiatives, so ask and answer these questions honestly to find the right way forward.
                    </Paragraph>
                    <Paragraph big>
                        Getting started in business is easy, but becoming a success is harder. Before committing too
                        much time, energy and money into your new unique business,
                        it’s important to test the marketplace. Here's how:
                    </Paragraph>
                </TitleBox>

                <GridSectionList>

                    <TextBlockWithImage SvgImage={IdetifyIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Identify your unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Certainly, a unique business idea is a great starting point, but you should build on that by providing uniquely valuable features, price, quality, speed
                            or something else. This will help you to set yourself apart from others and encourage customers to come to you.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={MarketIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.red2}>
                        <Heading size={4}>
                            Understand your market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Clearly identify exactly who your customers are likely to be, where they hang out and how you’re going
                            to reach them. This will be essential to your marketing, communications, sales and customer support. Because of the niche you’ve chosen,
                            it should be easier to find out the type of people who would buy your products and services.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={OkIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your unique products and services, and validate this by asking if they would commit
                            to spending real money on it.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={InvolvedIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Get involved with food truck communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            One of the great things about unique businesses
                            is that there are plenty of great communities and discussion groups out there for various industries.
                            Get involved in them and learn the ins and outs
                            of your chosen market before committing.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
            </GridSection>

        </Container>
    </BlueContainerWrapper>
);

export default ValidatingBusinessIdea;
