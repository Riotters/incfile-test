import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/review-entity-types/c-corporation/about";
import Adventages from "../atomic/sections/review-entity-types/c-corporation/adventages";
import Disdventages from "../atomic/sections/review-entity-types/c-corporation/disadventages";
import Differences from "../atomic/sections/review-entity-types/c-corporation/differences";
import Requirements from "../atomic/sections/review-entity-types/c-corporation/requirements";
import Rocket from "../atomic/sections/review-entity-types/c-corporation/rocket";
import Forming from "../atomic/sections/review-entity-types/c-corporation/forming";
import Articles from "../components/partials/sections/articles";
import Cta from "../atomic/sections/general/cta";
//Texts
import { top, about, adventages, disadventages, differences, requirements, rocket, cta, forming, hsForm } from "../static/review-entity-types/c-corporation";

import { ThankYouContent } from "../components/hubspot/thank-you-modal";
import HSFormModal from "../components/hubspot/standard-post-form-modal";
import { Helmet } from "react-helmet";

const CCorporation = () => {
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
            <SEO title="What is a C Corporation? Your Guide to C Corps | Incfile" description="A C Corporation is one of several ways to legally recognize a business for tax, regulatory and official reasons. See if starting a C Corp is right for you." />
            <Top imageName="review-entity-type-c-corp" imageAlt="Mrs Bulb and with checklist" ovalColor="green">
                <h1>{top.header}</h1>
                <p>{top.text}</p>
                <Buttonsbox>
                    <Button content={top.button[0]} theme="primary56" arrow />
                </Buttonsbox>
            </Top>
            <About content={about} />
            <Adventages content={adventages} />
            <Disdventages content={disadventages} />
            <Differences content={differences} />
            <Requirements content={requirements} />
            <Rocket content={rocket} />
            <Forming content={forming} onClick={popup} />
            <Articles />
            <Cta cta={cta} />

            <LightBoxModal visible={modalVisible} className="modal-overlay">
                <LightBoxContent style={{ pointerEvents: "all" }} class={modalClases.join(" ")}>
                    {!formSubmitted && <HSFormModal hs_form_id={hsForm.hs_form_id} content={hsForm} modalExit={popup} postDownloadAction={postDownload} />}
                    {formSubmitted && <ThankYouContent modalExit={popup} />}
                </LightBoxContent>
            </LightBoxModal>

            <Helmet>
                <script type="application/ld+json">{`
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "What is a C Corporation? by Incfile",
                    "description": "A C Corporation is one of several ways to legally structure a business. Whether it is for tax or regulatory purposes, a C Corp is a practical way to organize your business, especially if you plan to grow significantly or become public. We all want to grow big, don’t we? So, if you’re planning an IPO or intend to trade shares publicly, a C Corp is the way to go. Beyond that, it’s also more attractive to investors and venture capitalists.  Want to learn more about C Corporations? Here are some resources:   - What is a Corp? : https://www.incfile.com/what-is-c-corporation/ Learn about the benefits, disadvantages, c corp taxes, and more.   - Business Entity Quiz: https://www.incfile.com/business-entity-quiz/ Take our quiz to help determine the best business entity type for your new business.",
                    "thumbnailUrl": "https://i.ytimg.com/vi/BmZ7zyLd710/default.jpg",
                    "uploadDate": "2020-07-05T21:49:35Z",
                    "duration": "PT2M",
                    "embedUrl": "https://www.youtube.com/embed/BmZ7zyLd710",
                    "interactionCount": "6"
                `}</script>
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
  overflow-y: auto;
`;

const LightBoxContent = styled.div`
  transition: height 0.5s, max-width 0.5s;

  background-color: #fff;
  width: 100%;
  max-width: 750px;
  position: relative;
  max-height: 80vh;

  &.form-submitted {
    height: 40vh;
    max-width: 500px;
  }

  @media screen and (min-width: 769px) {
    padding-top: 0;
    overflow-y: visible;
  }
`;

export default CCorporation;
