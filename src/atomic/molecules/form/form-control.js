import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FormControl = ({children, column}) => (
    <Wrapper column={column}>
        {children}
    </Wrapper>
);

const Label = styled.label`
  color: #7A7A7A;
  font-family: Avenir;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  padding-bottom: 4px;
`;

const Wrapper = styled.div`
    margin-top: 32px;
    width: calc(100% / ${props => props.column});
    padding-left: 15px;
    padding-right: 15px;
`;

FormControl.propTypes = {
    column: PropTypes.number
}

FormControl.defaultProps = {
    column: 1
}

export default FormControl;
