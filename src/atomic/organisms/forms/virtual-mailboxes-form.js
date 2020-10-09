import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import { Heading } from "../../atoms/typography/heading";
import Dropdown from "../../molecules/form/dropdown";
import Button from "../../molecules/buttons/button";

const Wrapper = styled(Whitebox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 570px;
  padding: 40px;
  position: relative;
`;


const AmendmentForm = ({ className, content }) => {
    return (
        <Wrapper className={className}>
            <Heading size="5" bottomMargin="31" style={{"text-align": "center", "margin-top": "24px"}}>
                {content.header}
            </Heading>
            <Dropdown label={content.field.label} options={content.field.options} />
            <Button content={content.button} theme="primary56" arrow marginSM="64px auto 8px" />
        </Wrapper>
    );
};

export default AmendmentForm;
