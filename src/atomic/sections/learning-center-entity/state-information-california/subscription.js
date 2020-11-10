import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { color, gradient } from "../../../atoms/styles/colors";
import TextImage from "../../../partials/left-content-right-image";
import Button from "../../../molecules/buttons/button-action";
import Input from "../../../molecules/form/input-field";
import { Heading } from "../../../atoms/typography/heading";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-orange-transparent.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";
import { validEmail } from "../../../../helpers/form-validate";
import { postHSForm } from '../../../../api/Api';

const Subscription = styled.form`
  position: relative;
  background-color: ${color.orange3};
  padding-top: 64px;
  padding-bottom: 64px;
  overflow: hidden;

  @media (min-width: 992px) {
    padding-bottom: 64px;
  }
`;

const Flex = styled.div`
  display: flex;

  .subscription-input {
    flex-grow: 1;
    margin-right: 30px;
  }
`;

const SubscriptionSection = ({ className, content }) => {
    const { register, errors, reset, handleSubmit, formState } = useForm();
    const { isSubmitting, isSubmitSuccessful } = formState;

    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    const [submittedData, setSubmittedData] = React.useState({});

    const signupNewsletter = data => {
        const formData = new FormData();
        formData.set('pageTitle', document.title);
        formData.set('pageUrl', pageUrl);
        formData.set('hs_form_id', '9b0b3b59-46d3-45c2-aae0-dc4897883b3d');
        formData.set('lifecyclestage', 'subscriber');

        Object.keys(data).forEach(i => {
            return formData.set(i, data[i]);
        });

        postHSForm(formData)
            .then(json => {
                setSubmittedData(data);
            });
        
        // Fire GA Tracking
        if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'newsletterSignupFormSubmission'
            });
        }
        
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
        <Subscription className={className} onSubmit={handleSubmit(signupNewsletter)}>
            <Oval className="oval" height="420" width="420" top="0" left="0">
                <OvalSVG />
            </Oval>
            <Oval className="oval" height="570" width="570" bottom="-5" right="-10">
                <Oval2SVG />
            </Oval>
            <TextImage image="subscribe-now-3233" contentWidth="550" contentPadding="85">
                <Curve top="10" left="-100" color={color.orange2}>
                    <CurveSVG />
                </Curve>
                <Heading size="2" bottomMargin="48">
                    {content.header}
                </Heading>
                <Flex>
                    <Input
                        class={errors.email ? 'invalid' : ''}
                        className="subscription-input"
                        placeholder="Your email"
                        name="email"
                        inputRef={register({
                            required: true,
                            validate: value => validEmail(value) || `Email is not valid`
                        })}
                    />
                    <Button disabled={isSubmitting} content={content.button} theme="primary48" arrow />
                </Flex>
            </TextImage>
        </Subscription>
    );
};

export default SubscriptionSection;
