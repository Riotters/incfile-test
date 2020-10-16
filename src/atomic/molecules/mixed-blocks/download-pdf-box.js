import React from "react";
import styled from "styled-components";
import { shadow } from "../../atoms/styles/shadows";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Whitebox from "../../atoms/boxes/white-box";
import Circle from "../../atoms/icons/circle";
import Button from "../../molecules/buttons/button";
import Image from "../../atoms/image/image";

const Wrapper = styled(Whitebox)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 488px;
    transition: box-shadow .3s ease;
    padding: 56px 32px 48px;

    &:hover {
        box-shadow: ${shadow.white2};

        p {
            height: 72px;
        }

        & > div {
            &:last-child {
                height: 304px;
            }
        }
    }
    `;
    
    const ImageBox = styled.div`
    display: block;
    width: 158px;
    height: 210px;
    margin: 0 auto 40px;
    
    .gatsby-image-wrapper {
        height: 100%;
        width: 100%;
    }
    `;
    
    const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 148px;
    transition: height .3s ease;

    h4, p {
        text-align: center;
    }
    
    h4 {
        min-height: 48px;
    }
    
    p {
        height: 0;
        transition: height .3s ease;
        overflow: hidden;
    }
`;

const DownloadPdfBox = ({ className, content, image }) => {
  return (
    <Wrapper className={className}>
        <ImageBox>
            <Image filename={image} />
        </ImageBox>
        <TextWrapper>
            {content.header && (
                <Heading size="4" bottomMargin="16">{content.header}</Heading>
            )}
            {content.text && (
                <Paragraph bottomMargin="0">{content.text}</Paragraph>
            )}
            {content.button && (
                <Button content={content.button} theme="secondary48" margin="36px 0 0" marginSM="36px auto 0" arrow />
            )}
        </TextWrapper>
    </Wrapper>
  )
}

export default DownloadPdfBox;
