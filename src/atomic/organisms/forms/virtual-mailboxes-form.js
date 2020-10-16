import React, {useState} from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import { Heading } from "../../atoms/typography/heading";
import Dropdown from "../../molecules/form/dropdown";
import Button from "../../molecules/buttons/button";
import { navigate } from "gatsby";

const Wrapper = styled(Whitebox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 570px;
  padding: 40px;
  position: relative;
`;

const states = [
    { value: 'Arizona', label: `Arizona`},
    { value: 'California', label: `California`},
    { value: 'Colorado', label: `Colorado`},
    { value: 'Delaware', label: `Delaware`},
    { value: 'Florida', label: `Florida`},
    { value: 'Georgia', label: `Georgia`},
    { value: 'Illinois', label: `Illinois`},
    { value: 'Massachusetts', label: `Massachusetts`},
    { value: 'New Jersey', label: `New Jersey`},
    { value: 'New Mexico', label: `New Mexico`},
    { value: 'New York', label: `New York`},
    { value: 'Nevada', label: `Nevada`},
    { value: 'North Carolina', label: `North Carolina`},
    { value: 'Ohio', label: `Ohio`},
    { value: 'Oregon', label: `Oregon`},
    { value: 'Pennsylvania', label: `Pennsylvania`},
    { value: 'South Carolina', label: `South Carolina`},
    { value: 'South Dakota', label: `South Dakota`},
    { value: 'Texas', label: `Texas`},
    { value: 'Utah', label: `Utah` },
    { value: 'Virginia', label: `Virginia`},
    { value: 'Washington', label: `Washington`},
];

const AmendmentForm = ({ className, content }) => {
    const [stateSelected, setStateSelected] = useState('');

    const handleOpenVTURL = (e) => {
        e.preventDefault();
        
        if (!stateSelected) {
            return;
        }
        console.log(stateSelected);
        if (typeof window !== 'undefined') {
            let state = stateSelected.toLowerCase().replace(' ', '-');
            navigate(`/${state}-virtual-mailbox/`);
        }
    }

    return (
        <Wrapper className={className}>
            { content.header && 
                <Heading size="5" bottomMargin="31" style={{"text-align": "center", "margin-top": "24px"}}>
                    {content.header}
                </Heading>
            }
            <Dropdown label={content.field.label} options={states} onChange={option => setStateSelected(option.value)} />
            <Button content={content.button} theme="primary56" arrow marginSM="64px auto 8px" onClick={e => handleOpenVTURL(e)} />
        </Wrapper>
    );
};

export default AmendmentForm;
