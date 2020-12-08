import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { color } from "../../../../components/styles/colors";
import { shadow } from "../../../../components/styles/shadows";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green2.inline.svg";
import OvalSVG2 from "../../../../images/ovals/top-right-transparent-babyblue1.inline.svg";
import ShapeCurve from "../../../atoms/shapes/curve";
import RelativeElement from "../../../elements/relative-e";
import AbsoluteShapCure from "../../../elements/absolute-shape-curve-e";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import CountingTextBoxed from "../../../../atomic/molecules/text-blocks/counting-text-boxed";
import VisibilitySensor from "../../../VisibilitySensor";

const Wrapper = styled.div`
	position: relative;
	padding: 100px 0 0 0;
`;

const Trust = styled.div`
	position: relative;
	padding: 100px 0 0 0;

	p {
		font-size: 26px;
		font-weight: bold;
		color: #1d1d1d;
		text-align: center;
		line-height: 35px;

		@media screen and (min-width: 992px) {
			font-size: 40px;
			line-height: 45px;
		}
	}
`;

const WhatWeDoSection = ({ content }) => (
	<Wrapper>
		<Oval className="oval" height="720" width="720" top="5" left="0" y="-20">
			<OvalSVG />
		</Oval>

		<ContentCenter contentWidth="970">
			{/* <VisibilitySensor partialVisibility once>
        {({ isVisible }) => ( */}
			<Heading
				//className={isVisible ? "slideUp enter" : "slideUp"}
				size={3}
				bottomMargin="80"
				style={{ textAlign: `center` }}
			>
				{content.header}
			</Heading>
			{/* )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility once>
        {({ isVisible }) => ( */}
			<RelativeElement
			//className={isVisible ? "scaleUp enter" : "scaleUp"}
			>
				<AbsoluteShapCure rotate={-90} left="-35px" top="-25px" hiddenXS>
					<ShapeCurve color={color.red1} />
				</AbsoluteShapCure>

				{content.items.map((item, i) => (
					<CountingTextBoxed number={i + 1}>
						<Paragraph bottomMargin={0} mixed={true}>
							{parse(item.text1)}
						</Paragraph>
					</CountingTextBoxed>
				))}
			</RelativeElement>
			{/* )}
      </VisibilitySensor> */}
		</ContentCenter>

		<Trust>
			<Oval className="oval" height="136" width="136" top="5" right="0" y="-20">
				<OvalSVG2 />
			</Oval>
			<ContentCenter contentWidth="970">
				<RelativeElement>
					<AbsoluteShapCure rotate={-10} right="85px" top="-25px" hiddenXS>
						<ShapeCurve color={color.blue} />
					</AbsoluteShapCure>
					<Paragraph>
						Trusted by over 500,000 business owners worldwide since 2004!
					</Paragraph>
				</RelativeElement>
			</ContentCenter>
		</Trust>
	</Wrapper>
);

export default WhatWeDoSection;
