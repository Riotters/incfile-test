import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import {color} from "../../../atoms/styles/colors";

const SummaryBar = ({barPercentage}) => (
    <Wrapper>
        <ColorBar width={(barPercentage < 20) ? 20 : barPercentage}>
            {barPercentage}%
        </ColorBar>
    </Wrapper>
);

const Wrapper = styled.div`
    background-color: ${color.grey5};
    overflow: hidden;
    border: 1px solid ${color.grey4};
    border-radius: 16px;
    margin-bottom: 32px;
`;

const ColorBar = styled.div`
    width: ${props => props.width}%;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: Avenir;
    font-weight: 900;
    font-size: 16px;
    line-height: 24px;
    background-color: ${color.green1};
    transition: all 0.3 ease-in-out;
    height: 32px;
`;

SummaryBar.propTypes = {
    barPercentage: PropTypes.number
}

SummaryBar.defaultProps = {
    barPercentage: 15
}

export default SummaryBar;
