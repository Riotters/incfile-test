import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../partials/heading-center";
import ContentCenter from "../../partials/content-center";
import Oval from "../../atoms/icons/oval";
import OvalSVG from "../../../images/ovals/bottom-left-transparent-orange3.inline.svg";
import OvalSVG2 from "../../../images/ovals/top-right-transparent-babyblue1.inline.svg";
import OvalSVG3 from "../../../images/ovals/top-left-transparent-babyblue1.inline.svg";
import FormControl from "../../molecules/form/form-control";
import Row from "../../molecules/helpers/row";
import InputField from "../../molecules/form/input-field";
import Button from "../../molecules/buttons/button-action";
import { ThankYouContent } from "../../../components/hubspot/thank-you-modal";
import { submitContactForm } from '../../../api/Api';
import { _phoneFormat } from '../../../helpers/input-parsers';


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

const SupportForm = ({ className, content, isNewSale, id }) => {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [formSubmitted, setFormSubmitted] = React.useState(false);

    const handleForm = e => {
        e.preventDefault();
        const form = e.target;

        if (!form.checkValidity()) {
            return false;
        }

        const formData = new FormData(form);
        
        submitContactForm(formData).then(data => {
            // Do sth
        });

        form.reset();
        setPhoneNumber('');
        setFormSubmitted(true);

        //Fire GTM dataLayer
        if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'ContactUsFormSubmission'
            });
        }
    }

    const handlePhoneChange = (e) => {
        let formatPhone = _phoneFormat(e.target.value);
        setPhoneNumber(formatPhone);
    }

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

            {formSubmitted
                ? <HeadingCenter className="heading" headline={`Thank you for submission`} headlineWidth="770" />
                :
                <>
                    <HeadingCenter
                        className="heading"
                        headline={`Client Support Request`}
                        headlineWidth="770"
                        text={`Please provide contact information`}
                    />
        
                    <ContentCenter>
                        <FormContent noValidate onSubmit={handleForm}>
                            <Row>
                                <FormControl column={2} style={{ marginBottom: `16px` }}>
                                    <InputField label="Name *" name="name" isRequired={true} />
                                </FormControl>

                                <FormControl column={2} style={{ marginBottom: `16px` }}>
                                    <InputField label="Email Address *" name="email" type="email" isRequired={true} />
                                </FormControl>
                            </Row>
                            <Row>
                                <FormControl column={2} style={{ marginBottom: `16px` }}>
                                    <InputField label="Phone Number (optional)" name="phone" value={phoneNumber} pattern="\d{3}-\d{3}-\d{4}" onChange={e => handlePhoneChange(e)} />
                                </FormControl>

                                {!isNewSale && (
                                    <FormControl column={2} style={{ marginBottom: `16px` }}>
                                        <InputField label="Order Number *" isRequired={true} name="ordernum" />
                                    </FormControl>
                                )}
                            </Row>
                            <Row>
                                <FormControl column={1} style={{ marginBottom: `16px` }}>
                                    <InputField label="Your Message *" isRequired={true} name="message" />
                                </FormControl>
                            </Row>

                            <AlignCenter>
                                <Button type="submit" theme="primary56" width="160px" content={{ text: `Submit`, url: `#` }} />
                            </AlignCenter>
                        </FormContent>
                    </ContentCenter>
                </>
            }
        </Wrapper>
    );
};

export default SupportForm;