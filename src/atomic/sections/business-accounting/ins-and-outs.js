import styled from "styled-components";
import {Heading} from "../../atoms/typography/heading";
import React from "react";
import {Paragraph} from "../../atoms/typography/paragraph";
import ContentCenter from "../../partials/content-center";
import ImageContent from "../../partials/left-image-right-content"
import Accordion from "../../organisms/accordion/accordion";
import Colorbox from "../../molecules/blocks/left-icon-block-colored";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/top-right-babyblue1.inline.svg";

const Wrapper = styled.div`
    position: relative;
    padding: 120px 0 133px;
    
    p, h2 {
        text-align: center;
    }
`;

const Anchor = styled.div`
    position: relative;
`;

const InsAndOuts = ({ content }) => (
    <Wrapper>

        <ContentCenter contentWidth={770}>
            <Heading size={2} bottomMargin={49}>{content.header}</Heading>
            <Paragraph big bottomMargin={40}>{content.text}</Paragraph>
        </ContentCenter>
        <ImageContent image={content.image} contentCenter={false}>
            <Anchor>
                <Curve top="-20" right="-20" rotate={5}>
                    <CurveSVG/>
                </Curve>
                <Colorbox color={content.box.color} content={content.box.content}
                          dotsColor={content.box.dotsColor} style={{marginBottom: "65px"}}/>
            </Anchor>

             <Colorbox color={content.box1.color} content={content.box1.content}
                       dotsColor={content.box1.dotsColor} style={{marginBottom: "48px"}}/>

            <Accordion tab content={content.faq} />
        </ImageContent>
    </Wrapper>
);

export default InsAndOuts;