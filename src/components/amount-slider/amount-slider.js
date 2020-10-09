import React, {useState} from "react";
import styled from "styled-components";
import SelectorSVG from "../../images/slider-selector.svg";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Amount = styled.div`
    font-family: "MarkPro", sans-serif;
    font-size: 48px;
    font-weight: bold;
    line-height: 1.17;
    text-align: center;
    color: #fd8550;
    margin-bottom: 24px;
`;

const Description = styled.div`
    font-family: "Avenir-Roman", sans-serif;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: #7a7a7a;
    margin-bottom: 32px;
`;

const Slider = styled.div`
    width: 100%;
    
    .range {
        -webkit-appearance: none;
        width: 100%;
        height: 16px;
        border-radius: 12px;
        outline: none;
        -webkit-transition: .2s;
        margin-bottom: 8px;
        position: relative;
        background-image: -webkit-gradient(linear, left top, right top, 
            color-stop(${props => props.percent}%, #5089fd), 
            color-stop(${props => props.percent}%, #d2e0fe));
        background-image: -moz-linear-gradient(left center, #DF7164 0%, 
            #5089fd ${props => props.percent}%, 
            #F5D0CC ${props => props.percent}%, #d2e0fe 100%);
    }
    
    .range::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 37px;
        height: 64px;
        border: 0;
        background-image: url(${SelectorSVG});
        background-position: top center;
        cursor: pointer;
    }
    
    .range::-moz-range-thumb {
        width: 37px;
        height: 64px;
        border: 0;
        background: url(${SelectorSVG});
        background-position: top center;
        cursor: pointer;
    }
`;

const Divider = styled.div`
    width: 1px;
    height: 16px;
    background-color: #d2e0fe;
    z-index: -1;
`;

const Scale = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    .label {
        font-family: "Avenir-Roman", sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #4e4e4e;
        width: 33%;
        text-align: center;
        
        &:first-child {
            text-align: left;
        }
        
        &:last-child {
            text-align: right;
        }
    }
`;

const AmountSlider = ({initValue, maxValue, description, onChange}) => {
    let [value, setValue] = useState(initValue);
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    let amount = formatter.format(value);
    let handleChange = (event) => {
        let newValue = event.target.value;
        setValue(newValue);
        onChange(newValue)
    };
    return (
        <Wrapper>
            <Amount>{amount}</Amount>
            <Description>{description}</Description>
            <Slider percent={Math.round(value / maxValue * 100)}>
                <input type="range" min="0" max={maxValue} value={value} className="range" onChange={handleChange}/>
                <Scale>
                    <Divider/>
                    <Divider/>
                    <Divider/>
                </Scale>
                <Scale>
                    <div className="label">{formatter.format(0)}</div>
                    <div className="label">{formatter.format(maxValue/2)}</div>
                    <div className="label">{formatter.format(maxValue)}</div>
                </Scale>
            </Slider>
        </Wrapper>
    );
};

export default AmountSlider;