import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    h2 {
        padding-bottom: 96px;
    }

    p {
        padding-bottom: 0;
    }
`

const Header4TextColor = ({ className, content }) => {

  return (
    <Wrapper className={className}>
        {content.header && (
            <h2>{content.header}</h2>
        )}
        {content.text && (
            <p>{content.text}</p>
        )}
    </Wrapper>
  )
}

export default Header4TextColor
