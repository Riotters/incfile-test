import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import Label from "../../molecules/form/label-field-with-child";
import Input from "../../atoms/inputs/input";
import Button from "../../molecules/buttons/button-action";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { validEmail } from "../../../helpers/form-validate";
import { postHSForm } from '../../../api/Api';

const Form = styled.form`
  width: 100%;
  max-width: 570px;
`;

const Wrapper = styled(Whitebox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  position: relative;

  .curve-shape {
    svg {
      transform: scale(-1);
    }
  }
`;

const BusinessNameSearchForm = ({ className }) => {
    const { register, errors, reset, handleSubmit, formState } = useForm();
    const { isSubmitting, isSubmitSuccessful } = formState;
    const [submittedData, setSubmittedData] = React.useState({});

    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    const hutk = document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    const signupNewsletter = data => {
        const formData = new FormData();
        formData.set('pageTitle', document.title);
        formData.set('pageUrl', pageUrl);
        formData.set('hs_form_id', '86b6b235-1338-4b6a-ac5c-0a6910b14d1c');
        formData.set('lifecyclestage', 'subscriber');
        formData.set('hutk', hutk);

        Object.keys(data).forEach(i => {
            return formData.set(i, data[i]);
        });

        postHSForm(formData)
            .then(json => {
                setSubmittedData(data);
            });
        
        Swal.fire(
            'Done!',
            'Thank you for submission',
            'success'
        );
    }

    React.useEffect(() => {
        if (isSubmitSuccessful) {
          reset({ ...submittedData });
        }
    }, [isSubmitSuccessful, submittedData, reset]);
    
    return (
        <Form onSubmit={handleSubmit(signupNewsletter)}>
            <Wrapper className={className}>
                <Label htmlFor="first-name" content={{ label: `First Name` }} bottomMargin="32">
                    <Input
                        className={errors.firstname ? 'invalid' : ''}
                        name="firstname"
                        id="first-name"
                        inputRef={register({
                            required: `Field can't be empty`
                        })} />
                    {errors.firstname && (
                        <span className="error__info">{errors.firstname.message}</span>
                    )}
                </Label>
                <Label htmlFor="email" content={{ label: `Email` }} bottomMargin="32">
                    <Input
                        className={errors.email ? 'invalid' : ''}
                        type="text"
                        name="email"
                        id="email"
                        inputRef={register({
                            required: `Field can't be empty`,
                            validate: value => validEmail(value) || `Email is not valid`
                        })}
                    />
                    {errors.email && (
                        <span className="error__info">{errors.email.message}</span>
                    )}
                </Label>

                <Button type="submit" content={{ text: `Enroll Today` }} theme="primary56" marginSM="48px auto 0" />
            </Wrapper>
        </Form>
    );
};

export default BusinessNameSearchForm;
