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
import { top, about, faq, form } from "../static/review-entity-types/llc"
import styled from "styled-components";
import {BusinessChecklistForm} from "../atomic/organisms/forms/business-checklist-form";

class LLC extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false
        };
        this.popup = this.popup.bind(this);
    }

    popup(e) {
        if (!e.target.className.includes("modal-overlay") && this.state.modalVisible === true) return;

        this.setState({
            modalVisible: !this.state.modalVisible,
        });
    }

    render() {
        return (
            <Layout>
                <SEO title="Limited Liability Company | Should I start an LLC for my Business?" description="Learn about the benefits of forming an LLC, the legal protections it offers you, and if an LLC is the right choice for your business." />
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
                    <LightBoxContent style={{ pointerEvents: "all" }}>
                        <BusinessChecklistForm content={form} />
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
  background-color: #fff;
  width: 100%;
  max-width: 960px;
  position: relative;
  margin: 0 30px;
  max-height: 100vh;
  overflow-y: auto;
  @media screen and (min-width: 769px) {
    height: 95vh;
    padding-top: 0;
    overflow-y: visible;
  }
`;

export default LLC;
