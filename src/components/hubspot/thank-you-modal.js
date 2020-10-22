import React from "react";
import styled from "styled-components"

import { Heading } from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import Button from "../../atomic/molecules/buttons/button";

const Wrapper = styled.div`
    background-color: #fff;
    border-radius: 5px;
    max-width: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 56px;
`;

export const ThankYouContent = ({ content, modalExit }) => {
    return (
        <Wrapper>
            <Heading size={2}>Thank You!</Heading>
            <Paragraph bottomMargin={56}>Thank you for your submission. Click below to download your guide!</Paragraph>
            <Button arrow theme="primary56" className="modal-close" onClick={modalExit} content={{ text: `Close`, url: `#` }} />
        </Wrapper>
    );
};

