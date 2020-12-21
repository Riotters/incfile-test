import React from "react";
import styled from "styled-components";
import Title from "../../atoms/text-fields/article-title";
import Meta from "../../atoms/text-fields/article-meta";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ArticleHeader = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <Title content={content.title ? content.title : ""} />
        <Meta date={content.meta.date ? content.meta.date : ""} from={content.meta.from ? content.meta.from : ""} />
    </Wrapper>
  )
}

export default ArticleHeader;
