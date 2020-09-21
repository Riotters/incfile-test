import React from "react";
import Container from "../../container";
import styled from "styled-components";
import PropTypes from "prop-types"
import Image from "../../atoms/image/image";
import Button from "../../molecules/buttons/button";

const Conclusion = ({buttonTitle, children, to}) => (
    <ConclusionWrapper>
        <Oval>
            <Image filename="oval-conclusion-1"/>
        </Oval>
        <Container>
            <ImageBox>
                <Image filename="conclusion-main" />
            </ImageBox>
            <Content>
                <TextBox>
                    {children}
                </TextBox>
                <Button arrow theme="primary40" content={{text: buttonTitle, url: to}} />
            </Content>
        </Container>
    </ConclusionWrapper>
);

const ConclusionWrapper = styled.section`
    position: relative;
    margin-top: 76px;
    margin-bottom: 150px;
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    bottom: calc(50% - 313px);
    width: 480px;
    display: none;
    
    @media (min-width: 1130px) {
        display: block;
    }
`;

const Content = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    
    @media (min-width: 1130px){
        margin: 0 0 0px auto;
    }
`

const TextBox = styled.div`
`

const ImageBox = styled.div`
    position absolute;
    left: -15%;
    top: calc(50% - 313px);
    width: 720px;
    height: 626px;
    display: none;
    
    @media (min-width: 1130px) {
        display: block;
    }
`

Conclusion.propTypes = {
    to: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired
}

export default Conclusion;
