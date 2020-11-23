import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Heading } from '../../../atoms/typography/heading';
import { Paragraph } from '../../../atoms/typography/paragraph';
import ContentCenter from '../../../partials/content-center';
import Container from '../../../container';
import Image from '../../../atoms/image/image_nobase64';
import Oval from "../../../atoms/icons/oval";
import { color } from '../../../../components/styles/colors';
import OvalSVG from "../../../../images/ovals/top-bottom-transparent-green3.inline.svg";
import OvalSVG2 from "../../../../images/ovals/top-right-transparent-green2.inline.svg";
import ShapeCurve from "../../../atoms/shapes/curve";
import CurveSVG from "../../../../images/green-curve.inline.svg";
import RelativeElement from '../../../elements/relative-e';
import AbsoluteShapCure from '../../../elements/absolute-shape-curve-e';
import Card from "../../../molecules/mixed-blocks/top-image-box";

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 0 80px 0;
    text-align: center;
    background-image: linear-gradient(to bottom, #f2f8f3, #ffffff);

    .complaint__content{
        width: 100%;
        text-align: left;
        margin-top: 150px !important;

        @media screen and (min-width: 850px) {
            width: 570px;
        }
    }
`

const MrsStar = styled.div`
    position: absolute;
    top: -85px;
    right: -90%;
    width: 500px;

    @media screen and (max-width: 768px) {
        display:none;
    }
`

const ToolLists = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1em;
    margin-top: 100px;

    @media screen and (min-width: 850px) {
        grid-template-columns: 1fr 1fr;
    }

    .card__item {
        text-align: left;
        
        &:nth-child(4) .top .gatsby-image-wrapper {
            width: 71px;
        }
    }
`

const CustomerComplaint = ({ content }) => (
    <Wrapper>
        <Oval className="oval" height="520" width="520" top="0" left="0" y="0">
            <OvalSVG />
        </Oval>

        <Oval className="oval" height="720" width="720" top="0" right="0" y="0">
            <OvalSVG2 />
        </Oval>

        <Container>
            <RelativeElement className="complaint__content">
                <AbsoluteShapCure left="-60px" top="-110px" rotate={-180}>
                    <CurveSVG color={color.blue1}/>
                </AbsoluteShapCure>
                
                <MrsStar>
                    <Image filename="mrs-stars-01" alt="" />
                </MrsStar>

                <Heading size={2}>Incfile Customer Complaints? Let Us Know How We Can Improve</Heading>
                <Paragraph big mixed={true}>
                We're entrepreneurs, just like you, so we're constantly looking for ways we can do better. In the past we've had negative reviews on our Facebook page highlight an issue that we’ve now addressed: slow or no response to inquiries from customers.
                </Paragraph>
                <Paragraph big mixed={true}>
                Our reviews on Yelp also highlight the same issue in the lack of feedback and communication from customer service. We completely understand how frustrating this was to our customers, which is why we’ve made changes to our customer support area. We believe that doubling the size of our support team, introducing live chat and providing a comprehensive knowledge base will all help improve customer satisfaction. We’re paying very close attention to our responsiveness, and we’ll continue to make changes to optimize the customer experience.
                </Paragraph>
            </RelativeElement>
        </Container>
        
        <ContentCenter contentWidth="940">
            <Heading size={1} style={{ marginTop: `180px` }}>Useful Resources</Heading>
            <Paragraph big mixed={true}>
            Here’s a link to some useful resources to help you get the information you need to start and run your business.
            </Paragraph>
            
            <ToolLists>
                {content.tools.map(item => (
                    <Fragment>
                        {
                            !item.curve
                            ? <Card className="card__item" content={{ header: item.title, text: item.desc, link: { url: item.link, text: `Learn more` } }} color={item.color} image={item.image} />
                            : <RelativeElement>
                                <AbsoluteShapCure right="-25px" bottom="-15px" rotate={80}>
                                    <ShapeCurve color={color.blue1} />
                                </AbsoluteShapCure>
                                <Card className="card__item" content={{ header: item.title, text: item.desc, link: { url: item.link, text: `Learn more` } }} color={item.color} image={item.image} />
                            </RelativeElement>
                        }
                    </Fragment>
                ))}
        
            </ToolLists>

        </ContentCenter>
    </Wrapper>    
)

export default CustomerComplaint;