import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {color} from "../../atoms/styles/colors";

const AveragePricing = ({text, SvgIcon, backgroundColor, first, last}) => (
    <List backgroundColor={backgroundColor} first={first} last={last}>
        <SvgIcon />
        <Text>{text}</Text>
    </List>
);

const List = styled.div`
    background-color: ${props => props.backgroundColor};
    border-radius: 5px;
    display: flex;
    padding: 30px;
    margin-bottom: 8px;
   
    ${props => props.first &&
        "border-top-left-radius: 25px;" + 
        "border-top-right-radius: 25px;"
    }
    
    ${props => props.last &&
        "border-bottom-left-radius: 25px;" +
        "border-bottom-right-radius: 25px;"
    }
`;

const Text = styled.div`
    font-weight: bold;
    font-family: Avenir, sans-serif;
    font-weight: 900;
    font-size: 20px;
`;

AveragePricing.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired
}

AveragePricing.defaultProps = {
    backgroundColor: color.green3
}

export default AveragePricing;
