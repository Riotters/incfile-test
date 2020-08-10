import React from "react";
import styled from "styled-components";
import Container from "../../container";
import TextCenterLayout from "../blocks/heading-center";
//import Accordion from "../../accordion"
import VisibilitySensor from "../../VisibilitySensor";

const Accordion = React.lazy(() => import("../../accordion"));

const faq = {
  items: [
    {
      question: "What is an Advisory Group and do I need one for my nonprofit?",
      answer:
        "In oculis quidem faciunt, ut labore et via procedat oratio quaerimus igitur, quid bonum esse ratione intellegi posse et molestiae non recusandae itaque negat opus esse appetendum, alterum aspernandum sentiamus alii autem, quibus ego assentior, cum a philosophis compluribus permulta dicantur, cur verear, ne ferae.",
    },
    {
      question: "How do I create a budget for my nonprofit?",
      answer:
        "Donec quis tortor erat. Suspendisse felis nisi, lobortis sit amet enim quis, sodales consequat massa. Morbi pellentesque odio odio, quis lobortis sem tincidunt accumsan. Duis blandit elementum arcu at elementum. Nunc quis leo posuere, accumsan sapien a, accumsan urna. Suspendisse dapibus semper quam, ac consequat nisi egestas sed. Phasellus eget eros ipsum. Phasellus turpis odio, cursus id quam eu, tincidunt varius diam. Cras dictum ornare lacus, et hendrerit odio volutpat a. Fusce sodales malesuada pellentesque. Nullam sit amet velit quis sem volutpat ultricies. Pellentesque tristique neque quis metus aliquam sollicitudin. Fusce tincidunt mollis dolor. Proin vel odio quis justo ultrices lobortis ut sed metus.",
    },
    {
      question: "Do I need to have a mission statement for my nonprofit?",
      answer:
        "Aliquam sit amet viverra quam. Proin viverra ante ut consectetur molestie. Nunc ut ullamcorper massa. Nunc sed tempus enim. Phasellus non tincidunt eros. Vestibulum nec urna tortor. Morbi sed metus pellentesque, laoreet erat a, dictum ligula. Nulla eu odio mi. Aliquam faucibus ligula vitae dui viverra egestas. Aliquam et nunc urna.",
    },
  ],
};

const Wrapper = styled.div`
  padding-top: 75px;
  padding-bottom: 64px;
  position: relative;

  @media (min-width: 769px) {
    padding-top: 250px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    max-width: 610px;
    margin-bottom: 24px;
  }
`;

const Faq = () => {
  const isSSR = typeof window === "undefined";

  return (
    <Wrapper>
      <TextCenterLayout headline="Common questions on starting a Nonprofit Corporation" linkText="See all" linkUrl="#" />
      <Container>
        <Content>
          {!isSSR && (
            <React.Suspense fallback={<div />}>
              <Accordion faq={faq} />
            </React.Suspense>
          )}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Faq;
