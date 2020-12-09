import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
//Sections
import Top from "../atomic/partials/top";
import VirtualMailbox from "../atomic/sections/learning-center-entity/virtual-mailboxes/welcome-incfile-virtual-address";
import AdvantagesSection from "../atomic/sections/learning-center-entity/virtual-mailboxes/advantages-virtual-addresses";

import {
	top,
	mailboxes,
	advantages,
	availability,
	moreInfo,
} from "../static/learning-center-entity/virtual-mailboxes";
import ServiceAvailableSection from "../atomic/sections/learning-center-entity/virtual-mailboxes/virtual-service-available-states";
import VirtualMailboxesMoreInfo from "../atomic/sections/learning-center-entity/virtual-mailboxes/more-information";

import CCTVIcon from "../images/icons/complete-mail-scanning-of-all-correspondence.inline.svg";
import WWWAccess from "../images/icons/worldwide-access-with-web.inline.svg";
import Security from "../images/icons/security-and-encryption.inline.svg";
import Notification from "../images/icons/email-notification.inline.svg";
import Mobile from "../images/icons/mobile-compatibility.inline.svg";

import { Heading } from "../atomic/atoms/typography/heading";
import { Paragraph } from "../atomic/atoms/typography/paragraph";
import TextBlockWithImage from "../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import ContentCenter from "../atomic/partials/content-center";

import CurveSVG from "../images/curves/top-right-babyblue1.inline.svg";
import { color } from "../atomic/atoms/styles/colors";
import Curve from "../atomic/atoms/icons/curve";

import OvalSVG from "../images/ovals/top-left-transparent-reverse-big-red3.inline.svg";
import OvalSVG2 from "../images/ovals/bottom-right-transparent-babyblue1-small.inline.svg";

import Oval from "../atomic/atoms/icons/oval";
import { Helmet } from "react-helmet";

