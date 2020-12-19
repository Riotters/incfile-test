import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import TopSection from "../atomic/sections/other/business-name-generator/top";
import UniqueSection from "../atomic/sections/other/business-name-generator/unique";
import WhyBrandNameSection from "../atomic/sections/other/business-name-generator/why-brand-name";
import Brainstorm from "../atomic/sections/other/business-name-generator/brainstorm";

// text
import {
	brainstorm,
	seo,
	top,
	whyBrandName,
} from "../static/other/business-name-generator";
import Characteristics from "../atomic/sections/other/business-name-generator/characteristics";

const BusinessNameGenerator = () => (
	<Layout>
		<SEO title={seo.title} description={seo.desc} />
		<TopSection content={top} />
		<WhyBrandNameSection content={whyBrandName} />
		<UniqueSection />
		<Brainstorm content={brainstorm} />
        <Characteristics content={brainstorm} />
        <Helmet>
            <script type="application/ld+json">
                {`{
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "How to Name a Business by Incfile",
                    "description": "Your brand name needs to convey who you are, what you do and why people should do business with you. So, where do you start?  We’ve put together a little checklist that you should follow while coming up with your new business name:  - People can spell and pronounce it   - It leaves room for your business to change - It isn’t too generic or vague - It’s different from your competitors - It’s snappy and memorable — not too long  - It isn’t too trendy or dated - It’s available for use   Or use our Business Name Search Tool to make it super easy to validate your business name and get you on your way: https://www.incfile.com/business-name-search/.",
                    "thumbnailUrl": "https://i.ytimg.com/vi/ZskqgrXViUA/default.jpg",
                    "uploadDate": "2020-12-11T18:19:08Z",
                    "duration": "PT2M12S",
                    "embedUrl": "https://www.youtube.com/embed/ZskqgrXViUA",
                    "interactionCount": "25"
                }`}
            </script>
        </Helmet>
	</Layout>
);

export default BusinessNameGenerator;
