import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const HeadingWrapper = styled.div`
    margin-bottom: ${props => props.bottomSpace}px;
`;

export const Heading = ({size, children, bottomSpace, className, style}) => (
    <HeadingWrapper as={`h${size}`} bottomSpace={bottomSpace} className={className} style={style}>
        {children}
    </HeadingWrapper>
);

Heading.propTypes = {
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    children: PropTypes.any,
    bottomSpace: PropTypes.number
};

Heading.defaultProps = {
    size: 1,
    bottomSpace: `25`
}
