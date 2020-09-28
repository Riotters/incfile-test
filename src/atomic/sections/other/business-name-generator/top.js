import React from 'react';
import styled from 'styled-components';

import Top from "../../../../atomic/partials/top";
import Searchbar from "./search-bar";

const Wrapper = styled.div`
    position: relative;
`

const TopSection = ({ content }) => {
    return (
        <Wrapper>
            <Top imageName="mrs-bulb-question-7726"
                imageAlt="Mrs Bulb and with checklist"
                ovalColor="yellow"
                headlineWidth="400"
                textWidth="800"
                contentWidth="800"
                contentPaddingTop="0">
                <h1>{content.header}</h1>
                <p>{content.text}</p>
                <Searchbar />
            </Top>
        </Wrapper>
    )
}

export default TopSection;