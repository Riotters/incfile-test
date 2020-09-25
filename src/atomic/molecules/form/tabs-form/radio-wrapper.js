import React from "react";
import styled from "styled-components";
import RadioButton from "./radio-button";

const RadioWrapper = ({columns, buttons, onClick, value}) => (
    <Wrapper columns={columns}>
        {buttons.map(button => (
            <RadioButton onClick={onClick} activeValue={value} title={button.title} content={button.content} id={button.id} name={button.name} value={button.value} />
        ))}
    </Wrapper>
);

const Wrapper = styled.div`
    display: grid;
    row-gap: 30px;
    justify-content: center;
    grid-template-columns: 1fr;

    @media (min-width: 992px){
        grid-template-columns: repeat(${props => props.columns}, 1fr);
        column-gap: 30px;
    }
`;

export default RadioWrapper;
