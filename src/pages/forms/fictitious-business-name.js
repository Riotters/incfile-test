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
import Drop from "../../atomic/molecules/form/dropdown2";
import {Heading} from "../../atomic/atoms/typography/heading";
import FormContent from "../../atomic/molecules/form/form-content";
import FormTextBlock from "../../atomic/molecules/form/form-text-block";
import LockIcon from "../../images/icons/lock.inline.svg";

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
                            <FormContent>
                                <FormControl span={3}>
                                    <InputField label="First Name *" isRequired={true}/>
                                </FormControl>

                                <FormControl span={3}>
                                    <InputField label="Last Name *" isRequired={true}/>
                                </FormControl>

                                <FormControl span={3}>
                                    <InputField label="Email *" isRequired={true}/>
                                </FormControl>

                                <FormControl span={3}>
                                    <InputField label="Phone"/>
                                </FormControl>
                            </FormContent>
                        </FormSection>

                        <FormSection icon={CompanyIcon} title="Company Information">

                            <FormContent>
                                <FormControl span={2}>
                                    <Drop label="Entity Type *" options={EntityTypeOptions}
                                          placeholder="Select Entity Type"/>
                                </FormControl>

                                <FormControl span={2}>
                                    <Drop label="State of Formation *" options={StateFormationOptions}
                                          placeholder="Select Entity Type"/>
                                </FormControl>

                                <FormControl span={2}>
                                    <Drop label="State of Service *" options={ServiceOptions}
                                          placeholder="Select Entity Type"/>
                                </FormControl>
                            </FormContent>

                            <FormContent paddingTop={0}>
                                <FormControl span={6}>
                                    <Heading size={3}
                                             style={{
                                                 fontSize: "16px",
                                                 lineHeight: "19px",
                                                 marginTop: "10px",
                                                 marginBottom: 0
                                             }}>
                                        Company Address
                                    </Heading>
                                </FormControl>

                                <FormControl span={3}>
                                    <InputField label="Street Address *" isRequired/>
                                </FormControl>

                                <FormControl span={3}>
                                    <InputField label="Address (Count) *" isRequired/>
                                </FormControl>
                            </FormContent>

                            <FormContent>
                                <FormControl span={3}>
                                    <InputField label="City *" isRequired/>
                                </FormControl>

                                <FormControl span={3}>
                                    <FormContent columns={5} paddingTop={0} paddingLeft={0} paddingRight={0}>
                                        <FormControl span={3}>
                                            <InputField label="State *" isRequired/>
                                        </FormControl>

                                        <FormControl span={2}>
                                            <InputField label="ZIP Code *" isRequired/>
                                        </FormControl>
                                    </FormContent>
                                </FormControl>
                            </FormContent>
                        </FormSection>

                        <FormTextBlock
                            title="Safe & Secure"
                            text="Your information and data is safe and secure. Our servers are located in secure data centers and our website uses SSL modern encryption for all sensitive data. Our servers are also backed up hourly ensuring your data is never lost."
                            Icon={LockIcon}
                        />

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
