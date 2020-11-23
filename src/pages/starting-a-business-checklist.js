import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import ButtonAction from "../atomic/molecules/buttons/button-action";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/business-checklist/about";

import Articles from "../atomic/sections/articles";
//Texts
import { top, about, checks, hsForm } from "../static/learning-center-entity/business-checklist";
import ChecklistSection from "../atomic/sections/learning-center-entity/business-checklist/checklist";
import { Paragraph } from "../atomic/atoms/typography/paragraph";
import { Heading } from "../atomic/atoms/typography/heading";
import styled from "styled-components";
import Oval from "../atomic/atoms/icons/oval";
import OvalSVG from "../images/ovals/business-checklist-related-articles-top-right.inline.svg";
import { ThankYouContent } from "../components/hubspot/thank-you-modal";
import HSFormModal from "../components/hubspot/standard-post-form-modal";

const BusinessChecklist = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [modalClases, setModalClases] = React.useState(["lightbox-content"]);

  React.useEffect(() => {
    if (formSubmitted) {
      setModalClases((modalClases) => [...modalClases, "form-submitted"]);
    }
  }, [formSubmitted]);

  const popup = (e) => {
    e.preventDefault();

    if (!e.target.className.includes("modal-overlay") && !e.target.className.includes("modal-close") && modalVisible) return;

    setModalVisible(!modalVisible);
    setFormSubmitted(false);
  };

  const postDownload = (formData) => {
    setModalVisible(modalVisible);
    setFormSubmitted(true);
  };

  return (
    <Layout>
      <SEO title="How to Start a Business | Start a Business Checklist" description="It’s time to bring your ideas and inspiration to life. Our straightforward guide helps you get your business off the ground, fast. Read more." />
      <Top imageName="mrs-bulb-business-checklist" imageAlt="Mrs Bulb and with checklist" ovalColor="green" contentWidth={700}>
        <Heading size={1}>{top.header}</Heading>
        <Paragraph big>{top.text}</Paragraph>
        <Buttonsbox>
          <ButtonAction content={top.buttons[1]} theme="secondary56" onClick={popup} margin="15px 0 0 0" />
        </Buttonsbox>
        <RatingRow>
          <CartBlock />
          <RatingBlock />
        </RatingRow>
      </Top>
      <About content={about} />
      <ChecklistSection content={checks} buttonAction={popup} />

      <Wrapper>
        <Oval className="oval" height="341" width="341" top="20" right="0">
          <OvalSVG />
        </Oval>
        <Articles />
      </Wrapper>

      <LightBoxModal visible={modalVisible} className="modal-overlay">
        <LightBoxContent style={{ pointerEvents: "all" }} class={modalClases.join(" ")}>
          {!formSubmitted && <HSFormModal hs_form_id={hsForm.hs_form_id} content={hsForm} modalExit={popup} postDownloadAction={postDownload} />}
          {formSubmitted && <ThankYouContent modalExit={popup} />}
        </LightBoxContent>
      </LightBoxModal>
    </Layout>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

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
    overflow-y: visible;
  }
`;

export default BusinessChecklist;
