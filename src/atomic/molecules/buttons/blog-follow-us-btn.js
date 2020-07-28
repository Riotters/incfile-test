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
        padding: 12px 12px 12px 52px;
    }

    p {
        font-size: 16px;
        line-height: 24px;
        color: ${color.black};
        text-align: left;
    }
`

const BlogFollowUsBtn = ({ className }) => {
  return (
    <Wrapper className={className} href="#">
        <Bluebox className="follow-us-btn">
            <p>aaa</p>
        </Bluebox>
    </Wrapper>
  )
}

export default BlogFollowUsBtn;
