import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Image from "../../atoms/image/image";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 24px;

    &::before {
        content: '';
        display: block;
        padding-top: 65%;
    }

    .gatsby-image-wrapper {
        height: 100%;
        width: 100%;
        position: absolute !important;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const Counter = styled.div`
    display: flex;
`;

const BlogArticleImage = ({ className, image, children }) => {
  return (
    <Wrapper className={className}>
        <Image filename={image} />
        {children}
    </Wrapper>
  )
}

export default BlogArticleImage;
