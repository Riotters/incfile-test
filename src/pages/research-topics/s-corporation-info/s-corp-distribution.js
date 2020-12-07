import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Helmet from "react-helmet";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/s-corporation-info/s-corp-distribution";
import Related from "../../../atomic/sections/learning-center-entity/help-center-article/related";
import Categories from "../../../atomic/sections/learning-center-entity/help-center-article/categories";
import Service from "../../../atomic/sections/learning-center-entity/help-center/service";
import Tools from "../../../atomic/sections/learning-center-entity/help-center-article/tools";
import Rocket from "../../../atomic/sections/review-entity-types/c-corporation/rocket";
import Searchbar from "../../../atomic/molecules/form/help-center-searchbar";
//Texts
import { top, rocket, categories, service, tools } from "../../../static/learning-center-entity/help-center-article";
import { about } from "../../../static/research-topics/s-corporation-info/s-corp-distribution";
import { related } from "../../../static/research-topics/s-corporation-info";
import {Heading} from "../../../atomic/atoms/typography/heading";

const HelpCenter = () => {
    const currentUri = typeof window !== 'undefined' ? window.location.pathname : '';
    const relatedInfo ={
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
            <SEO
                title="How to Take a Distribution from an S Corp"
                description="Q & A for LLC and other forms of corporations. Learning Center for Incorporating in every state."
            />
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
                "mainEntity": [{
                "@type": "Question",
                "name": "How to Take a Distribution from an S Corp",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "S Corporations can be a great way to reduce the amount of tax that you pay as a
                business owner. You can be treated as an S Corporation by the Internal Revenue Service (IRS)
                in a couple of different ways. You can choose to originally file as an S Corporation, or you can
                start a limited liability company (LLC) and file a Form 2553 to be treated as an S Corporation for
                tax purposes."
                }
                },{
                "@type": "Question",
                "name": "Taking Earnings and Profits Out of an S Corporation",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "As a business owner, there are a couple of ways to take money out of an S
                Corporation:
                By paying yourself a “reasonable” salary
                By taking money out as a distribution, based on ownership in the company
                It’s the difference between your salary amount and your distribution amount, which reduces the
                amount of tax that you owe."
                }
                },{
                "@type": "Question",
                "name": "How an S Corporation Saves You Money",
                "acceptedAnswer": {
                "@type": "Answer",
                
                "text": "S Corporations reduce your taxes by lessening the amount of payroll or self-
                employment tax you pay. Money that you take out as a distribution is not subject to the 15.3
                
                percent payroll or self-employment tax, whereas your regular salary payments are."
                }
                },{
                "@type": "Question",
                "name": "Taxes You Pay on S Corporation Salary and Payroll Earnings",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "S Corporations must have a payroll and salaried employees. Even if you’re running
                the business by yourself or with a spouse, you will still need to run payroll. You will pay several
                types of tax on any payroll amounts that you pay to employees or business owners:
                Employer payroll tax of 7.65 percent on payroll amounts earned
                Employee payroll tax of 7.65 percent on payroll amounts earned
                Federal income tax on payroll amounts earned after a standard deduction
                State income tax on payroll amounts earned after a state deduction
                Unemployment taxes payable to the IRS (FUTA) and your state (SUTA)"
                }
                },{
                "@type": "Question",
                "name": "Taxes You Pay on S Corporation Distributions",
                "acceptedAnswer": {
                
                "@type": "Answer",
                "text": "Money that you don’t take out of your business as payroll can be taken out as a
                distribution. When you make a distribution from an S Corporation, anyone receiving a
                distribution will pay taxes as follows:
                Federal income tax on money distributed
                State income tax on money distributed
                The biggest difference, and the advantage of being taxed as an S Corporation, is that you won’t
                pay self-employment or payroll tax on the distributions. This saves you a total of 15.3 percent on
                what you pay out as a distribution."
                }
                },{
                "@type": "Question",
                "name": "Why You Can’t Just Pay Yourself Through S Corporation Distributions",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "Since you don’t pay payroll or self-employment tax on profit distributions, you might
                ask why you don’t just take all the money out as a distribution. The IRS is aware that business
                owners may try to do this and have rules in place to prevent it. If you breach these rules, you will
                need to pay penalties, extra taxes and interest.
                The main rule is that you must pay any owners (or corporate officers) in the S Corporation a
                “reasonable salary.”"
                }
                },{
                "@type": "Question",
                "name": "Defining a Reasonable Salary",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "Unfortunately, the IRS does not provide specific guidelines on what a “reasonable
                salary” is, but we can infer some guidelines.
                You should pay owners/corporate officers as much as they would reasonably earn performing
                the same role for another business.
                You should look at salary comparison websites like Glassdoor to see what people in similar
                roles are paid and make that a baseline.
                Take into account experience, length of time in the role and expertise when setting a salary."
                }
                },{
                "@type": "Question",
                "name": "S Corporation Distribution Rules",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "When you pay out distributions, you must pay them to owners/corporate officers
                based on their ownership in the business. This ownership could be set by the operating
                agreement, or by the issuance or purchase of shares in the business.
                For example, if you pay out $50,000 in distributions and person A owns 50 percent of the S
                Corporation, person B owns 30 percent and person C owns 20 percent:
                Person A would receive $25,000 in distributions.
                Person B would receive $15,000 in distributions.
                Person C would receive $10,000 in distributions."
                }
                },{
                "@type": "Question",
                "name": "Reporting S Corporation Payroll and Distributions",
                
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "You will need to report earnings and profits in several ways:
                Payroll returns need to be filed with the IRS and your state department of revenue.
                End of year payroll returns like a W2 need to be filed with the proper agencies.
                Payroll amounts will be reported on your Form 1120S.
                Distributions are reported and filed on an 1120S and your personal tax return."
                }
                }]
            }`}
                </script>
            </Helmet>
        </Layout>
    );
}

export default HelpCenter;
