import React, {useState, useEffect, createRef} from "react";
import styled from "styled-components"
import { color } from "../../atoms/styles/colors"
import {Paragraph} from "../../atoms/typography/paragraph";
import parse from "html-react-parser";
import {Link} from "gatsby";

const Wrapper = styled.div`
    display: flex;
`

const Input = styled.input`
    position: absolute;
    opacity: 0;
    height: 32px;
    width: 32px;
    cursor: pointer;

    &:checked ~ span {
        &:before {
            height: 12px;
            width: 12px;
            opacity: 1;
        }
    }
`;

const Checkmark = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    background-color: ${color.grey5};
    border: 1px solid ${color.grey3};
    border-radius: 50%;
    cursor: pointer;
    margin-right: 16px;

    &:before {
        content: '';
        height: 0;
        width: 0;
        opacity: 0;
        background-color: ${color.orange1};
        border-radius: 50%;
        transition: height .3s ease, width .3s ease;
    }
`;

const Text = styled.span`
    display: flex;
    align-items: center;
    margin-right: 40px;
    font-family: Avenir, sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #7a7a7a;
`;

const AbsoluteWrapper = styled.div`
    position: absolute;
    width: 100%;
    visibility: hidden;
    background-color: #fcfcfc;
    border-radius: 5px;
    border: 1px solid #fd8550;
    padding: 34px;
    font-family: Avenir-Roman;
    font-size: 16px;
    line-height: 24px;
    color: #4e4e4e;
    
    .arrowInsideRadioButton{
        width: 20px;
        height: 20px;
        position: absolute;
        transform: rotate(45deg);
        background-color: #fcfcfc;
        border-top: 1px solid #fd8550;
        border-left: 1px solid #fd8550;
        top: -11px;
    }
`;

const Radio = ({ className, content, name, id, checked, value, description, onClick}) => {

    const radioRef = createRef();

    useEffect(() => {
        if(description && checked === id) {
            const targetElement = document.getElementById("descriptionInsideRadio-" + id);
            const closestWrapper = targetElement.closest("." + Wrapper.styledComponentId);
            const parentElement = targetElement.closest(`div[class^="form-content__Wrapper-"]`);
            const parentStyle = getComputedStyle(parentElement);
            const allRadioWrapper = parentElement.querySelectorAll(`[class^="radio__Wrapper-"]`);
            const allRadioDescriptionWrapper = parentElement.querySelectorAll(`[id^="descriptionInsideRadio-"]`);
            const currentArrow = targetElement.querySelector(`[class="arrowInsideRadioButton"]`);

            handleTabs();
            window.addEventListener('resize', handleTabs);

            function handleTabs(){
                for(let i = 0; i < allRadioWrapper.length; i++){
                    allRadioWrapper[i].style.marginBottom = 0;
                }

                for(let i = 0; i < allRadioDescriptionWrapper.length; i++){
                    allRadioDescriptionWrapper[i].style.visibility = "hidden";
                }

                currentArrow.style.left = (closestWrapper.offsetLeft + (closestWrapper.offsetWidth/3)) + "px"
                targetElement.style.top = (closestWrapper.offsetTop + closestWrapper.offsetHeight + 20) + "px";
                targetElement.style.left = parseInt(parentStyle.paddingLeft) + "px";
                targetElement.style.visibility = "visible";
                targetElement.style.width = (parentElement.offsetWidth - parseInt(parentStyle.paddingLeft) - parseInt(parentStyle.paddingRight)) + "px";
                closestWrapper.style.marginBottom = targetElement.offsetHeight + 20 + "px";
            }

        }
    });

    return (
        <Wrapper className={className}>
            <Input id={id} type="radio" name={name} checked={(onClick) ? checked === id : checked} value={value} onClick={onClick} ref={radioRef}/>
            <Checkmark />
            {content && (
                <Text>{content}</Text>
            )}
            {description &&
                <AbsoluteWrapper id={"descriptionInsideRadio-" + id}>
                    <span className="arrowInsideRadioButton"/>
                    {description.map((el) => (
                        <div style={{marginBottom: (el.marginBottom ?? 0)}}>
                            {el.content &&
                                <Paragraph bottomMargin={0}>{el.content}</Paragraph>
                            }
                            {el.list &&
                                <ul>
                                    {el.list.map((listitem) => (
                                        <li>{parse(listitem)}</li>
                                    ))}
                                </ul>
                            }
                        </div>
                    ))}
                </AbsoluteWrapper>
            }
        </Wrapper>
    )
}
export default Radio
