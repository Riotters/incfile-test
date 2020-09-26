import React from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import Label from "../../atoms/text-fields/label";
import Link from "../../atoms/links/link";
import "react-datepicker/dist/react-datepicker.css";
import {color} from "../../atoms/styles/colors";

const DateField = ({className, label, linkUrl, linkText, placeholder, name, isRequired, selected, onChange}) => (
    <Wrapper className={className}>
        <div className="top">
            {label && (
                <Label text={label} />
            )}
            {linkText && (
                <Link linkUrl={linkUrl} linkText={linkText} />
            )}
        </div>
        <div className="bottom">
            <DatePicker
                placeholderText={placeholder}
                name={name}
                selected={selected}
                onChange={onChange}
                {...isRequired ? "required" : ""}
            />
        </div>
    </Wrapper>
);

const Wrapper = styled.div`
    .top {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .bottom {
        width: 100%;
        
        .react-datepicker-wrapper{
            display: block;
        }
        
        input {
            width: 100%;
            border: 1px solid ${color.grey3};
            border-radius: 5px;
            background-color: ${color.grey5};
            padding: 12px 24px;
            color: ${color.black};
            font-family: Avenir;
            font-size: 16px; 
            line-height: 24px; 
            transition: color 0.3s ease, border-color 0.3s ease;
        
            &::placeholder {
                color: ${color.grey2};
            }
        
            &:hover, &:focus {
                border-color: ${color.blue1};
            }
        
            &:invalid {
                border-color: ${color.orange1};
            }
        }
    }
`;

export default DateField;
