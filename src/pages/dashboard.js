import React from 'react';
import { color } from '../components/styles/colors';
import styled from 'styled-components';
import Image from '../atomic/atoms/image/image_nobase64';
import ArrowSVG from '../images/arrow-circle.inline.svg';
import Oval from "../atomic/atoms/icons/oval";
import OvalSVG from '../images/ovals/top-left-transparent-orange2.inline.svg';
import OvalSVG2 from '../images/medium-571.inline.svg';
import IncfileLogoSVG from '../images/logo.inline.svg';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import { Heading } from '../atomic/atoms/typography/heading';
import FormControl from "../atomic/molecules/form/form-control";
import InputField from "../atomic/molecules/form/input-field";
import FormContent from "../atomic/molecules/form/form-content";
import Button from '../components/button';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    height: 100vh;
    width: 100%;

    @media screen and (min-width: 991px) {
        grid-template-columns: 570px 1fr;
    }
`
const LeftCol = styled.div`
    display: flex;
    align-items: center;
    box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
    background-color: #ffffff;
    padding: 30px;
    flex-direction: column;
    justify-content: space-between;
    
    .left__top{
        display: flex;
        width: 100%;
        align-self: baseline;
        align-items: baseline;

        a{
            transform: rotate(-90deg);
        }

        &-logo{
            margin: auto;
        }
    }

    .left__form{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin: auto;
    }
`

const RightCol = styled.div`
    position: relative;
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 46%, #fef6ed);
    display: none;
    overflow: hidden;

    @media screen and (min-width: 990px) {
        display: flex;
        align-items: center;
        justify-content: center; 
    }

    .gatsby-image-wrapper{
        width: 100%;
        max-width: 750px;
    }
`

const DashboardLogin = () => (
    <Layout isDashboardPage={true}>
        <SEO title="Login Client Dashboard" description="Login RA Dashboard Incfile.com" />

        <Wrapper>
            <LeftCol>
                <div className="left__top">
                    <Link to="/"><ArrowSVG /></Link>
                    <div className="left__top-logo"><IncfileLogoSVG/></div>
                </div>
                <div className="left__form">
                    <Heading size={4} bottomMargin={48}>Sign in to Incfile</Heading>
                    <FormControl>
                        <InputField label="Enter Email Address or Mobile *" isRequired={true}/>
                    </FormControl>
                    <Button to="/" theme="primary56" margin="32px 0 0 0" arrow>Next</Button>
                </div>
            </LeftCol>

            <RightCol>
                <Oval className="oval" height="420" width="420" top="5" left="0" y="-20">
                    <OvalSVG />
                </Oval>

                <Oval className="oval" height="720" width="720" bottom="0" right="-30" y="-5">
                    <OvalSVG2 />
                </Oval>
                
                <Image filename="client-login" alt="Login to dashboard" />
            </RightCol>
        </Wrapper>
    </Layout>
)

export default DashboardLogin;