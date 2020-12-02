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
import Articles from "../atomic/sections/articles";
import { ThankYouContent } from "../components/hubspot/thank-you-modal";
import HSFormModal from "../components/hubspot/standard-post-form-modal";

//Texts
import { top, about, adventages, disadventages, differences, requirements, rocket, faq, hsForm } from "../static/review-entity-types/s-corporation";
import { Helmet } from "react-helmet";

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
            <Articles categoryId={284} />

            <Helmet>
                <script type="application/ld+json">{`
                {
                    "@context": "http://schema.org",
                "@type": "VideoObject",
                "name": "What is an S Corp? by Incfile",
                "description": "Paying taxes is unavoidable, but there’s a way to minimize your tax burden — with an S Corp.  Here’s how it works. “S Corporation” is a tax status granted by the IRS. Once a corporation elects to be an S Corp, income and losses pass through to shareholders and are reported on each person’s tax return. So instead of both the corporation and shareholders paying taxes, they are only paid one time, by the shareholders.  Electing to be taxes as an S Corporation requires you to fill out form 2553—but before you do that, double check the rules for S Corps:   - S Corps can’t have more than 100 shareholders. - All shareholders must be individual people. - Shareholders must be U.S. citizens or residents. - Stock must be only one class.  The timing to file an S Corp election can be tricky, but you can take Incfile’s help if you’re not sure of doing it yourself. Learn more at https://www.incfile.com/llc-s-corp-election/  Other Helpful Resources:  - Learn more about the pros and cons of S Corporations: https://www.incfile.com/what-is-s-corporation/ - Calculate your tax savings an S Corp with Incfile's S Corp Tax Calculator: https://www.incfile.com/s-corporation-tax-calculator/ - Get help from an accountant to figure out if an S Corp election is right for your business: https://www.incfile.com/business-accounting/",
                "thumbnailUrl": "https://i.ytimg.com/vi/fAlXeIWEoT0/default.jpg",
                "uploadDate": "2020-10-03T17:42:43Z",
                "duration": "PT1M3S",
                "embedUrl": "https://www.youtube.com/embed/fAlXeIWEoT0",
                "interactionCount": "15"
                }
            `}</script>
            </Helmet>

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
