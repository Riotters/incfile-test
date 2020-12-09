import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Label from "../../atomic/molecules/form/label-field-with-child";
import Input from "../../atomic/atoms/inputs/input";
import { Heading } from "../../atomic/atoms/typography/heading";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import Dropdown from "../../atomic/molecules/form/dropdown";
import { color } from "../../atomic/atoms/styles/colors";
import ButtonSubmit from "../../atomic/molecules/buttons/button-action";
import { useForm, Controller } from "react-hook-form";

// texts
import { _phoneFormat } from "../../helpers/input-parsers";
import { validEmail, isUSPhone } from "../../helpers/form-validate";

// API
import { postHSForm } from "../../api/Api";

const HSFormModal = ({ content, postDownloadAction, hs_form_id, modalExit }) => {
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    const { register, handleSubmit, control, errors, formState, setValue } = useForm();
    const { isSubmitting } = formState;

    const handleForm = (data) => {
        const formData = new FormData();
        formData.set("pageTitle", document.title);
        formData.set("pageUrl", pageUrl);
        formData.set("hs_form_id", hs_form_id);

        Object.keys(data).forEach((i) => {
            return formData.set(i, data[i]);
        });

        postHSForm(formData).then((json) => { });

        postDownloadAction(formData);
    };

  const options = ["Start a Business Soon", "Form a Business Now", "Grow a Business"];

    return (
        <FormWrapper onSubmit={handleSubmit(handleForm)} id="hs-form">
            <Heading size={3}>{content.header}</Heading>
            <Paragraph big>{content.text}</Paragraph>
            <hr />
            <Label htmlFor="email" content={{ label: `Email` }} bottomMargin="16">
                <Input
                    className={errors.email ? "invalid" : ""}
                    type="text"
                    name="email"
                    id="email"
                    inputRef={register({
                        required: `Field can't be empty`,
                        validate: (value) => validEmail(value) || `Email is not valid`,
                    })}
                />
                {errors.email && <span className="error__info">{errors.email.message}</span>}
            </Label>

            <Label htmlFor="first-name" content={{ label: `First Name` }} bottomMargin="16">
                <Input className={errors.firstname ? "invalid" : ""} name="firstname" id="first-name" inputRef={register({ required: `Field can't be empty` })} />
                {errors.firstname && <span className="error__info">{errors.firstname.message}</span>}
            </Label>
            <Label htmlFor="last-name" content={{ label: `Last Name` }} bottomMargin="16">
                <Input className={errors.lastname ? "invalid" : ""} name="lastname" id="last-name" inputRef={register({ required: `Field can't be empty` })} />
                {errors.lastname && <span className="error__info">{errors.lastname.message}</span>}
            </Label>
            <Label htmlFor="phone" content={{ label: `Phone Number` }} bottomMargin="16">
                <Input
                    className={errors.phone ? "invalid" : ""}
                    name="phone"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(_phoneFormat(e.target.value))}
                    inputRef={register({
                        required: `Field can't be empty`
                    })}
                />
                {errors.phone && <span className="error__info">{errors.phone.message}</span>}
            </Label>
            <Label htmlFor="intent_path" content={{ label: `I want to...` }} bottomMargin="32">
                <Controller
                    control={control}
                    name="intent_path"
                    rules={{ required: `Field can't be empty` }}
                    defaultValue=""
                    render={({ onChange, onBlur, value, name, ref }) => (
                        <Dropdown
                            className={errors.intent_path ? "invalid" : ""}
                            options={options}
                            onChange={(option) => {
                                setValue("intent_path", option.value, { shouldValidate: true });
                            }}
                            placeholder="Please select"
                        />
                    )}
                />
                {errors.intent_path && <span className="error__info">{errors.intent_path.message}</span>}
            </Label>
            <FooterModal>
                <ButtonSubmit theme="primary56" type="submit" content={content.button} />
                <Link to="#" className="modal-close" onClick={modalExit}>
                    Cancel
        </Link>
            </FooterModal>
        </FormWrapper>
    );
};

export default HSFormModal;

const FooterModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const FormWrapper = styled.form`
  background-color: #fff;
  width: 100%;
  padding: 25px 15px;

  @media (min-width: 769px) {
    padding: 50px;
  }

  hr {
    margin: 20px 0;
    color: ${color.grey4};
  }

  h2 {
    text-align: left;
  }

  button:disabled,
  button[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
