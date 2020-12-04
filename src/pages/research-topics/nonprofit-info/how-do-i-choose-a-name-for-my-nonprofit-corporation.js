import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Buttonsbox from "../../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../../atomic/molecules/buttons/button";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/nonprofit-info/nonprofit-corp-name";
import Related from "../../../atomic/sections/learning-center-entity/help-center-article/related";
import Categories from "../../../atomic/sections/learning-center-entity/help-center-article/categories";
import Service from "../../../atomic/sections/learning-center-entity/help-center/service";
import Tools from "../../../atomic/sections/learning-center-entity/help-center-article/tools";
import Benefits from "../../../components/partials/sections/benefits";
import Articles from "../../../components/partials/sections/articles";
import Rocket from "../../../atomic/sections/review-entity-types/c-corporation/rocket";
import Searchbar from "../../../atomic/molecules/form/help-center-searchbar";
//Texts
import { top, rocket, categories, service, tools } from "../../../static/learning-center-entity/help-center-article";
import { about } from "../../../static/research-topics/nonprofit-info/nonprofit-corp-name";
import { related } from "../../../static/research-topics/nonprofit-info";

const HelpCenter = () => {
    const currentUri = typeof window !== 'undefined' ? window.location.pathname : '';
    const relatedInfo = {
        header: `Related Articles`,
        text: `Other users were also interested in knowing about…`,
        buttons: related.buttons.filter(item => {
            return item.url !== currentUri;
        })
    };

    React.useEffect(() => {
        const el = document.getElementById('answers');
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })

    return (
        <Layout>
            <SEO title="How do I choose a name for my Nonprofit Corporation?" description="Learn about the key differences between nonprofit and not-for-profit organizations, including legal status, purpose, tax exemption and more." />
            <Top imageName="mrs-bulb-help-center-article" imageAlt="Mrs Bulb and with checklist" ovalColor="green">
                <h1>{top.header}</h1>
                <p>{top.text}</p>
                <Searchbar />
            </Top>
            <About content={about} />
            <Related content={relatedInfo} />
            <Categories content={categories} />
            <Service content={service} />
            <Tools content={tools} />
            <Rocket content={rocket} />
        </Layout>
    );
}

export default HelpCenter;
