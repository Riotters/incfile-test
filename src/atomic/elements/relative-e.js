import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    margin: ${props => (props.margin ? props.margin : 0)};
    padding: ${props => (props.padding ? props.padding : 0)};
    width: 100%;
    ${props => props.maxWidth && `max-width: ${props.maxWidth};`}
`

const RelativeElement = ({children, ...rest}) => (
    <Wrapper {...rest}>
        {children}
    </Wrapper>
)

export default RelativeElement