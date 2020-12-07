import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import CenterGrid from "../../../partials/center-grid";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";
import BoxedButton from "../../../molecules/buttons/boxed";
import ContentCenter from "../../../partials/content-center";
import Button from "../../../molecules/buttons/button";

const EntityType = styled.section`
	position: relative;
	padding-top: 104px;
`;

const colors = [color.babyblue3, color.purple3, color.green3, color.orange3];
const icons = ["cert-llc-232", "cert-s-433", "cert-n-826", "cert-c-831"];

const EntityTypeSection = ({ className, content }) => (
	<EntityType className={className}>
		<Oval className="oval" height="570" width="570" top="0" left="0">
			<OvalSVG />
		</Oval>
		<HeadingCenter
			headline={content.header}
			headlineWidth="700"
			bottomMargin="48"
			bottomMarginLG="80"
		/>
		<CenterGrid contentWidth="970" columnsSM="1" columnsMD="2" curve>
			{content.buttons.map((button, i) => (
				<BoxedButton
					content={button}
					icon={icons[i]}
					iconColor={colors[i]}
					iconPadding="12"
				/>
			))}
		</CenterGrid>
		<ContentCenter>
			<Button
				content={content.button}
				theme="primary56"
				margin="48px 0 0"
				marginSM="80px auto 0"
				arrow
			/>
		</ContentCenter>
	</EntityType>
);

export default EntityTypeSection;
