import React from "react";
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
// API 
import { postHSForm } from '../../../api/Api';

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

const BusinessNameSearchForm = ({ className, content, noMaxWidth, propState }) => {
    const [businessNameInState, setBusinessNameState] = React.useState(propState);
    const [entityType, setEntityType] = React.useState('LLC');
    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        
        if (!form.checkValidity()) {
            return false;
        }

        const formData = new FormData(form);
        formData.set('business_name_search_state', businessNameInState);
        formData.set('entity_type', entityType);
        formData.set('pageTitle', document.title);
        formData.set('pageUrl', pageUrl);
    
        postHSForm(formData)
            .then(json => {
                form.reset();
            });
    }

    return (
        <form noValidate onSubmit={handleForm}>
            <input type="hidden" name="hs_form_id" value="9b2dac2c-1122-4c12-9204-0cbebeea6ed6" />
            <Wrapper className={className} noMaxWidth={noMaxWidth}>
                {(content.hasOwnProperty("noFullName") && content.noFullName === true) && (
                    <Curve top="-25" right="-29" color={color.orange1} rotate={0}>
                        <CurveSVG />
                    </Curve>
                )}
                {(!content.hasOwnProperty("noFullName") || content.noFullName === false) && (
                    <Curve className="curve-shape" bottom="-25" left="-29" color={color.orange1}>
                        <CurveSVG />
                    </Curve>
                )}
                <Heading size="5" bottomMargin="16">
                    Please enter the business name information
            </Heading>
                <Label htmlFor="entity_name" content={{ label: `Entity Name` }} bottomMargin="24">
                    <Input placeholder="Enter your desired company name..." name="entity_name" id="entity_name" required />
                </Label>
            
                <Flex>
                    <Label htmlFor="type" content={{ label: `Entity Type` }} bottomMargin="16">
                        <Radio content="LLC" checked name="entity_type" id="bns-llc" value="LLC" onClick={e => setEntityType(e.target.value)} />
                        <Radio content="Corporation" name="entity_type" id="bns-corp" value="Corporation" onClick={e => setEntityType(e.target.value)} />
                    </Label>
                    <LinkWrapper>
                        <ArrowLink content={{ text: `Not Sure?`, url: `/business-entity-comparison/` }} bottomMargin="0" />
                    </LinkWrapper>
                </Flex>
                {!propState &&
                    <Label htmlFor="business_name_search_state" content={{ label: `Entity State` }} bottomMargin="32">
                        <Dropdown
                            options={dropdownStates}
                            name="business_name_search_state"
                            id="business_name_search_state"
                            required
                            onChange={option => setBusinessNameState(option.value)}
                            placeholder="Select"
                        />
                    </Label>
                }

                <Heading size="5" bottomMargin="16">
                    Where we can let you about your business name?
                </Heading>
                <Grid>
                    <Label htmlFor="first-name" content={{ label: `First Name` }} bottomMargin="32">
                        <Input name="firstname" id="first-name" required />
                    </Label>
                    <Label htmlFor="last-name" content={{ label: `Last Name` }} bottomMargin="32">
                        <Input name="lastname" id="last-name" required />
                    </Label>
                </Grid>
                
                <Label htmlFor="email" content={{ label: `Email` }} bottomMargin="32">
                    <Input type="email" name="email" id="email" required />
                </Label>

                <Button type="submit" content={{ text: `Check Name Avaliability` }} theme="primary56" marginSM="48px auto 0" />
            </Wrapper>
        </form>
    );
};

export default BusinessNameSearchForm;
