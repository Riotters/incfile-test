import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/other/start-an-llc/about";
import State from "../atomic/sections/other/start-an-llc/state";
import Service from "../atomic/sections/other/start-an-llc/service";
import Faq from "../atomic/sections/other/start-an-llc/faq";
import Rocket from "../atomic/sections/review-entity-types/c-corporation/rocket";
import PacketsSection from "../atomic/sections/learning-center-entity/alaska-corporation/packets";

//Texts
import { top, about, state, service, faq, rocket } from "../static/other/start-an-llc";
import { Helmet } from "react-helmet";

const StartAnLLC = () => {
  const [dataApi, setDataApi] = React.useState({});
  const renderPackge = (data) => {
    setDataApi(data);
  };
    return (
        <Layout>
            <SEO title="How to Start an LLC | Starting an LLC with Incfile" description="Forming a limited liability company is simple and comes with lots of advantages for your small business or startup. Learn how to create your LLC today." />
            <Top imageName="mrs-bulb-start-an-llc-4300" imageAlt="Mrs Bulb and with checklist" ovalColor="sun" headlineWidth="550" textWidth="430">
                <h1>{top.header}</h1>
                <p>{top.text}</p>
                <Buttonsbox>
                    <Button content={top.button[0]} theme="primary56" width="200px" arrow />
                </Buttonsbox>
                <RatingRow>
                    <CartBlock />
                    <RatingBlock />
                </RatingRow>
            </Top>
            <About content={about} />
            <State content={state} getDataForVariants={renderPackge} />
            <PacketsSection data={dataApi} />
            <Service content={service} />
            <Faq content={faq} />
            <Rocket content={rocket} />

            <Helmet>
            {/* Video */}
            <script type="application/ld+json">{`
                {
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "How to Start an LLC by Incfile",
                    "description": "By now you've probably researched and read about the benefits of setting up an LLC. Now you're ready to make your business official and protect your personal assets.  As referenced in the video, here is a link to Incfile's 'Business Name Search' tool: https://www.incfile.com/business-name-search/.",
                    "thumbnailUrl": "https://i.ytimg.com/vi/R_oIgzYh7NU/default.jpg",
                    "uploadDate": "2020-04-11T14:27:28.000Z",
                    "duration": "PT2M59S",
                    "embedUrl": "https://www.youtube.com/embed/R_oIgzYh7NU",
                    "interactionCount": "24"
                }
            `}</script>

            {/* FAQs */}
            <script type="application/ld+json">{`
                {
                    "@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How is an LLC Taxed?","acceptedAnswer":{"@type":"Answer","text":"For federal income tax purposes the profits of an LLC (Limited Liability Company) 'pass through' to the personal income of the members/owners. In the case of a single member LLC it is taxed the same as a sole proprietorship (i.e. typically filed on the schedule C of the owner's personal income tax filing). In the case of a multi member member it is taxed the same as a partnership (i.e. a 1065 partnership return is filed with the IRS, with a schedule K-1 being supplied to each partner/member showing the proportional profit/loss allocated to them, with this being filed on the schedule C or E). NOTE: These are general tax explanations and may not apply to everyone. You should confer with the appropriate accounting/tax specialists to make sure you understand your personal tax liability."}},{"@type":"Question","name":"What is the Management Structure of an LLC?","acceptedAnswer":{"@type":"Answer","text":"An LLC is typically managed by its members/owners (referred to as member-managed). In that respect an LLC is unlike a corporation, which has a much more rigid and defined management structure, including directors and officers. All owners of the LLC are typically referred to as members, and they can have control and voting interest proportional to their ownership interest, or in proportions different from their ownership interest; however the members agree."}},{"@type":"Question","name":"Are Non-US Residents allowed to own a Corporation of LLC?","acceptedAnswer":{"@type":"Answer","text":"There are no citizenship or residence requirements for ownership of a C Corporation or an LLC. The S Corporation however does not allow nonresident aliens to be shareholders (owner), but any US citizen or resident alien may be a shareholder (owner). You would, of course, require an in state street address for the state to forward official legal and tax correspondence including service of process, known as the registered agent address, but neither residency nor citizenship is required for ownership of a C Corporation or an LLC."}},{"@type":"Question","name":"Can I form an LLC with just one member?","acceptedAnswer":{"@type":"Answer","text":"There was a time when almost every state required the LLC to have two or more members, but that is no longer the case. This important change came in response to revised IRS regulations that clearly permitted single-member LLCs. As a result, in most states, if you plan to be the sole owner of a business and you wish to limit your personal liability, you can choose between forming a corporation or an LLC."}},{"@type":"Question","name":"What is an Operating Agreement?","acceptedAnswer":{"@type":"Answer","text":"The operating agreement is akin to a partnership agreement for a General Partnership or Limited Liability Partnership (LLP). It is an internal contract amongst the members/owners of the LLC, and it lays out such things as ownership interest, member responsibilities, accounting method, adding or removing members, terms for concluding the LLC, etc. It is generally not required by a given state for forming an LLC (with the exception of New York), although it is certainly recommended. When dealing with private companies for financing issues (loans, mortgages, etc.) it may be required by that company. A customizable operating agreement is included with the LLC/Corp Kit."}},{"@type":"Question","name":"Can another business entity be a member for an LLC?","acceptedAnswer":{"@type":"Answer","text":"In the majority of states, The members of an LLC can be individuals, corporations, or other LLCs. These members of the LLC can be out of state residents or even foreign nationals. Furthermore there is no limit to the amount of members that an LLC can have.The flexibility of an LLC in contrast to an S Corporation is stark considering the S corporations are limited to 75 shareholders who must either be United States citizens or Lawful Permanent Residents."}}]
                }
            `}</script>
        </Helmet>
        
        </Layout>
    );
};

export default StartAnLLC;
