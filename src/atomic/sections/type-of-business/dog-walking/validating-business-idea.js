import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import TalkIcon from "../../../../images/icons/talk-to-clients.inline.svg";
import IdetifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg"
import LookIcon from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import MarketIcon from "../../../../images/icons/understand-your-market.inline.svg"
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import OvalSvg2 from "../../../../images/ovals/top-right-transparent-yellow.inline.svg";
import Curve from "../../../atoms/shapes/curve";

const BlueContainerWrapper = styled.div`
    background: rgb(255,255,255);
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
    max-width: 750px;
    
    @media (min-width:750px) {
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
    max-width: 1000px;
    
    > div {
        margin-bottom: 70px;
    }
    
    @media (min-width: 1024px) {
        margin: 120px auto 0;
    }
`;

const OvalCenter = styled.div`
  position: absolute;
  left: 0;
  top: 120px;
  width: 100%;
  
  @media (min-width: 420px){
    width: 420px;
  }
`

const OvalCenter2 = styled.div`
  position: absolute;
  right: 0;
  bottom: 392px;
  width: 100%;
  transform: scaleY(-1);
  
  @media (min-width: 420px){
    width: 420px;
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
            <OvalSvg/>
        </OvalCenter>
        <OvalCenter2>
            <OvalSvg2/>
        </OvalCenter2>

        <Container>

            <GridSection>
                <TitleBox>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <Heading size={3}>Validating Your Dog Walking or Pet Sitting Business Idea</Heading>
                    <Paragraph big>
                        These are all great starting points, but you will need to build on them to make the business
                        your own. You have unique skills and insight that you can use to create
                        a dog walking or pet sitting business that will really stand out.
                    </Paragraph>
                    <Paragraph big>
                        You should already know the type of dog business that you’re best suited to.
                        A combination of your canine and business skills, experience and expertise will steer you in the
                        right direction.
                    </Paragraph>
                    <Paragraph big style={{fontWeight: "bold"}}>
                        Whatever dog-related business you choose, it’s likely that you will have several competitors in
                        your area.
                    </Paragraph>
                    <Paragraph big>
                        To stand out, you will need to build up a good track record and deliver superior canine
                        services.
                    </Paragraph>
                    <Paragraph big>
                        Not every idea you have will make it through to becoming a dog walking or pet sitting business.
                        There are all sorts of reasons to say “yes” or “no” to specific approaches, so think about what
                        your strengths and weaknesses are so you can choose a dog-related business you’d be great at.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>

                    <TextBlockWithImage className="containerMargin" SvgImage={IdetifyIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Identify your dog walking or pet sitting business’ unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Think about what you’re offering and how you make
                            it unique. Perhaps you specialize in certain types
                            of dogs, dogs that are behaviorally-challenged or dogs that really need to lose weight. Whatever area you decide on, work out how this sets you apart with doggy parents.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage className="containerMargin" SvgImage={LookIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.red2}>
                        <Heading size={4}>
                            Look at who your competitors are in the space band
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Dog-related businesses are extremely local, so it’s important to know who is offering similar services in the same geographic area. Once you know who your competitors are, see how you can further specialize your services and make them unique.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage className="containerMargin" SvgImage={MarketIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Understand your market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Clearly identify who your dog-parent customers are likely to be and exactly what they need. You will need to understand the best channels to reach them and the dog-related services that will appeal the most.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage className="containerMargin" SvgImage={TalkIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your dog business, and validate this by asking if they would commit to spending real money on them.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
            </GridSection>

        </Container>
    </BlueContainerWrapper>
);

export default ValidatingBusinessIdea;
