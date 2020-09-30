import React from "react";
import {color} from "../../atomic/atoms/styles/colors";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import {Heading} from "../../atomic/atoms/typography/heading";

export const top = {
    header: "Start your business with confidence",
    text: "Join over 250,000 + happy business owners",
    form: {
        dropdown: {
            options: [
                {
                    label: "C-Corporation",
                    value: "c-corporation"
                },
                /* Więcej opcji do Entity type podaj tu */
            ],
            placeholder: "Entity Type",
            badge: "1"
        },
        dropdown2: {
            options: [
                {
                    value: "state1",
                    label: "State 1",
                },
            ],
            placeholder: "State of Formation",
            badge: "2"
        }
    },
    logo1: "shopper-approved-5403",
    logo2: "accredited-business-1067"
};

export const variants = {
    state1: {
        "c-corporation": {
            priceOptions: [
                {
                    header: "Silver",
                    variant: "",
                    text: "Our core features for\n" +
                        "the lowest price",
                    price: 100,
                    image: "",
                    button: {
                        text: "Get the Silver package",
                        url: "/"
                    },
                    fees: [
                        {
                            text: "Package fee",
                            price: "0"
                        },
                        {
                            text: "State fee",
                            price: "100"
                        }
                    ],
                    include: "The Silver Services includes:",
                    list: [
                        "Preparing & Filing the Articles \n" +
                        "of Organization",
                        "Unlimited Name Searches",
                        "FREE Registered Agent Service for \n" +
                        "a year!",
                    ],
                    fee: "",
                    savings: ""
                },
                {
                    header: "Silver",
                    variant: "most popular",
                    text: "Our core features for\n" +
                        "the lowest price",
                    price: 100,
                    image: "",
                    button: {
                        text: "Get the Silver package",
                        url: "/"
                    },
                    fees: [
                        {
                            text: "Package fee",
                            price: "0"
                        },
                        {
                            text: "State fee",
                            price: "100"
                        }
                    ],
                    include: "The Silver Services includes:",
                    list: [
                        "Preparing & Filing the Articles \n" +
                        "of Organization",
                        "Unlimited Name Searches",
                        "FREE Registered Agent Service for \n" +
                        "a year!",
                    ],
                    fee: "",
                    savings: "SAVE $468"
                },
                {
                    header: "Silver",
                    variant: "Best value",
                    text: "Our core features for\n" +
                        "the lowest price",
                    price: 100,
                    image: "",
                    button: {
                        text: "Get the Silver package",
                        url: "/"
                    },
                    fees: [
                        {
                            text: "Package fee",
                            price: "0"
                        },
                        {
                            text: "State fee",
                            price: "100"
                        }
                    ],
                    include: "The Silver Services includes:",
                    list: [
                        "Preparing & Filing the Articles \n" +
                        "of Organization",
                        "Unlimited Name Searches",
                        "FREE Registered Agent Service for \n" +
                        "a year!",
                    ],
                    fee: "",
                    savings: "SAVE $908"
                },
            ]
        },
        "s-corporation": {

        },
        nonprofit: {

        },
        llc: {

        },
        requirements: {
            header: "Annual California Filing Requirements",
            text: "Never miss an important filing date again. We'll keep you informed of compulsory state filings by sending email and text notifications.",
            header2: "California Franchise Tax",
            table: {
                headers: false,
                rows: [
                    [
                        {
                            label: "Frequency:",
                            type: "label",
                            style: { "font-weight": "bold" }
                        },
                        {
                            label: "Biennially",
                            type: "label",
                            textCenter: true
                        },
                    ],
                    [
                        {
                            label: "Due Date:",
                            type: "label",
                            style: { "font-weight": "bold" }
                        },
                        {
                            label: "During six-month period ending on last day of anniversary month of incorporation or qualification.",
                            type: "label",
                            textCenter: true
                        },
                    ],
                    [
                        {
                            label: "Filing Fee:",
                            type: "label",
                            style: { "font-weight": "bold" }
                        },
                        {
                            label: "$20",
                            type: "label-boxed",
                            textCenter: true,
                            className: "highlight"
                        },
                    ],
                    [
                        {
                            label: "Important:",
                            type: "label",
                            style: { "font-weight": "bold" }
                        },
                        {
                            label: "The initial Statement of Information filing is due within 90 days of the entity formation date.",
                            type: "label",
                            textCenter: true
                        },
                    ],
                ],
                rowColumnsDef: "1fr 2fr",
                headerColumnsDef: "1fr 2fr"
            },
            tableScheme: "blue3",
            table2: {
                headers: false,
                rows: [
                    [
                        {
                            label: "Frequency:",
                            type: "label",
                            style: { "font-weight": "bold" }
                        },
                        {
                            label: "Annually",
                            type: "label",
                            textCenter: true
                        },
                    ],
                    [
                        {
                            label: "Fee:",
                            type: "label",
                            style: { "font-weight": "bold" }
                        },
                        {
                            content: (
                                <div className="flex">
                                    <Paragraph className="highlight">
                                        $800 (minimum)
                                    </Paragraph>
                                    <Paragraph className="left">
                                        The California Franchise Tax Board requires that all corporations registered in the State of California pay a franchise tax. For new corporations, the minimum franchise tax is $800 per year. However, Franchise Tax  is waived the 1st year for corporations but not LLCs. New corporations that incorporate in California  are exempt from the 1st year minimum tax, however the corporate owners are still responsible for paying the applicable franchise tax on any net income earned during the 1st year. Starting in the second year corporations are subject to the annual $800 minimum franchise tax rule.
                                    </Paragraph>
                                    <Heading size={5}>(We do not assist in the filing of the Franchise Tax Report)</Heading>
                                </div>
                            ),
                            type: "content",
                            textCenter: true
                        },
                    ]
                ],
                rowColumnsDef: "1fr 2fr",
                headerColumnsDef: "1fr 2fr"
            }
        },
        services: {
            header: "All plans include:",
            text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
            benefits: [
                {
                    label: "Setup Business Banking Account"
                },
                {
                    label: "Registered Agent Service for 1 Full Year",
                },
                {
                    label: "Online Order Status Tracking",
                },
                {
                    label: "Next Business Day Processing",
                    header: "Next Business Day Processing",
                    text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day.\n\nWhy You Need It: State filing times can already feel long sometimes, we don’t want to contribute to the wait.",
                },
                {
                    label: "Certified Copy - Articles of Organization",
                },
                {
                    label: "Statement and Resignation of the Organizer",
                },
                {
                    label: "Online Access to Incorporation Documents",
                },
                {
                    label: "Setup Business Banking Account",
                },
            ],
            items: [
                {
                    header: "LLC Premium Services",
                    tableScheme: "green3",
                    table: {
                        headers: [
                            {
                                label: "Entity Type",
                                type: "label",
                                header: true
                            },
                            {
                                label: "Silver",
                                textCenter: true,
                                type: "label",
                                header: true
                            },
                            {
                                label: "Gold",
                                textCenter: true,
                                type: "label",
                                header: true
                            },
                            {
                                label: "Platinum",
                                textCenter: true,
                                type: "label",
                                header: true
                            }
                        ],
                        rows: [
                            [
                                /// Available types (expected values):
                                /// icon-cell (icon, label, variant: Boolean)
                                /// checkbox (value, label, productName)
                                /// checkmark
                                /// label-boxed (label)
                                /// label (label)
                                /// minus
                                /// list
                                {
                                    icon: "employer-identification-number-0349",
                                    label: "Employer Identification Number/ Tax ID",
                                    type: "icon"
                                },
                                {
                                    label: "Employer Identification Number/ Tax ID",
                                    variant: {
                                        label: "Highly Recommended",
                                        style: {
                                            color: color.orange1
                                        }
                                    },
                                    type: "label",
                                },
                                {
                                    label: "+$70",
                                    type: "checkbox",
                                    value: 70,
                                    textCenter: true,
                                },
                                {
                                    label: "Free",
                                    type: "label-boxed",
                                    className: "highlight"
                                },
                                {
                                    label: "Free",
                                    type: "label-boxed",
                                    className: "highlight"
                                }
                            ]
                        ],
                        headerColumnsDef: "5fr 150px 150px 150px",
                        rowColumnsDef: "100px 5fr 150px 150px 150px",
                    }
                },
                {
                    header: "Business Formation Kit",
                    tableScheme: "green3",
                    table: {
                        rows: [
                            [
                                /// Available types (expected values):
                                /// icon (icon, label)
                                /// checkbox (value, label, productName)
                                /// checkmark
                                /// label-boxed (label)
                                /// label (label)
                                /// minus
                                /// list
                                {
                                    icon: "gold-kit-4495",
                                    label: "Gold Kit",
                                    type: "icon"
                                },
                                {
                                    label: "Gold Kit",
                                    variant: {
                                        label: "View Kit Image",
                                        style: {
                                            color: color.blue1
                                        }
                                    }
                                    ,
                                    type: "label"
                                },
                                {
                                    label: "+$50",
                                    type: "checkbox",
                                    value: 50,
                                    textCenter: true,
                                },
                                {
                                    type: "checkmark",
                                },
                                {
                                    type: "minus",
                                }
                            ],
                            [
                                /// Available types (expected values):
                                /// icon (icon, label)
                                /// checkbox (value, label, productName)
                                /// checkmark
                                /// label-boxed (label)
                                /// label (label)
                                /// minus
                                /// list
                                {
                                    icon: "platinum-kit-8640",
                                    label: "Platinum Kit",
                                    type: "icon"
                                },
                                {
                                    label: "Platinum Kit",
                                    variant: {
                                        label: "View Kit Image",
                                        style: {
                                            color: color.blue1
                                        }
                                    }
                                    ,
                                    type: "label"
                                },
                                {
                                    type: "minus",
                                },
                                {
                                    type: "minus",
                                },
                                {
                                    type: "checkmark",
                                }
                            ]
                        ],
                        rowColumnsDef: "100px 5fr 150px 150px 150px",
                        style: {
                            width: "100%"
                        }
                    }
                },
                {
                    header: "Expedited Options",
                    tableScheme: "green3",
                    table: {
                        rows: [
                            [
                                /// Available types (expected values):
                                /// icon (icon, label)
                                /// checkbox (value, label, productName)
                                /// checkmark
                                /// label-boxed (label)
                                /// label (label)
                                /// minus
                                /// list
                                {
                                    icon: "expedited-california-filling-time-8551",
                                    label: "Gold Kit",
                                    type: "icon"
                                },
                                {
                                    label: "Expedited California State Filing Time",
                                    variant: {
                                        icon: "expedited-rocket-4402",
                                        label: "5 business Days",
                                        style: {
                                            color: color.orange1,
                                            "font-weight": "bold"
                                        }
                                    }
                                    ,
                                    type: "label"
                                },
                                {
                                    label: "+$50",
                                    type: "checkbox",
                                    value: 50,
                                    textCenter: true,
                                },
                                {
                                    label: "+$50",
                                    type: "checkbox",
                                    value: 50,
                                    textCenter: true,
                                },
                                {
                                    type: "checkmark",
                                }
                            ],
                        ],
                        rowColumnsDef: "100px 5fr 150px 150px 150px",
                        style: {
                            width: "100%"
                        }
                    }
                }
                /* Więcej tabel to all options include podaj tu */
            ]
        }
    }
};

