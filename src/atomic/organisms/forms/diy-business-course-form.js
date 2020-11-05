import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import Label from "../../molecules/form/label-field-with-child";
import Input from "../../atoms/inputs/input";
import Button from "../../molecules/buttons/button-action";

const Form = styled.form`
  width: 100%;
  max-width: 570px;
`;

const Wrapper = styled(Whitebox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  position: relative;

  .curve-shape {
    svg {
      transform: scale(-1);
    }
  }
`;

const BusinessNameSearchForm = ({ className }) => {
  return (
    <Form noValidate>
      <input type="hidden" name="hs_form_id" value="" />
      <Wrapper className={className}>
        <Label htmlFor="first-name" content={{ label: `First Name` }} bottomMargin="32">
          <Input name="firstname" id="first-name" required />
        </Label>
        <Label htmlFor="email" content={{ label: `Email` }} bottomMargin="32">
          <Input type="email" name="email" id="email" required />
        </Label>

        <Button type="submit" content={{ text: `Enroll Today` }} theme="primary56" marginSM="48px auto 0" />
      </Wrapper>
    </Form>
  );
};

export default BusinessNameSearchForm;
