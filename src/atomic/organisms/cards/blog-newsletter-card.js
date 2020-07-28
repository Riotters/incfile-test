import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import Image from "../../atoms/image/image";
import Texts from "../../molecules/text-blocks/blog-newsletter-texts";
import Input from "../../molecules/form/input-field";
import Button from "../../molecules/buttons/button"

const Wrapper = styled.div`
    width: 100%;

    .newsletter {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 32px 24px;
    }

    .gatsby-image-wrapper {
        height: 120px;
        width: 120px;
    }

    .input-field {
        width: 100%;
        padding-bottom: 24px;
    }
`

const BlogNewsletterCard = ({ className }) => {
  return (
    <Wrapper className={className}>
        <Whitebox className="newsletter" overflow>
            <Image filename="paperlist" />
            <Texts />
            <Input className="input-field" label="First Name" />
            <Input className="input-field" label="Email" />
            <Button content="Submit" theme="primary48" margin="0 auto" arrow />
        </Whitebox>
    </Wrapper>
  )
}

export default BlogNewsletterCard;
