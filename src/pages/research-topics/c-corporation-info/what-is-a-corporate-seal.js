import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/c-corporation-info/corp-seal";
import Related from "../../../atomic/sections/learning-center-entity/help-center-article/related";
import Categories from "../../../atomic/sections/learning-center-entity/help-center-article/categories";
import Service from "../../../atomic/sections/learning-center-entity/help-center/service";
import Tools from "../../../atomic/sections/learning-center-entity/help-center-article/tools";
import Rocket from "../../../atomic/sections/review-entity-types/c-corporation/rocket";
import Searchbar from "../../../atomic/molecules/form/help-center-searchbar";
//Texts
import { top, rocket, categories, service, tools } from "../../../static/learning-center-entity/help-center-article";
import { about } from "../../../static/research-topics/c-corporation-info/corp-seal";

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
            <SEO title="What is a Corporate Seal or Company Seal? | Incfile" description="A C Corporation is one of several ways to legally recognize a business for tax, regulatory and official reasons. See if starting a C Corp is right for you." />
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
                        "mainEntity": [{
                          "@type": "Question",
                          "name": "What is a Corporate Seal?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A corporate seal (also known as a company seal) is a special stamp customized to your company. It can be used to emboss particular documents with details about your company. Although company seals are not typically required in most jurisdictions, they can add a level of formality to important company documents."
                          }
                        },{
                          "@type": "Question",
                          "name": "What Information Is Included on a Corporate Seal?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A corporate seal normally includes:
                      <ul>
                      <li>The name of your business.</li>
                      <li>The year your business was incorporated.</li>
                      <li>The state where your business was incorporated.</li>
                      </ul>"
                          }
                        },{
                          "@type": "Question",
                          "name": "What Is a Corporate Seal Used For?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A corporate seal can be used to mark documents as “official.” Company seals can be used on documents like share certificates, meeting minutes, various contracts, deeds, and similar items. A corporate seal is typically recognized by the board of directors as a way to authorize documents on behalf of a corporation."
                          }
                        },{
                          "@type": "Question",
                          "name": "What Types of Business Entities Can Have a Company Seal?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Limited liability companies (LLCs), S Corporations and C Corporations can have a company seal."
                          }
                        },{
                          "@type": "Question",
                          "name": "Can I Use a Corporate Seal to Issue Company Stock or LLC Membership Certificates?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, you can stamp stock certificates (C Corporations, S Corporations) or membership certificates (LLCs) with a company seal. Such certificates may also need to be signed by the president of the company. Note that in many cases, paper certificates are not needed to prove ownership of stock, as there are often digital records that ownership has been granted."
                          }
                        },{
                          "@type": "Question",
                          "name": "What Types of Corporate Seals Were Available Historically?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Traditionally, a company seal would have been used with sealing wax. The wax would be heated up and poured onto the document, and then a stamp would be used to leave an impression in the wax. Rubber stamps have also been used as corporate seals over the years. Today, many corporate seals work by using an embossing device to press the company details into the paper."
                          }
                        },{
                          "@type": "Question",
                          "name": "Is There a Difference Between Sealed and Unsealed Documents for a Corporation?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In most cases, corporations do not need to officially “seal” documents, and there’s no practical difference between a sealed document and an unsealed one that is properly authorized by an officer of the company. Note that some types of documents or jurisdictions may still require a seal, so speak with a corporate attorney with expertise in business matters in your state."
                          }
                        },{
                          "@type": "Question",
                          "name": "Am I Legally Required to Have a Company Seal?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In most cases, no. There may be some jurisdictions or states where you’re required to make specific documents with a seal, but in most cases, the signature of a controlling officer of the company will provide proper authorization. Some states do still recognize the legal power of a corporate seal. If you’re not sure, speak with a corporate attorney."
                          }
                        },{
                          "@type": "Question",
                          "name": "Why Should I Get a Corporate Seal?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Although the use of a company seal isn’t legally required in most cases, embossing an official document can add authenticity and authority. In some cases, a corporate seal may still be required; for example, if your business is a party to a deed, lease or another real estate document. Some banks will also require a corporate seal."
                          }
                        },{
                          "@type": "Question",
                          "name": "Where Do I Get a Corporate Seal?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Incfile provides a corporate seal as part of your <ahref='https://www.incfile.com/blog/post/how-to-use-incfile-corporate-kit/'>business formation kit.</a> The kit includes:
                      <ul>
                      <li>A corporate seal and embosser.</li>
                      <li>A binder and slipcase, personalized with your business name.</li>
                      <li>20 certificates for LLC members or corporate stockholders.</li>
                      <li>Corporate forms and documents, including formation papers.</li>
                      <li>A transfer ledger.</li>
                      <li>Tabbed, mylar separators to keep everything organized.</li>
                      </ul>"
                          }
                        }]
                    }`}
                </script>
            </Helmet>
        </Layout>
    );
}

export default HelpCenter;
