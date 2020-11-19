import React from "react";
import styled from "styled-components";
import Image from "../atoms/image/image_nobase64";

// components
import { color } from "../atoms/styles/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-image: linear-gradient(${(props) => (props.position ? props.position : `to bottom`)}, rgba(255, 255, 255, 0) 20%, ${(props) => (props.bgColor ? props.bgColor : `${color.orange3}`)});
  min-height: 300px;
  padding-top: 80px;
  position: relative;
`;

const AbsoluteMap = styled.div`
  position: absolute;
  top: 55px;
  right: 30px;
  width: 570px;

  @media screen and (min-width: 1550px) {
    top: 30px;
    width: 670px;
  }
`;

const LinearBgHeader = ({ children, bgColor, position, imageMapName }) => {
  return (
    <Wrapper bgColor={bgColor} position={position}>
      {/* <AbsoluteMap>
            <Image filename={imageMapName} alt="texas map"/>
        </AbsoluteMap> */}
      {children}
    </Wrapper>
  );
};

export default LinearBgHeader;
