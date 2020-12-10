import React from "react";
import styled from "styled-components"
import HTMLReactParser from "html-react-parser";

import { Heading } from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import Button from "../../atomic/molecules/buttons/button-action";

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

export const ThankYouContent = ({ modalExit, isBusinesNameSearch, fileDownload }) => {
    const text = isBusinesNameSearch
        ? `You'll be notified via email with your search results. If your name is not available, you will have the opportunity to submit a new name.` : `You'll be notified via email with the link download.`;
    
    
    const handleDownload = e => {
        // Close modal
        modalExit(e);

        // open new tab for downloading
        window.open(fileDownload, '_blank');
    }
    
    return (
        <Wrapper>
            <Heading size={2} style={{ fontSize: `24px` }}>Thanks for submitting the form.</Heading>
            {fileDownload
                ? 
                <>
                    <Paragraph bottomMargin={56} mixed={true}>{HTMLReactParser(`Please click on the below button to download your file.`)}</Paragraph>
                    <Button arrow theme="primary56" className="modal-close" onClick={e => handleDownload(e)} content={{ text: `Download Now`, url: `#` }} />
                </>
                : 
                <>
                    <Paragraph bottomMargin={56}>{text}</Paragraph>
                    <Button arrow theme="primary56" className="modal-close" onClick={modalExit} content={{ text: `Close`, url: `#` }} />
                </>
            }
            
        </Wrapper>
    );
};

