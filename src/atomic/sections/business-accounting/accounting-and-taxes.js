import styled from "styled-components";
import {Heading} from "../../atoms/typography/heading";
import ImageContent from "../../partials/left-image-right-content";
import React from "react";
import Buttonsbox from "../../atoms/boxes/top-buttons-box";
import Button from "../../molecules/buttons/button-action";
import {Paragraph} from "../../atoms/typography/paragraph";
import { scrollToElement } from "../../../helpers/utils";

const Wrapper = styled.div`
    position: relative;
    padding: 38px 0;
    
    background: linear-gradient(180deg, rgba(255,255,255,0.00) 4%, #FEF6ED 99%);
    
    .oval {
        overflow: hidden;
    }
`;

const AccountingAndTaxes = ({ content }) => (
    <Wrapper>
        <ImageContent image="main-header-object-certificate-good-standing-5915">
            <Heading size={4}>{content.header}</Heading>
            <Paragraph big bottomMargin={48}>{content.text}</Paragraph>
            <Buttonsbox>
                <Button onClick={e => scrollToElement(e, 'js-business-tax-signup-form')} content={content.button[0]} theme="primary56" arrow />
            </Buttonsbox>
            <Heading size={5} topMargin={24}>{content.header2}</Heading>
        </ImageContent>
    </Wrapper>
);

export default AccountingAndTaxes;