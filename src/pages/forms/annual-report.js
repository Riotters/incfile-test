import React, {useState} from "react"
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
import Colorbox from "../../atomic/molecules/blocks/left-icon-block-colored";
import GoalIcon from "../../images/icons/goal.inline.svg";
import {color} from "../../atomic/atoms/styles/colors";
import Input from "../../atomic/atoms/inputs/input";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import CompanyNameInfoBox from "../../atomic/molecules/form/company-name-info-box";

const EntityTypeOptions = [
    {value: "LLC", label: "LLC"},
    {value: "Corporation", label: "Corporation"},
    {value: "NonProfit", label: "NonProfit"}
];

const ServiceOptions = [
    {
        value: `Alaska`,
        label: "Alaska",
        prefix: "AL",
        prices: {
            startFee: 233,
            processingFee: 32
        }
    },
    {
        value: `Arizona`,
        label: "Arizona",
    }
];

const StateFormationOptions = [
    {
        value: `Alaska`,
        label: "Alaska",
        designators: [
            `Corporation`,
            `Corp`,
            `Inc`,
            `Limited`,
            `CO.`,
            `Incorporated`,
            `CORP.`,
            `INC.`,
            `LTD.`,
            `CO`,
            `Company`
        ]
    },
    {
        value: `Arizona`,
        label: "Arizona",
        designators: [
            `Company`
        ]
    },
    {
        value: `Arkansas`,
        label: "Arkansas",
        designators: [
            `Corporation`,
            `LTD.`,
            `CO`,
            `Company`
        ]
    }
];

const summaryList = [
    {description: "Start Fee", price: 23},
    {description: "Processing Fee", price: 76},
    {description: "Processing Fee"},
]

const AnnulaReport = () => {
    const [serviceOption, setServiceOption] = useState(null);
    const [entityType, setEntityType] = useState(null);
    const [stateFormation, setStateFormation] = useState(null);
    const [designator, setDesignator] = useState(null);
    const [companyName, setCompanyName] = useState(null);

    const getCurrentDesignators = (option) => {
        let formation = StateFormationOptions.find((element) => {
            return element.value === option
        });

        if(formation.designators) {
            return formation.designators;
        }

        return null;
    };
    console.log(companyName);
    console.log(designator);
    console.log(stateFormation);
    return (
        <Layout>
            <SEO title="Annual Report" description="Annual Report"/>

            <FormLayout formTitle="Annual Report">

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
                            <FormControl span={6}>
                                <Colorbox paddingValue="24px 32px 24px 88px" iconLeftPosition="32px"
                                          iconTopPosition="calc(50% - 16px)" Icon={GoalIcon} borderRadiusValue="5px"
                                          color={color.yellow3}
                                          content={{text: "The state of formation is where the company was formed, while the state of service would only be applicable if you are conducting business in a different state. In most cases the state of formation and state of service will be the same."}}/>
                            </FormControl>

                            <FormControl span={2}>
                                <Drop label="Entity Type *" options={EntityTypeOptions}
                                      placeholder="Select Entity Type" onToggleSelect={setEntityType}/>
                            </FormControl>

                            <FormControl span={2}>
                                <Drop label="State of Formation *" options={StateFormationOptions}
                                      placeholder="Select Entity Type" onToggleSelect={setStateFormation}/>
                            </FormControl>

                            <FormControl span={2}>
                                <Drop label="State of Service *" options={ServiceOptions}
                                      placeholder="Select Entity Type" onToggleSelect={setServiceOption}/>
                            </FormControl>

                            {serviceOption && stateFormation && entityType &&
                               <>
                                   <FormControl span={4}>
                                       <InputField label="Company Name *" isRequired={true} onChange={e => setCompanyName(e.target.value)}/>
                                   </FormControl>

                                   <FormControl span={2}>
                                       <Drop label="Designator *" options={getCurrentDesignators(stateFormation.value)}
                                             placeholder="Select Designator" onToggleSelect={setDesignator}/>
                                   </FormControl>
                               </>
                            }

                            {companyName && designator &&
                                <>
                                    <FormControl span={6}>
                                        <CompanyNameInfoBox companyName={companyName} designator={designator.label}/>
                                    </FormControl>
                                </>
                            }
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
                    <Summary>
                        <SummaryOrder orderSum={99}/>
                        <SummaryBar barPercentage={50}/>
                        <SummaryList list={summaryList}/>
                        <SummaryTextBlock Icon={CheckIcon}
                                          text="Trusted by over 250,000 business owners to maintain their state's business compliance obligations."
                                          title="Maintain business compliance"/>
                        <SummaryTextBlock Icon={BenefitsIcon} text="This is a fully deductible business expense."
                                          title="Tax savings benefit"/>
                    </Summary>
                </RightColumn>

                <SubmitSection/>
            </FormLayout>

        </Layout>
    )
}

export default AnnulaReport;
