import React from "react";
import { color } from "../../atomic/atoms/styles/colors";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import { Heading } from "../../atomic/atoms/typography/heading";

export const top = {
  header: "Start your business with confidence",
  text: "Join over 500,000 + happy business owners",
  form: {
    dropdown: {
      options: [
        {
          label: "C-Corporation",
          value: "c-corporation",
        },
        {
          label: "LLC",
          value: "llc",
        },
        {
          label: "S-Corporation",
          value: "s-corporation",
        },
        {
          label: "Nonprofit",
          value: "nonprofit",
        },
      ],
      placeholder: "Entity Type",
      badge: "1",
    },
    dropdown2: {
      options: [
        {
          value: "AL",
          label: "Alabama",
        },
        { value: "AK", label: "Alaska" },
        { value: "AZ", label: "Arizona" },
        { value: "AR", label: "Arkansas" },
        { value: "CA", label: "California" },
        { value: "CO", label: "Colorado" },
        { value: "CT", label: "Connecticut" },
        { value: "DE", label: "Delaware" },
        { value: "FL", label: "Florida" },
        { value: "GA", label: "Georgia" },
        { value: "HI", label: "Hawaii" },
        { value: "ID", label: "Idaho" },
        { value: "IL", label: "Illinois" },
        { value: "IN", label: "Indiana" },
        { value: "IA", label: "Iowa" },
        { value: "KS", label: "Kansas" },
        { value: "KY", label: "Kentucky" },
        { value: "LA", label: "Louisiana" },
        { value: "ME", label: "Maine" },
        { value: "MD", label: "Maryland" },
        { value: "MA", label: "Massachusetts" },
        { value: "MI", label: "Michigan" },
        { value: "MN", label: "Minnesota" },
        { value: "MS", label: "Mississippi" },
        { value: "MO", label: "Missouri" },
        { value: "MT", label: "Montana" },
        { value: "NE", label: "Nebraska" },
        { value: "NV", label: "Nevada" },
        { value: "NH", label: "New Hampshire" },
        { value: "NJ", label: "New Jersey" },
        { value: "NM", label: "New Mexico" },
        { value: "NY", label: "New York" },
        { value: "NC", label: "North Carolina" },
        { value: "ND", label: "North Dakota" },
        { value: "OH", label: "Ohio" },
        { value: "OK", label: "Oklahoma" },
        { value: "OR", label: "Oregon" },
        { value: "PA", label: "Pennsylvania" },
        { value: "RI", label: "Rhode Island" },
        { value: "SC", label: "South Carolina" },
        { value: "SD", label: "South Dakota" },
        { value: "TN", label: "Tennessee" },
        { value: "TX", label: "Texas" },
        { value: "UT", label: "Utah" },
        { value: "VT", label: "Vermont" },
        { value: "VA", label: "Virginia" },
        { value: "WA", label: "Washington" },
        { value: "DC", label: "Washington DC" },
        { value: "WV", label: "West Virginia" },
        { value: "WI", label: "Wisconsin" },
        { value: "WY", label: "Wyoming" },
      ],
      placeholder: "State of Formation",
      badge: "2",
    },
  },
  logo1: "shopper-approved-5403",
  logo2: "accredited-business-1067",
};

