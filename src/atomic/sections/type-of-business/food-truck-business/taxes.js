import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import { color } from "../../../../components/styles/colors";
import { shadow } from "../../../../components/styles/shadows";
import CurveSvg from "../../../../images/curve-babyblue-1.inline.svg";
import { adventages2 } from "../../../../static/type-of-business/food-truck-business";
import parse from "html-react-parser";

const Taxes = () => (
	<Wrapper>
		<Service>
			<TextCenterLayout
				headlineWidth={770}
				textWidth={770}
				headline="Maintaining Your Food Truck Business Documentation"
				text="There are certain forms and legalities you need to follow to keep your food truck business in good standing."
			/>
  
			<Container>
				<AdventagesBox>
					<CurveWrapper>
						<CurveSvg />
					</CurveWrapper>
					{adventages2.items.map((item) => (
						<Adventages
							className="containerMargin"
							style={{ textAlign: "center" }}
							url={item.url}
							urlText={item.urlText}
							circleText={item.circleText}
							headline={item.headline}
							text={parse(item.text)}
							circlePosition="center"
							circleBackgroundColor={color.blue1}
							circleBackgroundShadow={shadow.blue1}
						/>
					))}
				</AdventagesBox>
			</Container>
		</Service>
	</Wrapper>
);

const Wrapper = styled.div`
	padding-bottom: 0px;
	padding-top: 100px;
	position: relative;
	overflow: hidden;
`;

const Service = styled.div`
	padding: 64px 0;
`;

const AdventagesBox = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 30px;
    margin-top: 76px;
    margin-bottom 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const CurveWrapper = styled.div`
	position: absolute;
	right: -15px;
	top: -85px;

	@media (max-width: 1200px) {
		display: none;
	}
`;

export default Taxes;
