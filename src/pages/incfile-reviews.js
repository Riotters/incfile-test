import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TopSection from "../atomic/sections/other/incfile-reviews/top-section";
import ImprovementCustomerServiceSection from "../atomic/sections/other/incfile-reviews/improvement-to-customer-service";
import CustomerComplaintSection from "../atomic/sections/other/incfile-reviews/customer-complaint";

// Contentr
import { complaints, top, improvement } from "../static/other/incfile-reviews";

const IncfileReviews = () => (
	<Layout>
		<SEO
			title="Incfile Reviews & Customer Service"
			description="At Incfile, we’re invested in providing the customer service and resources you need to make the best choice for your business needs. Find out more."
		/>

		<TopSection content={top} />
		<ImprovementCustomerServiceSection content={improvement} />
		<CustomerComplaintSection content={complaints} />
	</Layout>
);

export default IncfileReviews;
