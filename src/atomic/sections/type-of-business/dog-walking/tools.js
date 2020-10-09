import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color, gradient} from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/dog-walking";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const ToolsAndLinks = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <Oval2>
            <OvalSvg2 />
        </Oval2>
        <Container>
            <TextCenterLayout headline="Groups and Forums for Your Dog Walking or Pet Sitting Business"
                              text="Here are some useful places where you can connect with other dog walking or pet sitting entrepreneurs:"/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="https://petsits.com/articles/pet-sitting-forums" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Professional United Pet Sitters Forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.doggieresidence.com/community/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Doggie Residence
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://petsitters.org/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        National Association of Professional Pet Sitters
                        (Membership Required)
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
    background-image: ${gradient.blue3};
`;

const LinksContainer = styled.div`
    width: 100%;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (min-width: 1100px) {
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
    
    @media (min-width: 1100px) {
        margin-left: 15px;
        margin-right: 15px;
    }
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: calc(50% - 360px);
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    bottom: 181px;
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;
export default ToolsAndLinks;
