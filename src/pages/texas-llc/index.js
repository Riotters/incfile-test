import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styled from "styled-components";

// Components
import LinearBgHeader from "../../atomic/states-llc/linear-bg-header";
import HomeHeader from "../../atomic/states-llc/home-header";
import WrapperContent from "../../atomic/states-llc/wrapper-content";
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import Rocket from "../../atomic/sections/rocket";
import HowToGuide from "../../atomic/states-llc/texas/how-to-guide";
import HSSearchFormModal from "../../components/hubspot/search-name-form-modal";

// Content
import { HomePageContent, hsForm } from "../../static/states-llc/texas/home";
import { tabPages } from "../../static/states-llc/texas/general";

import { getFullPricesAndFilings } from "../../api/Api";
import { Helmet } from "react-helmet";
import {ThankYouContent} from "../../components/hubspot/thank-you-modal";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 769px) {
		flex-direction: ${(props) => (props.layout !== "grid" ? "row" : "column")};
	}

	.ReactCollapse--collapse {
		width: 100%;
		transition: height 500ms;
		margin-left: auto;

		@media (min-width: 769px) {
			max-width: ${(props) => (props.layout !== "grid" ? "55%" : "")};
		}

		@media (min-width: 1200px) {
			max-width: ${(props) => (props.layout !== "grid" ? "670px" : "")};
		}
	}
`;

function TexasLLCIndex() {
	const [dataApi, setDataApi] = React.useState({});

	React.useEffect(() => {
		getFullPricesAndFilings("Texas").then((data) => {
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
				title="LLCs in Texas | Guide to Forming an LLC in TX"
				description="Ready to form your Texas LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more."
			/>

			<LinearBgHeader imageMapName="tx-map-2x">
				<HomeHeader content={HomePageContent.header} data={dataApi} />
			</LinearBgHeader>

			<WrapperContent>
				<Wrapper>
					<LeftTabPages content={tabPages} />
					<MainPageContent>
						<HowToGuide content={HomePageContent.content} data={dataApi} modalAction={popup} />
					</MainPageContent>
					<LightBoxModal visible={modalVisible} className="modal-overlay">
						<LightBoxContent className={modalClases.join(" ")}>
							{!formSubmitted && <HSSearchFormModal hs_form_id={hsForm.hs_form_id} content={hsForm} modalExit={popup} postDownloadAction={postDownload} />}

							{formSubmitted && <ThankYouContent modalExit={popup} fileDownload={hsForm.fileDownload} />}
						</LightBoxContent>
					</LightBoxModal>
				</Wrapper>
			</WrapperContent>

			<Rocket url="?entityType=LLC&entityState=TX" />

			<Helmet>
				<script type="application/ld+json">{`
                    {
                        "@context": "http://schema.org",
                        "@type": "VideoObject",
                        "name": "Forming an LLC in Texas by Incfile",
                        "description": "Want to form a Texas LLC but not sure where to start? We'll walk you through the steps to starting your Texas business, including securing a unique business name, getting a registered agent, writing an operating agreement, and filing Form 501 (your certificate of formation) with the Texas Secretary of State. Incorporate your new Texas LLC today!  Here are a few additional resources that are useful for forming an LLC in the state of Texas: Incfile’s Business Name Search tool: https://www.incfile.com/business-name-search/.   Incfile Information Regarding Registered Agents: https://www.incfile.com/registered-agents/.  Incfile Register Your LLC Packages: https://orders.incfile.com/form-order-now.php",
                        "thumbnailUrl": "https://i.ytimg.com/vi/wGAzGRmy6m8/default.jpg",
                        "uploadDate": "2020-06-03T14:52:33Z",
                        "duration": "PT1M49S",
                        "embedUrl": "https://www.youtube.com/embed/wGAzGRmy6m8",
                        "interactionCount": "5"
                    }
                `}</script>
			</Helmet>
		</Layout>
	);
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

export default TexasLLCIndex;
