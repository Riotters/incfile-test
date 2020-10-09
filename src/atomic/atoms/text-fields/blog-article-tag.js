import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: avenir, sans-serif;
  font-size: 16px;
  line-height: 24px;
  background-color: ${color.blue3};
  border-radius: 16px;
  color: ${color.blue1};
  padding: 4px 12px;
  margin-bottom: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${color.orange3};
    color: ${color.orange1};
  }
`;

const BlogArticleTag = ({ className, content }) => {
  return (
    <Wrapper className={className} to="#">
      {content}
    </Wrapper>
  );
};

export default BlogArticleTag;
