import React from "react";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Layout from "../components/layout";
import Resources from "../atomic/sections/learn-more/resources";
import Video from "../atomic/sections/learn-more/video";
import ToolsSection from "../atomic/sections/learn-more/tools";
import { tools, help } from "../static/learn-more";
import Comparison from "../atomic/sections/learn-more/comparison";
import Help from "../components/partials/sections/help";
import { Helmet } from "react-helmet";

const LearnMore = () => (
    <Layout>
        <SEO title="LLC, Nonprofit and Incorporation Resource Center | Incfile" description="Learn about the LLC (Limited Liability Company) and Corporation are filed as well as other reporting and compliance requirements" />

        <Top ovalColor="purple-2" imageName="research-tools" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>Everything about forming a business at your fingertips.</h1>
            <p>Learn about the LLC (Limited Liability Company) and Corporation are filed as well as other reporting and compliance requirements</p>
        </Top>

        <Resources />
        <Video />
        <ToolsSection content={tools} />
        <Comparison />
        <Help content={help} />
        <Helmet>
            <script type="application/ld+json">
                {`{
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "Which Business Entity Structure Is Right For You? by Incfile",
                    "description": "Unsure what business structure is best for you?  You’ve probably seen LLC, Inc., Co. or Corporation mentioned after a business name—as in Portfolio Coffeehouse LLC, Apple Inc., or Sony Corporation.   All of these indicate that these businesses have been “incorporated” and have officially filed their business entity with their state. But which business structure should you choose? What even is the difference between all of these official business types? Let us explain.  Still unsure as to which business structure is right for you? We’ve created an easy-to-use, interactive quiz to suggest the type of legal entity that could work for your new business venture: https://www.incfile.com/business-entity-quiz/.",
                    "thumbnailUrl": "https://i.ytimg.com/vi/_u4u3-PQ8a0/default.jpg",
                    "uploadDate": "2020-05-09T20:42:34Z",
                    "duration": "PT2M42S",
                    "embedUrl": "https://www.youtube.com/embed/_u4u3-PQ8a0",
                    "interactionCount": "2182"
                }`}
            </script>
        </Helmet>
    </Layout>
);

export default LearnMore;
