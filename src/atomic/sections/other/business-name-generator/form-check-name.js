import React from "react";
import styled from "styled-components";
import Whitebox from "../../../atoms/boxes/white-box";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import Label from "../../../molecules/form/label-field-with-child";
import Input from "../../../atoms/inputs/input";
import Dropdown from "../../../molecules/form/dropdown";
import Button from "../../../molecules/buttons/button";
import ArrowLink from "../../../molecules/buttons/text";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right.inline.svg";

const Wrapper = styled(Whitebox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 570px;
  padding: 40px;
  position: relative;

  .curve-shape {
    svg {
      transform: scale(-1);
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  width: 100%;

  .Dropdown-root {
    min-width: 50px;
  }
`;

const CheckNameForm = ({ content }) => {
  return (
    <Wrapper>
        <Heading size="5" bottomMargin="16">
            {content.header1}
        </Heading>
        <Label htmlFor="entity_name" content={content.field1} bottomMargin="16">
            <Input name="entity_name" id="entity_name" />
        </Label>
        <Grid>
            <Label htmlFor="state" content={content.field2} bottomMargin="32">
                <Dropdown options={content.field2.options} placeholder="Select" />
            </Label>
            <Label htmlFor="state" content={content.field3} bottomMargin="32">
                <Dropdown options={content.field3.options} placeholder="Select" />
            </Label>
          </Grid>
          
        <Heading size="5" bottomMargin="16">
        {content.header2}
        </Heading>
        <Grid>
            <Label htmlFor="name2" content={content.field4} bottomMargin="16">
                <Input name="name2" id="name2" />
            </Label>
            <Label htmlFor="surname" content={content.field5} bottomMargin="16">
                <Input name="surname" id="surname" />
            </Label>
        </Grid>
        <Label htmlFor="mail" content={content.field6} bottomMargin="0">
            <Input name="mail" id="mail" />
        </Label>
        <Button content={content.button} theme="primary56" arrow marginSM="32px auto 0" />
    </Wrapper>
  );
};

export default CheckNameForm;
