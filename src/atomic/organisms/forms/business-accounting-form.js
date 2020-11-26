import React from "react";
import styled from "styled-components";
import Label from "../../molecules/form/label-field-with-child";
import Input from "../../atoms/inputs/input";
import Button from "../../molecules/buttons/button-action";
import { useForm } from 'react-hook-form';

// API 
import { signupFreeTaxConsultation } from '../../../api/Api';
import { _phoneFormat } from '../../../helpers/input-parsers';
import { validEmail, isUSPhone } from '../../../helpers/form-validate';
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 770px;
  padding: 32px;
  position: relative;

  .curve-shape {
    svg {
      transform: scale(-1);
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  width: 100%;
  
  @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;    
    }

  .Dropdown-root {
    min-width: 50px;
  }
`;

const BusinessAccountingForm = ({ className, content }) => {
    const { register, reset, handleSubmit, errors, formState, setValue } = useForm();
    const { isSubmitting, isSubmitSuccessful } = formState;

    const [submittedData, setSubmittedData] = React.useState({});

    const handleSignup = data => {
        if (typeof window !== 'undefined') {
            let v = window.grecaptcha.getResponse();
            if (!v.length) {
                Swal.fire(
                    'Error!', 'You must confirm that you are not a robot', 'warning'
                );

                return false;
            } else {
                const formData = new FormData();
                Object.keys(data).forEach(i => {
                    return formData.set(i, data[i]);
                });

                signupFreeTaxConsultation(formData)
                    .then(res => {
                        setSubmittedData(data);
                    });
                
                window.grecaptcha.reset();
                Swal.fire(
                    'Success!', 'Your request has been sent', 'success'
                );
            }
        }
    }

    React.useEffect(() => {
        if (isSubmitSuccessful) {
          reset({ ...submittedData });
        }
      }, [isSubmitSuccessful, submittedData, reset]);

    return (
        <>
            <Helmet>
                <script src='https://www.google.com/recaptcha/api.js' async></script>
            </Helmet>
            <Wrapper className={className} onSubmit={handleSubmit(handleSignup)}>
                <Grid>
                    <Label htmlFor="name" content={content.field1}>
                        <Input
                            className={errors.name ? 'invalid' : ''}
                            type="text"
                            name="name"
                            inputRef={register({ required: `Field can't be empty` })}
                        />
                        {errors.name && (
                            <span className="error__info">{errors.name.message}</span>
                        )}
                    </Label>
                    <Label htmlFor="email" content={content.field2}>
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
                    <Label htmlFor="phone" content={content.field3} bottomMargin={20}>
                        <Input
                            name="phone"
                            id="phone"
                            onChange={e => setValue('phone', _phoneFormat(e.target.value))}
                            inputRef={register({
                                required: `Field can't be empty`,
                                validate: value => isUSPhone(value) || `Should be formatted like xxx-xxx-xxxx`
                            })}
                        />
                        {errors.phone && (
                            <span className="error__info">{errors.phone.message}</span>
                        )}
                    </Label>
                    <div class="g-recaptcha" data-sitekey={`${process.env.CAPTCHA_KEY}`}></div>
                </Grid>

                <Button type="submit" content={{text: isSubmitting ? 'Submitting...' : 'Yes, Contact Me to Learn More'}} theme="primary56" arrow margin="32px 0 0" marginSM="32px auto 0" />
            </Wrapper>
        </>
    );
};

export default BusinessAccountingForm;
