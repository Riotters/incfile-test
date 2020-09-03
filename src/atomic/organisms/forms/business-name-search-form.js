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
      <Label htmlFor="company" content={content.field} bottomMargin="24">
        <Input placeholder="Company name" />
      </Label>
      <Flex>
        <Label htmlFor="type" content={content.field2} bottomMargin="16">
          <Radio content={content.field2.radio} checked name="type" />
          {/* <Heading size="4" bottomMargin="0">
            LLC
          </Heading> */}
          <Radio content={content.field2.radio2}  name="type" />
          {/* <Heading size="4" bottomMargin="0">
            Corporation
          </Heading> */}
        </Label>
        <LinkWrapper>
          <ArrowLink content={content.link} bottomMargin="0" />
        </LinkWrapper>
      </Flex>
      <Label htmlFor="state" content={content.field3} bottomMargin="32">
        <Dropdown options={["aaa", "bbb", "ccc"]} placeholder="Select" />
      </Label>
      <Heading size="5" bottomMargin="16">
        {content.header2}
      </Heading>
      <Label htmlFor="full-name" content={content.field4} bottomMargin="32">
        <Input placeholder="Full name" />
      </Label>
      <Label htmlFor="email" content={content.field5}>
        <Input placeholder="Email" />
      </Label>
      <Button content={content.button} theme="primary56" arrow marginSM="48px auto 0" />
    </Wrapper>
  );
};

export default BusinessNameSearchForm;
