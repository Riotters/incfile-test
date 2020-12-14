import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import ContentCenter from "../atomic/partials/content-center";
import ShapeCurve from "../atomic/atoms/shapes/curve";
import { color } from "../atomic/atoms/styles/colors";
import RelativeElement from "../atomic/elements/relative-e";
import AbsoluteShapCure from "../atomic/elements/absolute-shape-curve-e";
import ArrowLeft from "../images/arrow-circle.inline.svg";
import Oval from "../atomic/atoms/icons/oval";
import OvalSVG from "../images/ovals/top-left-transparent-babyblue1.inline.svg";
import OvalSVG2 from "../images/medium-571.inline.svg";
import HeadingCenter from "../atomic/partials/heading-center";
import SEO from "../components/seo";
import Layout from "../components/layout";
// text
import { seo, formCheck } from "../static/other/business-name-generator";
import BusinessNameSearchForm from "../atomic/organisms/forms/business-name-search-form";
import { Heading } from "../atomic/atoms/typography/heading";
import { Paragraph } from "../atomic/atoms/typography/paragraph";

const Wrapper = styled.div`
	position: relative;
	padding: 120px 0 100px 0;

	.back-link {
		display: flex;
		align-items: center;
		margin-bottom: 50px;
		font-size: 16px;
		color: ${color.black};
		span {
			transform: rotate(-90deg);
			margin-right: 8px;
		}
	}
`;

const CheckAvailabilityName = ({ location }) => {
	const [entityName, setEntityName] = React.useState("");

	React.useEffect(() => {
		let name =
			typeof window !== `undefined` && location?.state?.businessName
				? location.state.businessName
				: "";
		setEntityName(name);
	}, []);
	return (
		<Layout>
			<SEO title={seo.title} description={seo.desc} />

			<Wrapper>
				<Oval
					className="oval"
					height="570"
					width="570"
					bottom="0"
					left="0"
					y="-50"
				>
					<OvalSVG />
				</Oval>

				<Oval
					className="oval"
					height="570"
					width="570"
					top="0"
					right="0"
					y="30"
				>
					<OvalSVG2 />
				</Oval>

				<ContentCenter>
					<div style={{ display: `flex`, width: `100%` }}>
						<Link to="/business-name-generator/" className="back-link">
							{" "}
							<span>
								{" "}
								<ArrowLeft />{" "}
							</span>{" "}
							Back{" "}
						</Link>
					</div>
					<Heading size={1} template={2} center maxWidth="610">
						{formCheck.header}
					</Heading>
					<Paragraph big maxWidth="750" center>
						{formCheck.text}
					</Paragraph>
					<RelativeElement maxWidth="670px" margin="60px 0 0 0">
						<AbsoluteShapCure rotate={90} right="70" bottom="-25">
							<ShapeCurve color={color.blue} />
						</AbsoluteShapCure>

						<BusinessNameSearchForm propEntityName={entityName} />
					</RelativeElement>
				</ContentCenter>
			</Wrapper>
		</Layout>
	);
};

export default CheckAvailabilityName;
