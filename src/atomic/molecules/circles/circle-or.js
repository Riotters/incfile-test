import React from "react";
import { color } from "../../atoms/styles/colors";
import Circle from "../../atoms/icons/circle";

const CircleOr = ({ className }) => (
    <Circle className={className} height="96" width="96" circleColor={color.white} >
        <Circle height="56" width="56" circleColor={color.orange1} iconColor={color.white} >or</Circle>
    </Circle>
)

export default CircleOr;
