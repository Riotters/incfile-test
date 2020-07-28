import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Bluebox from "../../atoms/boxes/blue-box"

const Wrapper = styled.a`
    width: 100%;
    border: none;
    border-radius: 5px;
    margin-bottom: 16px;

    .follow-us-btn {
        display: flex;
        align-items: center;
        padding: 12px 12px 12px 8px;
        transition: background-color .3s ease;
    }

    p {
        font-size: 16px;
        line-height: 24px;
        color: ${color.black};
        text-align: left;
        padding-left: 16px;
    }

    &:hover {
        .follow-us-btn {
            background-color: ${color.orange3};
        }
    }
`

const BlogFollowUsBtn = ({ className, Icon, text, url }) => {
  return (
    <Wrapper className={className} href={url}>
        <Bluebox className="follow-us-btn">
            <Icon />
            <p>{text}</p>
        </Bluebox>
    </Wrapper>
  )
}

export default BlogFollowUsBtn;
