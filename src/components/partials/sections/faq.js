import React from "react"
import styled from "styled-components"
import Container from "../../container"
import TextCenterLayout from "../layouts/text-center"
//import Accordion from "../../accordion"
import VisibilitySensor from "../../VisibilitySensor"

const Accordion = React.lazy(() => import("../../accordion"))

const Wrapper = styled.div`
  padding-top: 75px;
  padding-bottom: 64px;
  position: relative;

  @media (min-width: 768px) {
    padding-top: 250px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    max-width: 610px;
    margin-bottom: 24px;
  }
`

const Faq = () => {
  const isSSR = typeof window === "undefined"

  return (
    <Wrapper>
      <TextCenterLayout 
          headline="Common questions on starting a Nonprofit Corporation" 
          linkText="See all"
          linkUrl="#"
          />
      <Container>
        <Content>
          {!isSSR && (
            <React.Suspense fallback={<div />}>
              <Accordion />
            </React.Suspense>
          )}
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Faq