export const variants = {
  AL: {
    "c-corporation": {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 202,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=AL`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "202",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 351,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=AL`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "202",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 501,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=AL`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "202",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "Frequency:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Annually",
                type: "label",
                textCenter: true,
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Annual Year: April 15th Fiscal Year: 3½ months after beginning of tax year",
                type: "label",
                textCenter: true,
              },
            ],
            [
              {
                label: "Note:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Schedule AL-CAR filed with Business Privilege Tax Return is accepted in lieu of a separate Annual Report. C Corps must file Form CPT. S Corps must file Form PPT.",
                type: "label",
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "Corporation Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Incorporator",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Incorporator is a document signed by the Incorporator which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Incorporator’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Incorporation.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "Corporation Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    label: "Corporation Bylaws",
                    type: "icon",
                  },
                  {
                    label: "Corporation Bylaws",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The bylaws of a corporation are an internal document that details the operating rules for the corporation. The bylaws of a corporation are typically adopted at the organizational meeting of the board of directors after the corporation has been filed with the state. The bylaws we will provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                        },
                        {
                          text: "Your bylaws will act as “internal rules,” ensuring that everything runs smoothly and keeps all employees, executives and shareholders in agreement and on the same page. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$30",
                    type: "checkbox",
                    value: 30,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    label: "Corporation Organizational Meeting Minutes",
                    type: "icon",
                  },
                  {
                    label: "Corporation Organizational Meeting Minutes",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            'After the corporation has been filed with the state, the directors of the corporation are required to have a "first," or organizational meeting to take care of things such as issuing shares of stock, adopting bylaws, appointing officers, etc., and keeping minutes of directors meetings and corporate resolutions is a required part of your internal corporate compliance. The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ',
                        },
                        {
                          text: "The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Alabama State Filing Time",
                    variant: {
                      label: "4 WEEKS",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Alabama State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "4 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
    "s-corporation": {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 163,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=AL`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "163",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 312,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=AL`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "163",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 462,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=AL`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "163",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "Frequency:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Annually",
                type: "label",
                textCenter: true,
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Annual Year: April 15th Fiscal Year: 3½ months after beginning of tax year",
                type: "label",
                textCenter: true,
              },
            ],
            [
              {
                label: "Note:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Schedule AL-CAR filed with Business Privilege Tax Return is accepted in lieu of a separate Annual Report. C Corps must file Form CPT. S Corps must file Form PPT.",
                type: "label",
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "Corporation Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Incorporator",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Incorporator is a document signed by the Incorporator which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Incorporator’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Incorporation.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "Corporation Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    label: "Corporation Bylaws",
                    type: "icon",
                  },
                  {
                    label: "Corporation Bylaws",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The bylaws of a corporation are an internal document that details the operating rules for the corporation. The bylaws of a corporation are typically adopted at the organizational meeting of the board of directors after the corporation has been filed with the state. The bylaws we will provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                        },
                        {
                          text: "Your bylaws will act as “internal rules,” ensuring that everything runs smoothly and keeps all employees, executives and shareholders in agreement and on the same page. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$30",
                    type: "checkbox",
                    value: 30,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    label: "Corporation Organizational Meeting Minutes",
                    type: "icon",
                  },
                  {
                    label: "Corporation Organizational Meeting Minutes",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            'After the corporation has been filed with the state, the directors of the corporation are required to have a "first," or organizational meeting to take care of things such as issuing shares of stock, adopting bylaws, appointing officers, etc., and keeping minutes of directors meetings and corporate resolutions is a required part of your internal corporate compliance. The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ',
                        },
                        {
                          text: "The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Alabama State Filing Time",
                    variant: {
                      label: "4 WEEKS",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Alabama State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "4 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
    nonprofit: {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 175,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&entityState=AL`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "175",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 324,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&entityState=AL`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "175",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 474,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&entityState=AL`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "175",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "Nonprofit Corporations are not subject to annual report filings. ",
                type: "label",
                textCenter: true,
              },
            ],
          ],
          rowColumnsDef: "100%",
          headerColumnsDef: "100%",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "Corporation Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Incorporator",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Incorporator is a document signed by the Incorporator which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Incorporator’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Incorporation.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "Corporation Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    label: "Corporate Forms / Bylaws Minutes",
                    type: "icon",
                  },
                  {
                    label: "Corporate Forms / Bylaws Minutes",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Corporate Forms / Bylaws Minutes\n" + "The Corporate Forms includes, customizable templates of documents needed for compliance, record-keeping and meeting business formalities, such as operating agreements, organizational minutes and bylaws. ",
                        },
                        {
                          header: "Corporate Forms:",
                          items: ["Bylaws", "Consent by Incorporator", "Resignation of Incorporator", "Waiver of Notice", "Minutes of an Organizational Meeting", "Consent in Lieu of Organizational Meeting", "Investment Representation Letter"],
                        },
                      ],
                    },
                  },
                  {
                    label: "+$30",
                    type: "checkbox",
                    value: 30,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Alabama State Filing Time",
                    variant: {
                      label: "4 WEEKS",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Alabama State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "4 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
    llc: {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 212,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AL`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "212",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 361,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AL`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "212",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 511,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AL`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "212",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "Frequency:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Annually",
                type: "label",
                textCenter: true,
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Annual Year: April 15th Fiscal Year: 3½ months after beginning of tax year",
                type: "label",
                textCenter: true,
              },
            ],
            [
              {
                label: "Note:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "LLCs elected to be taxed as corporations follow corporation rules.",
                type: "label",
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "LLC Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Organizer",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Organizer is a document signed by the Organizer which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Organizer’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Organization.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "LLC Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Preparation and Filing of IRS Form 2553",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Many LLCs elect to be treated as an S-Corporation for tax purposes, as such all Gold and Platinum LLC orders include the preparation and filing of the IRS Form 2553.\n" +
                            "If you decide that this is the right tax classification for your LLC you can initiate the preparation and filing of the IRS Form 2553 directly from the services tab of your client dashboard.\n" +
                            "The form will be generated upon request at which time a request will be for the digital signature from the members. Upon receipt of the signature(s) the form will be submitted directly to the IRS.",
                        },
                        {
                          text: "Please note the Form 2553 is time sensitive and must be filed with the IRS within 75 days of your corporation filing date in order to obtain S-corporation tax status for the current year. ",
                          header: "IMPORTANT",
                        },
                        {
                          text: "Electing to be taxed as an S-Corp can save you thousands of dollars a year. It’s best to consult with a tax specialist to see if this is the right business move for you (we offer a free 30-minute tax consultation with every order). ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Operating Agreement",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The operating agreement for a limited liability company is a private agreement between the members/owners of the LLC, and it details the ownership, rights, and responsibilities of the LLC members. The operating agreement we provide for your use covers all of the most commonly used provisions and will be customized based on your specific company information provided during the placing of your order. ",
                        },
                        {
                          text: "Perhaps the most important document for an LLC, this is where you will “put in stone” your LLC’s rules and structure that will create a framework for your entire business. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$40",
                    type: "checkbox",
                    value: 40,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Alabama State Filing Time",
                    variant: {
                      label: "4 WEEKS",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Alabama State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "4 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
  },
  AK: {
    "c-corporation": {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 250,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=AK`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "250",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 399,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=AK`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "250",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 549,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=AK`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "250",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Initial Report",
        header2: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Domestic (Alaskan) Entities are required to file within 6 months of creation. Failure to file will cause non-compliance and may lead to administrative dissolution.",
                type: "label",
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Within 6 months of the date of formation. ",
                type: "label",
              },
            ],
            [
              {
                label: "Filing Fee:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "$0",
                type: "label-boxed",
                className: "highlight",
                textCenter: true,
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        table2: {
          headers: false,
          rows: [
            [
              {
                label: "Frequency:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Biennially",
                type: "label",
                textCenter: true,
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                type: "label",
                label: "By January 2nd of the filing year.",
              },
            ],
            [
              {
                label: "Filling Fee:",
                style: {
                  "font-weight": "bold",
                },
                type: "label",
              },
              {
                type: "label-boxed",
                label: "$100",
                className: "highlight",
                textCenter: true,
              },
            ],
            [
              {
                label: "Note:",
                style: {
                  "font-weight": "bold",
                },
                type: "label",
              },
              {
                type: "label",
                label: "Entity organized or qualified in even-numbered years must file in even-numbered years; those in odd-numbered years file in odd-numbered years.",
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "Corporation Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Incorporator",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Incorporator is a document signed by the Incorporator which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Incorporator’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Incorporation.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "Corporation Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    label: "Corporation Bylaws",
                    type: "icon",
                  },
                  {
                    label: "Corporation Bylaws",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The bylaws of a corporation are an internal document that details the operating rules for the corporation. The bylaws of a corporation are typically adopted at the organizational meeting of the board of directors after the corporation has been filed with the state. The bylaws we will provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                        },
                        {
                          text: "Your bylaws will act as “internal rules,” ensuring that everything runs smoothly and keeps all employees, executives and shareholders in agreement and on the same page. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$30",
                    type: "checkbox",
                    value: 30,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    label: "Corporation Organizational Meeting Minutes",
                    type: "icon",
                  },
                  {
                    label: "Corporation Organizational Meeting Minutes",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            'After the corporation has been filed with the state, the directors of the corporation are required to have a "first," or organizational meeting to take care of things such as issuing shares of stock, adopting bylaws, appointing officers, etc., and keeping minutes of directors meetings and corporate resolutions is a required part of your internal corporate compliance. The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ',
                        },
                        {
                          text: "The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Alaska State Filing Time",
                    variant: {
                      label: "5 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Alaska State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "1 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
    "s-corporation": {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 163,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=AK`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "163",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 312,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=AK`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "163",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 462,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=AK`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "163",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Initial Report",
        header2: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Domestic (Alaskan) Entities are required to file within 6 months of creation. Failure to file will cause non-compliance and may lead to administrative dissolution.",
                type: "label",
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Within 6 months of the date of formation. ",
                type: "label",
              },
            ],
            [
              {
                label: "Filing Fee:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "$0",
                type: "label-boxed",
                className: "highlight",
                textCenter: true,
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        table2: {
          headers: false,
          rows: [
            [
              {
                label: "Frequency:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Biennially",
                type: "label",
                textCenter: true,
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                type: "label",
                label: "By January 2nd of the filing year.",
              },
            ],
            [
              {
                label: "Filling Fee:",
                style: {
                  "font-weight": "bold",
                },
                type: "label",
              },
              {
                type: "label-boxed",
                label: "$100",
                className: "highlight",
                textCenter: true,
              },
            ],
            [
              {
                label: "Note:",
                style: {
                  "font-weight": "bold",
                },
                type: "label",
              },
              {
                type: "label",
                label: "Entity organized or qualified in even-numbered years must file in even-numbered years; those in odd-numbered years file in odd-numbered years.",
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "Corporation Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Incorporator",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Incorporator is a document signed by the Incorporator which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Incorporator’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Incorporation.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "Corporation Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    label: "Corporation Bylaws",
                    type: "icon",
                  },
                  {
                    label: "Corporation Bylaws",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The bylaws of a corporation are an internal document that details the operating rules for the corporation. The bylaws of a corporation are typically adopted at the organizational meeting of the board of directors after the corporation has been filed with the state. The bylaws we will provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                        },
                        {
                          text: "Your bylaws will act as “internal rules,” ensuring that everything runs smoothly and keeps all employees, executives and shareholders in agreement and on the same page. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$30",
                    type: "checkbox",
                    value: 30,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    label: "Corporation Organizational Meeting Minutes",
                    type: "icon",
                  },
                  {
                    label: "Corporation Organizational Meeting Minutes",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            'After the corporation has been filed with the state, the directors of the corporation are required to have a "first," or organizational meeting to take care of things such as issuing shares of stock, adopting bylaws, appointing officers, etc., and keeping minutes of directors meetings and corporate resolutions is a required part of your internal corporate compliance. The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ',
                        },
                        {
                          text: "The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Alaska State Filing Time",
                    variant: {
                      label: "5 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Alaska State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "1 Business Day",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
    nonprofit: {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 175,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&entityState=AK`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "175",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 324,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&entityState=AK`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "175",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 474,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&entityState=AK`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "175",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Initial Report",
        header2: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Domestic (Alaskan) Entities are required to file within 6 months of creation. Failure to file will cause non-compliance and may lead to administrative dissolution.",
                type: "label",
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Within 6 months of the date of formation. ",
                type: "label",
              },
            ],
            [
              {
                label: "Filing Fee:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "$0",
                type: "label-boxed",
                className: "highlight",
                textCenter: true,
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        table2: {
          headers: false,
          rows: [
            [
              {
                label: "Frequency:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Biennially",
                type: "label",
                textCenter: true,
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                type: "label",
                label: "By January 2nd of the filing year.",
              },
            ],
            [
              {
                label: "Filling Fee:",
                style: {
                  "font-weight": "bold",
                },
                type: "label",
              },
              {
                type: "label-boxed",
                label: "$100",
                className: "highlight",
                textCenter: true,
              },
            ],
            [
              {
                label: "Note:",
                style: {
                  "font-weight": "bold",
                },
                type: "label",
              },
              {
                type: "label",
                label: "Entity organized or qualified in even-numbered years must file in even-numbered years; those in odd-numbered years file in odd-numbered years.",
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "Corporation Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Incorporator",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Incorporator is a document signed by the Incorporator which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Incorporator’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Incorporation.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "Corporation Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    label: "Corporate Forms / Bylaws Minutes",
                    type: "icon",
                  },
                  {
                    label: "Corporate Forms / Bylaws Minutes",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Corporate Forms / Bylaws Minutes\n" + "The Corporate Forms includes, customizable templates of documents needed for compliance, record-keeping and meeting business formalities, such as operating agreements, organizational minutes and bylaws. ",
                        },
                        {
                          header: "Corporate Forms:",
                          items: ["Bylaws", "Consent by Incorporator", "Resignation of Incorporator", "Waiver of Notice", "Minutes of an Organizational Meeting", "Consent in Lieu of Organizational Meeting", "Investment Representation Letter"],
                        },
                      ],
                    },
                  },
                  {
                    label: "+$30",
                    type: "checkbox",
                    value: 30,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Alaska State Filing Time",
                    variant: {
                      label: "5 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Alaska State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "1 Business Day",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
    llc: {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 212,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AK`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "212",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 361,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AK`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "212",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 511,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AK`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "212",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Initial Report",
        header2: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Domestic (Alaskan) Entities are required to file within 6 months of creation. Failure to file will cause non-compliance and may lead to administrative dissolution.",
                type: "label",
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Within 6 months of the date of formation. ",
                type: "label",
              },
            ],
            [
              {
                label: "Filing Fee:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "$0",
                type: "label-boxed",
                className: "highlight",
                textCenter: true,
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        table2: {
          headers: false,
          rows: [
            [
              {
                label: "Frequency:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Biennially",
                type: "label",
                textCenter: true,
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                type: "label",
                label: "By January 2nd of the filing year.",
              },
            ],
            [
              {
                label: "Filling Fee:",
                style: {
                  "font-weight": "bold",
                },
                type: "label",
              },
              {
                type: "label-boxed",
                label: "$100",
                className: "highlight",
                textCenter: true,
              },
            ],
            [
              {
                label: "Note:",
                style: {
                  "font-weight": "bold",
                },
                type: "label",
              },
              {
                type: "label",
                label: "Entity organized or qualified in even-numbered years must file in even-numbered years; those in odd-numbered years file in odd-numbered years.",
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "LLC Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Organizer",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Organizer is a document signed by the Organizer which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Organizer’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Organization.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "LLC Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Preparation and Filing of IRS Form 2553",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Many LLCs elect to be treated as an S-Corporation for tax purposes, as such all Gold and Platinum LLC orders include the preparation and filing of the IRS Form 2553.\n" +
                            "If you decide that this is the right tax classification for your LLC you can initiate the preparation and filing of the IRS Form 2553 directly from the services tab of your client dashboard.\n" +
                            "The form will be generated upon request at which time a request will be for the digital signature from the members. Upon receipt of the signature(s) the form will be submitted directly to the IRS.",
                        },
                        {
                          text: "Please note the Form 2553 is time sensitive and must be filed with the IRS within 75 days of your corporation filing date in order to obtain S-corporation tax status for the current year. ",
                          header: "IMPORTANT",
                        },
                        {
                          text: "Electing to be taxed as an S-Corp can save you thousands of dollars a year. It’s best to consult with a tax specialist to see if this is the right business move for you (we offer a free 30-minute tax consultation with every order). ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Operating Agreement",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The operating agreement for a limited liability company is a private agreement between the members/owners of the LLC, and it details the ownership, rights, and responsibilities of the LLC members. The operating agreement we provide for your use covers all of the most commonly used provisions and will be customized based on your specific company information provided during the placing of your order. ",
                        },
                        {
                          text: "Perhaps the most important document for an LLC, this is where you will “put in stone” your LLC’s rules and structure that will create a framework for your entire business. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$40",
                    type: "checkbox",
                    value: 40,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Alaska State Filing Time",
                    variant: {
                      label: "5 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Alaska State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "1 Business Day",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
  },
  AZ: {
    "c-corporation": {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 95,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=AZ`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "95",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 244,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=AZ`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "95",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 394,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=AZ`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "95",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "Frequency:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Annually",
                type: "label",
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Corporations are required to file an Annual Report with the Arizona Corporation Commision. The Annual Report is due by the anniversary date of the filing.",
                type: "label",
              },
            ],
            [
              {
                label: "Filing Fee:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "$45",
                type: "label-boxed",
                className: "highlight",
                textCenter: true,
              },
            ],
            [
              {
                label: "Important: ",
                type: "label",
                style: { "font-weight": "bold", color: color.orange1 },
              },
              {
                label:
                  "Arizona requires that you publish the Articles of Incorpration in their entirety. The publication must be in a newspaper in general circulation in the county of the known place of business in Arizona for 3 consecutive publications. The publication must be filed within 60 days of the date of incorporation. The corporation may be subject to administrative dissolution if it fails to publish.",
                type: "label",
              },
            ],
            [
              {
                label: "Where do I publish the document?",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label:
                  "The A.C.C. does not endorse any particular newspaper, but, as a courtesy they provide a list of newspapers that have attested to the A.C.C. that they meet the statutory criteria for publishing documents. Upon publishing you will receive an Affidavit of Publication. It is not required, but you may send the Affidavit of Publication you receive from the newspaper to the A.C.C. for placement into the entity’s public record. If you do not submit the Affidavit of Publication to the A.C.C. you should retain it as part of your entity's permanent record.",
                type: "label",
              },
            ],
            [
              {
                label: "",
                type: "label",
              },
              {
                label: "(We do not assist in the filing of the Publication Requirement)",
                type: "label",
                style: { "font-weight": "bold" },
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "Corporation Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Incorporator",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Incorporator is a document signed by the Incorporator which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Incorporator’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Incorporation.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "Corporation Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    label: "Corporation Bylaws",
                    type: "icon",
                  },
                  {
                    label: "Corporation Bylaws",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The bylaws of a corporation are an internal document that details the operating rules for the corporation. The bylaws of a corporation are typically adopted at the organizational meeting of the board of directors after the corporation has been filed with the state. The bylaws we will provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                        },
                        {
                          text: "Your bylaws will act as “internal rules,” ensuring that everything runs smoothly and keeps all employees, executives and shareholders in agreement and on the same page. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$30",
                    type: "checkbox",
                    value: 30,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    label: "Corporation Organizational Meeting Minutes",
                    type: "icon",
                  },
                  {
                    label: "Corporation Organizational Meeting Minutes",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            'After the corporation has been filed with the state, the directors of the corporation are required to have a "first," or organizational meeting to take care of things such as issuing shares of stock, adopting bylaws, appointing officers, etc., and keeping minutes of directors meetings and corporate resolutions is a required part of your internal corporate compliance. The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ',
                        },
                        {
                          text: "The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Arizona State Filing Time",
                    variant: {
                      label: "4 WEEKS",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Arizona State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "12 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
    "s-corporation": {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 95,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=AZ`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "95",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 244,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=AZ`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "95",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 394,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=AZ`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "95",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "Frequency:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Annually",
                type: "label",
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Corporations are required to file an Annual Report with the Arizona Corporation Commision. The Annual Report is due by the anniversary date of the filing.",
                type: "label",
              },
            ],
            [
              {
                label: "Filing Fee:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "$45",
                type: "label-boxed",
                className: "highlight",
                textCenter: true,
              },
            ],
            [
              {
                label: "Important: ",
                type: "label",
                style: { "font-weight": "bold", color: color.orange1 },
              },
              {
                label:
                  "Arizona requires that you publish the Articles of Incorpration in their entirety. The publication must be in a newspaper in general circulation in the county of the known place of business in Arizona for 3 consecutive publications. The publication must be filed within 60 days of the date of incorporation. The corporation may be subject to administrative dissolution if it fails to publish.",
                type: "label",
              },
            ],
            [
              {
                label: "Where do I publish the document?",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label:
                  "The A.C.C. does not endorse any particular newspaper, but, as a courtesy they provide a list of newspapers that have attested to the A.C.C. that they meet the statutory criteria for publishing documents. Upon publishing you will receive an Affidavit of Publication. It is not required, but you may send the Affidavit of Publication you receive from the newspaper to the A.C.C. for placement into the entity’s public record. If you do not submit the Affidavit of Publication to the A.C.C. you should retain it as part of your entity's permanent record.",
                type: "label",
              },
            ],
            [
              {
                label: "",
                type: "label",
              },
              {
                label: "(We do not assist in the filing of the Publication Requirement)",
                type: "label",
                style: { "font-weight": "bold" },
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "Corporation Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Incorporator",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Incorporator is a document signed by the Incorporator which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Incorporator’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Incorporation.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "Corporation Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    label: "Corporation Bylaws",
                    type: "icon",
                  },
                  {
                    label: "Corporation Bylaws",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The bylaws of a corporation are an internal document that details the operating rules for the corporation. The bylaws of a corporation are typically adopted at the organizational meeting of the board of directors after the corporation has been filed with the state. The bylaws we will provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                        },
                        {
                          text: "Your bylaws will act as “internal rules,” ensuring that everything runs smoothly and keeps all employees, executives and shareholders in agreement and on the same page. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$30",
                    type: "checkbox",
                    value: 30,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    label: "Corporation Organizational Meeting Minutes",
                    type: "icon",
                  },
                  {
                    label: "Corporation Organizational Meeting Minutes",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            'After the corporation has been filed with the state, the directors of the corporation are required to have a "first," or organizational meeting to take care of things such as issuing shares of stock, adopting bylaws, appointing officers, etc., and keeping minutes of directors meetings and corporate resolutions is a required part of your internal corporate compliance. The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ',
                        },
                        {
                          text: "The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Arizona State Filing Time",
                    variant: {
                      label: "4 WEEKS",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Arizona State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "12 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
    nonprofit: {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 75,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&entityState=AZ`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "75",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 224,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&entityState=AZ`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "75",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 374,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&entityState=AZ`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "75",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "Frequency:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Annually",
                type: "label",
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Corporations are required to file an Annual Report with the Arizona Corporation Commision. The Annual Report is due by the anniversary date of the filing.",
                type: "label",
              },
            ],
            [
              {
                label: "Filing Fee:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "$45",
                type: "label-boxed",
                className: "highlight",
                textCenter: true,
              },
            ],
            [
              {
                label: "Important: ",
                type: "label",
                style: { "font-weight": "bold", color: color.orange1 },
              },
              {
                label:
                  "Arizona requires that you publish the Articles of Incorpration in their entirety. The publication must be in a newspaper in general circulation in the county of the known place of business in Arizona for 3 consecutive publications. The publication must be filed within 60 days of the date of incorporation. The corporation may be subject to administrative dissolution if it fails to publish.",
                type: "label",
              },
            ],
            [
              {
                label: "Where do I publish the document?",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label:
                  "The A.C.C. does not endorse any particular newspaper, but, as a courtesy they provide a list of newspapers that have attested to the A.C.C. that they meet the statutory criteria for publishing documents. Upon publishing you will receive an Affidavit of Publication. It is not required, but you may send the Affidavit of Publication you receive from the newspaper to the A.C.C. for placement into the entity’s public record. If you do not submit the Affidavit of Publication to the A.C.C. you should retain it as part of your entity's permanent record.",
                type: "label",
              },
            ],
            [
              {
                label: "",
                type: "label",
              },
              {
                label: "(We do not assist in the filing of the Publication Requirement)",
                type: "label",
                style: { "font-weight": "bold" },
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "Corporation Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Incorporator",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Incorporator is a document signed by the Incorporator which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Incorporator’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Incorporation.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "Corporation Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    label: "Corporate Forms / Bylaws Minutes",
                    type: "icon",
                  },
                  {
                    label: "Corporate Forms / Bylaws Minutes",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Corporate Forms / Bylaws Minutes\n" + "The Corporate Forms includes, customizable templates of documents needed for compliance, record-keeping and meeting business formalities, such as operating agreements, organizational minutes and bylaws. ",
                        },
                        {
                          header: "Corporate Forms:",
                          items: ["Bylaws", "Consent by Incorporator", "Resignation of Incorporator", "Waiver of Notice", "Minutes of an Organizational Meeting", "Consent in Lieu of Organizational Meeting", "Investment Representation Letter"],
                        },
                      ],
                    },
                  },
                  {
                    label: "+$30",
                    type: "checkbox",
                    value: 30,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Arizona State Filing Time",
                    variant: {
                      label: "4 WEEKS",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Arizona State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "12 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
    llc: {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 85,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "85",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 234,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "85",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 384,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "85",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "Frequency:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "No Annual Report  is due for LLCs at this time.",
                type: "label",
              },
            ],
            [
              {
                label: "Important: ",
                type: "label",
                style: { "font-weight": "bold", color: color.orange1 },
              },
              {
                label:
                  "Arizona requires that you publish the Articles of Incorpration in their entirety. The publication must be in a newspaper in general circulation in the county of the known place of business in Arizona for 3 consecutive publications. The publication must be filed within 60 days of the date of incorporation. The corporation may be subject to administrative dissolution if it fails to publish.",
                type: "label",
              },
            ],
            [
              {
                label: "Where do I publish the document?",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label:
                  "The A.C.C. does not endorse any particular newspaper, but, as a courtesy they provide a list of newspapers that have attested to the A.C.C. that they meet the statutory criteria for publishing documents. Upon publishing you will receive an Affidavit of Publication. It is not required, but you may send the Affidavit of Publication you receive from the newspaper to the A.C.C. for placement into the entity’s public record. If you do not submit the Affidavit of Publication to the A.C.C. you should retain it as part of your entity's permanent record.",
                type: "label",
              },
            ],
            [
              {
                label: "",
                type: "label",
              },
              {
                label: "(We do not assist in the filing of the Publication Requirement)",
                type: "label",
                style: { "font-weight": "bold" },
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "LLC Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Organizer",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Organizer is a document signed by the Organizer which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Organizer’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Organization.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "LLC Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Preparation and Filing of IRS Form 2553",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Many LLCs elect to be treated as an S-Corporation for tax purposes, as such all Gold and Platinum LLC orders include the preparation and filing of the IRS Form 2553.\n" +
                            "If you decide that this is the right tax classification for your LLC you can initiate the preparation and filing of the IRS Form 2553 directly from the services tab of your client dashboard.\n" +
                            "The form will be generated upon request at which time a request will be for the digital signature from the members. Upon receipt of the signature(s) the form will be submitted directly to the IRS.",
                        },
                        {
                          text: "Please note the Form 2553 is time sensitive and must be filed with the IRS within 75 days of your corporation filing date in order to obtain S-corporation tax status for the current year. ",
                          header: "IMPORTANT",
                        },
                        {
                          text: "Electing to be taxed as an S-Corp can save you thousands of dollars a year. It’s best to consult with a tax specialist to see if this is the right business move for you (we offer a free 30-minute tax consultation with every order). ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Operating Agreement",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The operating agreement for a limited liability company is a private agreement between the members/owners of the LLC, and it details the ownership, rights, and responsibilities of the LLC members. The operating agreement we provide for your use covers all of the most commonly used provisions and will be customized based on your specific company information provided during the placing of your order. ",
                        },
                        {
                          text: "Perhaps the most important document for an LLC, this is where you will “put in stone” your LLC’s rules and structure that will create a framework for your entire business. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$40",
                    type: "checkbox",
                    value: 40,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Arizona State Filing Time",
                    variant: {
                      label: "4 WEEKS",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Arizona State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "12 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
  },
  AR: {
    "c-corporation": {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 50,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=AR`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "50",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 199,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=AR`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "50",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 349,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=AR`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "50",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "Frequency:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Annually",
                type: "label",
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "August 1st",
                type: "label",
              },
            ],
            [
              {
                label: "Filing Fee:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "$150",
                type: "label-boxed",
                className: "highlight",
                textCenter: true,
              },
            ],
            [
              {
                label: "Note:",
                type: "label",
                style: {
                  "font-weight": "bold",
                },
              },
              {
                label: "Initial report due May 1st of the year following formation or qualification.",
                type: "label",
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "Corporation Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Incorporator",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Incorporator is a document signed by the Incorporator which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Incorporator’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Incorporation.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "Corporation Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    label: "Corporation Bylaws",
                    type: "icon",
                  },
                  {
                    label: "Corporation Bylaws",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The bylaws of a corporation are an internal document that details the operating rules for the corporation. The bylaws of a corporation are typically adopted at the organizational meeting of the board of directors after the corporation has been filed with the state. The bylaws we will provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                        },
                        {
                          text: "Your bylaws will act as “internal rules,” ensuring that everything runs smoothly and keeps all employees, executives and shareholders in agreement and on the same page. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$30",
                    type: "checkbox",
                    value: 30,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    label: "Corporation Organizational Meeting Minutes",
                    type: "icon",
                  },
                  {
                    label: "Corporation Organizational Meeting Minutes",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            'After the corporation has been filed with the state, the directors of the corporation are required to have a "first," or organizational meeting to take care of things such as issuing shares of stock, adopting bylaws, appointing officers, etc., and keeping minutes of directors meetings and corporate resolutions is a required part of your internal corporate compliance. The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ',
                        },
                        {
                          text: "The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Arkansas State Filing Time",
                    variant: {
                      label: "7 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Arkansas State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "2 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
    "s-corporation": {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 50,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=AR`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "50",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 199,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=AR`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "50",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 349,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=AR`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "50",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "Frequency:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Annually",
                type: "label",
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "August 1st",
                type: "label",
              },
            ],
            [
              {
                label: "Filing Fee:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "$150",
                type: "label-boxed",
                className: "highlight",
                textCenter: true,
              },
            ],
            [
              {
                label: "Note:",
                type: "label",
                style: {
                  "font-weight": "bold",
                },
              },
              {
                label: "Initial report due May 1st of the year following formation or qualification.",
                type: "label",
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "Corporation Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Incorporator",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Incorporator is a document signed by the Incorporator which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Incorporator’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Incorporation.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "Corporation Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    label: "Corporation Bylaws",
                    type: "icon",
                  },
                  {
                    label: "Corporation Bylaws",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The bylaws of a corporation are an internal document that details the operating rules for the corporation. The bylaws of a corporation are typically adopted at the organizational meeting of the board of directors after the corporation has been filed with the state. The bylaws we will provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                        },
                        {
                          text: "Your bylaws will act as “internal rules,” ensuring that everything runs smoothly and keeps all employees, executives and shareholders in agreement and on the same page. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$30",
                    type: "checkbox",
                    value: 30,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    label: "Corporation Organizational Meeting Minutes",
                    type: "icon",
                  },
                  {
                    label: "Corporation Organizational Meeting Minutes",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            'After the corporation has been filed with the state, the directors of the corporation are required to have a "first," or organizational meeting to take care of things such as issuing shares of stock, adopting bylaws, appointing officers, etc., and keeping minutes of directors meetings and corporate resolutions is a required part of your internal corporate compliance. The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ',
                        },
                        {
                          text: "The organizational minutes we provide for your use cover all of the most commonly used provisions and will be customized based on your specific company information. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Arkansas State Filing Time",
                    variant: {
                      label: "7 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Arkansas State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "2 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
    nonprofit: {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 50,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&entityState=AR`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "50",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 199,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&entityState=AR`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "50",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 349,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&entityState=AR`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "50",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "Frequency:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Annually",
                type: "label",
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "August 1st",
                type: "label",
              },
            ],
            [
              {
                label: "Filing Fee:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "$150",
                type: "label-boxed",
                className: "highlight",
                textCenter: true,
              },
            ],
            [
              {
                label: "Note:",
                type: "label",
                style: {
                  "font-weight": "bold",
                },
              },
              {
                label: "Initial report due May 1st of the year following formation or qualification.",
                type: "label",
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "Corporation Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Incorporator",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Incorporator is a document signed by the Incorporator which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Incorporator’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Incorporation.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "Corporation Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    label: "Corporate Forms / Bylaws Minutes",
                    type: "icon",
                  },
                  {
                    label: "Corporate Forms / Bylaws Minutes",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Corporate Forms / Bylaws Minutes\n" + "The Corporate Forms includes, customizable templates of documents needed for compliance, record-keeping and meeting business formalities, such as operating agreements, organizational minutes and bylaws. ",
                        },
                        {
                          header: "Corporate Forms:",
                          items: ["Bylaws", "Consent by Incorporator", "Resignation of Incorporator", "Waiver of Notice", "Minutes of an Organizational Meeting", "Consent in Lieu of Organizational Meeting", "Investment Representation Letter"],
                        },
                      ],
                    },
                  },
                  {
                    label: "+$30",
                    type: "checkbox",
                    value: 30,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Arkansas State Filing Time",
                    variant: {
                      label: "7 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Arkansas State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "2 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
    llc: {
      priceOptions: [
        {
          header: "Silver",
          variant: "",
          text: "Our core features for\n" + "the lowest price",
          price: 50,
          image: "",
          button: {
            text: "Get the Silver package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AR`,
          },
          fees: [
            {
              text: "Package fee",
              price: "0",
            },
            {
              text: "State fee",
              price: "50",
            },
          ],
          include: "The Basic Silver Services includes:",
          list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
          fee: "",
          savings: "",
        },
        {
          header: "Gold",
          variant: "most popular",
          text: "Comprehensive features to get your business started",
          price: 199,
          image: "",
          button: {
            text: "Get the Gold package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AR`,
          },
          fees: [
            {
              text: "Package fee",
              price: "149",
            },
            {
              text: "State fee",
              price: "50",
            },
          ],
          include: "The Silver Package, and:",
          list: ["EIN Business Tax Number", "IRS Form 2553", "Operating Agreement", "Banking Resolution", "Express Shipping", "Lifetime Company Alerts", "Online Access Dashboard", "Unlimited Phone & Email Support", "Business Banking Account", "Business Tax Consultation"],
          fee: "",
          savings: "SAVE $468",
        },
        {
          header: "Platinum",
          variant: "Best value",
          text: "Full service features at the best value",
          price: 349,
          image: "",
          button: {
            text: "Get the Platinum package",
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AR`,
          },
          fees: [
            {
              text: "Package fee",
              price: "299",
            },
            {
              text: "State fee",
              price: "50",
            },
          ],
          include: "The Gold package, and:",
          list: ["Business Contract Templates", "Expedited Filing", "FedEx Delivery", "Domain Name + Business Email"],
          fee: "",
          savings: "SAVE $908",
        },
      ],
      requirements: {
        header: "Annual Report",
        table: {
          headers: false,
          rows: [
            [
              {
                label: "Frequency:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "Annually",
                type: "label",
              },
            ],
            [
              {
                label: "Due Date:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "August 1st",
                type: "label",
              },
            ],
            [
              {
                label: "Filing Fee:",
                type: "label",
                style: { "font-weight": "bold" },
              },
              {
                label: "$150",
                type: "label-boxed",
                className: "highlight",
                textCenter: true,
              },
            ],
            [
              {
                label: "Note:",
                type: "label",
                style: {
                  "font-weight": "bold",
                },
              },
              {
                label: "Initial report due May 1st of the year following formation or qualification.",
                type: "label",
              },
            ],
          ],
          rowColumnsDef: "1fr 2fr",
          headerColumnsDef: "1fr 2fr",
        },
        tableScheme: "blue3",
      },
      services: {
        header: "All plans include:",
        text: "No matter if you run a small business, startup, or a large company. Our pricing is designed to help you scale your business and do high-quality work every time you need to get things done. ",
        benefits: [
          {
            label: "Setup Business Banking Account",
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
            header: "LLC Services",
            tableScheme: "green3",
            table: {
              headers: [
                {
                  label: "Entity Type",
                  type: "label",
                  header: true,
                },
                {
                  label: "Silver",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Gold",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
                {
                  label: "Platinum",
                  textCenter: true,
                  type: "label",
                  header: true,
                },
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
                    type: "icon",
                  },
                  {
                    label: "Prepare & File the Articles of Organization",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We will review the information, prepare your organization documents, and send them\n" + "to the state of formation.",
                        },
                        {
                          text: " Every LLC must have Articles of organization — they are often\n" + "required to show proof of your business formation status to banks and other entities.\n",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Name Availability Searches",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We conduct a thorough name search with the state corporation database and will\n" + "work with you as long as needed to find an available company name.",
                        },
                        {
                          text: "Two businesses cannot be named the same thing, so you need to find a business name unique to you.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Registered Agent Service for 1 Full Year",
                    type: "label",
                    variant: {
                      label: "SPECIAL OFFER",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Every new incorporation order is eligible for 1 full year of FREE Registered Agent service.",
                        },
                        {
                          text: "As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is\n" + "an invaluable\n" + "service that will eliminate junk mail and limit personal information available to third parties.",
                        },
                        {
                          text: " Registered Agent service is included on all packages for 1 full year\n" + "not the typical 6 months that some of our competitors advertise. At the end of the year you will be invoiced and have the option to\n" + "renew or cancel service.",
                          header: "Important",
                        },
                        {
                          text: "The annual fee for Registered Agent service is $119",
                        },
                        {
                          header: "Why You Need It:",
                          text: " It is required for LLCs to have a Registered Agent. It is also an invaluable service that will\n" + "eliminate junk mail and limit personal information available to third parties.",
                        },
                      ],
                    },
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Setup Business Banking Account",
                    variant: {
                      label: "SPECIAL OFFER ($450 value)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "We teamed up with Bank of America® to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Incfile clients have the opportunity to receive an exclusive offer from Bank of America® to help establish your small business banking account.",
                        },
                        {
                          text: "It’s important to keep your personal & business expenses separate when you have an an LLC.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Statement and Resignation of the Organizer",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Statement and Resignation of the Organizer is a document signed by the Organizer which identifies the initial members of the Limited Liability Company. A signed statement will be included with your filing packet and can be used to assist in the establishment of a business checking account.",
                        },
                        {
                          text: "This document relinquishes the Organizer’s duties and provides official documentation stating who the Members (and Managers, if applicable) are. This might be required to establish a business bank account or show proof of ownership to other Organization.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Unlimited Phone & Email Support",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document. ",
                        },
                        {
                          text: "Sometimes just picking up the phone and getting a quick answer from a business specialist is good for the soul. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Order Status Tracking",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "VIEW EXAMPLE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "This feature allows you to review the status of your order in real time.",
                        },
                        {
                          text: "State filing times can be longer than expected, so this gives you full access to understanding your order status.",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Tax Consultation",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 30 minutes consultation with a certified tax professional who can answer questions regarding the tax commitments of your company. ",
                        },
                        {
                          text: "Get advice right from the start so you’re not stuck doing something that could cost you additional tax dollars. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Online Access to Incorporation Documents",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time. ",
                        },
                        {
                          text: "So you have a one-stop-shop for all your business management needs — beyond just your business formation — for the lifetime of your LLC. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Next Business Day Processing",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "We strive to ensure that every order received is prepared and forwarded to the state within 1 business day. ",
                        },
                        {
                          text: "State filing times can already feel long sometimes, we don’t want to contribute to the wait. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Lifetime Company Alerts",
                    type: "label",
                    variant: {
                      label: "Email + Text Message",
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "Never miss an important filing date again. Lifetime Company Alerts is designed to send email and text notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc. ",
                        },
                        {
                          text: "Who has time to track the date you need to review your Annual Report, Business Licenses and other official documents? We got you. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Website",
                    type: "label",
                    variant: {
                      label: [
                        {
                          text: "SPECIAL OFFER | FIND OUT MORE",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.orange1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text: "An email will be sent shortly after the completion of your order. You have the option to redeem a website that will be user-friendly on all devices and give your business a professional appearance.",
                        },
                        {
                          header: "All free websites are subject to Xoopah.com's $20/month hosting rates.",
                        },
                        {
                          text: "Your business website is your digital business card — don’t lose customers by appearing out of date. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
          },
          {
            header: "LLC Premium Services",
            tableScheme: "green3",
            table: {
              headers: false,
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
                    type: "icon",
                  },
                  {
                    label: "Employer Identification Number/ Tax ID",
                    type: "label",
                    variant: {
                      label: "(Highly Recommended)",
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    subcontent: {
                      items: [
                        {
                          text:
                            "An Employer Identification Number (EIN) is a nine-digit number that is assigned by the IRS and used to identify taxpayers. Providing an EIN is required to open a business bank account and is required to file business tax returns. We will apply and obtain your EIN from the IRS electronically. This option is the fastest way to obtain the EIN. ",
                        },
                        {
                          text: "An EIN is required to open a business bank account and to file business tax returns. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    className: "highlight",
                  },
                  {
                    label: "Free",
                    type: "label-boxed",
                    className: "highlight",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Preparation and Filing of IRS Form 2553",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "Many LLCs elect to be treated as an S-Corporation for tax purposes, as such all Gold and Platinum LLC orders include the preparation and filing of the IRS Form 2553.\n" +
                            "If you decide that this is the right tax classification for your LLC you can initiate the preparation and filing of the IRS Form 2553 directly from the services tab of your client dashboard.\n" +
                            "The form will be generated upon request at which time a request will be for the digital signature from the members. Upon receipt of the signature(s) the form will be submitted directly to the IRS.",
                        },
                        {
                          text: "Please note the Form 2553 is time sensitive and must be filed with the IRS within 75 days of your corporation filing date in order to obtain S-corporation tax status for the current year. ",
                          header: "IMPORTANT",
                        },
                        {
                          text: "Electing to be taxed as an S-Corp can save you thousands of dollars a year. It’s best to consult with a tax specialist to see if this is the right business move for you (we offer a free 30-minute tax consultation with every order). ",
                          header: "Why You Need It",
                        },
                      ],
                    },
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
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Operating Agreement",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The operating agreement for a limited liability company is a private agreement between the members/owners of the LLC, and it details the ownership, rights, and responsibilities of the LLC members. The operating agreement we provide for your use covers all of the most commonly used provisions and will be customized based on your specific company information provided during the placing of your order. ",
                        },
                        {
                          text: "Perhaps the most important document for an LLC, this is where you will “put in stone” your LLC’s rules and structure that will create a framework for your entire business. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$40",
                    type: "checkbox",
                    value: 40,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Banking Resolution",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The banking resolution is a resolution which may be adopted by the members to authorize the opening of a bank account, and it also designates who has signature authority for the bank account. ",
                        },
                        {
                          text: "This document will authorize the opening of a bank account and designate who has signature authority on the account ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$35",
                    type: "checkbox",
                    value: 35,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Business Contract Templates",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Your search for the right legal template stops here. Get access to 25+ high quality legal documents written by a business attorney to help aid in keeping your business contractually protected. ",
                        },
                        {
                          text: "It’s important to keep your business contractually protected, but it’s hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    label: "+$150",
                    type: "checkbox",
                    value: 150,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                ],
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
                    type: "icon",
                  },
                  {
                    label: "Free Domain Name & Email Service",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "Platinum packages are eligible for 1 full year of FREE domain name & email service. At the end of the year you will be invoiced and have the option to renew or cancel service. ",
                        },
                        {
                          text: "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail. ",
                          header: "Why You Need It",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "label-boxed",
                    label: "FREE",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              headerColumnsDef: "5fr 150px 150px 150px",
              rowColumnsDef: "100px 5fr 150px 150px 150px",
            },
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
                    type: "icon",
                  },
                  {
                    label: "Gold Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "The Business Formation Kit is a professional box to organize your company documents. Each quality box is personalized with the name of your company on the spine and includes easy to use tabs and a transfer ledger. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$99",
                    type: "checkbox",
                    value: 99,
                    textCenter: true,
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    type: "icon",
                  },
                  {
                    label: "Platinum Kit",
                    variant: {
                      label: [
                        {
                          text: "View Kit Image",
                          url: "/",
                        },
                      ],
                      style: {
                        "font-weight": "bold",
                        color: color.blue1,
                      },
                    },
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text:
                            "The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the insert. It includes a metal die-cast corporate embossing seal, customized with the name of your company as well as the date and state of formation spine. ",
                        },
                        {
                          text: "Keep all of your LLC documents in one easy-to-locate spot ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "minus",
                  },
                  {
                    type: "checkmark",
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
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
                    type: "icon",
                  },
                  {
                    label: "Standard Arkansas State Filing Time",
                    variant: {
                      label: "7 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "minus",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Expedited Arkansas State Filing Time",
                    variant: {
                      icon: "expedited-rocket-4402",
                      label: "2 Business Days",
                      style: {
                        color: color.orange1,
                        "font-weight": "bold",
                      },
                    },
                    type: "label",
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
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          {
            header: "MAILING OPTIONS",
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
                    type: "icon",
                  },
                  {
                    label: "Electronic Delivery",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "As a courtesy, your filed documents will be made available online from your client dashboard immediately upon the state returning the filed documents. You will receive a notification when your company formation documents are available. (Included with all packages) ",
                        },
                        {
                          header: "Why You Need It:",
                          text: "Never lose a document or need to keep a paper trail again — anytime you need anything you’ve purchased, it will be available to you in your dashboard ",
                        },
                      ],
                    },
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
                  {
                    type: "checkmark",
                  },
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
                    icon: "expedited-california-filling-time-8551",
                    label: "Gold Kit",
                    type: "icon",
                  },
                  {
                    label: "Express Shipping (Tracking Number Included)",
                    type: "label",
                    subcontent: {
                      items: [
                        {
                          text: "This option uses express shipping to deliver completed documents within 1 - 3 business days. (Included with Gold and Platinum Package) ",
                        },
                        {
                          text: "In a rush to set up your business and get started with making money? We got you. ",
                          header: "Why You Need It:",
                        },
                      ],
                    },
                  },
                  {
                    label: "+$25",
                    type: "checkbox",
                    value: 25,
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                  {
                    label: "FREE",
                    type: "label-boxed",
                    className: "highlight",
                    textCenter: true,
                  },
                ],
              ],
              rowColumnsDef: "100px 5fr 150px 150px 150px",
              style: {
                width: "100%",
              },
            },
          },
          /* Więcej tabel to all options include podaj tu */
        ],
      },
    },
  },
};

export const trusted = {
  header: "Trusted by over 500,000+ business owners since 2004.",
  text: "We have dedicated much time and effort to being fully transparent by providing you exact final pricing before getting started. We also inform you of any necessary annual \n" + "filings and fees required by the state.",
  cards: [
    {
      image: "entrepreneur-360-6691",
      header: "Enterpreneur 360 (2019)",
      text: "Best Entrepreneurial Companies\n" + "in America 2019",
      title: "Enterpreneur 360 (2019)",
      background: color.white,
      link: {
        url: "/",
      },
    },
    {
      image: "stevie-winner-2019-gold-9586",
      header: "LLC State Information",
      text: "Best Business Formation Company \n" + "in 2019",
      title: "Gold 2019 Stevie Winner",
      background: color.white,
      link: {
        url: "/",
      },
    },
    {
      image: "stevie-winner-2019-bronze-0391",
      header: "LLC State Information",
      text: "Best Entrepreneurial Companies\n" + "in America 2016",
      title: "Bronze 2019 Stevie Winner",
      background: color.white,
      link: {
        url: "/",
      },
    },
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
    },
  },
};
