import React from "react";
import styled from "styled-components";
import Container from "../../container";
import LeftImageRightContent from "../../../components/partials/blocks/left-content-right-image";
import Button from "../../molecules/buttons/button";
import OvalLeftSvg from "../../../images/ovals/top-left-transparent-orange2.inline.svg";
import OvalRightSvg from "../../../images/ovals/top-left-transparent-orange.inline.svg";
import Curve from "../../../images/curve-orange.inline.svg";
import TabScrollable from "./TabScrollable";
import { color } from "../../atoms/styles/colors";

const About = ({ layout, columns }) => (
	<>
		<TabScrollableWrapper>
			<TabScrollable />
		</TabScrollableWrapper>
	</>
);

const TabScrollableWrapper = styled.div`
	padding-top: 24px;
`;

export default About;
