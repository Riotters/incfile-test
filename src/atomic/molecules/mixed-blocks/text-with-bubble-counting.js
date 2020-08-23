import React from "react";
import styled from "styled-components";
import Image from "../../atoms/image/image";

const TextWithBubbleCounting = ({text}) => (
    <Wrapper>
        <Bubbles>
            <BubbleImage>
                <Image filename="mrs-bulb-final-comp-thumb-up" />
            </BubbleImage>
            <BubbleImage>
                <Image filename="mrs-bulb-final-comp-thumb-up-copy-4" />
            </BubbleImage>
            <BubbleImage>
                <Image filename="mrs-bulb-final-comp-thumb-up-copy-4" />
            </BubbleImage>
            <BubbleImage>
                <Image filename="mrs-bulb-final-comp-thumb-up-copy-4" />
            </BubbleImage>
            <BubbleImage>
                <Image filename="mrs-bulb-final-comp-thumb-up-copy-4" />
            </BubbleImage>
        </Bubbles>
        <Text>
            {text}
        </Text>
    </Wrapper>
);

const Wrapper = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 30px;
    margin-bottom: 50px;
`;

const Bubbles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`;

const Text = styled.div`
    text-align: center;
    font-family: Avenir-Heavy, sans-serif;
    font-size: 20px;
    color: #1d1d1d;
    max-width: 590px;
    margin: 0 auto;
`;

const BubbleImage = styled.div`
    width: 78px;
    height: 110px; 
`

export default TextWithBubbleCounting;
