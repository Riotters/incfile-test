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
                <Image filename="conclusion" />
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
    margin-bottom: 150px;
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    bottom: calc(50% - 313px);
    width: 480px;
`;

const Content = styled.div`
    margin-left: auto;
    max-width: 600px;
`

const TextBox = styled.div`
`

const ImageBox = styled.div`
    position absolute;
    left: -15%;
    top: calc(50% - 313px);
    width: 720px;
    height: 626px;
`

Conclusion.propTypes = {
    to: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired
}

export default Conclusion;
