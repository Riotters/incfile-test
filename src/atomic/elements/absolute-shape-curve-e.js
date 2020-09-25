import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    transform: rotate(${props => (props.rotate ? props.rotate : "0")}deg);
    ${props => props.right && `right: ${props.right};`}
    ${props => props.top && `top: ${props.top};`}
    ${props => props.left && `left: ${props.left};`}
    ${props => props.bottom && `bottom: ${props.bottom};`}
`

const AbsoluteShapeCurveElement = ({children, ...rest}) => (
    <Wrapper {...rest}>
        {children}
    </Wrapper>
)

export default AbsoluteShapeCurveElement;