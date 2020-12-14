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
import { validEmail } from "../../helpers/form-validate";

// API
import { postHSForm } from "../../api/Api";
import ArrowLink from "../../atomic/molecules/buttons/text";

const HSSearchFormModal = ({ content, postDownloadAction, hs_form_id, modalExit }) => {
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

  const options = ["LLC", "Corporation"];

    return (
        <FormWrapper onSubmit={handleSubmit(handleForm)} id="hs-form">
            <Heading size={3}>{content.header}</Heading>
            <Paragraph big>{content.text}</Paragraph>
            <hr />
            <Label htmlFor="entity" content={{ label: `Entity Name` }} bottomMargin="16">
                <Input
                    className={errors.entity_name ? "invalid" : ""}
                    type="text"
                    name="entity_name"
                    id="entity_name"
                    inputRef={register({
                        required: `Field can't be empty`,
                    })}
                />
                {errors.entity_name && <span className="error__info">{errors.entity_name.message}</span>}
            </Label>
            <Grid>
                <GridItem>
                    <Label htmlFor="entity_type" content={{ label: `Entity Type` }} bottomMargin="32">
                        <Controller
                            control={control}
                            name="entity_type"
                            rules={{ required: `Field can't be empty` }}
                            defaultValue=""
                            render={({ onChange, onBlur, value, name, ref }) => (
                                <Dropdown
                                    className={errors.entity_type ? "invalid" : ""}
                                    options={options}
                                    id="entity_type"
                                    onChange={(option) => {
                                        setValue("entity_type", option.value, { shouldValidate: true });
                                    }}
                                    placeholder="Please select"
                                />
                            )}
                        />
                        {errors.entity_type && <span className="error__info">{errors.entity_type.message}</span>}
                    </Label>
                </GridItem>
                <GridItem paddingTop={22}>
                    <BoldParagraph mixed><strong>Not Sure?</strong></BoldParagraph>
                    <Link to="/business-entity-comparison">
                        See Comparison Chart
                    </Link>
                </GridItem>
            </Grid>
            <Heading size={3}>
                {content.header2}
            </Heading>
            <Label htmlFor="first-name" content={{ label: `First Name` }} bottomMargin="16">
                <Input className={errors.firstname ? "invalid" : ""} name="firstname" id="first-name" inputRef={register({ required: `Field can't be empty` })} />
                {errors.firstname && <span className="error__info">{errors.firstname.message}</span>}
            </Label>
            <Label htmlFor="last-name" content={{ label: `Last Name` }} bottomMargin="16">
                <Input className={errors.lastname ? "invalid" : ""} name="lastname" id="last-name" inputRef={register({ required: `Field can't be empty` })} />
                {errors.lastname && <span className="error__info">{errors.lastname.message}</span>}
            </Label>
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
            <FooterModal>
                <ButtonSubmit theme="primary56" type="submit" content={content.button} />
                <Link to="#" className="modal-close" onClick={modalExit}>
                    Cancel
        </Link>
            </FooterModal>
        </FormWrapper>
    );
};

export default HSSearchFormModal;

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

const Grid = styled.div`
  display: flex;
  display: grid;
  
  flex-direction: row;
  grid-template-columns: 50% 50%;
`;

const BoldParagraph = styled(Paragraph)`
  font-weight: bold;
  margin-bottom: 0;
`;

const GridItem = styled.div`
  padding-top: ${props => props.paddingTop ? props.paddingTop + "px" : "0px"};

  &:first-child {
    margin-right: 10px;
  }
  
  &:last-child {
    margin-left: 10px;
  }
`;
