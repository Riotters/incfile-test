import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { top, namingYourBusiness, hsForm } from "../../static/states-llc/delaware/home";
import { tabPages } from "../../static/states-llc/delaware/general";
import { getFullPricesAndFilings } from '../../api/Api';
import {ThankYouContent} from "../../components/hubspot/thank-you-modal";
import styled from "styled-components";
import HSFormModal from "../../components/hubspot/standard-post-form-modal";
import HSSearchFormModal from "../../components/hubspot/search-name-form-modal";

const BusinessNamesPage = () => {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('Delaware').then(data => {
            setDataApi(data);
        });
    }, []);

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
            <SEO
                title="Delaware Business Search | How to Name Your Delaware LLC"
                description="Learn what you need to know about naming an LLC in Delaware with Incfile's helpful resources. Pick your perfect business name today!"
            />
            <LLCLayout data={dataApi} top={top}>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <ContentMap content={namingYourBusiness} modalAction={popup} />
                </MainPageContent>
                <LightBoxModal visible={modalVisible} className="modal-overlay">
                    <LightBoxContent className={modalClases.join(" ")}>
                        {!formSubmitted && <HSSearchFormModal hs_form_id={hsForm.hs_form_id} content={hsForm} modalExit={popup} postDownloadAction={postDownload} />}

                        {formSubmitted && <ThankYouContent modalExit={popup} fileDownload={hsForm.fileDownload} />}
                    </LightBoxContent>
                </LightBoxModal>
            </LLCLayout>
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
    max-height: 80vh;
}
`;

export default BusinessNamesPage;