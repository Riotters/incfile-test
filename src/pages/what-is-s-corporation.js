import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/review-entity-types/s-corporation/about";
import Adventages from "../atomic/sections/review-entity-types/s-corporation/adventages";
import Disdventages from "../atomic/sections/review-entity-types/s-corporation/disadventages";
import Requirements from "../atomic/sections/review-entity-types/s-corporation/requirements";
import Differences from "../atomic/sections/review-entity-types/s-corporation/differences";
import Rocket from "../atomic/sections/review-entity-types/c-corporation/rocket";
import Faq from "../atomic/sections/review-entity-types/s-corporation/faq";
import Articles from "../components/partials/sections/articles";
import { ThankYouContent } from "../components/hubspot/thank-you-modal";
import HSFormModal from "../components/hubspot/standard-post-form-modal";

//Texts
import { top, about, adventages, disadventages, differences, requirements, rocket, faq, hsForm } from "../static/review-entity-types/s-corporation";

const SCorporation = () => {
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

  const postDownload = () => {
    setModalVisible(modalVisible);
    setFormSubmitted(true);
  };

  return (
    <Layout>
      <SEO title="What is an S Corp? Your Guide to S Corporations | Incfile" description="The S Corp is a business entity that offers significant tax advantages while still preserving your ownership flexibility. Learn if it's right for you." />
      <Top imageName="mr-bulb-s-corp-calculator-4821" imageAlt="Mrs Bulb and with checklist" ovalColor="purple" textWidth="550">
        <h1>{top.header}</h1>
        <p>{top.text}</p>
        <Buttonsbox>
          <Button content={top.button[0]} theme="primary56" arrow />
        </Buttonsbox>
        <RatingRow>
          <CartBlock />
          <RatingBlock />
        </RatingRow>
      </Top>
      <About content={about} />
      <Adventages content={adventages} />
      <Disdventages content={disadventages} />
      <Requirements content={requirements} />
      <Differences content={differences} />
      <Rocket content={rocket} />
      <Faq content={faq} onClick={popup} />
      <Articles />

      <LightBoxModal visible={modalVisible}>
        <LightBoxContent style={{ pointerEvents: "all" }} class={modalClases.join(" ")} className="modal-overlay">
          {!formSubmitted && <HSFormModal hs_form_id={hsForm.hs_form_id} content={hsForm} modalExit={popup} postDownloadAction={postDownload} />}
          {formSubmitted && <ThankYouContent modalExit={popup} />}
        </LightBoxContent>
      </LightBoxModal>
    </Layout>
  );
};

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

export default SCorporation;
