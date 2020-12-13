import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import IdentifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg";
import LookIcon from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg";
import MarketIcon from "../../../../images/icons/understand-your-market.inline.svg";
import TalkIcon from "../../../../images/icons/talk-to-clients.inline.svg";
import InvolvedIcon from "../../../../images/icons/get-involved-with-business-communities.inline.svg";
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalBlueSVG from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";
import Curve from "../../../atoms/shapes/curve";

const BlueContainerWrapper = styled.div`
    background: rgb(242,246,255);
    background: linear-gradient(0deg, rgba(242,246,255,1) 0%, rgba(250,251,255,1) 100%);
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
    
    h2{
        color: #1d1d1d;
        font-size: 40px;
        text-align: left;
        margin-bottom: 24px;
    }
`;

const GridSectionList = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 70px;
    margin-top: 76px;
    margin-bottom: 76px;; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  
  @media (min-width: 570px){
    width: 570px;
  }
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
            <OvalBlueSVG/>
        </OvalCenter>

        <Container>

            <GridSection>
                <TitleBox>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <Heading size={2} left>Validating Your Moving Business Idea</Heading>
                    <Paragraph>
                        These are all great starting points, but you will need to build on them to make your relocation business your own. You have unique skills and insight that you can use to create a moving business that will really stand out.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>
                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={IdentifyIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={3} template={4}>
                            Identify your moving business’ unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You will want to sell the benefits of your relocation services to your customers. It’s important to identify what you do well and use this as the basis for your offerings. Consider the range of moving services you offer, your track record, the skills of your employees or anything else that sets you apart.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={LookIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={3} template={4}>
                            Look at who your competitors are in
                            the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Having competitors is a good thing as it shows there’s a market — but if there are too many, you’re likely to struggle without a really good unique selling point. Bear in mind how likely people are to move to or from your local area and compare this to the number of existing moving businesses to start understanding the potential market size.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={MarketIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={3} template={4}>
                            Understand your market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Clearly identify exactly who your relocation customers are likely to be, where they hang out and how you’re going to reach them. This will be essential to your marketing, communications, sales and customer support.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={TalkIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={3} template={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your relocation services, and validate this by asking if they would commit to spending real money on them. Ask them to get into the details, so you can tailor your moving offerings.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={InvolvedIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={3} template={4}>
                            Get involved with business communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            One of the great things about moving business is that there are some good discussion groups. Get involved in them and learn the ins and outs of your chosen market before committing.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
            </GridSection>

            <TitleBox>
                <Paragraph big>
                    Not every idea you have will make it through to becoming a moving business. There are all sorts of reasons to say “yes” or “no” to specific businesses, so think about what your strengths and weaknesses are so you can choose a type of relocation business you’d be great at.
                </Paragraph>
            </TitleBox>

        </Container>
    </BlueContainerWrapper>
);

export default ValidatingBusinessIdea;
