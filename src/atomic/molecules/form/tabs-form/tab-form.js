import React, {useState} from "react";
import styled from "styled-components";
import RadioWrapper from "./radio-wrapper";
import PropTypes from "prop-types";

const TabForm = ({onClick, value, buttons, children}) => {

    return (
        <Wrapper>
            <RadioWrapper columns={2} onClick={onClick} value={value} buttons={buttons}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    padding: 32px 32px 0 32px;
`;

TabForm.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    buttons: PropTypes.array.isRequired
};

export default TabForm;
