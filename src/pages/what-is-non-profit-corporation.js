import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import ExternalLink from "../atomic/molecules/buttons/external-link";

//Sections
import Top from "../atomic/partials/top";
import About from "../components/partials/sections/about";
import Rocket from "../atomic/sections/rocket";
import Faq from "../atomic/sections/review-entity-types/nonprofit/faq";
import Cta from "../atomic/sections/general/cta";
import Articles from "../atomic/sections/articles";
import { ThankYouContent } from "../components/hubspot/thank-you-modal";
import HSFormModal from "../components/hubspot/standard-post-form-modal";

//Texts
import {
	top,
	about,
	faq,
	cta,
	hsForm,
} from "../static/review-entity-types/nonprofit";
import ProductSchema from "../components/product-schema";
import { Helmet } from "react-helmet";

const IndexPage = () => {
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
				title="What is a Nonprofit Organization? How to Start a Nonprofit"
				description="Learn all about nonprofit corporations, including the benefits & disadvantages, getting 501c3 status, and what's needed to get your company off the
    ground."
			/>

			<ProductSchema
                productUrl={`${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit`}
				productName="Non Profit Corp"
				productDescription="Information regarding the steps necessary to form and operate a Nonprofit Corporation in all 50 states. Start your Non Profit Corp with Incfile."
			/>
			<Top
				imageName="mr-bulb-nonprofit-7282"
				imageAlt="Non Profit Corp"
				ovalColor="yellow"
			>
				<h1>{top.header}</h1>
				<p>{top.text}</p>
				<Buttonsbox>
					<ExternalLink
						content={top.button[0]}
						theme="primary56"
						width="280px"
						target="_self"
						arrow
					/>
				</Buttonsbox>
			</Top>
			<About content={about} openModal={popup} />
			<Rocket statesDropdown />
			<Faq content={faq} onClick={popup} />
			<Cta cta={cta} />
			<Articles categoryId={318} />
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
                        
            <Helmet>
                <script type="application/ld+json">
                    {`{
                        "@context": "http://schema.org",
                        "@type": "VideoObject",
                        "name": "What is a Corporation? by Incfile",
                        "description": "What is a corporation and how does it work? One of the most important decisions you'll make when starting a business is its legal structure. A popular option is a “corporation“—but what does this mean for business owners?   A corporation is its own legal entity separate from the owners. It has nearly all the legal rights of an individual: It can hire employees, own assets, enter into contracts, sue and be sued, loan and borrow money, and pay taxes. But since the corporation exists as a separate entity, it limits the liability of its owners. That means shareholders have the right to participate in profits, but they’re not held personally liable for the company’s debts. And since a corporation isn’t linked to a single person, it doesn’t dissolve when its owners or shareholders change or die, so liability protection is passed on to the next in line.  The Three Main Types of Corporations:  - C Corporations - S Corporations - Non-profits   Learn more about the three main types of corporations by visiting these links below:   - What is an S Corporation? https://www.incfile.com/what-is-s-corporation/ - What is a C Corporation? https://www.incfile.com/what-is-c-corporation/ - What is a Nonprofit? https://www.incfile.com/what-is-non-profit-corporation/",
                        "thumbnailUrl": "https://i.ytimg.com/vi/oYZShvmf9eQ/default.jpg",
                        "uploadDate": "2020-09-07T17:00:19Z",
                        "duration": "PT1M41S",
                        "embedUrl": "https://www.youtube.com/embed/oYZShvmf9eQ",
                        "interactionCount": "74"
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
	max-width: 750px;
	position: relative;
	max-height: 100vh;
	overflow-y: auto;

	&.form-submitted {
		height: 40vh;
		max-width: 500px;
	}

	@media screen and (min-width: 769px) {
		padding-top: 0;
		max-width: 600px;
		max-height: 90vh;
	}
`;

export default IndexPage;
