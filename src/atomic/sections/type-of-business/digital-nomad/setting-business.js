import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-left-transparent-green1.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import { Link } from "gatsby";
import {Heading} from "../../../atoms/typography/heading";

const SettingBusiness = () => (
	<WrapperContainer>
		<Oval>
			<GreenOval />
		</Oval>

		<Oval2>
			<GreenOval />
		</Oval2>

		<TextCenterLayout
			headline="Running a Business as a Working Nomad"
			headlineWidth={770}
			textWidth={770}
			text="Once you've legally created your digital nomad business you'll need to get some other things in place."
		/>

		<Container>
			<ImageBoxes>
				<TopImageBox image="state-filling-fees" imageAlt="finance and taxes of digital nomad business" color={color.yellow3}>
					<Heading size={3} template={4}>Finances and Taxes</Heading>
					<p>
						What kind of{" "}
                        <a
                            className="partner_link"
                            data-name="Bank of America"
							href="https://utility.bankofamerica.com/alliance/?formid=IF1"
							target="_blank"
							rel="noopener noreferrer"
						>
							bank account
						</a>{" "}
						will you get? How do you find the{" "}
                        <a
                            className="partner_link"
                            data-name="CardRatings"
							href="http://t.tihop.com/cgi/r?;n=203;c=1666272;s=7273;x=7936;f=201908011042310;u=j;z=TIMESTAMP;src=663024"
							target="_blank"
							rel="noopener noreferrer"
						>
							best business credit card
						</a>
						? Figuring out how you’ll manage your finances and pay taxes as an
						expat are all important things to consider, so your digital nomad
						business stays in the green.
					</p>
				</TopImageBox>

				<TopImageBox image="software" imageAlt="software of digital nomad business" color={color.blue3}>
					<Heading size={3} template={4}>Software and Process</Heading>
					<p>
						Is there software that can help you manage and market your business?
						See our list of software at the end of this article for some great
						starting points.
					</p>
				</TopImageBox>

				<TopImageBox image="organization-change-02" imageAlt="process of digital nomad business" color={color.green3}>
					<Heading size={3} template={4}>Processes</Heading>
					<p>
						What business processes are you going to use to run your business
						efficiently and effectively? You will need to get good financial,
						client management and work management processes in place. How will
						you track projects and increase productivity? How will you work with
						others from afar — what chat client will you use? Does it have a
						mobile app too?
					</p>
				</TopImageBox>

				<TopImageBox image="display-ads" imageAlt="marketing of digital nomad business" color={color.red3}>
					<Heading size={3} template={4}>Marketing</Heading>
					<p>
						Do you need to build a website for your digital nomad business?
						(We're going to always go with a YES for that one.) Should you have
						a logo designed professionally? Will you need business cards? Think
						through a professional brand and pieces that make your business
						appear official and professional when working remotely.
					</p>
				</TopImageBox>

				<TopImageBox image="measuring-business-success" imageAlt="business maintenance of digital nomad business" color={color.babyblue3}>
					<Heading size={3} template={4}>Business Maintenance</Heading>
					<p>
						Most states require businesses to file an{" "}
						<Link to="/manage-your-company/annual-report/">Annual Report</Link>{" "}
						report once a year. You will also be expected to pay estimated taxes
						on what you plan to earn in the current business year. And, your
						federal, state, regional and city{" "}
						<Link to="/business-license-research-package/">
							business licenses and permits
						</Link>{" "}
						may need to be renewed on a regular basis, typically once a year.
					</p>
				</TopImageBox>

				<TopImageBox image="location" imageAlt="location of digital nomad business" color={color.red3}>
					<Heading size={3} template={4}>Business Location</Heading>
					<p>
						Where are you going to run your business from? The joy of being a
						digital nomad is you can theoretically run it from anywhere, but
						you'll need to make sure you have all the necessary facilities — an
						internet connection, somewhere to work from, access to a phone etc.
					</p>
				</TopImageBox>

				<TopImageBox image="side-3" imageAlt="equipment of digital nomad business" color={color.orange3}>
					<Heading size={3} template={4}>Equipment</Heading>
					<p>
						What equipment do you need to manage your digital nomad business
						apart from a laptop, computer, smartphone or tablet? What about
						transportation or specialized equipment? Make sure you understand
						exactly what you need to spend so you can write it off against
						business expenses. Grab extras of computer equipment such as
						chargers because these things are often hard to find or expensive in
						some international locations.
					</p>
				</TopImageBox>
			</ImageBoxes>
		</Container>
	</WrapperContainer>
);

const WrapperContainer = styled.div`
	background: rgb(255, 255, 255);
	background-image: ${gradient.green3};
	padding-bottom: 100px;
	padding-top: 100px;
	position: relative;
`;

const ImageBoxes = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 30px;
	padding-top: 112px;
	width: 100%;
	max-width: 970px;

	@media (min-width: 769px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 970px) {
		margin: 0 auto;
	}
`;

const Oval = styled.div`
	position: absolute;
	left: 0;
	top: 0px;
	width: 100%;

	@media (min-width: 720px) {
		width: 720px;
	}
`;

const Oval2 = styled.div`
	position: absolute;
	right: 0;
	top: 220px;
	width: 100%;
	transform: scaleX(-1);

	@media (min-width: 720px) {
		width: 720px;
	}
`;
export default SettingBusiness;
