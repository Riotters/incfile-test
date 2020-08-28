import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import {toolsList} from "../../../../static/type-of-business/handyman";
import UsefulTools from "../../../partials/useful-tools";

const Links = () => (
    <Wrapper>
        <Container>
            <TextCenterLayout headline="Groups and Forums for Your Handyman Business"
                              text="Here are some useful places where you can connect with other handyman entrepreneurs."/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Contractor Talk forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        DIY Chatroom and home improvement forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        CONSTRUCT-ED contractor forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Journal of Light Construction forums
                    </PathLink>
                </LinkItem>

            </LinksContainer>
        </Container>

        <Container>
            <UsefulTools style={{paddingBottom: "200px"}} toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                         description={toolsList.description}/>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 100px;
    background: linear-gradient(180deg, #fef6ed 0%, #ffffff 100%);
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
    
    @media (min-width: 470px) {
        width: 470px;
    }
    
    @media (min-width: 1000px) {
        margin-left: 15px;
        margin-right: 15px;
    }
`;

export default Links;
