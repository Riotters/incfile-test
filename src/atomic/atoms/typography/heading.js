import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const HeadingWrapper = styled.div`
    margin-bottom: ${props => props.bottomSpace}px;
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : ""};
`;

export const Heading = ({size, children, bottomSpace, maxWidth, className, style}) => (
    <HeadingWrapper as={`h${size}`} bottomSpace={bottomSpace} maxWidth={maxWidth} className={className} style={style}>
        {children}
    </HeadingWrapper>
);

Heading.propTypes = {
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    children: PropTypes.any,
    bottomSpace: PropTypes.number,
    maxWidth: PropTypes.number
};

Heading.defaultProps = {
    size: 1,
    bottomSpace: `25`,
}
