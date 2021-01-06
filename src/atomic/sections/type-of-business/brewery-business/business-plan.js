import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "../../../atoms/styles/colors";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSvg from "../../../../images/ovals/top-right-transparent-green3.inline.svg";
import TextCenterLayout from "../../../partials/heading-left";
import { gradient } from "../../../atoms/styles/colors";

const BusinessOwnerResponsibilities = styled.section`
	position: relative;
	padding-bottom: 64px;
	width: 100%;
	max-width: 770px;

	@media (min-width: 770px) {
		margin: 0 auto;
	}

	h2.title {
		font-size: 40px;
		padding-bottom: 56px;
	}

	.box {
		margin-bottom: 48px;
	}
`;

const Wrapper = styled.section`
	position: relative;
	background: ${gradient.green3};
	padding-top: 100px;
`;

const Oval = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	transform: rotate(180deg);

	svg {
		transform: scaleX(-1);
	}

	@media (min-width: 570px) {
		width: 570px;
	}
`;

const BusinessPlan = () => (
	<Wrapper>
		<Oval>
			<OvalSvg />
		</Oval>

		<Container>
			<BusinessOwnerResponsibilities>
				<TextCenterLayout headline="Your Brewery Business Plan" />
				<Paragraph big style={{ marginBottom: "48px" }}>
					A good business plan with accurate financial projections is at the
					heart of any financially responsible, well-managed brewery. You will
					need to define how you’re going to run your brewery business, market
					yourself, get sales, make a profit and grow.
				</Paragraph>

				<Paragraph
					big
					style={{
						fontFamily: "Engram-Bold",
						color: color.black,
						fontSize: "24px",
					}}
				>
					You will also need a business model for your brewery.
				</Paragraph>

				<Paragraph big>
					This will detail where your revenue will come from, what your profit
					margins are, how quickly you will pay off debts and include a thorough
					accounting of all your initial and ongoing brewery costs.
				</Paragraph>
				<Paragraph big>
					Brewery business plans do vary slightly, but they should all cover the
					following areas:
				</Paragraph>

				<CountingTextBoxed number={1}>
					<Paragraph bottomPadding={0} bottomMargin={0}>
						An executive summary with the most important points from your
						business plan
					</Paragraph>
				</CountingTextBoxed>

				<CountingTextBoxed number={2}>
					<Paragraph bottomPadding={0} bottomMargin={0}>
						Your goals and what you hope to achieve with your brewery business
					</Paragraph>
				</CountingTextBoxed>

				<CountingTextBoxed number={3}>
					<Paragraph bottomPadding={0} bottomMargin={0}>
						A description of your brewery business, background information and
						context
					</Paragraph>
				</CountingTextBoxed>

				<CountingTextBoxed number={4}>
					<Paragraph bottomPadding={0} bottomMargin={0}>
						A market analysis and likely demand
					</Paragraph>
				</CountingTextBoxed>

				<CountingTextBoxed number={5}>
					<Paragraph bottomPadding={0} bottomMargin={0}>
						An overview of how your brewery business is structured
					</Paragraph>
				</CountingTextBoxed>

				<CountingTextBoxed number={6}>
					<Paragraph bottomPadding={0} bottomMargin={0}>
						Your business model
					</Paragraph>
				</CountingTextBoxed>

				<CountingTextBoxed number={7}>
					<Paragraph bottomPadding={0} bottomMargin={0}>
						How you will market and sell your offerings
					</Paragraph>
				</CountingTextBoxed>

				<CountingTextBoxed number={8}>
					<Paragraph bottomPadding={0} bottomMargin={0}>
						Financial projections, revenue and profitability
					</Paragraph>
				</CountingTextBoxed>

				<CountingTextBoxed number={9}>
					<Paragraph bottomPadding={0} bottomMargin={0}>
						Appendices
					</Paragraph>
				</CountingTextBoxed>

				<Paragraph big style={{ marginTop: "50px" }} mixed={true}>
					We’ve got the perfect{" "}
					<Link to="https://www.incfile.com/blog/post/keys-successful-business-plan/">
						guide to writing your business plan.
					</Link>
				</Paragraph>
			</BusinessOwnerResponsibilities>
		</Container>
	</Wrapper>
);

export default BusinessPlan;
