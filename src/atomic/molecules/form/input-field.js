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
        position: relative;
    }

    &.dollar__sign{
        .bottom:before{
            position: absolute;
            content: "$";
            top: 50%;
            transform: translate(15px,-50%);
            color: #1D1D1D;
            font-size: 16px;
        }
    }

    &.hide__dollar-sign{
        .bottom:before{
            display: none;
        }
    }
`

const InputField = ({ className, label, linkUrl, linkText, placeholder, name, isRequired, value, onChange, inputRef, type}) => (
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
            <Input placeholder={placeholder} name={name} inputRef={inputRef} type={type} required={isRequired} value={value} onChange={onChange}/>
        </div>
    </Wrapper>
)

export default InputField
