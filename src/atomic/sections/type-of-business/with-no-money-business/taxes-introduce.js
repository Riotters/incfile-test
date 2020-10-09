import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import Icon1 from "../../../../images/icons/with-no-money-icon1.inline.svg";
import Icon2 from "../../../../images/icons/with-no-money-icon2.inline.svg";
import Icon3 from "../../../../images/icons/with-no-money-icon3.inline.svg";
import Icon4 from "../../../../images/icons/with-no-money-icon4.inline.svg";
import Icon5 from "../../../../images/icons/with-no-money-icon5.inline.svg";
import Icon6 from "../../../../images/icons/with-no-money-icon6.inline.svg";
import Icon7 from "../../../../images/icons/with-no-money-icon7.inline.svg";
import Icon8 from "../../../../images/icons/with-no-money-icon8.inline.svg";

import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-green2.inline.svg";
import {gradient} from "../../../atoms/styles/colors";

const ContainerWrapper = styled.div`
    background: rgb(255,255,255);
    background-image: ${gradient.green3};
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
    text-align: center;
     max-width: 750px;
     
    @media (min-width:750px) {
        
        margin: 0 auto;
    }
    
    h3{
        color: #1d1d1d;
        font-size: 40px;
        text-align: center;
        margin: 0 auto 24px;
    }
`;

const GridSectionList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    max-width: 970px;
    > div {
        margin-bottom: 70px;
    }
    
    @media (min-width: 970px) {
        
        margin: 120px auto 0;
    }
`;

const TextBorderedSection = styled.div`
    width: 100%;
    padding-top: 100px;
    max-width: 670px;
    
    @media (min-width: 670px) {
        
        margin: 0 auto;
    }
    
    h3{
        color: #1d1d1d;
        font-size: 40px;
        text-align: center;
        margin-bottom: 24px;
    }
`;

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  top: 730px;
  width: 100%;
  transform: scaleX(-1);
  opacity: 0.5;
  
  @media (min-width: 570px) {
    width: 570px;
  }
`

const AbsoluteCurve = styled.div`
    position: absolute;
    left: -27px;
    top: -16px;
    transform: rotate(-90deg);
`;

const TaxesIntroduce = () => (
    <ContainerWrapper>
        <OvalCenter>
            <OvalSvg/>
        </OvalCenter>

        <Container>

            <GridSection>
                <TitleBox>
                    <Heading size={3}>
                        Taxes
                    </Heading>
                    <Paragraph big>
                        Taxes are a fact of life, and if you’re in business there are various ways you will need to file and pay them.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>

                    <TextBlockWithImage SvgImage={Icon1} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            File with the IRS
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Let the IRS know you are setting
                            up a business.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={Icon2} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Payroll tax
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            If you pay employees, you will be liable
                            for payroll tax.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={Icon3} imageBackgroundColor={color.yellow2}
                                        imageShadowColor={color.yellow2}>
                        <Heading size={4}>
                            Sales tax
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            If you’re selling locally, you may also  be liable for collecting and paying sales tax. To register for sales tax, see your Secretary of State website.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={Icon4} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            State tax
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Most states do have a state income tax. If yours does, you will be taxed on your earnings as normal.
                            To register for state tax, see your Secretary of State website.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={Icon5} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Federal income tax
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You will need to pay income tax on any profits or earnings you take from your business. In most cases, profits from the business will “flow through” to your individual tax return and you will be taxed there.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={Icon6} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.red2}>
                        <Heading size={4}>
                            Corporation tax
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            If you incorporate as a C Corporation, you will also need to pay corporation tax — you will be taxed both on your profits as a business and when you extract earnings from your company. This “double taxation” is one of the reasons we normally recommend LLCs as a good business structure, since they avoid this.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={Icon7} imageBackgroundColor={color.blue2}
                                        imageShadowColor={color.blue2}>
                        <Heading size={4}>
                            Self-employment tax
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Unlike employees, the earnings from your business will be taxed under a self-employment tax (FICA and Medicaid). This is just over 15 percent of your earnings.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={Icon8} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Other taxes
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            In certain circumstances you may need to pay some other types of taxes. Talk to your accountant to find out what else you may be liable for.
                        </Paragraph>
                    </TextBlockWithImage>
                </GridSectionList>
            </GridSection>

        </Container>
    </ContainerWrapper>
);

export default TaxesIntroduce;
