import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FormSection from "./form-section";

const FormContent = ({columns, children, paddingLeft, paddingRight, paddingTop, paddingBottom}) => (
    <Wrapper columns={columns} paddingLeft={paddingLeft} paddingRight={paddingRight} paddingTop={paddingTop} paddingBottom={paddingBottom}>
        {children}
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: ${props => props.paddingTop}px;
    padding-left: ${props => props.paddingLeft}px;
    padding-right: ${props => props.paddingRight}px;
    padding-bottom: ${props => props.paddingBottom}px;
    display: grid;
    column-gap: 30px;
    row-gap: 30px;
    justify-content: center;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    grid-template-rows: [row] auto [row] auto [row];
`;

FormContent.propTypes = {
    columns: PropTypes.number,
    paddingLeft: PropTypes.number,
    paddingRight: PropTypes.number,
    paddingTop: PropTypes.number,
    paddingBottom: PropTypes.number
}

FormContent.defaultProps = {
    columns: 6,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 32,
    paddingBottom: 0
}

export default FormContent;
