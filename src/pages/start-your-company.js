import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/review-entity-types/home/about";
import Rocket from "../atomic/sections/review-entity-types/home/rocket";
import BusinessStructure from "../atomic/sections/learning-center-entity/comparison-chart/business-structure";
import Articles from "../atomic/sections/articles";
import Cta from "../atomic/sections/general/cta";
//Texts
import { top, about, businessStructure, rocket, cta } from "../static/review-entity-types";
import styled from "styled-components";
import Image from "../atomic/atoms/image/image";
import {Heading} from "../atomic/atoms/typography/heading";
import {Paragraph} from "../atomic/atoms/typography/paragraph";
import Button from "../atomic/molecules/buttons/button-action";
import {color} from "../atomic/atoms/styles/colors";
import Circle from "../atomic/atoms/icons/circle";
import ExSVG from "../images/icons/icon-status-x.inline.svg";

import Label from "../atomic/molecules/form/label-field-with-child";
import Input from "../atomic/atoms/inputs/input";
import { useForm } from "react-hook-form";
import { validEmail } from "../helpers/form-validate";
import { postHSForm } from '../api/Api';
import ExternalLink from "../atomic/molecules/buttons/external-link";
import { Helmet } from "react-helmet";

const LightBoxModal = styled.div`
  transition: all .8s;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const LightBoxContent = styled.div`
  transition: all .8s;

  background-color: #fff;
  width: 100%;
  max-width: 782px;
  position: relative;
  margin: 0 30px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 48px;
  pointer-events: all;
  
  @media screen and (min-width: 768px) {
    // max-height: 289px;
    // height: 289px;
    overflow-y: visible;
  }
  
  .header-top {
    color: ${color.grey2};
  }
  
  &.form-submitted {
    height: 40vh;
    max-width: 500px;
  }
`;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Column = styled.div`
    width: 100%;
    margin-bottom: 32px;
    
    @media (min-width: 768px) {
        position: relative;
    }
    text-align: center;
    
    &.image-col {
        display: flex;
        justify-content: center;
        
        .gatsby-image-wrapper {
            min-height: 200px;
            width: 100%;
        }
    }
    
    @media (min-width: 768px) {
        margin-bottom: 0;
        text-align: initial;
        width: ${props => props?.width ?? 50}%;
    }
    
    .modal-close {
        position: absolute;
        z-index: 10;
        right: 16px;
        top: 16px;
        pointer-events: all;
        cursor: pointer;
        
        @media (min-width: 768px) {
            right: -32px;
            top: -32px;
        }
    }
`;

const OutsideImage = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    min-height: 200px;
    
    @media (min-width: 768px) {
        top: ${props => props?.top ?? "0"};
        width: ${props => props?.width ?? "100%"};
        position: absolute;
    }
`;

