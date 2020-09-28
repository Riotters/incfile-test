import React from "react";
import styled from "styled-components";

const FormTabContent = ({children, identifier, activeValue, arrowPosition}) => {
    return(
        <Wrapper arrowPosition={arrowPosition} className={(activeValue === identifier) ? "active" : ""}>
            {children}
        </Wrapper>
    )
};

const Wrapper = styled.div`
    background-color: #fcfcfc;
    border-radius: 5px;
    border: 1px solid #fd8550;
    padding-bottom: 32px;
    margin: 32px 32px 0 32px;
    display: none;
    transition: all 0.3s ease-in-out;
    position: relative;
    
    &.active {
        display: block;
    }
    
    &:before{
        content: "";
        width: 16px;
        height: 16px;
        border-left: 1px solid #fd8550;
        border-top: 1px solid #fd8550;
        position: absolute;
        top: -9px;
        left: 50%;
        transform: rotate(45deg);
        background-color: #fcfcfc;
       
        @media (min-width: 992px){
            ${props => (props.arrowPosition === 'left') && 
                "left: 22%; right: auto;"
            }
            
            ${props => (props.arrowPosition === 'right') &&
                "right: 22%; left: auto;"
            }
        }
    }
`;

export default FormTabContent;
