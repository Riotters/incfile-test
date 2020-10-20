import React, {useRef } from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import Label from "../../molecules/form/label-field-with-child";
import Input from "../../atoms/inputs/input";
import Dropdown from "../../molecules/form/dropdown";
import ButtonAction from "../../molecules/buttons/button-action";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/top-left-bottom-right.inline.svg";
import { ThankYouContent } from "../../../atomic/partials/thank-you-modal-content";

import { _phoneFormat } from '../../../helpers/input-parsers';

const Wrapper = styled(Whitebox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 570px;
  padding: 40px;
  position: relative;

  .curve-shape {
    svg {
      transform: scale(-1);
    }
  }
`;

const LightBoxModal = styled.div`
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
 transition: height 0.5s, max-width .5s;

  background-color: #fff;
  width: 100%;
  max-width: 960px;
  position: relative;
  margin: 0 30px;
  max-height: 100vh;
  overflow-y: auto;
  @media screen and (min-width: 769px) {
    height: 95vh;
    padding-top: 0;
    overflow-y: visible;
  }
  
  &.form-submitted {
    height: 40vh;
    max-width: 500px;
  }
`;

export const thanks_form = {
    header: "Thanks for submitting the form.",
    text: "A link download was sent to your email. Please check your inbox.",
    button: {
      text: "Close",
      url: "#"
    }
  };

const BusinessNameSearchForm = ({ className, content }) => {
    const [intentPath, setIntentPath] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

    const HandleForm = (e) => {
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
                setModalVisible(true);
                setFormSubmitted(true);
            });
    }

    const popup = (e) => {
        e.preventDefault();

        if (!e.target.className.includes("modal-overlay") && !e.target.className.includes("modal-close") &&
            modalVisible === true)
            return;

        setModalVisible(!modalVisible)
    }

    const handlePhoneChange = (e) => {
        let formatPhone = _phoneFormat(e.target.value);
        setPhoneNumber(formatPhone);
    }

    let modalClases = ["lightbox-content"];
    if (formSubmitted) modalClases.push("form-submitted");

    return (
        <Wrapper className={className}>
            <Curve className="curve-shape" bottom="-25" left="-29" color={color.blue1}>
                <CurveSVG />
            </Curve>
            <form onSubmit={HandleForm} noValidate>
                <input type="hidden" name="hs_form_id" value="42fd5e33-a7fc-4758-aaed-00a5cd6483b4" />
                <Heading size="5" bottomMargin="16">
                    {content.header}
                </Heading>
                <Label htmlFor="email" content={content.field} bottomMargin="16">
                    <Input type="email" name="email" id="email" required />
                </Label>
                <Label htmlFor="first-name" content={content.field2} bottomMargin="16">
                    <Input name="firstname" id="first-name" required  />
                </Label>
                <Label htmlFor="last-name" content={content.field3} bottomMargin="16">
                    <Input name="lastname" id="last-name" required />
                </Label>
                <Label htmlFor="phone" content={content.field4} bottomMargin="16">
                    <Input name="phone" id="phone" value={phoneNumber} pattern="\d{3}-\d{3}-\d{4}" onChange={e => handlePhoneChange(e)} required />
                </Label>
                <Label htmlFor="intent_path" content={content.field5} bottomMargin="32">
                    <Dropdown
                        name="intent_path"
                        id="intent_path"
                        required
                        options={content.dropdown}
                        onChange={option => setIntentPath(option.value)}
                        placeholder="Please select"
                    />
                </Label>
                <ButtonAction content={content.button} type="submit" theme="primary56" arrow marginSM="0 auto"/>
            </form>

            <LightBoxModal visible={modalVisible} onClick={popup} className="modal-overlay">
                <LightBoxContent style={{ pointerEvents: "all" }} class={modalClases.join(" ")}>
                    <ThankYouContent content={thanks_form} modalExit={popup} />
                </LightBoxContent>
            </LightBoxModal>
        </Wrapper>
    );
};

export default BusinessNameSearchForm;
