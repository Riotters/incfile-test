import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

// Components
import LeftTabPages from "../../atomic/sections/choose-your-business/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import ContentMap from "../../atomic/partials/content-map";

// Content
import {
	nameAvailability,
	tabPages,
	top,
} from "../../static/choose-business-name";
import ChapterLayout from "../../atomic/partials/chapter-layout";

function LLCIndex() {
	return (
		<Layout>
			<SEO
				robots="none"
				title="Start Your Own Business | Incfile's Step-by-Step Course"
				description="Ready to start your own business? Our DIY business formation course will take you through each step, so you can hit the ground running. Learn more."
			/>
			<ChapterLayout top={top.business_name_available}>
				<LeftTabPages content={tabPages} nonDIY pointerEventsTab="none" />
				<MainPageContent>
					<ContentMap content={nameAvailability} />
				</MainPageContent>
			</ChapterLayout>
		</Layout>
	);
}

export default LLCIndex;
