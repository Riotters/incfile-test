import React from "react";
import { color } from "../../atoms/styles/colors";
import Circle from "../../atoms/icons/circle";

const CircleOr = ({ className }) => (
    <Circle className={className} height="64" width="64" heightSM="96" widthSM="96" circleColor={color.white} >
        <Circle height="48" width="48" heightSM="56" widthSM="56" circleColor={color.orange1} iconColor={color.white} >or</Circle>
    </Circle>
)

export default CircleOr;
