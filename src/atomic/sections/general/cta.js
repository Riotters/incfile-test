import React from "react";
import styled from "styled-components";
import Container from "../../container";
//import Button from "../../button"
import Button from "../../molecules/buttons/button";
import MapSVG from "../../../images/map.inline.svg";
import OvalSVG from "../../../images/oval-yellow-2.inline.svg";
import VisibilitySensor from "../../VisibilitySensor";
import VSActionSensor from "react-visibility-sensor";

const Wrapper = styled.div`
  width: 100%;
  padding: 35px 0;
  position: relative;
  
  @media (min-width: 769px) {
    padding: 175px 0;
  }
`;

const Oval = styled.div`
  max-height: 412px;
  max-width: 412px;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 20%
    );
  }

  svg {
    moz-transform: scale(-1,1);
    -o-transform: scale(-1,1);
    -webkit-transform: scale(-1,1);
    transform: scale(-1,1);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h2 {
    max-width: 455px;
    margin-bottom: 24px;
  }

  p {
    font-size: 16px;
    line-height: 1;
    margin-bottom: 32px;
  }
`;

const Map = styled.div`
  width: 100%;
  max-width: 970px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;

  &::after {
    content: "";
    display: block;
    padding-top: 57.73%;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const Cta = ({ cta, storageKey = false, onViewportEntry = false }) => {
    const [numFired, setNumFired] = React.useState(0);

    React.useEffect(function () {
        if (storageKey && window.localStorage.getItem(storageKey) != null) {
            setNumFired(window.localStorage.getItem(storageKey));
        }
    });

    const onChangeHandler = function () {
        if(!storageKey || typeof onViewportEntry !== "function") return;

        if (numFired === 1)
            onViewportEntry();

        if (numFired < 2)
            setNumFired(numFired + 1);

        if (numFired === 2) {
            if (typeof window !== "undefined")
                window.localStorage.setItem(storageKey, 2);

            setNumFired(3);
        }
    };

    return (
        <Wrapper>
            {storageKey && typeof onViewportEntry === "function" && (
                <VSActionSensor partialVisibility="top" onChange={onChangeHandler}>
                    <>
                        <Oval>
                            <OvalSVG/>
                        </Oval>
                        <Container>
                            <Content>
                                <Map>
                                    <MapSVG/>
                                </Map>
                                <VisibilitySensor partialVisibility once>
                                    {({isVisible}) => <h2
                                        className={isVisible ? "slideUp enter" : "slideUp"}>{cta ? cta.header : "Choose the right and\u00A0start your business"}</h2>}
                                </VisibilitySensor>
                                <VisibilitySensor partialVisibility once>
                                    {({isVisible}) => <p className={isVisible ? "slideUp enter" : "slideUp"}>$0 + State Fee
                                        & FREE Registered Agent for 1st year.</p>}
                                </VisibilitySensor>
                                <VisibilitySensor partialVisibility once>
                                    {({isVisible}) => <Button className={isVisible ? "slideUp enter" : "slideUp"} content={{
                                        text: cta?.button.text ?? `Start Now`,
                                        url: `${process.env.ORDER_URL}/form-order-now.php`
                                    }} theme="primary56" arrow marginSM="0 auto"/>}
                                </VisibilitySensor>
                            </Content>
                        </Container>
                    </>
                </VSActionSensor>
            )}
            {(!storageKey || typeof onViewportEntry !== "function") && (
                <>
                    <Oval>
                        <OvalSVG/>
                    </Oval>
                    <Container>
                        <Content>
                            <Map>
                                <MapSVG/>
                            </Map>
                            <VisibilitySensor partialVisibility once>
                                {({isVisible}) => <h2
                                    className={isVisible ? "slideUp enter" : "slideUp"}>{cta ? cta.header : "Choose the right and\u00A0start your business"}</h2>}
                            </VisibilitySensor>
                            <VisibilitySensor partialVisibility once>
                                {({isVisible}) => <p className={isVisible ? "slideUp enter" : "slideUp"}>$0 + State Fee
                                    & FREE Registered Agent for 1st year.</p>}
                            </VisibilitySensor>
                            <VisibilitySensor partialVisibility once>
                                {({isVisible}) => <Button className={isVisible ? "slideUp enter" : "slideUp"} content={{
                                    text: cta?.button.text ?? `Start Now`,
                                    url: `${process.env.ORDER_URL}/form-order-now.php`
                                }} theme="primary56" arrow marginSM="0 auto"/>}
                            </VisibilitySensor>
                        </Content>
                    </Container>
                </>
            )}
        </Wrapper>
    );
};

export default Cta;
