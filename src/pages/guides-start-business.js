import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button-action";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/guide-to-start/about";
import TableOfContent from "../atomic/sections/learning-center-entity/guide-to-start/table-of-content";
import NeedMore from "../atomic/sections/learning-center-entity/guide-to-start/need-more";
import { ThankYouContent } from "../components/hubspot/thank-you-modal";
import HSFormModal from "../components/hubspot/standard-post-form-modal";

//Texts

import { top, about, tableOfContent, needMore, hsForm } from "../static/learning-center-entity/guide-to-start";
import { Helmet } from "react-helmet";

const GuideToStart = () => {
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
      <SEO title="How to Start a Business: A Complete Guide" description="From developing your business idea to measuring success, our free guide has all the info you need to get your business off the ground. Download now." />
      <Top imageName="mrs-bulb-complete-guide-to-starting-a-business" imageAlt="guide to start a business" ovalColor="darkblue">
        <h1>{top.header}</h1>
        <p>{top.text}</p>
        <Buttonsbox>
          <Button onClick={popup} content={top.buttons[0]} theme="primary56" arrow />
        </Buttonsbox>
        <RatingRow>
          <CartBlock />
          <RatingBlock />
        </RatingRow>
      </Top>
      <About content={about} hsOpenForm={popup} />
      <TableOfContent content={tableOfContent} />
      <NeedMore content={needMore} onClick={popup} paragraphHeading />
      <LightBoxModal visible={modalVisible} className="modal-overlay">
        <LightBoxContent className={modalClases.join(" ")}>
          {!formSubmitted && <HSFormModal hs_form_id={hsForm.hs_form_id} content={hsForm} modalExit={popup} postDownloadAction={postDownload} />}

          {formSubmitted && <ThankYouContent modalExit={popup} fileDownload={hsForm.fileDownload} />}
        </LightBoxContent>
          </LightBoxModal>
          
          <Helmet>
              <script type="application/ld+json">
                  {`{
                      "@context": "http://schema.org",
                      "@type": "VideoObject",
                      "name": "How to Start a Business: 4 Simple Steps to Starting Your Own Company by Incfile",
                      "description": "Want to know how to start a business? As an entrepreneur, you can likely relate to the excitement and fear that comes with starting a business. But these four simple steps will help anyone dreaming of starting their own business take it to becoming a reality.",
                      "thumbnailUrl": "https://i.ytimg.com/vi/M-SlUnCHmXU/default.jpg",
                      "uploadDate": "2020-03-22T14:49:18Z",
                      "duration": "PT1M51S",
                      "embedUrl": "https://www.youtube.com/embed/M-SlUnCHmXU",
                      "interactionCount": "1776"
                  }`}
              </script>
          </Helmet>
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
  max-width: 600px;
  position: relative;
  //margin: 0 30px;
  max-height: 100vh;
  overflow-y: auto;
  pointer-events: all;

  &.form-submitted {
    height: 40vh;
    max-width: 500px;
  }

  @media screen and (min-width: 769px) {
    padding-top: 0;
    max-height: 90vh;
}
`;

export default GuideToStart;
