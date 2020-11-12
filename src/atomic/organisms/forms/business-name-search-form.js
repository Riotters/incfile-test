import React, { useRef } from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import Label from "../../molecules/form/label-field-with-child";
import Input from "../../atoms/inputs/input";
import Dropdown from "../../molecules/form/dropdown";
import Radio from "../../molecules/form/radio-v2";
import Button from "../../molecules/buttons/button-action";
import ArrowLink from "../../molecules/buttons/text";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/top-left-bottom-right.inline.svg";
import { states } from "../../../components/states";
import { ThankYouContent } from "../../../components/hubspot/thank-you-modal";
import { useForm, Controller } from 'react-hook-form';

// API 
import { postHSForm } from '../../../api/Api';
import { validEmail } from '../../../helpers/form-validate';

const Wrapper = styled(Whitebox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${props => props.noMaxWidth ? "" : "max-width: 570px;"}
  padding: 40px;
  position: relative;

  .curve-shape {
    svg {
      transform: scale(-1);
    }
  }
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 769px) {
        flex-flow: column;
    }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  width: 100%;
  
  @media(min-width: 769px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }

  .Dropdown-root {
    min-width: 50px;
  }
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 16px;

  a {
    font-size: 16px;
    line-height: 24px;
  }
`;

const dropdownStates = states.state.map((state) => state.name);

const BusinessNameSearchForm = ({ className, noMaxWidth, propState, propEntityName, curvePosition, curveColor, curveRotate }) => {
    const stateRef = useRef();
    const [businessNameInState, setBusinessNameState] = React.useState(propState || '');
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalClases, setModalClases] = React.useState(['lightbox-content']);
    const [submittedData, setSubmittedData] = React.useState({});
    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

    const { register, reset, handleSubmit, control, errors, formState, setValue } = useForm({
        defaultValues: {
            business_name_search_state: businessNameInState
        }
    });
    const { isSubmitting, isSubmitSuccessful } = formState;
  
    const handleForm = data => {
        const formData = new FormData();
        formData.set('pageTitle', document.title);
        formData.set('pageUrl', pageUrl);
        formData.set('hs_form_id', '9b2dac2c-1122-4c12-9204-0cbebeea6ed6');

        Object.keys(data).forEach(i => {
            return formData.set(i, data[i]);
        });
    
        postHSForm(formData)
            .then(json => {
                setSubmittedData(data);
            });
        
        //form.reset();
        setModalClases((modalClases) => [...modalClases, "form-submitted"]);
        setModalVisible(!modalVisible);
        if (!propState) setBusinessNameState('');
    }

    React.useEffect(() => {
        if (isSubmitSuccessful) {
          reset({ ...submittedData });
        }
      }, [isSubmitSuccessful, submittedData, reset]);

    const popup = (e) => {
        e.preventDefault();
        if (!e.target.className.includes("modal-overlay") && !e.target.className.includes("modal-close") && modalVisible === true) return;
    
        setModalVisible(!modalVisible);
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleForm)}>
                <Wrapper className={className} noMaxWidth={noMaxWidth}>
                    {curvePosition === 'bottomRight' &&
                        <Curve bottom="-25" right="-29" color={curveColor ?? color.orange1} rotate={curveRotate ?? 0}>
                            <CurveSVG />
                        </Curve>
                    }

                    {(!curvePosition || curvePosition === 'bottomLeft') &&
                        <Curve className="curve-shape" bottom="-25" left="-29" color={curveColor ?? color.orange1}>
                            <CurveSVG />
                        </Curve>
                    }

                    <Heading size="5" bottomMargin="16"> Please enter the business name information</Heading>
                    <Label htmlFor="entity_name" content={{ label: `Entity Name` }} bottomMargin="24">
                        <Input
                            className={errors.entity_name ? 'invalid' : ''}
                            placeholder="Enter your desired company name..."
                            value={propEntityName}
                            name="entity_name"
                            id="entity_name"
                            inputRef={register({
                                required: `Field can't be empty`
                            })}
                        />
                        {errors.entity_name && (
                            <span className="error__info">{errors.entity_name.message}</span>
                        )}
                    </Label>
            
                    <Flex>
                        <Label htmlFor="type" content={{ label: `Entity Type` }} bottomMargin="16" bottomDirection="bottom row">
                            <Radio content="LLC" checked name="entity_type" id="bns-llc" value="LLC" inputRef={register({required: `Please select Entity Type`})} />
                            <Radio content="Corporation" name="entity_type" id="bns-corp" value="Corporation" inputRef={register({required: `Please select Entity Type`})} />
                        </Label>
                        <LinkWrapper>
                            <ArrowLink content={{ text: `Not Sure?`, url: `/business-entity-comparison/` }} bottomMargin="0" />
                        </LinkWrapper>
                    </Flex>
                    <Label className={propState ? 'hide' : ''} htmlFor="business_name_search_state" content={{ label: `Entity State` }} bottomMargin="32">
                        <Controller
                            control={control}
                            name="business_name_search_state"
                            rules={{ required: `Field can't be empty` }}
                            onFocus = {() => stateRef.current?.focus()}
                            render={() => (
                                <Dropdown
                                    inputRef={stateRef}
                                    className={errors.business_name_search_state ? 'invalid' : ''}
                                    defaultSelected={businessNameInState}
                                    options={dropdownStates}
                                    onChange={option => {
                                        setValue('business_name_search_state', option.value, { shouldValidate: true })
                                    }}
                                    placeholder="Select"
                                />
                            )}
                        />
                        {errors.business_name_search_state && (
                            <span className="error__info">{errors.business_name_search_state.message}</span>
                        )}
                    </Label>

                    <Heading size="5" bottomMargin="16"> Let us know where we can let you know if your business name is available</Heading>
                    <Grid>
                        <Label htmlFor="first-name" content={{ label: `First Name` }} bottomMargin="32">
                            <Input
                                className={errors.firstname ? 'invalid' : ''}
                                name="firstname"
                                id="first-name"
                                inputRef={register({ required: `Field can't be empty` })}
                            />
                            {errors.firstname && (
                                <span className="error__info">{errors.firstname.message}</span>
                            )}
                        </Label>
                        <Label htmlFor="last-name" content={{ label: `Last Name` }} bottomMargin="32">
                            <Input
                                className={errors.firstname ? 'invalid' : ''}
                                name="lastname"
                                id="last-name"
                                inputRef={register({ required: `Field can't be empty` })}
                            />
                            {errors.lastname && (
                                <span className="error__info">{errors.lastname.message}</span>
                            )}
                        </Label>
                    </Grid>
                
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

                    <Button type="submit" content={{ text: isSubmitting ? `Processing...` : `Check Name Avaliability` }} theme="primary56" marginSM="48px auto 0" />
                </Wrapper>
            </form>

            <LightBoxModal visible={modalVisible} className="modal-overlay">
                <LightBoxContent style={{ pointerEvents: "all" }} class={modalClases.join(" ")}>
                    <ThankYouContent isBusinesNameSearch={true} modalExit={popup} />
                </LightBoxContent>
            </LightBoxModal>
        </>
    );
};

export default BusinessNameSearchForm;

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
  transition: height 0.5s, max-width 0.5s;

  background-color: #fff;
  width: 100%;
  max-width: 750px;
  position: relative;
  margin: 0 30px;
  max-height: 100vh;
  overflow-y: auto;

  &.form-submitted {
    height: 40vh;
    max-width: 500px;
  }

  @media screen and (min-width: 769px) {
    max-width: 600px;
    padding-top: 0;
    overflow-y: visible;
  }
`;
