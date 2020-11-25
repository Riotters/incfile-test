import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import Label from "../../molecules/form/label-field-with-child";
import Input from "../../atoms/inputs/input";
import Dropdown from "../../molecules/form/dropdown";
import Button from "../../molecules/buttons/button-action";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/top-left-bottom-right.inline.svg";
import { states } from "../../../components/states";

import { useForm, Controller } from "react-hook-form";

const entityList = ['LLC', 'SCorporation', 'CCorporation', 'Nonprofit'];
const stateList = states.state.map((state) => state.name);
const monthList = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
];

const dayList = [];
for (let index = 1; index <= 31; index++) {
    let day = index < 10 ? `0${index}` : `${index}`;
    dayList.push(day);
}

const yearList = [];
const d = new Date();
const currentYear = d.getFullYear();
for (let year = currentYear; year > 1980; year--) {
    yearList.push(year);
}

const AnnualReportForm = ({ className, content, checkDueDate }) => {
    const { register, reset, handleSubmit, control, errors, formState, setValue } = useForm({
        defaultValues: {
            entityType: '',
            entityState: '',
            formationYear: '',
            formationDay: '',
            formationMonth: ''
        }
    });
    const { isSubmitting, isSubmitSuccessful } = formState;

    const { monthRef, yearRef, dayRef, entityTypeRef, stateRef } = React.useRef();

    const handleForm = data => {
 
        const formData = new FormData();
        formData.append('isForeign', 0);
        formData.append('ongoingRequirement', 1);

        Object.keys(data).forEach(i => {
            return formData.set(i, data[i]);
        });

        checkDueDate(formData);
    }

    return (
        <Wrapper className={className}>
            <Curve className="curve-shape" bottom="-25" left="-29" color={color.orange1}>
                <CurveSVG />
            </Curve>
            <Heading size="5" bottomMargin="16">
                {content.header}
            </Heading>
            <form onSubmit={handleSubmit(handleForm)}>
                <Label htmlFor="company" content={content.field} bottomMargin="24">
                    <Input placeholder="Company name" name="companyName"
                        className={errors.firstname ? 'invalid' : ''}
                        inputRef={register({ required: `Field can't be empty` })}
                    />
                    {errors.companyName && (
                        <span className="error__info">{errors.companyName.message}</span>
                    )}
                </Label>

                <Label htmlFor="state" content={content.field2} bottomMargin="16">
                    <Controller
                        control={control}
                        name="entityState"
                        rules={{ required: `Field can't be empty` }}
                        onFocus={() => stateRef.current?.focus()}
                        render={() => (
                            <Dropdown
                                inputRef={stateRef}
                                className={errors.entityState ? 'invalid' : ''}
                                options={stateList}
                                onChange={option => {
                                    setValue('entityState', option.value, { shouldValidate: true })
                                }}
                                placeholder="Select"
                            />
                        )}
                    />
                    {errors.entityState && (
                        <span className="error__info">{errors.entityState.message}</span>
                    )}

                </Label>
                <Label htmlFor="state" content={{ label: `Select Entity Type*` }} bottomMargin="16">
                    <Controller
                        control={control}
                        name="entityType"
                        rules={{ required: `Field can't be empty` }}
                        onFocus={() => entityTypeRef.current?.focus()}
                        render={() => (
                            <Dropdown
                                inputRef={entityTypeRef}
                                className={errors.entityType ? 'invalid' : ''}
                                options={entityList}
                                onChange={option => {
                                    setValue('entityType', option.value, { shouldValidate: true })
                                }}
                                placeholder="Select"
                            />
                        )}
                    />
                    {errors.entityType && (
                        <span className="error__info">{errors.entityType.message}</span>
                    )}
                </Label>
                <Label htmlFor="date" content={content.field4}>
                    <Grid>
                        <Controller
                            control={control}
                            name="formationMonth"
                            rules={{ required: `Field can't be empty` }}
                            onFocus={() => monthRef.current?.focus()}
                            render={() => (
                                <Dropdown
                                    inputRef={monthRef}
                                    className={errors.formationMonth ? 'invalid' : ''}
                                    options={monthList}
                                    onChange={option => {
                                        setValue('formationMonth', option.value, { shouldValidate: true })
                                    }}
                                    placeholder="Month"
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="formationDay"
                            rules={{ required: `Field can't be empty` }}
                            onFocus={() => dayRef.current?.focus()}
                            render={() => (
                                <Dropdown
                                    inputRef={dayRef}
                                    className={errors.formationDay ? 'invalid' : ''}
                                    options={dayList}
                                    onChange={option => {
                                        setValue('formationDay', option.value, { shouldValidate: true })
                                    }}
                                    placeholder="Day"
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="formationYear"
                            rules={{ required: `Field can't be empty` }}
                            onFocus={() => yearRef.current?.focus()}
                            render={() => (
                                <Dropdown
                                    inputRef={yearRef}
                                    className={errors.formationYear ? 'invalid' : ''}
                                    options={yearList}
                                    onChange={option => {
                                        setValue('formationYear', option.value, { shouldValidate: true })
                                    }}
                                    placeholder="Year"
                                />
                            )}
                        />
    
                    </Grid>
                </Label>
                <Button disabled={isSubmitting} content={content.button} theme="primary56" arrow margin="17px 0 0" marginSM="32px auto 0" />
            </form>
        </Wrapper>
    );
};

export default AnnualReportForm;

const Wrapper = styled(Whitebox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 570px;
  padding: 40px;
  position: relative;
  
  @media (max-width: 575px) {
    .Dropdown-root {
        min-width: unset;
    }
  }

  .curve-shape {
    svg {
      transform: scale(-1);
    }
  }
`;
const Grid = styled.div`
  width: 100%;
  
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
  }

  .Dropdown-root {
    min-width: 50px;
    
    @media (max-width: 575px) {
        margin-bottom: 15px;
        margin-right: 0;
    }
  }
`;