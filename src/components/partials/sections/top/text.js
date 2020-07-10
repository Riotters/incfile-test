import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 50px;

    @media (min-width: 768px) {
        width: 50%;
        align-items: flex-start;
    }

    h1 {
        width: 100%;
        max-width: 480px;
        text-aling: center;
        padding-bottom: 40px;

        @mnedia(min-width: 768px) {
        text-aling: left;
        padding-bottom: 20px;
        }
    }

    p {
        max-width: 470px;
        margin-bottom: 33px;
    }
`;

const Text = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
)
export default Text