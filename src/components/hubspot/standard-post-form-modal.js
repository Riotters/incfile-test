import React from "react";
import styled from "styled-components";

import Label from "../../atomic/molecules/form/label-field-with-child";
import Input from "../../atomic/atoms/inputs/input";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import Dropdown from "../../atomic/molecules/form/dropdown";
import {color} from "../../atomic/atoms/styles/colors";
import ButtonSubmit from "../../atomic/molecules/buttons/button-action";

// texts
import { _phoneFormat } from '../../helpers/input-parsers';

const HSFormModal = ({ content, postDownloadAction, hs_form_id }) => {
    const [intentPath, setIntentPath] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        
        if (!form.checkValidity()) {
            return false;
        }

        const formData = new FormData(form);
        formData.set('intent_path', intentPath);
        formData.set('pageTitle', document.title);
        formData.set('pageUrl', pageUrl);
    
        fetch(`${process.env.INCFILE_API_URL}/hubspot/postForm`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(json => {
                form.reset();
                setPhoneNumber('');
                setIntentPath('');
                postDownloadAction(formData);
            });
    }

    const handlePhoneChange = (e) => {
        let formatPhone = _phoneFormat(e.target.value);
        setPhoneNumber(formatPhone);
    }

    const options = [
        "Start a Business Soon",
        "Start a Business Now",
        "Grow a Business",
    ];

    return (
        <FormWrapper onSubmit={handleForm} noValidate>
            <input type="hidden" name="hs_form_id" value={hs_form_id} />
            <Heading size={3}>{content.header}</Heading>
            <Paragraph big>{content.text}</Paragraph>
            <hr />
            <Label htmlFor="email" content={{ label: `Email` }} bottomMargin="16">
                <Input type="email" name="email" id="email" required />
            </Label>
            <Label htmlFor="first-name" content={{ label: `First Name` }} bottomMargin="16">
                <Input name="firstname" id="first-name" required />
            </Label>
            <Label htmlFor="last-name" content={{ label: `Last Name` }} bottomMargin="16">
                <Input name="lastname" id="last-name" required />
            </Label>
            <Label htmlFor="phone" content={{ label: `Phone Number` }} bottomMargin="16">
                <Input name="phone" id="phone" value={phoneNumber} pattern="\d{3}-\d{3}-\d{4}" onChange={e => handlePhoneChange(e)} required />
            </Label>
            <Label htmlFor="intent_path" content={{ label: `I want to...` }} bottomMargin="32">
                <Dropdown
                    name="intent_path"
                    id="intent_path"
                    required
                    options={options}
                    onChange={option => setIntentPath(option.value)}
                    placeholder="Please select"
                />
            </Label>
            <ButtonSubmit theme="primary56" type="submit" content={content.button} />
        </FormWrapper>
    );
}

export default HSFormModal;

const FormWrapper = styled.form`
    background-color: #fff;
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