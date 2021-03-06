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
import HowToGuide from "../../atomic/states-llc/california/how-to-guide";

// Content

import { HomePageContent, hsForm } from "../../static/states-llc/california/home";
import { tabPages } from "../../static/states-llc/california/general";

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

function CaliforniaLLCIndex() {
	const [dataApi, setDataApi] = React.useState({});

	React.useEffect(() => {
		getFullPricesAndFilings("California").then((data) => {
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
				title="How to Start an LLC in California | Incfile.com"
				description="Ready to form your California LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more."
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

			<Rocket url="?entityType=LLC&entityState=CA" />

			<Helmet>
				<script type="application/ld+json">{`
                    {
                        "@context": "http://schema.org",
                        "@type": "VideoObject",
                        "name": "Forming an LLC in California by Incfile",
                        "description": "Want to learn how to start a California LLC? From the influential tech scene of Silicon Valley to rugged and rural Northern California, California boasts the most powerful economy in the U.S.   So, put your shades on and let’s get started on how you can form an LLC in the Golden State. By creating a California LLC, you get the advantages and protections of larger California corporations, but with much simpler rules and regulations.  Steps to Forming a California LLC: 1) Gather your members' information 2) Choose a name and make sure it's available 3) Provide an official business address 4) Designate a California Registered Agent 5) File your Articles of Incorporation with the CA SOS 6) Get an EIN number 7) File a Statement of Information   Here are some valuable resources for additional info and to get you started:  - A Complete Guide to California LLCs:  https://www.incfile.com/california-llc/  - California Business Entity Search: https://www.incfile.com/business-name-search/  - Registered Agent Services: https://www.incfile.com/manage-your-company/registered-agent/ - Getting a Federal EIN for Your Business: https://www.incfile.com/manage-your-company/tax-id-ein/ - File Your Articles of Incorporation with the CA Secretary of State for free with Incfile: https://www.incfile.com/",
                        "thumbnailUrl": "https://i.ytimg.com/vi/5A75PcGNC54/default.jpg",
                        "uploadDate": "2020-08-03T14:21:18Z",
                        "duration": "PT1M29S",
                        "embedUrl": "https://www.youtube.com/embed/5A75PcGNC54",
                        "interactionCount": "29"
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

export default CaliforniaLLCIndex;
