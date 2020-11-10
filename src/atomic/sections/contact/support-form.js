import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../partials/heading-center";
import ContentCenter from "../../partials/content-center";
import Oval from "../../atoms/icons/oval";
import OvalSVG from "../../../images/ovals/bottom-left-transparent-orange3.inline.svg";
import OvalSVG2 from "../../../images/ovals/top-right-transparent-babyblue1.inline.svg";
import OvalSVG3 from "../../../images/ovals/top-left-transparent-babyblue1.inline.svg";
import Label from "../../molecules/form/label-field-with-child";
import Input from "../../atoms/inputs/input";
import Button from "../../molecules/buttons/button-action";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { submitContactForm } from '../../../api/Api';
import { _phoneFormat } from '../../../helpers/input-parsers';
import { validEmail } from '../../../helpers/form-validate';

const SupportForm = ({ className, content, isNewSale, id }) => {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const [submittedData, setSubmittedData] = React.useState({});

    const { register, reset, handleSubmit, errors, formState } = useForm();
    const { isSubmitting, isSubmitSuccessful } = formState;

    const handleForm = data => {
        const formData = new FormData();
        Object.keys(data).forEach(i => {
            return formData.set(i, data[i]);
        });
        
        // call API
        submitContactForm(formData).then(res => {
            setSubmittedData(data);
        });

        // Do sth after the form is submitted
        setPhoneNumber('');
        setFormSubmitted(true);
        Swal.fire(
            'Thank You!',
            'Your question has been successfully submitted.',
            'success'
        );

        //Fire GTM dataLayer
        if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'ContactUsFormSubmission'
            });
        }
    }

    const showModalForgotOrdernum = e => {
        e.preventDefault();
        Swal.fire({
            title: `Remind Order Number`,
            html: `Your order number will be sent to this address.`,
            input: 'email',
            inputPlaceholder: 'Enter your email address',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: async (email) => {
                return await fetch(`${process.env.INCFILE_API_URL}/remind-ordernum/?email=${email}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText)
                        }
                        return response.json();
                    })
                    .then(res => {
                        if (!res.status) {
                            Swal.showValidationMessage(
                                `Request failed: ${res.msg}`
                            )
                        }
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        )
                    })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
              console.log('HH', result);
                if (result.isConfirmed) {
                    Swal.fire(
                        `Done!`,
                        `A reminder email has been sent to your inbox.`,
                        `success`
                    )
                }
          })
    }

    React.useEffect(() => {
        if (isSubmitSuccessful) {
          reset({ ...submittedData });
        }
      }, [isSubmitSuccessful, submittedData, reset]);


    return (
        <Wrapper className={className} id={id}>
            {!isNewSale && (
                <>
                    <Oval className="oval" height="136" width="136" top="20" left="0" y="-78">
                        <OvalSVG />
                    </Oval>

                    <Oval className="oval" height="420" width="420" top="20" right="0" y="-65">
                        <OvalSVG2 />
                    </Oval>
                </>
            )}

            {isNewSale && (
                <Oval className="oval" height="420" width="420" top="40" left="0" y="-65">
                    <OvalSVG3 />
                </Oval>
            )}

            {!formSubmitted && (
                <>
                    <HeadingCenter
                        className="heading"
                        headline={`Client Support Request`}
                        headlineWidth="770"
                        text={`Please provide contact information`}
                    />

                    <ContentCenter>
                        <FormContent onSubmit={handleSubmit(handleForm)}>
                            <input type="hidden" name="inquiry" value={isNewSale ? 1 : 2} name="inquiry" ref={register()}/>
                            <Grid column={2}>
                                <Label htmlFor="name" content={{ label: `Name` }} bottomMargin="32">
                                    <Input
                                        className={errors.name ? 'invalid' : ''}
                                        name="name"
                                        id="name"
                                        inputRef={register({ required: `Field can't be empty` })}
                                    />
                                    {errors.name && (
                                        <span className="error__info">{errors.name.message}</span>
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
                            </Grid>

                            <Grid column={!isNewSale ? 2 : 1}>
                                <Label htmlFor="phone" content={{ label: `Phone Number (optional)` }} bottomMargin="16">
                                    <Input
                                        name="phone"
                                        id="phone"
                                        value={phoneNumber}
                                        onChange={e => setPhoneNumber(_phoneFormat(e.target.value))}
                                        inputRef={register()}
                                    />
                                </Label>

                                {!isNewSale && (
                                    <>
                                        <Label htmlFor="ordernum" linkOnClick={showModalForgotOrdernum} content={{
                                            label: `Order Number`,
                                            link: { text: `Forgot Order Number?`, url: `#` },
                                        }} bottomMargin="16">
                                        <Input name="ordernum" id="ordernum"/>
                                    </Label>
                                    </>
                                )}
                            </Grid>
                            
                            <Label htmlFor="message" content={{ label: `Message` }} bottomMargin="32">
                                <Input
                                    className={errors.message ? 'invalid' : ''}
                                    name="message"
                                    id="message"
                                    inputRef={register({ required: `Field can't be empty` })}
                                />
                            </Label>

                            <AlignCenter>
                                <Button
                                    type="submit"
                                    theme="primary56"
                                    width="160px"
                                    content={{ text: isSubmitting ? `Submitting...` : `Submit` }}
                                />
                            </AlignCenter>
                        </FormContent>
                    </ContentCenter>
                </>
            )}
        </Wrapper>
    );
};

export default SupportForm;

const Wrapper = styled.section`
  position: relative;
  padding: 120px 0 64px;

  @media (min-width: 992px) {
    padding: 0 0 64px;
  }
`;

const FormContent = styled.form`
    @media screen and (min-width: 769px) {
        min-width: 706px;
    }
`

const AlignCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  width: 100%;
  grid-template-columns: 1fr;
  
  @media(min-width: 769px) {
    grid-template-columns: ${props => (props.column && props.column == 2) ? `1fr 1fr` : `1fr`};
    grid-gap: 30px;
  }
`;