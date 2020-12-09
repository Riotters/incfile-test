import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import TextCenterLayout from "../atomic/partials/heading-center.js";
import styled from "styled-components";
import Top from "../atomic/partials/top";
import About from "../atomic/sections/manage-your-company/llc-s-corp-election/about";
import ContentObject from "../atomic/partials/left-content-right-object";
import ObjectContent from "../atomic/partials/left-object-right-content";
import { color, gradient } from "../components/styles/colors";
import Accordion from "../atomic/organisms/accordion/accordion";
import Benefits from "../atomic/sections/manage-your-company/manage-your-company/benefits";
import ArrowLink from "../atomic/molecules/buttons/text";
import H2Text from "../atomic/molecules/text-blocks/h2-text";
import H3Text from "../atomic/molecules/text-blocks/h3-text";
import {
	top,
	about,
	llcsTax,
	howSaveMoney,
	taxCalculator,
	fairSalary,
	fileForm,
	behalfFile,
	help,
	faq,
	overhead,
} from "../static/llc-s-corp-election";
import NumericBoxedList from "../atomic/organisms/lists/numeric-boxed-list";
import CircleCheckmarkText from "../atomic/molecules/static-check/circle-checkmark-text";
import TopImageBox from "../components/top-image-box";
import ContentCenter from "../atomic/partials/content-center";
import { Heading } from "../atomic/atoms/typography/heading";
import { Paragraph } from "../atomic/atoms/typography/paragraph";
import TotalSavings from "../atomic/organisms/forms/total-savings";
import LeftContentRightImage from "../atomic/partials/left-content-right-image";
import BusinessRevenue from "../atomic/molecules/blocks/business-revenue";
import parse from "html-react-parser";
import Articles from "../atomic/sections/articles";
import ProductSchema from "../components/product-schema";

const LLCsTax = styled.section`
	position: relative;

	padding-top: 75px;
	padding-bottom: 64px;
`;

const Example = styled.section`
	position: relative;
	padding-top: 75px;
	padding-bottom: 64px;
	background-image: ${gradient.orange3};
`;

const FairlSalary = styled.section`
	position: relative;
	padding-top: 75px;
	padding-bottom: 64px;
`;

const Overhead = styled.section`
	position: relative;
	padding-top: 75px;
	padding-bottom: 64px;
	background-image: ${gradient.blue3};

	.bottom-text {
		max-width: 570px;
		color: ${color.grey1};
		text-align: center;
	}
`;

const OverheadBoxes = styled.div`
	display: grid;
	grid-gap: 30px;
	width: 100%;
	max-width: 970px;
	padding: 140px 0;
	margin: 0 auto;
	grid-template-columns: 100%;

	@media (min-width: 576px) {
		grid-template-columns: 1fr 1fr;
	}
`;

const FileForm = styled.section`
	position: relative;
	padding-top: 75px;
	padding-bottom: 64px;
`;

const BehalfFile = styled.section`
	position: relative;
	padding-top: 75px;
	padding-bottom: 120px;

	h2 {
		padding-bottom: 72px;
	}

	.card {
		margin: 56px 0 48px;
	}

	@media (max-width: 575px) {
		.small {
			font-size: 12px;
			line-height: 22px;
		}
	}
`;

const Help = styled.section`
	position: relative;
	padding-top: 88px;
	padding-bottom: 64px;

	&::before {
		content: "";
		height: 1188px;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-image: ${gradient.green3};
	}

	.header-1 {
		padding-bottom: 56px;
	}

	.header-2 {
		padding-top: 72px;
	}

	h3 {
		padding-bottom: 24px;
	}

	@media (max-width: 575px) {
		.small {
			font-size: 12px;
			line-height: 16px;
		}
	}
`;

const List = <NumericBoxedList content={llcsTax.list} />;
const NoImpact = <CircleCheckmarkText isRed content={llcsTax.red} />;
const Revenue = <BusinessRevenue />;
const Savings = <TotalSavings />;

