import React from "react"
import styled from "styled-components"
import { color } from "./styles/colors"
import { shadow } from "./styles/shadows"
import Image from "./image"

const Wrapper = styled.div`
    width: 100%;
    max-width: 470px;
    padding: 16px 16px 40px;
    position: relative;
    border-radius: 5px;
    background-color: ${color.white};
    box-shadow: ${shadow.white1};

    .top {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 128px;
        width: 100%;
        background-color: ${props => (props.color ? props.color : color.white)};
        border-radius: 5px;

        .gatsby-image-wrapper {
            height: 96px;
            width: 96px;
        }
    }

    h4 {
        padding: 24px 24px 16px;
    }

    p {
        font-size: 16px;
        line-height: 24px;
        color: ${color.grey1};
        padding: 0 24px;
    }
`

const TopImageBox = ({ className, image, color, children }) => {

  return (
    <Wrapper className={className} color={color}>
        <div className="top">
            {image && (
                <Image filename={image} />
            )}   
        </div>
        <div className="content">
            {children}
        </div>
    </Wrapper>
  )
}

export default TopImageBox
