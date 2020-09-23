import React from "react";
import styled from "styled-components";
import parse from 'html-react-parser';
import HeadingCenter from "../../partials/heading-center";
import ContentCenter from "../../partials/content-center";
import Image from '../../atoms/image/image_nobase64';
import Oval from "../../atoms/icons/oval";
import { color } from '../../../components/styles/colors';
import OvalSVG from "../../../images/ovals/top-right-transparent-orange.inline.svg";
import ShapeCurve from "../../atoms/shapes/curve";
import RelativeElement from '../../elements/relative-e';
import AbsoluteShapCure from '../../elements/absolute-shape-curve-e';
import FormControl from "../../molecules/form/form-control";
import Row from "../../molecules/helpers/row";
import InputField from "../../molecules/form/input-field";
import Button from "../../../components/button";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Whitebox from "../../atoms/boxes/white-box";
import Circle from "../../atoms/icons/circle";
import ArrowSVG from "../../../images/arrow.inline.svg";

const Wrapper = styled.section`
  position: relative;
  padding: 120px 0 64px;
  background-image: linear-gradient(to bottom, #fef6ed, #ffffff);
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 48px;

    @media screen and (min-width: 769px) {
        min-width: 706px;
    }
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    gap: 15px;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;

        @media screen and (max-width:560px){
            padding: 15px;
        }

        p{
            ${props => !props.isNewSale ? "font-weight: bold;" : ""}
            margin-bottom: 0;
        }
    }
`

const ContactInfo = ({ className, content, isNewSale }) => (
    <Wrapper className={className}>
        <Oval className="oval" height="420" width="420" top="0" right="0" y="0">
            <OvalSVG />
        </Oval>

        <HeadingCenter
            className="heading"
            headline={`Contact Us`}
            headlineWidth="770"
        />
        
        <ContentCenter>
            <Content>
                <Heading size={3}>Incfile.com LLC</Heading>
                <Paragraph big mixed={true}>
                    { parse(`17350 State Highway 249, <br>Suite 220, Houston, TX 77064`)}
                </Paragraph>

                <RelativeElement style={{ width: `100%`, maxWidth: `${isNewSale ? '440px' : '330px'}` }}>
                    <AbsoluteShapCure left="-20px" top="15px" rotate={-90}>
                        <ShapeCurve color={color.orange1}/>
                    </AbsoluteShapCure>
                    <Flex isNewSale={isNewSale}>
                        <Whitebox flex>
                            {isNewSale && (
                                <Circle circleColor={color.orange3} iconColor={color.orange1} rightMargin="24" transform="rotate(0deg)" className="circle">
                                    <ArrowSVG />
                                </Circle>
                            )}
                            <Paragraph>{content.phone1}</Paragraph>
                        </Whitebox>
                        <Whitebox flex>
                            {isNewSale && (
                                <Circle circleColor={color.orange3} iconColor={color.orange1} rightMargin="24" transform="rotate(0deg)" className="circle">
                                    <ArrowSVG />
                                </Circle>
                            )}
                            <Paragraph>{content.phone2}</Paragraph>
                        </Whitebox>
                    </Flex>
                </RelativeElement>

                <Paragraph>Phone support available Monday - Friday from 9am to 6pm CST</Paragraph>
            </Content>
        </ContentCenter>
    </Wrapper>
);

export default ContactInfo;