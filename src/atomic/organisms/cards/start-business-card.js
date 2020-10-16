import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import Image from "../../atoms/image/image";
import Texts from "../../molecules/text-blocks/blog-newsletter-texts";
import Input from "../../molecules/form/input-field";
import Button from "../../molecules/buttons/button"
import Oval from "../../atoms/icons/oval";
import OvalSVG from "../../../images/ovals/top-left-transparent-orange3.inline.svg";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";

const Wrapper = styled.div`
    width: 100%;

    .start-business {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 32px 24px;
        position: relative;

        div {
            &:first-child {
                z-index: 0;
            }
        }

        h3 {
            text-align: center;
        }

        h3, p {
            z-index: 1;
        }
    }

    .gatsby-image-wrapper {
        height: 222px;
        width: 204px;
    }

    .input-field {
        width: 100%;
        padding-bottom: 24px;
    }
`

const BlogNewsletterCard = ({ className }) => {
  return (
    <Wrapper className={className}>
        <Whitebox className="start-business" overflow>
            <Oval className="oval" height="290" width="290" top="0" left="0">
                <OvalSVG />
            </Oval>
            <Image filename="mrs-bulb-business-startap-guides-8238" />
            <Heading size="3" topMargin="31" bottomMargin="24">Free Business Formation Free Registered Agent</Heading>
            <Paragraph bottomMargin="24">Making entrepreneurship easy.</Paragraph>
            <Button content={{text: "Get started", url: "/"}} theme="primary48" margin="0 auto" arrow />
        </Whitebox>
    </Wrapper>
  )
}

export default BlogNewsletterCard;