const ReviewEntityType = () => {
    const [ modalVisible, setModalVisible ] = React.useState(false);
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const [showForm, setShowForm] = React.useState(false);
    const [submittedData, setSubmittedData] = React.useState({});

    const { register, errors, reset, handleSubmit, formState } = useForm();
    const { isSubmitting, isSubmitSuccessful } = formState;

    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    const hutk = typeof window !== 'undefined' ? document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/, "$1"): '';

    const handleDownloadFile = data => {
        const formData = new FormData();
        formData.set('pageTitle', document.title);
        formData.set('pageUrl', pageUrl);
        formData.set('hs_form_id', '3787982/1b3e495d-63a5-401f-9150-904a97c94996');
        formData.set('hutk', hutk);

        Object.keys(data).forEach(i => {
            return formData.set(i, data[i]);
        });

        postHSForm(formData)
            .then(json => {
                setSubmittedData(data);
            });
        
        setShowForm(false);
        setFormSubmitted(true);
    }

    React.useEffect(() => {
        if (isSubmitSuccessful) {
          reset({ ...submittedData });
        }
    }, [isSubmitSuccessful, submittedData, reset]);

    const popup = (e) => {
        e.preventDefault();

        if (!e.target.className.includes("modal-overlay") && !e.target.className.includes("modal-close") &&
            modalVisible === true)
            return;

        setModalVisible(!modalVisible);
    };

    let modalClases = ["lightbox-content"];

    return (
        <Layout>
            <SEO title="Start a Company | Learn about Business Entity Types"
                 description="Want to start a business? Learn about different types of business structures—from LLC to S Corp to non profit—and find the entity that suits your needs."/>
            <Top imageName="mr-bulb-main-header-illustration-7201" imageAlt="Mrs Bulb and with checklist"
                 ovalColor="purple-2" headlineWidth="560" textWidth="450" tabletVariantClass="tablet--shopper" tabletImgPosX={45}>
                <h1>{top.header}</h1>
                <p>{top.text}</p>
            </Top>
            <About content={about}/>
            <Rocket content={rocket}/>
            <BusinessStructure content={businessStructure}/>
            <Cta cta={cta} storageKey="start-your-company-modal-1" onViewportEntry={() => setModalVisible(true)} />
            <Articles categoryId={277} />
            <LightBoxModal visible={modalVisible} className="modal-overlay">
                <LightBoxContent style={{pointerEvents: "all"}} class={modalClases.join(" ")}>
                    <Flex>
                        <Column width={35} style={{marginRight: "32px"}} className="image-col">
                            <OutsideImage width="218px" top="-96px">
                                <Image filename="complete-business-entity-guide-3401" alt="The Complete Business Entity Guide" />
                            </OutsideImage>
                        </Column>
                        <Column width={65}>
                            <Heading size={6} bottomMargin={4} className="header-top">DOWNLOAD</Heading>
                            <Heading size={4} bottomMargin={16}>The Complete Business Entity Guide.</Heading>

                            {formSubmitted ? (
                                <>
                                    <Paragraph bottomMargin={32}>
                                        Thanks for downloading The Complete Business Entity Guide. Click below to start your download!
                                    </Paragraph>
                                    <ExternalLink
                                        theme="primary56"
                                        content={{
                                            text: `Download`,
                                            url: `https://f.hubspotusercontent30.net/hubfs/3787982/Incfile%20-%20Comparing%20Business%20Structure.pdf`
                                        }}
                                    />
                                </>
                            ) : <Paragraph bottomMargin={32}>We’ll help you choose the right business structure for your company.</Paragraph>
                            }
                                                        
                            {showForm && (
                                <form onSubmit={handleSubmit(handleDownloadFile)}>
                                    <Label htmlFor="email" content={{ label: `Email` }} bottomMargin="32">
                                        <Input
                                            className={errors.email ? 'invalid' : ''}
                                            type="email"
                                            name="email"
                                            id="email"
                                            inputRef={register({
                                                required: `Field can't be empty`,
                                                validate: value => validEmail(value) || `Email is not valid`
                                            })}
                                        />
                                        {errors.email && (
                                            <span className="error__info">{errors.email.message}</span>
                                        )}
                                    </Label>

                                    <Button disabled={isSubmitting} type="submit" content={{text: `Submit`}} theme="primary56" arrow />
                                </form>
                            )}

                            {(!showForm && !formSubmitted) && (
                                <Button content={{ text: `Download Now` }} theme="primary56" arrow onClick={() => setShowForm(true)} />    
                            )}
                            
                            <Circle circleColor={color.orange3} width={32} height={32} theme="normal" onClick={() => setModalVisible(false)} className="modal-close">
                                <ExSVG />
                            </Circle>
                        </Column>
                    </Flex>
                </LightBoxContent>
            </LightBoxModal>
                                
            <Helmet>
            <script type="application/ld+json">
                {`
                    {
                        "@context": "http://schema.org",
                        "@type": "VideoObject",
                        "name": "Which Business Entity Structure Is Right For You? by Incfile",
                        "description": "You’ve probably seen LLC, Inc., Co. or Corporation mentioned after a business name—as in Portfolio Coffeehouse LLC, Apple Inc., or Sony Corporation. All of these indicate that these businesses have been “incorporated” and have officially filed their business entity with their state. But which business structure should you choose? What even is the difference between all of these official business types? Let us explain.",
                        "thumbnailUrl": "https://i.ytimg.com/vi/_u4u3-PQ8a0/default.jpg",
                        "uploadDate": "2020-05-09T20:42:34Z",
                        "duration": "PT2M42S",
                        "embedUrl": "https://www.youtube.com/embed/_u4u3-PQ8a0",
                        "interactionCount": "13"
                    }
                `}
                </script>
            </Helmet>

        </Layout>
    );
};

export default ReviewEntityType;
