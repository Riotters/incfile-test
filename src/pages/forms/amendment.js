import React from "react"
import Layout from "../../components/layout";
import SEO from "../../components/seo"
import FormSection from "../../atomic/molecules/form/form-section";
import ContactIcon from "../../images/icons/registered-agent-form.inline.svg";
import CompanyIcon from "../../images/icons/building-form.inline.svg";
import FormControl from "../../atomic/molecules/form/form-control";
import InputField from "../../atomic/molecules/form/input-field";
import Drop from "../../atomic/molecules/form/dropdown2";
import {Heading} from "../../atomic/atoms/typography/heading";
import FormContent from "../../atomic/molecules/form/form-content";
import FormTextBlock from "../../atomic/molecules/form/form-text-block";
import LockIcon from "../../images/icons/lock.inline.svg";
import CheckIcon from "../../images/icons/check-circle-white.inline.svg";
import BenefitsIcon from "../../images/icons/business-taxes-white.inline.svg";
import SubmitSection from "../../atomic/molecules/form/submit-section";
import FormLayout from "../../atomic/molecules/form/form-layout";
import LeftColumn from "../../atomic/molecules/form/form-left-column";
import RightColumn from "../../atomic/molecules/form/form-right-column";
import Summary from "../../atomic/molecules/form/summary/summary";
import SummaryOrder from "../../atomic/molecules/form/summary/summary-order";
import SummaryBar from "../../atomic/molecules/form/summary/summary-bar";
import SummaryList from "../../atomic/molecules/form/summary/summary-list";
import SummaryTextBlock from "../../atomic/molecules/form/summary/summary-text-block";

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

const StateOptions = [
    {value: 1, label: "one"},
    {value: 1, label: "two"}
];

const summaryList = [
    {description: "Start Fee", price: 23},
    {description: "Processing Fee", price: 76},
    {description: "Processing Fee"},
]

const AmendmentForm = () => (
    <Layout>
        <SEO title="Articles of Amendment" description="Articles of Amendment"/>

        <FormLayout formTitle="Articles of Amendment" hasInfoBox infoBoxText="As time passes and businesses evolve, you may find that you are in a situation where your business name no longer fits the services you provide or perhaps the leadership team of your company is undergoing changes. Any major event that alters the information on your Articles of Incorporation or Articles of Organization needs to be reported to your secretary of state by filing an Articles of Amendment form.">

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

                    <FormContent>
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
                                    <Drop label="State *" options={StateOptions}
                                          placeholder="Select State"/>
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
                <Summary>
                    <SummaryOrder orderSum={99}/>
                    <SummaryBar barPercentage={50}/>
                    <SummaryList list={summaryList}/>
                    <SummaryTextBlock Icon={CheckIcon} text="Trusted by over 250,000 business owners to maintain their state's business compliance obligations." title="Maintain business compliance" />
                    <SummaryTextBlock Icon={BenefitsIcon} text="This is a fully deductible business expense." title="Tax savings benefit" />
                </Summary>
            </RightColumn>

            <SubmitSection/>
        </FormLayout>

    </Layout>
)

export default AmendmentForm
