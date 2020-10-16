import React from "react";
import {color} from "../../atomic/atoms/styles/colors";

export const top = {
    header: "The Fastest & Easiest Way\n" +
        " To Start Your Business",
    text: (
        <span>
            Join Over <strong>250,000</strong> Businesses Launched With incfile Since <strong>2004</strong>
        </span>
    ),
    button: [
        {
            url: `${process.env.ORDER_URL}/form-order-now.php`,
            text: "Start my business"
        }
    ]
};

export const business_formation = {
    header: "Business Formation For As Little As $0 + State Fee.",
    text: "No Contracts. No Hidden Fees.",
    button: [
        {
            text: "Launch my business",
            url: `${process.env.ORDER_URL}/form-order-now.php`
        }
    ],
    choose: {
        header: "Why Choose incfile for Company Formation?",
        text: "LLC Filing & More Made Easy",
        text2: "We're entrepreneurs - just like you.",
        text3: "We make incorporating a company as easy as possible, so you can focus on the important things. Beyond free LLC filing, we have a full suite of startup services (like banking and bookkeeping), which means Incfile not only helps you get started, but supports you in your continued success as your one-stop shop.",
        text4: "Whether you’re starting an LLC, S Corp, C Corp or other business entity, our mission is to provide you with a superior and modern experience at an unparalleled value.",
        included: {
            header: "Included in All Incorporation Packages",
            benefits: [
                {
                    label: "Lorem ipsum",
                },
                {
                    label: "Preparation & Filing of Articles",
                    header: "Preparation & Filing of Articles",
                    text: "We will review the information, prepare your incorporation documents, and send them to the state of formation."
                },
                {
                    label: "Next Business Day Processing",
                },
                {
                    label: (<span><span>Registered Agent Service&nbsp;</span><span style={{color: color.orange1}}>(1st Year FREE)</span></span>),
                },
                {
                    label: "Lifetime Company Alerts",
                },
                {
                    label: "Online Order Status Tracking",
                },
                {
                    label: "Free Business Tax Consultation",
                },
                {
                    label: "Lifetime Customer Support",
                },
                {
                    label: "Online Access to Incorporation Documents",
                },
            ],
            button: {
                text: "Start my business",
                url: `${process.env.ORDER_URL}/form-order-now.php`
            }
        },
    }
};

export const setup = {
    header: "Set up your business easily",
    text: "Watch this short video to see",
    customers: {
        header: "Why Do Our Customers Love Us?",
        text: "4.8 Overall Satisfaction Rating based on 13,797 reviews",
        opinions: {
            items: [
                {
                    image: "",
                    header: "Martin G",
                    subheader: "Los Angeles, CA",
                    text: "This is my third time working with Incfile. Great service. Professional and prompt. Will continue to do business with them.",
                },
                {
                    image: "",
                    header: "Martin G",
                    subheader: "Los Angeles, CA",
                    text: "This is my third time working with Incfile. Great service. Professional and prompt. Will continue to do business with them.",
                },
                {
                    image: "",
                    header: "Martin G",
                    subheader: "Los Angeles, CA",
                    text: "This is my third time working with Incfile. Great service. Professional and prompt. Will continue to do business with them.",
                }
            ]
        }
    }
};


export const rocket = {
    header: "Start Your LLC, S Corp,",
    header2: "or C Corp Today",
    text: "There's A Reason More Than 250,000",
    text2: "Businesses Have Started With incfile",
    button: {
        text: "Launch your business",
        url: `${process.env.ORDER_URL}/form-order-now.php`
    }
};