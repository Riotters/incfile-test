import React from "react";
import styled from "styled-components";
import parse from 'html-react-parser';

import Whitebox from "../atoms/boxes/white-box";
import { Heading } from "../atoms/typography/heading";
import { Paragraph } from "../atoms/typography/paragraph";

const FilingRequirementBox = ({ margin, data }) => {
    return (
        <Filing margin={margin}>
            {parse(data.filings?.llc_requirement ?? 'loading')}
        </Filing>
    );
}

export default FilingRequirementBox;

const Filing = styled.div`
    margin: ${props => props.margin ? props.margin : '52px 0 42px 0'};

    h3, h4{
        font-family: Avenir;
        font-weight: 900;
        font-size: 20px;
        line-height: 1.2;
        margin-bottom: 15px;
        margin-top: 42px;
    }

    p{
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0 24px 32px 0 rgba(236,236,236,0.50);
        border-radius: 5px;
        padding: 24px;
        margin-bottom: 8px;
        display: flex;
        font-size: 18px;

        strong{
            font-family: Avenir,sans-serif;
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 0px;
            min-width: 150px;
        }
    }
`