export const trusted = {
    header: "Trusted by over 250,000+ business owners since 2004.",
    text: "We have dedicated much time and effort to being fully transparent by providing you exact final pricing before getting started. We also inform you of any necessary annual \n" +
        "filings and fees required by the state.",
    cards: [
        {
            image: "entrepreneur-360-6691",
            header: "Enterpreneur 360 (2019)",
            text: "Best Entrepreneurial Companies\n" +
                "in America 2019",
            title: "Enterpreneur 360 (2019)",
            background: color.white,
            link: {
                url: "/",
            }
        },
        {
            image: "stevie-winner-2019-gold-9586",
            header: "LLC State Information",
            text: "Best Business Formation Company \n" +
                "in 2019",
            title: "Gold 2019 Stevie Winner",
            background: color.white,
            link: {
                url: "/",
            }
        },
        {
            image: "stevie-winner-2019-bronze-0391",
            header: "LLC State Information",
            text: "Best Entrepreneurial Companies\n" +
                "in America 2016",
            title: "Bronze 2019 Stevie Winner",
            background: color.white,
            link: {
                url: "/",
            }
        }
    ],
    faq: {
        header: "Frequently Asked Questions",
        faq: {
            items: [
                {
                    question: "Does the price quoted include the state filing fee?",
                    answer: "Yes, the price you see at the bottom of the page includes the state prescribed fee that is required to file the Articles of Incorporation / Organization.",
                },
                {
                    question: "Should I reserve my company name before placing an order?",
                    answer: "",
                },
                {
                    question: "Will I have the option to act as my own Registered Agent?",
                    answer: "",
                },
                {
                    question: "Will I need to sign anything?",
                    answer: "",
                },
            ],
        }
    }
};