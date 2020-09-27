import React from 'react';
import styled from 'styled-components';

import Top from "../../../../atomic/partials/top";

const Wrapper = styled.div`
    position: relative;
`

const TopSection = () => {
    return (
        <Wrapper>
            <Top imageName="mrs-bulb-question-7726"
                imageAlt="Mrs Bulb and with checklist"
                ovalColor="yellow"
                headlineWidth="400"
                textWidth="800"
                contentWidth="800"
                contentPaddingTop="0"
            >
                <h1>Business Name Generator</h1>
                <p>Generate a short, brandable business name using artificial intelligence</p>
            </Top>
        </Wrapper>
    )
}

export default TopSection;