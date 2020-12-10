import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button-action";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/other/after-forming-llc/about";
import Guide from "../atomic/sections/other/after-forming-llc/guide";
import Articles from "../atomic/sections/articles";

import { ThankYouContent } from "../components/hubspot/thank-you-modal";
import HSFormModal from "../components/hubspot/standard-post-form-modal";

//Texts
import { top, about, guide, hsForm } from "../static/other/after-forming-llc";

const AfterForming = () => {
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

		if (
			!e.target.className.includes("modal-overlay") &&
			!e.target.className.includes("modal-close") &&
			modalVisible
		)
			return;

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
				title="What to Do After Forming Your LLC | Incfile "
				description="You started your LLC—now what? Here are the common next steps to ensuring your business is successful. Read more. "
			/>
			<Top
				imageName="mr-bulb-compass-3979"
				imageAlt="Mrs Bulb and with checklist"
				ovalColor="sun"
				headlineWidth="550"
			>
				<h1>{top.header}</h1>
				<p>{top.text}</p>
				<Buttonsbox>
					<Button content={top.button[0]} theme="primary56" onClick={popup} />
				</Buttonsbox>
			</Top>
			<About content={about} openHsForm={popup} />
			<Guide content={guide} onClick={popup} />
			<Articles />

			<LightBoxModal visible={modalVisible} className="modal-overlay">
				<LightBoxContent
					style={{ pointerEvents: "all" }}
					class={modalClases.join(" ")}
				>
					{!formSubmitted && (
						<HSFormModal
							hs_form_id={hsForm.hs_form_id}
							content={hsForm}
							modalExit={popup}
							postDownloadAction={postDownload}
						/>
					)}
					{formSubmitted && <ThankYouContent modalExit={popup} fileDownload={hsForm.fileDownload} />}
				</LightBoxContent>
			</LightBoxModal>
		</Layout>
	);
};

export default AfterForming;

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

	form {
		padding: 25px 15px;

		@media (min-width: 769px) {
			padding: 50px;
		}
	}
`;
