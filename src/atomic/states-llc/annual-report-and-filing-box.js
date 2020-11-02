import React from "react";
import styled from "styled-components";
import parse from 'html-react-parser';

import Whitebox from "../atoms/boxes/white-box";
import { Heading } from "../atoms/typography/heading";
import { Paragraph } from "../atoms/typography/paragraph";

const AnnualReportFilingBox = ({ data }) => {
    return (
        <>
            <Heading size={4} style={{ marginTop: `40px` }}>
                What are the fees and requirements to form a business in {data.prices?.state}?
            </Heading>
            <Whitebox flex padding="24px" bottomMargin="8px">
                <Paragraph mixed={true} bottomMargin={0} style={{ fontWeight: `bold`, minWidth: `300px` }}>State Fee</Paragraph>
                <Paragraph mixed={true} bottomMargin={0}>${data.prices?.statefee}</Paragraph>
            </Whitebox>

            <Whitebox flex padding="24px" bottomMargin="8px">
                <Paragraph mixed={true} bottomMargin={0} style={{ fontWeight: `bold`, minWidth: `300px` }}>State Filing Time</Paragraph>
                <Paragraph mixed={true} bottomMargin={0}>{data.prices?.slow}</Paragraph>
            </Whitebox>

            <Whitebox flex padding="24px" bottomMargin="8px">
                <Paragraph mixed={true} bottomMargin={0} style={{ fontWeight: `bold`, minWidth: `300px` }}>Expedited Filing Time</Paragraph>
                <Paragraph mixed={true} bottomMargin={0}>{data.prices?.fast}</Paragraph>
            </Whitebox>

            <Filing>
                {parse(data.filings?.requirement ?? 'loading')}
            </Filing>
        </>
    );
}

export default AnnualReportFilingBox;

const Filing = styled.div`
    margin-top: 52px;

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