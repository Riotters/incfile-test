import React from "react";
import styled from "styled-components";
import ContentCenter from "../../../partials/content-center";
import OpinionsCarousel from "../../../organisms/carousels/form-your-corporation-carousel";

const Wrapper = styled.div`
	position: relative;
	padding: ${(props) => (props.padding ? props.padding : "148px 0 80px")};
`;

const Customers = ({ className, content, padding }) => (
	<Wrapper className={className} padding={padding}>
		<ContentCenter contentWidth={770}>
			<OpinionsCarousel content={content.customers} />
		</ContentCenter>
	</Wrapper>
);

export default Customers;
