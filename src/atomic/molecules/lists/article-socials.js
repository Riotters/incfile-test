import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors"
import TwitterSVG from "../../../images/icons/twitter32.inline.svg";
import FacebookSVG from "../../../images/icons/facebook32.inline.svg";
import PinterestSVG from "../../../images/icons/pinterest32.inline.svg";
import LinkedinSVG from "../../../images/icons/linkedin32.inline.svg";

const Wrapper = styled.div`
    width: 100%;
    position: static;
    top: 0;
    left: -56px;

    @media (min-width: 1366px) {
        height: 100%;
        width: 56px;
        position: absolute;
    }
`;

const List = styled.ul`
    display: flex;
    list-style: none;
    padding-top: 32px;

    @media (min-width: 1366px) {
        flex-direction: column;
        position: sticky;
        top: 100px;
        left: 0;
        padding-top: 0;
    }

    span {
        &:not(:last-child) {
            margin-right: 8px;
        }
    }
`

const Social = styled.li`
    height: 48px;
    width: 48px;
    background-color: ${color.blue3};
    margin-right: 8px;
    border-radius: 5px;

    @media (min-width: 1366px) {
        margin-bottom: 8px;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
`;

const BlogArticleSocials = ({ className }) => {
  return (
    <Wrapper className={className}>
        <List>
            <Social>
                <a href="#">
                    <TwitterSVG />
                </a>
            </Social>
            <Social>
                <a href="#">
                    <FacebookSVG />
                </a>
            </Social>
            <Social>
                <a href="#">
                    <PinterestSVG />
                </a>
            </Social>
            <Social>
                <a href="#">
                    <LinkedinSVG />
                </a>
            </Social>
        </List>        
    </Wrapper>
  )
}

export default BlogArticleSocials;
