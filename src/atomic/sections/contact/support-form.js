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
import Textarea from "../../atoms/inputs/textarea";
import Button from "../../molecules/buttons/button-action";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { submitContactForm } from '../../../api/Api';
import { _phoneFormat } from '../../../helpers/input-parsers';
import { validEmail } from '../../../helpers/form-validate';
import Image from "../../atoms/image/image";
import {Heading} from "../../atoms/typography/heading";
import {Paragraph} from "../../atoms/typography/paragraph";
import {color} from "../../atoms/styles/colors";
import Circle from "../../atoms/icons/circle";
import ExSVG from "../../../images/icons/icon-status-x.inline.svg";

const LightBoxModal = styled.div`
  transition: all .8s;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const LightBoxContent = styled.div`
  transition: all .8s;

  background-color: #fff;
  width: 100%;
  max-width: 564px;
  position: relative;
  margin: 0 30px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 96px 64px 48px;
  pointer-events: all;
  
  @media screen and (min-width: 768px) {
    height: auto;
    overflow-y: visible;
  }
  
  .header-top {
    color: ${color.grey2};
  }
  
  &.form-submitted {
    height: 40vh;
    max-width: 500px;
  }
`;

const SupportForm = ({ className, isNewSale, id }) => {
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const [submittedData, setSubmittedData] = React.useState({});
    const inputRef = React.useRef(null);

    const { register, reset, handleSubmit, errors, formState, setValue } = useForm();
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
    // const showModalForgotOrdernum = e => {
    //     e.preventDefault();
    //     Swal.fire({
    //         title: `Help is on the way`,
    //         html: `Your order number will be sent to this address.`,
    //         input: 'email',
    //         inputPlaceholder: 'Enter your email address',
    //         inputAttributes: {
    //           autocapitalize: 'off'
    //         },
    //         showCancelButton: true,
    //         confirmButtonText: 'Submit',
    //         showLoaderOnConfirm: true,
    //         preConfirm: async (email) => {
    //             return await fetch(`${process.env.INCFILE_API_URL}/remind-ordernum/?email=${email}`)
    //                 .then(response => {
    //                     if (!response.ok) {
    //                         throw new Error(response.statusText)
    //                     }
    //                     return response.json();
    //                 })
    //                 .then(res => {
    //                     if (!res.status) {
    //                         Swal.showValidationMessage(
    //                             `Request failed: ${res.msg}`
    //                         )
    //                     }
    //                 })
    //                 .catch(error => {
    //                     Swal.showValidationMessage(
    //                         `Request failed: ${error}`
    //                     )
    //                 })
    //         },
    //         allowOutsideClick: () => !Swal.isLoading()
    //     }).then((result) => {
    //             if (result.isConfirmed) {
    //                 Swal.fire(
    //                     `Done!`,
    //                     `A reminder email has been sent to your inbox.`,
    //                     `success`
    //                 )
    //             }
    //       })
    // }

    React.useEffect(() => {
        if (isSubmitSuccessful) {
          reset({ ...submittedData });
        }
      }, [isSubmitSuccessful, submittedData, reset]);

    const [ modalVisible, setModalVisible ] = React.useState(false);
    const [ validation, setValidation ] = React.useState(false);
    const [ success, setSuccess ] = React.useState(false);

    const popup = (e) => {
        e.preventDefault();

        if(e.target == null || typeof e.target.className !== "string") return;

        if (!e.target.className.includes("modal-overlay") && !e.target.className.includes("modal-close") &&
            modalVisible === true)
            return;

        setModalVisible(!modalVisible);
    };

    const handleRequest = async () => {
        let email = inputRef.current.value;
        setValidation(false);

        // For testing only:
        // await (new Promise((accept, reject) => {
        //     setTimeout(() => {
        //         accept("A reminder email has been sent to your inbox.");
        //     }, 2500);
        // })).then((resp) => {
        //     setSuccess(resp);
        // }).catch((reason) => {
        //     setValidation("Validation error: " + reason);
        // });

        await fetch(`${process.env.INCFILE_API_URL}/remind-ordernum/?email=${email}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                setSuccess("A reminder email has been sent to your inbox.");
                return response.json();

            })
            .then(res => {
                if (!res.status) {
                    setValidation(`Request failed: ${res.msg}`);
                }
            })
            .catch(error => {
                setValidation(`Request failed: ${error}`);
            });
    };

    const changeValidationFromChange = () => setValidation(false);

    let modalClases = ["lightbox-content"];

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
                                        onChange={e => setValue('phone', _phoneFormat(e.target.value))}
                                        inputRef={register()}
                                    />
                                </Label>

                                {!isNewSale && (
                                    <>
                                        <Label htmlFor="ordernum" linkOnClick={popup} content={{
                                            label: `Order Number`,
                                            link: { text: `Forgot Order Number?`, url: `#` },
                                        }} bottomMargin="16">
                                        <Input name="ordernum" id="ordernum"/>
                                    </Label>
                                    </>
                                )}
                            </Grid>
                            
                            <Label htmlFor="message" content={{ label: `Message` }} bottomMargin="32">
                                <Textarea
                                    className={errors.message ? 'invalid' : ''}
                                    name="message"
                                    row="5"
                                    inputRef={register({ required: `Field can't be empty` })}
                                />
                                {errors.message && (
                                        <span className="error__info">{errors.message.message}</span>
                                    )}
                            </Label>

                            <AlignCenter>
                                <Button
                                    disabled={isSubmitting}
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
            <LightBoxModal visible={modalVisible} onClick={(e) => popup(e)} className="modal-overlay">
                <LightBoxContent style={{pointerEvents: "all"}} class={modalClases.join(" ")}>
                    <Flex>
                        {!success && (
                            <Column width={100}>
                                <ImageWrapper>
                                    <Image filename="icon-160-order-number-4509" alt="" />
                                </ImageWrapper>
                                <Heading size={4} bottomMargin={16}>Help is on the way</Heading>
                                <Paragraph bottomMargin={24}>Your order number will be sent to this address.</Paragraph>
                                <div style={{width: "100%"}}>
                                    <Label content={{ label: "Email" }} />
                                    <Input type="email" inputRef={inputRef} onChange={changeValidationFromChange} required />
                                    <Paragraph topMargin={4} bottomMargin={32} mixed>{validation}</Paragraph>
                                </div>
                                <Button theme="primary56" arrow onClick={() => handleRequest()} content={{ text: "Submit" }} />
                                <Circle circleColor={color.orange3} width={32} height={32} theme="normal" onClick={() => setModalVisible(false)} className="modal-close">
                                    <ExSVG />
                                </Circle>
                            </Column>
                        )}
                        {success && (
                            <Column width={100}>
                                <ImageWrapper>
                                    <Image filename="icon-160-order-number-4509" alt="" />
                                </ImageWrapper>
                                <Heading size={4} bottomMargin={16}>Done!</Heading>
                                <Paragraph bottomMargin={32}>{success}</Paragraph>
                                <Button theme="primary56" arrow onClick={() => setModalVisible(false)} content={{ text: "Close" }} />
                                <Circle circleColor={color.orange3} width={32} height={32} theme="normal" onClick={() => setModalVisible(false)} className="modal-close">
                                    <ExSVG />
                                </Circle>
                            </Column>
                        )}
                    </Flex>
                </LightBoxContent>
            </LightBoxModal>
        </Wrapper>
    );
};

export default SupportForm;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Column = styled.div`
    width: 100%;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    // @media (min-width: 768px) {
    //     position: relative;
    // }
    
    text-align: center;
    
    &.image-col {
        display: flex;
        justify-content: center;
        
        .gatsby-image-wrapper {
            min-height: 200px;
            width: 100%;
        }
    }
    
    @media (min-width: 768px) {
        margin-bottom: 0;
        text-align: initial;
        width: ${props => props?.width ?? 50}%;
    }
    
    .modal-close {
        position: absolute;
        z-index: 10;
        right: 16px;
        top: 16px;
        pointer-events: all;
        cursor: pointer;
        
        @media (min-width: 768px) {
            right: 16px;
            top: 16px;
        }
    }
`;

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

const ImageWrapper = styled.div`
    position: absolute;
    top: -80px;
    margin-left: 0 auto;
    width: 160px;
    height: 160px;
    
    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }
`;

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