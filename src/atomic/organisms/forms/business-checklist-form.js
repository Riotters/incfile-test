import styled from "styled-components";
import React from "react";
import Label from "../../molecules/form/label-field-with-child";
import Input from "../../atoms/inputs/input";
import {Heading} from "../../atoms/typography/heading";
import {Paragraph} from "../../atoms/typography/paragraph";
import Dropdown from "../../molecules/form/dropdown-with-events";
import {color} from "../../atoms/styles/colors";
import Button from "../../molecules/buttons/button";

const Wrapper = styled.form`
    width: 100%;
    padding: 50px;
    
    hr {
        margin: 20px 0;
        color: ${color.grey4};
    }
    
    h2 {
        text-align: left;
    }
`;

const FieldWrapper = styled.div`
    width: 100%;
    margin-bottom: 15px;
`;

export const BusinessChecklistForm = ({ className, content }) => (
    <Wrapper>
        <Heading size={3}>{content.header}</Heading>
        <Paragraph big>{content.text}</Paragraph>
        <hr />
        {content.fields.map((field) => (
            <FieldWrapper className="field-group">
                <Label content={field} bottomMargin="24">
                    {field.type !== "select" && (<Input placeholder={field.placeholder} type={field.type} />)}
                    {field.type === "select" && (<Dropdown className="dropdown" options={field.options} />)}
                </Label>
            </FieldWrapper>
        ))}
        <Button theme="primary56" arrow content={content.button} />
    </Wrapper>
);