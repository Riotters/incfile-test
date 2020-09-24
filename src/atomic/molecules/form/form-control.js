import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FormControl = ({children, span}) => (
    <Wrapper span={span}>
        {children}
    </Wrapper>
);

const Wrapper = styled.div`
    width: 100%;
    ${({row}) => row && `grid-row: ${row}`}
    ${({span}) => span && `grid-column: span ${span}`}
`;

FormControl.propTypes = {
    span: PropTypes.number
}

FormControl.defaultProps = {
    span: 2
}

export default FormControl;
