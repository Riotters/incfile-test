import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box"
import Searchbar from "../../molecules/form/searchbar"
import { Heading } from "../../atoms/typography/heading";
import Label from "../../molecules/form/label-field-with-child";
import Input from "../../atoms/inputs/input"
import Dropdown from "../../molecules/form/dropdown";
import Button from "../../molecules/buttons/button";

const Wrapper = styled(Whitebox)`
    width: 100%;
    max-width: 570px;
    padding: 40px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;

    .Dropdown-root {
        min-width: 50px;
    }
`;

const AnnualReportForm = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <Heading size="5" bottomMargin="16">{content.header}</Heading>
        <Label htmlFor="company" content={{label: `Company`}} bottomMargin="24">
            <Input placeholder="Company name" />
        </Label>
        <Label htmlFor="state" content={{label: `State of Incorporation`}} bottomMargin="16">
            <Dropdown options={["aaa", "bbb", "ccc"]} placeholder="Select" />
        </Label>
        <Label htmlFor="type" content={{label: `Select Entity Type*`}} bottomMargin="16">
            <Input />
        </Label>
        <Label htmlFor="date" content={{label: `Date of Formation`}}>
            <Grid>
                <Dropdown options={["aaa", "bbb", "ccc"]} placeholder="Month" />
                <Dropdown options={["aaa", "bbb", "ccc"]} placeholder="Day" />
                <Dropdown options={["aaa", "bbb", "ccc"]} placeholder="Year" />
            </Grid>
        </Label>
        <Button content={content.button} theme="primary56" arrow marginSM="0 auto" />
    </Wrapper>
  )
}

export default AnnualReportForm;
