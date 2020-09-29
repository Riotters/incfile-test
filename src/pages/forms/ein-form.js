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
import DateField from "../../atomic/molecules/form/date-field";
import Label from "../../atomic/atoms/text-fields/label";
import Checkbox from "../../atomic/atoms/controls/checkbox";
import Radio from "../../atomic/molecules/form/radio";
import InputFieldWrapper from "../../atomic/molecules/form/label-field-with-child";

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

const radioDescription = [
    {
        radioName: "name-of-principal-radio",
        radioId: "name-of-principal-radio-accommodations",
        title: "Accommodations",
        description: [
            {
                content: `The accommodations category includes all types of accommodations such as:`,
                list: [
                    "Hotels",
                    "Motels",
                    "Casino hotels",
                    "Boarding houses",
                    "Bed and breakfast inns"
                ]
            }
        ]
    },
    {
        radioName: "name-of-principal-radio",
        radioId: "name-of-principal-radio-finance",
        title: "Finance",
        description: [
            {
                content: `The accommodations category includes all types of accommodations such as:`,
                list: [
                    "Hotels",
                    "Motels",
                    "Casino hotels",
                    "Boarding houses",
                    "Bed and breakfast inns"
                ],
                marginBottom: 24
            },
            {
                content: `The accommodations category includes all types of accommodations such as:`,
                list: [
                    "Hotels",
                    "Motels",
                    "Casino hotels",
                    "Boarding houses",
                    "Bed and breakfast inns"
                ]
            }
        ]
    }
]

const EinForm = () => {

    const [date, setDate] = useState(new Date());
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [copyData, setCopyData] = useState(true);
    const [radioCheck, setRadioCheck] = useState("");

    return (
        <Layout>
            <SEO title="Federal Employer Identification Number (EIN) / Tax ID Number"
                 description="Federal Employer Identification Number (EIN) / Tax ID Number"/>

            <FormLayout formTitle="Federal Employer Identification Number (EIN) / Tax ID Number" hasInfoBox
                        infoBoxText="The SS4 is the IRS form required to obtain an EIN (Employer Identification Number, frequently called a Tax ID number). The EIN/Tax ID number can be thought of as a Social Security Number for your business. It is usually required to open a bank account in the name of the business and to properly pay and account for any wage/payroll employees of your company.">

                <LeftColumn>
                    <FormSection icon={ContactIcon} title="Contact Information">
                        <FormContent>
                            <FormControl span={3}>
                                <InputField label="First Name *" isRequired={true} value={firstName} onChange={e => setFirstName(e.target.value)}/>
                            </FormControl>

                            <FormControl span={3}>
                                <InputField label="Last Name *" isRequired={true} value={lastName} onChange={e => setLastName(e.target.value)}/>
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
                                      placeholder="Select State"/>
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

                            <FormControl span={3}>
                                <DateField
                                    label="Date of Formation *"
                                    placeholder="MM/DD/YYYY"
                                    selected={date}
                                    onChange={e => setDate(e.target.value)}
                                    isRequired
                                />
                            </FormControl>
                        </FormContent>
                    </FormSection>

                    <FormSection icon={ContactIcon} title="SS4 Questions">
                        <FormContent>
                            <FormControl span={6}>
                                <Label
                                    fontSize="16px"
                                    text="Please answer these questions so that we may prepare the SS4 Form to obtain an EIN (Employer Identification Number, frequently called a Tax ID number)."/>
                            </FormControl>

                            <FormControl span={6}>
                                <Checkbox name="copy-data" id="copy-data" checked={copyData} onClick={e =>setCopyData(!copyData)} label="(Check here to use Contact Name)"/>
                            </FormControl>

                            <FormControl span={6}>
                                <Heading size={3}
                                         style={{
                                             fontSize: "16px",
                                             lineHeight: "19px",
                                             marginTop: "10px",
                                             marginBottom: 0
                                         }}>
                                    Name Of Principal Officer Or Owner
                                </Heading>
                            </FormControl>

                            <FormControl span={3}>
                                <InputField label="First Name *" isRequired={true} value={copyData ? firstName : ""}/>
                            </FormControl>

                            <FormControl span={3}>
                                <InputField label="Last Name *" isRequired={true} value={copyData ? lastName : ""}/>
                            </FormControl>

                            <FormControl span={3}>
                                <InputField label="Social Security Number of above named person? *" isRequired={true}/>
                            </FormControl>
                        </FormContent>
                    </FormSection>

                    <FormSection icon={ContactIcon} title="Principal Business Activity">
                        <FormContent>
                            <FormControl span={6}>
                                <Label
                                    fontSize="16px"
                                    text="Please choose the category that best describes your business. Click on a given category to review an expanded definition."/>
                            </FormControl>

                            <FormControl span={6}>
                                <Heading size={3}
                                         style={{
                                             fontSize: "16px",
                                             lineHeight: "19px",
                                             marginTop: "10px",
                                             marginBottom: 0
                                         }}>
                                    Name Of Principal Officer Or Owner
                                </Heading>
                            </FormControl>

                            {radioDescription.map(item => (
                                <FormControl span={3}>
                                    <Radio name={item.radioName} content={item.title} description={item.description} id={item.radioId} value={1} checked={radioCheck} onClick={e => setRadioCheck(e.target.id)}/>
                                </FormControl>
                            ))}

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

export default EinForm;
