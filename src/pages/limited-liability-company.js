import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/review-entity-types/llc/about"
import Faq from "../atomic/sections/review-entity-types/llc/faq";
import Articles from "../components/partials/sections/articles";
//Texts
import {top, about, faq, form, thanks_form} from "../static/review-entity-types/llc"
import styled from "styled-components";
import {BusinessChecklistForm} from "../atomic/organisms/forms/business-checklist-form";
import {Paragraph} from "../atomic/atoms/typography/paragraph";
import {ThankYouContent} from "../atomic/partials/thank-you-modal-content";

class LLC extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            formSubmitted: false
        };
        this.popup = this.popup.bind(this);
        this.postdownload = this.postdownload.bind(this);
    }

    popup(e) {
        if (!e.target.className.includes("modal-overlay") && !e.target.className.includes("modal-close") &&
            this.state.modalVisible === true)
            return;

        this.setState({
            modalVisible: !this.state.modalVisible,
        });
    }

    postdownload(e) {
        e.preventDefault();

        this.setState({
            modalVisible: this.state.modalVisible,
            formSubmitted: true
        });
    }

    render() {
        let modalClases = [ "lightbox-content" ];
        if(this.state.formSubmitted) modalClases.push("form-submitted");

        return (
            <Layout>
                <SEO
                    title="Limited Liability Company | Should I start an LLC for my Business?"
                    description="Learn about the benefits of forming an LLC, the legal protections it offers you, and if an LLC is the right choice for your business."
                />
                <Top imageName="mr-bulb-llc" imageAlt="Mrs Bulb and with checklist" ovalColor="darkblue">
                    <h1>{top.header}</h1>
                    <p>{top.text}</p>
                    <Buttonsbox>
                        <Button content={top.button[0]} theme="primary56" onClick={this.popup} arrow />
                    </Buttonsbox>
                </Top>
                <About content={about} />
                <Faq content={faq} />
                <Articles />
                <LightBoxModal visible={this.state.modalVisible} onClick={this.popup} className="modal-overlay">
                    <LightBoxContent style={{ pointerEvents: "all" }} class={modalClases.join(" ")}>
                        {!this.state.formSubmitted && (
                            <BusinessChecklistForm content={form} postDownloadAction={this.postdownload.bind(this)} />
                        )}
                        {this.state.formSubmitted && (
                            <ThankYouContent content={thanks_form} modalExit={this.popup.bind(this) } />
                        )}
                    </LightBoxContent>
                </LightBoxModal>
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
  transition: height 0.5s, max-width .5s;

  background-color: #fff;
  width: 100%;
  max-width: 960px;
  position: relative;
  margin: 0 30px;
  max-height: 100vh;
  overflow-y: auto;
  
  &.form-submitted {
    height: 40vh;
    max-width: 500px;
  }
  
  @media screen and (min-width: 769px) {
    height: 95vh;
    padding-top: 0;
    overflow-y: visible;
  }
`;

export default LLC;
