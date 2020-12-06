import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import Image from "../../../atoms/image/image_nobase64";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-orange-transparent.inline.svg";
import OvalSVG2 from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-left-right-orange2-big.inline.svg";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import parse from "html-react-parser";

const Wrapper = styled.section`
    padding: 60px 0;
    position: relative;
    background-color: ${color.orange3};
    overflow: hidden;
    @media (min-width: 576px) {
        padding: 16px 0 56px;
    }
`;

const Flex = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 992px) {
        justify-content: flex-start;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 570px;

    @media (min-width: 992px) {
        width: 60%;

        p {
            max-width: 570px;
        }
    }

    p {
        text-align: center;

        @media (min-width: 992px) {
            text-align: left;
        }
    }
`;

const Imagebox = styled.div`
    display: none;
    align-items: center;
    width: 100%;
    max-width: 600px;

    @media (min-width: 992px) {
        display: flex;
    }

    .gatsby-image-wrapper {
        width: 100%;
    }
`;

const Conclusion = ({ content }) => {
    return (
        <Wrapper>
            <Oval
                className="oval"
                height="420"
                width="420"
                top="0"
                left="0"
                zIndex="0"
            >
                <OvalSVG />
            </Oval>
            <Oval
                className="oval"
                height="570"
                width="570"
                top="12"
                right="0"
                zIndex="0"
                x="30"
            >
                <OvalSVG2 />
            </Oval>
            <Container>
                <Flex>
                    <Content>
                        <p mixed>{parse(content.text)}</p>
                    </Content>
                    <Imagebox>
                        <Image filename={content.image} />
                    </Imagebox>
                </Flex>
            </Container>
        </Wrapper>
    );
};

export default Conclusion;
