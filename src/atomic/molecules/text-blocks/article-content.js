import React from "react";
import styled from "styled-components";
import Image from "../../atoms/image/image";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    .gatsby-image-wrapper {
      margin: 24px 0;
    }
`

const ArticleContent= ({ className, content }) => {
  return (
    <Wrapper className={className}>
        {console.log(content)}
        <p>{content.paragraph1}</p>
        <Image filename={content.image1} />
        <p>{content.subtitle1}</p>
        <p>{content.paragraph2}</p>
    </Wrapper>
  )
}

export default ArticleContent;
