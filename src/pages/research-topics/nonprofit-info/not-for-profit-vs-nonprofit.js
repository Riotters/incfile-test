import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/nonprofit-info/not-for-profit-vs-nonprofit";
import Related from "../../../atomic/sections/learning-center-entity/help-center-article/related";
import Categories from "../../../atomic/sections/learning-center-entity/help-center-article/categories";
import Service from "../../../atomic/sections/learning-center-entity/help-center/service";
import Tools from "../../../atomic/sections/learning-center-entity/help-center-article/tools";
import Rocket from "../../../atomic/sections/review-entity-types/c-corporation/rocket";
import Searchbar from "../../../atomic/molecules/form/help-center-searchbar";
//Texts
import { top, rocket, categories, service, tools } from "../../../static/learning-center-entity/help-center-article";
import { about } from "../../../static/research-topics/nonprofit-info/not-for-profit-vs-nonprofit";

import { related } from "../../../static/research-topics/nonprofit-info";
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
            <SEO title="What is the difference between Non-for-Profit and Nonprofit Corporation?" description="Learn about the key differences between nonprofit and not-for-profit organizations, including legal status, purpose, tax exemption and more." />
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
                        "name": "Not-for-Profit and Nonprofit: What’s the Difference?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Not-for-profit and nonprofit organizations have some important distinctions. While
                        they both exist to collect and distribute money, they are treated differently for the purposes of
                        tax, charters and other reasons. We’ll break down what that means so you can decide which
                        kind of organization is best for you."
                        }
                        },{
                        "@type": "Question",
                        "name": "Similarities Between Nonprofits and Not-for-Profits",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Before we get into the differences between these two types of organization, it’s worth
                        exploring what they have in common.
                        Neither generates a profit for their owners or members.
                        Both types typically exist to offer services and support to individuals, groups or society as a
                        whole.
                        Both can apply for tax-exempt status, but the process is slightly different.
                        After tax-exempt status is granted, donors can deduct their contributions from their taxable
                        income under certain circumstances.
                        Neither type of organization can retain profits or distribute them to owners.
                        Neither type of organization pays dividends.
                        Both of these types of organizations can make money, but it is expected that after paying
                        expenses and operational costs, that any remaining money is distributed to follow the
                        organization’s mission.
                        Workplace requirements, regulation, and compliance guidelines are the same for nonprofits and
                        not-for-profits, and are often identical to those requires of for-profit companies.
                        The easiest states to start a nonprofit."
                        }
                        },{
                        "@type": "Question",
                        "name": "Nonprofits Are Separate Legal Entities, Not-for-Profits Are Not",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Typically, a nonprofit is a “separate entity” for tax, governance and management
                        purposes, in a similar way to an LLC or corporation. Technically, a not-for-profit isn’t generally a
                        separate legal entity, and doesn’t have a separate legal existence to its members. Not-for-profits
                        are less common than nonprofits.
                        Learn how to start a nonprofit organization."
                        }
                        },{
                        "@type": "Question",
                        "name": "The Purpose of Nonprofits and Not-for-Profits Are Slightly Different",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The stated purpose for each type of organization is generally different. Typically:
                        
                        A nonprofit is an organization that exists for a charitable purpose, like offering assistance to
                        socially disadvantaged people, providing education, promoting the arts or running an animal
                        shelter. They typically carry out bigger scale, organized charitable activities.
                        Not-for-profits are generally associations formed by groups of people, for achieving the
                        organization’s objectives. This could include membership associations, sports clubs,
                        organizations for children and similar."
                        }
                        },{
                        "@type": "Question",
                        "name": "Nonprofits have More Scope than Not-for-Profits",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A nonprofit organization can exist to support a wide variety of causes, and there is
                        considerable scope in the types of ways they can help. Not-for-profits tend to be more narrowly
                        focused. Nonprofit organizations are typically larger than not-for-profits.
                        The formation process for a nonprofit organization."
                        }
                        },{
                        "@type": "Question",
                        "name": "The Tax-Exempt Status of These Organizations Does Differ",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nonprofits can apply for tax-exempt status under the 501(c)(3) requirements of the
                        IRS. There are strict guidelines that must be followed for Nonprofits that apply for a 501(c)(3)
                        tax exemption do not need to pay tax on their funding and donations. If they pay employees,
                        then they must pay standard payroll and other salary expenses, and their employees will also
                        be subject to tax. A nonprofit can both employ people and maintain a volunteer program.
                        Volunteers offer their time and services for free.
                        Salaries for employees of nonprofit organizations are typically funded outside of the
                        organization’s fundraising operations.
                        Incfile can help you start your 501(c)(3).
                        Not-for-profits do not qualify for tax-exempt status under 501(c)(3). Instead, a not-for-profit
                        needs to meet 501(c)(7) IRS guidelines to be considered for tax-exempt status. The IRS
                        
                        mandates that a not-for-profit must be organized for pleasure, recreation and other similar non-
                        profitable purposes. It is generally more difficult to become tax-exempt as a not-for-profit than as
                        
                        a nonprofit. Not-for-profits are often run by volunteers, not paid workers. Not-for-profits may
                        have a “membership roster” that benefits from the organization in some way, such as having
                        expenses paid."
                        }
                        },{
                        "@type": "Question",
                        "name": "Banks May Treat These Organizations Differently",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Some banks see a clear distinction between nonprofits and not-for-profits. This is
                        mainly due to nonprofits being considered as an independent legal entity, while not-for-profits
                        are not. This may affect how easy it is to get a bank account and the requirements an
                        organization will need to follow."
                        }
                        },{
                        "@type": "Question",
                        "name": "Nonprofits Have a Charter, Not-for-Profits Do Not",
                        "acceptedAnswer": {
                        
                        "@type": "Answer",
                        "text": "A nonprofit normally has a national or state charter. This charter often provides
                        people involved with the nonprofit with legal and financial protections. Nonprofits have a board
                        that oversees and directs the organization. Not-for-profits typically do not have a charter and are
                        not normally required to have a board."
                        }
                        }]
                    }`}
                </script>
            </Helmet>
        </Layout>
    );
}

export default HelpCenter;
