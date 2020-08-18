import React from "react";
import styled from "styled-components";
import Image from "../../atoms/image/image";

const RepeatImageWithText = () => (
    <Wrapper>
        <Images>
            <Image filename={} />
        </Images>
    </Wrapper>
);

const Wrapper = styled.div`
    box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
    background-color: #ffffff;
    border-radius: 20px;
`;

export default RepeatImageWithText;
