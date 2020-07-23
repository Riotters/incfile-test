import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`

`

const Header4TextColor = ({ className, content }) => {

  return (
    <Wrapper className={className}>
        {content.header && (
            <h3>{content.header}</h3>
        )}
        {content.text && (
            <p>{content.text}</p>
        )}
    </Wrapper>
  )
}

export default Header4TextColor
