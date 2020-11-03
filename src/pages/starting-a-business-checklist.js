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
import About from "../atomic/sections/learning-center-entity/business-checklist/about";

import Articles from "../atomic/sections/articles";
//Texts
import { top, about, checks, form } from "../static/learning-center-entity/business-checklist";
import ChecklistSection from "../atomic/sections/learning-center-entity/business-checklist/checklist";
import { Paragraph } from "../atomic/atoms/typography/paragraph";
import { Heading } from "../atomic/atoms/typography/heading";
import styled from "styled-components";
import { BusinessChecklistForm } from "../atomic/organisms/forms/business-checklist-form";
import Oval from "../atomic/atoms/icons/oval";
import OvalSVG from "../images/ovals/business-checklist-related-articles-top-right.inline.svg";

class BusinessChecklist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
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
        <SEO title="How to Start a Business | Start a Business Checklist" description="It’s time to bring your ideas and inspiration to life. Our straightforward guide helps you get your business off the ground, fast. Read more." />
        <Top imageName="mrs-bulb-business-checklist" imageAlt="Mrs Bulb and with checklist" ovalColor="green" contentWidth={700}>
          <Heading size={1}>{top.header}</Heading>
          <Paragraph big>{top.text}</Paragraph>
          <Buttonsbox>
            <Button content={top.buttons[0]} theme="primary56" arrow />
            <Button content={top.buttons[1]} theme="secondary56" onClick={this.popup} margin="0 0 0 15px" arrow />
          </Buttonsbox>
          <RatingRow>
            <CartBlock />
            <RatingBlock />
          </RatingRow>
        </Top>
        <About content={about} />
        <ChecklistSection content={checks} buttonAction={this.popup} />

        <Wrapper>
          <Oval className="oval" height="341" width="341" top="20" right="0">
            <OvalSVG />
          </Oval>
          <Articles />
        </Wrapper>
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

const Wrapper = styled.div`
  position: relative;
  width: 100%;
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

export default BusinessChecklist;
