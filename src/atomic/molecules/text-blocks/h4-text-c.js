import React from "react";
import styled from "styled-components";
import Colorbox from "../../molecules/blocks/left-icon-block-colored";
import Curve from "../../atoms/shapes/curve";

const Wrapper = styled.div`
    position: relative;
    margin-top: 16px;

    .curve {
        position: absolute;
        top: -24px;
        right: -29px;

        path {
            fill: ${props => props.curveColor ? props.curveColor : ""}
        }
    }
`

const Header4TextColor = ({ className, Icon, color, dotsColor, curve, curveColor, content }) => {

  return (
    <Wrapper className={className}>
        {curve && ( <Curve className="curve" color={curveColor} /> )}
        <Colorbox color={color} dotsColor={dotsColor} Icon={Icon} content={content} />
    </Wrapper>
  )
}

export default Header4TextColor
