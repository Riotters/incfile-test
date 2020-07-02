import React from "react"
import styled from "styled-components"
import Container from "../container"
import ArrowLink from "../arrow-link"
//import Accordion from "../accordion"
import VisibilitySensor from "../VisibilitySensor"

const Accordion = React.lazy(() => import("../accordion"))

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
      <Container>
        <Content>
          <VisibilitySensor partialVisibility once>
            {({ isVisible }) => (
              <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
                Common questions on starting a Nonprofit Corporation
              </h2>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility once>
            {({ isVisible }) => (
              <ArrowLink className={isVisible ? "slideUp enter" : "slideUp"}>
                See all
              </ArrowLink>
            )}
          </VisibilitySensor>
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
