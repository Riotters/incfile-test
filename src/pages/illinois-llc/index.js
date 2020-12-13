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
import HowToGuide from "../../atomic/states-llc/illinois/how-to-guide";
import HSSearchFormModal from "../../components/hubspot/search-name-form-modal";

// Content
import { HomePageContent, hsForm } from "../../static/states-llc/illinois/home";
import { tabPages } from "../../static/states-llc/illinois/general";

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

function IllinoisLLCIndex() {
	const [dataApi, setDataApi] = React.useState({});

	React.useEffect(() => {
		getFullPricesAndFilings("Illinois").then((data) => {
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
				title="How to Start an LLC in Illinois | Incfile.com"
				description="Ready to form your Illinois LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more."
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

			<Rocket url="?entityType=LLC&entityState=IL" />

			<Helmet>
				<script type="application/ld+json">{`
                {
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "Forming an LLC in Illinois by Incfile",
                    "description": "Starting your business in Illinois has never been easier!  Home to the amazing city of Chicago and a critical ground for culture and politics, Illinois is a great state for LLC formation. When you create an LLC in Illinois, you get the protection and advantages of a corporation with much simpler rules to follow.  Ready to learn all about starting an LLC in Illinois?  Step 1: Gather Information for Your Members Step 2: Choose a Unique Business Name and Complete a Business Entity Search Step 3: Provide an Official Illinois Address Step 4: Assign a Registered Agent in Illinois Step 5: Get an Employer Identification Number (EIN) Step 6: File your Articles of Organization with the Illinois Secretary of State  For more information on how to start an LLC in IL, check out the following resources:   - File Your LLC Paperwork for Free: https://www.incfile.com - Incfile's Guide to Illinois LLCs: https://www.incfile.com/illinois-llc/ - Business Name Search tool: https://www.incfile.com/business-name - Virtual Business Address: https://www.incfile.com/virtual-mailbox/ - Registered Agent Service: https://www.incfile.com/manage-your-company/registered-agent/",
                    "thumbnailUrl": "https://i.ytimg.com/vi/Rx9Ns_xqp2A/default.jpg",
                    "uploadDate": "2020-07-28T18:58:23Z",
                    "duration": "PT1M53S",
                    "embedUrl": "https://www.youtube.com/embed/Rx9Ns_xqp2A",
                    "interactionCount": "4"
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

export default IllinoisLLCIndex;
