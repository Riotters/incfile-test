import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Buttonsbox from "../../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../../atomic/molecules/buttons/button";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/nonprofit-info/nonprofit-tax-exempt";
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
import { about } from "../../../static/research-topics/nonprofit-info/nonprofit-tax-exempt";
import { related } from "../../../static/research-topics/nonprofit-info";
import { Helmet } from "react-helmet";
import {Heading} from "../../../atomic/atoms/typography/heading";

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
            <SEO title="Is Nonprofit the same as Tax Exempt?" description="Learn about the key differences between nonprofit and not-for-profit organizations, including legal status, purpose, tax exemption and more." />
            <Top imageName="mrs-bulb-help-center-article" imageAlt="Mrs Bulb and with checklist" ovalColor="green">
                <Heading size={2} template={1} left>{top.header}</Heading>
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
                        "name": "Is “Nonprofit” the Same as “Tax-Exempt”?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely not. Being formed as a Nonprofit Corporation does not automatically
                        mean that the corporation is tax-exempt for federal and, in some instances, state income tax. A
                        “tax-exempt” Corporation is a distinctive entity that has gained an exemption from income tax
                        liability. A Nonprofit Corporation is not eligible for exemption from income tax liability until it
                        applies for and has been approved by the IRS for tax-exempt status."
                        }}
                    }`}
                </script>
            </Helmet>
        </Layout>
    );
}

export default HelpCenter;
