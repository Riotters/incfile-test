import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { top } from "../static/glossary";
//Sections
import Top from "../atomic/sections/manage-your-company/compare-state-filling-time/top";
import GlossaryFAQSection from "../atomic/sections/glossary/faq";

import {glossary} from "../static/glossary";
import { Helmet } from "react-helmet";

const GlossaryPage = () => {
    const jsonGlossary = [];

    glossary.items.map(item => {
        let obj = {
            "@type": `DefinedTerm`,
            "name": item.question,
            "description": item.answer
        }
        
        return jsonGlossary.push(obj);
    });

    return (
        <Layout>
            <SEO title="Business Terms Glossary: Definitions of Important Terminology" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
            <Top content={top} ovalTop={23} />
            <GlossaryFAQSection />

            <Helmet>
                <script type="application/ld+json">
                    {`{
                        "@context": "http://schema.org/",
                        "@type": ["DefinedTermSet","Book"],
                        "@id": "https://www.incfile.com/glossary/",
                        "name": "The Incfile Business Glossary",
                        "mainEntity": ${JSON.stringify(jsonGlossary)}
                    }`}
            </script>
            </Helmet>
        </Layout>
    );
};

export default GlossaryPage;
