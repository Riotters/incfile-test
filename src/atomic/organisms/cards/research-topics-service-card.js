import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import Texts from "../../molecules/text-blocks/blog-follow-us-text";
import { Paragraph } from "../../atoms/typography/paragraph";
import LightBoxVideo from "../../../components/LightBox";

const Wrapper = styled.div`
    width: 100%;

    .service {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px 32px 32px;
    }
`

const ResearchTopicsService = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <Whitebox className="service" overflow>
            <Texts content="How our service works" leftAlign />
            <Paragraph topMargin="24" bottomMargin="24">
                Take a moment to view our instructional video and see how easy it can be to get your business incorporated.
            </Paragraph>
            <LightBoxVideo thumbnailVideo="how-to-start-a-consulting-business-9829" videoID="372490609" vimeo />
        </Whitebox>
    </Wrapper>
  )
}

export default ResearchTopicsService;
