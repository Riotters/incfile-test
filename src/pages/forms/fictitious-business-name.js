import React from "react"
import styled from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo"
import Container from "../../atomic/container";
import FormPageTitle from "../../atomic/molecules/form/form-page-title";
import FormSection from "../../atomic/molecules/form/form-section";
import ContactIcon from "../../images/icons/contact-information.inline.svg";
import CompanyIcon from "../../images/icons/company-information.inline.svg";
import FormControl from "../../atomic/molecules/form/form-control";
import InputField from "../../atomic/molecules/form/input-field";
import Drop from "../../atomic/molecules/form/dropdown";
import {Heading} from "../../atomic/atoms/typography/heading";
import Row from "../../atomic/molecules/helpers/row";

const EntityTypeOptions = [
    {value: 1, label: "one"},
    {value: 1, label: "two"}
];

const StateFormationOptions = [
    {value: 1, label: "one"},
    {value: 1, label: "two"}
];

const ServiceOptions = [
    {value: 1, label: "one"},
    {value: 1, label: "two"}
];

const FictitiousBusinessNamePage = () => (
    <Layout>
        <SEO title="WIP Page" description="wip page"/>

        <MainContent>
            <Container>
                <FormPageTitle title="Assumed Business Name"/>
            </Container>

            <Container>
                <FlexContent>
                    <LeftColumn>
                        <FormSection icon={ContactIcon} title="Contact Information">
                            <FormControl column={2}>
                                <InputField label="First Name *" isRequired={true}/>
                            </FormControl>

                            <FormControl column={2}>
                                <InputField label="Last Name *" isRequired={true}/>
                            </FormControl>

                            <FormControl column={2}>
                                <InputField label="Email *" isRequired={true}/>
                            </FormControl>

                            <FormControl column={2}>
                                <InputField label="Phone"/>
                            </FormControl>
                        </FormSection>

                        <FormSection icon={CompanyIcon} title="Company Information">

                            <Row>
                                <FormControl column={3}>
                                    <Drop label="Entity Type *" options={EntityTypeOptions}
                                          placeholder="Select Entity Type"/>
                                </FormControl>

                                <FormControl column={3}>
                                    <Drop label="State of Formation *" options={StateFormationOptions}
                                          placeholder="Select Entity Type"/>
                                </FormControl>

                                <FormControl column={3}>
                                    <Drop label="State of Service *" options={ServiceOptions}
                                          placeholder="Select Entity Type"/>
                                </FormControl>

                            </Row>

                            <Heading size={3}
                                     style={{fontSize: "16px", lineHeight: "19px", marginTop: "40px", marginBottom: 0}}>Company
                                Address</Heading>

                            <Row>
                                <FormControl column={2}>
                                    <InputField label="Phone"/>
                                </FormControl>

                                <FormControl column={2}>
                                    <InputField label="Phone"/>
                                </FormControl>
                            </Row>

                            <Row>
                                <FormControl column={2}>
                                    <InputField label="Phone"/>
                                </FormControl>

                                <FormControl column={4}>
                                    <InputField label="Phone"/>
                                </FormControl>

                                <FormControl column={4}>
                                    <InputField label="Phone"/>
                                </FormControl>
                            </Row>
                        </FormSection>

                    </LeftColumn>

                    <RightColumn>

                    </RightColumn>
                </FlexContent>
            </Container>
        </MainContent>
    </Layout>
)

const MainContent = styled.section`
    padding-top: 145px;
`;

const FlexContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const LeftColumn = styled.div`
    display: block;
    width: 100%;
    
    @media (min-width: 1200px){
        width: 770px;
    }
`;

const RightColumn = styled.div`
    display: block;
    width: 100%;
    
    @media (min-width: 1200px){
        width: 370px;
    }
`;

export default FictitiousBusinessNamePage
