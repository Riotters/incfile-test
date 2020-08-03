import React from "react";
import styled from "styled-components";
import WhiteBox from "../../atoms/boxes/white-box";
import { Heading } from "../../atoms/typography/heading";
import InputField from "../../molecules/form/input-field";
import Button from "../../molecules/buttons/button";

const Wrapper = styled.div`
    width: 100%;
    max-width: 400px;

    .box {
        padding: 64px 40px 48px;
    }

    h3 {
        text-align: center;
        max-width: 320px;
    }

    .input-field {
        width: 100%;
        margin-bottom: 24px;

        &.last {
            margin-bottom: 64px;
        }
    }
`

const ContactMe = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <WhiteBox className="box">
            <Heading size="3" bottomMargin="32">{content.header}</Heading>
            {content.inputs.map((input, id) => (
                <InputField className={`input-field${id === (content.inputs.length - 1) ? " last" : ""}` } label={input.label} placeholder={input.placeholder} />
            ))}
            <Button className="submit-button" theme="primary56" content={content.button} arrow />
        </WhiteBox>
    </Wrapper>
  )
}

export default ContactMe
