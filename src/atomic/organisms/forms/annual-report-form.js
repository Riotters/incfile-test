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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  width: 100%;

  .Dropdown-root {
    min-width: 50px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
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
    const [formationDay, setFormationDay] = React.useState('');
    const [formationMonth, setFormationMonth] = React.useState('');
    const [formationYear, setFormationYear] = React.useState('');
    const [entityType, setEntityType] = React.useState('');
    const [companyName, setCompName] = React.useState('');
    const [entityState, setEntityState] = React.useState('');

    const handleForm = e => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('formationDay', formationDay);
        formData.append('formationMonth', formationMonth);
        formData.append('formationYear', formationYear);
        formData.append('entityType', entityType);
        formData.append('companyName', companyName);
        formData.append('isForeign', 0);
        formData.append('entityState', entityState);
        formData.append('ongoingRequirement', 1);

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
            <Label htmlFor="company" content={content.field} bottomMargin="24">
                <Input placeholder="Company name" onChange={e => setCompName(e.target.value)} />
            </Label>
            <Label htmlFor="state" content={content.field2} bottomMargin="16">
                <Dropdown options={stateList} placeholder="Select" onChange={option => setEntityState(option.value)} />
            </Label>
            <Label htmlFor="state" content={{ label: `Select Entity Type*` }} bottomMargin="16">
                <Dropdown options={entityList} placeholder="Select" onChange={option => setEntityType(option.value)} />
            </Label>
            <Label htmlFor="date" content={content.field4}>
                <Grid>
                    <Dropdown name="formationMonth" options={monthList} placeholder="Month" onChange={option => setFormationMonth(option.value)} />
                    <Dropdown name="formationDay" options={dayList} placeholder="Day" onChange={option => setFormationDay(option.value)} />
                    <Dropdown name="formationYear" options={yearList} placeholder="Year" onChange={option => setFormationYear(option.value)} />
                </Grid>
            </Label>
            <Button content={content.button} onClick={e => handleForm(e)} theme="primary56" arrow marginSM="32px auto 0" />
        </Wrapper>
    );
};

export default AnnualReportForm;
