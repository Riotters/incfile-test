import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import Label from "../../molecules/form/label-field-with-child";
import Input from "../../atoms/inputs/input";
import Dropdown from "../../molecules/form/dropdown";
import Radio from "../../molecules/form/radio";
import Button from "../../molecules/buttons/button";
import ArrowLink from "../../molecules/buttons/text";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/bottom-left-top-right.inline.svg";

const Wrapper = styled(Whitebox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 570px;
  padding: 24px;
  position: relative;
  margin: 48px auto 0;

  @media(min-width: 992px) {
    margin: 0;
    padding: 40px;
  }

  .curve-shape {
    svg {
      transform: scale(-1);
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  width: 100%;
  
  @media(min-width: 769px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }

  .Dropdown-root {
    min-width: 50px;
  }
`;

const EntitySearchForm = ({ className, content, curveColor }) => {
  return (
    <Wrapper className={className}>
      <Curve className="curve-shape" bottom="-25" right="-29" color={curveColor ? curveColor : color.babyblue1}>
        <CurveSVG />
      </Curve>
      <Heading size="5" bottomMargin="16">
        {content.header}
      </Heading>
      <Grid>
        <Label htmlFor="name" content={content.field} bottomMargin="32">
          <Input name="name" id="name" />
        </Label>
        <Label htmlFor="state" content={content.field2} bottomMargin="32">
          <Dropdown options={content.field2.options} placeholder="Select" />
        </Label>
      </Grid>
      <Heading size="5" bottomMargin="16">
        {content.header2}
      </Heading>
      <Grid>
        <Label htmlFor="name2" content={content.field3} bottomMargin="32" bottomMarginMD="16">
          <Input name="name2" id="name2" />
        </Label>
        <Label htmlFor="surname" content={content.field4} bottomMargin="32" bottomMarginMD="16">
          <Input name="surname" id="surname" />
        </Label>
      </Grid>
      <Label htmlFor="mail" content={content.field5} bottomMargin="0">
        <Input name="mail" id="mail" />
      </Label>
      <Button content={content.button} theme="primary56" arrow margin="32px 0 0" marginSM="32px auto 0" />
    </Wrapper>
  );
};

export default EntitySearchForm;
