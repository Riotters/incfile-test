import React, { useState } from "react";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import ButtonsBox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import Resources from "../atomic/sections/learn-more/resources";
import Video from "../atomic/sections/learn-more/video";
import ToolsSection from "../atomic/sections/learn-more/tools";
import { tools, help } from "../static/learn-more";
import { top, conclusion, calculator } from "../static/incfile-vs-legalzoom";
import Comparison from "../atomic/sections/learn-more/comparison";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
import RatingRow from "../atomic/atoms/boxes/rating-row";

import About from "../atomic/sections/incfile-vs/about";
import Conclusion from "../atomic/sections/incfile-vs/conclusion";
import Calculator from "../atomic/sections/learning-center-entity/sales-tax-calculator/calculator";

const IncfileVsLegalzoom = () => {
	const [selectedState, setSelectedState] = useState("");
	const [stateTax, setStateTax] = useState({});

	const [topCity, setTopCity] = useState({
		header: ``,
		text: `Note: You may also need to add municipality and/or city rates depending on your location.`,
		circles: [],
	});

	const [explore, setExplore] = useState({
		header: ``,
		table: {
			headers: [`City Name`, `State`, `County`, `City`, `District(s)`],
			rows: [],
		},
	});

	const getState = (selectedState) => {
		setSelectedState(selectedState);

		fetchData(selectedState).then((data) => {
			setExplore((prevState) => {
				let newData = { ...prevState };
				newData.header = `Explore other ${selectedState} cities`;
				newData.table.rows = data.entries;
				return newData;
			});

			setTopCity((prevState) => ({
				...prevState,
				header: `Additional tax rates for a few of the top cities in ${selectedState}`,
				circles: data.topCity,
			}));

			setStateTax(data.state);
		});
	};

	const fetchData = async (state) => {
		const data = await fetch(
			`${process.env.INCFILE_API_URL}/getSaleTaxes/?state_code=${state}`
		).then((response) => response.json());
		return data;
	};

	return (
		<Layout>
			<SEO
				title="LLC, Nonprofit and Incorporation Resource Center | Incfile"
				description="Learn about the LLC (Limited Liability Company) and Corporation are filed as well as other reporting and compliance requirements"
			/>

			<Top
				ovalColor="green"
				imageName="mr-bulb-incfile-vs-legalzoom-7299"
				imageAlt="Mr Bulb Incfile vs Legalzoom"
				headlineWidth={700}
				imageMobilePosition="-8%"
			>
				<h1>{top.header}</h1>
				<p>{top.text}</p>
				<RatingRow topMargin="0">
					<CartBlock />
					<RatingBlock />
				</RatingRow>
			</Top>
			<About />
			<Conclusion content={conclusion} />
			<Calculator
				content={calculator}
				state={stateTax}
				onSelectState={getState}
				id="sales-calculator"
			/>
		</Layout>
	);
};

export default IncfileVsLegalzoom;
