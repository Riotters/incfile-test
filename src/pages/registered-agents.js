import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
import HSFormModal from "../components/hubspot/standard-post-form-modal";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/registered-agents/about";
import WhatAgentDo from "../atomic/sections/learning-center-entity/registered-agents/what-agent-do";
import OtherNames from "../atomic/sections/learning-center-entity/registered-agents/other-names";
import Need from "../atomic/sections/learning-center-entity/registered-agents/need";
import Requirements from "../atomic/sections/learning-center-entity/registered-agents/requirements";
import WhatHappens from "../atomic/sections/learning-center-entity/registered-agents/what-happens";
import Faq from "../atomic/sections/learning-center-entity/registered-agents/faq";
import Service from "../atomic/sections/learning-center-entity/registered-agents/service";
import LearnMore from "../atomic/sections/learning-center-entity/registered-agents/learn-more";
import Articles from "../atomic/sections/articles";
//Texts
import {
	top,
	about,
	whatAgentDo,
	otherNames,
	need,
	requirements,
	whatHappens,
	faq,
	service,
	learnMore,
	hsForm,
} from "../static/learning-center-entity/registered-agents";
import styled from "styled-components";
import { ThankYouContent } from "../components/hubspot/thank-you-modal";
import RASchema from "../atomic/sections/learning-center-entity/registered-agents/schema";

const RegisteredAgents = () => {
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
				title="What is a Registered Agent? Everything You Need to Know"
				description="Every formal business entity in the United States, whether it’s an LLC, S corp or C corp, must have a Registered Agent. Learn more."
			/>

			<RASchema />

			<Top
				imageName="mr-bulb-registered-agents"
				imageAlt="Mrs Bulb and with checklist"
				ovalColor="sun"
				headlineWidth="585"
			>
				<h1>{top.header}</h1>
				<Buttonsbox>
					<Button content={top.buttons[0]} theme="primary56" arrow />
				</Buttonsbox>
				<RatingRow>
					<CartBlock />
					<RatingBlock />
				</RatingRow>
			</Top>
			<About content={about} openHSForm={popup} />
			<WhatAgentDo content={whatAgentDo} />
			<OtherNames content={otherNames} />
			<Need content={need} />
			<Requirements content={requirements} openHSForm={popup} />
			<WhatHappens content={whatHappens} />
			<Faq content={faq} />
			<Service content={service} />
			<LearnMore content={learnMore} />
			<Articles categoryId={324} />
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

	form {
		padding: 25px 15px;

		@media (min-width: 769px) {
			padding: 50px;
		}
	}
`;

export default RegisteredAgents;
