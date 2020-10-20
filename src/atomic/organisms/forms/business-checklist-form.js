import styled from "styled-components";
import React from "react";
import Label from "../../molecules/form/label-field-with-child";
import Input from "../../atoms/inputs/input";
import {Heading} from "../../atoms/typography/heading";
import {Paragraph} from "../../atoms/typography/paragraph";
import Dropdown from "../../molecules/form/dropdown-with-events";
import {color} from "../../atoms/styles/colors";
import ButtonSubmit from "../../molecules/buttons/button-action";

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

export const BusinessChecklistForm = ({ className, content, postDownloadAction }) => (
    <Wrapper>
        <form noValidate>
        <input type="hidden" name="hs_form_id" value={content.hs_form_id} />
            <Heading size={3}>{content.header}</Heading>
            <Paragraph big>{content.text}</Paragraph>
            <hr />
            {content.fields.map((field, index) => (
                <FieldWrapper className="field-group" key={index}>
                    <Label content={field} bottomMargin="24">
                        {field.type !== "select" && (
                            <Input
                                name={field.name}
                                required={field.required}
                                pattern={field.pattern}
                                placeholder={field.placeholder}
                                type={field.type}
                            />
                        )}
                        {field.type === "select" && (
                            <Dropdown className="dropdown" options={field.options} name={field.name} required={field.required} />
                        )}
                    </Label>
                </FieldWrapper>
            ))}
            <ButtonSubmit theme="primary56"  onClick={postDownloadAction} content={content.button} />
        </form>
    </Wrapper>
);