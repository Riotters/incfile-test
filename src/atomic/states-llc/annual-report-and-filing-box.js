import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

import Whitebox from "../atoms/boxes/white-box";
import { Paragraph } from "../atoms/typography/paragraph";
import { PHeading } from "../atoms/typography/p-to-heading";

function AnnualReportFilingBox({ data }) {
  return (
    <>
      <PHeading size={4} topMargin={40}>
        What Are the Fees and Requirements to Form a Business in{" "}
        {data.prices?.state}?
      </PHeading>
      <Box padding="24px" bottomMargin="8px">
        <Paragraph mixed={true} bottomMargin={0}>
          State Fee
        </Paragraph>
        <Paragraph mixed={true} bottomMargin={0}>
          ${data.prices?.statefee}
        </Paragraph>
      </Box>

      <Box padding="24px" bottomMargin="8px">
        <Paragraph mixed={true} bottomMargin={0}>
          State Filing Time
        </Paragraph>
        <Paragraph mixed={true} bottomMargin={0}>
          {data.prices?.slow}
        </Paragraph>
      </Box>

      <Box padding="24px" bottomMargin="8px">
        <Paragraph mixed={true} bottomMargin={0}>
          Expedited Filing Time
        </Paragraph>
        <Paragraph mixed={true} bottomMargin={0}>
          {data.prices?.fast}
        </Paragraph>
      </Box>
      {console.log(data.filings)}
      <Filing>{parse(data.filings?.requirement ?? "loading")}</Filing>
    </>
  );
}

export default AnnualReportFilingBox;

const Box = styled(Whitebox)`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
  }

  p {
    &:first-child {
      font-weight: bold;
      min-width: 50%;
    }
  }
`;

const Filing = styled.div`
  margin-top: 52px;

  h3,
  h4 {
    font-family: Engram;
    font-weight: 900;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 15px;
    margin-top: 42px;
  }

  p {
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
    border-radius: 5px;
    padding: 24px;
    margin-bottom: 8px;
    display: flex;
    font-size: 18px;

    strong {
      font-family: Engram, sans-serif;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 0px;
      min-width: 50%;
    }
  }
`;
