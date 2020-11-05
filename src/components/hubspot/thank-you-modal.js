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

export const ThankYouContent = ({ modalExit, isBusinesNameSearch }) => {
    const text = isBusinesNameSearch ? `You'll be notified via email with your search results. If your name is not available, you will have the opportunity to submit a new name.` : `You'll be notified via email with the link download.`;
    return (
        <Wrapper>
            <Heading size={2}>Thanks for submitting the form.</Heading>
            <Paragraph bottomMargin={56}>{text}</Paragraph>
            <Button arrow theme="primary56" className="modal-close" onClick={modalExit} content={{ text: `Close`, url: `#` }} />
        </Wrapper>
    );
};

