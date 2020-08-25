import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/construction-company";
import Curve from "../../../atoms/shapes/curve"
import BabyBlueOval from "../../../../images/oval-babyblue-2.inline.svg";

const ToolsAndLinks = () => (
    <Wrapper>
        <Oval>
            <BabyBlueOval />
        </Oval>
        <Container>
            <TextCenterLayout headline="Groups and Forums for Your Construction Business"
                              text="Here are some useful places where you can connect with other construction entrepreneurs."/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Contractor Talk forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <CurveWrapper>
                        <Curve color={color.orange1}/>
                    </CurveWrapper>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Journal of Light Construction forum
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Facebook Associated General Constructors of America
                    </PathLink>
                </LinkItem>

            </LinksContainer>
        </Container>

        <Container>
            <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText} description={toolsList.description} />
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 100px;
    margin-bottom: 200px;
    position: relative;
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 50%, #eef9fe);
`;

const LinksContainer = styled.div`
    width: 100%;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (min-width: 1000px) {
        width: 1000px;
    }
`;

const LinkItem = styled.div`
    margin: 0 auto;
    padding: 28px 40px 28px 40px;
    background-color: white;
    box-shadow: ${shadow.white1};
    width: 100%;
    margin-bottom: 30px;
    position: relative;
    
    @media (min-width: 470px) {
        width: 470px;
    }
    
    @media (min-width: 1000px) {
        margin-left: 15px;
        margin-right: 15px;
    }
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: -24px;
    top: -24px;
`;

const Oval = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

export default ToolsAndLinks;
