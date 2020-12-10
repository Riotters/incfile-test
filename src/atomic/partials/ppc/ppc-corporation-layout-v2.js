import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SEO from "../../../components/seo";
import Top from "../../../atomic/partials/top";
import Buttonsbox from "../../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../../atomic/molecules/buttons/button";

import CartBlock from "../../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../../atomic/molecules/blocks/rating-block";
import RatingRow from "../../../atomic/atoms/boxes/rating-row";
import OvalSvg2 from "../../../images/ovals/top-right-transparent-blue2.inline.svg";
import OvalSvg3 from "../../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import OvalSvg4 from "../../../images/ovals/top-right-transparent-orange3.inline.svg";
import Curve2SVG from "../../../images/curves/bottom-left-top-right-reverse-big.inline.svg";

import { color, gradient } from "../../../atomic/atoms/styles/colors";
import Oval from "../../../atomic/atoms/icons/oval";
import HeadingCenter from "../../../atomic/partials/heading-center";
import ContentCenter from "../../../atomic/partials/content-center";
import LightBoxVideo from "../../../components/LightBox";
import Curve from "../../../atomic/atoms/icons/curve";
import PacketsSection from "../../../atomic/sections/learning-center-entity/alaska-corporation/packets";
import Accordion from "../../../atomic/organisms/accordion/accordion";
import Rocket from "../../../atomic/sections/learning-center-entity/alaska-corporation/rocket";
import FilingTimeAndPriceBox from "../../../atomic/state-corporation/filing-time-and-price-box";
import ComplianceRequirementBox from "../../../atomic/state-corporation/compliance-requirement-box";
import { getFullPricesAndFilings } from "../../../api/Api";

import { statesArray } from "../../../static/states-v2";
import {
	questions,
	service,
} from "../../../static/learning-center-entity/kentucky-corporation";
import HTMLReactParser from "html-react-parser";

const PPCCorporationLayoutV2 = ({ stateCode, videoID, content }) => {
    const state = statesArray.filter(state => state.code === stateCode)[0];
    const stateName = state ? state.name : '';
	const [dataApi, setDataApi] = React.useState({});
	const [
		filingTimeAndRequirementHeader,
		setFilingTimeAndRequirementHeader,
	] = React.useState("");

	React.useEffect(() => {
		getFullPricesAndFilings(state.name, "Corporation").then((data) => {
			setDataApi(data);
			setFilingTimeAndRequirementHeader(
				`Annual ${data.prices.state} Filing Requirements`
			);
		});
	}, [state.name]);

	return (
		<>
            <SEO
                robots="noindex, follow"
				title={`${stateName} Corporation Filing`}
                description={`Form a Corporation in ${stateName}`}
			/>
			<Top
				imageName="mr-bulb-corporation-california-8302"
				imageAlt=""
				ovalColor="purple-2"
				headlineWidth="560"
			>
				<h1>{HTMLReactParser(content.topHeader)}</h1>
				<p>{HTMLReactParser(content.topText ?? `$0 + State Fee & 1st Year FREE Registered Agent`)}</p>
				<Buttonsbox>
                    <Button
                        externalLink
                        theme="primary56"
                        arrow
                        content={{
                            text: `Start My Corporation`,
                            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=${stateCode}`
                        }}
                    />
				</Buttonsbox>

				<RatingRow>
					<CartBlock />
					<RatingBlock />
				</RatingRow>
			</Top>

			<ServiceSection>
				<Oval className="oval" height={420} width={420} top="20" right="0">
					<OvalSvg2 />
				</Oval>
				<Oval className="oval" height={720} width={720} top="60" left="0">
					<OvalSvg3 />
				</Oval>
				<HeadingCenter
					headline={service.header}
					textWidth="590"
					text={service.text}
					bottomMargin="48"
					bottomMarginLG="80"
				/>
				<ContentCenter style={{ marginBottom: "149px" }}>
					<Curve top="-115" left="80" rotate={180} color={color.blue2}>
						<Curve2SVG />
					</Curve>
					<LightBoxVideo
						thumbnailVideo="comparison-chart-video-3611"
						videoID="372490609"
						vimeo
					/>
				</ContentCenter>

				{/* Filing Times & Requirement section */}
				<ContentCenter contentWidth={970}>
					<HeadingCenter
						headline={filingTimeAndRequirementHeader}
						textWidth="770"
						bottomMargin="48"
						bottomMarginLG="80"
					/>
					<FilingTimeAndPriceBox data={dataApi} />
					<ComplianceRequirementBox data={dataApi} style={{ margin: 0 }} />
				</ContentCenter>
			</ServiceSection>

			<PacketsSection data={dataApi} />

			<QuestionSection>
				<Oval className="oval" height={570} width={570} top="20" right="0">
					<OvalSvg4 />
				</Oval>
				<HeadingCenter headline={`Commonly Asked Questions For Starting a ${stateName} Corporation`} textWidth="770" />
				<ContentCenter style={{ marginBottom: "48px" }}>
					<Accordion
						content={questions}
						curve
						curveColor={color.blue1}
						curveLeft="-15px"
					/>
				</ContentCenter>
				<ContentCenter style={{ marginBottom: "48px" }}>
					<Button
						content={{
							text: `View all corporation FAQ's`,
							url: `/research-topics/c-corporation-info/`,
						}}
						width={300}
						padding="12px 48px"
					/>
				</ContentCenter>
			</QuestionSection>

			<Rocket urlParams={`?entityType=CCorporation&entityState=${stateCode}`} />
		</>
	);
};

const QuestionSection = styled.section`
	background-image: ${gradient.orange3};
	position: relative;
	padding-top: 100px;
	margin-top: 52px;
	margin-bottom: 148px;
`;

const ServiceSection = styled.section`
	background-image: ${gradient.blue3};
	padding-top: 100px;
	position: relative;
	margin-bottom: 100px;
	overflow: hidden;
`;

export default PPCCorporationLayoutV2;

PPCCorporationLayoutV2.propTypes = {
    stateCode: PropTypes.string.isRequired,
    content: {
        topHeader: PropTypes.string.isRequired
    }
}