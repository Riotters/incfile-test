import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import LogoSVG from "../../images/logo.inline.svg";
import FacebookSVG from "../../images/facebook.inline.svg";
import YoutubeSVG from "../../images/youtube.inline.svg";
import LinkedinSVG from "../../images/linkedin.inline.svg";
import { Heading } from "../../atomic/atoms/typography/heading";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;

	#type-form {
		flex: 1;
	}

	@media (max-width: 768px) {
		flex-flow: column-reverse;

		#type-form {
			width: 100%;
		}
	}
`;

const SideBar = styled.div`
	width: 350px;
	padding: 30px;
	display: flex;
	flex-flow: column;
	justify-content: center;
	text-align: center;
	background-color: #fff;

	@media (max-width: 768px) {
		width: 100%;
		order: 1;
	}

	h1 {
		font-size: 24px;
		font-family: Avenir, sans-serif;
		font-weight: normal;
	}
`;

const Copyright = styled.p`
	color: #4f4f4f;
	font-family: Avenir, sans-serif;
	font-size: 16px;
	line-height: 19px;
	width: 290px;
	text-align: left;
	padding: 15px 0;

	@media (min-width: 769px) {
		padding: 0;
	}
`;

const Bot = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 36px 0;

	@media (max-width: 768px) {
		display: none;
	}
`;

const Social = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	padding: 15px 0;

	li {
		height: 32px;
		width: 32px;
		margin-left: 12px;

		a {
			height: 100%;
			width: 100%;
		}
	}
`;

const BusinessQuizTypeForm = () => {
	return (
		<Layout isDashboardPage={true}>
			<SEO
				robots="none"
				title="Choosing a Business Structure: Our Business Entity Quiz"
				description="We’ve created an easy-to-use quiz to determine what type of legal entity would work best for your new business venture. Take the quiz now."
			/>
			<Wrapper>
				<Fragment>
					<div id="type-form">
						<iframe
							id="js-typeform"
							src="https://ray007277.typeform.com/to/w5A28E"
							style={{ width: `100%`, height: `100%`, border: 0 }}
						></iframe>
					</div>
					<SideBar>
						<Link to="/">
							<LogoSVG />
						</Link>
						<Heading size={1} style={{ fontSize: `24px` }}>
							Business Entity Type Quiz
						</Heading>

						<Bot>
							<Copyright>
								© {new Date().getFullYear()}.{` `}Incfile.com{` `}All Rights
								Reserved.
							</Copyright>
							<Social>
								<li>
									<a href="https://www.facebook.com/incfile" title="Facebook">
										<FacebookSVG />
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/channel/UC-hfd-zO8SSMpOgLNYwLAXA"
										title="YouTube"
									>
										<YoutubeSVG />
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/company/incfile-com/"
										title="LinkedIn"
									>
										<LinkedinSVG />
									</a>
								</li>
							</Social>
						</Bot>
					</SideBar>
				</Fragment>
			</Wrapper>
		</Layout>
	);
};

export default BusinessQuizTypeForm;
