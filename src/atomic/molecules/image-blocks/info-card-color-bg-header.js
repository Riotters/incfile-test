import React from "react";
import Image from "../../atoms/image/image";
import styled from "styled-components";

const InfoCardColorBgHeader = ({backgroundColor, imageName, imageAlt}) => (
    <Wrapper backgroundColor={backgroundColor}>
        <ImageWrapper>
            <Image filename={imageName} alt={imageAlt ?? ''}/>
        </ImageWrapper>
    </Wrapper>
);

const Wrapper = styled.div`
    background-color: ${props => props.backgroundColor};
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageWrapper = styled.div`
    width: 128px;
`;

export default InfoCardColorBgHeader;
