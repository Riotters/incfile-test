import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box"
import Searchbar from "../../molecules/form/searchbar"

const Wrapper = styled.div`
    width: 100%;
`

const BlogSearchArticles = ({ className }) => {
  return (
    <Wrapper className={className}>
        <Whitebox>
          <Searchbar />
        </Whitebox>
    </Wrapper>
  )
}

export default BlogSearchArticles;
