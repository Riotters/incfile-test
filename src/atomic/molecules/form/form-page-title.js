import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Heading} from "../../atoms/typography/heading";

const FormPageTitle = ({ title, hasInfoBox, infoBoxText }) => (
    <Header>
        <Heading size={2} style={{fontSize: "24px", lineHeight: "29px", textAlign: "left"}}>{title}</Heading>
    </Header>
);

const Header = styled.header`
    display: block;
    width: 100%;
    margin-bottom: 48px;
`;

FormPageTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default FormPageTitle;