const VirtualMailBoxes = () => (
	<Layout>
		<SEO
			title="Virtual Mailbox & Virtual Address Service | Mail Scanning"
			description="Enjoy the benefits of mail scanning and a virtual mailbox wherever you are with Incfile’s Virtual Address service. Learn more. "
		/>
		<Top
			imageName="mr-contact-new-sales-9845"
			imageAlt="incfile virtual address service"
			ovalColor="blue"
			headlineWidth="500"
			textWidth="800"
			imageWidth={700}
			imagePositionRight="50%"
		>
			<h1>{top.header}</h1>
			<p>{top.text}</p>
		</Top>
		<VirtualMailbox content={mailboxes} />
		<AdvantagesSection content={advantages} />
		<ServiceAvailableSection content={availability} />
		<VirtualMailboxesMoreInfo content={moreInfo} />

		<InnerSection>
			<Oval className="oval" height="720" width="720" top="0" left="0">
				<OvalSVG />
			</Oval>

			<ContentCenter contentWidth={968}>
				<StepsGridContainer>
					<TextBlockWithImage
						SvgImage={CCTVIcon}
						imageBackgroundColor={moreInfo.items[0].backgroundColor}
						imageShadowColor={moreInfo.items[0].shadowColor}
						width={100}
						widthUnit="%"
					>
						<Heading size={3} template={4}>
							{moreInfo.items[0].header}
						</Heading>
						<Paragraph>{moreInfo.items[0].text}</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						SvgImage={WWWAccess}
						imageBackgroundColor={moreInfo.items[1].backgroundColor}
						imageShadowColor={moreInfo.items[1].shadowColor}
						width={100}
						widthUnit="%"
					>
						<Curve top="-29" right="-29" color={color.babyblue1}>
							<CurveSVG />
						</Curve>
						<Heading size={3} template={4}>
							{moreInfo.items[1].header}
						</Heading>
						<Paragraph>{moreInfo.items[1].text}</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						SvgImage={Security}
						imageBackgroundColor={moreInfo.items[2].backgroundColor}
						imageShadowColor={moreInfo.items[2].shadowColor}
						width={100}
						widthUnit="%"
					>
						<Heading size={3} template={4}>
							{moreInfo.items[2].header}
						</Heading>
						<Paragraph>{moreInfo.items[2].text}</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						SvgImage={Notification}
						imageBackgroundColor={moreInfo.items[3].backgroundColor}
						imageShadowColor={moreInfo.items[3].shadowColor}
						width={100}
						widthUnit="%"
					>
						<Heading size={3} template={4}>
							{moreInfo.items[3].header}
						</Heading>
						<Paragraph>{moreInfo.items[3].text}</Paragraph>
					</TextBlockWithImage>

					<TextBlockWithImage
						SvgImage={Mobile}
						imageBackgroundColor={moreInfo.items[4].backgroundColor}
						imageShadowColor={moreInfo.items[4].shadowColor}
						width={100}
						widthUnit="%"
					>
						<Heading size={3} template={4}>
							{moreInfo.items[4].header}
						</Heading>
						<Paragraph>{moreInfo.items[4].text}</Paragraph>
					</TextBlockWithImage>
				</StepsGridContainer>
			</ContentCenter>

			<Oval
				className="oval small"
				height="136"
				width="136"
				bottom="3.9"
				right="0"
			>
				<OvalSVG2 />
			</Oval>
		</InnerSection>

        <Helmet>
            <script type="application/ld+json">
                {`{
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "Using a Virtual Address for Your Business by Incfile",
                    "description": "Your business keeps you on the go, but you may want to have a physical presence in another city or state. With a virtual address, you’ll get the professional look of a physical office with none of the overhead costs.    How a Virtual Mailbox Works:   - A virtual mailbox gives you a permanent street address for receiving mail. - When someone sends you mail, an image of the envelope is uploaded into your digital mailbox. - If you choose to open it, the contents are scanned and saved in one centralized location that you can read whenever you fancy. - You can also have important physical documents, such as credit cards and driver’s licenses, forwarded to any address you want.  The Benefits of a Virtual Address & Mailbox:  If you choose to move, your mailing address won’t change. With a virtual business address, you can read and manage your mail online from anywhere in the world.  If you think a virtual office is right for you, Incfile can help you set one up. Learn more at https://www.incfile.com/virtual-mailbox/  Other Helpful Content: - Do You Need a Virtual Business Address?https://www.incfile.com/blog/post/need-virtual-business-address/ - Do’s and Don’ts of Getting a Virtual Address for a Non-U.S. Resident Business  https://www.incfile.com/blog/post/virtual-address-non-us-resident/ - How to Set Up a Virtual Office https://www.incfile.com/blog/post/how-to-set-up-virtual-office/",
                    "thumbnailUrl": "https://i.ytimg.com/vi/-LK9F9jQE6Q/default.jpg",
                    "uploadDate": "2020-11-11T16:14:03Z",
                    "duration": "PT1M",
                    "embedUrl": "https://www.youtube.com/embed/-LK9F9jQE6Q",
                    "interactionCount": "0"
                }`}
            </script>
        </Helmet>
    </Layout>
);

const StepsGridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 70px 30px;
	align-items: center;

	@media screen and (max-width: 769px) {
		display: block;
	}

	@media screen and (min-width: 850px) {
		grid-template-columns: repeat(auto-fit, minmax(470px, 1fr));
	}

	& > div {
		padding: 72px 40px 40px;
		align-items: flex-start;
		flex-direction: column;
		text-align: left;

		@media screen and (min-width: 769px) {
			padding: 72px 40px 40px;
			width: 470px;

			&:nth-child(even) {
				grid-column: 2;
			}
		}

		@media screen and (max-width: 769px) {
			margin-top: 70px;
		}
	}
`;

const InnerSection = styled.div`
	position: relative;
	margin-bottom: 100px;

	.oval:not(.small) {
		max-width: 100%;
		overflow: hidden;
	}
`;

export default VirtualMailBoxes;
