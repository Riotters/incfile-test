import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/c-corporation-info/corp-managing";
import Related from "../../../atomic/sections/learning-center-entity/help-center-article/related";
import Categories from "../../../atomic/sections/learning-center-entity/help-center-article/categories";
import Service from "../../../atomic/sections/learning-center-entity/help-center/service";
import Tools from "../../../atomic/sections/learning-center-entity/help-center-article/tools";
import Rocket from "../../../atomic/sections/review-entity-types/c-corporation/rocket";
import Searchbar from "../../../atomic/molecules/form/help-center-searchbar";
//Texts
import { top, rocket, categories, service, tools } from "../../../static/learning-center-entity/help-center-article";
import { about } from "../../../static/research-topics/c-corporation-info/corp-managing";

import { related } from "../../../static/research-topics/c-corporation-info";
import { Helmet } from "react-helmet";

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
            <SEO title="How is a Corporation Managed? | Archive articles" description="A C Corporation is one of several ways to legally recognize a business for tax, regulatory and official reasons. See if starting a C Corp is right for you." />
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
            <Helmet>
                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": {
                            "@type": "Question",
                            "name": "How is a Corporation Managed?",
                            "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A Corporation is managed and run by its directors and officers. The directors are
                            appointed by the shareholders and are responsible for the overall management and corporate
                            governance of the corporation. The directors appoint the officers who are responsible for the
                            day to management and operations of the corporation. The typical officer positions are
                            president, vice-president, treasurer, and secretary, although there can be more and sometimes
                            different titles are used. In most states only one director and one officer is required, and they
                            can usually be the same person."
                            }
                        }
                    }`}
                </script>
            </Helmet>
        </Layout>
    );
}

export default HelpCenter;
