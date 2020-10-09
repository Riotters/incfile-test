import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HeaderForm from "./header-form";

const FormSection = ({children, title, icon}) => (
    <Wrapper>
        <HeaderForm title={title} Icon={icon} />
        {children}
    </Wrapper>
);

const Wrapper = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
    margin-bottom: 32px;
    padding-bottom: 32px;
`;

FormSection.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
}

export default FormSection;
