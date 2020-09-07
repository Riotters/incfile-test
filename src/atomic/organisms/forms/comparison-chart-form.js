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
import CurveSVG from "../../../images/curves/top-left-bottom-right.inline.svg";

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

const BusinessNameSearchForm = ({ className, content }) => {
  return (
    <Wrapper className={className}>
      <Curve className="curve-shape" bottom="-25" left="-29" color={color.orange1}>
        <CurveSVG />
      </Curve>
      <Heading size="5" bottomMargin="16">
        {content.header}
      </Heading>
      <Label htmlFor="email" content={content.field2} bottomMargin="16">
        <Input name="email" id="email"/>
      </Label>
      <Label htmlFor="first-name" content={content.field3} bottomMargin="16">
        <Input name="first-name" id="first-name"/>
      </Label>
      <Label htmlFor="last-name" content={content.field4} bottomMargin="16">
        <Input name="last-name" id="last-name"/>
      </Label>
      <Label htmlFor="phone" content={content.field2} bottomMargin="16">
        <Input name="phone" id="phone"/>
      </Label>
      <Label htmlFor="file" content={content.field5} bottomMargin="32">
        <Dropdown name="file" id="file" options={["aaa", "bbb", "ccc"]} placeholder="Select" />
      </Label>
      <Button content={content.button} theme="primary56" arrow marginSM="0 auto" />
    </Wrapper>
  );
};

export default BusinessNameSearchForm;
