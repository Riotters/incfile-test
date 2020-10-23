import React from "react";
import styled from "styled-components";
import {color} from "../../../atoms/styles/colors";

const RadioButton = ({name, id, value, title, content, onClick, activeValue}) => (

    <Wrapper onClick={() => onClick(value)} className={(value === activeValue) ? "active" : ""}>
        <input type="radio" id={id} name={name} value={value} style={{display: "none"}} checked={activeValue === value}/>

        <RadioWrapper>
            <Check><span></span></Check>
            <Content>
                <Title>{title}</Title>
                <Description>{content}</Description>
            </Content>
        </RadioWrapper>
    </Wrapper>

);

const Wrapper = styled.div`
    background-color: ${color.grey5};
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 5px;
    border: 1px solid #dddddd;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        border: 1px solid #fd8550;
        cursor: pointer;
        
        span {
            background-color: #fd8550;
        }
    }
    
    &.active {
        border: 1px solid #fd8550;
        cursor: pointer;
        
        span {
            background-color: #fd8550;
        }
    }
`;

const RadioWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Check = styled.div`
    width: 32px;
    min-width: 32px;
    height: 32px;
    border-radius: 100%;
    border: 1px solid #dddddd;
    background-color: #fcfcfc;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    span{
        width: 12px;
        height: 12px;
        border-radius: 100%;
        background-color: transparent;
        transition: all 0.3s ease-in-out;
    }
`;

const Content = styled.div`
    
`;

const Title = styled.div`
    font-family: Avenir;
    font-weight: 900;
    font-size: 16px;
    line-height: 24px;
    color: #1d1d1d;
`;

const Description = styled.div`
    font-family: Avenir-Roman;
    font-size: 12px;
    line-height: 24px;
    color: #1d1d1d;
`;

export default RadioButton;
