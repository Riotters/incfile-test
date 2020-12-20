import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import Tables from "../atomic/sections/learning-center-entity/state-filing-times/tables";
import Cta from "../atomic/sections/general/cta";

//Texts
import {
	top,
	tables,
	cta,
} from "../static/learning-center-entity/state-filing-times";

const StateFilingTimes = () => {
	const [stateFilingTimes, setStateFilingTimes] = useState([]);

	const fetchData = async () => {
		const data = await fetch(
			`${process.env.INCFILE_API_URL}/getStateFilingTimes`
		).then((response) => response.json());
		return data;
	};

	useEffect(() => {
		fetchData().then((data) => {
			setStateFilingTimes(data);
		});
	}, []);

	return (
		<Layout>
			<SEO
				title="State Filing Times | State Filing Times Tool"
				description="Corporation State Filing Times"
			/>
			<Top
				imageName="mr-bulb-state-filing-times-3289"
				imageAlt="state filing times"
				ovalColor="purple-2"
				textWidth="530"
			>
				<h1>{top.header}</h1>
				<p>{top.text}</p>
				<RatingRow topMargin="0">
					<CartBlock />
					<RatingBlock />
				</RatingRow>
			</Top>
			<Tables content={tables} stateFilingTimes={stateFilingTimes} />
			<Cta content={cta} />
		</Layout>
	);
};

export default StateFilingTimes;
