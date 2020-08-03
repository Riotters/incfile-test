import React from "react";
import Image from "../../atoms/image/image";
import styled from "styled-components";

const InfoCardColorBgHeader = ({backgroundColor, imageName}) => (
    <Wrapper backgroundColor={backgroundColor}>
        <ImageWrapper>
            <Image filename={imageName}/>
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
