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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 770px;
  padding: 32px;
  position: relative;

  .curve-shape {
    svg {
      transform: scale(-1);
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  width: 100%;
  
  @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;    
    }

  .Dropdown-root {
    min-width: 50px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BusinessAccountingForm = ({ className, content }) => {
    return (
        <Wrapper className={className}>
            <Grid>
                <Label htmlFor="company" content={content.field1}>
                    <Input type="text" required />
                </Label>
                <Label htmlFor="company" content={content.field2}>
                    <Input type="text" required />
                </Label>
                <Label htmlFor="company" content={content.field3} bottomMargin={20}>
                    <Input type="text" />
                </Label>
            </Grid>

            <Button content={content.button} theme="primary56" arrow marginSM="32px auto 0" />
        </Wrapper>
    );
};

export default BusinessAccountingForm;
