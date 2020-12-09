import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/learning-center-entity/start-a-business/about";
import CheckType from "../../atomic/sections/learning-center-entity/start-a-business/check-type";
import BusinessStructure from "../../atomic/sections/learning-center-entity/start-a-business/business-structure";
import Rocket from "../../atomic/sections/review-entity-types/c-corporation/rocket";
//Texts
import { top, about, checkType, businessStructure, launchBusiness } from "../../static/learning-center-entity/start-a-business";
import Articles from "../../atomic/sections/articles";
import { Helmet } from "react-helmet";

const HelpCenter = () => (
    <Layout>
        <SEO
            title="Business Ideas & Tips - Guides to Starting Your Own Business"
            description='From running an Amazon business to opening your own restaurant, our "Start a Business" guides have ideas, industry tips, and more. Start your business now!' />
        <Top imageName="mr-bulb-business-startup-guides" imageAlt="Business Startup Guides" ovalColor="sun">
            <h1>{top.header}</h1>
            <p>{top.text}</p>
            <Buttonsbox>
                <Button content={top.buttons[0]} theme="primary56" arrow />
            </Buttonsbox>
            <RatingRow>
                <CartBlock />
                <RatingBlock />
            </RatingRow>
        </Top>
        <About content={about} />
        <CheckType content={checkType} />
        <BusinessStructure content={businessStructure} />
        <Rocket content={launchBusiness} />
        <Articles categoryId={296} />
        
        <Helmet>
            <script type="application/ld+json">{`
                {
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "How to Come Up with a Business Idea by Incfile",
                    "description": "Want to become an entrepreneur but aren't sure what type of business to start? Here are five questions you can ask yourself to come up with the perfect business idea for you.   Step 1: Ask What am I good at? Step 2: Ask What do I love to do? Step 3: Ask What problems can I solve? Step 4: Ask What can you improve upon? Step 5: Where is the money?   Asking yourself these questions helps you brainstorm business ideas that you're passionate about and that serve a need in your market. If you want more ideas, check out Incfile's Business Startup Guides for everything from opening a brewery to starting an Amazon business at the link below.   Helpful Resources:  - File your official business incorporation paperwork for free at www.incfile.com - Browse types of businesses you can start and see business ideas by industry at https://www.incfile.com/start-a-business/",
                    "thumbnailUrl": "https://i.ytimg.com/vi/6ItzICKbe_0/default.jpg",
                    "uploadDate": "2020-08-14T18:32:35Z",
                    "duration": "PT1M27S",
                    "embedUrl": "https://www.youtube.com/embed/6ItzICKbe_0",
                    "interactionCount": "14"
                }
            `}</script>
        </Helmet>
    </Layout>
);

export default HelpCenter;
