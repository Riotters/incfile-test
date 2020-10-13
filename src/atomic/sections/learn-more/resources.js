import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import SearchIcon from "../../../images/icons/magnitude-glass.inline.svg";
import LLCIcon from "../../../images/icons/llc.inline.svg";
import SCIcon from "../../../images/icons/s-c.inline.svg";
import CCIcon from "../../../images/icons/c-c.inline.svg";
import NPIcon from "../../../images/icons/np.inline.svg";
import RegisteredAgent from "../../../images/icons/registered-agent-form.inline.svg";
import Container from "../../container";
import {shadow} from "../../atoms/styles/shadows";
import {Heading} from "../../atoms/typography/heading";


const Resources = () => (
    <Container>
        <Heading size={2} style={{marginTop: "100px", marginBottom: "100px"}}>Resources, guides, and articles.</Heading>
        <Wrapper>
            <Item to="/">
                <Icon><SearchIcon/></Icon>
                General
            </Item>
            <Item to="/">
                <Icon><LLCIcon/></Icon>
                LLC
            </Item>
            <Item to="/">
                <Icon><SCIcon/></Icon>
                S-Corporation
            </Item>
            <Item to="/">
                <Icon><CCIcon/></Icon>
                C-Corporation
            </Item>
            <Item to="/">
                <Icon><NPIcon/></Icon>
                Nonprofit
            </Item>
            <Item to="/">
                <Icon><RegisteredAgent/></Icon>
                Registered Agent
            </Item>
        </Wrapper>
    </Container>
);

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 30px;
    row-gap: 30px;
`;

const Item = styled(Link)`
    display: flex;
    width: 100%;
    box-shadow: ${shadow.white1};
    background-color: white;
    border-radius: 5px;
    font-family: Avenir-Roman;
    font-size: 16px;
    line-height: 24px;
    color: #4e4e4e;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.3s ease-in-out;
    
    &:hover{
        font-family: Avenir-Heavy;
        box-shadow: ${shadow.white2};
    }
`;

const Icon = styled.span`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #f4f4f4;
    margin-right: 24px;
`;

export default Resources;
