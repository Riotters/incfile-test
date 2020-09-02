import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box"
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import Label from "../../molecules/form/label-field-with-child";
import Input from "../../atoms/inputs/input"
import Dropdown from "../../molecules/form/dropdown";
import Radio from "../../molecules/form/radio";
import Button from "../../molecules/buttons/button";
import ArrowLink from "../../molecules/buttons/text";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/top-left-bottom-right.inline.svg";

const Wrapper = styled(Whitebox)`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 570px;
    padding: 40px;
    position: relative;

    svg {
        transform: scale(-1);
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    width: 100%;

    .Dropdown-root {
        min-width: 50px;
    }
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LinkWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 16px;

    a {
        font-size: 16px;
        line-height: 24px;
    }
`;

const AnnualReportForm = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <Curve bottom="-25" left="-29" color={color.orange1}>
            <CurveSVG />
        </Curve>
        <Heading size="5" bottomMargin="16">{content.header}</Heading>
        <Label htmlFor="company" content={content.field} bottomMargin="24">
            <Input placeholder="Company name" />
        </Label>
        <Label htmlFor="state" content={content.field2} bottomMargin="16">
            <Dropdown options={["aaa", "bbb", "ccc"]} placeholder="Select" />
        </Label>
        <Flex>
            <Label htmlFor="type" content={content.field3} bottomMargin="16">
                <Radio checked name="type" />
                <Radio name="type" />
            </Label>
            <LinkWrapper>
                <ArrowLink content={content.link} bottomMargin="0" />
            </LinkWrapper>
        </Flex>
        <Label htmlFor="date" content={content.field4}>
            <Grid>
                <Dropdown options={["01", "02", "03"]} placeholder="Month" />
                <Dropdown options={["01", "02", "03"]} placeholder="Day" />
                <Dropdown options={["2020", "2019", "2018"]} placeholder="Year" />
            </Grid>
        </Label>
        <Button content={content.button} theme="primary56" arrow marginSM="32px auto 0" />
    </Wrapper>
  )
}

export default AnnualReportForm;
