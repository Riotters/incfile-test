import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const HeadingWrapper = styled.div``;

export const Heading = ({size, children}) => (
    <HeadingWrapper as={`h${size}`}>
        {children}
    </HeadingWrapper>
);

Heading.propTypes = {
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    children: PropTypes.any
};

Heading.defaultProps = {
    size: 1
}
