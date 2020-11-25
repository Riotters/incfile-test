import React from "react";
import styled from "styled-components";
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
import { ThankYouContent } from "../components/hubspot/thank-you-modal";
import HSFormModal from "../components/hubspot/standard-post-form-modal";

//Texts
import { top, about, resources, furtherResources, form, thanks_form } from "../static/learning-center-entity/business-resources";
import ArrowLink from "../atomic/molecules/buttons/text";

const BusinessResources = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [hsFormId, setHSFormId] = React.useState("");
  const [modalClases, setModalClases] = React.useState(["lightbox-content"]);

  React.useEffect(() => {
    if (formSubmitted) {
      setModalClases((modalClases) => [...modalClases, "form-submitted"]);
    }

    if (typeof window !== "undefined") {
      window.br_dpfw_m_popup = popup;
    }

    if (typeof window !== "undefined") {
      window.br_dpfw_m_postdownload = postDownload;
    }
  }, [formSubmitted]);

  const popup = (e, title, hs_form_id) => {
    e.preventDefault();

    if (!e.target.className.includes("modal-overlay") && !e.target.className.includes("modal-close") && modalVisible) return;

    form.header = "Download: " + title;
    form.hs_form_id = hs_form_id;

    setHSFormId(hs_form_id);
    setModalVisible(!modalVisible);
    setFormSubmitted(false);
  };

  const postDownload = (formData) => {
    setModalVisible(modalVisible);
    setFormSubmitted(true);
  };

  return (
    <Layout>
      <SEO title="Business Resources & Tools for Starting a Company" description="There’s a lot to think about when you’re getting your business off the ground! Our helpful tools and free downloads can get you started. Learn more." />
      <Top imageName="mr-bulb-business-downloads-tools-7829" imageAlt="Mrs Bulb and with checklist" ovalColor="purple-2" headlineWidth="550">
        <h1>{top.header}</h1>
        <p>{top.text}</p>
        <ArrowLink bottomMargin="24" content={top.link}/>
        <RatingRow topMargin="0">
          <CartBlock />
          <RatingBlock />
        </RatingRow>
      </Top>
      <About content={about} />
      <Resources content={resources} openModal={popup} />
      <FurtherResources id="js-further-resource" content={furtherResources} />
      <Articles />

      <LightBoxModal visible={modalVisible} className="modal-overlay">
        <LightBoxContent style={{ pointerEvents: "all" }} class={modalClases.join(" ")}>
          {!formSubmitted && <HSFormModal content={form} hs_form_id={hsFormId} postDownloadAction={postDownload} modalExit={popup} />}
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
  max-width: 960px;
  position: relative;
  //margin: 0 30px;
  max-height: 100vh;
  overflow-y: auto;

  @media screen and (min-width: 769px) {
    padding-top: 0;
    max-width: 600px;
    max-height: 80vh;
  }

  &.form-submitted {
    height: 40vh;
    max-width: 500px;
  }
`;

export default BusinessResources;
