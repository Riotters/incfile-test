import React from "react";
import styled from "styled-components";
import Label from "../../atoms/text-fields/label"
import Link from "../../atoms/links/link"
import Input from "../../atoms/inputs/input"

const Wrapper = styled.div`
    .top {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .bottom {
        width: 100%;
    }
`

const InputField = ({ className, label, linkUrl, linkText, placeholder }) => (
    <Wrapper className={className}>
        <div className="top">
            {label && (
                <Label text={label} />
            )}
            {linkText && (
                <Link linkUrl={linkUrl} linkText={linkText} />
            )}
        </div>
        <div className="bottom">
            <Input placeholder={placeholder} />
        </div>
    </Wrapper>
)

export default InputField
