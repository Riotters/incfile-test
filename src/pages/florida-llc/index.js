import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styled from "styled-components";

// Components
import { color } from "../../components/styles/colors";
import LinearBgHeader from "../../atomic/states-llc/linear-bg-header";
import HomeHeader from "../../atomic/states-llc/home-header";
import WrapperContent from "../../atomic/states-llc/wrapper-content";
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import Rocket from "../../atomic/sections/rocket";
import HowToGuide from "../../atomic/states-llc/florida/how-to-guide";

// Content
import { top, HomePageContent, hsForm } from "../../static/states-llc/florida/home";
import { tabPages, rocket } from "../../static/states-llc/florida/general";

import { getFullPricesAndFilings } from "../../api/Api";
import { Helmet } from "react-helmet";
import {ThankYouContent} from "../../components/hubspot/thank-you-modal";
import HSSearchFormModal from "../../components/hubspot/search-name-form-modal";

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

function FloridaLLCIndex() {
	const [dataApi, setDataApi] = React.useState({});

	React.useEffect(() => {
		getFullPricesAndFilings("Florida").then((data) => {
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
				title="Starting an LLC in Florida | LLCs in Florida"
				description="Ready to form your Florida LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more."
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

			<Rocket url="?entityType=LLC&entityState=FL" />

			<Helmet>
				<script type="application/ld+json">{`
                {
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "Forming an LLC in Florida by Incfile",
                    "description": "Florida is home to some of the biggest businesses in America—but is it the best place to form your LLC?   Starting an LLC in Florida means you get the advantages and protections of larger Florida corporations, but with much simpler rules and regulations. Your Florida LLC will:  - Separate your personal assets from business liability or debt - Be easy to maintain and keep compliant  - Pass tax benefits to you   How to Form an LLC in Florida:  1. Gather your members’ info 2. Pick a name that's available in Florida 3. Provide an official address 4. Pick a Florida Registered Agent 5. Get an EIN / federal tax ID number 6. File a Certificate of Formation with the Florida Secretary of State   Here are some additional links you might find useful for your Florida LLC:  https://www.incfile.com/florida-llc/ - Our How To Guide All About Florida LLCs https://www.incfile.com/business-name-search/ - Conduct a business entity search with the Florida Sunbiz / Secretary of State https://www.incfile.com/manage-your-company/registered-agent/ - Get a Florida Registered Agent https://www.incfile.com/manage-your-company/tax-id-ein/ - Get an EIN for your Florida LLC https://www.incfile.com/ - Start an LLC in Florida for Free",
                    "thumbnailUrl": "https://i.ytimg.com/vi/gXFjp7S_Fsw/default.jpg",
                    "uploadDate": "2020-07-28T17:42:12Z",
                    "duration": "PT1M23S",
                    "embedUrl": "https://www.youtube.com/embed/gXFjp7S_Fsw",
                    "interactionCount": "34"

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

export default FloridaLLCIndex;
