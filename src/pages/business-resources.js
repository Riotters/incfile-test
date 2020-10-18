import React, {useState} from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/business-resources/about";
import Resources from "../atomic/sections/learning-center-entity/business-resources/resources";
import FurtherResources from "../atomic/sections/learning-center-entity/business-resources/further-resources";
import Articles from "../components/partials/sections/articles";
//Texts
import { top, about, resources, furtherResources, form } from "../static/learning-center-entity/business-resources";
import {BusinessChecklistForm} from "../atomic/organisms/forms/business-checklist-form";
import styled from "styled-components";

class BusinessResources extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            title: ""
        };

        this.popup = this.popup.bind(this);

        if(typeof window !== "undefined") {
            window.br_dpfw_m_popup = this.popup.bind(this);
        }
    }

    popup(e, title) {
        if (!e.target.className.includes("modal-overlay") && this.state.modalVisible === true) return;

        form.header = "Download: " + title;

        this.setState({
            modalVisible: !this.state.modalVisible,
            title: title
        });
    }

    render() {
        return (
            <Layout>
                <SEO title="Business Resources & Tools for Starting a Company"
                     description="There’s a lot to think about when you’re getting your business off the ground! Our helpful tools and free downloads can get you started. Learn more."/>
                <Top imageName="mr-bulb-business-downloads-tools-7829" imageAlt="Mrs Bulb and with checklist"
                     ovalColor="purple-2" headlineWidth="550">
                    <h1>{top.header}</h1>
                    <p>{top.text}</p>
                    <RatingRow topMargin="0">
                        <CartBlock/>
                        <RatingBlock/>
                    </RatingRow>
                </Top>
                <About content={about}/>
                <Resources content={resources} />
                <FurtherResources content={furtherResources}/>
                <Articles/>
                <LightBoxModal id="download-pdf-form-modal" onClick={this.popup} visible={this.state.modalVisible} className="modal-overlay">
                    <LightBoxContent style={{pointerEvents: "all"}}>
                        <BusinessChecklistForm content={form}/>
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

export default BusinessResources;