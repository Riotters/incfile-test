import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import OvalSVG from "../../../../images/ovals/bottom-right-transparent-blue3.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { gradient } from "../../../atoms/styles/colors";
import Oval from "../../../atoms/icons/oval";

const SettingBusiness = () => (
	<GreenContainer>
		<Oval height="570" width="570" top="30" right="0">
			<OvalSVG />
		</Oval>

		<TextCenterLayout
			headline="Understanding LLC Requirements"
			headlineWidth={770}
			textWidth={770}
			text="LLCs, unlike corporations, are not required to hold annual meetings and keep minutes, nor are they subject to the more stringent record keeping required 
            of corporations. But there are certain LLC requirements you'll need to keep in mind."
		/>

		<Container>
			<ImageBoxes>
				<TopImageBox
					image="family-baby-and-pet-photography"
					color={color.purple3}
				>
					<Heading size={3} template={4}>
						Hold an Annual General Meeting (AGM) for the shareholders and the
						board of directors
					</Heading>
					<p>
						The annual meetings are used to discuss and decide important
						information, strategic decisions, opportunities, risks and issues
						that the corporation will need to deal with.
					</p>
				</TopImageBox>

				<TopImageBox
					image="understand-where-every-penny-is-going-6819"
					color={color.green3}
				>
					<Heading size={3} template={4}>
						Issue shares to investors as ownership of the business
					</Heading>
					<p>
						Ownership in a corporation is expressed through the issuance of
						shares. The management of the corporation is governed by a board of
						directors who are elected by the shareholders.
					</p>
				</TopImageBox>

				<TopImageBox
					image="we-doubled-the-size-of-customer-service-2772"
					color={color.orange3}
					style={{ height: "fit-content" }}
				>
					<Heading size={3} template={4}>
						Appoint a board of directors
					</Heading>
					<p>
						The board of directors select officers who manage the day to day
						activities of the corporation. The board of directors also drafts
						bylaws for the corporation. These are written protocols that state
						the way that the corporation will be governed.
					</p>
				</TopImageBox>

				<TopImageBox
					image="use-an-incfile-network-atorney-blue"
					color={color.blue3}
				>
					<Heading size={3} template={4}>
						Assign Certain Positions in the Corporation
					</Heading>
					<p>
						A C Corporation will need to have all of the following positions. In
						a small C Corp, one person could hold multiple of these positions.
					</p>
					<ul>
						<li>
							<strong>Shareholders:</strong> They own the company's stock and
							are responsible for electing directors, amending the bylaws and
							articles of incorporation and approving major actions taken by the
							corporation like mergers and the sale of corporate assets. They
							alone are allowed to dissolve the corporation.
						</li>
						<li>
							<strong>Directors:</strong> They manage the corporation and are
							responsible for issuing stock, electing officers and making the
							corporation's major decisions .
						</li>
						<li>
							<strong>Officers:</strong> The corporation must have a president,
							secretary, and treasurer. These officers are responsible for
							making the day-to-day decisions that govern the corporation's
							operation.
						</li>
						<li>
							<strong>Employees:</strong> They receive a salary in return for
							their work for the corporation.
						</li>
					</ul>
				</TopImageBox>
			</ImageBoxes>
		</Container>
	</GreenContainer>
);

const GreenContainer = styled.div`
	padding-top: 100px;
	padding-bottom: 60px;
	background-image: ${gradient.blue3};
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

export default SettingBusiness;
