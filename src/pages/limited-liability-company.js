import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Helmet from "react-helmet";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/review-entity-types/llc/about";
import Faq from "../atomic/sections/review-entity-types/llc/faq";
import Articles from "../atomic/sections/articles";
//Texts
import { top, about, faq, form, thanks_form } from "../static/review-entity-types/llc";
import styled from "styled-components";

import { ThankYouContent } from "../components/hubspot/thank-you-modal";
import HSFormModal from "../components/hubspot/standard-post-form-modal";

class LLC extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            formSubmitted: false,
        };
        this.popup = this.popup.bind(this);
        this.postDownload = this.postDownload.bind(this);
    }

    popup(e) {
        e.preventDefault();

        if (!e.target.className.includes("modal-overlay") && !e.target.className.includes("modal-close") && this.state.modalVisible === true) return;

        this.setState({
            modalVisible: !this.state.modalVisible,
            formSubmitted: false,
        });
    }

    postDownload(formData) {
        this.setState({
            modalVisible: this.state.modalVisible,
            formSubmitted: true,
        });
    }

    render() {
        let modalClases = ["lightbox-content"];
        if (this.state.formSubmitted) modalClases.push("form-submitted");

        return (
            <Layout>
                <SEO title="Limited Liability Company | Should I start an LLC for my Business?" description="Learn about the benefits of forming an LLC, the legal protections it offers you, and if an LLC is the right choice for your business." />
                <Top imageName="mr-bulb-llc" imageAlt="Mrs Bulb and with checklist" ovalColor="darkblue">
                    <h1>{top.header}</h1>
                    <p>{top.text}</p>
                    <Buttonsbox>
                        <Button content={top.button[0]} theme="primary56" arrow />
                    </Buttonsbox>
                </Top>
                <About content={about} clickOpenModal={this.popup.bind(this)} />
                <Faq content={faq} onClick={this.popup.bind(this)} />
                <Articles categoryId={274} />

                <LightBoxModal visible={this.state.modalVisible} className="modal-overlay">
                    <LightBoxContent style={{ pointerEvents: "all" }} class={modalClases.join(" ")}>
                        {!this.state.formSubmitted && <HSFormModal hs_form_id="993baef6-066e-4d18-a813-c12bc3b3fff9" content={form} modalExit={this.popup.bind(this)} postDownloadAction={this.postDownload.bind(this)} />}
                        {this.state.formSubmitted && <ThankYouContent content={thanks_form} modalExit={this.popup.bind(this)} />}
                    </LightBoxContent>
                </LightBoxModal>

                <Helmet>
                    <script type="application/ld+json">{`
                        {
                            "@context": "http://schema.org",
                            "@type": "VideoObject",
                            "name": "What Does LLC Mean by Incfile",
                            "description": "LLC stands for Limited Liability Company and it means exactly what it says. Forming an LLC limits the liability or risk your personal assets have related to your business. Learn more",
                            "thumbnailUrl": "https://i.ytimg.com/vi/ZuadTwgek5U/default.jpg",
                            "uploadDate": "2020-04-26T19:50:16.000Z",
                            "duration": "PT1M25S",
                            "embedUrl": "https://www.youtube.com/embed/ZuadTwgek5U",
                            "interactionCount": "8"
                        }
                    `}</script>

                    <script type="application/ld+json">{`
                        {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does business asset protection work with LLCs?","acceptedAnswer":{"@type":"Answer","text":"<p>The limited liability company structure, much like a corporation, provides LLC owners with limited liability asset protection. This means that the company assets are typically owned by the LLC and are separate from the personal assets from that of the LLC owner(s). Should there be a lawsuit aimed at the company, whether with or without merit, the LLC is the legal entity that would be sued. The assets of the LLC could be attacked, however, that would be separate from the personal assets of the LLC owner(s), which would be protected.</p><p>The potential liability of an LLC owner is limited only to whatever that owner has invested in the LLC, such as an initial, investment or any retained earnings. This is very much the same as if you had purchased shares of stock in a corporation. In most cases, the most you can lose is what you paid for the stock, but you typically will not lose more than that, no matter how much the company might potentially lose or for however much the company might be sued.</p>"}},{"@type":"Question","name":"What is an LLC member?","acceptedAnswer":{"@type":"Answer","text":"<p>If you are the owner of an LLC, you are referred to as a member, and LLCs can have a single member or multiple members — it's up to you.</p>"}},{"@type":"Question","name":"How do I file an amendment for an LLC?","acceptedAnswer":{"@type":"Answer","text":"<p>If you need to make a change to your LLC, you need to <a href="/manage-your-company/amendment/" >file an amendment</a> with your secretary of state. Not all changes need to be amended, but generally anything within your LLC's Articles of Incorporation or Articles of Organization that is being changed needs to be filed.</p>"}},{"@type":"Question","name":"Can you start an LLC by yourself?","acceptedAnswer":{"@type":"Answer","text":"<p>Yes! In fact, LLCs are often the perfect structure for sole proprietors because they provide protection for your personal assets without the complexity and rigid regulations of a corporation.</p>"}},{"@type":"Question","name":"How do LLC owners pay themselves?","acceptedAnswer":{"@type":"Answer","text":"<p>As the owner of your LLC, you do not receive a paycheck. Instead, LLC members take "draws" or "distributions," which do not have any federal or state income taxes withheld. You are responsible for reporting your share of profits on your personal income tax returns.</p>"}},{"@type":"Question","name":"How do LLC taxes work?","acceptedAnswer":{"@type":"Answer","text":"<p>LLCs can be taxed differently depending on whether they are sole proprietorships or have multiple members, and whether or not you elect to be taxed as a corporation. For more information, talk to your accountant.</p>"}}]}
                    `}</script>
                </Helmet>
            </Layout>
        );
    }
}

const LightBoxModal = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const LightBoxContent = styled.div`
  transition: height 0.5s, max-width 0.5s;

  background-color: #fff;
  width: 100%;
  max-width: 750px;
  position: relative;
  //margin: 0 30px;
  max-height: 100vh;
  overflow-y: auto;

  &.form-submitted {
    height: 40vh;
    max-width: 500px;
  }

  @media screen and (min-width: 769px) {
    padding-top: 0;
    max-width: 600px;
    max-height: 80vh;
  }
`;

export default LLC;
