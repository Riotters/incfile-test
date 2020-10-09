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
                                    <Radio name={item.radioName} content={item.title} description={item.description} id={item.radioId} value={item.value} checked={radioCheck} onClick={e => setRadioCheck(e.target.id)}/>
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
                content: `The finance category includes establishments engaged in financial transactions involving the creation, liquidation, or change of ownership of financial assets. Examples include companies involved in:`,
                list: [
                    "Banking",
                    "Sales financing",
                    "Issuance of credit cards."
                ],
                marginBottom: 24
            },
            {
                content: `Also included are:`,
                list: [
                    "Mortgage companies and mortgage brokers",
                    "Securities brokers",
                    "Firms offering investment advice",
                    "Firms offering trust administration",
                    "Funds and trusts set up for the purpose of collecting and distributing money."
                ]
            }
        ]
    },
    {
        radioName: "name-of-principal-radio",
        radioId: "name-of-principal-radio-health-care",
        title: "Health Care",
        description: [
            {
                content: `The health care category includes:`,
                list: [
                    "Doctors",
                    "Mental health specialists",
                    "Hospitals",
                    "Outpatient care centers",
                    "Residential care facilities",
                    "Mental health and substance abuse treatment centers."
                ]
            }
        ]
    },
    {
        radioName: "name-of-principal-radio",
        radioId: "name-of-principal-radio-manufacturing",
        title: "Manufacturing",
        value: "manufacturing",
        description: [
            {
                content: `The manufacturing category covers businesses engaged in the mechanical, physical, or chemical transformation of materials, substances, or components into any type of new product.`,
                marginBottom: 24
            },
            {
                content: `Examples include:`,
                list: [
                    "Contractors who manufacture products for others",
                    "Candy stores that manufacture candy on the premises",
                    "Bakeries that bake or prepare their products on the premises."
                ],
                marginBottom: 24
            },
        ]
    },
    {
        radioName: "name-of-principal-radio",
        radioId: "name-of-principal-radio-rental-leasing",
        title: "Rental & Leasing",
        value: "rental",
        description: [
            {
                content: `The rental and leasing category includes the rental and leasing of:`,
                list: [
                    "Automobiles",
                    "Consumer goods (videos, formal wear)",
                    "Commercial goods (aircraft, office machinery)",
                    "Industrial goods (construction equipment, tractors) and any other type of equipment",
                    "Mini storage units."
                ],
                marginBottom: 24
            },
            {
                content: `Any type of general rental center is included in this category. However, the rental and leasing of property should be included in the Real Estate category. Real Estate Investment Trusts (REITs) should be included in the Finance category.`
            },
        ]
    },
    {
        radioName: "name-of-principal-radio",
        radioId: "name-of-principal-radio-social-assistance",
        title: "Social Assistance",
        value: "social-assistance",
        description: [
            {
                content: `The social assistance category includes:`,
                list: [
                    "Those providing social assistance services for children and youth",
                    "Those providing services for the elderly and disabled",
                    "Community food, housing, and relief services",
                    "Child day care centers."
                ]
            }
        ]
    },
    {
        radioName: "name-of-principal-radio",
        radioId: "name-of-principal-radio-warehousing",
        title: "Warehousing",
        value: "warehousing",
        description: [
            {
                content: `The warehousing category includes all industries that:`
            },
            {
                content: `Operate warehousing or storage facilities for general merchandise, refrigerated goods, or other warehouse products Provide facilities to store goods, but do not sell the goods they handle.`
            }
        ]
    },
    {
        radioName: "name-of-principal-radio",
        radioId: "name-of-principal-radio-construction",
        title: "Construction",
        value: "construction",
        description: [
            {
                content: `The construction category includes the building of:`,
                list: [
                    `Residential structures (houses, apartments)`,
                    `Industrial structures (factories, mills)`,
                    `Commercial and institutional structures (airports, malls).`,
                    `It also includes additions, alterations, maintenance, and repair of these structures.`
                ],
                marginBottom: 24
            },
            {
                content: `The Construction category also includes specialty trade and remodeling contractors, including those involved in:`,
                list: [
                    `Heavy construction (road, utility lines)`,
                    `Land subdivision`,
                    `Site preparation activity.`
                ]
            }
        ]
    },
    {
        radioName: "name-of-principal-radio",
        radioId: "name-of-principal-radio-food-service",
        title: "Food Service",
        value: "food-service",
        description: [
            {
                content: `The food services category includes all types of food services such as:`,
                list: [
                    `Restaurants`,
                    `Fast-food restaurants`,
                    `Delis`,
                    `Ice cream shops`,
                    `Bars`,
                    `Coffee shops`,
                    `Mobile food services and caterers.`
                ]
            }
        ]
    },
    {
        radioName: "name-of-principal-radio",
        radioId: "name-of-principal-radio-insurance",
        title: "Insurance",
        value: "insurance",
        description: [
            {
                content: `The insurance category includes insurance companies and brokers.`
            }
        ]
    },
    {
        radioName: "name-of-principal-radio",
        radioId: "name-of-principal-radio-real-estate",
        title: "Real Estate",
        value: "real-estate",
        description: [
            {
                content: `The real estate category covers those engaged in the rental and leasing of all types of real estate, such as commercial, residential, and industrial properties.`
            },
            {
                content: `Also included are:`,
                list: [
                    `Real estate agents who rent or sell property for others`,
                    `Property managers`,
                    `Real estate listing and appraisal offices.`
                ]
            }
        ]
    },
    {
        radioName: "name-of-principal-radio",
        radioId: "name-of-principal-radio-retail",
        title: "Retail",
        value: "retail",
        description: [
            {
                content: `The retail category includes any type of business selling items directly to the general public. The sale of these items can be done from a storefront, over the internet, by direct sales (catalogue, mail-order), or door-to-door. Also included are individuals who sell goods on internet auction sites.`
            },
        ]
    },
    {
        radioName: "name-of-principal-radio",
        radioId: "name-of-principal-radio-transportation",
        title: "Transportation",
        value: "transportation",
        description: [
            {
                content: `The transportation category includes all industries that specialize in moving passengers or any type of cargo from one location to another. All modes of transportation are found here, such as air, rail, water, trucking, and passenger transportation. Also included are support activities for transportation (motor vehicle towing services, port and harbor operations); and those that provide courier, messenger, and delivery services.`
            },
        ]
    },
    {
        radioName: "name-of-principal-radio",
        radioId: "name-of-principal-radio-wholesale",
        title: "Wholesale",
        value: "wholesale",
        description: [
            {
                content: `The wholesale category includes those that sell or arrange the purchase or sale of:`,
                list: [
                    `Goods for resale`,
                    `Capital or durable non-consumer goods`,
                    `Raw and intermediate materials and supplies used in production.`,
                    `These businesses are typically known as distributors, jobbers, importers, and exporters.`
                ],
                marginBottom: 24
            },
            {
                content: `Also included are:`,
                list: [
                    `Wholesale agents and brokers that distribute or arrange for the distribution of any type of goods for a commission or fee Manufacturers' sales representatives`,
                    `Business-to-business electronic markets.`
                ]
            }
        ]
    },
    {
        radioName: "name-of-principal-radio",
        radioId: "name-of-principal-radio-other",
        title: "Other",
        value: "other"
    },
]

export default EinForm;