const CorpElection = () => (
	<Layout>
		<SEO
			title="Have Your LLC Taxed as an S Corp - S Corp Election Form 2553"
			description="Reduce the tax you pay by having your LLC treated as an S Corp for tax purposes. Learn more about how to file IRS form 2553 - or have us file for you!"
		/>
		<ProductSchema
			productUrl="https://orders.incfile.com/s-corp-election-form?action=new&type=24"
			productName="Form 2553"
			productPrice="50"
			productDescription="Reduce the tax you pay by having your LLC treated as an S Corp for tax purposes. Incfile will do all the paperwork for you."
		/>
		<Top
			imageName="mrs-bulb-business-taxes"
			imageAlt="Mrs Bulb checking forms on notebook"
			ovalColor="sun"
		>
			<h1>{top.header}</h1>
			<p>{top.text}</p>
			<Buttonsbox>
				<Button content={top.button[0]} theme="primary56" arrow />
			</Buttonsbox>
		</Top>
		<About content={about} />
		<LLCsTax>
			<ContentObject
				contentWidth="400"
				headlineWidth="450"
				object={[List, NoImpact]}
			>
				<H2Text content={llcsTax} />
			</ContentObject>
		</LLCsTax>
		<Example>
			<TextCenterLayout
				headline={howSaveMoney.header}
				headlineWidth="770"
				text={howSaveMoney.text}
				bottomMargin="80"
			/>
			<ContentObject
				object={Revenue}
				contentWidth="570"
				bottomMargin="48"
				bottomMarginLG="144"
			>
				<Heading size="3">{howSaveMoney.header2}</Heading>
				<Paragraph big bottomMargin="64">
					{howSaveMoney.text2}
				</Paragraph>
				<Heading size="3">{howSaveMoney.header3}</Heading>
				<Paragraph big bottomMargin="0">
					{howSaveMoney.text3}
				</Paragraph>
			</ContentObject>
			<ObjectContent object={Savings}>
				<Heading size="2" bottomMargin="80" style={{ textAlign: "left" }}>
					{taxCalculator.header}
				</Heading>
				<Paragraph big>{taxCalculator.text}</Paragraph>
				<Heading size="3" bottomMargin="32">
					{taxCalculator.header2}
				</Heading>
				<ArrowLink content={taxCalculator.link} bottomMargin="0" />
			</ObjectContent>
		</Example>
		<FairlSalary>
			<LeftContentRightImage image="weight">
				<Heading size="2" bottomMargin="64">
					{fairSalary.header}
				</Heading>
				<Paragraph big bottomMargin="0">
					{fairSalary.text}
				</Paragraph>
			</LeftContentRightImage>
		</FairlSalary>
		<Overhead>
			<TextCenterLayout headline={overhead.header} text={overhead.text} />
			<ContentCenter>
				<OverheadBoxes>
					<TopImageBox image="envelope-dollar" color={color.yellow3}>
						<Heading size={3} template={4} bottomMargin={0}>
							Setting up monthly payroll
						</Heading>
						<p>
							You will need to set up a monthly payroll where you pay yourself
							and submit your payroll taxes
						</p>
					</TopImageBox>
					<TopImageBox image="calculator-coin" color={color.red3}>
						<Heading size={3} template={4} bottomMargin={0}>
							Additional accounting fees
						</Heading>
						<p>
							Your accountant will need to file your taxes in a slightly
							different way, which may increase your accounting fees
						</p>
					</TopImageBox>
				</OverheadBoxes>
				<p className="bottom-text">
					This will likely be more than counterbalanced by the money you save in
					tax payments.
				</p>
			</ContentCenter>
		</Overhead>
		<FileForm>
			<TextCenterLayout
				headline={fileForm.header}
				text={fileForm.text}
				bottomMargin="64"
			/>
			<ContentCenter contentWidth="770">
				<Heading size="4" bottomMargin="8">
					{fileForm.header2}
				</Heading>
				<Paragraph big mixed style={{ textAlign: `center` }}>
					{parse(fileForm.text2)}
				</Paragraph>
				<NumericBoxedList content={fileForm.list} />
			</ContentCenter>
		</FileForm>
		<BehalfFile>
			<TextCenterLayout headline={behalfFile.header} text={behalfFile.text} />
			<ContentCenter contentWidth="470">
				<TopImageBox className="card" image="24-hours" color={color.orange3}>
					<h4>{behalfFile.header2}</h4>
					<p>
						{behalfFile.text2}
						<a href={`${process.env.ORDER_URL}/form-order-now.php`}>
							{" "}
							{behalfFile.link}{" "}
						</a>
						{behalfFile.text3}
						<a href="/research-topics/c-corporation-info/form-2553/">
							{" "}
							{behalfFile.link2}{" "}
						</a>
						{behalfFile.text4}
					</p>
				</TopImageBox>
				<Button
					theme="secondary56"
					content={behalfFile.button}
					arrow
					className="small"
				/>
			</ContentCenter>
		</BehalfFile>
		<Help>
			<TextCenterLayout className="header-1" headline={help.header} />
			<ContentCenter contentWidth="770">
				<H3Text content={help.saveYourTime} />
				<Button
					theme="primary56"
					content={help.button}
					margin="48px auto 0 auto"
					arrow
					className="small"
				/>
			</ContentCenter>
			<TextCenterLayout
				className="header-2"
				headline={help.header2}
				headlineWidth="750"
			/>
			<ContentCenter contentWidth="770">
				<Accordion content={faq} />
			</ContentCenter>
		</Help>
		<Benefits />
		<Articles categoryId={293} />
	</Layout>
);

export default CorpElection;
