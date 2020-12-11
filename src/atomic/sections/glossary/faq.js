import styled from "styled-components";
import React from "react";
import Container from "../../container";
import ContentCenter from "../../partials/content-center";
import Accordion from "../../organisms/accordion/accordion";
import {
	glossaryA,
	glossaryB,
	glossaryC,
	glossaryD,
	glossaryE,
	glossaryF,
	glossaryG,
	glossaryH,
	glossaryI,
	glossaryJ,
	glossaryL,
	glossaryM,
	glossaryN,
	glossaryO,
	glossaryP,
	glossaryQ,
	glossaryR,
	glossaryS,
	glossaryT,
	glossaryU,
	glossaryV,
	glossaryW,
} from "../../../static/glossary";
import { Heading } from "../../atoms/typography/heading";

const Wrapper = styled.section`
	position: relative;

	h3 {
		width: 100%;
		max-width: 970px;
		text-align: left;
	}
`;

const GlossaryFAQSection = ({ className }) => (
	<Wrapper className={className}>
		<Container>
			<ContentCenter contentWidth={970}>
				<Heading size={2} template={3} bottomMargin="32">
					A
				</Heading>
				<Accordion content={glossaryA} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					B
				</Heading>
				<Accordion content={glossaryB} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					C
				</Heading>
				<Accordion content={glossaryC} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					D
				</Heading>
				<Accordion content={glossaryD} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					E
				</Heading>
				<Accordion content={glossaryE} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					F
				</Heading>
				<Accordion content={glossaryF} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					G
				</Heading>
				<Accordion content={glossaryG} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					H
				</Heading>
				<Accordion content={glossaryH} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					I
				</Heading>
				<Accordion content={glossaryI} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					J
				</Heading>
				<Accordion content={glossaryJ} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					L
				</Heading>
				<Accordion content={glossaryL} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					M
				</Heading>
				<Accordion content={glossaryM} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					N
				</Heading>
				<Accordion content={glossaryN} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					O
				</Heading>
				<Accordion content={glossaryO} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					P
				</Heading>
				<Accordion content={glossaryP} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					Q
				</Heading>
				<Accordion content={glossaryQ} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					R
				</Heading>
				<Accordion content={glossaryR} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					S
				</Heading>
				<Accordion content={glossaryS} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					T
				</Heading>
				<Accordion content={glossaryT} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					U
				</Heading>
				<Accordion content={glossaryU} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					V
				</Heading>
				<Accordion content={glossaryV} tab maxWidth={970} noAutoWidth />
				<Heading size={2} template={3} bottomMargin="32">
					W
				</Heading>
				<Accordion content={glossaryW} tab maxWidth={970} noAutoWidth />
			</ContentCenter>
		</Container>
	</Wrapper>
);

export default GlossaryFAQSection;
